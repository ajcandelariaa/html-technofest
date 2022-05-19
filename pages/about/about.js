var button1 = document.getElementById('scd1');
var button2 = document.getElementById('scd2');
var button3 = document.getElementById('scd3');

var p1 = document.getElementById('scp1');
var p2 = document.getElementById('scp2');
var p3 = document.getElementById('scp3');

var details1 = document.getElementById('details1');
var details2 = document.getElementById('details2');
var details3 = document.getElementById('details3');




function clickedSc1(){
    button1.classList.add('active');
    p1.classList.add('active');
    
    button2.classList.remove('active');
    p2.classList.remove('active');
    button2.classList.remove('active');
    p2.classList.remove('active');
    button2.classList.remove('active');

    button3.classList.remove('active');
    p3.classList.remove('active');
    button3.classList.remove('active');
    p3.classList.remove('active');
    button3.classList.remove('active');

    details1.classList.remove('d-none');
    details1.classList.add('d-block');
    details2.classList.remove('d-block');
    details2.classList.add('d-none');
    details3.classList.remove('d-block');
    details3.classList.add('d-none');
}


function clickedSc2(){
    button2.classList.add('active');
    p2.classList.add('active');
    
    button1.classList.remove('active');
    p1.classList.remove('active');
    button1.classList.remove('active');
    p1.classList.remove('active');
    button1.classList.remove('active');
    
    button3.classList.remove('active');
    p3.classList.remove('active');
    button3.classList.remove('active');
    p3.classList.remove('active');
    button3.classList.remove('active');

    details2.classList.remove('d-none');
    details2.classList.add('d-block');
    details1.classList.remove('d-block');
    details1.classList.add('d-none');
    details3.classList.remove('d-block');
    details3.classList.add('d-none');
}

function clickedSc3(){
    button3.classList.add('active');
    p3.classList.add('active');

    
    button1.classList.remove('active');
    p1.classList.remove('active');
    button1.classList.remove('active');
    p1.classList.remove('active');
    button1.classList.remove('active');
    
    button2.classList.remove('active');
    p2.classList.remove('active');
    button2.classList.remove('active');
    p2.classList.remove('active');
    button2.classList.remove('active');
    
    details3.classList.remove('d-none');
    details3.classList.add('d-block');
    details1.classList.remove('d-block');
    details1.classList.add('d-none');
    details2.classList.remove('d-block');
    details2.classList.add('d-none');
}