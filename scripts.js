const menuOptions = [
    { name: 'X-Salada', price: 30, vegan: false, src: './img/xsalada.jpeg' },
    { name: 'X-Bacon', price: 34, vegan: false, src: './img/xbacon.png' },
    { name: 'X-Bacon Egg', price: 39, vegan: false, src: './img/bacon-egg.png' },
    { name: 'Monstruoso', price: 50, vegan: false, src: './img/monstruoso.png' },
    { name: 'Big Vegano', price: 55, vegan: true, src: './img/xvegan.png' },
    { name: 'X-Vegan', price: 45, vegan: true, src: './img/monstruoso-vegan.png' },
]

const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttomMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')

function formatCurrency(value){
    const newValue = value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
    })
    return newValue
}

function showAll(productsArray) {
    let myLi = ''
    productsArray.forEach((product) => {
        // myLi = myLi  
        myLi += `
        <li >
            <img src="${product.src}"">
            <p> ${product.name}</p>
            <p class="iten-price">${formatCurrency(product.price)}</p>
        </li>
        `
    })
    list.innerHTML = myLi
}
function mapAllItens() {
    const newPrices = menuOptions.map((product) => ({
        ...product, // Spread Operator , faz com que os itens que nao foram alterados permanecam iguais, 

        price: product.price * 0.9, // vai dar 10% de desconto

    }))
    showAll(newPrices)
    console.log(newPrices)
}

function sumAllItems(){
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)  // curr é o valor corrente de cada array
    
    list.innerHTML = `
        <li >            
            <p > O Valor total dos itens é R$ ${formatCurrency(totalValue)}</p>
        </li>
        `
}
function filterAllItems(){
    const filterJustVegan = menuOptions.filter((product) => product.vegan === true)
    
    showAll(filterJustVegan)

}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttomMapAll.addEventListener('click', mapAllItens)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItems)

