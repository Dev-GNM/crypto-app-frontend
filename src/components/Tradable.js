import React from 'react';

function Tradable() { 
    
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
              
        .catch(err => {
            console.error(err);
        });

       
    return (
        <div>
            <h1>Top rated movies</h1>
           <form>
            <input type="text">
                <button type="search"></button>
            </input>
           </form>
        </div>
    );
}
export default Tradable;