import { createContext, useContext, useState } from "react";

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [progess, setProgress] = useState(1);

  const updateProgress = (value) => {
    setProgress(value);
  };

  return (
    <ProgressContext.Provider value={{ progess, updateProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
};
