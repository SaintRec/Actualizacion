var urlWS = "";
$(document).ready(function () {
    urlWS = "http://tiagolex.byethost7.com/server/";

});

function itemSeleccionado() {
    var datos = $("#tablaKendo").data("kendoGrid");
    var selectedItem = datos.dataItem(datos.select());
    alert('La Cédula de ' + selectedItem.nombre1 + ' ' + selectedItem.nombre2 + ' ' + selectedItem.apellido1 + ' ' + selectedItem.apellido2 + ' es: ' + selectedItem.identificacion);
}

function limpiar() {
    document.getElementById("id").value = "";
    document.getElementById("descripcion").value = "";
}

function leer() {
    urltorequest = urlWS + "tipoemoji/leer";
    $.ajax({
        type: "get",
        url: urltorequest,
        async: true,
        success: function (respuesta) {
            
            cabeceraTabla = "<table class=\"table table-condensed\"><thead><tr><th>id</th><th>Descripcion</th></tr></thead><tbody>";
            pieTabla = "</tbody></table>";
            contenidoTabla = "";
            $(ttoshow = JSON.parse(respuesta);oshow).each(function (key, value) {
                contenidoTabla = contenidoTabla + "<tr><td>" + value.idTipo + "</td><td>" + value.tipo + "</td></tr>";
            });
            document.getElementById("respuesta").innerHTML = cabeceraTabla + contenidoTabla + pieTabla;
        }
    });
}

function borrar() {
    id = document.getElementById("id").value;
    urltorequest = urlWS + "genero/borrar?id=" + id;
    $.ajax({
        type: "get",
        url: urltorequest,
        async: false,
        success: function (respuesta) {
            if (respuesta == "false") {
                alert("Error al borrar el registro " + id + ".");
            } else {
                alert("Registro borrado: " + id + ".");
            }
        }
    });
    leer();
}

function crear() {
    idTipo = document.getElementById("idTipo").value;
    tipo = document.getElementById("tipo").value;
    urltorequest = urlWS + "TipoEmoji/crear";
    $.ajax({
        type: "post",
        url: urltorequest,
        data: JSON.stringify({ idTipo: idTipo, tipo: tipo }),
        async: false,
        success: function (respuesta) {
            if (respuesta == "false") {
                alert("Error al crear el registro");
            } else {
                alert("Registro creado.");
            }
        }
    });
    leer();
}

function actualizar() {
    id = document.getElementById("idTipo").value;
    descripcion = document.getElementById("tipo").value;
    urltorequest = urlWS + "TipoEmoji/actualizar";
    $.ajax({
        type: "post",
        url: urltorequest,
        data: JSON.stringify({ id: id, descripcion: descripcion }),
        async: false,
        success: function (respuesta) {
            if (respuesta == "false") {
                swal("Error al actualizar el registro");
            } else {
                swal("Registro actualizado.");
            }
        }
    });
    leer();
}
