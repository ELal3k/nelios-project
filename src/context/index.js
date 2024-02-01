"use client"
import { createContext, useState, useContext } from "react"

const AppContext = createContext(undefined)

export function AppWrapper({ children }) {
  const [showFilter, setShowFilter] = useState(false)

  return (
    <AppContext.Provider value={{ showFilter, setShowFilter }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
