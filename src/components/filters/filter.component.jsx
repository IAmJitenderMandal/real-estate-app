import React from 'react';
import './filter.styles.scss';

let Filter = (props) => (
    <div className='filter'>
        <div className='type'>
            <label htmlFor='propertyType'>Type</label>
            <select className='propertyType' name='houseType' onChange={props.filterTypeHouse} >
                <option value='any'>Any</option>
                <option value='family-house'>Family House</option>
                <option value='single-house'>Single house</option>
                <option value='apartment'>Apartment</option>
                <option value='villa'>Villa</option>
                <option value='office-building'>Office Building</option>
                <option value='condo'>Condo</option>               
            </select>
        </div>
        <div className='location'>
        <label htmlFor='PropertyLocation'>Location</label>
            <select className='PropertyLocation'>
                <option>Any</option>
                <option>New york</option>
                <option>California</option>
                <option>Washington</option>
                <option>philedelphia</option>
                <option>Boston</option>               
            </select>
        </div>
        <div className='min-price'>
            <label htmlFor='priceFrom'>Min-Price</label>
            <input type='text' className='priceFrom' placeholder='min-price' />
        </div>
        <div className='max-price'>
            <label htmlFor='priceTo'>Max-Price</label>  
            <input type='text' className='priceTo' placeholder='max-price' />
        </div>
        <div className='dealOption'>
            <label htmlFor='options'>Type Of Deal</label>  
            <div className='options'>
                <div className='each_option'>
                    <label htmlFor='any'>Any</label>  
                    <input type='radio' name='dealType' className='any' value='any' />
               </div>
               <div className='each_option'>
                <label htmlFor='sale'>Sale</label>  
                    <input type='radio' name='dealType' className='sale' value='sale' />
                </div>
                <div className='each_option'>
                    <label htmlFor='rent'>Rent</label>  
                    <input type='radio' name='dealType' className='rent' value='rent' />
                </div>
            </div>
        </div>
    </div>
)

export default Filter;