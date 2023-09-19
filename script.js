function toggleMode() {
    let html = document.documentElement 
    html.classList.toggle('light')
}




const images = [
    {'id': '1', 'url':'./1.png'},
    {'id': '2', 'url':'./2.png'},
    {'id': '3', 'url':'./3.png'},
    {'id': '4', 'url':'./4.png'},
    {'id': '4', 'url':'./5.png'},
]
const container = document.querySelector('.container-items');
   for (const image of images){
    container.innerHTML += `
    <div class ='item'>
      <img src ='${image.url}'
      </div>
    `
} 

let items = document.querySelectorAll('.item');

document.querySelector('#next').addEventListener('click', ()=>{
    container.appendChild(items[0]);
    items = document.querySelectorAll('.item');
});

document.querySelector('#previous').addEventListener('click', ()=> {
    const lastItem = items[items.length - 1];
    container.insertBefore(lastItem, items[0] );
    items = document.querySelectorAll('.item');
});


function addToCart(event) {
    const price = parseFloat(event.target.getAttribute("data-price"));
    total += price;
    const cartItem = document.createElement("div");
    cartItem.textContent = `Produto adicionado - R$${price.toFixed(2)}`;
    cart.appendChild(cartItem);
    updateTotal();
}

// Função para atualizar o total do carrinho
function updateTotal() {
    totalDisplay.textContent = `Total: R$${total.toFixed(2)}`;
}

// Elementos da página
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cart = document.getElementById("cart");
const totalDisplay = document.createElement("div");
let total = 0;

// Adicionar evento de clique aos botões "Adicionar ao Carrinho"
addToCartButtons.forEach(button => {
    button.addEventListener("click", addToCart);
});

// Inicializar a exibição do total
updateTotal();
cart.appendChild(totalDisplay);