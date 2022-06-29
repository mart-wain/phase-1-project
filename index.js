
fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
	.then(response => response.json())
	.then(response => {
        console.log(response);
        display(response)
    })
           

    function display(products)
    {
        const shopContent = document.getElementById('shop-content')
        products.forEach(product => {
            const productBox = document.createElement('div')
            productBox.classList.add('product-box')

            const image = new Image();
            image.src = product.image_link;
            image.classList.add('product-img')
            
            const h4 = document.createElement('h4');
            h4.innerHTML = product.name;

            const ksh = document.createElement('ksh')
            ksh.classList.add('price_sign')
            ksh.innerHTML = product.price_sign;

            const price = document.createElement('price');
            price.innerHTML = product.price;

            const button=document.createElement('button')
            button.classList.add('btn-buy')
            button.innerHTML='add to cart'
            
            productBox.appendChild(image);
            productBox.appendChild(h4);
            productBox.append(ksh);
            productBox.append(price);
            productBox.append(button);

            let addBtns = document.getElementsByClassName("btn-buy");
for (let i = 0; i < addBtns.length; i++) {
  const btn = addBtns[i];
  btn.addEventListener("click", addToCart);
}

function addToCart(e) {
  const button = e.target;
  button.innerText = "In Cart";
  button.disabled = true;
  const title = button.parentElement.nextElementSibling.textContent;
  const price =
    button.parentElement.nextElementSibling.nextElementSibling.children[0]
      .textContent;
  const img = button.parentElement.children[0].src;
  addItemToCart(h4, price, img);
}
//adding a cart button event
function addItemToCart(h4, price, img) {
  const newRow = document.createElement("div");
  newRow.classList.add("cart-item");
  newRow.innerHTML = `
  <img src="${img}" alt="product" srcset="" />
  <div>
  <h4>${h4}</h4>
  <h5>${price}</h5>
  <span class="remove-item">Remove</span>
  </div>
  <div>
  <i class="fas fa-chevron-up"></i>
  <p class="item-amount">1</p>
  <i class="fas fa-chevron-down"></i>
  </div>`;
  cartContent.append(newRow);
}
        shopContent.append(productBox)
          });

    }
       

      
  