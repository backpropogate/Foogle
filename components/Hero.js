import Image from "next/image"
import styles from '../styles/Hero.module.css'

const Hero = () => {
    return (
        <div className={styles.main}>
            <div>
                <h3 className={styles.notaffiliated}>NOT AFFILIATED WITH GOOGLE</h3>
                <h1> <span className={styles.invis}>Translate </span> the world</h1>
                <p>Translate to over 20 different languages<br></br>
                scroll down to get started.
                </p>
                
            </div>
            <div className={styles.heroImage}>
                <Image src='/Hero.SVG' width='250px' height='250px' />
            </div>
        </div>
    )
}

export default Hero
