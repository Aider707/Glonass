const button = document.querySelector('button');
const out = document.querySelector('.out');

button.addEventListener('click', function(){
    out.innerHTML = 'город Севастополь, ул. Промышленная д.4';
})