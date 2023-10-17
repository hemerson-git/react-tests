import { getLocalStorage, setLocalStorage } from "./page";

describe("LocalStorage", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("should return item from localStorage", () => {
    window.localStorage.setItem("key", JSON.stringify("Hemerson"));
    const result = getLocalStorage("key");
    expect(result).toStrictEqual("Hemerson");
  });

  it("should set a item in the localStorage", () => {
    setLocalStorage("key", "Hemerson");
    const result = localStorage.getItem("key");
    expect(JSON.parse(result!)).toStrictEqual("Hemerson");
  });
});
