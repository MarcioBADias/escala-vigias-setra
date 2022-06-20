function clicar() {
    let vigia = document.getElementById("nomeVigia");
    let mes = document.getElementById("mes");
    let dia = document.getElementById("primeiroPlantao");
    let res = document.getElementById("res");
    let res1 = document.getElementById("res1");
    
    res.innerHTML = "<p>" + "O vigia " +"<strong>" + vigia.value + "</strong>" + 
        " trabalha nos dias abaixo:" 
    let m = Number(mes.value);
    let d = Number(dia.value);
    
    for (let c = d; c <= m; c += 4){
        res1.innerHTML += `🍺 <strong>${c}</strong> `
    }
    res1.innerHTML += `🗓`

}