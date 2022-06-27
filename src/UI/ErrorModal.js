import React from 'react'

import Card from './Card'
import Button from './Button'
import classes from './ErrorModal.module.css'

//onConfirm is pointing to function in AddUser component and the reason why we put it on the first div (with the backdrop), that is us CLICKING THE BACKDROP and will set the state to null and allow access again
//the button is also pointing to the same function, doing the same thing
const ErrorModal = props => {
    return (
        <div className={classes.backdrop} onClick={props.onConfirm}>
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
        </div>
    )
}

export default ErrorModal