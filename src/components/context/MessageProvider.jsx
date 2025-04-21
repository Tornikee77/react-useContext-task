import { createContext, useState } from "react";

export const MessageContext = createContext();

export function MessageProvider({ children }) {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  return (
    <MessageContext.Provider value={{ message, setMessage, error, setError }}>
      {children}
    </MessageContext.Provider>
  );
}
