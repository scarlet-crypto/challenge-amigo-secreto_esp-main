// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let  amigos =[];
let amigoInput = document.querySelector("#amigo");
let listaDeAmigos = document.querySelector("#listaAmigos");
let amigoSecreto = document.querySelector("#resultado");

const agregarAmigo = () =>{
    if (amigoInput.value.trim() ==""){
        alert("por favor, ingrese un nombre:");

        }else{
            amigos.push(amigoInput.value.trim());
            console.log (amigos);
            amigoInput.value ="";

            agregarAmigoLista();

            }
    }

    const agregarAmigoLista = () =>{
        listaDeAmigos.innerHTML = "";
        for (let i = 0; i < amigos.length; i ++){
            listaDeAmigos.innerHTML += `<li>${amigos[i]}</li>`;
        }
    }

    const sortearAmigo =() =>{
        if (amigos.length === 0){
            alert("debe ingresar un amigo para iniciar el sorteo");

        }else{
            let numeroAmigo = Math.floor(Math.random() *
        amigos.length);

        amigoSecreto.textContent = amigos[numeroAmigo];
    } 
        }

