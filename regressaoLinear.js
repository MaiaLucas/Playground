// FUNÇÃO QUE CRIA OS DADOS
function Data(x, y) {
	this.x = x // ano
	this.y = y // pop
	this.xy = (x * y) // ano * pop
}

// FAZ O SOMATÓRIO DOS X'S
function sumX(data) {
	let sum = 0;
	for(let i = 0; i < data.length; i++) {
		sum += data[i].x
	}
	return sum
}

// FAZ O SOMATÓRIO DOS Y'S
function sumY(data) {
	let sum = 0;
	for(let i = 0; i < data.length; i++) {
		sum += data[i].y
	}
	return sum
}

// FAZ O SOMATÓRIO DOS XY's
function sumXY(data) {
	let sum = 0;
	for(let i = 0; i < data.length; i++) {
		sum += data[i].xy
	}
	return sum
}

// FAZ O SOMATÓRIO DO QUADRADO DOS X'S
function sumXPow(data) {
	let sum = 0;
	for(let i = 0; i < data.length; i++) {
		sum += Math.pow(data[i].x, 2)
	}
	return sum
}

// COEFICIENTE a DA EQUAÇÃO y = ax + b
function slope(data) {
	let sup = 0, inf = 0
	sup = (data.length * sumXY(data)) - (sumX(data) * sumY(data))
	inf = (data.length * sumXPow(data)) - (sumX(data) * sumX(data))
	return (sup / inf)
}

// PEGA A MEDIA DO X
function midX(data) {
	let count = 0
	let result = 0
	for (let i = 0; i < data.length; i++) {
			count = count + data[i].x
	}
	result = count / data.length
	return result
}

// PEGA A MEDIA DO Y
function midY(data) {
	let count = 0
	let result = 0
	for (let i = 0; i < data.length; i++) {
			count = count + data[i].y
	}
	result = count / data.length
	return result
}

// COEFICIENTE b DA EQUAÇÃO y = ax + b
function intercept(data) {
	let eq = 0
	eq = midY(data) - (slope(data) * midX(data))
	return eq
}

function printEq(data) {
    console.log(`A equação da reta: pop = ${slope(data)} * ano + (${intercept(data)})`)
}

// FUNÇÃO RESPONSÁVEL POR DESCOBRIR O VALOR DA POSIÇÃO Y DE UM NOVO DADO
function discoverY(data,x) {
	let pop = (slope(data) * x) + intercept(data)
	
	console.log(`Calculo da Populacao do ano ${x} é ${pop.toFixed(2)}`)
	data.push(new Data(x, pop))
}

// Imprime todas as informações
function print(data) {
	for(let i = 0; i < data.length; i++) {
		console.log(`Dado[${i + 1}] : X -> ${data[i].x}, Y -> ${data[i].y}, XY -> ${data[i].xy}`)
	}

	console.log(`Somatorio X = ${sumX(data)}`)
	console.log(`Somatorio Y = ${sumY(data)}`)
	console.log(`Média X = ${midX(data)}`)
	console.log(`Média Y = ${midY(data)}`)
}

function start() {
	console.log(dados)
	print(dados)
	printEq(dados)
	discoverY(dados, 2005)
	console.log('*----------------------------------------------------*')
	print(dados)
	console.log(dados)
}

let D1 = new Data(1980, 2.1)
let D2 = new Data(1985, 2.9)
let D3 = new Data(1990, 3.2)
let D4 = new Data(1995, 4.1)
let D5 = new Data(2000, 4.9)

let dados = [D1, D2, D3, D4, D5]

start()