function calucaInflacao(){
    var valoranterior = parseInt(document.getElementById("valoranterior").value);
    var valoratual = parseInt(document.getElementById("valoratual").value);
    var calculo = 0;
    var alimento
    
    if( document.getElementById("valoranterior").value == "" ){
        document.getElementById("resultado").innerHTML = "Por favor, informar o valor da semana passada";
        document.getElementById("valoranterior").focus();
        return false
    }else if( document.getElementById("valoratual").value == "" ) {
        document.getElementById("resultado").innerHTML = "Por favor, informar o valor atual";
        document.getElementById("valoratual").focus();
        return false
    }


    var fruta = document.getElementsByName("fruta");
    if (fruta[0].checked) {
        alimento = fruta[0].value;
    }else if (fruta[1].checked){
        alimento = fruta[1].value;
    }else if (fruta[2].checked){
        alimento = fruta[2].value;
    }else if (fruta[3].checked){
        alimento = fruta[3].value;
    }

        
    if( valoratual == valoranterior){
        document.getElementById("resultado").innerHTML = (alimento + " não sofreu alterações no seu preço");
    }else if( valoratual > valoranterior ){
        calculo = valoratual - valoranterior;
        porcentagem = (valoratual/valoranterior - 1)  * 100;
        document.getElementById("resultado").innerHTML = (alimento + " teve um AUMENTO de R$ " + calculo + " ou " + parseInt(porcentagem) + "%");
        
    }else if( valoratual < valoranterior ){   
        calculo = valoranterior - valoratual;   
        porcentagem = (valoranterior/valoratual - 1)  * 100;
        document.getElementById("resultado").innerHTML = (alimento + " teve uma DIMINUIÇÃO de R$ " + Math.abs(calculo) + " ou " + parseInt(porcentagem) + "%");
    }

    
    document.getElementById("valoranterior").value = "";
    document.getElementById("valoratual").value = "";
    document.getElementById("valoranterior").focus();
    
}

