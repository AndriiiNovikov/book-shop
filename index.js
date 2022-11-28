const url = "./assets/data/books.json";
fetch(url) //path to the file with json data
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch(function (error) {
    console.error("smth went wrong with JSON!!!!!!!!!");
    console.error(error);
  });

function renderProducts(products) {
  const productsContainer = document.getElementById("products-list");
  for (const product of products) {
    productsContainer.innerHTML += `
                <article>
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                </article>
            `;
  }
}
renderProducts();
