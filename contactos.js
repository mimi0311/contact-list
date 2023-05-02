let listaContactos = [];

//Crea una función para añadir un nuevo contacto a una lista
function agregarContacto(nombre, apellido, telf, ciudad, direccion){
    contacto = {
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
console.log(listaContactos);

//Crea una función para borrar un contacto existente de la lista
function borrarContacto(nombreContacto){
    const partes = nombreContacto.split(" ")
    const nombre = partes[0]
    const apellido = partes[1]
    for(let i = 0; i < listaContactos.length; i++){
        if(listaContactos[i].nombre === nombre && listaContactos[i].apellido === apellido){
            return listaContactos.splice(i, 1);
        }
    }
}

borrarContacto("Olivia Flores");
borrarContacto("Fabricio Aguilera");
console.log(listaContactos);

//Crea una función para imprimir en consola los contactos presentes en la lista
function imprimir(){
    for (const contacto of listaContactos) {
        console.log(contacto);
    }
}

imprimir();


