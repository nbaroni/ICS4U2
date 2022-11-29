function login(){
    console.log(document.querySelector('#username').value);
    console.log(document.querySelector('#password').value);

if (document.querySelector('#username').value === 'admin' && document.querySelector('#password').value === '123456') {
    window.location.replace("admin.html");
}

}