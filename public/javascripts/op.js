const inputPrimerNum = document.querySelector("#FormControlInput1");
const inputSegundoNum = document.querySelector("#FormControlInput2");
const inputResult = document.querySelector("#FormControlInput3");
const calcular = document.querySelector(".btn-primary");
const selectResult = document.querySelector("select");
const borrar = document.querySelector(".btn-danger")

calcular.addEventListener("click",function(){


    if(selectResult.value == "1"){

        let suma;

        suma = parseInt(inputPrimerNum.value) + parseInt(inputSegundoNum.value);

        inputResult.value = suma;
    }
    if(selectResult.value == "2"){

        let resta;

        resta = parseInt(inputPrimerNum.value) - parseInt(inputSegundoNum.value);

        inputResult.value = resta;
    }
});

borrar.addEventListener("click",()=>{

    inputPrimerNum.value = null;
    inputSegundoNum.value = null;
    inputResult.value = null;

})



