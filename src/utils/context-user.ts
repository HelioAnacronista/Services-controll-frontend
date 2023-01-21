import { createContext } from "react";
import { UserDTO } from "../models/user";

//Create type context global
export type ContextUserType = {
  contextUser: UserDTO | undefined;
  setContextUser: (user: UserDTO | undefined) => void;
};

//Create context global
export const ContextUser = createContext<ContextUserType>({
  contextUser: undefined,
  setContextUser: () => {},
});
