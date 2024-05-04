function showLoginForm() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('signup-form').classList.add('hidden');
}

function showSignupForm() {
    document.getElementById('signup-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
}

function addToCart(bookTitle) {
    alert(bookTitle + " added to cart!");
    // You can implement actual cart functionality here
}

function searchBooks() {
    var searchTerm = document.querySelector('#search-bar input').value;
    // You can implement search functionality here, e.g., filtering books based on the search term
}
