<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1  Lenguajes de sistemas administradores de base de datos (DBMS) y lenguaje estructurado de consulta (SQL)
      

    .bloque-texto-a.color-secundario.mb-5.fnd-1.bl-izq
      .row.m-0.align-items-center.justify-content-center
        .col-lg-8.p-4.p-md-5
          .bloque-texto-a__texto.p-4
            p Continuemos hablando sobre los lenguajes de sistemas de administradores de bases de datos, los cuales son una serie de comandos que permiten realizar las operaciones requeridas en la base de datos. Estas operaciones van desde la creación de la base de datos hasta la manipulación de los datos que se encuentran almacenados; estos lenguajes se basan en estándares establecidos de manera general para la mayoría de los motores de bases de datos que se encuentran en la actualidad, lo que quiere decir que pasar de un motor de bases de datos a otro no implica mayor esfuerzo para el programador o administrador de la base de datos.
        .col-lg-4.mb-4.mb-lg-0.py-4
          figure
            img.img-c(src='@/assets/curso/temas/tema2/img-1.svg')

    p.mb-5 A continuación, veremos los diferentes lenguajes que se encuentran disponibles para estos procesos:

    TabsC.color-acento-botones.mb-5
      .py-4.py-md-5.px-5(titulo="<b></b>DDL").fnd-f1
        .row
          .col-md-6.mb-4.mb-md-0
            p El lenguaje DDL, cuyas siglas traducidas significan <b>Lenguaje de definición de datos</b>, es utilizado para establecer la estructura de la base de datos; con este lenguaje creamos nuestra base de datos y se asignan las diferentes entidades o tablas que esta base de datos poseerá, lo cual hace dependiente todo el proceso de las bases de datos, ya que sin la creación de la base de datos no existe nada, ni relaciones o información. Dentro de este lenguaje encontramos varios comandos, tales como: 
            p.mb-0 <b><em>Alter Procedure:</em></b> recopilar un procedimiento almacenado.
            p.mb-0 <b><em>Create Table:</em></b> crear una tabla.
            p.mb-0 <b><em>Create Index:</em></b> crear un índice.
            p.mb-0 <b><em>Drop:</em></b> eliminar objetos de una base de datos.
            p.mb-0 <b><em>Drop Index:</em></b> eliminar un índice.
            p.mb-0 <b><em>Grant:</em></b> conceder privilegios o papeles, roles, a un usuario o a otro rol.
            p.mb-0 <b><em>Truncate:</em></b> elimina todos los registros de una tabla.
            p.mb-0 <b><em>Revoke:</em></b> retirar los privilegios de un usuario o rol de la base de datos.
            p.mb-0 <b><em>Alter Table:</em></b> añadir o redefinir una columna, modificar la asignación de almacenamiento.
            p.mb-0 <b><em>Analyze:</em></b> recoge estadísticas de rendimiento sobre los objetos de la BD para utilizarlas en el optimizador basado en costes.

          .col-md-6
            figure
              img.img-c(src='@/assets/curso/temas/tema2/img-2.svg')
      .py-4.py-md-5(titulo="DML").fnd-f1.px-5
        .row
          .col-md-6.mb-4.mb-md-0
            p El lenguaje DML, cuyas siglas significan <b>Lenguaje de manipulación de datos</b>, nos permite realizar la gestión de la información que se encuentra dentro de la base de datos; dichos procesos involucran desde la inserción de información, su actualización y eliminación de la misma. Este lenguaje proporciona todas las instrucciones para que el usuario a través del aplicativo pueda realizar las labores de manipulación de la información. Algo importante a destacar de este lenguaje es que muchas de sus operaciones no son reversibles, como por ejemplo la eliminación, ya que una vez se realiza este proceso no se puede recuperar la información. A continuación, veremos algunos comandos utilizados en este lenguaje: 
            p.mb-0 <b><em>Insert:</em></b> añadir filas de datos a una tabla. 
            p.mb-0 <b><em>Delete:</em></b> eliminar filas de datos de una tabla. 
            p.mb-0 <b><em>Update:</em></b> modificar los datos de una tabla. 
            p.mb-0 <b><em>Select:</em></b> recuperar datos de una tabla
          .col-md-6
            figure
              img.img-c(src='@/assets/curso/temas/tema2/img-3.svg')
      .py-4.py-md-5(titulo="DCL").fnd-f1.px-5
        .row
          .col-md-6.mb-4.mb-md-0
            p Un Lenguaje de Control de Datos es un lenguaje proporcionado por el sistema de gestión de base de datos, que incluye una serie de comandos SQL que permiten al administrador controlar el acceso a los datos contenidos en la base de datos. Algunos ejemplos de comandos incluidos en el DCL son: 
            p.mb-0 <b><em>GRANT:</em></b> permite asignar permisos sobre el objeto de la base de datos. 
            p.mb-0 <b><em>REVOKE:</em></b> para quitar permisos. 
            p.mb-0 <b><em>COMMIT:</em></b> finaliza la transacción y realiza los cambios hechos durante la transacción. 
            p.mb-0 <b><em>ROLLBACK:</em></b> rechaza la transacción y no aplica cambios, volviendo al estado antes de iniciarse la transacción.

          .col-md-6
            figure
              img.img-c(src='@/assets/curso/temas/tema2/img-4.svg')
      .py-4.py-md-5(titulo="VDL").fnd-f1.px-5
        .row
          .col-md-6.mb-4.mb-md-0
            p Lenguaje de Definición de Vistas.  Es utilizado por el DBMS para especificar las vistas del usuario y sus correspondencias con el esquema conceptual. En las Bases de Datos Relacionales, el SQL representa una combinación de los anteriores, es decir, este lenguaje permite agrupar lo mejor de los antes mencionados dando como resultado un proceso de ilustración de información para el usuario; muchos de estos se pueden utilizan en la muestra de reportes y vistas al usuario final. Este lenguaje también es muy empleado para realizar las diferentes consultas de datos que se generan dentro de un sistema de bases de datos y luego traducirlas en información de utilidad para el usuario final, adicional a ello cuenta en la mayoría de gestores de bases de datos con interfaces muy amigables para su generación.
          .col-md-6
            figure
              img.img-c(src='@/assets/curso/temas/imgs/CF13.jpg')
    
    h3.mb-5 Lenguaje estructurado de consulta (SQL)


    .bloque-texto-a.color-secundario.mb-5.fnd-3-
      .row.m-0.align-items-center.justify-content-center
        .col-lg-8.p-4.p-md-5
          .bloque-texto-a__texto.p-4
            p Ahora, el lenguaje de consulta estructurado es un estándar de codificación para bases de datos que permiten, mediante una serie de instrucciones precisas, ubicar los datos y la información contenidos dentro de una base de datos. Es importante tener en cuenta que este lenguaje se crea como un estándar para la mayoría de motores de bases de datos que se manejan hoy en día, como SQLServer, Oracle, MySQL, entre otros. Una de las características más notable de este lenguaje es la sintaxis que maneja, porque se estructura como preguntas que se hacen como si fuese una dirección para encontrar una vivienda. En la figura se puede observar un ejemplo.
        .col-lg-4.mb-4.mb-lg-0.py-4
          figure
            img.img-c(src='@/assets/curso/temas/tema2/img-6.svg')

    .row.justify-content-center.align-items-center.mb-5.bg.p-5           
      .col-lg-10
        .titulo-sexto.color-primario
          h5 Figura 1
          br
          span.fst-italic Sentencia SQL 
        img.img-c(src='@/assets/curso/temas/tema2/1.png')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img.img-c(src='@/assets/curso/temas/tema2/img-8.svg')
      .col-lg-8

        .cajon-b.color-primario.px-3.pt-3.bl-2-
          p.mb-0 Es importante tener presente que el lenguaje SQL está compuesto por comandos, cláusulas, operadores y funciones de agregado, estos elementos agrupados permiten que sea posible la elaboración de consultas que permiten recuperar la información que se encuentra almacenada dentro de la base de datos. Es importante tener en cuenta que esta información que se recupera es solo de lectura, es decir, permite realizar la visualización de la información contenida dentro de la base de datos pero no se puede, a través de un comando SQL, realizar la actualización o inserción de nueva información. 

        .cajon-b.color-primario.p-3.mb-5.bl-2
          p.mb-0 Dentro de las cláusulas encontramos SELECT, FROM, WHERE, AS, BETWEEN; dentro de los operadores encontramos =, >, <, >=, <=; dentro de las funciones de agregado encontramos SUM, COUNT, HAVING, entre otras. Es importante tener en cuenta que la estructuración del lenguaje SQL debe ser con un orden establecido dentro de la secuencia de comandos para que puedan generar el resultado correcto y no error de información.

    p.mb-5 Ampliemos la información sobre algunos comandos y su respectiva descripción:

    .row.justify-content-center.align-items-center.mb-5.d-flex 
      .col-lg-8
        SlyderF(columnas="col-lg-12 col-xl-6").mb-3
          .tarjeta.color-secundario.p-4.img-355
            h4.text-center.mb-md-0.mb-sm-5.mb-5 <em>SELECT</em>
            p.text-center Palabra clave que indica que la sentencia de SQL que queremos ejecutar es una consulta. Selecciona tanto los campos que se enumeran como todos los registros que cumplan con la condición de la parte WHERE. Cuando los atributos se toman de distintas tablas en la parte FROM, también realiza la reunión (join). Por eso se dice que es un lenguaje ortogonal.
          .tarjeta.color-secundario.p-4.img-355
            h4.text-center <em>FROM</em>
            p.text-center Indica la tabla (o tablas) desde la que queremos recuperar los datos. En el caso de que exista más de una tabla se denomina a la consulta "consulta combinada" o reunión join. En las consultas combinadas es necesario aplicar una condición de combinación a través de una cláusula WHERE.    
          .tarjeta.color-secundario.p-4.img-355
            h4.text-center <em>WHERE</em>
            p.text-center Especifica una condición que debe cumplirse para que los datos sean devueltos por la consulta. Admite los operadores lógicos AND y OR además de los relacionales y otros.
          .tarjeta.color-secundario.p-4.img-355
            h4.text-center <em>GROUP BY</em>
            p.text-center Especifica la agrupación que se da a los datos. Se usa siempre en combinación con funciones agregadas. 
          .tarjeta.color-secundario.p-4.img-355
            h4.text-center <em>ORDER BY</em>
            p.text-center Presenta el resultado ordenado por las columnas indicadas. El orden puede expresarse con ASC (orden ascendente) y DESC (orden descendente). El valor predeterminado es ASC.
                              
      .col-lg-4
        figure
          img.img-c(src='@/assets/curso/temas/tema2/img-9.svg')


    .cajon.color-primario.p-4.mb-4.fnd-4
        p SQL es un lenguaje de acceso a bases de datos que explota la flexibilidad y potencia de los sistemas relacionales y permite así gran variedad de operaciones. Es un lenguaje declarativo de "alto nivel" o "de no procedimiento" que, gracias a su fuerte base teórica y su orientación al manejo de conjuntos de registros —y no a registros individuales—, permite una alta productividad en codificación y la orientación a objetos. 

    p.mb-5 De esta forma, una sola sentencia puede equivaler a uno o más programas que se utilizarían en un lenguaje de bajo nivel orientado a registros. SQL también tiene las siguientes características:    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        LineaTiempoD.color-acento-contenido.fnd-5
          p.text-small(numero="1" titulo="Lenguaje de definición de datos") El LDD de SQL proporciona comandos para la definición de esquemas de relación, borrado de relaciones y modificaciones de los esquemas de relación.
          p.text-small(numero="2" titulo="Lenguaje interactivo de manipulación de datos") El LMD de SQL incluye lenguajes de consultas basado tanto en álgebra relacional como en cálculo relacional de tuplas.
          p.text-small(numero="3" titulo="Integridad") El LDD de SQL incluye comandos para especificar las restricciones de integridad que deben cumplir los datos almacenados en la base de datos.<br><br>Definición de vistas: el LDD incluye comandos para definir las vistas.<br><br>Control de transacciones: SQL tiene comandos para especificar el comienzo y el final de una transacción.

          p.text-small(numero="4" titulo="SQL incorporado y dinámico") Esto quiere decir que se pueden incorporar instrucciones de SQL en lenguajes de programación como: C++, C, Java, PHP, COBOL, Pascal y Fortran.
          p.text-small(numero="5" titulo="Autorización") El LDD incluye comandos para especificar los derechos de acceso a las relaciones y a las vistas.
      .col-lg-4  
        figure
          img.img-c(src='@/assets/curso/temas/tema2/img-10.svg')

    .row.justify-content-center.align-items-center.mb-5.fnd-f2
      .col-lg-8
        p En los datos básicos de SQL, encontramos los siguientes tipos de datos:
        ul.lista-ul--color.pp-
          li 
            i.fas.fa-angle-right
            p.mb-0 
              b <em>Varchar: </em>
              | recibe cadena de palabras compuestas de letras, números y caracteres especiales.
          li 
            i.fas.fa-angle-right
            p.mb-0 
              b <em>Int: </em>
              | es el principal tipo de datos de valores enteros de SQL Server. Con números enteros con o sin signo.
          li 
            i.fas.fa-angle-right
            p.mb-0 
              b <em>Date: </em>
              | una fecha de calendario que contiene el año (de cuatro cifras), el mes y el día.
          li 
            i.fas.fa-angle-right
            p.mb-0 
              b <em>Time:</em>
              |  la hora del día en horas minutos segundos (el valor predeterminado es 0).

      .col-lg-4  
        figure
          img.img-c(src='@/assets/curso/temas/tema2/img-11.svg')

</template>

<script>
export default {
  name: 'Tema2',
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
