import "./index.css"
import { Currencies } from "../../types/Currency"

import { useEffect } from "react"

const baseUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies`

const Target = ({
  baseValue,
  targetValue,
  baseCurrency,
  targetCurrency,
  setTargetValue,
  setTargetCurrency,
}) => {
  useEffect(async () => {
    const url = `${baseUrl}/${baseCurrency.toLowerCase()}/${targetCurrency.toLowerCase()}.json`

    if (baseValue !== "") {
      const data = await fetchData(url)
      const quote =
        data[baseCurrency.toLowerCase()] || data[targetCurrency.toLowerCase()]
      setTargetValue(baseValue * quote)
    } else {
      setTargetValue("")
    }
  }, [baseValue, targetCurrency, baseCurrency])

  return (
    <div className="target">
      <h2>Target</h2>
      <input type="text" value={targetValue} readOnly={true} />
      <select
        value={targetCurrency}
        onChange={(e) => setTargetCurrency(e.target.value)}
      >
        {Currencies.map((currency, i) => (
          <option key={i} value={currency.abbr}>
            {currency.currency}
          </option>
        ))}
      </select>
    </div>
  )
}

const fetchData = async (url) => {
  const res = await fetch(url)
  const data = await res.json()
  return data
}
export default Target
