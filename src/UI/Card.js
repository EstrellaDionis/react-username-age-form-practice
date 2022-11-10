import React from 'react';

import classes from './Card.module.css' //you must import SOMETHING from the file when using module.css

//classes.card is handling classes coming from ./Card.module.css
//props.className is handling props that can potentially come from props. Also, it did not HAVE to be called className but because the props being fed is called className, thats what it is.
//If the props fed into it was randomStyles then here, we would also see, props.randomStyles
const Card = props => {
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>
}

export default Card;