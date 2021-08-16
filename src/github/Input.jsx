import React, {useState}  from 'react';

export const Input = ({setSubmitValue, submitValue}) => {
    const [inputValue, setInputValue] = useState(submitValue);
    return (
        <div className='row'>
            <div className="input-field col s8">
                <input value="it-kamasutra"
                        id="name" 
                        type="text"
                        className="validate"
                        onChange={(e) => {setInputValue(e.target.value)}}
                        value={inputValue}
                        onKeyPress={(e) => {if(e.key === 'Enter') {setSubmitValue(inputValue)}}}
                />
                <label className="active" htmlFor="name">Name</label>
            </div>
            <button className="btn waves-effect waves-light col s2"
                    type="submit" 
                    name="action"
                    onClick={() => {setSubmitValue(inputValue)}}
            >
                    GET
            </button>
        </div>
    )
} 