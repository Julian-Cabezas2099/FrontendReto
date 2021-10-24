function insertar() {

        let admin;
        //let cliente = document.getElementById("idAdmine").value; 
        let nombre = $("#idNombre").val();
        // let nombre = document.getElementById("idNombre").value; 
        let correo = $("#idCorreo").val();
        // let Correo = document.getElementById("idCorreo").value; 
        let pass = $("#idPassword").val();
        // let pass = document.getElementById("idPassword").value; 
        console.log("Hola mundo");
        
    admin = {
            name: nombre,
            email: correo,
            password:pass
        }

        $.ajax (
            {
                

                url          : 'http://129.151.121.220:8080/api/Admin/save',
                type         : 'POST',
                contentType  : "application/json;charset-UTF-8",
                dataType     : 'JSON',
                data         :  JSON.stringify(admin),

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
    $("#adminInformation").hide();
$.ajax(
     {
        url          : 'http://129.151.121.220:8080/api/Admin/all',
        type         : 'GET',
        dataType     : 'JSON',
        success      :  function(json){
            
                            //No se estan usando
                            // $("#message").empty();
                            // $("#idmessage").empty();
                            $("#res").empty();

                            // document.getElementById("tablaid").style.display="";
                            $("#tablaid").show();
                            console.log(json);
                            for (i=0; i < json.length; i++){

                                let filaDatos = "<tr>";

                                let idAdmin= json[i].id;
                                let nombre = json[i].name;
                                let correo = json[i].email;
                                let password = json[i].password;

                                
                                $("#res").append("<td>" + idAdmin + "</td>");
                                $("#res").append("<td>" + nombre + "</td>");
                                $("#res").append("<td>" + correo + "</td>");
                                $("#res").append("<td> <a id='boton' class=\"btn btn-outline-primary\">DETALLE</a></td>");
                                $("#boton").click(()=>mostrarinfo(idAdmin,nombre,correo,password));
                                $("#res").append("<td> <a class=\"btn btn-outline-danger\" onclick=borrar(" +idAdmin+")>ELIMINAR</a> </td>");


                            }
                            
                        },

         error       :  function(xhr,status){
                            console.log(xhr)
                        }
     }
);    
}
function mostrarinfo(id, nombre, correo, password) {
        //   document.getElementById("clienteinformation").style.display = "";
        $("#adminInformation").show();
        //   document.getElementById("botoninfo").style.display = "";
        $("#botoninfo").show();
        //   document.getElementById("idinfo").value = id;
        $("#idinfo").val(id);
        //   document.getElementById("nombreinfo").value = nombre;
        $("#nombreinfo").val(nombre);
        //   document.getElementById("correoinfo").value = correo;
        $("#correoinfo").val(correo);

        $("#passInfo").val(password);
}
function borrar(deleteid) {

        //creo que enviando el id en la url basta para borrar
        // let datos;

        // datos = { id: deleteid };
        // datosEnvio = JSON.stringify(datos);

        $.ajax({
            url: "http://129.151.121.220:8080/api/Admin/" + deleteid,
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
function actualizar() {

        // let id = document.getElementById("idinfo").value;
        let id = $("#idinfo").val();
        // let nombre = document.getElementById("nombreinfo").value;
        let nombre = $("#nombreinfro").val();
        // let correo = document.getElementById("correoinfo").value;
        let correo= $("#correoinfo").val();
        // let pass = document.getElementById("passInfo").value;
        let pass = $("#passInfo").val();

        cambio = {
            idAdmin: id,
            name: nombre,
            email: correo,
            password: pass,
        };
        datosEnvio = JSON.stringify(cambio);
        $.ajax({
            url: "http://129.151.121.220:8080/api/Admin/update",
            type: "PUT",
            data: datosEnvio,
            contentType: "application/json",

            success: function (response) {
            console.log(response);
            consultar();
            },
            error: function (xhr, status) {
            console.log(xhr);
            },
        });
}