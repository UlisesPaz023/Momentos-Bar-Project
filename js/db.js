const users = [
  {
    id: 1,
    name: 'Ulises',
    lastName: 'Paz',
    email: 'lioipaz2010@gmail.com',
    password: 'uli123'
  },
  {
    id: 2,
    name: 'Mario',
    lastName: 'Osores',
    email: 'marioangel24@gmail.com',
    password: 'mario123'
  }
];

if(!localStorage.getItem('users')){
  const userJson = JSON.stringify(users);
  localStorage.setItem('users', userJson);
}