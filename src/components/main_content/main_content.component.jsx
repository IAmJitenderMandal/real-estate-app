import React, { Component } from 'react';
import ListingsData from '../data/data';
import Listings from '../listings/listings.component';
import Filter from '../filters/filter.component';
import './main_content.styles.scss';


class Main_content extends Component {
    constructor(props) {
        super();
        this.state = {
            listingsData: ListingsData,
            searchOnChange: '',
            houseType: '',
            filterdProperties: ListingsData,
        }
    }

    change = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        }, () => {
                this.filterData();
            }
        )
    }

    filterData = () => {
        let newData = this.state.listingsData.filter(property => {
            return property.type.toLowerCase().toString() === this.state.houseType.toLowerCase().toString()
        })

        if (this.state.houseType !== 'any') {    
            this.setState({ filterdProperties: newData }, () => {
                console.log(this.state)
            });
        } else {
            this.setState({filterdProperties: this.state.listingsData})
        }

    }

    render() {
        return (
            <div className='main-content'>
                <div className='listings-container'>
                    <Listings ListingsData={ this.state.filterdProperties } />
                </div>
                <div className='filter-sidebar'>
                    <Filter filterTypeHouse={this.change} />
                </div>
            </div>
        );
    }
}

export default Main_content;