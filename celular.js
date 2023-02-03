let boton1 = document.querySelector("#boton1")
let boton2 = document.querySelector("#boton2")
let boton3 = document.querySelector("#boton3")
let mostrar = document.querySelector("#mostrar")


class Celular {
    constructor(referencia, color, peso, rdp, rdc, ram) {
        this.referencia = referencia;
        this.color = color;
        this.peso = peso;
        this.rdp = rdp;
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = false;
    }
    encender() {
        if(this.encendido == false) {
            alert(`el ${this.referencia} esta encendido`);
            this.encendido = true;
        } else {
            alert("el celular esta apagado");
            this.encendido = false;
        }
    }
    reiniciar() {
        if(this.encendido == true) {
            alert("reiniciando celular");
        } else {
            alert("el celular esta apagado");
        }
    }
    tomarFoto() {
        alert(`Tomaste una foto con ${this.rdc}`);
    }
    grabar() {
        alert(`grabaste un video con ${this.rdc}`);
    }
    info() {
        if(this.encendido) {
        mostrar.innerHTML = `
        El celular es un: <b>${this.referencia}</b>. <br>
        Su color es: <b>${this.color}</b>. <br>
        Pesa: <b>${this.peso}</b>. <br>
        La resolucion de pantalla es de: <b>${this.rdp}</b>. <br>
        La resolucion de la camara es: <b>${this.rdc}</b>. <br>
        Y cuenta con: <b>${this.ram}</b>. <br>
        `
        } else {
            mostrar.innerHTML = `<b>${this.referencia}</b> esta apagado`
        }
    }
}

const iphone = new Celular("iphone", "negro mate", "1kg", "5.8'", "4k hd", "4gb ram");
const motorola = new Celular("motorola", "verde", "600gr", "4.2'", "720p", "2gb ram");
const samsung = new Celular("samsung", "azul claro", "2kg", "5'", "hd", "8gb ram");


boton1.addEventListener("click", () => {
    iphone.encender();
    iphone.info()
})
boton2.addEventListener("click", () => {
    motorola.encender();
    motorola.info();
});
boton3.addEventListener("click", () => {
    samsung.encender();
    samsung.info();
});





