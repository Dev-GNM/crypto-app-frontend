import React from 'react';

function Tradable() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '68a65b4a39mshcf2679edfb6b35ap1eda53jsnfed9262c1f89',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };
    
    fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
  return (
    <div>
      <h1>Top rated movies</h1>
      <button onClick={options}>Refresh List</button>
    </div>
  );
}
export default Tradable;