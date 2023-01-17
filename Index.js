

function cambio(){
    let dolares = 745 
    let result;
    let pesos = parseInt(document.getElementById('pesos').value,10);
     
    result = pesos / dolares

    // toFixed permite elegir cantidad de decimales de un resultado (en este caso .2)
    // ejemplo let number = 5.56789
    //         let n = number.toFixed (2);
    //         resultado = 5.57
    
    let resultado = result.toFixed(2);
    
    document.getElementById('resul').innerHTML = resultado;
    
    }