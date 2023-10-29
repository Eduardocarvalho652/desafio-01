// Calculadora de partidas Rankeadas

let vitoriaHeroi = 50;
let derrotaHeroi = 1;
saldoVitorias = (vitoriaHeroi - derrotaHeroi)

if(vitoriaHeroi <= 10){
    console.log("O Herói tem saldo de " + saldoVitorias + " é está no nível de " + "Ferro");
}
else if(vitoriaHeroi >= 11 && vitoriaHeroi <= 20){
    console.log("O Herói tem saldo de " + saldoVitorias + " é está no nível de " + "Bonze");
}
else if(vitoriaHeroi >= 21 && vitoriaHeroi <= 50){
    console.log("O Herói tem saldo de " + saldoVitorias + " é está no nível de " + "Prata");
}
else if(vitoriaHeroi >= 51 && vitoriaHeroi <= 80){
    console.log("O Herói tem saldo de " + saldoVitorias + " é está no nível de " + "Ouro");
}
else if(vitoriaHeroi >= 81 && vitoriaHeroi <= 90){
    console.log("O Herói tem saldo de " + saldoVitorias + " é está no nível de " + "Diamante");
}
else if(vitoriaHeroi >= 91 && vitoriaHeroi <= 100){
    console.log("O Herói tem saldo de " + saldoVitorias + " é está no nível de " + "Lendário");
}
else if(vitoriaHeroi >= 101){
    console.log("O Herói tem saldo de " + saldoVitorias + " é está no nível de " + "Imortal");
}