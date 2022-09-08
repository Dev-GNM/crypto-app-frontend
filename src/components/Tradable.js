import React, { useState, useEffect } from 'react';

function Tradable() {
    const [endPoint, setEndpoints] = useState("")
    const [container, setContainer] = useState([])
    const [finalPoint, setFinalPoint] = useState("")

    useEffect(() => {
        fetchMovies()
    },[finalPoint])

    const fetchMovies = () => {

        fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=+${endPoint}`, {
            "method": 'GET',
            "headers": {
                'X-RapidAPI-Key': '68a65b4a39mshcf2679edfb6b35ap1eda53jsnfed9262c1f89',
                'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
            }
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                setContainer(data.d)
            })

            .catch(err => {
                console.error(err);
            });
    }


    const onChangeHandler = (e) => {
        setEndpoints(e.target.value)
    }
    const submitHandler = e => {
        e.preventDefault()
        setFinalPoint(endPoint)
    }

    return (
        <div class="movies-container">
            <h1>Top rated movies</h1>
            <form onSubmit={submitHandler}>
                <input type="text" value={endPoint} onChange={onChangeHandler} placeholder="search your favorite movie" />
                <button type="submit">Search</button>
            </form>
            {container.map((item) => {
                return (
                    <div>
                        <img src={item.i.imageURL} alt="search"/>
                    <p>{item.l}</p>
                    </div>
                )
            })}
        </div>
    );
}
export default Tradable;