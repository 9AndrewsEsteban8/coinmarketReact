import { useEffect,useState } from 'react';
import './App.css';
import axios from 'axios';
import TableCoin from './components/TableCoin';

function App() {

  const [coins, setcoins] = useState([])
  const getData = async () => {
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1")
    console.log(res.data)
    setcoins(res.data)
  }
  useEffect(() =>{
    getData()
  }, [])

  return (
    <div className="container">
      <div className='row'>
      <TableCoin coins={coins}/>
      </div>
    </div>
  );
}

export default App;
