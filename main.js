function converter() {
    let x = document.getElementById("bin-in").value
    let resultado = 0
    for(let c = x.length - 1; c >= 0; c--){
        if(parseInt(x[c]) != 0 && parseInt(x[c]) != 1){
            alert('Número inválido!!')
            return
        }
        resultado += parseInt(x[c]) * Math.pow(2, (x.length-1)-c)
    }

    document.getElementById("dec-out").innerHTML = resultado
}
