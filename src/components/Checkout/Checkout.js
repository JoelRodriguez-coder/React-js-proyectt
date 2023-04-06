import { collection, addDoc, getDoc, updateDoc, doc } from "firebase/firestore"
import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { db } from "../../firebase/config"


const Checkout = () => {
    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        //validaciones
        if (values.nombre.length < 3) {

            alert('Nombre invalido')
            return
        }
        if (values.direccion.length < 3) {

            alert('Direccion invalida')
            return
        }
        if (values.email.length < 5) {

            alert('Email invalido')
            return
        }

        const orden = {
            cliente: values,
            items: cart.map((prod) => ({ id: prod.id, price: prod.price, cantidad: prod.cantidad, name: prod.name })),
            total: totalCompra(),
            fecha: new Date()
        }


        const productosRefe = collection(db, 'productos')

        cart.forEach((item) => {
            const docRefe = doc(productosRefe, item.id)

            getDoc(docRefe)
                .then((doc) => {
                    if (doc.data().stock >= item.cantidad) {

                        updateDoc(docRefe, {
                            stock: doc.data().stock - item.cantidad
                        })
                    } else {
                        alert("No hay stock de "+ item.name)
                    }

                })
        })

        const ordersRefe = collection(db, 'orders')

        addDoc(ordersRefe, orden)
            .then((doc)=> {
                setOrderId(doc.id)
                vaciarCarrito()
        })


    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2>Tu orden se registro con exito!</h2>
                <hr />
                <p>Guarda tu numero de orden: {orderId}</p>
                <Link to='/' className="btn btn-primary">Volver a Inicio</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to='/' />
    }

    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr />

            <form onClick={handleSubmit}>
                <input
                    onChange={handleInputChange}
                    value={values.nombre}
                    type={'text'}
                    placeholder='Tu nombre'
                    className="form-control my-2"
                    name="nombre"
                />
                <input
                    onChange={handleInputChange}
                    value={values.direccion}
                    type={'text'}
                    placeholder='Direccion'
                    className="form-control my-2"
                    name="direccion"
                />
                <input
                    onChange={handleInputChange}
                    value={values.email}
                    type={'email'}
                    placeholder='Tu Email'
                    className="form-control my-2"
                    name="email"
                />

                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>


        </div>
    )
}

export default Checkout