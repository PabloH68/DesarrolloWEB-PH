$(document).ready(function(){
    $("button").click(function(){
        $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
           
            const obj = data; //Esto funciona!!!

            let sexo=obj.results[0]['gender'];
            if(sexo=="male"){
                sexo="masculino";
            } else if(sexo=="female"){
                sexo="femenino";
            }
            let titulo=obj.results[0]['name']['title'];
            if (titulo=="Mr" || titulo=="Monsieur"){titulo="Sr.";}
            else if (titulo=="Ms" || titulo=="Mrs" || titulo=="Madame"){titulo="Sra."}
            else if (titulo=="Miss" || titulo=="Mademoiselle"){titulo="Srta."}
            let nombre=obj.results[0]['name']['first']+" "+obj.results[0]['name']['last'];
            let direccion=obj.results[0]['location']['street']['name']+" "+obj.results[0]['location']['street']['number'];
            let ciudad=obj.results[0]['location']['city']+"-  CP: "+obj.results[0]['location']['postcode'];
            let estado=obj.results[0]['location']['state']+" - "+obj.results[0]['location']['country'];
            let fechanac=obj.results[0]['dob']['date'];
            fechanac=fechanac.slice(8,10)+"/"+fechanac.slice(5,7)+"/"+fechanac.slice(0,4);
            let dirmail=obj.results[0]['email'];
            let phone=obj.results[0]['phone'];
            let mobile=obj.results[0]['cell'];
            let foto=obj.results[0]['picture']['large'];


            console.log(foto);
            console.log(nombre);
            console.log(obj.results[0]['name']['title']);
            console.log(obj.results[0]['dob']['date']);

            document.getElementById('nom').innerHTML=titulo+" "+nombre;
            document.getElementById('sex').innerHTML=sexo;
            document.getElementById('dir').innerHTML=direccion;
            document.getElementById('city').innerHTML=ciudad;
            document.getElementById('estado').innerHTML=estado;
            document.getElementById('fecha').innerHTML=fechanac;
            document.getElementById('telef').innerHTML=phone;
            document.getElementById('cellp').innerHTML=mobile;
            document.getElementById('fotos').innerHTML="<img src="+foto+" alt="+nombre+" style='width:50%'>";

        }
        });
    });
    
})