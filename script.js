// let kartochki = document.querySelector('.kartochki');
// let searchInput = document.getElementById('searchInput');
// let themeBtn = document.getElementById('themeBtn');

// fetch('https://fakestoreapi.com/products?limit=10')
// .then(Response => Response.json())
// .then(data => {
//     kartochki.innerHTML = ''
//     data.forEach(element => {
//         let divCard = document.createElement('div')
//         divCard.classList.add('card')
//         divCard.innerHTML = `
//         <img src="${element.image}" alt="" class="img">
//             <h2>${element.title}</h2>
//             <p>${element.description.slice(0, 50)}...</p>
//             <p class="price">$${element.price}</p>
//             <button class="btn" >Купить </button>
//         `
//         kartochki.appendChild(divCard);
//     });
// })



// themeBtn.addEventListener('click', () => {
// document.body.classList.toggle('dark');



// });


// const kartochki = document.querySelector('.kartochki');
//   const searchInput = document.getElementById('searchInput');
//   const themeBtn = document.getElementById('themeBtn');

//   let allProducts = [];

//   fetch('https://fakestoreapi.com/products?limit=10')
//     .then(response => response.json())
//     .then(data => {
//       allProducts = data;
//       renderProducts(allProducts);
//     })

//   function renderProducts(products) {
//     kartochki.innerHTML = '';
//     products.forEach(product => {
//       const divCard = document.createElement('div');
//       divCard.classList.add('card');
//       divCard.innerHTML = `
//         <img src="${product.image}" alt="" class="img">
//         <h2>${product.title}</h2>
//         <p>${product.description.slice(0, 50)}...</p>
//         <p class="price">$${product.price}</p>
//         <button class="btn">Купить</button>
//       `;
//       kartochki.appendChild(divCard);
//     });
//   }

//   function filterProducts() {
//     const searchValue = searchInput.value.toLowerCase().trim();
//     const filtered = allProducts.filter(product =>
//       product.title.toLowerCase().includes(searchValue) ||
//       product.description.toLowerCase().includes(searchValue) ||
//       product.category?.toLowerCase().includes(searchValue)
//     );
//     generator(filtered);
//   }

//   function toggleTheme() {
//     document.body.classList.toggle('dark');

//     if (document.body.classList('dark')) {
//       themeBtn.textContent = '☀️ Light Mode';
//     } else {
//       themeBtn.textContent = '🌙 Dark Mode';
//     }
//   }

//   searchInput.addEventListener('input', filterProducts);
//   themeBtn.addEventListener('click', toggleTheme);









let kartochki = document.querySelector('.kartochki');
let searchInput = document.getElementById('searchInput');
let themeBtn = document.getElementById('themeBtn');

fetch('https://fakestoreapi.com/products?limit=10')
.then(Response => Response.json())
.then(data => {
    
    function renderCards(products) {
        kartochki.innerHTML = '';
        products.forEach(element => {
            let divCard = document.createElement('div');
            divCard.classList.add('card');
            divCard.innerHTML = `
                <img src="${element.image}" alt="" class="img">
                <h2>${element.title}</h2>
                <p>${element.description.slice(0, 50)}...</p>
                <p class="price">$${element.price}</p>
                <button class="btn">Купить</button>
            `;
            kartochki.appendChild(divCard);
        });
    }
    
    
    renderCards(data);
    
    
    searchInput.addEventListener('input', () => {
        const searchValue = searchInput.value.toLowerCase().trim();
        
        if (searchValue) {
            const filtered = data.filter(product =>
                product.title.toLowerCase().includes(searchValue) ||
                product.category.toLowerCase().includes(searchValue)
            );
            renderCards(filtered);
        } else {
            renderCards(data);
        }
    });
});

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});