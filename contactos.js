let listaContactos = ["Olivia Flores", "Maria Humerez", "Fabricio Aguilera", "Susana Coaquira"];

//Crea una función para añadir un nuevo contacto a una lista
function agregarContacto(contacto){
    return listaContactos.push(contacto);
}

/* agregarContacto("Adriana Mancilla");
console.log(listaContactos); */

//Crea una función para borrar un contacto existente de la lista
function borrarContacto(contacto){
    for(let i = 0; i < listaContactos.length; i++){
        if(listaContactos[i] == contacto){
            return listaContactos.splice(i, 1);
        }
    }
}

/* borrarContacto("Olivia Flores");
console.log(listaContactos);*/

//Crea una función para imprimir en consola los contactos presentes en la lista
function imprimir(){
    for (const contacto of listaContactos) {
        console.log(contacto);
    }
}

imprimir();
