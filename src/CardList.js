import React from 'react';
import Card from './Card'

const CardList= ({robots})=>{
    // if(true)throw new Error('err1');
    let cardsComponent = robots.map(r=>{
        return <Card key={r.id} id={r.id} name={r.name} email={r.email}/>
    })
    return (
        <div>
            {cardsComponent}
        </div>    
    );
}

export default CardList;