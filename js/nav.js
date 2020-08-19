const usernav = document.getElementById('usernav');
const close = document.getElementById('close');

let username = JSON.parse(localStorage.getItem('user'));

if(username != null){
    usernav.innerHTML = '<a href="#" id="close" class="subnavbtn nav link active">'+username[0].email+'</a>';
}else{
    usernav.innerHTML = '<a href="signup.html" id="close" class="subnavbtn nav link active">Signup</a>';
}