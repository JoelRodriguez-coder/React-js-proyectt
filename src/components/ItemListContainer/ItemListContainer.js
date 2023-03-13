import { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import { pedirDatos } from '../helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const {categoryId} = useParams();

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        
        pedirDatos()
            .then((response) => {
                if(!categoryId){
                    setProductos(response)
                }else{
                    setProductos(response.filter((prod) => prod.category === categoryId))
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])



    return (
        <div className='container'>
            
            <div className='row my-5'>
            { loading
                ? <h2>Cargando..</h2>
                : <ItemList items={productos} />         
            }
            </div>
        </div>

    )
}

export default ItemListContainer