// Construtor para os dados
function Data(x, y, name) {
    this.name = name
    this.x    = x
    this.y    = y
    this.oldX = 0
    this.oldY = 0
    this.dx1  = 0
    this.dx2  = 0
}

// Função para calcular distância de um dado entre C1 e C2
function distance(Data, C) {
    result = Math.sqrt(Math.pow((Data.x - C.x), 2) + Math.pow((Data.y - C.y), 2))
    if (C.name == 'C1') {
        Data.dx1 = result.toFixed(2)
    } else {
        Data.dx2 = result.toFixed(2)
    }
}

// Geração das distâncias de todos os dados
function distanceCall(dados, C) {
    for (let i = 0; i < 10; i++) {
        distance(dados[i], C)
        // distance(dados[i], C2)
    }
}

// Função base de comparação das distâncias, recebe a array dos dados e os coloca dentros dos clusters
function compare(dados) {
    for (let i = 0; i < dados.length; i++) {
        if (dados[i].dx1 < dados[i].dx2) {
            cluster1.push(dados[i])
        } else {
            cluster2.push(dados[i])
        }
    }
}

// Função para calular os novos C1 e C2
function newCs(cluster, C) {
    counterX = 0
    counterY = 0
    let newX = cluster.map(data => data.x)
    let newY = cluster.map(data => data.y)
    for (let i = 0; i < newX.length; i++) {
        counterX = newX[i] + counterX
        counterY = newY[i] + counterY
    }
    let resultX = counterX / cluster.length
    let resultY = counterY / cluster.length

    C.x = resultX.toFixed(2)
    C.y = resultY.toFixed(2)
}

// Iniciar o algoritmo
function start() {
    while( (C1.x != C1.oldX || C2.x != C2.oldX) && (C1.y != C1.oldY || C2.y != C2.oldY) ) {
        C1.oldX = C1.x
        C1.oldY = C1.y
        C2.oldX = C2.x
        C2.oldY = C2.y
        
        console.log(`C1 -> ${C1.x},${C1.y}`)
        console.log(`C2 -> ${C2.x},${C2.y}`)

        distanceCall(dados, C1)
        distanceCall(dados, C2)
        compare(dados)
        console.log('Cluster 1:')
        printCluster(cluster1)
        console.log('\nCluster 2:')
        printCluster(cluster2)
        newCs(cluster1, C1)
        newCs(cluster2, C2)
        printNewC(C1, C2)
        console.log('fim')

    }
}

function printCluster(cluster) {
    let nome = cluster.map(data => data.name)
    let x = cluster.map(data => data.x)
    let y = cluster.map(data => data.y)
    let distancia1 = cluster.map(data => data.dx1)
    let distancia2 = cluster.map(data => data.dx2)
    for (let i = 0; i < nome.length; i++) {
        console.log(`Dado: ${nome[i]}, X: ${x[i]}, Y: ${y[i]}, DistânciaC1: ${distancia1[i]}, DistânciaC2: ${distancia2[i]}`)
    }
}
function printNewC(C1, C2) {
    console.log()
    console.log(`NEW C1 -> X: ${C1.x}, Y: ${C1.y}`)
    console.log(`NEW C2 -> X: ${C2.x}, Y: ${C2.y}`)
    console.log(`OLD C1 -> X: ${C1.oldX}, Y: ${C1.oldY}`)
    console.log(`OLD C2 -> X: ${C2.oldX}, Y: ${C2.oldY}`)
    console.log()
}

// Geração dos dados
let D1 = new Data(9, 7, 'D1'); let D2 = new Data(2, 2, 'D2')
let D3 = new Data(3, 3, 'D3'); let D4 = new Data(5, 6, 'D4')
let D5 = new Data(5, 2, 'D5'); let D6 = new Data(3, 7, 'D6')
let D7 = new Data(7, 5, 'D7'); let D8 = new Data(8, 9, 'D8')
let D9 = new Data(9, 8, 'D9'); let D10 = new Data(3, 4, 'D10')

let C1 = new Data(3, 5, 'C1'); let C2 = new Data(3, 3, 'C2')

// Criação dos grupos iniciais
dados     = [D1, D2, D3, D4, D5, D6, D7, D8, D9, D10]
cluster1  = []
cluster2  = []

start()