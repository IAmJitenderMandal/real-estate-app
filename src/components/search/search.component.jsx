import React from 'react';

import './search.style.scss';

let Search = () => {
    return (
        <div className='search' style={{
            // eslint-disable-next-line no-useless-concat
            backgroundImage: "linear-gradient(90deg, rgba(35,55,77,1) 0%, rgba(4,4,4,0.5298494397759104) 0%, rgba(4,4,4,0.5214460784313726) 100%), url(" + "https://static1.mansionglobal.com/production/media/article-images/150b1342f1f1b75d9637ab52a4d6e1a0/large_india.jpg?width=620&height=348" + ")",
        }}>
            <div className='searching_keyword'><h2>Properties Listing</h2></div>
            <div className='search_input'><input type='search' placeholder='Search Property' className='search_bar' /></div>
        </div>
    )
}

export default Search;
