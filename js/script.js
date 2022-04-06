const userFirstName = prompt('Scrivi qui il tuo NOME')
const userFirstNameUppercase = userFirstName.toUpperCase()

const userLastName = prompt('Scrivi qui il tuo COGNOME')

const userFavoriteColor = prompt('Qual è il tuo colore preferito?')

const userPassword = `${userFirstName}${userLastName}${userFavoriteColor}21`
console.log(userPassword);

document.getElementById('my-title').innerHTML = `Bene ${userFirstNameUppercase}, la tua nuova password super sicura è: ${userPassword}`