import React, { createContext, useState } from "react";

type AuthUser = {
  email: string;
  accessToken: string;
  username: string;
};

type UserContextProviderType = {
  children: React.ReactNode;
};

export type UserContextType = {
  user: any;
  setUser: any;
};

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderType) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
