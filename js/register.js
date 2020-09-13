
// Register ------------------------

const form = document.getElementById('myform');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
    //  clear the form
    form.reset();
      console.log('sign up')
    })
});
