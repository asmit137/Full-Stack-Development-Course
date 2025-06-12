 let products = []


        async function callfetch() {
            try {
                const data = await fetch("https://fakestoreapi.com/products")
                products = await data.json()
                return await products


            } catch (err) {
                console.error(err)

            }
        }

        let productList = callfetch()
        console.log(" productlist", productList)

        let cardContainer = document.getElementById("displayCard")

        setTimeout(() => {
            document.getElementById("loadder").classList.add("hidden")

            for (let element of products) {
                console.log(element)

                cardContainer.innerHTML += `<div class="card" style="width: 16rem;">
            <img src=${element.image} class="card-img-top fixed-image" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.description}</p>
                <p class="card-text"><strong>Category: ${element.category} </strong> </p>
                <p class="card-text"><strong>Price: ${element.price}</strong> </p>

                <div class="d-flex justify-content-between">
                    <p class="card-text float-left"><strong>Rating: ${element.rating.rate}</strong> </p>
                    <p class="card-text"><strong>count: ${element.rating.count}</strong> </p>

                </div>

            </div>`

            }
        }, 2000);