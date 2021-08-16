import React, { useEffect, useState } from 'react';
import {Timer} from './Timer';

export const Details = ({selectedUser}) => {
    const [user, setUser] = useState(null);
    const [time, setTime] = useState(10);

    useEffect(() => {
        if(!!selectedUser) {
        fetch(`https://api.github.com/users/${selectedUser}`)
        .then(res => res.json())
        .then(data => {
            setTime(10);
            setUser(data)
            })
        }
    }, [selectedUser])

    useEffect(() => {
        if (time < 1) setUser(null);
    })

    return (
        <>
       { user && <div className='row'>
            <div className='col s12'>
                <Timer time={time} onChange={setTime} timerKey={user.id}/>
            </div>
            <img width="350" src={user && user.avatar_url}/>
            <div>
                <span>Login: {user && user.login};</span>
                <span> Followers: {user && user.followers}</span>
            </div>
        </div>
    }
    </>
    )
}