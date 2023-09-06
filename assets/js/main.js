let container = document.getElementById("container");
let btnStart = document.getElementById("genera");
let btnReset = document.getElementById("reset");

btnStart.addEventListener("click",start);
btnStart.addEventListener("click", disable);
btnReset.addEventListener("click",clear);
btnReset.addEventListener("click",activate);



function start(){
    cellNumber = parseInt(document.getElementById("grid-dim").value);

    if(cellNumber<=0){
        cellNumber *= -1;
        alert("Numeri negativi non consentiti");
    }

    if(cellNumber>10)
    {
        cellNumber=10;
        alert("Numero troppo grande, impostato valore massimo consentito");
    }

    for(i=1;i<cellNumber*10 + 1;i++){
        let div = document.createElement("div");
        div.setAttribute("class","gridCell");
        div.setAttribute("id",i);
        document.getElementById("container").appendChild(div);
        document.getElementById(i).append(i);
        div.addEventListener("click", function(clickCell){
            console.log(this);
            this.style.backgroundColor="green";
            console.log(this.innerText);
        })
    }
   
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