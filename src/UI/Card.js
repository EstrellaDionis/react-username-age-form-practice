import React from 'react';

import classes from './Card.module.css'

//classes.card is handling classes coming from ./Card.module.css
//props.className is handling props that can potentially come from props
const Card = props => {
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>
}

export default Card;