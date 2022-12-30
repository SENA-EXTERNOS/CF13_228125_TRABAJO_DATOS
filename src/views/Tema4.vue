<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 4
      h1  Lenguajes de definición de datos DDL
      

    .bloque-texto-a.color-secundario.mb-5.fnd-1-.bl-izq
      .row.m-0.align-items-center.justify-content-center
        .col-lg-8.p-4.p-md-4
          .bloque-texto-a__texto.p-4.mb-3
            p El lenguaje DDL, cuyas siglas significan lenguaje de definición de datos, tiene la misión de entregar todas las instrucciones y comandos que permiten la creación de la estructura de la base de datos, las restricciones y relaciones que se pueden dar dentro de la misma. Es importante tener en cuenta que este lenguaje es universal para la mayoría de las bases de datos que se encuentran en la actualidad, esto quiere decir que es un estándar que se utiliza para este propósito. A continuación veremos sus instrucciones y para qué se utiliza cada una de ellas.
        .col-lg-4.mb-4.mb-lg-0.py-4
          figure
            img.img-c(src='@/assets/curso/temas/tema4/img-1.svg')


    .row.justify-content-center.align-items-center.mb-5.fnd-f3.p-5
      .col-lg-6
        h3 <em>Create</em>
        p La instrucción <b><em>Create</em></b> tiene como propósito realizar la creación de la estructura principal de la base de datos y es la que permite realizar el inicio de las sentencias<b><em> DDL.</em></b> Sin la creación de la base de datos sería imposible el agregado de los demás componentes que esta tiene; ahora bien, la inicialización de la base de datos es importante en estos sentidos debido a que para todos los motores de bases de datos está vigente y tiene el mismo propósito de la creación de la base de datos. A continuación, veremos un ejemplo de ello.
      .col-lg-6 
        .pp-l.mb-5
          .titulo-sexto.color-primario
            h5 Figura 6.
            span  Comando <em>CREATE</em>
        figure.pp-
            img(src='@/assets/curso/temas/tema4/img-2.svg')

    .cajon.color-acento-contenido.p-4.mb-5
      p Se puede visualizar en la figura anterior la utilización del comando <em>CREATE</em>, el cual se encuentra acompañado de otras instrucciones que se utilizan para la creación de la base de datos, que en este caso se llama dbs_RegistroPasajeros, la cual luego se le adiciona una tabla llamada tbl_Pasajeros.

    .row.justify-content-center.align-items-center.mb-5.fnd-f4
      .col-lg-8
        h3 <em>Alter</em>
        .cajon-b.color-primario.p-3.mb-5.bl-2
              p.mb-0 La instrucción <b><em>ALTER</em></b> se utiliza cuando se desea cambiar el tipo de dato, nombre o relación de un componente de la base de datos; en este caso particular, se podría decir que este comando tiene varios propósitos que están acompañados de acuerdo a la necesidad de cambio que se requiera dentro de la base de datos y de la empresa que requiera dichos cambios; aunque en el proceso de la creación de la base de datos se realizan varias verificaciones y en la mayoría de los casos los cambios que se realizan no están relacionados con problemas de creación o asignación de tipos de datos y/o relaciones, sino que se tratan de actualizaciones en la base de datos donde un dato requiere ser recibido de alguna manera o formato específico, entonces se requiere realizar ciertas modificaciones. A continuación, veremos algunos ejemplos donde aplica la instrucción <b><em>ALTER</em></b>.

      .col-lg-4
        figure
            img(src='@/assets/curso/temas/tema4/img-3.svg')


      .col-lg-10
        .pp-l.mb-5
          .titulo-sexto.color-primario
            h5 Tabla 1.
            span Sentencia <em>ALTER</em>
        .row.justify-content-center.align-items-center
          .col-lg-10    
            figure.pp-
                img.img-163(src='@/assets/curso/temas/tema4/img-4.svg')

    p.mb-5 En la tabla anterior se visualizan los ejemplos que se pueden aplicar para la instrucción ALTER, la cual permite modificar componentes de la estructura de la base de datos donde se pueden quitar campos, agregar campos y modificar los valores de tipo de datos que esta contiene, aunque existe un propósito que está vinculado con las relaciones de las entidades de la base de datos y se refiere a realizar la conexión de las mismas. Observemos un ejemplo.

    .row.justify-content-center.align-items-center.mb-5.fnd-f3.p-5
      .pp-l.mb-5
        .titulo-sexto.color-primario
          h5 Figura 7.
          span  Instrucción <em>ALTER</em> en relación de tablas
      .col-lg-8 
        figure.pp-
            img(src='@/assets/curso/temas/tema4/img-5.svg')

    .row.justify-content-center.align-items-center.p-5
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p En la figura anterior se puede observar el uso del comando <b><em>ALTER</em></b> para realizar la relación de la tabla tbl_Sexo con la tabla tbl_Pasajeros. Se aplica el comando <b><em>ALTER</em></b> a la tabla tbl_Pasajeros debido a que esta es la que debe realizar el cambio de permitir la relación con la tabla tbl_Sexo y de esta manera realizamos una modificación en la tabla tbl_Pasajeros para recibir la relación; es otra de las funcionalidades que tiene la instrucción <b><em>ALTER</em></b>.


    .row.justify-content-center.align-items-center.mb-5.fnd-f4
      .col-lg-8
        h3 <em>Drop</em>
        p.mb-0 La instrucción <b><em>DROP </em></b>se utiliza cuando se desea quitar o remover un componente de la base de datos, esto no solo se aplica para tablas y campos, sino que también se puede aplicar para las mismas bases de datos cuando se requiere dicho proceso. A continuación, observemos algunos ejemplos de este proceso.

      .col-lg-4
        figure
            img(src='@/assets/curso/temas/tema4/img-6.svg')


      .col-lg-10
        .pp-l.mb-5
          .titulo-sexto.color-primario
            h5 Tabla 2.
            span Utilización de la instrucción <em>DROP</em>
        .row.justify-content-center.align-items-center
          .col-lg-10    
            figure.pp-
                img.img-163(src='@/assets/curso/temas/tema4/img-7.svg')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-11



        .cajon.color-primario.p-4.mb-5.fnd-4
          p En la tabla anterior se encuentran las situaciones en las que se aplica la instrucción <b><em>DROP</em></b>; esta es utilizada en caso de que se requiera remover un componente de la base de datos, es importante tener en cuenta que este procedimiento se debe realizar con suma precaución debido a las implicaciones que puede generar tanto en la estructura de la base de datos como en su correcto funcionamiento.

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        h3 <em>Truncate para tablas</em>
        .cajon-b.color-primario.p-3.mb-5.bl-2
              p.mb-0 La instrucción <b><em>TRUNCATE</em></b> tiene una de las complicaciones más severas que se pueden aplicar en una base de datos, por eso requiere de un adecuado uso, ya que esta instrucción realiza una afectación directa a los datos almacenados, es decir, cuando se utiliza la instrucción <b><em>TRUNCATE</em></b> no solo se eliminan los datos que se encuentran almacenados en la tabla de la base de datos, sino que este comando reinicia la configuración de campos con numeración. Es decir, si se tiene una tabla con un campo o columna autonumérica y su conteo va por el 450 y se aplica el comando <b><em>TRUNCATE</em></b>, este automáticamente borra todos los datos y reinicia en 1 el valor del campo autonumérico; por eso es importante tener en cuenta al momento de realizar su aplicación, porque puede tener algunas implicaciones adicionales al momento de usarse. A continuación, veremos un ejemplo.

      .col-lg-3.mb-5
        figure
            img(src='@/assets/curso/temas/tema4/img-8.svg')

    .fnd-f4-.py-5.mb-5 
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          .row.justify-content-center.align-items-center
            .col-lg-6
                .titulo-sexto.color-primario
                  h5 Figura 8.
                  span  Uso de comando <em>TRUNCATE</em>
                figure.pp-.mb-3
                    img(src='@/assets/curso/temas/tema4/img-9.svg')

            .col-lg-6.px-md-5
              p En la figura se aprecia el uso de la instrucción <b><em>TRUNCATE</em></b> en la tabla llamada tbl_Asignaturas, lo que borraría todos los datos contenidos y adicionalmente el código de la asignatura, que es autonumérico, iniciaría en 1 nuevamente. Esto se llama reiniciar el contador.

    h3 Índices
    p.mb-3 Ahora, un índice es una estructura de datos definida sobre una columna de tabla (o varias) y permite localizar de forma rápida las filas de la tabla en base a su contenido en la columna indexada, además de permitir recuperar las filas de la tabla ordenadas por esa misma columna. 
    p.mb-5 Conozcamos cuáles son estos índices.

    .row.justify-content-center.mb-5
      .col-lg-4
        figure
            img(src='@/assets/curso/temas/tema4/img-10.svg')    
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta fnd-7")
          .row(titulo="Índice simple y compuesto")
              p.pp-l Un índice simple está definido sobre una sola columna de la tabla, mientras que un índice compuesto está formado por varias columnas de la misma tabla (tabla sobre la cual está definido el índice). Cuando se define un índice sobre una columna, los registros que se recuperen utilizando el índice aparecerán ordenados por el campo indexado. Si se define un índice compuesto por las columnas col1 y col2, las filas que se recuperen utilizando dicho índice aparecerán ordenadas por los valores de col1 y todas las filas que tengan el mismo valor de col1 se ordenarán a su vez por los valores contenidos en col2, función igual que la cláusula <em>ORDER BY.</em> Por ejemplo, si definimos un índice compuesto basado en las columnas (provincia, localidad), las filas que se recuperen utilizando este índice aparecerán ordenadas por provincia y dentro de la misma provincia por localidad.
          .row(titulo="Índice agrupado y no agrupado")
              p.pp-l El término índice agrupado no se debe confundir con índice compuesto, el significado es totalmente diferente. Un índice agrupado<em> (CLUSTERED)</em> es un índice en el que el orden lógico de los valores de clave determina el orden físico de las filas correspondientes de la tabla. El nivel inferior u hoja de un índice agrupado contiene las filas de datos en sí de la tabla. Una tabla o vista permite un solo índice agrupado al mismo tiempo. Los índices no agrupados existentes en las tablas se vuelven a generar al crear un índice agrupado, por lo que es conveniente crear el índice agrupado antes de crear los índices no agrupados. Un índice no agrupado especifica la ordenación lógica de la tabla. Con un índice no agrupado, el orden físico de las filas de datos es independiente del orden indexado.

          .row(titulo="Índice único")
              p.pp-l Índice único es aquel en el que no se permite que dos filas tengan el mismo valor en la columna de clave del índice. Es decir, que no permite valores duplicados. 
           


</template>

<script>
export default {
  name: 'Tema4',
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
