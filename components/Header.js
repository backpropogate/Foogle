import Link from "next/link"
import styles from '../styles/Header.module.css'
import Image from "next/image"
import React, {useState } from "react"


const Header = () => {
    const [nav, setnav] = useState(false)
    const Opennav = () => {
        setnav(!nav)
    }
     console.log(nav)
    return (
        <header className={styles.header}>
            <div className={styles.leftNav}>
                <div className={styles.hamburger} onClick={Opennav} >
            <svg  width="24" height="24" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.75 31.5H5.25V28H36.75V31.5ZM36.75 22.75H5.25V19.25H36.75V22.75ZM36.75 14H5.25V10.5H36.75V14Z" fill="black"/>
</svg></div>
            <Link href='/'><Image className={styles.logo} src='/logo.svg' width='172px' height='24px'/></Link>
            </div>
            
            <nav >
                 
                
                   
                    <Link href='/#translate'><a className={styles.button}>Translate</a></Link>
                    
                    
                    
                
            </nav>
            <nav className={`${!nav ? styles.hiddenNav :   styles.visibleNav}`}>
                 <div className={styles.closeNav} onClick={Opennav} >
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.192 6.34399L11.949 10.586L7.70697 6.34399L6.29297 7.75799L10.535 12L6.29297 16.242L7.70697 17.656L11.949 13.414L16.192 17.656L17.606 16.242L13.364 12L17.606 7.75799L16.192 6.34399Z" fill="black"/>
                </svg>


                 </div>
                <ul>
                 <li>About Foogle</li>
                 <li>Terms of services</li>
                 <li>Privacy policy</li>
                 <li>Send Suggestions</li>
                 
                </ul>
            </nav>
        </header>
    )
}

export default Header
