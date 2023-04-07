var popup = document.getElementById("popup");
var showPopupButton = document.getElementById("show-popup");
var closeButton = document.getElementById("close");

showPopupButton.addEventListener("click", function() {
  popup.style.display = "block";
});

closeButton.addEventListener("click", function() {
  popup.style.display = "none";
});

showPopupButton.addEventListener("click", function() {
  if (!localStorage.getItem("popupShown")) {
    popup.style.display = "block";
    localStorage.setItem("popupShown", "true");
  }
});

// Declare and initialize the cart count and total price variables
let cartCount = 0;
let totalPrice = 0;

// Select all the buttons and add a click event listener to each one
document.querySelectorAll('.product-item button').forEach(button => {
	button.addEventListener('click', () => {
		// Get the price of the clicked product and add it to the total price
		const price = parseFloat(button.getAttribute('data-price'));
		totalPrice += price;
		
		// Increment the cart count and display an alert message with the updated cart count and total price
		cartCount++;
		alert(`Item added to cart. Cart count: ${cartCount}. Total price: #${totalPrice.toFixed(2)
		}`);
	});
});



const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
	// Hide all slides
	slides.forEach(slide => {
		slide.classList.remove('active');
	});

	// Show current slide
	slides[currentSlide].classList.add('active');

	// Move to the next slide
	currentSlide++;

	// Reset to the first slide if the end is reached
	if (currentSlide >= slides.length) {
		currentSlide = 0;
	}

	// Show the next slide after 5 seconds
	setTimeout(showSlide, 5000);
}

// Show the first slide
showSlide();


