function insertar2() {

    var categoria;
    //var categoria = document.getElementById("idCategoria").value; 
    var nombre = document.getElementById("idNombre").value; 
    var descripcion = document.getElementById("idDescripcion").value;
    console.log("Hola mundo");
    
   categoria = {name: nombre, description: descripcion};
    $.ajax (
        {
            

<<<<<<< HEAD
            url          : 'http://129.151.121.220:8080/api/Category/save',
=======
            url          : 'http://localhost:8080/api/Category/save',
            url          : 'http://152.70.141.56:8080/api/Category/save',
>>>>>>> e09f6e4fc0dde4d2b83cdf9620b32ded662393dd
            type         : 'POST',
            contentType  : "application/json;charset-UTF-8",
            dataType     : 'JSON',
            data         :  JSON.stringify(categoria),

            success      :  function(response){
                               console.log(response);
                               consultar();
                            },
            error       :   function(xhr,status){
                            console.log(status);
                            }
                        
        }
    );
   
}

function consultar() {
<<<<<<< HEAD
$.ajax(
     {
        url          : 'http://129.151.121.220:8080/api/Category/all',
        type         : 'GET',
        dataType     : 'JSON',
        success      :  function(json){
            
                            $("#res").empty();

                            document.getElementById("tablaid").style.display="";
                            for (i=0; i < json.length; i++){

                                var idCategory = json[i].id;
                                var nombre = json[i].name;
                                var descripcion = json[i].description;
                                var bicicletas = json[i].bikes;
                                $("#res").append("<tr>");
                                $("#res").append("<td>" + idCategory + "</td>");
                                $("#res").append("<td>" + nombre + "</td>");
                                $("#res").append("<td>" + descripcion + "</td>");
                               $("#res").append("<td> <a id='boton' class=\"btn btn-outline-primary\">DETALLES</a></td>");
                               $("#boton").click(()=>mostrarinfo(idCategory,nombre,descripcion));
                               $("#res").append("<td> <a class=\"btn btn-outline-danger\" onclick=borrar(" +idCategory+")>ELIMINAR</a> </td>");
                                
                                $("#res").append("</tr> ");

                            }
                            console.log(json)
                        },

         error       :  function(xhr,status){
                            console.log(xhr)
                        }
     }
);    
=======
        $.ajax({
            url: "http://localhost:8080/api/Category/all",
            url: 'http://152.70.141.56:8080/api/Category/all',
            type: "GET",
            dataType: "JSON",
            success: function (json) {
            $("#res").empty();

            document.getElementById("tablaid").style.display = "";
            for (i = 0; i < json.length; i++) {
                var idCategory = json[i].id;
                var nombre = json[i].name;
                var descripcion = json[i].description;
                var bicicletas = json[i].bikes;
                $("#res").append("<tr>");
                // $("#res").append("<td>" + idCategory + "</td>");
                $("#res").append("<td>" + nombre + "</td>");
                $("#res").append("<td>" + descripcion + "</td>");

                $("#res").append("<td id='listaBicis'>")
                for (let j = 0; j < bicicletas.length; j++) {
                    $("#listaBicis").append("> "+ bicicletas[j].name+"<br>")
                    
                }
                $("#res").append("</td>");
                $("#res").append(
                "<td> <a id='boton' class=\"btn btn-outline-primary\">DETALLES</a></td>"
                );
                $("#boton").click(() => mostrarinfo(idCategory, nombre, descripcion));
                $("#res").append(
                '<td> <a class="btn btn-outline-danger" onclick=borrar(' + idCategory +")>ELIMINAR</a> </td>"
                );

                $("#res").append("</tr>");
            }
            console.log(json);
            },

            error: function (xhr, status) {
            console.log(xhr);
            },
        });
>>>>>>> e09f6e4fc0dde4d2b83cdf9620b32ded662393dd
}
function mostrarinfo(id,nombre,descripcion){

document.getElementById("categoriainformation").style.display="";
document.getElementById("botoninfo").style.display="";
document.getElementById("idinfo").value = id;
document.getElementById("nombreinfo").value = nombre;
document.getElementById("descripcioninfo").value = descripcion;

}
function borrar(deleteid) {

$.ajax (
{

<<<<<<< HEAD
    url          : 'http://129.151.121.220:8080/api/Category/'+deleteid,
=======
    url          : 'http://localhost:8080/api/Category/'+deleteid,
    url          : 'http://152.70.141.56:8080/api/Category/'+deleteid,
>>>>>>> e09f6e4fc0dde4d2b83cdf9620b32ded662393dd
    type         : 'DELETE',
    contentType  : 'application/json',

    success      :  function(response){
                        console.log("Delete exitoso");
                        consultar();

                    },
    error       :   function(xhr,status){
                        console.log(xhr);

                    }
}
);

}
function actualizar() {
var id = document.getElementById("idinfo").value;
var nombre = document.getElementById("nombreinfo").value;
var descripcion = document.getElementById("descripcioninfo").value;

cambio      = {idClient: id, name: nombre, description: descripcion};
datosEnvio   = JSON.stringify(cambio);
$.ajax (
        {
<<<<<<< HEAD
            url          : 'http://129.151.121.220:8080/api/Category/update',
=======
            url          : 'http://localhost:8080/api/Category/update',
            url          : 'http://152.70.141.56:8080/api/Category/update',
>>>>>>> e09f6e4fc0dde4d2b83cdf9620b32ded662393dd
            type         : 'PUT',
            data         :  datosEnvio,
            contentType  : 'application/json',

            success      :  function(response){
                                console.log(response);
                                consultar();
                            },
            error       :   function(xhr,status){
                                console.log( xhr);

                            }
        }
    );
}