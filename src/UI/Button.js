import React from 'react'

import classes from './Button.module.css'

//onClick={props.onClick}, we're expecting to get a handler function via props. The onClick INSIDE the object is just a good naming convention and can be named whatever you'd like
//props.children is stating that, whatever this component gets assigned to, it will take the information of the child and display it
const Button = props => {
    return (
        <button className={classes.button} type={props.type || 'button'} onClick={props.onClick}>{props.children}</button>
    )
}

export default Button;