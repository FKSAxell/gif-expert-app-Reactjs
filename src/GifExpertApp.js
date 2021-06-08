import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

function GifExpertApp(props) {

    

    const [categories, setCategories] = useState(["Python", "Java", "Javascript"]);

    // const handleAdd =()=>{
    //     // setCategories(["Axell",...categories]);
    //     setCategories(cat => ["Axell",...cat]);
    // }

    return (
        <>
            <h2>
                GifExpertApp
            </h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
           
            <ol>
                {categories.map((category) => {
                    return <li key={category}>{category}</li>;
                })}
            </ol>
        </>
    )
}

export default GifExpertApp

