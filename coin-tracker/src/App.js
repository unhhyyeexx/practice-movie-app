import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  const [cripto, setCripto] = useState(0)
  const [exchange, setExchange] = useState(0)

  const onSelect = event => {
    setCripto(event.target.value)
    }
  

  const onChange = (event) => {
    setExchange(
      cripto === 0 ? 0 : event.target.value / cripto
    )
    
  }

  useEffect(()=> {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(response=>response.json())
    .then((json) => {
          setCoins(json)
          setLoading(false)
        })     
  }, [])
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (

      <div>
        <select onChange={onSelect}>
          <option>--- Choose Coin ---</option>
          {coins.map((coin) => 
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
            </option>
            )
          }
        </select>

        <hr></hr>

        <div>
          budget     
          <input
            type="text"
            onChange={onChange}
            placeholder="Input your budget(USD)"
          />
        </div>

        <div>
          exchange  
          <input readOnly value={exchange} type="text"></input>
        </div>

      </div>
      )}
    </div>
  );
}

export default App;
