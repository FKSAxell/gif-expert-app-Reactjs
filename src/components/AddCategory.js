import React, { useState } from 'react'

export const AddCategory = () => {
    const [inputValue, setInputValue] = useState("Hola mundo");
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log("Submit hecho");
        console.log(inputValue);
        setInputValue("");

    }
    return (
        <form onSubmit={handleSubmit}>
            <input

                onChange={handleInputChange}
                value={inputValue}
                type="text"
            />
        </form>
    )
}
