document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Validate form fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    // Form is valid, perform further actions (e.g., submit data to a server)
    // ...
  
    // Reset form
    document.getElementById("myForm").reset();
  });
document.getElementById('clear-button').addEventListener('click', function() {
    document.getElementById('').innerHTML = '';
  });
  