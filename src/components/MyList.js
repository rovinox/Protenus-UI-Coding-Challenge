import React from 'react'

export default function MyList(props) {

    const displayList = props.myList.map(movie =>{
        return(
            <p>{movie.title}</p>
        )
    })
    console.log(props.myList);
    return (
        <div>
            {displayList}
        </div>
    )
}
