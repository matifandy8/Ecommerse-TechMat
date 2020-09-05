function validation(){
  var email = document.getElementById('inputEmail').value;
  var password = document.getElementById('inputPassword').value;
  var error_message = document.getElementById('error_message');
  var text;

  error_message.style.padding = "10px";

  if(email === ''){
    text = "Escriba un email";
    error_message.innerHTML = text;
    return false;
  }
  if(password === ''){
    text = "Escriba una contraseña";
    error_message.innerHTML = text;
    return false;
  }
  window.location="home.html"
  return true;
}

// ------------------------

const form = document.getElementById('myform');
const email = document.getElementById('inputEmail');
const password = document.getElementById('inputPassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();
let users = Array(
        {
          email: email.value,
          contraseña: password.value
        }
);
    localStorage.setItem('user',JSON.stringify(users));
    validation();
});