const login = document.getElementById('login');
login.addEventListener('click', function(){
  window.location = './login.html';
});
// const users = JSON.parse(localStorage.getItem('users'));
let signIn = document.getElementById('signIn');

let regUser = () => {
  let user = {
    id : users.length+1,
    name : document.getElementById('name').value,
    lastName : document.getElementById('lastName').value,
    password : document.getElementById('password').value,
    email : document.getElementById('email').value
  }
  let nullFlag
  let emailFlag;
  const emailValidation = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const passValidation = /^(?=.*[a-z])(?=.*[A-Z])([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/;
  let passConfirm = document.getElementById('passConfirm').value;

  Object.keys(user).forEach(function(key) {
    if(user[key]==='' || user[key]==null){
      nullFlag = true;
    }
  });
  
  users.map((x)=>{
    if(user.email===x.email){
      emailFlag = true;
    }
  });
  
  if(nullFlag){
    alert('Debes completar todos los campos.');
  } else if(emailFlag){
    alert('El email ya está en uso.');
  } else if(!emailValidation.test(user.email)){
    alert('El email no tiene un formato correcto.');
  } else if(user.password.length < 8){
    alert('La contraseña debe contener almenos 8 caracteres.');
  } else if(!passValidation.test(user.password)){
    alert('La contraseña debe contener mayúsculas, minúsculas y números.');
  } else if (!(passConfirm === user.password)){
    alert('Las contraseñas no coinciden.');
  } else{
    users.push(user);
    localStorage.setItem('users',JSON.stringify(users));
  }
};

localStorage.removeItem('userLog');