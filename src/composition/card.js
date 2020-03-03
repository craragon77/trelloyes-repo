import React from 'react'
import STORE from 'store'

function Card(props){
    const StoredId = STORE.lists.items.map((id) =>{
    <p key={itemId}>{id.name}</p>
    })
    const StoredTitle = Store.lists[i].header;
    const ClassNameCard = `card ${props.className}`
    return(
    <div className={ClassNameCard}>
        <button type="button">delete</button>
        <h3>{StoredId}</h3>
        <p>{StoredTitle}</p>
    </div>
    )
}

export default Card;