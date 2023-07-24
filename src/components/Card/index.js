import React from 'react'
import styles from './card.module.scss';

const Card = (props) => {
    const { data, isGrey } = props;

    return (
        <div className={styles.wrapper} style={{ background: isGrey ? '#f7f9fb' : 'white' }}>
            {data?.icon}
            <span>{data?.heading}</span>
            <p>{data?.text}</p>
        </div>
    )
}

export default Card