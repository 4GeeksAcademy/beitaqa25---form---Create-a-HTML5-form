document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    var cardNumber = document.getElementById('cardNumber').value;
    var cvc = document.getElementById('cvc').value;
    var amount = document.getElementById('amount').value;
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var postalCode = document.getElementById('postalCode').value;
    var paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');

    var alertBox = document.getElementById('alert');

    if (!cardNumber || !cvc || !amount || !firstName || !lastName || !city || !state || !postalCode || !paymentMethod) {
        alertBox.style.display = 'block';
    } else {
        alertBox.style.display = 'none';
        // Here you can handle the form submission, for example, sending the data to the server
        console.log('Form submitted successfully');
        alert('Form submitted successfully!');
    }
});
