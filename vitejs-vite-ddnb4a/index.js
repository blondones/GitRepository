const divCoda = document.getElementById('coda');
const divElemento = document.getElementById('elemento');
const inputInsert = document.getElementById('inputInsert');
const buttonInsert = document.getElementById('buttonInsert');
const buttonExtract = document.getElementById('buttonExtract');

Array.prototype.insert = function (value) {
  this.unshift(value);
};

Array.prototype.extract = function () {
  return this.pop();
};

buttonInsert.onclick = () => {
  const value = parseInt(inputInsert.value);
  if (!isNaN(value)) {
    coda.insert(value);
    render('');
  }
};

buttonExtract.onclick = () => {
  const value = coda.extract();
  if (!isNaN(value)) {
    render(value);
  }
};

const render = (value) => {
  divElemento.innerText = value;
  divCoda.innerText = '[' + coda.join(',') + ']';
  inputInsert.value = '';
};

const coda = new Array();
