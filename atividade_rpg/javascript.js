class Personagem {
    constructor(nome, titulo, hp, mana, energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
    }
}
class Habilidade {
    constructor(id, nome, dano, custo, energia) {
        this.id = id
        this.nome = nome
        this.dano = dano;
        this.custo = custo;
        this.energia = energia;
    }
}
// Instacia Classes - Criar Objetos
let hero = new Personagem ("Link","Herói do Tempo",100,100,0);
let boss = new Personagem("Skull Kid", "Majora's Mask",100,0,50);
// Preencher os Status
document.getElementById("nome-hero").textContent = hero.nome;
document.getElementById("titulo-hero").textContent = hero.titulo;
document.getElementById("nome-boss").textContent = boss.nome;
document.getElementById("titulo-boss").textContent = boss.titulo;
// Criar habilidades
let listaHabilidades =      [
    new Habilidade(1, "Ataque⚔️", 4, 0, 0),
    new Habilidade(2, "Skill✨", 8, 10, 0),
    new Habilidade(3, "Ultimate💥", 15, 0, 100)
];