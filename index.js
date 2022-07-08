const firstForm = document.querySelector('#first-form');
const secondForm = document.querySelector('#second-form');
const thirdForm = document.querySelector('#third-form');
const fourthForm = document.querySelector('#fourth-form');
const fifthForm = document.querySelector('#fifth-form');
const sixthForm = document.querySelector('#sixth-form');
const seventhForm = document.querySelector('#seventh-form');
const eighthForm = document.querySelector('#eighth-form');
const ninthForm = document.querySelector('#ninth-form');
const tenthForm = document.querySelector('#tenth-form');
const eleventhForm = document.querySelector('#eleventh-form');
const twelfthForm = document.querySelector('#twelfth-form');

// Saludamos al usuario
firstForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;

    const div = document.querySelector('.first-form__div')
    div.innerHTML = `<h3>Hola ${nombre}, ahora vamos a comenzar...</h3>`;
    console.log(nombre)
})

// Simple suma
secondForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const num1 = parseInt(e.target.num1.value);
    const num2 = parseInt(e.target.num2.value);

    const div = document.querySelector('.second-form__div')
    div.innerHTML = `<h3>El resultado es: ${num1 + num2}</h3>`;
})

// Comparamos dos números para saber cual es el mayor
thirdForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const num1 = parseInt(e.target.higger1.value);
    const num2 = parseInt(e.target.higger2.value);

    const div = document.querySelector('.third-form__div')

    num1 > num2 ?
        div.innerHTML = `<h3>${num1} es mayor que ${num2}</h3>`
        :
        div.innerHTML = `<h3>${num2} es mayor que ${num1}</h3>`;
})

// Comparamos tres números para saber cual es el mayor
fourthForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const num1 = parseInt(e.target.newHigger1.value);
    const num2 = parseInt(e.target.newHigger2.value);
    const num3 = parseInt(e.target.newHigger3.value);

    const arrayNumbers = [num1, num2, num3];
    arrayNumbers.sort().reverse();

    const div = document.querySelector('.fourth-form__div')

    div.innerHTML = `<h3>El numero mayor es: ${arrayNumbers[0]}</h3>`;
})

// Verificamos si un número es par o impar
fifthForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const num = parseInt(e.target.divisible.value);
    const div = document.querySelector('.fifth-form__div')

    num % 2 === 0 ? div.innerHTML = `<h3>El numero ${num} es par</h3>` : div.innerHTML = `<h3>El numero ${num} es impar</h3>`;
})

// Contamos la cantidad de letras "A" de una frase
sixthForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = e.target.letter.value;
    const arraySeparado = text.split('');
    const arrarConLetraA = arraySeparado.filter(item => item === 'a');

    const div = document.querySelector('.sixth-form__div')
    div.innerHTML = `<h3>El numero de letras a es: ${arrarConLetraA.length}</h3>`;
})

// Contamos las vocales de una frase
seventhForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    const text = e.target.vowels.value;
    const arraySeparado = text.split('');

    const arrayVowels = arraySeparado.filter(item => vowels.includes(item));

    const div = document.querySelector('.seventh-form__div')
    div.innerHTML = `<h3>La frase contiene ${arrayVowels.length} vocales y su orden de aparición es: ${arrayVowels.join(", ")}</h3>`;
})

// Contamos cuantas veces aparece una letra en una frase
eighthForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = e.target.vowels2.value;

    const arraySeparado = text.split('');
    const filterLetterA = arraySeparado.filter(item => item === 'a').length;
    const filterLetterE = arraySeparado.filter(item => item === 'e').length;
    const filterLetterI = arraySeparado.filter(item => item === 'i').length;
    const filterLetterO = arraySeparado.filter(item => item === 'o').length;
    const filterLetterU = arraySeparado.filter(item => item === 'u').length;

    const div = document.querySelector('.eighth-form__div')

    div.innerHTML = `<h3>La frase contiene ${filterLetterA} letras "A", ${filterLetterE} letras "E", ${filterLetterI} letras "I", ${filterLetterO} letras "O" y ${filterLetterU} letras "U"</h3>`;
})

