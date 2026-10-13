document.addEventListener("DOMContentLoaded", function () {
  const quantityInput = document.getElementById("quantity");
  const totalPriceDisplay = document.getElementById("totalPrice");

  if (quantityInput && totalPriceDisplay) {
    const basePrice = 499;
    const shippingFee = 25;

    quantityInput.addEventListener("input", function () {
      let qty = parseInt(quantityInput.value) || 1;
      if (qty < 1) qty = 1;

      let grandTotal = (basePrice * qty) + shippingFee;
      totalPriceDisplay.textContent = `$${grandTotal.toFixed(2)}`;
    });
  }

  const orderForm = document.getElementById("orderForm");
  if (orderForm) {
    orderForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nameInput = document.getElementById("fullName");
      const name = nameInput ? nameInput.value : "Customer";
      const randomOrderId = Math.floor(100000 + Math.random() * 900000);

      alert(`Order Placed Successfully!\n\nThank you ${name}.\nYour Order ID is #AC-${randomOrderId}.`);

      orderForm.reset();
      if (totalPriceDisplay) {
        totalPriceDisplay.textContent = "$524.00";
      }
    });
  }
});