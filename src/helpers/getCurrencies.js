import CurrenciesObj from "../lib/currencies.json"

const getCurrencies = () => {
  const arr = Object.keys(CurrenciesObj).map((currency) => {
    return { abbr: currency, currency: CurrenciesObj[currency] }
  })

  console.log(arr)
  return arr
}

export default getCurrencies
