let sendBtn = document.getElementById('send');
let resetBtn = document.getElementById('reset');
let form = document.getElementById('form')

form.addEventListener('submit',(e) => {
    e.preventDefault();
});


resetBtn.addEventListener('click',(e)=>{
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    name.value = '';
    email.value='';
    message.value='';
});
// new start SendBtn
sendBtn.addEventListener('click',(e)=> {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    // Set value and localStorage
    name = name.value;
    localStorage.setItem('name',name);

    email = email.value;
    localStorage.setItem('email',email);

    message = message.value;
    localStorage.setItem('message',message);
});