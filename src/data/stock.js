const imageUno = require("../img/arsenal.jpg").default;
const imageDos = require("../img/city.jpg").default;
const imageTres = require("../img/pelota.jpg").default;

export const stock = [

    {
        nombre: 'Camiseta Arsenal',
        id: 1,
        desc: 'Camiseta temporada 2022/23',
        precio: 1300,
        img: <img src={imageUno} />,
        stock: 10,
        categoria: 'estandar',
        oferta: true
    },

    {
        nombre: 'Camiseta Manchester City',
        id: 2,
        desc: 'Camiseta temporada 2022/23',
        precio: 1300,
        img: <img src={imageDos} />,
        stock: 10,
        categoria: 'estandar',
        oferta: false

    },

    {
        nombre: 'Pelota oficial',
        id: 3,
        desc: 'Pelota oficial de la liga temporada 22/23',
        precio: 770,
        img: <img src={imageTres} />,
        stock: 10,
        categoria: 'vip',
        oferta: true
    },
]