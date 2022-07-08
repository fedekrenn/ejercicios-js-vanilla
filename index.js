const firstForm = document.querySelector('#first-form');
const secondForm = document.querySelector('#second-form');
const thirdForm = document.querySelector('#third-form');
const fourthForm = document.querySelector('#fourth-form');
const fifthForm = document.querySelector('#fifth-form');
const sixthForm = document.querySelector('#sixth-form');
const seventhForm = document.querySelector('#seventh-form');
const eighthForm = document.querySelector('#eighth-form');


firstForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;

    const div = document.querySelector('.first-form__div')
    div.innerHTML = `<h3>Hola ${nombre}, ahora vamos a comenzar...</h3>`;
    console.log(nombre)
})


secondForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const num1 = parseInt(e.target.num1.value);
    const num2 = parseInt(e.target.num2.value);

    const div = document.querySelector('.second-form__div')
    div.innerHTML = `<h3>El resultado es: ${num1 + num2}</h3>`;
})


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

fifthForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const num = parseInt(e.target.divisible.value);
    const div = document.querySelector('.fifth-form__div')

    num % 2 === 0 ? div.innerHTML = `<h3>El numero ${num} es par</h3>` : div.innerHTML = `<h3>El numero ${num} es impar</h3>`;
})

sixthForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = e.target.letter.value;
    const arraySeparado = text.split('');
    const arrarConLetraA = arraySeparado.filter(item => item === 'a');

    const div = document.querySelector('.sixth-form__div')
    div.innerHTML = `<h3>El numero de letras a es: ${arrarConLetraA.length}</h3>`;
})

seventhForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    const text = e.target.vowels.value;
    const arraySeparado = text.split('');

    const arrayVowels = arraySeparado.filter(item => vowels.includes(item));

    const div = document.querySelector('.seventh-form__div')
    div.innerHTML = `<h3>La frase contiene ${arrayVowels.length} vocales y las mismas son: ${arrayVowels.join(", ")}</h3>`;
})

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

