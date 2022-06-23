// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '8da72ea60dmsh4c8ff6c02794fb3p10ab6cjsn165735df46b6',
// 		'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
// 	}
// };


fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
	.then(response => response.json())
	.then(response => {
        console.log(response);
        display(response)
    })
	//.catch(err => console.error(err));
           

    function display(products)
    {
        const productBox = document.getElementById('shop-content')
        products.forEach(product => {
            const productBox = document.createElement('div')
            productBox.classList.add('product-box')
            const h2 = document.createElement('h2');
            h2.innerHTML = 'product.name';
            productBox.appendChild(h2);
          });

       // let prod = document.getElementById('myList1');
        //let newElement = document.createElement('p')
        //newElement.innerHTML=data;
        //prod.appendChild(newElement);
    }
       

      
 