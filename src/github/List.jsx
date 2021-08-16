import React, {useState, useEffect} from 'react';
import './github.css';

export const List = ({submitValue, selectedUser, setSelectedUser}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/search/users?q=${submitValue}`)
        .then(res => res.json())
        .then(data => setUsers(data.items));
    }, [submitValue]);
    return (
        <div>
           <ul>
               {users.length && users.map( user => {
                  return <li className={selectedUser === user.login ? 'selected' : ''}
                             key={user.id}
                             onClick={() => { setSelectedUser(user.login) }}
                         >
                             {user.login}
                         </li>
               })}
           </ul>
        </div>
    )
}