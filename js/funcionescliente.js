
function insertar2() {

            var cliente;
            //var cliente = document.getElementById("idCliente").value; 
            var nombre = document.getElementById("idNombre").value; 
            var Correo = document.getElementById("idCorreo").value; 
            var pass = document.getElementById("idPassword").value; 
            var edad = document.getElementById("idEdad").value;
            console.log("Hola mundo");
            
           cliente = {name: nombre, email: Correo, password:pass, age: edad};
            $.ajax (
                {
                    
        
<<<<<<< HEAD
                    url          : 'http://129.151.121.220:8080/api/Client/save',
=======
                    url          : 'http://localhost:8080/api/Client/save',
                    url          : 'http://152.70.141.56:8080/api/Client/save',
>>>>>>> e09f6e4fc0dde4d2b83cdf9620b32ded662393dd
                    type         : 'POST',
                    contentType  : "application/json;charset-UTF-8",
                    dataType     : 'JSON',
                    data         :  JSON.stringify(cliente),
        
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
<<<<<<< HEAD
                url          : 'http://129.151.121.220:8080/api/Client/all',
=======
                url          : 'http://localhost:8080/api/Client/all',
                url          : 'http://152.70.141.56:8080/api/Client/all',
>>>>>>> e09f6e4fc0dde4d2b83cdf9620b32ded662393dd
                type         : 'GET',
                dataType     : 'JSON',
                success      :  function(json){
                    
                                    
                                    $("#message").empty();
                                    $("#idmessage").empty();
                                    $("#res").empty();

                                    document.getElementById("tablaid").style.display="";
                                    
                                    for (i=0; i < json.length; i++){

                                        var idClient= json[i].idClient;
                                        var nombre = json[i].name;
                                        var correo = json[i].email;
                                        var edad = json[i].age;
                                        var password = json[i].password;
                                        $("#res").append("<tr>");
                                        $("#res").append("<td>" + idClient + "</td>");
                                        $("#res").append("<td>" + nombre + "</td>");
                                        $("#res").append("<td>" + correo + "</td>");
                                        $("#res").append("<td>" + edad + "</td>");
                                       $("#res").append("<td> <a id='boton' class=\"btn btn-outline-primary\">DETALLES</a></td>");
                                       $("#boton").click(()=>mostrarinfo(idClient,nombre,correo,edad));
                                       $("#res").append("<td> <a class=\"btn btn-outline-danger\" onclick=borrar(" +idClient+")>ELIMINAR</a> </td>");
                                        
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
function mostrarinfo(id,nombre,correo,edad){
   
    document.getElementById("clienteinformation").style.display="";
    document.getElementById("botoninfo").style.display="";
    document.getElementById("idinfo").value = id;
    document.getElementById("nombreinfo").value = nombre;
    document.getElementById("correoinfo").value = correo;
    document.getElementById("edadinfo").value = edad;
    
}
function borrar(deleteid) {

  

    $.ajax (
        {

<<<<<<< HEAD
            url          : 'http://129.151.121.220:8080/api/Client/'+ deleteid,
=======
            url          : 'http://localhost:8080/api/Client/'+ deleteid,
            url          : 'http://152.70.141.56:8080/api/Client/'+deleteid,
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
    var correo = document.getElementById("correoinfo").value;
    var edad = document.getElementById("edadinfo").value;
    var pass = document.getElementById("passInfo").value;

    cambio      = {idClient: id, name: nombre, email: correo, password:pass, age: edad};
    datosEnvio   = JSON.stringify(cambio);
    $.ajax (
                {
<<<<<<< HEAD
                    url          : 'http://129.151.121.220:8080/api/Client/update',
=======
                    url          : 'http://localhost:8080/api/Client/update',
                    url          : 'http://152.70.141.56:8080/api/Client/update',
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
        
        