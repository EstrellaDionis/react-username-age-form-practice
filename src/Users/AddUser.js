import React, { useState } from 'react'

import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../Helpers/Wrapper'

import classes from './AddUser.module.css'

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault()
        //returns nothing because we want there to be a name and an age given to us
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        }
        // returns nothing if age is less than 1. The + ensures that what we receive is a number
        // the + converts strings into numbers to make sure that we are getting a number. Basically an extremely safe way of making sure its a number.
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (greater than zero)'
            })
            return;
        }
        // console.log(enteredUsername, enteredAge) //keeping this here as a reminder that this is where you'd console log to see the users
        //two arguments that the onAddUser prop-function is looking for is a username and age
        props.onAddUser(enteredUsername, enteredAge)
        //reset inputs back to empty. You MUST make sure to have value tag in inputs with the state so it visually makes the inputs empty
        setEnteredUsername('')
        setEnteredAge('')
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    //ressetting error to null so that you can continue using the form
    const errorHandler = () => {
        setError(null)
    }
    // Lesson 91
    //classes.input on <Card className={classes.input}> are the classes being brought in from the './AddUser.module.css' 
    //look at Card.js for a little more explanation
    //Lesson 98 to understand the error
    return (
        <Wrapper>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            {/* passing in the state to the value makes it so it refreshes after on submit thanks to the addUserHandler */}
            <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
            <label htmlFor='age'>Age (Years)</label>
            <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
            <Button type='submit'>Add User</Button>
        </form>
        </Card>
        </Wrapper>
    )
}

export default AddUser;