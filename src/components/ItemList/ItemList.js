import { useEffect } from "react"
import { Item } from "../Item/Item"


export const ItemList = ( {items}) => {

    const clickear = (event) => {
        console.log(event)
    }

    useEffect(()=>{
        window.addEventListener('click', clickear)

        return() =>{
            window.removeEventListener('click', clickear)
        }
    }, [])

    return(
        <div className="row">
            <h2>Productos</h2>
            <hr />
            {items.map((producto) => <Item key={producto.id} item={producto}/>)}
        </div>
    )

}