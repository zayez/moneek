import "./index.css"

import { Currencies } from "../../types/Currency"

function Base({ baseCurrency, setBaseValue, setBaseCurrency }) {
  return (
    <div className="base-container">
      <h2>Base</h2>
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
            {currency.currency}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Base
