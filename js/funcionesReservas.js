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
                    var Ibike = respuesta[i].bike.id;
                    var idCliente = respuesta[i].client.idClient;
                    var nombreClient = respuesta[i].client.name;
                    var correoClient = respuesta[i].client.email;
                    var calificacion = respuesta[i].score;
                    var fechaC = respuesta[i].startDate;
                    var fechaF = respuesta[i].devolutionDate;
                    var resid = respuesta[i].idReservation;
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
                    $("#boton").click(()=>mostrarinfo(idCliente,bike,fechaC, fechaF, resid, Ibike));
                    //insertar y llamar dentro de una columna por medio de JS
                    $("#res").append("<td> <a id='borr' class=\"btn btn-outline-danger\" onclick=borrar(" +idreserva+")> DELETE </a></td>");
                    //$("#borr").click(()=>borrar(idreserva));
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


function insertar() {
	
    var hoy = new Date();
    var fechaActual = hoy.getFullYear()+ '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getDate();
    console.log("fecha por detras    "+ fechaActual);
    var f = new Date(document.getElementById("fechaEntrega").value);
    var fechaEntrega = f.getFullYear()+ '-' + ( f.getMonth() + 1 ) + '-' + f.getDate();


    var message;
    //obtener valores de las cajas de texto
    var cliente = document.getElementById("idcliente").value;
    var bicicleta = 1 //document.getElementById("listaBicicletas").value;
   
    //imprimir valores por consola para comprobar que esta obteniendo los valores deseados
    console.log(cliente);
    console.log("aca sigue bike ====")
    console.log(bicicleta);
    //asignar valores en formato JSON
   message = {startDate:fechaActual, devolutionDate:fechaEntrega, client:{idClient:cliente}, bike:{id:bicicleta}}

    $.ajax (
        {

            url          : 'http://localhost:8080/api/Reservation/save',
            type         : 'POST',
            contentType  : "application/json;charset-UTF-8",
            dataType     : 'JSON',
            data         :  JSON.stringify(message),

            success      :  function(response){
                               console.log(response);
                               //refresh a la tabla
                               alert("se guardo xd");
                            },
            error       :   function(xhr,status){
                            console.log( xhr);
                            alert("bad request")

                            }
                        
        }
    );
   
}


function mostrarinfo(idcliente, bike, fechaC, fechaF, idreservation, idBike){

    f =new Date(fechaC);
    fechaPasar = f.getFullYear()+ '-' + ( f.getMonth() + 1 ) + '-' + f.getDate();

    //hacer visible el editar informacion (boton detail)
    document.getElementById("reservainfo").style.display="";
    document.getElementById("botoninfo").style.display="";
    //asignarle los valores a las cajas de editar
    document.getElementById("idReservation").value = idreservation;
    document.getElementById("idBike").value = idBike;
    document.getElementById("cliente").value = idcliente;
    document.getElementById("nombrebicicleta").value = bike;
    document.getElementById("fecha").value = fechaPasar;
    document.getElementById("fechafin").value = fechaF;
    
    
}


function editarReserva()
        {
            
            var message;
           //obtener valores de los inputs (cajas de texto)
           var idRes = document.getElementById("idReservation").value;
           var idB = document.getElementById("idBike").value;
           var fecha = document.getElementById("fecha").value;
           var fechaFin = document.getElementById("fechafin").value;
           var estado= document.getElementById("estado").value;
           var cliente= document.getElementById("cliente").value;


          
       
            //asignar en formato JSON
            message ={idReservation: idRes, startDate: fecha, devolutionDate: fechaFin, status: estado, bike: {id: idB}, client: {idClient: cliente}};
           
            datosEnvio= JSON.stringify(message);
        
            $.ajax (
                {
        
                    url          : 'http://localhost:8080/api/Reservation/update',
                    type         : 'PUT',
                    data         :  datosEnvio,
                    contentType  : 'application/json',

                    success      :  function(response){
                                        console.log(response);
                                        alert("Actualizacion realizada con exito");
                                        
                                    },
                    error       :   function(xhr,status){
                                        console.log( xhr);

                                    }

                                
                }
            );
        }

        function borrar(deleteid) {

            console.log("hoaaaaa");
            //creo que enviando el id en la url basta para borrar
            // let datos;
    
            // datos = { id: deleteid };
            // datosEnvio = JSON.stringify(datos);
    
            $.ajax({
                url: "http://localhost:8080/api/Reservation/" + deleteid,
                type: "DELETE",
                // data: datosEnvio,
                contentType: "application/json",
    
                success: function (response) {
                console.log("Delete exitoso");
                consultar();
                },
                error: function (xhr, status) {
                console.log(xhr);
                },
            });
    }