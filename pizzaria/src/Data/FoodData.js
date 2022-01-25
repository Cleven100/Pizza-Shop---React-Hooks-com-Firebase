export function formatPrice(price){
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}



export const foods = [
    {
        name: 'Cheese Pizza',
        img: 'img/pizza1.png',
        price: 2

    },
    {
        name: 'Pepperoni Pizza',
        img: 'img/pizza1.png',
        price: 2
    }
    ,
    {
        name: 'Mussarela Pizza',
        img: 'img/pizza1.png',
        price: 2
    },
    {
        name: 'Calabresa Pizza',
        img: 'img/pizza1.png',
        price: 2.5
    },
    {
        name: 'Chicken Pizza',
        img: 'img/pizza1.png',
        price: 1.5
    },
    {
        name: 'Barbecue Pizza',
        img: 'img/pizza1.png',
        price: 2
    },
    {
        name: 'Frances Pizza',
        img: 'img/pizza1.png',
        price: 2
    },
    {
        name: 'Portuguesa Pizza',
        img: 'img/pizza1.png',
        price: 2
    },
    {
        name: '4 cheese Pizza',
        img: 'img/pizza1.png',
        price: 2
    }

]