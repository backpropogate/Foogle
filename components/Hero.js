import Image from "next/image"
import styles from '../styles/Hero.module.css'

const Hero = () => {
    return (
        <div className={styles.main}>
            <div>
                <h1>Foogle <span className={styles.invis}>Translate</span></h1>
                <p>Like google translate but not as good.<br></br>
                This Site is not affiliated with Google.
                </p>
                
            </div>
            <div className={styles.heroImage}>
                <Image src='/Hero.SVG' width='300px' height='300px' />
            </div>
        </div>
    )
}

export default Hero
