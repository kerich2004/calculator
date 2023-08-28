const display = document.querySelector('h2')
const numbers = document.querySelectorAll('.number')
const state = {
  value: 0
}

for (const btn of numbers) {
  btn.addEventListener('click', handleNumber)
}

function handleNumber(e) {
  if (state.value.length > 15) return
  const num = e.target.value
  state.value += num
  state.value = Number(state.value).toString()
  renderState()
}

function renderState() {
  display.innerText = new Intl.NumberFormat("ru-RU").format(state.value)
}