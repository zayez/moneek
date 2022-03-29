import { useState } from "react"
import "./index.css"
import Header from "../Header"
import Base from "../Base"
import Target from "../Target"
import Currency from "../../types/Currency"

function App() {
  const [baseValue, setBaseValue] = useState("")
  const [targetValue, setTargetValue] = useState("")

  const [baseCurrency, setBaseCurrency] = useState(
    Currency.Real.abbr.toLowerCase()
  )
  const [targetCurrency, setTargetCurrency] = useState(
    Currency.Dolar.abbr.toLowerCase()
  )

  const handleSwap = () => {
    const temp = targetCurrency
    setTargetCurrency(baseCurrency)
    setBaseCurrency(temp)
  }

  return (
    <div className="app">
      <Header />
      <Base
        baseValue={baseValue}
        baseCurrency={baseCurrency}
        setBaseValue={setBaseValue}
        setBaseCurrency={setBaseCurrency}
        handleSwap={handleSwap}
      />
      <Target
        baseValue={baseValue}
        baseCurrency={baseCurrency}
        targetValue={targetValue}
        targetCurrency={targetCurrency}
        setTargetValue={setTargetValue}
        setTargetCurrency={setTargetCurrency}
      />
    </div>
  )
}

export default App
