//Javascript for all the pages

/*
  File name: app.js
  Project Part 2
  Group 1
  Due: Jul 16, 2023
*/

//IIFE -- immediately Function Express
(function(){

    function Start(){
      console.log("App Started..")
      //alert when user clicks the danger button, confirm
      let deleteButtons = document.querySelectorAll('.btn-danger');
      for (button of deleteButtons)
      {
        button.addEventListener('click', (event)=>{
          if (!confirm("Delete this survey?"))
          {
            event.preventDefault(); //ends the task
            window.location.assign('/surveys-list');
          }
        });
      }
    }
    window.addEventListener("load", Start)
    
})();


//Javascript for Functional Contact form in "contact.ejs"

//Inspiration for functional Contact form reference link: https://github.com/jamiewilson/form-to-google-sheets 
const scriptURL = 'https://script.google.com/macros/s/AKfycbwIVrc8T-BNqKOuxVnimOwW9JZ4lxrrodzWJCrhsRndN3gULLOes4LQarncQVC2kGOJ/exec';
const form = document.forms['submit-to-google-sheet'];
const message = document.getElementById("display-message");

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      // Display success message
      message.innerHTML = "Message sent successfully";
      form.reset();

      // Redirect to homepage after 2 seconds
      setTimeout(function() {
        window.location.href = "/"; //go to home page
      }, 2000);
    })
    .catch(error => console.error('Error!', error.message));
});
    

