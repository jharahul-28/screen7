import styles from './Hero.module.css';

const Hero = () => {
    return(
        <div className={styles.heroSec}>
            <img src="/heroSVG.svg" alt="" />
            <div className={styles.content}>
                <p>Boost Digital Ad Performance</p>
                <p>We create innovative marketing solutions for cost conscious marketers who does not compromise on the results!</p>
            </div>
        </div>
    )
}

export default Hero;