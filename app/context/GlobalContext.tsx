'use client';

import React, { createContext, useContext, useState } from 'react';

interface GlobalContextType {
  state: Record<string, any>;
  setState: (key: string, value: any) => void;
  getState: (key: string) => any;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [state, setStateValue] = useState<Record<string, any>>({
    isShowBiosScreen: true,
    isLoading: false,
    isShowLoginScreen: false,
    
  });

  const setState = (key: string, value: any) => {
    setStateValue((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const getState = (key: string) => {
    return state[key];
  };

  return (
    <GlobalContext.Provider value={{ state, setState, getState }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobal must be used within GlobalProvider');
  }
  return context;
}
