let listaContactos = [];

//Crea una función para añadir un nuevo contacto a una lista
function agregarContacto(nombre, apellido, telf, ciudad, direccion){
    const contacto = {
        id: listaContactos.length + 1,
        nombre,
        apellido,
        telefono: telf,
        ubicaciones: {
            ciudad,
            direccion
        }
    }
    return listaContactos.push(contacto);
}

agregarContacto("Olivia", "Flores", "78915885", "Santa Cruz de la Sierra", "Canal Isuto, Los Pachio");
agregarContacto("Maria", "Humerez", "69878852", "La Paz", "Torre Multicine", "Av. Arce 2631");
agregarContacto("Fabricio","Aguilera", "68512254", "La Paz", "Calle 16 8052 Calacoto Between, Julio Patiño");
agregarContacto("Susana", "Coaquira", "71569984", "Cochabamba", "Obispo Anaya 260");
agregarContacto("Aizar", "Gutierrez", "78854422", "Pando", "Av. 9 de Febrero, Cobija");
agregarContacto("Esmeralda", "Carrasco", "69987555", "Tarija", "Av. Panamericana 612, Ruta Nacional 1");
console.log("------ Mis contactos ------");
console.log(listaContactos);


function buscarContacto(nombreContacto) {
    const partes = nombreContacto.split(" ");
    const nombre = partes[0];
    const apellido = partes[1];
    for (let i = 0; i < listaContactos.length; i++) {
        if (listaContactos[i].nombre === nombre && listaContactos[i].apellido === apellido) {
            return i;
        }
    }
    return -1;
}

//Crea una función para borrar un contacto existente de la lista
function borrarContacto(nombreContacto) {
    const indice = buscarContacto(nombreContacto);
    if (indice == -1){
        return listaContactos;
    }
    return listaContactos.splice(indice, 1);
}
console.log("------ Mis contactos no borrados ------");
borrarContacto("Olivia Flores");
borrarContacto("Fabricio Aguilera");
console.log(listaContactos);

//Crea una función para imprimir en consola los contactos presentes en la lista
function imprimir(){
    for (const contacto of listaContactos) {
        console.log(contacto);
    }
}
console.log("------ Mis contactos actuales ------");
imprimir();

//Bonus: Añade una función que permita actualizar un contacto
function actualizarContacto(nombreContacto, datos) {
    const indice = buscarContacto(nombreContacto);
    if (indice == -1){
        return listaContactos;
    }
    listaContactos[indice] = { ...listaContactos[indice], ...datos };
}
console.log("------ Mis contactos actualizados ------");
actualizarContacto("Susana Coaquira", { telefono: "12345678", ubicaciones:{ciudad: "Sucre", direccion:"Arenales 13"} });
actualizarContacto("Esmeralda Carrasco", { apellido: "Carrazco"});
imprimir();


