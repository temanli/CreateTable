const form = document.createElement('form');
form.setAttribute('action', '#');
form.setAttribute('method', 'post');
form.style.width = 500 + 'px';
form.style.heigth = 5000 + 'px';
form.style.margin = 50 + 'px';
form.style.border = '1px solid black';
form.style.padding = 15 + 'px' + ' ' + 20 + 'px';
//создали форму
const div = document.createElement('div');
const div1 = document.createElement('div');
div1.style.marginBottom = 5 + 'px';
const label1 = document.createElement('label');
label1.setAttribute('for', 'column');
label1.innerHTML = 'Введите количество сток';
const input1 = document.createElement('input');
input1.setAttribute('type', 'text');
input1.setAttribute('name', 'column');
input1.setAttribute('id', 'column');
input1.textContent;

input1.style.width = 200 + 'px';
input1.style.heigth = 50 + 'px';
const br = document.createElement('br');
div1.appendChild(label1);
div1.appendChild(br);
let a = div1.appendChild(input1);

// создали поле для ввода столбцов


const div2 = document.createElement('div');
div2.style.marginBottom = 5 + 'px';
const label2 = document.createElement('label');
label2.setAttribute('for', 'column');
label2.innerHTML = 'Введите количество столбцов';
const input2 = document.createElement('input');
input2.setAttribute('type', 'text');
input2.setAttribute('name', 'row');
input2.setAttribute('id', 'row');
let b = input2.textContent;

input2.style.width = 200 + 'px';
input2.style.heigth = 50 + 'px';
div2.appendChild(label2);
div2.appendChild(div);
div2.appendChild(input2);
// создали поля для ввода строк


const submit = document.createElement('input');
submit.setAttribute('type', 'button');
submit.setAttribute('value', 'OK');
submit.setAttribute('id', 'button');



form.appendChild(div1);
form.appendChild(div2);
form.appendChild(submit);

document.body.appendChild(form);

const table = document.createElement('table');


function createTable() {

	var a = +(document.getElementById('column').value);
	var b = +(document.getElementById('row').value);
	const table = document.createElement('table');
	for (var i = 0; i <= a; i++) {
		const tr = document.createElement('tr');
		for (var j = 0; j <= b; j++) {
			const td = document.createElement('td');
			td.style.border = '1px solid black';
			td.style.width = 25 + 'px';
			td.style.height = 25 + 'px';
			td.style.textAlign = 'center';
			//td[0].textContent = '${i}';



			tr.appendChild(td);
		}
		table.appendChild(tr);


		table.style.position = 'absolute';
	}
	document.body.appendChild(table);
	return table;
};
button.onclick = createTable;