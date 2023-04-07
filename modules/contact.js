//Contact Form in PHP
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault(); // prevent form from submitting
  fetch('../PHP/contactus.php', {
      method: 'POST',
      body: new FormData(document.querySelector('form'))
  })
  .then(response => response.json())
  .then(data => {
      if (data.message) {
          // display the message on the webpage
          const messageDiv = document.querySelector('#message');
          messageDiv.textContent = data.message;
          messageDiv.scrollIntoView({behavior: "smooth"}); // scroll to the message
      }
  })
  .catch(error => console.error(error));
});




