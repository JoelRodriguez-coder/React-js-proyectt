import { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'


const ItemListContainer = () => {



    const [productos, setProductos] = useState([])

    const { categoryId } = useParams();

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const productosRefe = collection(db, "productos")
        const q = categoryId
                    ? query(productosRefe, where("category", "==", categoryId))
                    : productosRefe

        //2
        getDocs(q)
            .then((res) => {
                const docs = res.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                })

                setProductos(docs)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])



    return (
        <div className='container'>
            {loading
                ? <h2>Cargando productos..</h2>
                : <ItemList items={productos} />
            }

        </div>
    )
}

export default ItemListContainer