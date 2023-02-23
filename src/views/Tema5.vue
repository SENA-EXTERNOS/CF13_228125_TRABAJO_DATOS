<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 5
      h1  Restricciones de integridad
      

    .bloque-texto-a.color-secundario.mb-5.fnd-1-.bl-izq
      .row.m-0.align-items-center.justify-content-center
        .col-lg-8.p-4.p-md-4
          .row.align-items-center
            .col-lg-12
              .bloque-texto-a__texto.p-4.mb-3
                p Las restricciones de integridad que existen en una base de datos se refieren a la protección y mantenimiento de los datos, es decir, cuando hablamos de integridad nos referimos a la capacidad del sistema de mantener los datos de manera coherente y permanente sin que sufran cambios inesperados y que estos cambios que se den estén sujetos a políticas o necesidades del sistema mismo. Un ejemplo de ello sería un cajero automático que debe realizar operaciones todos los días y que estas operaciones deben realizarse de manera precisa y eficiente. 
            .col-lg-9.px-4.fnd-n
              p.mb-0.text-white Adicional a ello, cuando nos referimos a eficiente es un tema relacionado con la integridad, es decir, los descuentos o movimientos que realice deben estar sujetos a programación establecida y no deben cambiar a menos que una política interna de la organización o el programador realice dicho cambio.
        .col-lg-4.mb-4.mb-lg-0.py-4
          figure
            img.img-c(src='@/assets/curso/temas/tema5/img-1.svg')

    .fnd-f4
      h3 Integridad de unicidad
      p.mb-5 La regla de integridad de unicidad está relacionada con la definición de clave primaria. Concretamente, establece que toda clave primaria que se elija para una relación, no debe tener valores repetidos, como se observa a continuación:
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          .titulo-sexto.color-primario
            h5 Tabla 3
            br
            span.fst-italic Tabla despachos

        .col-lg-6            
          table.tbl
            tr
              td <b>Edificio</b>
              td <b>Número</b>
              td <b>Superficie</b>                          
            tr
              td Marina
              td 120
              td 10
            tr
              td Marina
              td 122
              td 15
            tr
              td Marina
              td 230
              td 20
            tr
              td Diagonal
              td 120
              td 10
                                  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
            img(src='@/assets/curso/temas/tema5/img-2.svg')      
      .col-lg-9
        h3 <em>Truncate para tablas</em>
        .cajon-b.color-primario.p-3.mb-5.bl-2
          p.mb-0 En esta relación, dado que la clave primaria está formada por edificio y número, no hay ningún despacho que repita tanto edificio como número de otro despacho. Sin embargo, sí se repiten valores de edificio (por ejemplo, Marina); y también se repiten valores de número (120). A pesar de ello, el edificio y el número no se repiten nunca al mismo tiempo.
          p La regla de integridad de unicidad de la clave primaria establece que si el conjunto de atributos CP es la clave primaria de una relación R, entonces la extensión de R no puede tener en ningún momento dos tuplas con la misma combinación de valores para los atributos de CP.

        .cajon.color-primario.p-4.mb-5.fnd-4
          p.mb-0 Un SGBD relacional deberá garantizar el cumplimiento de esta regla de integridad en todas las inserciones, así como en todas las modificaciones que afecten a atributos que pertenecen a la clave primaria de la relación.
          p En esta relación no se debería poder insertar la tupla &#60;Diagonal, 120, 30&#62;, ni modificar la tupla &#60;Marina, 122, 15 &#62;, de modo que pasará a ser &#60;Marina, 120, 15&#62;.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        h3 Integridad referencial 
        p La función de integridad referencial comprueba que cada valor de datos de clave foránea, sea de columna única o de varias columnas (concatenado), pueda acceder a la clave primaria de una tabla relacionada, esto se refiere a la capacidad de la base de datos de poder crear conexiones para la realización de las consultas que la misma ejecuta. Cuando se realiza una consulta SQL regularmente, la información tiene diferentes tablas de donde se saca la información y para que esta información pueda ser accedida se requiere que las llaves tanto primarias como foráneas sean iguales para que se pueda traer el dato requerido. A continuación, veamos un ejemplo. 
      .col-lg-3
        figure
            img(src='@/assets/curso/temas/tema5/img-3.svg')        

    .row.justify-content-center.align-items-center.mb-5.fnd-f3.py-5
      .col-lg-6
          .pp-l
            .titulo-sexto.color-primario
              h5 Figura 9
              br
              span.fst-italics <em> Diagrama entidad-relación</em>
          figure.pp-.mb-4
              img(src='@/assets/curso/temas/tema5/img-4.svg')

      .col-lg-6.px-md-5
        p Como se puede observar en la figura anterior, el diagrama entidad - relación indica que existe una restricción de integridad referencia, en este caso la llave PKCodigo de la tabla tbl_Asignatura está relacionada con la llave foránea de la tabla tbl_Calificaciones; por lo tanto en la consulta se debe crear esta comparación para que pueda asociar las asignaturas con las calificaciones que esta recibe. Adicional a ello vemos que la tabla tbl_Estudiantes está relacionada con la tabla tbl_Calificaciones por medio de la llave foránea, esto quiere decir que un estudiante puede recibir varias calificaciones de diferentes asignaturas; esto es lo que se conoce como integridad referencial. A continuación, veremos la consulta SQL utilizando la integridad referencial para recuperar los datos y relacionarlos entre sí.

    .row.justify-content-center.align-items-center.mb-5.fnd-f3.py-5
      .col-lg-6
          .pp-l
            .titulo-sexto.color-primario
              h5 Figura 10
              br
              span.fst-italics <em>Integridad referencial bajo código</em>
          figure.pp-.mb-4
              img(src='@/assets/curso/temas/tema5/img-5.svg')

      .col-lg-6.px-md-5
        p Como se puede observar, en la figura anterior se encuentra aplicada la integridad referencial comparando las llaves primarias con las foráneas para encontrar coincidencia en los datos; en caso de que está consecuencia sea positiva, la consulta traerá el resultado esperado realizando las diferentes combinaciones que se requieran para realizar dicho proceso.

    h3 Integridad de dominio
    p.mb-3 Se refiere a la corrección de la información contenida en la BD. A cada atributo está asociado un dominio de valores posibles. Los límites de dominio son la forma más elemental de restricciones de integridad. Son fáciles de probar por el sistema siempre que se introducen nuevos datos a la BD.
    p.mb-5 Algunas características aplicadas son:
            

    .row.justify-content-center.mb-5.d-flex.align-self-stretch
      .col-lg-4.mb-4
        .tarjeta.fnd-8.p-4
          figure.mb-3
              img.img-150(src='@/assets/curso/temas/tema5/img-6.svg')
          p.px-5 A cada atributo está asociado un dominio de valores posibles.
      .col-lg-4.mb-4
        .tarjeta.fnd-8.p-4
          figure.mb-3
              img.img-150(src='@/assets/curso/temas/tema5/img-6.svg')
          p.px-4 Los límites de dominio son la forma más elemental de restricciones de integridad.
      .col-lg-4.mb-4
        .tarjeta.fnd-8.p-4
          figure.mb-3
              img.img-150(src='@/assets/curso/temas/tema5/img-6.svg')
          p.px-3 Son fáciles de probar por el sistema siempre que se introducen nuevos datos a la base de datos.             

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        .cajon-b.color-primario.px-3.pt-4.bl-2-
          p Un ejemplo de ello sería examinando una base de datos que almacena información de proveedores y partes, entonces tendríamos lo siguiente:
          ul.lista-ul--color.pp-
            li 
              i.fas.fa-angle-right
              p El peso de una parte no puede ser negativo.
        .cajon-b.color-primario.p-3.mb-5.bl-3
          p En la base de datos proveedores tendríamos lo siguiente:
          ul.lista-ul--color.pp-
            li 
              i.fas.fa-angle-right
              p.mb-0 Los números de una sucursal no pueden ser negativos.
            li 
              i.fas.fa-angle-right
              p.mb-0 Las ciudades de sucursales, deben provenir de una cierta lista.      
      .col-lg-3
        figure.mb-3
          img(src='@/assets/curso/temas/tema5/img-7.svg')

    p.mb-5 La integridad de dominio es la validez de las restricciones que debe cumplir una determinada columna de la tabla, lo cual incluye: 



    .row.justify-content-center.mb-5.fnd-f5
      .col-lg-4.mb-4
        figure
            img(src='@/assets/curso/temas/tema5/img-8.svg')

      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta fnd-2")
          .row(titulo="Datos requeridos")
              p.pp-l Establece que una columna tenga un valor <em>NOT NULL</em>. Se define efectuando la declaración de una columna es <em>NOT NULL </em>cuando la tabla que contiene las columnas se crea por primera vez, como parte de la sentencia <em>CREATE TABLE</em>.
          .row(titulo="Chequeo de validez")
              p.pp-l Cuando se crea una tabla cada columna tiene un tipo de datos y el DBMS asegura que solamente los datos del tipo especificado sean ingresados en la tabla.


    .cajon.color-primario.p-4.mb-5.fnd-4
      p Se pueden observar los diferentes tipos de integridades y la afectación que pueden tener dentro de la base de datos; es importante tener en cuenta que esta afectación va desde los registros de una columna o de una fila hasta las relaciones que se establecen en las entidades o tablas de la base de datos, por eso es importante al momento de realizar el diagrama entidad-relación tener en cuenta que cada llave a relacionar debe tener el mismo tipo de datos y longitud para evitar pérdida de datos o problemas de relacionamiento de entidades.

















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
