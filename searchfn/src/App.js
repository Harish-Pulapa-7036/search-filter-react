import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Search from './search';

function App() {
  const [data,setdata]=useState([])
  const [final,setfinal]=useState([])
  useEffect(()=>{
    fetch('https://world.openfoodfacts.org/api/v0/product/737628064502.json').then(res=>res.json())
    .then(data=>setdata(data.product.ingredients_ids_debug)).catch(e=>console.log(e))
  },[])
  const textsearch=(e)=>{
    
    let text=e.target.value;
    if(text.length !=0){
      setfinal(data.filter(item => item.toLowerCase().includes(text)));

    }
     
  }
  return (
    <div className="App">
      <input onInput={textsearch}></input>
      <Search searched={final}/>
    </div>
  );
}

export default App;
