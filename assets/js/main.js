
/*
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; 
*/

const container = document.getElementById("container");
const btnStart = document.getElementById("genera");
const btnReset = document.getElementById("reset");

btnStart.addEventListener("click",start);
btnStart.addEventListener("click", disable);
btnReset.addEventListener("click",clear);
btnReset.addEventListener("click",activate);


let scelta = document.getElementById("scelta");
let nCelle;
scelta.addEventListener("change",function(){
    nCelle = selectDiff();
})

function selectDiff(){
    let scelta = document.getElementById("scelta");
    const diffLvl = parseInt(scelta.options[scelta.selectedIndex].value);
    console.log(diffLvl);
    if(diffLvl == 1)
        return 100;
    else if(diffLvl == 2)
        return 81;
    else
        return 49;
}

function start(){   
    let bombCells = [];
    for(let i=0; i<16;i++)
    {
        let bomb = Math.floor(Math.random()*nCelle);
        if(bombCells.includes(bomb))
            i--;
        else
            bombCells.push(bomb);
    }
    console.log(bombCells);
    for (let index = 0; index < nCelle; index++) 
        generateCell(index,nCelle,bombCells);
}

function generateCell(id,cellNumber,bombArr)
{
    let div = document.createElement("div");
    div.setAttribute("class","gridCell");
    div.setAttribute("id",id);
    switch(cellNumber)
    {
        case 100 :
            div.style.width="calc(100% / 12 * 1.2)";
            break;
        case 81 :
            div.style.width="calc(100% / 9)";
            break;
        case 49 :
            div.style.width="calc(100% / 7)";
            break;
    }
    document.getElementById("container").appendChild(div);
    div.addEventListener("click", function(clickCell){
        if(bombArr.includes(id))
        {
            console.log(this);
            this.style.backgroundColor="red";
            alert("Hai trovato una bomba! Riprova");
        }
        else
        {
            console.log(this);
            this.style.backgroundColor="green";
            console.log(this.innerText);
        }
    })
}

function clear(){
    document.getElementById("container").innerHTML="";
    document.getElementById("grid-dim").value="";
}

function disable(){
    document.getElementById("genera").disabled = true;
    document.getElementById("reset").disabled = false;
}

function activate(){
    document.getElementById("genera").disabled = false;
    document.getElementById("reset").disabled = true;
}