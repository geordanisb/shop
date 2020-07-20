import React from 'react';

const SearchBox =({searchChange})=>{
    return (
        <div style={{backgroundColor:'blue'}}>
            <input 
                type="search" 
                placeholder="Search"
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;