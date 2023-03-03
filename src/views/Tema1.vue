<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1  Gestores de base de datos y formatos de archivos
      

    .bloque-texto-a.color-secundario.mb-5.fnd-1.bl-izq
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8.p-4.p-md-5
          .bloque-texto-a__texto.p-4
            p Para iniciar, aprenderemos que los gestores de bases de datos son aplicativos que permiten realizar las tareas de administración y mantenimiento de datos, de manera sencilla y eficiente. Se caracterizan por tener interfaces amigables y funciones establecidas para que el proceso de manutención de las mismas, sea sencillo. Actualmente, en el mercado, existen muchos tipos de gestores de bases de datos lo que implica que, en la mayoría de las ocasiones, se tenga que debatir cuál es el mejor para implementar en el ámbito empresarial; lo que muchas veces no se toma en cuenta, es el tipo de motor de bases de datos,que se desea operar y la infraestructura que se utilizará.
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema1/img-1.svg')

    p.mb-5 Por este motivo, debemos ubicarlos en diferentes categorías, las cuales abordaremos a continuación:

    .row.justify-content-center.mb-5
      .col-lg-4
        figure
            img(src='@/assets/curso/temas/tema1/img-2.svg')

      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta fnd-2")
          .row(titulo="Relacionales")
              p Este tipo de gestores, trabajan con las bases de datos más utilizadas actualmente y que también son denominadas como bases de datos tradicionales. Se basan en una estructura de conexiones lógicas llamadas relaciones, las cuales tienen como objetivo, conectar las diferentes entidades o tablas de la base de datos, lo que permite tener un control sobre la forma como se distribuyen los datos, mediante un concepto llamado integridad referencial, que establece unas reglas de conexión y restricción de los datos conectados. Estas relaciones son: relación uno-muchos, relación uno-uno.
              p El gestor de bases de datos relacional, debe permitir la creación del modelo relación o también llamado MER, para visualizar las diferentes relaciones que puede contener y la restricción que tiene cada una de ellas.

          .row(titulo="NO Relacionales")
              p Los gestores de bases de datos no relacionales, trabajan bajo el mismo esquema y filosofía de las bases de datos no relacionales; tienen una peculiar manera de conectar los datos y la información que se encuentra almacenada y mediante líneas de comando, es decir, no tienen una restricción mediante configuración, sino que la realiza el programador a través de códigos, o sea, las consultas SQL y lenguaje DML son los encargados de establecer dicha lógica de conexión entre las diferentes entidades. A lo largo de los tiempos se ha establecido que estas bases de datos tienen algunas ventajas, tales como la independencia de los datos, ayudan mucho al tema de realización de reportes, le dan mayor versatilidad y creatividad al programador o administrador de las mismas. Por otro lado, es un poco complicado su mantenimiento, al no estar relacionados los datos por configuración o integridad referencial, al realizar actualizaciones o cambios masivos; toca realizarlo manualmente, lo que puede hacer que su mantenimiento sea más costoso y tome más tiempo.
          .row(titulo="Orientado a objetos")
              p Es un sistema de gestión de base de datos mediante el cual representamos la información en forma de objetos que son utilizados en programación orientada a objetos.<br> La investigación y el desarrollo de la base de datos orientada a objetos fue impulsada en gran medida por su alto rendimiento en almacenamiento de datos y los requerimientos de acceso que tenían entornos de soporte de diseño tales como el CAD (diseño asistido por computadora). La base de datos orientada a objetos ha encontrado su nicho de aplicación en áreas tales como la ingeniería, las bases de datos espaciales, las telecomunicaciones y en áreas científicas como la física de alta energía y la biología molecular.
              p Otro conjunto de bases de datos orientadas a objetos se centra en el uso integrado en dispositivos, paquetes de software y sistemas en tiempo real; es decir, permiten la creación de datos y su expansión depende de lo que requiera el sistema. Una manera de ver este tipo de sistemas de almacenamiento es el caso de los sistemas de inteligencia artificial, los cuales pueden generar nuevas instancias y conexiones de acuerdo a la información que van adquiriendo, haciendo de ellos un sistema de almacenamiento sin límites.

    h3.mb-5 Gestión de la base de datos  
    p Existen muchos gestores de bases de datos NoSQL.
    p A continuación, veremos los gestores que existen y su funcionalidad:         

    ImagenInfografica.color-acento-contenido.my-5.bg2.p-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/img-3.svg')

      .tarjeta.color-acento-contenido.p-3(x="13.1%" y="83.5%" numero="+")
        p Base de datos creada por Apache del tipo clave-valor. Dispone de un lenguaje propio para realizar consultas CQL (Cassandra Query Language). Cassandra es una aplicación Java, por lo que puede correr en cualquier plataforma que cuente con la JVM. Es multiplataforma.
      .tarjeta.color-acento-contenido.p-3(x="37.7%" y="83.5%" numero="+")
        p Base de datos creada por Salvatore Sanfilippo y Pieter Noordhuis y está apoyada por VMWare. Se trata de una base de datos del tipo clave-valor. Se puede imaginar como un array gigante en memoria para almacenar datos que pueden ser cadenas, hashes, conjuntos de datos o listas. Tiene la ventaja de que sus operaciones son atómicas y persistentes. Sin embargo, Redis no permite realizar consultas, solo se pueden insertar y obtener datos, además de las operaciones comunes sobre conjuntos (diferencia, unión e inserción). Creado en ANSI C, por lo tanto, es compatible y funciona sin problemas en sistemas Unix, Linux y sus derivados, Solaris, OS/X; sin embargo, no existe soporte oficial para plataformas Windows
      .tarjeta.color-acento-contenido.p-3(x="62.5%" y="83.5%" numero="+")
        p Base de datos creada por MongoDB Inc. (anteriormente 10gen), del tipo orientada a documentos, de esquema libre, es decir, que cada entrada puede tener un esquema de datos diferente que nada tenga que ver con el resto de registros almacenados. Es bastante rápida a la hora de ejecutar sus operaciones, ya que maneja datos binarios. En poco tiempo, MongoDB se ha convertido en una de las bases de datos NoSQL favoritas por los desarrolladores. Está escrita en lenguaje C++. Para el almacenamiento de la información, utiliza un sistema propio de documento conocido con el nombre BSON, que es una evolución del formato JSON pero con la peculiaridad de que puede almacenar datos representados de forma binaria. Está disponible para los sistemas operativos Windows, Linux, OS/X y Solaris.
      .tarjeta.color-acento-contenido.p-3(x="86.8%" y="83.5%" numero="+")
        p Sistema creado por Apache y escrito en el lenguaje Erlang que funciona en la mayoría de sistemas POSIX (multiplataforma), incluyendo GNU/Linux y [[macOS|OS/X], además de sistemas Windows. Como características más importantes cabe destacar el uso de RESTful HTTP API como interfaz y JavaScript como principal lenguaje de interacción. Para el almacenamiento de los datos se utilizan archivos JSON. Permite la creación de vistas, que son el mecanismo que permite la combinación de documentos para retornar valores de varios documentos, es decir, CouchDB permite la realización de las operaciones JOIN típicas de SQL.

    .cajon.color-secundario.p-4.mb-5.fnd-6
      p Recordemos que un SGBD o Sistema de Gestión de Bases de Datos, permite que se puedan realizar las tareas de administración de las bases de datos, de una manera mucho más cómoda y eficiente. Estos poseen interfaces de administración que ayudan en los procesos de manejo de los sistemas de almacenamiento de bases de datos, al igual que el mantenimiento de los datos y las copias de seguridad. Es importante tener en cuenta que, dependiendo de las necesidades o requerimientos del sistema, así será la selección y uso del sistema de gestión de bases de datos.

    h3.mb-5 Formatos de archivos

    .bloque-texto-a.color-secundario.mb-5.fnd-3
      .row.m-0.align-items-center.justify-content-center
        .col-lg-3.mb-4.mb-lg-0.px-4
          figure
            img.img-300(src='@/assets/curso/temas/tema1/img-4.svg')      
        .col-lg-9.px-4.p-md-4
          .bloque-texto-a__texto.p-4.mb-4
            p Por otra parte, cuando nos referimos a formatos de archivos estamos hablando de una estructura específica que manejan para realizar las operaciones de almacenamiento y forma de acceso a la información contenida, es decir, cada formato de archivo tiene una estructura propia para realizar el almacenamiento de la información dentro de los mismos. Actualmente existen muchos formatos y tipos de archivos, los cuales, de acuerdo con la necesidad de acceso de la información o requerimientos de la aplicación, permiten guardar información que puede ser posteriormente consultada por el usuario que manipula la aplicación y que requiere utilizar dicha información. 
          p.pp-ll Es importante tener en cuenta que cuando hablamos de almacenamiento en archivos nos referimos al almacenamiento en disco, lo que quiere decir que es información permanente en disco duro.

    .fnd-f7.mb-5
      
      .row.justify-content-center.align-items-center.mb-5
        p Conozcamos algunos de estos formatos:
        .col-lg-8.px-5
          ImagenInfografica.color-acento-contenido
            template(v-slot:imagen)
              figure
                img.img-265(src='@/assets/curso/temas/tema1/img-5-.svg')

            .tarjeta.color-acento-contenido.p-3(x="18.5%" y="7%" numero="+")
              p JavaScript Object Notation (JSON) es un formato basado en texto estándar para representar datos estructurados en la sintaxis de objetos de JavaScript; es comúnmente utilizado para transmitir datos en aplicaciones web. Estos archivos también son utilizados para el intercambio de información en aplicaciones web, porque brindan una estructura robusta al momento de organizar la información para, después, poder ser accedida por el usuario a través de la aplicación; otra característica particular es la cantidad de datos que pueden almacenar sin necesidad de sacrificar grandes volúmenes de espacio en disco duro, es decir, son muy livianos tanto en su ejecución, como en su peso y tamaño. 
            .tarjeta.color-acento-contenido.p-3(x="50%" y="92%" numero="+")
              p Los archivos con extensión TXT son archivos que se consideran planos, ya que no contienen ningún tipo de formato específico para el almacenamiento de la información; a pesar de esto son utilizados para el almacenamiento de información, ya que ocupan muy poco espacio de almacenamiento en disco. Otra de sus ventajas es la compatibilidad que tienen con prácticamente cualquier sistema operativo, es decir, con los editores de texto que tienen los principales sistemas operativos y tipos de letras de estos mismos; por lo tanto pueden ser editados en prácticamente cualquier sistema. Otra de las particularidades que tienen estos tipos de archivos es que se adaptan a cualquier tipo de estructura, es decir, no llevan un orden específico de tabulación en el documento, pero sí debemos destacar la ventaja de que son muy livianos y tienen compatibilidad con todos los sistemas operativos y aplicaciones del mundo.
            .tarjeta.color-acento-contenido.p-3(x="81.8%" y="6.9%" numero="+")
              p Es un lenguaje de marcado similar a HTML. Significa Extensible Markup Language (Lenguaje de Marcado Extensible) y es una especificación de W3C como lenguaje de marcado de propósito general. Esto significa que, a diferencia de otros lenguajes de marcado, XML no está predefinido, por lo que debes definir tus propias etiquetas. El propósito principal del lenguaje es compartir datos a través de diferentes sistemas, como Internet; como bien sabemos, es muy utilizado en la estructura de archivos para páginas web y maquetación de las mismas, que acompañado con el lenguaje de etiquetado HTML, permiten generar la estructura de las páginas.

    p.mb-5 Ampliemos la información sobre las bases de datos y, para hacerlo, lo invitamos a ver el siguiente video:

    figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
