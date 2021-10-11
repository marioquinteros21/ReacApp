import React from 'react';
/* import React {useEffect} from 'react';*/

import './ItemList.css';
import { data } from '../../assets/db/data.json';
import Card from '../ItemListContainer/ItemListContainer';

const ItemList = () => {
  
                        /*useEffect(() => {
                          fetch('https://api.github.com/users')
                            .then((response) => response.json())
                            .then((json) => console.log(json));
                        }, []);*/
  
  return (
    <div className='landing-container'>
      {data.map((data) => (
        <Card image={data.image} name={data.name} key={data.id} precio={data.precio} />
      ))}
    </div>
  );
};

export default ItemList;


//// Todo lo comentado esta simulando el pedido de fetch, ya que no es necesario por que los datos los trae del Array Data.json.