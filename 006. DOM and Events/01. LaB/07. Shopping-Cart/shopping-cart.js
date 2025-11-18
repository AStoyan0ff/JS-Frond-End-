document.addEventListener('DOMContentLoaded', solve);

function solve() {

    const buttons = document.querySelectorAll('.add-product');
    const checkoutBtn = document.querySelector('.checkout');
    const output = document.querySelector('textarea');

    const boughtProducts = new Set();
    let total = 0;

    buttons.forEach(btn => btn.addEventListener('click', addProduct));
    checkoutBtn.addEventListener('click', checkout);

    function addProduct(e) {

        const productElement = e.target.closest('.product');

        const name = productElement.querySelector('.product-title').textContent;
        const price = Number(productElement.querySelector('.product-line-price').textContent);

        output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;

        boughtProducts.add(name);
        total += price;
    }

    function checkout() {

        const productList = [...boughtProducts].join(', ');

        output.value += `You bought ${productList} for ${total.toFixed(2)}.`;

        checkoutBtn.disabled = true;
        buttons.forEach(b => b.disabled = true);
    }
}

