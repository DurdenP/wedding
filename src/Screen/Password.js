import React, {useEffect, useState} from 'react';

export default function Password(props) {

    const {setIsAuth} = props
    const [password, setPassword] = useState("")

    function handleSubmit() {
        if(password){
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ value: password })
            };
            fetch('https://wedding-auth.herokuapp.com/auth', requestOptions)
                .then(response => {
                    if(response.status === 201){
                        console.log('ok')
                        setIsAuth(true)
                    }
                })
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