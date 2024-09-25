function mostrarDatos() {
    let request = sendRequest('clientes', 'GET', '');
    let table = document.getElementById('clientes-table');
    table.innerHTML = "";
    request.onload = function () {

        let data = request.response;
        data.forEach(element => {
            table.innerHTML += `
            <tr>
            <th>${element._id}</th>
            <td>${element.nombre}</td>
            <td>${element.apellidos}</td>
            <td>${element.documento}</td>
            <td>${element.correo}</td>
            <td>${element.telefono}</td>
            <td>${element.direccion}</td>
            <td>
                // <button type="button" class "btn btn-primary" onclick='window.location = "/form_clientes.html?id=${element._id}"'>Editar</button>


                <button type="button" class "btn btn-primary" onclick='window.location = "/unEstudiante.html?id=${element._id}"'>Editar</button>
                <button type="button" class = "btn btn-danger" onclick= 'deleteClientes("${element._id}")'>Eliminar</button>
            </td>
            </tr>
            `
        });
    }
    request.onerror = function () {
        table.innerHTML = `
    <tr>
    <td> colspan ="">Error al traer los datos</td>

    </tr>        
    `
    }
}

function deleteClientes(_id) {
    let request = sendRequest('clientes/' + _id, 'DELETE', '');
    request.onload = function () {
        mostrarDatos();
    }
}

function guardarClientes() {
    let nom = document.getElementById("nombre-n").value
    let ape = document.getElementById("apellidos-n").value
    let doc = document.getElementById("documento-n").value
    let cor = document.getElementById("correo-n").value
    let tel = document.getElementById("telefono-n").value
    let dir = document.getElementById("direccion-n").value
    let data = { 'nombre': nom, 'apellidos': ape, 'documento': doc, 'correo': cor, 'telefono': tel, 'direccion': dir }
    let request = sendRequest('clientes/', 'POST', data);

    request.onload = function () {

        // window.location = 'clientes.html'
        window.location = 'estudiantes.html'
    }

    request.onerror = function () {
        alert("Error al guardar los datos")
    }
}

function cargarDatos(id) {
    if (id != null) {
        let request = sendRequest('clientes/' + id, 'GET', '');

        let nom = document.getElementById("nombre-n")
        let ape = document.getElementById("apellidos-n")
        let doc = document.getElementById("documento-n")
        let cor = document.getElementById("correo-n")
        let tel = document.getElementById("telefono-n")
        let dir = document.getElementById("direccion-n")
        request.onload = function () {

            let data = request.response;
            nom.value = data.nombre
            ape.value = data.apellidos
            doc.value = data.documento
            cor.value = data.correo
            tel.value = data.telefono
            dir.value = data.direccion

            console.log(data)
        }
    }
    request.onerror = function () {
        alert("Error al guardar los datos")
    }


}
function modificarClientes(id) {
    let nom = document.getElementById("nombre-n").value
    let ape = document.getElementById("apellidos-n").value
    let doc = document.getElementById("documento-n").value
    let cor = document.getElementById("correo-n").value
    let tel = document.getElementById("telefono-n").value
    let dir = document.getElementById("direccion-n").value
    let data = { 'nombre': nom, 'apellidos': ape, 'documento': doc, 'correo': cor, 'telefono': tel, 'direccion': dir }


    let request = sendRequest('clientes/' + id, 'PUT', data);
    console.log(request)
    request.onload = function () {
        // window.location = 'clientes.html'

        window.location = 'estudiantes.html'
    }

    request.onerror = function () {
        alert("Error al modificar los datos")
    }
}
