import "./index.css"

import Header from "../Header"
import Base from "../Base"
import Target from "../Target"

import { useState } from "react"

import { Currency } from "../../types/Currency"

function App() {
  const [baseValue, setBaseValue] = useState("")
  const [targetValue, setTargetValue] = useState("")

  const [baseCurrency, setBaseCurrency] = useState(Currency.Real.abbr)
  const [targetCurrency, setTargetCurrency] = useState(Currency.Dolar.abbr)

  return (
    <div className="App">
      <Header />
      <Base
        baseValue={baseValue}
        baseCurrency={baseCurrency}
        setBaseValue={setBaseValue}
        setBaseCurrency={setBaseCurrency}
      />
      <Target
        baseValue={baseValue}
        baseCurrency={baseCurrency}
        targetValue={targetValue}
        targetCurrency={targetCurrency}
        targetCurrency={targetCurrency}
        setTargetValue={setTargetValue}
        setTargetCurrency={setTargetCurrency}
      />
    </div>
  )
}

export default App
