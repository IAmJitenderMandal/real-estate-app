import React, {Component} from 'react';
import './listings.styles.scss';
import Listing from '../listing/listing.component'

class Listings extends Component {
    
    render() {
        let { ListingsData: listings } = this.props;
        if (listings === undefined || listings.length === 0) {
            return <h2>sorry no data found</h2>
        }

        return (
            <div className='listings'>
                {listings.map(({ id, image, address, price, city, rooms, bathrooms, area }) => (
                    <Listing key={id} image={image} address={address} price={price} city={city} rooms={rooms} bathrooms={bathrooms} area={area} />
                ))}
            </div>
        )
    }
}

export default Listings;