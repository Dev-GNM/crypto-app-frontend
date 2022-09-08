import React, { useState } from 'react';

function Tradable() {
    const [endPoint, setEndpoints] = useState("")
    const [container, setContainer] = useState([])
  

    fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', {
        "method": 'GET',
        "headers": {
            'X-RapidAPI-Key': '68a65b4a39mshcf2679edfb6b35ap1eda53jsnfed9262c1f89',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    })
        .then(response => {
            console.log(response.json());
        })
        .then(data => {
            setContainer(data)
        })

        .catch(err => {
            console.error(err);
        });

    const onChangeHandler = (e) => {
        setEndpoints(e.target.value)
    }
    const submitHandler = e => {
        e.preventDefault()
    }

    return (
        <div class="movies-container">
            <h1>Top rated movies</h1>
            <form onSubmit={submitHandler}>
                <input type="text" value={endPoint} onChange={onChangeHandler} placeholder="search your favorite movie" />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}
export default Tradable;