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
    const tickerExists = document.getElementById(stock.ticket)
    if(tickerExists){
        alert("Ticker já existe")
        return
    }

    const stockList = document.getElementById("stockList")
    stockList.innerHTML +=
    `<div class="stockCard" id="${stock.ticket}">
        <header>
            <div>
                <h2>${stock.ticket}</h2>
                <span>${stock.name}</span>
            </div>
            <span class="stockValue up" >$ <span>${stock.price}</span></span>
        </header>
        <footer class="stockPosition">
            <span><b>${stock.quantity}</b> ações</span>
            <div>
                <span>Total</span>
                <span class="totalValue">$ ${stock.price * stock.quantity}</span>
            </div>
        </footer>
        <div class="stockActions">
            <button onclick="loadEditForm(this)">Editar</button>
            <button onclick="removeStock(this)">Excluir</button>
        </div>
    </div>`
    closeModal("addStockModal")
}

function loadEditForm(buttonEdit) {
    const stockCard = buttonEdit.closest('.stockCard')
    
    const stock = {
        ticket: stockCard.querySelector('header h2').textContent,
        name: stockCard.querySelector('header span').textContent,
        price: stockCard.querySelector('.stockValue span').textContent,
        quantity: stockCard.querySelector('.stockPosition span b').textContent
    }

    const editForm = document.getElementById('editStockForm')
    editForm.stockTicker.value = stock.ticket
    editForm.stockName.value = stock.name
    editForm.stockPrice.value = stock.price
    editForm.stockQuantity.value = stock.quantity

    openModal('editStockModal')
}

function removeStock(cardButton) {
    const stockCard = cardButton.closest('.stockCard')
    stockCard.remove()
}

function editStock(event) {
    event.preventDefault()
    const form = event.target
    const stock = {
        ticket: form.stockTicker.value,
        name: form.stockName.value,
        price: form.stockPrice.value,
        quantity: form.stockQuantity.value
    }
    const stockCard = document.getElementById(stock.ticket)
    stockCard.querySelector('header h2').textContent = stock.ticket
    stockCard.querySelector('header span').textContent = stock.name
    stockCard.querySelector('.stockValue span').textContent = stock.price
    stockCard.querySelector('.stockPosition span b').textContent = stock.quantity
    stockCard.querySelector('.totalValue').textContent = `$ ${stock.price * stock.quantity}`
    closeModal('editStockModal')
}