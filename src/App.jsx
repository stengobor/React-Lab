import React, { useState, useEffect } from 'react';
import Greeter from './components/Greeter';


const App = () => {

    const [username, setUsername] = useState('');
    const [loaded, setLoaded] = useState(false)


    useEffect(() => {
        setTimeout (() => {
            setLoaded(true);
        }, 3000);
    }, []);

    if (loaded) {

    return (
        <>
            <header style={{ border: '1px solid black', width: '250px', height: '50px', textAlign: 'center', fontSize: '20px'}}>This is the way.</header>
            <Greeter phrase ="Hello There" name="Luke"/>
            <Greeter phrase ="Hello There" name="Sofi"/>
            <Greeter phrase ="Hello There" name="Batman"/>
            <input placeholder="username" value={username} onChange={e => setUsername(e.target.value)}>
            </input>
            <p> You are logging in as : {username}</p>
        </>
    );
    } else {
        return (
            <>
                <h1 style={{ fontSize: '50px', color: 'blue'}}>Website Loading...</h1>
                <button onClick={() => setLoaded(true)}>Load Website</button>
            </>
        )
    }
};

export default App;