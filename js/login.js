
// Login
const register = document.getElementById('myform-login');

register.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredential => {
    //  clear the form
    register.reset();
      console.log('sign in')
    })
});


const logout = document.querySelector('#logout');

logout.addEventListener('click', e => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log('sign out')
  })
})
