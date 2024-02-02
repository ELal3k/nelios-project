"use client"
import { createContext, useState, useContext } from "react"

const AppContext = createContext()

export function AppWrapper({ children }) {
  const [showFilter, setShowFilter] = useState(false)
  const [sortPriceOption, setSortPriceOption] = useState("default")
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(1000)

  return (
    <AppContext.Provider
      value={{
        showFilter,
        setShowFilter,
        sortPriceOption,
        setSortPriceOption,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
