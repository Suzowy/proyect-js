$(document).ready(function () {

    //slider
    if (window.location.href.indexOf('index') > -1) {
        $(function () {

            $('.galeria').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 1200,
                responsive: true,
                pager: true,
                auto: true,
                pause: 5000,
                speed: 1000,
                easing: "ease-in-out"

            });

        });
    }


    //posts
    if (window.location.href.indexOf('index') > -1) {

        let posts = [
            {
                title: 'Alas de hierro',
                date: 'publicado el dia ' + moment().format("DD") + " de " + moment().format("MMMM") + " del " + + moment().format("YYYY"),
                content: "Todos esperaban que Violet Sorrengail muriera durante su primer año en el Colegio de Guerra Basgiath, incluso ella misma. Pero la Trilla fue tan solo la primera de una serie de pruebas imposibles destinadas a deshacerse de los indignos y los desafortunados.Ahora comienza el verdadero entrenamiento, y Violet no sabe cómo logrará superarlo. No solo porque es brutal y agotador o porque está diseñado para llevar al límite el umbral del dolor de los jinetes, sino porque el nuevo vicecomandante está empeñado en demostrarle lo débil que es, a menos que traicione al hombre al que ama. La voluntad de sobrevivir no será suficiente este año, porque Violet conoce el secreto que se oculta entre los muros del colegio, y nada, ni siquiera el fuego de dragón, será suficiente para salvarlos."
            },
            {
                title: 'La sociedad de la nieve',
                date: 'publicado el dia ' + moment().format("DD") + " de " + moment().format("MMMM") + " del " + + moment().format("YYYY"),
                content: "El relato definitivo de la tragedia de los Andes, donde el liderazgo y la capacidad de superación fueron decisivos. Si fuera ficción, resultaría inverosímil. Pero fue y es verdad, y todos los supervivientes hablan por primera vez desde aquel accidente de avión que los encontró con alrededor de veinte años en los Andes, a cuatro mil metros de altura, sin abrigo ni comida. Ahora cada uno de los dieciséis recuerda en primera persona cómo fueron los setenta y dos días en la cordillera, cómo superaron esa situación extrema, cómo entendieron la muerte, qué significó el accidente y cómo influyó en su vida posterior.La historia más increíble jamás contada, una narración que conmueve desde la primera línea: una vivencia extrema que pona a prueba las capacidades de liderazgo y superación. Un mosaico grandioso sobre el que se proyectan dieciséis maneras de superar lo insuperable."
            },
            {
                title: 'El hijo olvidado',
                date: 'publicado el dia ' + moment().format("DD") + " de " + moment().format("MMMM") + " del " + + moment().format("YYYY"),
                content: "Aitor Orizaola, «Ori», es un agente de la Ertzaintza en horas bajas. Mientras se recupera de la violenta resolución de su último caso como agente de la Ertzaintza y se enfrenta a un expediente disciplinario, recibe una mala noticia. Su sobrino Denis, que de niño fue como un hijo para él, ha sido acusado de asesinato. Pero algo huele a podrido y Orizaola, aunque ofi cialmente esté de baja, no piensa quedarse de brazos cruzados. Denis parece haber sido víctima de una extraña conspiración.Una falsa acusación, un misterioso suicidio, una poderosa familia con mucho que ocultar… Estas son algunas de las pistas que llevarán a Orizaola, a lo largo de una lectura sin tregua, en busca de un secreto que se pierde en el laberinto de caminos de la Bizkaia profunda mientras lucha por resolver el caso más importante de su vida."
            },
            {
                title: 'Los asesinos de la luna',
                date: 'publicado el dia ' + moment().format("DD") + " de " + moment().format("MMMM") + " del " + + moment().format("YYYY"),
                content: "En los años veinte, la comunidad india de los Osage en Oklahoma era la población de mayor renta per cápita del mundo. El petróleo que yacía bajo sus propiedades les convirtió en millonarios: construyeron mansiones, tenían chóferes privados y mandaban a sus hijos a estudiar a Europa, Pero un espiral de violencia asoló esta comunidad indígena cuando sus miembros empezaron a morir y a desaparecer en extrañas circunstancias."
            },
            {
                title: 'Pobres criaturas',
                date: 'publicado el dia ' + moment().format("DD") + " de " + moment().format("MMMM") + " del " + + moment().format("YYYY"),
                content: "¿Quién es la hermosa y apasionada Bella Baxter que ha  cautivado a Archibald McCandless? ¿Es cierta la historia de que es la  sobrina perdida de Godwin Baxter? ¿Qué relación tiene todo esto con el  cadáver sacado del río Clyde? Pobres criaturas es una historia de oscuro  amor y audaces experimentos científicos que conducirán al lector desde  la sala de un quirófano privado en Glasgow pasando por burdeles  parisinos, bajos fondos e iglesias hasta los reputados casinos europeos  donde, cínicos personajes apuestan hasta herirse los dedos."
            },
            {
                title: 'Baumgartner',
                date: 'publicado el dia ' + moment().format("DD") + " de " + moment().format("MMMM") + " del " + + moment().format("YYYY"),
                content: "Baumgartner es un eminente escritor y profesor universitario, tan excentrico como increíblemente tierno, que hace nueve años perdió a su mujer. Su vida estuvo definida por el amor profundo y duradero que sentía hacia Anna y ahora, con 71 años, continúa luchando por vivir en su ausencia. Su historia común arranca en 1968, cuando se conocen como estudiantes sin dinero en Nueva York y a pesar de ser casi opuestos en muchos aspectos, inician una apasionada relación que se prolongará a lo largo de cuarenta años. La superación del duelo por la perdida de Anna se intercala con historias maravillosas -desde su juventud en Newark hasta la vida de revolucionario fracasado de su padre en Europa del Este- y con una poderosa reflexión acerca del modo en que amamos en distintas etapas de la vida."
            },
        ]

        posts.forEach((item, index) => {

            let post = `
<article class="post">
<h2>${item.title}</h2>
<span class="date">${item.date}</span>
<p>${item.content}</p>
<a href="#" class="button-more">leer mas</a>
</article>
`;

            $("#posts").append(post);

        })
    }


    //selector de tema
    let theme = $("#theme");
    $("#to-blue").click(function () {
        theme.attr("href", "css/blue.css")

    })

    $("#to-red").click(function () {
        theme.attr("href", "css/red.css")
    })

    $("#to-black").click(function () {
        theme.attr("href", "css/black.css")
    })


    //scroll arriba de la web
    $(".subir").click(function (e) {
        e.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        }, 500);

        return false;
    })

    //login falso
    $("#login form").submit(function () {
        let form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    })

    let form_name = localStorage.getItem("form_name");

    if (form_name != null && form_name != "undefined") {
        let about_parrafo = $("#about p")

        about_parrafo.html("<br> <strong> Bienvenido: " + form_name + "</strong>");
        about_parrafo.append("<a href ='#' id='logout'>cerrar sesion</a>");
        $("#login").hide();

        $("#logout").click(function () {
            localStorage.clear();
            location.reload();
        })
    }

    // acordeon
    if (window.location.href.indexOf('about') > -1) {
        $("#acordeon").accordion();
    }


    //reloj
    var monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var dayNames = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    var newDate = new Date();
    newDate.setDate(newDate.getDate());

    setInterval(function () {
        var hours = new Date().getHours();
        $(".hour").html((hours < 10 ? "0" : "") + hours);
        var seconds = new Date().getSeconds();
        $(".second").html((seconds < 10 ? "0" : "") + seconds);
        var minutes = new Date().getMinutes();
        $(".minute").html((minutes < 10 ? "0" : "") + minutes);

        $(".month span,.month2 span").text(monthNames[newDate.getMonth()]);
        $(".date span,.date2 span").text(newDate.getDate());
        $(".day span,.day2 span").text(dayNames[newDate.getDay()]);
        $(".year span").html(newDate.getFullYear());
    }, 1000);



    $(".outer").on({
        mousedown: function () {
            $(".dribbble").css("opacity", "1");
        },
        mouseup: function () {
            $(".dribbble").css("opacity", "0");
        }
    });

    //validacion

    if (window.location.href.indexOf('contact') > -1) {

        $("form input[name ='date']").datepicker(
            {
                dateFormat: 'dd-mm-yy'
            })

        $.validate({
            lang: 'es',
        });
    }
})