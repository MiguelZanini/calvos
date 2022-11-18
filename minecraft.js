nomedosestudantes=[];

function submit(){
    var nome1=document.getElementById("nomedoaluno1").value;
    var nome2=document.getElementById("nomedoaluno2").value;
    var nome3=document.getElementById("nomedoaluno3").value;
    var nome4=document.getElementById("nomedoaluno4").value;

    nomedosestudantes.push(nome1);
    nomedosestudantes.push(nome2);
    nomedosestudantes.push(nome3);
    nomedosestudantes.push(nome4);

    console.log(nomedosestudantes);

    document.getElementById("mostrarnomes").innerHTML=nomedosestudantes;
    document.getElementById("enviar").style.display="none";
    document.getElementById("organizar").style.display="inline-block";

}

function sorting(){
nomedosestudantes.sort();
document.getElementById("mostrarnomes").innerHTML=nomedosestudantes;
    }