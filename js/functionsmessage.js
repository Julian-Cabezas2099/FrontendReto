function consultar() {
    $.ajax(
             {
                url          : 'http://129.151.121.220:8080/api/Message/all',
                type         : 'GET',
                dataType     : 'JSON',
                success      :  function(respuesta){
                    console.log(respuesta)
                                    
                                    $("#message").empty();
                                    $("#idmessage").empty();
                                    $("#res").empty();

                                    document.getElementById("tablaid").style.display="";
                                    for (i=0; i < respuesta.length; i++){
                                        var cliente = respuesta[i].client.idClient;
                                        var mensaje = respuesta[i].messageText;
                                        var bicicleta = respuesta[i].bike.name;
                                        var idbicicleta = respuesta[i].bike.name;
                                        var idsms = respuesta[i].idMessage;
                                        
                                        $("#res").append("<tr>");
                                        $("#res").append("<td>" + respuesta[i].client.idClient + "</td>");
                                        $("#res").append("<td>" + respuesta[i].bike.name + "</td>");
                                        $("#res").append("<td>" + respuesta[i].messageText + "</td>");
                                       $("#res").append("<td> <a id='boton' class=\"btn btn-outline-primary\"> DETAIL </a></td>");
                                      //llamar por medio de jquery el accionar del boton detail
                                       $("#boton").click(()=>mostrarinfo(idsms,cliente,bicicleta, mensaje, idbicicleta));
                                        //insertar y llamar dentro de una columna por medio de JS
                                       $("#res").append("<td> <a class=\"btn btn-outline-danger\"  onclick=borrar(" +idsms+")>DELETE MESSAGE</a> </td>");
                                        console.log(respuesta[i].idMessage);
                                        $("#res").append("</tr> ");

                                    }
                                    
                                },

                 error       :  function(xhr,status){
                                    console.log(xhr)
                                }


             }


          );
        
        }

function insertar() {

            var message;
            //obtener valores de las cajas de texto
            var cliente = document.getElementById("clientId").value;
            var bicicleta = document.getElementById("listaBicicletas").value;
            
            var mensaje = document.getElementById("messageform").value;
            //imprimir valores por consola para comprobar que esta obteniendo los valores deseados
            console.log(cliente);
            console.log("aca sigue bike ====")
            console.log(bicicleta);
            //asignar valores en formato JSON
           message = {messageText:mensaje, client:{idClient:cliente},bike:{id:bicicleta}}

            $.ajax (
                {
        
                    url          : 'http://129.151.121.220:8080/api/Message/save',
                    type         : 'POST',
                    contentType  : "application/json;charset-UTF-8",
                    dataType     : 'JSON',
                    data         :  JSON.stringify(message),
        
                    success      :  function(response){
                                       console.log(response);
                                       //refresh a la tabla
                                       alert("Registro exitoso");
                                    },
                    error       :   function(xhr,status){
                                    console.log( xhr);
                                    alert("bad request")
        
                                    }
                                
                }
            );
}
        
        
function borrar(deleteid) {

           /* var datos;
        
            datos      = {idMessage : deleteid};
            datosEnvio   = JSON.stringify(datos);*/
        
            $.ajax (
                {
        
                    url          : 'http://129.151.121.220:8080/api/Message/'+deleteid,
                    type         : 'DELETE',
                 
                   
                    contentType  : 'application/json',
        
                    success      :  function(response){
                                        console.log("Se realizo el delete exitoso");
                                        consultar();
        
                                    },
                    error       :   function(xhr,status){
                                        console.log(xhr);
        
                                    }
                }
            );
        
}
        


function editarmensaje()
        {
            
            var message;
           //obtener valores de los inputs (cajas de texto)
           var idDetail= document.getElementById("idsms").value;
           var infomessage= document.getElementById("messageinfo").value;
           var cliente= document.getElementById("cliente").value;
           var bicicleta= document.getElementById("bicicleta").value;
          
       
            //asignar en formato JSON
            message = {idMessage: idDetail, messagetext: infomessage, client:{idClient: cliente}, bike:{id: bicicleta}};
            datosEnvio= JSON.stringify(message);
        
            $.ajax (
                {
        
                    url          : 'http://129.151.121.220:8080/api/Message/update',
                    type         : 'PUT',
                    data         :  datosEnvio,
                    contentType  : 'application/json',

                    success      :  function(response){
                                        console.log(response);
                                        
                                    },
                    error       :   function(xhr,status){
                                        console.log( xhr);

                                    }

                                
                }
            );
}
    


function mostrarinfo(idsms, cliente, bicicleta, mensaje, idBicicleta){


            //hacer visible el editar informacion (boton detail)
            document.getElementById("userinformation").style.display="";
            document.getElementById("botoninfo").style.display="";
            //asignarle los valores a las cajas de editar
            document.getElementById("idsms").value = idsms;
            document.getElementById("cliente").value = cliente;
            document.getElementById("bicicleta").value = bicicleta;
            document.getElementById("idBicicleta").value = idBicicleta;
            document.getElementById("messageinfo").value = mensaje;
            
}

function actualizar() {

            var idsms = document.getElementById("idsms").value;
            var idBicicleta = document.getElementById("idBicicleta").value;
            var cliente = document.getElementById("cliente").value;
            var bicicleta = document.getElementById("bicicleta").value;
            var sms = document.getElementById("messageinfo").value;
            console.log(cliente);
            console.log(sms);

            planeta      = {idMessage : idsms, messageText: sms, bike: {id: idBicicleta}, client: {idCliente: cliente}};
            datosEnvio   = JSON.stringify(planeta);
        
        
            $.ajax (
                        {
        
                            url          : 'http://129.151.121.220:8080/api/Message/update',
                            type         : 'PUT',
                            data         :  datosEnvio,
                            contentType  : 'application/json',
        
                            success      :  function(response){
                                                console.log(response);
                                                alert("Actualizacion realizada con exito");
                                                consultar();
                                            },
                            error       :   function(xhr,status){
                                                console.log( xhr);
        
                                            }
        
                        }
                    );
        
        
        
}

function listar(){
            $.ajax(
                     {
                        url          : 'http://129.151.121.220:8080/api/Bike/all',
                        type         : 'GET',
                        dataType     : 'JSON',
                        success      :  function(respuesta){
                            console.log(respuesta)
                                            
                                            $("#listaBicicletas").empty();
                                            for (i=0; i < respuesta.length; i++){
                                                  
                                                $("#listaBicicletas").append("<option id='namebike' value="+ respuesta[i].id+ ">"+respuesta[i].name+"</option>");
                                            }
                                            
                                        },
        
                         error       :  function(xhr,status){
                                            console.log(xhr)
                                        }
        
        
                     }
        
        
                  );
                
}

        
        