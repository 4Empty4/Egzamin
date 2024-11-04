
function sprawdz() {
    // Define an array of product IDs
    const produkty = ['p1', 'p2', 'p3', 'p4']

    // Loop through each product ID
    for (let i = 0; i < produkty.length; i++) {
        // Get the quantity of the current product from the HTML element
        let ilosc = document.getElementById(produkty[i]).innerHTML

        // Get the current product's HTML element
        let produkt = document.getElementById(produkty[i])

        // If quantity is 0, set the background color to red
        if (ilosc == 0) {
            produkt.style = 'background-color: red;'
        }

        // If quantity is between 1 and 5, set the background color to yellow
        if (ilosc >= 1 && ilosc <= 5) {
            produkt.style = 'background-color: yellow;'
        }

        // If quantity is more than 5, set the background color to honeydew
        if (ilosc > 5) {
            produkt.style = 'background-color: Honeydew;'
        }
    }
}

// Function to update the quantity of a product
function aktualizuj(produktID) {
    // Get the HTML element of the specified product by its ID
    const produkt = document.getElementById(produktID)

    // Prompt the user to enter a new quantity
    const nowaIlosc = prompt('Podaj nową ilość:')

    // Update the HTML content of the product element with the new quantity
    produkt.innerHTML = nowaIlosc

    // Call the function to re-check and update the background colors
    sprawdz2()
}

// Initialize order ID with 0
let idZamowienia = 0

// Function to create an order with a product name
function zamow(nazwaProduktu) {
    // Display an alert with the order number and product name
    alert('Zamówienie nr: ' + idZamowienia + ' Produkt: ' + nazwaProduktu)

    // Increment the order ID for the next order
    idZamowienia++
}

// Initial call to the 'sprawdz' function to set initial background colors
sprawdz()