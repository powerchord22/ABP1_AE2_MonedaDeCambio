function cambio(){
    let dolares = 745 
    let result;
    let pesos = parseInt(document.getElementById('pesos').value,10);
     
    result = pesos / dolares
      
    let resultado = result.toFixed(2);
      
    document.getElementById('resul').innerHTML= resultado;
    
    }