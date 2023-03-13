import { Link } from "react-router-dom"

export const Item = ({item}) => {
    return (
        <div>
                <div key={item.id} className='text-center my-1 '>
                    <img src={item.img} alt={item.name} />
                    <h4 key={item.id}>{item.name}</h4>
                    <p>{item.description}</p>
                    <p className='d-block'>Precio: <strong>{item.price}</strong></p>
                    <Link to={`/detail/${item.id}`} className='btn btn-primary'> Ver mas </Link>
                </div>
        </div>
    )
}