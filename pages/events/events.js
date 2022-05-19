var button1 = document.getElementById('btn1');
var button2 = document.getElementById('btn2');
var div1 = document.getElementById('techtalks');
var div2 = document.getElementById('techcomp');

function ttalks(){
    button1.classList.add('active');
    button2.classList.remove('active');

    div1.classList.remove('d-none');
    div1.classList.add('d-block');
    div2.classList.remove('d-block');
    div2.classList.add('d-none');
}

function tcomp(){
    button2.classList.add('active');
    button1.classList.remove('active');

    
    div2.classList.remove('d-none');
    div2.classList.add('d-block');
    div1.classList.remove('d-block');
    div1.classList.add('d-none');
}