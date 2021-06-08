import React, { useState } from 'react'
import PropTypes from 'prop-types'

function GifExpertApp(props) {

    // const categories = ["Python", "Java", "Javascript"];

    const [categories, setCategories] = useState(["Python", "Java", "Javascript"]);

    const handleAdd =()=>{
        // setCategories(["Axell",...categories]);
        setCategories(cat => ["Axell",...cat]);
    }

    return (
        <>
            <h2>
                GifExpertApp
            </h2>
            <hr />
            <button onClick={handleAdd}>Agregar</button>
            <ol>
                {categories.map((category) => {
                    return <li key={category}>{category}</li>;
                })}
            </ol>
        </>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp

