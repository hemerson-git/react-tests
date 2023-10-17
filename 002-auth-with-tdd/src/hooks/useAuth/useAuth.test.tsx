import { act, renderHook } from "@testing-library/react";
import { useAuth } from "./";

/**
 * logout();
 * login({ login, password })
 * -> void
 * -> error
 *
 * return
 * -> user
 * -> isAuthenticated
 * -> login
 * -> logout
 */

describe("useAuth", () => {
  it("should returns default values", () => {
    const { result } = renderHook(() => useAuth());

    expect(result.current.user).toBe(null);
    expect(result.current.isAuthenticated).toBe(false);
    expect(typeof result.current.login).toBe("function");
    expect(typeof result.current.logout).toBe("function");
  });

  it("should isAuthenticated to be false and user to be null when logou was called", () => {
    const { result } = renderHook(() => useAuth());

    act(() => {
      result.current.logout();
    });

    expect(result.current.user).toBe(null);
    expect(result.current.isAuthenticated).toBe(false);
  });

  it("should isAuthenticated to be true and user to contains information when the login function was called", () => {
    const { result } = renderHook(() => useAuth());

    act(() => {
      result.current.login({ login: "john", password: "password" });
    });

    expect(result.current.user).toMatchObject({
      name: "John",
      permissions: ["all"],
      isAdmin: true,
      token: "token",
    });

    expect(result.current.isAuthenticated).toBe(true);
  });
});
