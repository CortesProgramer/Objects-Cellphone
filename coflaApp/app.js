let bInstalarcr = document.querySelector("#instaladorcr");
let bInstalarlol = document.querySelector("#instaladorlol");
let bInstalarow = document.querySelector("#instaladorow");
let bAbrircr = document.querySelector("#aperturacr");
let bAbrirlol = document.querySelector("#aperturalol");
let bAbrirow = document.querySelector("#aperturaow");
let resultado = document.querySelector("#resultado");


class Aplicacion {
    constructor(juego, cdd, puntuacion, peso) {
        this.juego = juego;
        this.cantidadDeDescargas = cdd;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.instalacion = false;
        this.abierto = false;
    }
    instalar() {
        if (this.instalacion == false) {
            alert(`${this.juego} ha sido instalado exitosamente.`);
            this.instalacion = true;
        } else {
            alert(`${this.juego} ha sido eliminado.`);
            resultado.innerHTML = "Vuelve a instalarlo cuando quieras";
            this.instalacion = false;
        }
    }
    abrir() {
        if (this.abierto == false && this.instalacion == true) {
            resultado.innerHTML = `${this.juego} esta abierto y listo para jugar`;
            this.abierto = true;
        } else if (this.abierto == true) {
            resultado.innerHTML = "vuelve pronto";
            this.abierto = false;
        } else {
            alert("tienes que instalar primero la aplicacion");
        }
    }
    info() {
        if (this.instalacion == true) {
            resultado.innerHTML = `El nombre del juego es: <b>${this.juego}<b>, <br>
        Su cantidad de descargas es de: <b>${this.cantidadDeDescargas}<b> millones, <br>
        Su puntuacion es: <b>${this.puntuacion}/10<b>, <br>
        Pesa ${this.peso}`;
        }
    }
}

const clashRoyale = new Aplicacion("Clash Royale", 100, 10, "1gb");
const lol = new Aplicacion("League of Legends", 20, 8, "48gb");
const overwatch = new Aplicacion("Overwatch", 45, 9, "65gb");

bInstalarcr.addEventListener("click", () => {
    clashRoyale.instalar();
    clashRoyale.info()
});
bAbrircr.addEventListener("click", () => {
    clashRoyale.abrir();
});

bInstalarlol.addEventListener("click", () => {
    lol.instalar();
    lol.info();
});
bAbrirlol.addEventListener("click", () => {
    lol.abrir();
});

bInstalarow.addEventListener("click", () => {
    overwatch.instalar();
    overwatch.info();
});
bAbrirow.addEventListener("click", () => {
    overwatch.abrir();
});






