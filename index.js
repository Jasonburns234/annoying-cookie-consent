// Get references to DOM elements
const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const consentForm = document.getElementById('consent-form');
const modalText = document.getElementById('modal-text');
const declineBtn = document.getElementById('decline-btn');
const modalChoiceBtns = document.getElementById('modal-choice-btns');

// Show the modal after a delay of 1500 milliseconds (1.5 seconds)
setTimeout(function() {
    modal.style.display = 'inline';
}, 1500);

// Add an event listener to the modal close button
modalCloseBtn.addEventListener('click', function() {
    // Hide the modal when the close button is clicked
    modal.style.display = 'none';
});

// Add an event listener to the decline button
declineBtn.addEventListener('mouseenter', function() {
    // Toggle a class to reverse the appearance of the modal choice buttons
    modalChoiceBtns.classList.toggle('modal-btns-reverse');
});

// Add an event listener to the consent form submission
consentForm.addEventListener('submit', function(e) {
    // Prevent the default form submission behavior
    e.preventDefault();
    
    // Get form data using FormData
    const consentFormData = new FormData(consentForm);
    const fullName = consentFormData.get('fullName');
    
    // Display loading content in the modal text area
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`;
    
    // Update the loading text after a delay of 1500 milliseconds (1.5 seconds)
    setTimeout(function() {
        document.getElementById('upload-text').innerText = `Making the sale...`;
    }, 1500);
    
    // Update the modal content after a delay of 3000 milliseconds (3 seconds)
    setTimeout(function() {
        // Update the inner HTML of the modal with personalized content
        document.getElementById('modal-inner').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>`;
        
        // Enable the modal close button
        modalCloseBtn.disabled = false;
    }, 3000);
});
