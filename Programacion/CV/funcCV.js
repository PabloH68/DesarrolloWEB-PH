$(document).ready(function(){
    $(nuevoCV).click(function(){
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
            let nombre=obj.results[0]['name']['first'];
            let apellido=obj.results[0]['name']['last'];
            let direccion=obj.results[0]['location']['street']['name']+" "+obj.results[0]['location']['street']['number'];
            let ciudad=obj.results[0]['location']['city']+"-  CP: "+obj.results[0]['location']['postcode'];
            let estado=obj.results[0]['location']['state']+" - "+obj.results[0]['location']['country'];
            let fechanac=obj.results[0]['dob']['date'];
            fechanac=fechanac.slice(8,10)+"/"+fechanac.slice(5,7)+"/"+fechanac.slice(0,4);
            let dirmail=obj.results[0]['email'];
            let phone=obj.results[0]['phone'];
            let mobile=obj.results[0]['cell'];
            let foto=obj.results[0]['picture']['large'];

            document.getElementById('nom').innerHTML="Nombre y apellido: "+titulo+" "+nombre+" "+apellido+"<br>Sexo: "+
            sexo+"<br>Domicilio: "+direccion+"<br>Ciudad: "+ciudad+"<br>Estado / País: "+estado+"<br>Fecha de nacimiento: "+fechanac+
            "<br>Teléfono: "+phone+"<br>Celular: "+mobile;
            document.getElementById('primernom').innerHTML=nombre;
            document.getElementById('apell').innerHTML=apellido;
            document.getElementById('dire').innerHTML="<i class='fas fa-map-marker-alt' style='font-size:24px'></i> "+direccion+" - "+ciudad;
            document.getElementById('telefo').innerHTML="<i class='fas fa-phone' style='font-size:24px'></i> "+phone;
            document.getElementById('celu').innerHTML="<i class='fas fa-mobile-alt' style='font-size:24px'></i> "+mobile;
            document.getElementById('fotos').innerHTML="<img src="+foto+" alt="+nombre+" style='width:50%'>";
            document.getElementById('mail').innerHTML="<a href='mailto:"+dirmail+"'>"+dirmail+"</a>";
            document.getElementById('email').innerHTML="<i class='far fa-envelope' style='font-size:24px'></i> <a href='mailto:"+dirmail+"'>"+dirmail+"</a>";
            document.getElementById("explabo").style.display='none';
            document.getElementById("estucurs").style.display='none';
            document.getElementById("infoco").style.display='none';

        }
        });
    });
    
})
$(experiencia).click(function(){
    document.getElementById("explabo").style.display='initial';
    document.getElementById("estucurs").style.display='none';
    document.getElementById("infoco").style.display='none';
})

$(estudios).click(function(){
    document.getElementById("explabo").style.display='none';
    document.getElementById("estucurs").style.display='initial';
    document.getElementById("infoco").style.display='none';
})

$(infocomp).click(function(){
    document.getElementById("explabo").style.display='none';
    document.getElementById("estucurs").style.display='none';
    document.getElementById("infoco").style.display='initial';
})