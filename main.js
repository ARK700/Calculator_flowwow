let form = document.forms.calculator;

form.money.oninput = calculate;
form.buketQnty.oninput = calculate;
form.interest.oninput = calculate;

function calculate() {

  let years = +form.buketQnty.value;
  if (!years) return;

  let initial = +form.money.value;
  if (!initial) return;

  let interest = form.interest.value;
  if (!interest) return;

  let result = (interest/0.651) + ((years*initial)/0.651);

  document.getElementById('resultOf').innerHTML = result.toLocaleString('ru-RU', {  style: 'currency', currency: 'RUB',maximumSignificantDigits: 3 });;

}

calculate();