// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let  amigos =[];
let amigoInput = document.querySelector("#amigo");
let listaDeAmigos = document.querySelector("#listaAmigos");
let amigoSecreto = document.querySelector("#resultado");

const agregarAmigo = () =>{
    if (amigo.amigoInput ==""){
        alert("por favor, ingrese un nombre:");

        }else{
            amigos.push(amigo.amigoInput.value);
            console.log (amigos);
            amigoInput.value ="";

            agregarAmigoLista()

            }
    }

    const agregarAmigoLista = () =>{
        listaDeAmigos.innerHTML = "";
        for (let i = 0; i < amigos.lenth; i ++){
            listaDeAmigos.innerHTML+='<li>${amigo [i]} </li>';
        }
    }

    const sortearAmigo =() =>{
        if (amigos.lenth === 0){
            alert("debe ingresar un amigo para iniciar el sorteo");

        }else{
            let numeroAmigo = Math.floor(Math.random() *
        amigos.lenth);

        amigoSecreto.textContent = amigos[numeroAmigo];
    } 
        }

