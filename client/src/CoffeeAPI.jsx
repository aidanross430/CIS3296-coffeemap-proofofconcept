import React from 'react'

function FetchCoffeeImage() {
    const coffeeUrl= 'https://coffee.alexflipnote.dev/random'

    return(
        <div>
            <img src={coffeeUrl} alt='coffee'/>
        </div>
    )
}

export default FetchCoffeeImage;