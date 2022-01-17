import Head from 'next/head'
import Image from 'next/image'
import React, {useState,useEffect} from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import styles from '../styles/Home.module.css'
const axios = require('axios').default;
export default function Home() {
const [options, setOptions] = useState([])
const [source, setSource] = useState("en")
const [target, setTarget] = useState("en")
const [input, setInput] = useState("")
const [output, setOutput] = useState("")
  
useEffect(() => {
  axios.get('https://libretranslate.de/languages',
  {headers:{'accept': 'application/json'}}).then(res=> {
   
    setOptions(res.data)
  })
},[])
const translate = () => {
  const params = new URLSearchParams();
  params.append('q', input);
  params.append('source', source);
  params.append('target', target);
  params.append('api_key', ' xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

  axios.post('https://libretranslate.de/translate', params,{
    headers:{
    'accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
}).then(res=>{
  
  setOutput(res.data.translatedText)
})
};



console.log(source)
  return (
   
    <div className="App">
      <Header />
       <Hero/>
   
    <div id='translate' className={styles.selectContainer}>
      <div>
      
    <select onChange={e=> setSource(e.target.value)}> 
       
      {options.map(opt=> <option key={opt.code} value={opt.code}> {opt.name} </option> )}
     
    </select>
    </div>
    
    <div>
  
    
    <select onChange={e=> setTarget(e.target.value)}> 
    
        
     
     {options.map(opt=> <option key={opt.code} value={opt.code}> {opt.name} </option> )}
     
    </select>
    </div>
   
    </div>
    <div className={styles.texttranslate}>
    
    <div className={styles.input}>
   
      
      <input type="textarea" placeholder='Enter Your Text' onInput={(e) =>setInput(e.target.value)}/>
      
    </div>
    <button className={styles.translateButton} onClick={e=>translate()}>Translate</button>
    <div className={styles.output} value={output}  >
     
      <p>{output}</p>
    
    </div>
   
    </div>
    
    </div>
  )
}

