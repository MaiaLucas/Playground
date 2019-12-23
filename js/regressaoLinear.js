// HTML
let p = document.createElement('p')
// let app = document.getElementById('app')
let app = $('#app')

// FUNÇÃO QUE CRIA OS DADOS
function Data(x, y) {
	this.x = x // ano
	this.y = y // pop
	this.xy = (x * y) // ano * pop
}

// FAZ O SOMATÓRIO DOS X'S
function somatorioEixoX(data) {
	let sum = 0;
	for(let i = 0; i < data.length; i++) {
		sum += data[i].x
	}
	return sum
}

// FAZ O SOMATÓRIO DOS Y'S
function somatorioEixoY(data) {
	let sum = 0;
	for(let i = 0; i < data.length; i++) {
		sum += data[i].y
	}
	return sum
}

// FAZ O SOMATÓRIO DOS XY's
function somatorioEixoXY(data) {
	let sum = 0;
	for(let i = 0; i < data.length; i++) {
		sum += data[i].xy
	}
	return sum
}

// FAZ O SOMATÓRIO DO QUADRADO DOS X'S
function somatorioQuadradoEixoX(data) {
	let sum = 0;
	for(let i = 0; i < data.length; i++) {
		sum += Math.pow(data[i].x, 2)
	}
	return sum
}

// PEGA A MEDIA DO X
function mediaX(data) {
	let count = 0
	let result = 0
	for (let i = 0; i < data.length; i++) {
			count = count + data[i].x
	}
	result = count / data.length
	return result
}

// PEGA A MEDIA DO Y
function mediaY(data) {
	let count = 0
	let result = 0
	for (let i = 0; i < data.length; i++) {
			count = count + data[i].y
	}
	result = count / data.length
	return result
}

// COEFICIENTE a DA EQUAÇÃO y = ax + b
function slope(data) {
	let sup = (data.length * somatorioEixoXY(data)) - (somatorioEixoX(data) * somatorioEixoY(data))
	let inf = (data.length * somatorioQuadradoEixoX(data)) - (somatorioEixoX(data) * somatorioEixoX(data))
	
	return (sup / inf)
}

// COEFICIENTE b DA EQUAÇÃO y = ax + b
function intercept(data) {
	let eq = 0
	eq = mediaY(data) - (slope(data) * mediaX(data))
	return eq
}

function printEq(data) {
	let div = $('<div></div>')
	// console.log(`A equação da reta: pop = ${slope(data)} * ano + (${intercept(data)})`)
	div.append(`A equação da reta: pop = ${slope(data)} * ano + (${intercept(data)})`)
	app.append(div)
}

// Imprime todas as informações
function print(data) {
	let div = $('<div></div>')
	div.append(`---------------------------------------<br/>`)
	for(let i = 0; i < data.length; i++) {
		// console.log(`Dado[${i + 1}] : X -> ${data[i].x}, Y -> ${data[i].y}, XY -> ${data[i].xy}`)
		div.append(`Dado[${i + 1}] : ANO -> ${data[i].x}, POP -> ${data[i].y}, (ANO x POP) -> ${data[i].xy} <br/>`)
	}
	div.append(`---------------------------------------<br/>`)
	// console.log(`Somatorio Y = ${sumY(data)}`)
	div.append(`
	Somatorio POP	  = ${somatorioEixoY(data)} <br />
	Somatorio ANO 	  = ${somatorioEixoX(data)} <br />
	Somatorio ANOxPOP = ${somatorioEixoXY(data)} <br />
	Média ANO		  = ${mediaX(data)} <br />
	Média POP		  = ${mediaY(data)} <br />
	`)

	app.append(div)
}

// FUNÇÃO RESPONSÁVEL POR DESCOBRIR O VALOR DA POSIÇÃO Y DE UM NOVO DADO
function discoverY(data,x) {
	let pop = (slope(data) * x) + intercept(data)
	let div = $('<div></div>')
	// console.log(`Calculo da Populacao do ano ${x} é ${pop.toFixed(2)}`)
	div.append(`<h3>Calculo da Populacao do ano ${x} é ${pop.toFixed(2)}</h3>`)
	app.append(div)

	data.push(new Data(x, pop))
}

function start() {
	// console.log(dados)
	let input = $('#year').val()
	app.append(`<br /><h1> O ano escolhido foi: ${input} </h1> <br />`)
	print(dados)
	printEq(dados)
	discoverY(dados, input)
	app.append(`<h3>Nova listagem</h3>`)
	print(dados)
	// console.log(dados)
}

let D1 = new Data(1980, 2.1)
let D2 = new Data(1985, 2.9)
let D3 = new Data(1990, 3.2)
let D4 = new Data(1995, 4.1)
let D5 = new Data(2000, 4.9)

let dados = [D1, D2, D3, D4, D5]

// start()
// app.append(p)