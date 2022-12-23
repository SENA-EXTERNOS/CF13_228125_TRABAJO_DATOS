<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 7
      h1  Construcción de base de datos NoSQL
      

    .bloque-texto-a.color-secundario.mb-5.fnd-1.bl-izq
      .row.m-0.align-items-center.justify-content-center
        .col-lg-8.p-4.p-md-5
          .bloque-texto-a__texto.p-4
            p Las bases de datos NoSQL nacen como una alternativa a las bases de datos tradicionales, estas tienen las características de ser muy rápidas y de adaptarse prácticamente a cualquier lenguaje de programación, aunque son muchas las ventajas que estas ofrecen, su mayor característica es el poco espacio que ocupan dentro de los sistemas de almacenamiento. Ahora bien, cada base de datos NoSQL permite realizar operaciones tal y como las realizaría una base de datos convencional, solo que el trabajo que esta realiza se hace de manera plana utilizando archivos con extensiones JSON o XML, lo cual permite su fácil adaptación y velocidad. A continuación, veremos varias características de las mismas.
        .col-lg-4.mb-4.mb-lg-0.py-4
          figure
            img.img-c(src='@/assets/curso/temas/tema7/img-1.svg')

    h3 Operaciones básicas
    p.mb-5 Las operaciones que se pueden realizar con una base de datos NoSQL son: insertar nuevos datos, buscar un dato previamente registrado, operaciones matemáticas según requiera el cliente y generación de búsquedas con patrones específicos. Esto se refiere a que puede realizar consultas complejas teniendo como resultado un poco tiempo de espera, por eso es que son muy utilizadas en aplicaciones que tienen grandes volúmenes de información y al ser de poco peso no se requiere de una infraestructura poderosa para realizar su ejecución.
    p.mb-5 Tienen varios tipos que reflejan su naturaleza, lo cual veremos a continuación.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta fnd-2")
          .row(titulo="Bases de datos clave – valor")
              p.pp-l Son el modelo de base de datos NoSQL más popular, además de ser la más sencilla en cuanto a funcionalidad. En este tipo de sistema, cada elemento está identificado por una llave única, lo que permite la recuperación de la información de forma muy rápida; información que habitualmente está almacenada como un objeto binario (BLOB). Se caracterizan por ser muy eficientes tanto para las lecturas como para las escrituras. Algunos ejemplos de este tipo son <em>Cassandra</em>, <em>BigTable</em> o <em>HBase</em>.
          .row(titulo="Bases de datos documentales")
              p.pp-l Este tipo almacena la información como un documento, generalmente utilizando para ello una estructura simple como JSON o XML y donde se utiliza una clave única para cada registro. Este tipo de implementación permite, además de realizar búsquedas por clave–valor, realizar consultas más avanzadas sobre el contenido del documento. Son las bases de datos NoSQL más versátiles. Se pueden utilizar en gran cantidad de proyectos, incluyendo muchos que tradicionalmente funcionarían sobre bases de datos relacionales. Algunos ejemplos de este tipo son MongoDB o CouchDB.             
      .col-lg-4
        figure
          img.img-c(src='@/assets/curso/temas/tema7/img-2.svg')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4.fnd-4
          p Podemos decir que las bases de datos NoSQL tienen muchas ventajas sobre las bases de datos tradicionales, aunque es importante aclarar que dependiendo del requerimiento que se desee elaborar así será la elección a tomar teniendo en cuenta muchas características de estabilidad, crecimiento y capacidad de almacenamiento. Dentro de estas bases de datos se pueden realizar las mismas operaciones de inserción, búsqueda, actualización y eliminación que se hacen en una base de datos convencional teniendo en cuenta que esta lo maneja a nivel de archivos y no de registros.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        h3 Operaciones CRUD
        p.mb-0 Las operaciones de CRUD se refiere a las 4 operaciones principales que se realizan en una base de datos las cuales son: crear nuevos registros, actualizar registros, eliminar registros y consultarlos. Basados en esas 4 operaciones realizaremos una exploración de cada una de ellas para entrar en este contexto.
        p Son muchas las operaciones que se pueden hacer en MongoDB. Algunas de las más esenciales son insertar un nuevo documento (<em>create</em>), obtener un documento (<em>read</em>), actualizar un documento existente (<em>update</em>) y eliminar un documento (<em>delete</em>).
   
      .col-lg-4
        figure
            img.img-c(src='@/assets/curso/temas/tema7/img-3.svg')


    .row.justify-content-center.align-items-center.mb-5
      h3 Consultas
      .col-lg-3
        figure.mb-3
          img(src='@/assets/curso/temas/tema7/img-4.svg')    
      .col-lg-9
        .cajon-b.color-primario.px-3.pt-4.bl-2-
          p Las consultas son muy importantes en los sistemas de almacenamiento, sobre todo para realizar procesos de manipulación y procesamiento de la misma. En el caso de las consultas, en las bases de datos NoSQL se realizan de una manera mucho más precisa que en las tradicionales, es decir, se debe indicar el documento a acceder y qué información de cada uno de ellos se va a sustraer. A continuación, veremos una serie de instrucciones para realizar este proceso.
        .cajon-b.color-primario.p-3.mb-5.bl-3
          p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.            








</template>

<script>
export default {
  name: 'Tema3',
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
