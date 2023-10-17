import { useState } from "react";

type LoginProps = {
  login: string;
  password: string;
};

type UserProps = {
  name: string;
  permissions: string[];
  isAdmin: boolean;
  token: string;
};

export const useAuth = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const isAuthenticated = !!user;

  function login({ login, password }: LoginProps) {
    const response = {
      name: "John",
      permissions: ["all"],
      isAdmin: true,
      token: "token",
    };

    setUser(response);
  }

  function logout() {
    // remove tokens from localStorage or cookies...

    setUser(null);
  }

  return {
    user,
    isAuthenticated,
    login,
    logout,
  };
};
