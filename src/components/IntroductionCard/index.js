import React from 'react'
import styles from './introductionCard.module.scss';


const IntroductionCard = () => {
    return (
        <div className={styles.wrapper}>
            <span>Why the industry chooses ClickDee?</span>
            <p>The Clickdee team is made up of nimble and creative marketers with a mission to help brands connect with highly qualified customers. We map out the specific needs of each one of our clients so they can effortlessly receive qualified calls to their business.</p>
        </div>
    )
}

export default IntroductionCard