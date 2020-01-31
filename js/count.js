function CalcThree() {
    let a = +document.querySelector("#number_a").value;
    let b = +document.querySelector("#number_b").value;

    if(a == "") {
        alert('Введите площадь вашего дома!');
    }
    else if (b == "") {
        alert('Введите количество квартир!');

    }

    let x = +document.querySelector("#number_x").value;

    let res = a*b* x;

    document.querySelector('#sum').innerHTML = res;

}


function CalcSix() {
    let a = +document.querySelector("#number_a").value;
    let b = +document.querySelector("#number_b").value;

    if(a == "") {
        alert('Введите площадь вашего дома!');
    }
    else if (b == "") {
        alert('Введите количество квартир!');

    }

    let y = +document.querySelector("#number_y").value;

    let res = a*b* y;


    document.querySelector('#sum').innerHTML = res;
}


function CalcTwelve() {
    let a = +document.querySelector("#number_a").value;
    let b = +document.querySelector("#number_b").value;

    if(a == "") {
        alert('Введите площадь вашего дома!');
    }
    else if (b == "") {
        alert('Введите количество квартир!');

    }

    let z = +document.querySelector("#number_z").value;

    let res = a*b* z;

    document.querySelector('#sum').innerHTML = res;
}


function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}