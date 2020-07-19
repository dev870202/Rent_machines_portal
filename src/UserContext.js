import React, { createContext, useState } from "react";
import catalog from "./catalog.json";

export const UserContext = createContext(null);

export const DataProvider = (props) => {
  const [data, setData] = useState(catalog);
  return (
    <UserContext.Provider value={[data, setData]}>
      {props.children}
    </UserContext.Provider>
  );
};
