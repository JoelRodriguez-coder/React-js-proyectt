import { Item } from "../Item/Item"


export const ItemList = ( {items}) => {

    return(
        <div>
            <h2>Productos</h2>
            <hr />
            {items.map((producto) => <Item key={producto.id} item={producto}/>)}
        </div>
    )

}