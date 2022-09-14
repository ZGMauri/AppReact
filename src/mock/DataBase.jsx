const productos = [
    {id: '1', name: 'Camiseta Real', description: 'camiseta de futbol'},
    {id: '2', name: 'Camiseta Barca', description: 'camiseta de futbol'},
    {id: '3', name: 'Camiseta PSG', description: 'camiseta de futbol'},
    {id: '4', name: 'Camiseta Arsenal', description: 'camiseta de futbol'},
    {id: '5', name: 'Camiseta Milan', description: 'camiseta de futbol'}
]

export const data = new Promise ((resolve, reject) =>{

    let condition = true
    setTimeout(()=>{
        if(condition){
            resolve(productos)
        }else {
            reject('salio mal')
        }
    },2000)
})