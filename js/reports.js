

function consultar() {
    var f = new Date(document.getElementById("fechaInicio").value);
    var fechaInicio = f.getFullYear()+ '-' + ( f.getMonth() + 1 ) + '-' + f.getDate();
    var f2 = new Date(document.getElementById("fechaEntrega").value);
    var fechaEntrega = f2.getFullYear()+ '-' + ( f2.getMonth() + 1 ) + '-' + f2.getDate();
    console.log("antes del ajax");
    $.ajax(
             {
                url          : 'localhost:8080/api/Reservation/report-dates/'+fechaInicio+'/'+fechaEntrega,
                type         : 'GET',
                dataType     : 'JSON',
                success      :  function(json){
                    console.log("antes del for");
                                    $("#resultado").empty();
                                    var contador = 0;
                                    document.getElementById("tablaid").style.display="";
                                    
                                    for (i=0; i < json.length; i++){

                                       // var idClient= json[i].idClient;
                                        //var nombre = json[i].name;  
                                        contador++;                

                                    }
                                    $("#resultado").val() = "TOTAL DE RESERVAS EN EL TIEMPO SELECCIONADO: "+contador;

                                    console.log(json)
                                },

                 error       :  function(xhr,status){
                                    console.log(xhr)
                                }
             }
    );    
}