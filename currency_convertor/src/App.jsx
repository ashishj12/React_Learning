import { useState } from "react";
import { InputBox } from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const { data: currencyInfo, loading, error } = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    const conversionRate = currencyInfo[to] || 0;
    setConvertedAmount(amount * conversionRate);
  };

  return (
    <div className="container">
      <h1>Currency Converter</h1>
      <div className="form-wrapper">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="input-group">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={setFrom}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>
          <div className="button-container">
            <button type="button" className="swap-button" onClick={swap}>
              Swap
            </button>
          </div>
          <div className="input-group">
            <InputBox
              label="To"
              amount={convertedAmount}
              onAmountChange={() => {}}
              currencyOptions={options}
              onCurrencyChange={setTo}
              selectCurrency={to}
              amountDisable
            />
          </div>
          <button type="submit" className="convert-button">
            Convert {amount} {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
