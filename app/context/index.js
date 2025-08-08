import { createContext } from "react";


 const JobContext = createContext();
 const AuthContext = createContext(null);

export {
  JobContext ,
  AuthContext
}