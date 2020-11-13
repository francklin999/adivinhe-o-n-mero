let nb = null;
let cont = 0;
let display = document.querySelector('#display');
let vlInput = document.querySelector('#valor');
let nivel = document.getElementsByName('nivel');
let btn = document.querySelector('#ok');
let corpo = document.querySelector('#corpo');
let vida = document.querySelectorAll('#tentativas');
let message = document.querySelector('#message');
let reload = document.querySelector('#reload');

reload.style.visibility = 'hidden';
corpo.style.display = 'none';

const escolheNivel = () => {
    if (nb === null) {
        for (let i = 0; i < nivel.length; i++) {
            if (nivel[i].checked) {
                corpo.style.display = 'block';
                return nb = Math.floor(Math.random() * nivel[i].value);
            }
        }
    }
}

btn.addEventListener('click', () => {
    verificaVazio(vlInput);
    verificaNumero(vlInput, nb);
})

reload.addEventListener('click', () => {
    window.location.reload()
})


const verificaVazio = (e) => {
    if (e.value === '') {
        message.innerHTML = "DIGITE UM NÚMERO!";
        message.style.padding = "5px";
        message.style.color = "white";
        message.style.background = "red";
        return
    }
}


const verificaNumero = (numero, nSorteado) => {
    if (parseInt(numero.value, 10) === nSorteado) {
        ganhou(numero, nSorteado);
    } else {
        perdeu(numero, nSorteado);
    }
}

const ganhou = (e, nS) => {
    reload.style.visibility = 'visible';
    message.innerHTML = "PARABÉNS VOCÊ GANHOU!";
    message.style.padding = "5px";
    message.style.color = "white";
    message.style.background = "green";
    display.style.background = "green";
    display.innerHTML = `<span id="numero">${nS}</span>`;

    if (e.value.length === 3) {
        display.style.width = "212px";
        display.style.marginLeft = "227px";
    } else if (e.value.length === 2) {
        display.style.width = "154px";
        display.style.marginLeft = "254px";
    }
}

const perdeu = (e, nS) => {

    if (parseInt(e.value, 10) > nS) {
        message.innerHTML = "NÚMERO DIGITADO É MAIOR";
        message.style.padding = "5px";
        message.style.color = "white";
        message.style.background = "blue";
    } else {
        message.innerHTML = "NÚMERO DIGITADO É MENOR";
        message.style.padding = "5px";
        message.style.color = "white";
        message.style.background = "blue";
    }

    if (cont > 2) {
        display.style.background = "red";
        message.innerHTML = "VOCÊ PERDEU, TENTE OUTRA VEZ!";
        message.style.padding = "5px";
        message.style.color = "white";
        message.style.background = "red";
        display.innerHTML = `<span id="numero">${nS}</span>`
        reload.style.visibility = 'visible';

        if (nS.toString().length === 3) {
            display.style.width = "212px";
            display.style.marginLeft = "227px";

        } else if (nS.toString().length === 2) {
            display.style.width = "154px";
            display.style.marginLeft = "254px";
        }
    } else {
        return vida[0].children[cont++].children[0].attributes[0].value = "img/broken-heart.png";
    }
}