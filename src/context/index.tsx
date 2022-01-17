import React from "react";

interface IAppContext {
  teste: string
}

export const AppContext = React.createContext({} as IAppContext)

export const AppProvider: React.FC = (props) => {
  return (
    <AppContext.Provider value={{teste: 'Context Teste at home'}}>
      {props.children}
    </AppContext.Provider>
  )
}