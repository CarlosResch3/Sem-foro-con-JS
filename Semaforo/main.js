//Semáforo

function
cambiarSemaforo(colorActual){
    switch (colorActual){
        case "verde":
            console.log("El semáforo está en verde, cambiando a amarillo");
            alert ("El semáforo está en verde, cambiando a amarillo");
            setTimeout(() => cambiarSemaforo("amarillo"), 3000);
            break;
        case "amarillo":
            console.log("El semáforo está en amarillo, cambiando a rojo");
            alert ("El semáforo está en amarillo, cambiando a rojo");
            setTimeout(() => cambiarSemaforo("rojo), 2000"));
            break
        case "rojo":
            console.log("El semáforo está en rojo, cambiando a verde");
            alert ("El semáforo está en rojo, cambiando a verde");
            setTimeout(() => cambiarSemaforo("verde", 5000));
            break;
            default:
                console.log("color no válido");
                alert ("Color no válido");
                break;
    }
}

cambiarSemaforo("verde");
