"use client"
import { createContext, useState, useContext } from "react"

const AppContext = createContext(undefined)

export function AppWrapper({ children }) {
  let [name, setName] = useState("alex")

  return (
    <AppContext.Provider value={{ name, setName }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
