function mostrarDatos() {
    let request = sendRequest('clases', 'GET', '');
    let table = document.getElementById('clases-table');
    table.innerHTML = "";
    request.onload = function () {

        let data = request.response;
        console.log(data);
        data.forEach(element => {
            table.innerHTML += `
            <tr>
            <th>${element._id}</th>
            <td>${element.nombre}</td>
            <td>${element.nivel}</td>
            <td>${element.grado}</td>
            <td>${element.dia}</td>
            <td>${element.hora}</td>
            <td>${element.enExterior}</td>
            <td>${element.salon}</td>
            <td>${element.textoReferencia}</td>
            <td>
                <button type="button" class "btn btn-primary" onclick='window.location = "/unaClase.html?id=${element._id}"'>Editar</button>
                <button type="button" class = "btn btn-danger" onclick= 'deleteClases("${element._id}")'>Eliminar</button>
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

function deleteClases(_id) {
    let request = sendRequest('clases/' + _id, 'DELETE', '');
    request.onload = function () {
        mostrarDatos();
    }
}

function guardarClases() {
    let nom = document.getElementById("nombre-n").value
    let niv = document.getElementById("nivel-n").value
    let gra = document.getElementById("grado-n").value
    let dia = document.getElementById("dia-n").value
    let hor = document.getElementById("hora-n").value
    let ext = document.getElementById("enExterior-n").value
    let sal = document.getElementById("salon-n").value
    let lib = document.getElementById("textoReferencia-n").value
    let data = { 
        'nombre': nom,
        'nivel': niv, 
        'grado': gra, 
        'dia': dia, 
        'hora': hor, 
        'enExterior': ext,
        'salon': sal,
        'textoReferencia': lib }
    let request = sendRequest('clases/', 'POST', data);

    request.onload = function () {

        window.location = 'clases.html'
    }

    request.onerror = function () {
        alert("Error al guardar los datos")
    }
}

function cargarDatos(id) {
    if (id != null) {
        let request = sendRequest('clases/' + id, 'GET', '');
        let nom = document.getElementById("nombre-n").value
        let niv = document.getElementById("nivel-n").value
        let gra = document.getElementById("grado-n").value
        let dia = document.getElementById("dia-n").value
        let hor = document.getElementById("hora-n").value
        let ext = document.getElementById("enExterior-n").value
        let sal = document.getElementById("salon-n").value
        let lib = document.getElementById("textoReferencia-n").value
    
        request.onload = function () {

            let data = request.response;
            nom.value = data.nombre
            niv.value = data.nivel
            gra.value = data.grado
            dia.value = data.dia
            hor.value = data.hora
            ext.value = data.enExterior
            sal.value = data.sal
            lib.value = data.lib

            
            console.log(data)
        }
    }
    request.onerror = function () {
        alert("Error al guardar los datos")
    }


}
function modificarClases(id) {
    let nom = document.getElementById("nombre-n").value
    let niv = document.getElementById("nivel-n").value
    let gra = document.getElementById("grado-n").value
    let dia = document.getElementById("dia-n").value
    let hor = document.getElementById("hora-n").value
    let ext = document.getElementById("enExterior-n").value
    let sal = document.getElementById("salon-n").value
    let lib = document.getElementById("textoReferencia-n").value
    let data = { 'nombre': nom, 
        'nivel': niv, 
        'grado': gra, 
        'dia': dia, 
        'hora': hor, 
        'enExterior': ext,
        'salon': sal,
        'textoReferencia': lib }

        let request = sendRequest('clases/' + id, 'PUT', data);
    console.log(request)
    request.onload = function () {
        window.location = 'clases.html'
    }

    request.onerror = function () {
        alert("Error al modificar los datos")
    }
}
