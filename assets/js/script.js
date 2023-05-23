let nameForm = document.getElementById("nombre").value;
let apellidoForm = document.getElementById("apellido").value;
let emailForm = document.getElementById("correo").value;
let phoneForm = document.getElementById("telefono").value;
let boton = document.getElementById("boton");

class Usuario {
    constructor(nombre, apellido, email, telefono){
        this.nombre = nombre,
        this.apellido = apellido,
        this.email = email,
        this.telefono = telefono
    }
};

let obtener = () => {
    let usuario = new Usuario(nameForm, apellidoForm, emailForm, phoneForm);
    agregar(usuario)
};

let agregar = (...usuario) => {
    let {nombre, apellido, email, telefono} = usuario[0];
    let nombreCompleto = `${nombre} ${apellido}`;
    let escribir = document.getElementById("here");
    escribir.innerText = `Nombre: ${nombreCompleto} Email: ${email} Teléfono: ${telefono}`
};

boton.addEventListener("click", obtener);
