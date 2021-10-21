function listar(){
            $.ajax(
                     {
                        url          : 'http://localhost:8080/api/Bike/all',
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
function consultar() {
    $.ajax(
             {
                url          : 'http://localhost:8080/api/Reservation/all',
                type         : 'GET',
                dataType     : 'JSON',
                success      :  function(respuesta){
                    console.log(respuesta)
                                                    
                    $("#message").empty();
                    $("#idmessage").empty();
                    $("#res").empty();
                
                    document.getElementById("tablaid").style.display="";
                    for (i=0; i < respuesta.length; i++){

                    var idreserva = respuesta[i].idReservation;
                    var bike = respuesta[i].bike.name;
                    var idCliente = respuesta[i].client.idClient;
                    var nombreClient = respuesta[i].client.name;
                    var correoClient = respuesta[i].client.email;
                    var calificacion = respuesta[i].score;
                    if (calificacion == null){
                        calificacion = "Sin calificacion"
                    }
                                                        
                    $("#res").append("<tr>");
                    $("#res").append("<td>" + idreserva + "</td>");
                    $("#res").append("<td>" + bike + "</td>");
                    $("#res").append("<td>" + idCliente + "</td>");
                    $("#res").append("<td>" + nombreClient + "</td>");
                    $("#res").append("<td>" + correoClient + "</td>");
                    $("#res").append("<td>" + calificacion + "</td>");
                   
                    $("#res").append("<td> <a id='boton' class=\"btn btn-outline-primary\"> DETAIL </a></td>");
                    //llamar por medio de jquery el accionar del boton detail
                    $("#boton").click(()=>mostrarinfo(idsms,cliente,bicicleta, mensaje, idbicicleta));
                    //insertar y llamar dentro de una columna por medio de JS
                    //$("#res").append("<td> <a class=\"btn btn-outline-danger\" href='http://localhost:8080/api/Message/" + respuesta[i].idMessage +"'>DELETE MESSAGE</a> </td>");
                    //console.log(respuesta[i].idMessage);
                    $("#res").append("</tr> ");
                
                                                    }
                                                    
                },
                
                error       :  function(xhr,status){
                        console.log(xhr)
                }
                
                
            }
                
                
    );
                        
}

        