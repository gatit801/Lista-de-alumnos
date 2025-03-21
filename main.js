nombre_alumno_array = [];

function submit(){
    var nombre_1 = (document.getElementById("nombre_del_alumno-1").value);
    var nombre_2 = document.getElementById("nombre_del_alumno-2").value;
    var nombre_3 = document.getElementById("nombre_del_alumno-3").value;
    var nombre_4 = document.getElementById("nombre_del_alumno-4").value;
    var nombre_5 = document.getElementById("nombre_del_alumno-5").value;

    nombre_alumno_array.push(nombre_1);
    
    nombre_alumno_array.push(nombre_2);
    
    nombre_alumno_array.push(nombre_3);
    
    nombre_alumno_array.push(nombre_4);
    
    nombre_alumno_array.push(nombre_5);
    
    console.log(nombre_alumno_array);

    document.getElementById("ver nombres").innerHTML =nombre_alumno_array;
    document.getElementById("boton_enviar").style.display ="none";
    document.getElementById("boton_ordenar").style.display ="inline-block";
}

function sorting(){
    nombre_alumno_array.sort();
    console.log(nombre_alumno_array);
    document.getElementById("ver nombres").innerHTML =nombre_alumno_array;
}

