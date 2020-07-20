import React from 'react';

const Card = ({name,id,email}) =>{
    return (
        <div>
            <img alt="robots" src={`https://robohash.org/${id}?size=100x100`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;