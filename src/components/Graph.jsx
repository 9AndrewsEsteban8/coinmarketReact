import React,{useEffect,useState,useRef} from 'react'
import {Line} from 'react-chartjs-2'

import{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
    Legend
} from 'chart.js'

import moment from 'moment/moment'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
)

const Graph = (type = 1,coin="bitcoin", currency="USD",days="30",color="#84D99D") => {
  const charStyle = {
    border:{
      display:false
    },
    grid:{
      display:false
    },
    ticks:{
      display:false
    }
  }

  let url = `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${currency}&days=${days}&interval=daily`
  let data , options
  const chartRef = useRef(null);
  const [prices, setPrices] = useState()
  const [dates, setDates] = useState()
  const [gradient, setgradient] = useState()

  async function getData(){
    try{
      const response = await fetch(url)
      const json = await response.json()
      setPrices(json.prices.map(item => Math.round(item[1])))
      setDates(json.prices.map(item => moment.unix(item[0]).format('MM-DD-')))
    }
    catch(e){
      console.log('Error',e)
    }
  }

  useEffect(() => {
    async function getData() {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setPrices(json.prices.map(item => Math.round(item[1])));
            setDates(json.prices.map(item => moment.unix(item[0]).format('MM-DD-')));
        } catch (e) {
            console.log('Error', e);
        }
    }

    getData();

    const canvas = chartRef.current.firstChild;
    let BGgradient = canvas.getContext("2d").createLinearGradient(0, 0, 0, canvas.height);

    BGgradient.addColorStop(0, 'rgba(4, 191, 157, 1)');
    BGgradient.addColorStop(1, 'rgba(4, 191, 157, 0)');
    setgradient(BGgradient);
}, []);


  switch(type){
    case 0:
      options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins:{
          legend:{
            display:false,
          },
          title:{
            display:false,
          }
        },
        scales:{
          x:{
            grid:{
              display:false
            }
          },
          y:{
            grid:{
              display:false
            },
            ticks:{
              callback:function(value,index, ticks){
                return `$${value.ToString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}${currency.toUpperCase()}`;
              }
            }
          }
        }
      }
      data={
        labels:dates,
        datasets:[{
          data:prices,
          borderColor:color,
          background: gradient,
          tension:.4,
          PointRadius:0,
          fill:true
        }
      ]
      }
      break
    case 1:
    options = {
      responsive: true,
      maintainAspectRatio: true,
      plugins:{
        legend:{
          display:false,
        },
        title:{
          display:false,
        }
      },
      scales:{
        x:charStyle,
        y:charStyle
      }
    }
    data={
      labels:dates,
      datasets:[{
        data:prices,
        borderColor:color,
        tension:.4,
        PointRadius:0,
      }
      ]
    }
    break
    default:
      
  }

  return (
    <div ref={chartRef} className='graph'>
      <Line data={data} options={options}/>
    </div>
  )
}

export default Graph