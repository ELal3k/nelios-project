"use client"
import { createContext, useState, useContext } from "react"

const AppContext = createContext()

export function AppWrapper({ children }) {
  const [showFilter, setShowFilter] = useState(false)
  const [sortPriceOption, setSortPriceOption] = useState("default")

  return (
    <AppContext.Provider
      value={{ showFilter, setShowFilter, sortPriceOption, setSortPriceOption }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
