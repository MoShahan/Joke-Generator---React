import { useState, useEffect } from 'react'

export default function useRandomJoke(firstName, lastName) {

    const [joke, setJoke] = useState('')

    useEffect(
        () => {
            const fetchJoke = async () => (
                await fetch(`https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`)
                    .then(res => {
                        console.log("res == ", res)
                        // console.log("res JSON", res.json())
                        return res.json()
                    })
                    .then(data => {
                        setJoke(data.value.joke)
                        console.log("data == ", data)
                        // console.log("joke == ", data.value.joke)
                    })
            )
            fetchJoke();
        }, [firstName, lastName]
    )

    return joke
}