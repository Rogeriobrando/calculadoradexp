function calcularXpDoHeroi(derrotas, vitorias){
    return vitorias - derrotas;
}

let resultado = calcularXpDoHeroi(100 , 120);
let nivelDoHeroi = resultado;

if (nivelDoHeroi <= 10) {
    nivelDoHeroi = ('Ferro');
} else if (nivelDoHeroi >= 11 && nivelDoHeroi <= 20) {
    nivelDoHeroi = ('Bronze');
} else if (nivelDoHeroi >= 21 && nivelDoHeroi <= 50) {
    nivelDoHeroi = ('Prata');
} else if (nivelDoHeroi >= 51 && nivelDoHeroi <= 80) {
    nivelDoHeroi = ('Ouro');
} else if (nivelDoHeroi >= 81 && nivelDoHeroi <= 90) {
    nivelDoHeroi = ('Diamante');
} else if (nivelDoHeroi >= 91 && nivelDoHeroi <= 100) {
    nivelDoHeroi = ('Lendário');
} else if (nivelDoHeroi >= 101) {
    nivelDoHeroi = ('Imortal');
} 


console.log("O xp do herói é " + resultado + " e ele está no nível " + nivelDoHeroi + "");
