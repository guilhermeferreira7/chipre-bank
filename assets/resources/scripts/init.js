if(localStorage.getItem('session')=== null)
    localStorage.setItem('session', 'None');

if(localStorage.getItem('accounts') === null)
    localStorage.setItem('accounts', JSON.stringify(Array.from(new Map())));

if(localStorage.getItem('movs') === null)
    localStorage.setItem('movs', JSON.stringify(Array.from(new Map())));

if(localStorage.getItem('session')!=='None')
    window.location.replace('menu-user.html');