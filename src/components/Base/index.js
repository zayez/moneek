import "./index.css"

import SwapIcon from "../../icons/SwapIcon"
import getCurrencies from "../../helpers/getCurrencies"
const Currencies = getCurrencies()

function Base({ baseCurrency, setBaseValue, setBaseCurrency }) {
  return (
    <div className="base">
      <div className="container">
        <h2>Base</h2>
        <div className="form">
          <input
            id="txtBase"
            type="text"
            placeholder="Type a value"
            onChange={(e) => setBaseValue(e.target.value)}
          />
          <select
            value={baseCurrency}
            onChange={(e) => setBaseCurrency(e.target.value)}
          >
            {Currencies.map((currency, i) => (
              <option key={i} value={currency.abbr}>
                {currency.abbr.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="icon-wrapper">
        <SwapIcon />
      </div>
    </div>
  )
}

export default Base
