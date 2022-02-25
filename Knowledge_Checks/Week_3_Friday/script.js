
//target the form and add the submit event listener

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let username = document.getElementById("username").value
  console.log(username);
});


