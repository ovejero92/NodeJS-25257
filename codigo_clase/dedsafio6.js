fetch("https://rickandmortyapi.com/api/character")
.then(res => res.json())
.then(data => {
    const primerosCinco = data.results.slice(0,5)
    console.log(primerosCinco)
}).catch(err => console.log("error", err))