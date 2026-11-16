//alert("Olá, carreguei o JS!")

function openModal(idModal) {
    const modal = document.getElementById(idModal)
    modal.style.display = "flex"
}

function closeModal(idModal) {
    const modal = document.getElementById(idModal)
    modal.style.display = "none"
}

function addStock(event) {
    event.preventDefault()
    const form = event.target
    const stock = {
        ticket: form.stockTicker.value,
        name: form.stockName.value,
        price: form.stockPrice.value,
        quantity: form.stockQuantity.value
    }
    const stockList = document.getElementById("stockList")
    stockList.innerHTML +=
    `<div class="stockCard">
        <header>
            <div>
                <h2>${stock.ticket}</h2>
                <span>${stock.name}</span>
            </div>
            <span class="stockValue up" >$ ${stock.price}</span>
        </header>
        <footer class="stockPosition">
            <span><b>${stock.quantity}</b> ações</span>
            <div>
                <span>Total</span>
                <span class="totalValue">$ ${stock.price * stock.quantity}</span>
            </div>
        </footer>
        <div class="stockActions">
            <button onclick="">Editar</button>
            <button onclick="">Excluir</button>
        </div>
    </div>`
    closeModal("addStockModal")
}