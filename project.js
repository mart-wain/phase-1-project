
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

            const price = document.createElement('price');
            price.innerHTML = product.price;

            const button=document.createElement('button')
            button.classList.add('btn-buy')
            button.innerHTML='add to cart'
            
            productBox.appendChild(image);
            productBox.appendChild(h4);
            productBox.append(price);
            productBox.append(button);
           
            

            shopContent.append(productBox)
          });

       // let prod = document.getElementById('myList1');
        //let newElement = document.createElement('p')
        //newElement.innerHTML=data;
        //prod.appendChild(newElement);
    }
       

      
 