import React, {Component} from 'react';

export class OfficeSpace extends Component {
    render() {

        const src = "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        const element = "Office Space";
        const jsxatt = <img src={src} width="25%" height="25%" alt="Office Space"/>
        const itemName = {Name: "DBS", Rent: 80000, Address: "Chennai"};

        let colors = [];

        if(itemName.Rent <= 60000){
            colors.push("red");
        }
        else{
            colors.push("green");
        }

        return (
            <div >
                <h1>{element}, at Affordable Range</h1>
                {jsxatt}
                <h1>Name: {itemName.Name}</h1>
                <h3 style={{color: colors}}>Rent: Rs. {itemName.Rent}</h3>
                <h3>Address: {itemName.Address}</h3>
            </div>
        );
    }
}