// Verificamos si un número es divisible entre otro
ninthForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const num = parseInt(e.target.divisible2.value);

    const divisibleArr = []

    const div1 = document.querySelector('.ninth-form__div');

    num % 2 === 0 && divisibleArr.push(2);
    num % 3 === 0 && divisibleArr.push(3);
    num % 5 === 0 && divisibleArr.push(5);
    num % 7 === 0 && divisibleArr.push(7);

    div1.innerHTML = `<h3>El numero ${num} es divisible entre: ${divisibleArr.join(", ")}</h3>`;
})


// Verificamos por cuantos números es divisible el número elegido por el usuario
tenthForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const num = parseInt(e.target.divisible3.value);

    const divisibleArr = [];

    const divisibleBy2 = num % 2 === 0;
    const divisibleBy3 = num % 3 === 0;
    const divisibleBy4 = num % 4 === 0;
    const divisibleBy5 = num % 5 === 0;
    const divisibleBy6 = num % 6 === 0;
    const divisibleBy7 = num % 7 === 0;
    const divisibleBy8 = num % 8 === 0;
    const divisibleBy9 = num % 9 === 0;

    divisibleBy2 && divisibleArr.push(2);
    divisibleBy3 && divisibleArr.push(3);
    divisibleBy4 && divisibleArr.push(4);
    divisibleBy5 && divisibleArr.push(5);
    divisibleBy6 && divisibleArr.push(6);
    divisibleBy7 && divisibleArr.push(7);
    divisibleBy8 && divisibleArr.push(8);
    divisibleBy9 && divisibleArr.push(9);

    const div = document.querySelector('.tenth-form__div')
    div.innerHTML = `<h3>El numero ${num} es divisible por: ${divisibleArr.join(", ")}</h3>`;
})

// Verificamos divisores comunes de dos números
eleventhForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const num1 = parseInt(e.target.compareDivisible1.value);
    const num2 = parseInt(e.target.compareDivisible2.value);

    const divisorOf1 = [];
    const divisorOf2 = [];

    for (let i = 2; i <= num2; i++) {
        num1 % i === 0 && divisorOf1.push(i);
        if (i === 10) {
            break
        }
    }

    for (let i = 2; i <= num1; i++) {
        num2 % i === 0 && divisorOf2.push(i);
        if (i === 10) {
            break
        }
    }

    const commonDivider = divisorOf1.filter(val => divisorOf2.includes(val))
    const div = document.querySelector('.eleventh-form__div')

    commonDivider.length !== 0 ? div.innerHTML = `<h3>Los numeros ${num1} y ${num2} tienen como mismos divisores: ${commonDivider.join(", ")}</h3>` : div.innerHTML = `<h3>Los numeros ${num1} y ${num2} no tienen divisores en comun</h3>`;
})


// Verificamos si un número es primo
twelfthForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const num = parseInt(e.target.prime.value);

    const divisibleBy1 = num % 1 === 0;
    const divisibleBy2 = num % 2 === 0;
    const divisibleBy3 = num % 3 === 0;
    const divisibleBy4 = num % 4 === 0;
    const divisibleBy5 = num % 5 === 0;
    const divisibleBy6 = num % 6 === 0;
    const divisibleBy7 = num % 7 === 0;
    const divisibleBy8 = num % 8 === 0;
    const divisibleBy9 = num % 9 === 0;
    const divisibleBySelf = num % num === 0;

    const div = document.querySelector('.twelfth-form__div')

    if (num === 1) {
        div.innerHTML = `<h3>El numero ${num} no es primo</h3>`;
    } else if (num === 2 || num === 3 || num === 5 || num === 7) {
        div.innerHTML = `<h3>El numero ${num} es primo</h3>`;
    } else {
        divisibleBySelf && divisibleBy1 && !divisibleBy2 && !divisibleBy3 && !divisibleBy4 && !divisibleBy5 && !divisibleBy6 && !divisibleBy7 && !divisibleBy8 && !divisibleBy9 ? div.innerHTML = `<h3>El numero ${num} es primo</h3>` : div.innerHTML = `<h3>El numero ${num} no es primo</h3>`;
    }
})


