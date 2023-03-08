import {useEffect,useState} from 'react';
import './App.css';

function App() {
  const[quote,setQuote]=useState("")
  const getQuote=()=> {
    fetch("https://api.quotable.io/random")
     .then((response)=>response.json())
    .then((data)=>setQuote(data))
  }
  
function changeColor() {
  document.body.style.backgroundColor=
  'rgb('+Math.round(Math.random()*255)+
  ','+Math.round(Math.random()*255)+','
    +Math.round(Math.random()*255)+')';
}

  useEffect(()=>getQuote(),[])
  return (
    <div className="App" >
      <span>{quote.content}</span>
      <h4>{quote.author}</h4>
      <button className='btn' onClick={getQuote}{...changeColor()}>Get Quote</button>
    </div>
  );
}

export default App;

//hello i am comment
