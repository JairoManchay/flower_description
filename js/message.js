const click_head = document.getElementById('click_head');

click_head.addEventListener('click', function(){
    modalPrimavera('Flores amarillas!!!', html_texto, '../img/imagen_pareja.jpeg');
})


function modalPrimavera(titulo, texto, imagen){
    Swal.fire({
        title: titulo,
        html: `<p>${texto}</p>`,
        imageUrl: imagen,
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: 'Imagen pareja',
      })
}



let html_texto = 'Hoy es un dia no diferente a los demás, pero si diferente para mi, \nporqué es el día en donde pude demostrarte que con lo que hago, mi hobbie, \npoder transformarlo en una ayuda extra para poder darte un detalle hermoso, \nlo que te mereces princesa, sé que no lo esperabas y por eso te quería sorprender.....🌹';