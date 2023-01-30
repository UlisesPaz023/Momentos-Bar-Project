const register = document.getElementById('register');
register.addEventListener('click', function(){
  window.location = './register.html';
});

const userLogin = () => {
  const emailInput = document.login.email.value;
  const passwordInput = document.login.password.value;
  const emailValidation = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if(!emailValidation.test(emailInput)){
    alert('El email no tiene un formato correcto.');
  }
  const users = JSON.parse(localStorage.getItem('users'));
  let userLog;
  let trueUserFlag;

  //recorrer array
  users.map((user) => {
    if (emailInput === user.email && passwordInput === user.password) {
      trueUserFlag = true;
      userLog = user;
    }
  });
    if(trueUserFlag){
      alert('Bievenido.');
      delete userLog.password;
      localStorage.setItem('userLog',JSON.stringify(userLog));
      window.location = './index.html';
    } else {
      alert('Usuario o contraseña incorrecta.');
    }
};

localStorage.removeItem('userLog');

// document.oncontextmenu = function () {
//   return false;
// };