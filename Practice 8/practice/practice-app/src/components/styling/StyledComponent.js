import React from 'react';
import './styles.css';
import styles from './styles.module.css';
import jsStyles from './styles.js';

const StyledComponent = () => {
    var innerStyles = {
        color: 'pink'
    }

    return (
        <div>
            <h1 className='styled'>Styled from stylesheet</h1>
            <h1 className={styles.styled}>Styled from CSS module</h1>
            <h1 style={innerStyles}>Styled using inner styles</h1>
            <h1 style={jsStyles}>Styled using JS styles</h1>
        </div>
    )
}

export default StyledComponent;