import React from 'react';
import { ItemsListContainer } from '../components/ItemsListContainer';
import { useShopCart } from "../hooks/CartShopContext"

export function Catalog (){
    
    return (
    <div className="App">
      <ItemsListContainer greeting="Browse our catalog and inmerse in the world of good music"></ItemsListContainer>
    </div>
    
    )
}

