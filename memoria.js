let board;
let aux=0;
let contar = {suValor : false , emoji : ""};

const crearBoard = ( numRow, numCol) => {
    const rows = []
    for( let i=0; i<numRow; i++){
        const casillas = []
        for( let j=0; j<numCol; j++){
            casillas.push({
                suValor : false,
                emoji : "&#129409"
            })
        }
        rows.push(casillas)
    }
    return rows
}

const ingresarValor = (board, row, col, value) => {
    board[row][col] = value
}

const obtenerValor = (board, row, col) => {
    sol = board[row][col]
    return sol
}

const actualizarBoard = (board) => {
    for(let i = 0; i <board.length; i++ ){
        const listCasillas = board[i]
        for(let j=0; j<listCasillas.length;j++){
            const valor = document.getElementById(i+"_"+j)
            if(listCasillas[j].suValor){
                valor.innerHTML = listCasillas[j].emoji
            }else{
                valor.innerHTML = "1"
            }
        }
    }

}

const darleClick = (row,col) => {
    
    const casilla = obtenerValor(board, row, col)
    casilla.suValor = true
    verificar(row, col)//casilla
    actualizarBoard(board)
    if(estanLlenos(board)==true){
        const sol = document.getElementById('resultado')
        sol.innerText="Memory Game: USTED GANO"
    }else{
    }
}

const Contador = (row, col) => {
    
    board[row][col].suValor=false
    contar.suValor=false
    actualizarBoard(board)
}


const verificar = (row, col) => {
    if(aux == 1){
        aux = 0
        if(board[row][col].emoji == contar.emoji){
            console.log("iguales")
        }else{
            console.log("no iguales")
            setTimeout(Contador,300,row, col)   
        }
        actualizarBoard(board)

    }else{
        aux = aux + 1
        contar= board[row][col]
        
    }
}

const estanLlenos = (board) => {
    for(let i =0; i<board.length;i++){
        const caja = board[i]
        for(let j = 0; j<caja.length;j++){
            if(caja[j].suValor==false){
                return false
            }
        }
    }
    return true
}

const cargarEmojis = (board, lista) => {
    let num = 0
    for (let i = 0; i < board.length; i++){
        const casilla = board [i]
        for(let j = 0; j < casilla.length; j++){
            casilla[j].emoji = lista[num]
            num ++
    }
    
    actualizarBoard(board)
}}

const main = () => {
    const emojis = ["&#9749", "&#9748", "&#9203",  "&#9875", "&#9889", "&#9917", 
                    "&#9935", "&#9973", "&#9986", "&#9997", "&#10024", "&#11088",
                    "&#9749", "&#9748", "&#9203",  "&#9875", "&#9889", "&#9917", 
                    "&#9935", "&#9973", "&#9986", "&#9997", "&#10024", "&#11088"]
    board = crearBoard(6,4)
    actualizarBoard(board)
    cargarEmojis(board,emojis)
    /*
    ingresarValor(board,3,2,{
        suValor : true,
        emoji : "&#8986"
    })
    */
    //actualizarBoard(board)
    
    
}   

main()

