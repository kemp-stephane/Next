import Head from 'next/head'
import getConfig from 'next/config';
import { useEffect, useState } from 'react';
import Movie from "../src/components/Movie"

const{serverRuntimeConfig, publicRuntimeConfig}=getConfig()

export default function Home(initialData){
    const[searchResults, setSearchResults] = useState([])

    useEffect(() => {
        setSearchResults(initialData.Movies.results)
    }, [initialData])

    

    return(
        <div className="container">

            <div className="movie">
                {searchResults.map((each,index) => {
                    return(
                        <Movie key={each.id} 
                            title={each.title} 
                            poster_path={each.poster_path} 
                            overview={each.overview}    
                            />
                    )
                })}
            </div>
        </div>
    )
}

export async function getServerSideProps(context){
    let Movies = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=2339f4f24027724d99c56a34e52f38d7`)
    Movies = await Movies.json()
    console.log(Movies)
    return{
        props:{Movies:Movies},
    }
}