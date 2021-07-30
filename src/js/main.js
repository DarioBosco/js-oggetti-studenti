/* 
//Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
//Creare un array di oggetti di studenti.
//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
//Dare la possibilità all’utente, attraverso 3 prompt, di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
 */

var userInputName = prompt('Inserisci il nome');
var userInputSurname = prompt('Inserisci il cognome');
var userInputAge = parseInt(prompt(`Inserisci l'eta'`));

var student = {
	name: 'Dario',
	surname: 'Bosco',
	age: 24,
};

var classRoom = [
	{
		name: 'Mario',
		surname: 'Rossi',
		age: 26,
	},
	{
		name: 'Luigi',
		surname: 'Verdi',
		age: 26,
	},
	{
		name: 'Gianluigi',
		surname: 'Polenta',
		age: 24,
	},
];

//Potrei implementare la prima lettera maiuscola ma non ho voglia
classRoom.push({ name: userInputName, surname: userInputSurname, age: userInputAge });
console.log(classRoom);

for (const key in student) {
	const element = student[key];
	console.log(element);
}

for (let index = 0; index < classRoom.length; index++) {
	const i = classRoom[index];

	for (let key in i) {
		const element = i[key];
		console.log(element);
	}
}
