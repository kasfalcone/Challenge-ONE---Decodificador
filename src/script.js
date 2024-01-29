/*
`A letra "e" é convertida para "enter"`
`A letra "i" é convertida para "imes"`
`A letra "a" é convertida para "ai"`
`A letra "o" é convertida para "ober"`
`A letra "u" é convertida para "ufat"`
*/

const textInput = document.querySelector('.input-text');
const btnCriptografar = document.querySelector('.btn-criptografar');
const btnDescriptografar = document.querySelector('.btn-descriptografar');

function criptografar(){
    let textoDigitado = textInput.value;
    let textoCriptgrafado = textoDigitado.replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/e/g, 'enter').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    limparTela();
    mostrar(textoCriptgrafado);
    textInput.value = ' ';
}

function descriptografar(){
    let textoRecebido = textInput.value;
    let textoDescriptgrafado = textoRecebido.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    mostrar(textoDescriptgrafado);
    textInput.value = ' ';
}

function mostrar (resultado){
    document.querySelector('.div_output').innerHTML = `
    <p id ="output-text" class="output-text"> 
    ${resultado} 
    </p> 
    <button class="btn-copiar" id="btn-copiar" onclick="copiar()">Copiar</button>
    `;
}

function limparTela(){
    let texto = textInput.value;
    document.querySelector('.div_output').style.display = texto == ' ' ? 'none' : 'flex';
    document.querySelector('.div_output_vazio').style.display = texto == ' ' ? 'flex' : 'none';
}

function copiar(){
    var elemento = document.getElementById('output-text');
    var temporario = document.createElement('input');
    temporario.value = elemento.innerText;
    document.body.appendChild(temporario);
    temporario.select();
    document.execCommand("copy");
    document.body.removeChild(temporario);
    alert('Texto Copiado!');
}
