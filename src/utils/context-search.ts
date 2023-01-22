import { createContext } from "react";

export type QueryParamsSearchType = {
  contextSearch: String;
  setContextSearch: (contextSearch: String) => void;
};

export const ContextSearch = createContext<QueryParamsSearchType>({
  contextSearch: "",
  setContextSearch: () => {},
});
