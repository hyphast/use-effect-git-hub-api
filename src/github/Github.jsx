import React, { useEffect, useState } from 'react';
import {Input} from './Input';
import {List} from './List';
import {Details} from './Details';

const Github = () => {
  const [submitValue, setSubmitValue] = useState('it');
  const [selectedUser, setSelectedUser] = useState('');

  useEffect(() => {
    document.title = submitValue;
  }, [submitValue])

    return (
        <div className='container mt-15 row'>
          <div className='col s6'>
            <Input setSubmitValue={setSubmitValue} submitValue={submitValue}/>
            <List submitValue={submitValue} selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
          </div>
          <div className='details col s6'>
            <Details selectedUser={selectedUser}/>
          </div>
        </div>
    )
}

export default Github;