let cont = 0;
let corpo = document.querySelector('#corpo');

reload.style.visibility = 'hidden';
corpo.style.display = 'none';

const escolheNivel = () => {
    let nivel = document.getElementsByName('nivel');
    let nb = null;
    if (nb === null) {
        for (let i = 0; i < nivel.length; i++) {
            if (nivel[i].checked) {
                corpo.style.display = 'block';
                return nb = Math.floor(Math.random() * nivel[i].value);
            }
        }
    }
}

document.querySelector('#ok').addEventListener('click', () => {
    let vlInput = document.querySelector('#valor');
    let message = document.querySelector('#message');
    verificaVazio(vlInput,message);
    verificaNumero(vlInput, escolheNivel(),message);
})

document.querySelector('#reload').addEventListener('click', () => {
    window.location.reload()
})


const verificaVazio = (e,message) => {
    if (e.value === '') {
        message.innerHTML = "DIGITE UM NÚMERO!";
        message.style.padding = "5px";
        message.style.color = "white";
        message.style.background = "red";
        return
    }
}


const verificaNumero = (numero, nSorteado,msg) => {
    let reload = document.querySelector('#reload');
    let display = document.querySelector('#display');
    let vida = document.querySelectorAll('#tentativas');
    if (parseInt(numero.value, 10) === nSorteado) {
        ganhou(numero, nSorteado,msg,reload,display);
    } else {
        perdeu(numero, nSorteado,msg,reload,display,vida);
    }
}

const ganhou = (e, nS,message,reload,display) => {
  
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

const perdeu = (e, nS,message,reload,display,vida) => {
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