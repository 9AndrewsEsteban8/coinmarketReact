import { useEffect,useState } from 'react';
import './App.css';
import axios from 'axios';
import TableCoin from './components/TableCoin';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Convert from './components/Convert';

function App() {

  const [coins, setcoins] = useState([])
  const[search,setSearch]=useState('')
  const getData = async () => {
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1")
    console.log(res.data)
    setcoins(res.data)
  }
  useEffect(() =>{
    getData()
  }, [])

  return (
    <div className="container">
      <div className='row'>
      <input type='text' placeholder='Seacrh a  coin' className='buscador' onChange={e =>setSearch(e.target.value)}></input>
      {/* <Convert/> */}
      <TableCoin coins={coins} search={search}/>
      </div>
    </div>
  );
}

export default App;
