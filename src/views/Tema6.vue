<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 6
      h1 Lenguajes de manipulación de datos DML
      
    .row.justify-content-center.mb-5
      .col-lg-8.fnd-1.p-4
        p.text-white Hablemos ahora sobre el lenguaje DML orientado a bases de datos, el cual tiene los comandos e instrucciones para realizar la manipulación de la información que se encuentra dentro de la base de datos; es importante tener en cuenta que uno de los pilares de los sistemas de almacenamiento es que la información debe mantener su integridad y disponibilidad para los usuarios que la requieran, por eso es importante tener en cuenta que una mala manipulación de estos comandos puede traer repercusiones que pueden costarle la integridad a la información. Otro de los aspectos a tener en cuenta es que cuando se realicen procedimientos como son el <em>UPDATE o DELETE</em> se debe tener la precaución de verificar que se está afectando la fila e información porque una vez realizado el proceso no existe vuelta atrás. 
      .col-lg-4.fnd-3.p-4 
        figure
          img.img-c(src='@/assets/curso/temas/tema6/img-1.svg')

    
    p.mb-5 A continuación, explicaremos estos comandos y su utilización:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta fnd-9 fnd-f6")
      .row(titulo="<em>Insert</em>")
          p.pp-l El comando <b><em>INSERT</em></b> se utiliza cuando se requiere realizar el registro de una nueva fila en la base de datos: este comando es el que permite alimentar la base de datos y consta de algunas consideraciones en su sintaxis para tener en cuenta al momento de utilizarlo. Otro aspecto importante es que la sentencia <b><em>INSERT</em></b> puede llegar a entrar en conflicto con las llaves de conexión de la base de datos, un ejemplo de ello son las llaves primarias que se colocan en las tablas para evitar que un registro duplique su información. Al momento de realizar la inserción se debe verificar que este valor no sea duplicado, pues generará un error en la base de datos, ya que las llaves primarias no permiten duplicidad de datos. A continuación, veremos una corta explicación sobre esto.
          .row.justify-content-center.mb-4
            .col-lg-4
              .titulo-sexto.color-primario.mb-2
                h5 Figura 11
                br
                span.fst-italics <em> Ejemplo insert</em>
              figure
                img.img-c(src='@/assets/curso/temas/tema6/img-2.svg')
          p.pp-l En la imagen se puede observar la sintaxis que aplica la sentencia #[b #[em INSERT]]: primero se colocan las instrucciones #[em insert into] que le indican al motor de la base de datos que es una instrucción que colocará un nuevo registro dentro de la base de datos; luego se indica la tabla donde se insertarán los datos seguido de los campos o columnas que posee la tabla en el orden específico de inserción; luego la instrucción #[em values] indicando los valores que serán insertados en el orden específico que requiere la tabla.                
      .row(titulo="<em>Update</em>")
          p.pp-l La instrucción<b><em> UPDATE</em></b> permite realizar la actualización de la información que previamente ha sido registrada en la tabla de la base de datos. Esto es muy útil en el sentido de que permite que se puedan realizar cambios en la información almacenada luego de realizar el registro de la misma, es importante tener en cuenta que al momento de realizar la actualización se debe verificar que la fila que se está actualizando sea la que requiere el cambio; esto lo podemos especificar con la instrucción <em>where</em> donde se coloca la llave primaria para realizar esta operación. A continuación, se ilustra la manera como se utiliza este comando.
          .row.justify-content-center.mb-4
            .col-lg-5
              .titulo-sexto.color-primario.mb-2
                h5 Figura 12
                br
                span.fst-italics <em> Ejemplo update</em>
              figure
                img.img-c(src='@/assets/curso/temas/tema6/img-3.svg')
          p.pp-l Como se observa en la imagen, la sintaxis que sigue este comando es la siguiente: primero se indica el comando <b><em>UPDATE</em></b> para que el motor de la base de datos comprenda que la operación a realizar es de actualización de datos; luego se indica la tabla que contiene la información a actualizar seguido de la instrucción <b><em>SET</em></b>, la cual permite colocar el campo o en algunos casos los campos que recibirán el nuevo dato; luego se procede a colocar la condición con la cláusula <b><em>WHERE</em></b>, donde regularmente se utiliza la llave primaria, ya que esta no contiene dato repetido y se utiliza como referente para la actualización.
    
      .row(titulo="<em>Delete</em>")
          p.pp-l El comando <b><em>DELETE</em></b> se utiliza en los casos en que se desea realizar la eliminación de una fila dentro de una tabla de la base de datos. Es importante tener en cuenta que este comando le aplica las mismas características del comando <b><em>UPDATE</em></b>, donde se debe especificar la fila que se debe eliminar utilizando la sentencia <b><em>WHERE</em></b> con la llave primaria de esa fila. Esto se hace con el fin de prevenir que se eliminen todos los registros de la base de datos; en el caso de no especificar dicha fila el motor de la base de datos interpretará que se hará una eliminación de todas las filas que este posee. A continuación, veremos un ejemplo sobre esta apreciación.
          .row.justify-content-center.mb-4
            .col-lg-6
              .titulo-sexto.color-primario.mb-2
                h5 Figura 13
                br
                span.fst-italics <em> Ejemplo delete</em>
              figure
                img.img-c(src='@/assets/curso/temas/imgs/CF13-8.png')
          p.pp-l Como se puede apreciar en la imagen, se realiza la ejecución del comando <b><em>DELETE</em></b>, el cual tiene la siguiente sintaxis: primero se procede a colocar el comando <b><em>DELETE</em></b> para indicarle al motor de la base de datos que se ejecutará una sentencia de eliminación de fila; luego se procede a colocar la instrucción <b><em>FROM</em></b>, la cual indica el origen de los datos que se van a eliminar seguido del nombre de la tabla de donde provienen esos datos; adicional a ello se debe utilizar la sentencia <b><em>WHERE</em></b> como habíamos comentado anteriormente, que se utiliza también en la sentencia <b><em>UPDATE</em></b> para especificar mediante la llave primaria la fila a la que corresponde el dato que se desea eliminar; esto con el fin de que no se eliminen todos los registros de la tabla, sino el que pertenece a la fila que se desea afectar. 
      .row(titulo="<em>Merge</em>")
          p.pp-l La sentencia <b><em>MERGE</em></b> actualiza un destino (una tabla o vista, o las tablas o vistas subyacentes de una selección completa) utilizando datos de una fuente (resultado de una referencia de tabla).
          p.pp-l Las filas del destino que coinciden con la fuente se pueden suprimir o actualizar, según se especifique, y las filas que no existen en el destino se pueden insertar. Si se actualiza, suprime o inserta una fila en una vista, se actualiza, suprime o inserta la fila en las tablas en las que se basa la vista.

      .row(titulo="<em>Select</em>")
          p.pp-l La sentencia <b><em>SELECT</em></b> es una de las sentencias que le dan un grado de importancia a los sistemas de bases de datos, ya que esta se crea como un estándar de consultas para la recuperación y generación de vistas de la información almacenada en las tablas de la base de datos; dicho de otra manera, esta sentencia es la que hace posible poder visualizar y consultar la información que se encuentra almacenada en una base de datos. Es importante tener en cuenta que este comando tiene diferentes maneras de expresar la forma en la que los datos son devueltos al usuario y que también están conectados con las necesidades y requerimientos de la aplicación de software que se esté desarrollando. Este tiene 3 tipos de consultas a realizar, las cuales son: consultas generales, consultas específicas y consultas personalizadas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        h3 Funciones DML 
        p Las funciones <b>DML</b> se establecen para realizar operaciones requeridas dentro de las bases de datos. Estas operaciones van desde simples procesos de cálculos de operaciones hasta realizar complejos procesos para el mantenimiento de los datos en la base de datos. Aunque todos estos procesos se llevan a cabo de acuerdo a necesidades técnicas que el usuario de la aplicación requiera, dichos procesos pueden estar relacionados con procesos que afectan distintas partes del sistema, por ello se hace necesario en algunas ocasiones establecer un orden específico de ejecución de los mismos para garantizar un correcto funcionamiento en el sistema mismo.
        p.mb-4 Para ampliar la información, le invitamos a leer el PDF.
                
        .row.justify-content-center
          .col-lg-6
            a.anexo.mb-4(:href="obtenerLink('downloads/Funciones_DML.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <b>Anexo.</b> Funciones DML.     
      
      .col-lg-4
        figure
            img.img-c(src='@/assets/curso/temas/tema6/img-5.svg')


    .row.justify-content-center.mb-5
      h3 Operadores DML     
      .col-lg-4

        figure
            img.img-c(src='@/assets/curso/temas/tema6/img-6.svg')

      .col-lg-8
        p Los operadores DML permiten acompañar las labores de manipulación de los datos en una base de datos, dentro de estos se encuentran varias instrucciones que hacen uso de dichos operadores para cambiar, comparar o realizar operaciones de tipo matemático para entregar al usuario los resultados que este requiere en los procesos a desarrollar. Aunque los operadores pueden combinarse para realizar operaciones que llegan a ser de un nivel complejo, se debe entender que en una operación lo importante es la aplicación lógica de las operaciones y su integración con los valores de entrada y salida para mostrar al usuario resultados correctos. A continuación, veremos los diferentes operadores utilizados en DML.
        p.mb-4 Para ampliar la información, lo invitamos a leer el PDF.
                
        .row.justify-content-center
          .col-lg-6
            a.anexo.mb-4(:href="obtenerLink('downloads/Operadores_DML.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <b>Anexo.</b> Operadores DML.   

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        h3 Consultas combinadas DML
        p Como hemos estudiado anteriormente, el lenguaje DML permite realizar la manipulación de los datos que se encuentran en las tablas de acuerdo con instrucciones específicas y con un propósito definido, pero en este caso abordaremos algunas de ellas que son mucho más precisas y permiten llegar al nivel de profundidad y comprensión mucho más compleja. Para comprender mejor este contexto, le invitamos a estudiar algunas de ellas en el PDF.     
                
        .row.justify-content-center
          .col-lg-6
            a.anexo.mb-4(:href="obtenerLink('downloads/Consultas_combinadas_DML.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <b>Anexo.</b> Consultas combinadas DML.
      
      .col-lg-4
        figure
            img.img-c(src='@/assets/curso/temas/tema6/img-7.svg')

    .row.justify-content-center.mb-5
      h3 Sentencias de agregación     
      .col-lg-4

        figure
            img.img-c(src='@/assets/curso/temas/tema6/img-8.svg')

      .col-lg-8
        p Las sentencias de agregación permiten realizar cálculos específicos dentro de la base de datos, en otras palabras, son funciones que ya se encuentran programadas en la base de datos y que solo hace falta llamarlas para aplicarlas en ella. Es importante que tengamos en cuenta que estas funciones no afectan los datos almacenados en las tablas de la base de datos, sino que utilizan los datos en modo de lectura para poder mostrar al usuario el resultado esperado.
        p.mb-4 Le invitamos a conocer estas funciones en el documento Sentencias de agregación.
                
        .row.justify-content-center
          .col-lg-6
            a.anexo.mb-4(:href="obtenerLink('downloads/Sentencias_de_agregacion.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <b>Anexo.</b> Sentencias de agregación.   





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
