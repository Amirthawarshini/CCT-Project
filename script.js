document.addEventListener("DOMContentLoaded", function () {
    const prices = {
        pizza: 150, burger: 100, pasta: 120, samosa: 40, chicken_roll: 130,
        coke: 50, lemonade: 60, coffee: 80, mojito: 70, milkshake: 90,
        vanilla: 60, chocolate: 70, strawberry: 65, butterscotch: 75, mango: 80,
        brownie: 110, pastry: 130, donut: 80, cupcake: 90, muffin: 85
    };

    function updateTotalBill() {
        let total = 0;
        let orderSummary = [];
        document.querySelectorAll(".item-quantity").forEach(input => {
            const item = input.dataset.item;
            const quantity = parseInt(input.value) || 0;
            if (quantity > 0) {
                const price = prices[item];
                total += quantity * price;
                orderSummary.push({ name: item, quantity: quantity });
            }
        });
        document.getElementById("total-bill").innerHTML = "Your total bill is ₹ " + total;
        localStorage.setItem("orderSummary", JSON.stringify(orderSummary));
    }

    document.querySelectorAll(".item-quantity").forEach(input => {
        input.addEventListener("input", updateTotalBill);
    });
});

function goToConfirmation() {
    window.location.href = "confirmation.html";
}
