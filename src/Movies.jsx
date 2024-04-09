
function Movies({movies}){

    //const lista = [{id: 1, name: "nowy", age: 10}, {id: 2, name: "stary", age: 20}]

    return(
        <>
        <ul>
            {
                //lista.map(item => <li key={item.id}>{item.name}, {item.age}</li>)
                movies.map(item => <li key={item.episode_id}>{item.title} - {item.opening_crawl}</li>)
            }
        </ul>
        </>
    )
}

export default Movies