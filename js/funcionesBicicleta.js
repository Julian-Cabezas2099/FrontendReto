
function insertar2() {

    var bicicleta;
    //var bicicleta = document.getElementById("idBicicleta").value; 
    var marca = document.getElementById("idMarca").value; 
    var modelo = document.getElementById("idModelo").value; 
    var nombre = document.getElementById("idNombre").value; 
    var descripcion = document.getElementById("idDescripcion").value;
    console.log("Hola mundo");
    
   bicicleta = {brand: marca, year: modelo, name: nombre, description: descripcion , category:{id:1}};
    $.ajax (
        {
            

            url          : 'http://129.151.121.220:8080/api/Bike/save',
            type         : 'POST',
            contentType  : "application/json;charset-UTF-8",
            dataType     : 'JSON',
            data         :  JSON.stringify(bicicleta),

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
$.ajax(
     {
        url          : 'http://129.151.121.220:8080/api/Bike/all',
        type         : 'GET',
        dataType     : 'JSON',
        success      :  function(json){
            
                            $("#res").empty();

                            document.getElementById("tablaid").style.display="";
                            for (i=0; i < json.length; i++){

                                // var idBike= json[i].id;
                                var idBike= json[i].category.name;
                                var marca = json[i].brand;
                                var modelo = json[i].year;
                                var nombre = json[i].name;
                                var descripcion = json[i].description;
                                $("#res").append("<tr>");
                                $("#res").append("<td>" + idBike + "</td>");
                                $("#res").append("<td>" + marca + "</td>");
                                $("#res").append("<td>" + modelo + "</td>");
                                $("#res").append("<td>" + nombre + "</td>");
                                $("#res").append("<td>" + descripcion + "</td>");
                               $("#res").append("<td> <a id='boton' class=\"btn btn-outline-primary\">DETALLES</a></td>");
                               $("#boton").click(()=>mostrarinfo(idBike,marca,modelo,nombre,descripcion));
                               $("#res").append("<td> <a class=\"btn btn-outline-danger\" onclick=borrar(" +idBike+")>ELIMINAR</a> </td>");
                                
                                $("#res").append("</tr> ");

                            }
                            console.log(json)
                        },

         error       :  function(xhr,status){
                            console.log(xhr)
                        }
     }
);    
}
function mostrarinfo(id,marca,modelo,nombre,descripcion){

document.getElementById("bicicletainformation").style.display="";
document.getElementById("botoninfo").style.display="";
document.getElementById("idinfo").value = id;
document.getElementById("marcainfo").value = marca;
document.getElementById("modeloinfo").value = modelo;
document.getElementById("nombreinfo").value = nombre;
document.getElementById("descripcioninfo").value = descripcion;

}
function borrar(deleteid) {


$.ajax (
{

    url          : 'http://129.151.121.220:8080/api/Bike/'+deleteid,
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
var marca = document.getElementById("marcainfo").value;
var modelo = document.getElementById("modeloinfo").value;
var nombre = document.getElementById("nombreinfo").value;
var descripcion = document.getElementById("descripcioninfo").value;

cambio      = {idClient: id, brand: marca, model: modelo, name: nombre, description: descripcion};
datosEnvio   = JSON.stringify(cambio);
$.ajax (
        {
            url          : 'http://129.151.121.220:8080/api/Bike/update',
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

