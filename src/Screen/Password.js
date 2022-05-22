import React, {useEffect, useState} from 'react';

export default function Password(props) {

    const [password, setPassword] = useState("")

    function handleSubmit() {
        if(password){
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ value: password })
            };
            fetch('https://wedding-auth.herokuapp.com/auth', requestOptions)
                .then(response => console.log(response.status))
        }
    }

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}
        >
            <div>
                <input type="text" placeholder="password" name="password" onChange={e =>setPassword(e.target.value)}/>
                <div>
                    <input type="button" value="Submit" onClick={()=>handleSubmit()}/>
                </div>

            </div>
        </div>
    );
}