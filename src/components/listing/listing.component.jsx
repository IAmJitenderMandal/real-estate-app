import React from 'react';
import './listing.styles.scss';

let Listing = (props) => (
    <div className='listing'>
        <div className='listing_img' style={{backgroundImage: `url(${props.image})`}}>
        </div>
        <div className='listing_address'>
            <h4 className='local_address'>{props.address}</h4>
            <h4 className='city'>{props.city}</h4>
        </div>
        <div className='listing_price'>
            <button>For Sale</button>
         <h4>{props.price}</h4>
        </div>
        <div className='extras'>
            <span className='area'>{props.area}</span>
            <span className='bedrooms'>{props.rooms}</span>
            <span className='bathrooms'>{props.bathrooms}</span>
        </div>
    </div>
)

export default Listing;