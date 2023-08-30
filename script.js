const display = document.querySelector('h2')
const buttons = document.querySelector('.buttons')
const numbers = document.querySelectorAll('.number')
let finish = false
let result = 0


const state = {
  a: 0,
  sign: '',
  b: 0
}

function handleNumber(event) {
  const key = event.target.value

  if (state.a.length > 15) return
  if (state.sign == '') {
    state.a += key
    state.a = Number(state.a).toString()
    renderState(state.a);
  }

  if (state.a !== 0 && state.sign !== '' && !finish) {
    state.b += key;
    state.b = Number(state.b).toString()
    renderState(state.b);
  }

}


function renderState(value) {

  display.innerText = new Intl.NumberFormat("ru-RU").format(value)
  console.log(state)
}

buttons.onclick = (event) => {
  const operationBtn = document.querySelectorAll('.operation')
  for (const item of operationBtn) {
    item.addEventListener('click', handleKey);
  }
  if (event.target.value) handleNumber(event)
  if (event.target.classList.contains('point')) handlePoint(event)
  if (event.target.classList.contains('clear')) clearCalculator(event)
  if (event.target.classList.contains('equals')) equals(event)
}

function handlePoint(event) {
  console.log(event.textContent)
}

function equals() {
  const a = +state.a
  const b = +state.b
  const sign = state.sign

  switch (sign) {
    case '+':
      result = a + b
      break;

    case '–':
      result = a - b;
      break;

    case '×':
      result = a * b
      break;

    case '÷':
      result = a / b
      break;

    case '²√x':
      result = Math.sqrt(a);
      break;

    case '%':
      result = a % b;
      break;

    case 'x²':
      result = a * a;
      break;
  }
  renderState(result)
}

function clearCalculator() {
  state.a = 0
  state.b = 0
  state.sign = ''

  display.innerText = ''
}

function getValue(event) {
  const num = event.target.value
  handleNumber(num)
}

function handleKey(event) {
  const key = event.target.innerText
  state.sign = key
  display.innerText = key
}
