import React, {Component} from 'react';

export class Cart extends Component{
    render(){
      return(
        <div  style={{color:'green'}} align='center'>
          <table border ='1'  >
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
            {this.props.item.map((item) => {
              return (
                <tr>
                  <td>{item.itemname}</td>
                  <td>{item.price}</td>
                </tr>
              );
            })}
          </table>
        </div>
      );
    }
}