import "./index.css"

import { useEffect } from "react"
import getCurrencies from "../../helpers/getCurrencies"

const baseUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies`
const Currencies = getCurrencies()

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
      setTargetValue((baseValue * quote).toFixed(2))
    } else {
      setTargetValue("")
    }
  }, [baseValue, targetValue, targetCurrency, baseCurrency])

  return (
    <div className="target">
      <div className="container">
        <h2>Target</h2>
        <div className="form">
          <input
            id="txtTarget"
            type="text"
            value={targetValue}
            readOnly={true}
            disabled
          />
          <select
            value={targetCurrency}
            onChange={(e) => setTargetCurrency(e.target.value)}
          >
            {Currencies.map((currency, i) => (
              <option key={i} value={currency.abbr}>
                {currency.abbr.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

const fetchData = async (url) => {
  const res = await fetch(url)
  const data = await res.json()
  return data
}
export default Target
