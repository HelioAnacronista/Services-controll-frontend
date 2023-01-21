import { useState } from "react";
import { Route, Routes } from "react-router";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";

import { PrivateRoute } from "./components/PrivateRoute";
import { AccessTokenPayloadDTO } from "./models/auth";
import { UserDTO } from "./models/user";
import Category from "./routers/Category";
import CategoryFrom from "./routers/Category/CategoryFrom";
import Client from "./routers/Client";
import ClientFrom from "./routers/Client/ClientFrom";
import Dashboard from "./routers/Dashboard";
import Expense from "./routers/Expense";
import ExpenseFrom from "./routers/Expense/ExpenseFrom";
import Home from "./routers/Home";
import Login from "./routers/Login";
import Work from "./routers/Works";
import WorkDetails from "./routers/Works/WorkDetails";
import WorkFrom from "./routers/Works/WorkFrom";
import { Container } from "./styles/global";
import { ContextSearch } from "./utils/context-search";
import { ContextToken } from "./utils/context-token";
import { ContextUser } from "./utils/context-user";
import { history } from "./utils/history";

function App() {
  const [contextSearch, setContextSearch] = useState<any>();

  const [contextTokenPayload, setContextTokenPayload] =
    useState<AccessTokenPayloadDTO>();

  const [contextUser, setContextUser] = useState<UserDTO>();

  return (
    <>
      <Container />
      <ContextToken.Provider
        value={{ contextTokenPayload, setContextTokenPayload }}
      >
        <ContextUser.Provider value={{ contextUser, setContextUser }}>
          <ContextSearch.Provider value={{ contextSearch, setContextSearch }}>
            <HistoryRouter history={history}>
              <Routes>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="" element={<Home></Home>}>
                  <Route index element={<Dashboard />} />

                  <Route
                    path="category"
                    element={<Category params={contextSearch} />}
                  />

                  <Route
                    path="client"
                    element={<Client params={contextSearch} />}
                  />

                  <Route
                    path="work"
                    element={<Work params={contextSearch} />}
                  />
                  <Route
                    path="work-details/:workId"
                    element={<WorkDetails />}
                  />

                  <Route
                    path="expense"
                    element={<Expense params={contextSearch} />}
                  />

                  <Route
                    path="expense/:expenseId"
                    element={
                      <PrivateRoute roles={["ROLE_ADMIN"]}>
                        <ExpenseFrom />
                      </PrivateRoute>
                    }
                  />

                  <Route
                    path="client/:clientId"
                    element={
                      <PrivateRoute roles={["ROLE_ADMIN"]}>
                        <ClientFrom />
                      </PrivateRoute>
                    }
                  />

                  <Route
                    path="category/:categoryId"
                    element={
                      <PrivateRoute roles={["ROLE_ADMIN"]}>
                        <CategoryFrom />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="work/:workId"
                    element={
                      <PrivateRoute roles={["ROLE_ADMIN"]}>
                        <WorkFrom />
                      </PrivateRoute>
                    }
                  />
                </Route>
              </Routes>
            </HistoryRouter>
          </ContextSearch.Provider>
        </ContextUser.Provider>
      </ContextToken.Provider>
    </>
  );
}

export default App;
