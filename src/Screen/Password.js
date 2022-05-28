import React, {useEffect, useState} from 'react';
import './Password.css'

export default function Password(props) {

    const {setIsAuth} = props
    const [errorMessage, setErrorMessage] = useState('');

    const [password, setPassword] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        setErrorMessage('')
        if(password){
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ value: password })
            };
            fetch('https://wedding-auth.herokuapp.com/auth', requestOptions)
                .then(response => {
                    if(response.status === 201){
                        setIsAuth(true)
                    } else {
                        setErrorMessage('Invalid password');
                    }
                })
        }
    }

    const renderForm = (
        <div className="login">
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="pass" required onChange={(e)=>setPassword(e.target.value)}/>
                        {errorMessage && <div className="error">{errorMessage}</div>}
                    </div>
                    <div className="button-container">
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </div>

    );

    return (
        <div className="app">
            <div className="login-form">
                { renderForm}
            </div>
        </div>
    );
}