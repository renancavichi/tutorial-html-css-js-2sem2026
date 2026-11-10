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
    console.log(stock)
}