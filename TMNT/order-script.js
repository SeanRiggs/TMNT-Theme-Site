document.addEventListener('DOMContentLoaded', function () {
  const orderForm = document.getElementById('order-form');
  const thankYouMessage = document.getElementById('thank-you');
  const pizzaSelect = document.getElementById('pizza');
  const quantityInput = document.getElementById('quantity');
  const addPizzaButton = document.getElementById('add-pizza');
  const removePizzaButton = document.getElementById('remove-pizza');
  const selectedPizzas = document.getElementById('selected-pizzas');
  const totalCost = document.getElementById('total-cost');

  const selectedPizzaList = [];

  // Get references to input fields and error messages
  const nameInput = document.getElementById('name');
  const nameError = document.getElementById('name-error');
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');

  // Get references to progress indicator elements
  const progressIndicator = document.getElementById('progress-indicator');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');
  const formSteps = document.querySelectorAll('.form-step');
  let currentStep = 0;

  // Add click event listener for "Add Pizza" button
  addPizzaButton.addEventListener('click', () => {
    const pizzaName = pizzaSelect.value;
    const quantity = parseInt(quantityInput.value);

    // Check if a pizza is selected
    if (pizzaName.trim() === '') {
      alert('Please select a pizza before adding.');
      return;
    }

    // Validate quantity (between 1 and 10)
    if (isNaN(quantity) || quantity < 1 || quantity > 10) {
      alert('Please enter a valid quantity (1-10).');
      return;
    }

    // Add the selected pizza to the list
    selectedPizzaList.push({ name: pizzaName, quantity: quantity });

    // Update the displayed selected pizzas and total cost
    updateSelectedPizzas();
    updateTotalCost();

    // Clear the pizza selection and quantity input
    pizzaSelect.value = '';
    quantityInput.value = 1;
  });

  // Add click event listener for "Remove Pizza" button
  removePizzaButton.addEventListener('click', () => {
    if (selectedPizzaList.length > 0) {
      selectedPizzaList.pop();
      updateSelectedPizzas();
      updateTotalCost();
    }
  });

  // Function to update the displayed selected pizzas
  function updateSelectedPizzas() {
    const pizzaList = document.getElementById('pizza-list');
    pizzaList.innerHTML = '';

    selectedPizzaList.forEach(function (pizza) {
      const listItem = document.createElement('li');
      listItem.textContent = `${pizza.name} x ${pizza.quantity}`;
      pizzaList.appendChild(listItem);
    });
  }

  // Function to update the total cost based on selected pizzas
  function updateTotalCost() {
    const costPerPizza = 20;
    const total = selectedPizzaList.reduce(
      (acc, pizza) => acc + pizza.quantity * costPerPizza,
      0
    );
    totalCost.textContent = total.toFixed(2);
  }

    // Get reference to the "Cancel" button
	const cancelButton = document.getElementById('cancel');

	// Event listener for "Cancel" button
	cancelButton.addEventListener('click', () => {
	  window.location.href = 'index.html'; // Replace 'index.html' with the URL of your home page
	});
  
  // Event listener for form submission
  orderForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Validate name and email fields
    if (!nameInput.value.trim()) {
      nameError.textContent = 'Name is required';
      return;
    }

    if (!emailInput.value.trim()) {
      emailError.textContent = 'Email is required';
      return;
    }

    if (selectedPizzaList.length === 0) {
      alert('Pizza selection is required.');
      return;
    }

    // Check if there are any error messages
    if (nameError.textContent || emailError.textContent) {
      return;
    }


	// Hide the form and show the thank you message
    orderForm.style.display = 'none';
    thankYouMessage.style.display = 'block';

    // Redirect to the home page after a delay
    setTimeout(function () {
      window.location.href = 'index.html'; // Replace 'index.html' with your home page URL
    }, 3000); // Redirect after 3 seconds (adjust as needed)
  });
});
