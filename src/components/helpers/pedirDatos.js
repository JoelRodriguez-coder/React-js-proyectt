import MOCK_DATA from '../../components/data/MOCK_DATA.json'

 export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        // cuerpo de la promesa
        setTimeout(() => {
            resolve(MOCK_DATA)
        }, 3000)
    })
}

export const pedirProductosPorId = (id) => {
    return new Promise((resolve,reject) => {
        //cuerpo promesa
        setTimeout(()=> {
            resolve(MOCK_DATA.find(prod => prod.id === id))
        }, 1500)
    })
}
