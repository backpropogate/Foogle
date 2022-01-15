import Head from 'next/head'
import Image from 'next/image'
import React, {useState} from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import styles from '../styles/Home.module.css'

export default function Home() {
  

// Using state to keep track of what the selected fruit is
let [source, setSource] = useState("Select language source")
let [target, setTarget] = useState("Select a target language ")

// Using this function to update the state of fruit
// whenever a new option is selected from the dropdown
let handleSourceChange = (e) => {
  setSource(e.target.value)
}
let handleTargetChange = (e) => {
  setTarget(e.target.value)
}
console.log(source)
  return (
   
    <div className="App">
      <Header />
       <Hero/>
    {/* Displaying the value of fruit */}
   
   

    {/* Creating our dropdown and passing it the handleFruitChange 
      so that every time a new choice is selected, our fruit state 
      updates and renders an emoji of the fruit.
    */}
    <div id='translate' className={styles.selectContainer}>
      <div>
      
    <select onChange={handleSourceChange}> 
        {/* Creating the default / starting option for our 
          dropdown.
         */}
      <option value="English"> English </option>
      <option value="Spanish ">Spanish </option>
      <option value="Mandirin">Mandirin </option>
     
    </select>
    </div>
    <span className={styles.arrow}><svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 9L17 5V8H10V10H17V13L21 9ZM7 11L3 15L7 19V16H14V14H7V11Z" fill="#4285F4"/>
</svg>

</span>
    <div>
  
    
    <select onChange={handleTargetChange}> 
    
        {/* Creating the default / starting option for our 
          dropdown.
         */}
      <option value="English"> English </option>
      <option value="Spanish ">Spanish </option>
      <option value="Mandirin">Mandirin </option>
     
    </select>
    </div>
   
    </div>
    <div className={styles.texttranslate}>
    <div className={styles.input}>
      
      <input type="textarea" placeholder='Enter Your Text' />
      
    </div>
    <div className={styles.output} >
     
      <p>lorem ipsum random text</p>
    
    </div>
    </div>
    
    </div>
  )
}

