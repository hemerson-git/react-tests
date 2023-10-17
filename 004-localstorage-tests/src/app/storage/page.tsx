"use client";

import { useState } from "react";

export function getLocalStorage(key: string) {
  const data = localStorage.getItem(key);

  return JSON.parse(data!);
}

export function setLocalStorage(key: string, value: string) {
  const data = JSON.stringify(value);

  return localStorage.setItem(key, data);
}

const Storage = () => {
  const [data, setData] = useState();

  function handleGetLocalStorage() {
    const item = getLocalStorage("item_key");

    setData(item);
  }

  function handleSetLocalStorage() {
    setLocalStorage("item_key", JSON.stringify("Hemerson"));
  }

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <h2 className="font-bold text-4xl mb-4">Storage</h2>

      <h3>{data}</h3>

      <footer className="flex gap-3">
        <button
          onClick={handleSetLocalStorage}
          className="bg-purple-400 px-4 py-2 rounded-sm transition-opacity hover:opacity-80"
        >
          Set
        </button>

        <button
          onClick={handleGetLocalStorage}
          className="bg-purple-400 px-4 py-2 rounded-sm transition-opacity hover:opacity-80"
        >
          Get
        </button>
      </footer>
    </div>
  );
};

export default Storage;
