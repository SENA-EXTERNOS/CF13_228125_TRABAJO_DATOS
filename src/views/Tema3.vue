<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 3
      h1  Tipos de datos
      

    .bloque-texto-a.color-secundario.mb-5.fnd-1-.bl-izq
      .row.m-0.align-items-center.justify-content-center
        .col-lg-8.p-4.p-md-4
          .row.align-items-center
            .col-lg-12
              .bloque-texto-a__texto.p-4.mb-3
                p Los tipos de datos son, de alguna manera, restricciones que se establecen en los datos que se almacenan en una base de datos y están estrechamente relacionados con la información que se desea almacenar y manipular dentro de la misma. Es importante tener en cuenta que, por ejemplo, existen algunas restricciones, precisamente, con los tipos de datos; un ejemplo de esto son los datos de tipo <i>int</i> que son datos que solo reciben valores numéricos, es decir, si un usuario trata de almacenar, por ejemplo, una letra o palabra, automáticamente la base de datos nos informará de una violación de tipos de datos. 
            .col-9
              .bloque-texto-a__texto.px-4.fnd-n          
                p.mb-0.text-white Es decir, estamos incumpliendo esa restricción de solo insertar datos números en ese tipo de datos, pero en el caso, por ejemplo, de los tipos de datos <i>varchar</i>, estos permiten almacenar datos tales como letras, números y símbolos, pero al momento de tratar de realizar alguna operación con ellos, mandará error; por ejemplo, tenemos un dato de tipo <i>varchar</i> y guardamos el valor 5, él permite almacenarlo sin problemas, pero si tratamos de hacer una operación matemática con este campo, no podremos hacerla, a menos que realicemos una conversión.
        .col-lg-4.mb-4.mb-lg-0.py-4
          figure
            img.img-c(src='@/assets/curso/temas/tema3/img-1.svg')
    p.mb-5 A continuación, veremos un contexto más detallado sobre esta temática:
    .row.justify-content-center.mb-5
      .col-lg-4
        figure
            img(src='@/assets/curso/temas/tema3/img-2.svg')

      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta fnd-2")
          .row(titulo="Datos de caracteres")
              p.pp-l El tipo más común de datos está en formato de carácter (información que se almacena como cadenas de caracteres y pueden ser manipulados solo en cadenas). Algunos ejemplos de esta información son los nombres de clientes, direcciones, teléfonos, etc. Dos cadenas de caracteres se pueden ubicar juntas (concatenado), una subcadena puede ser seleccionada de una cadena más larga y una cadena puede ser sustituida por otra.
          .row(titulo="Datos numéricos")
              p.pp-l Otro tipo de datos muy común es el numérico  (datos que se almacenan como un número). Por ejemplo, pueden ser almacenados números decimales (por ejemplo, 10.5, 2.34567, 23456.7) o números enteros (por ejemplo, 1, 2, 248). Cuando los datos se almacenan como un número pueden ser utilizados en operaciones numéricas como sumar, restar y hacer cuadraturas.
              p.pp-l Tenga en cuenta que si los datos no van a ser utilizados para operaciones numéricas es mejor almacenarla como una cadena de caracteres, porque el programador va a utilizarla como una cadena de caracteres y no requerirá conversión. Por ejemplo, probablemente no se quiera añadir los dígitos en los números telefónicos de los usuarios, por lo que los números de teléfono deberían estar almacenados como cadenas de caracteres.

          .row(titulo="Datos de fecha y hora")
              p.pp-l Un tercer tipo común de datos son los de fecha y hora. Los datos almacenados como fecha pueden ser desplegados en una variedad de formatos de fecha. También se puede utilizar para determinar la longitud de tiempo entre dos fechas o períodos o entre una fecha y hora específica y una fecha o tiempo arbitrario.
          .row(titulo="Datos de enumeración")
              p.pp-l Algunas veces los datos pueden tener solo un número limitado de valores. Por ejemplo, los únicos valores posibles de una columna pueden ser sí o no. 

    p.mb-3 De acuerdo con las necesidades del usuario, los datos se pueden categorizar con diferentes tipos, los cuales generan ciertas restricciones al momento de usarlos. 
    p.mb-5 A continuación, abordaremos algunas de ellas:

    .row.justify-content-center.mb-5
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta fnd-2-")
          .row(titulo="Tipo número")
              p.pp-l Si se desea almacenar un dato de tipo número para realizar operaciones matemáticas con él, es indispensable primero que todo que este campo posea la propiedad <b><em>INT</em></b>, la cual identifica a este campo como numérico y tiene la restricción de solo almacenar datos de tipo número; en caso de que el usuario intente almacenar otro tipo de dato, el motor de la base de datos informará sobre el error cometido.
          .row(titulo="Tipo fecha")
              p.pp-l Si se desea almacenar un dato de tipo fecha, se debe utilizar en su declaración la palabra reservada <b><em>DATE</em></b>, la cual le indica a la base de datos que este dato se refiere a una fecha. Ahora bien, en algunos motores de bases de datos afecta mucho la configuración que tengamos de la fecha en la computadora, por ejemplo: 09/09/2022 indicando día/mes/año, pero algunos motores de bases de datos manejan otra configuración, por ejemplo; 2022/12/25 indicando año/mes/día; por ello es importante tener en cuenta este tipo de aclaraciones.
          .row(titulo="Tipo cadena")
              p.pp-l Cuando se refiere a cadena está hablando de cadena de caracteres, este es uno de los tipos de datos <b><em>VARCHAR</em></b> o <b><em>CHAR</em></b>, los cuales son los más utilizados, ya que permiten una versatilidad al momento de almacenar información, es decir, permiten almacenar cualquier tipo de datos incluyendo números, letras, símbolos, caracteres, entre otros. Pero su restricción está en que a pesar de que almacena cualquier tipo de datos, al momento de usarlos se tiene que realizar la conversión al dato requerido para esa operación; ejemplo: si se tiene un campo de tipo <b> <em>VARCHAR </em> </b>y se tiene almacenado el valor 4, quiere decir que si se desea hacer una operación matemática con dicho campo, se debe convertir al tipo de dato correspondiente, es decir, <b><em>INT</em></b>, de lo contrario no se podrá realizar dicha operación. Esta restricción aplica para los demás valores que puedan ser almacenados en el mismo.   
          .row(titulo="Enumerable o autonumérico")
              p.pp-l Este tipo de datos se utiliza cuando se desea que un valor contenido dentro de un campo de la base de datos se genere de manera automática; esto es posible gracias a un algoritmo que permite en la tabla de almacenamiento de la base de datos configurar que un campo genere de manera automática y ordenada una secuencia de números.   
          .row(titulo="Tipo float")
              p.pp-l Este es un tipo de datos que tiene como restricción recibir valores numéricos que tengan puntos decimales, por ejemplo: 0.5, 25.6, etc. Este tipo de datos se utiliza mucho cuando se realizan operaciones matemáticas de multiplicación de porcentajes o divisiones, ya que tienden a tener una probabilidad de generar dicho tipo de dato.                 
      .col-lg-4
        figure
            img(src='@/assets/curso/temas/tema3/img-3.svg')

    .row.justify-content-center.align-items-center.mb-5.fnd-f3.p-5
      .col-lg-6
        h3 Valores por defecto (<em>Default</em>)
        p La restricción <em>DEFAULT</em> se usa para proporcionar un valor predeterminado para una columna.
        p El valor predeterminado se agregará a todos los registros nuevos SI no se especifica ningún otro valor.
        p El siguiente SQL establece un valor <em>DEFAULT</em> para la columna «Ciudad» cuando se crea la tabla «Personas».
      .col-lg-6 
        .pp-l.mb-5
          .titulo-sexto.color-primario
            h5 Figura 2
            br
            span.fst-italic Comando <em>default</em>
        figure.pp-
            img(src='@/assets/curso/temas/tema3/img-4.svg')

    p.mb-5 La restricción <em>DEFAULT</em> también se puede usar para insertar valores del sistema mediante el uso de funciones como <em>GETDATE</em> ().
    .row.justify-content-center.align-items-center.mb-5.fnd-f3.p-5
        .pp-l.mb-5
          .titulo-sexto.color-primario
            h5 Figura 3
            br
            span.fst-italic Asignación de fecha comando <em>default</em>
        .row.justify-content-center.align-items-center
          .col-lg-8    
            figure.pp-
                img.img-163(src='@/assets/curso/temas/tema3/img-5.svg')

    .row.justify-content-center.align-items-center.mb-5.fnd-f3.p-5
      .col-lg-6
        h3 <em>Null y Not null</em>
        p Por defecto, las columnas pueden contener valores NULL. Se usa una restricción NOT NULL en SQL para evitar insertar valores NULL en la columna especificada, considerándolo entonces como un valor no aceptado para esa columna. Esto significa que se debe proporcionar un valor válido SQL NOT NULL a esa columna en las instrucciones INSERT o UPDATE, porque la columna siempre contendrá datos; un ejemplo de esto, lo observamos en la figura.
      .col-lg-6 
        .pp-l.mb-1
          .titulo-sexto.color-primario
            h5 Figura 4
            br
            span.fst-italic Uso de cláusula <em>Not null</em>
        figure.pp-
            img(src='@/assets/curso/temas/imgs/cf13-2.png')
    
    .bloque-texto-a.color-secundario.mb-5.fnd-3-.bl-izq
      .row.m-0.align-items-center.justify-content-center
        .col-lg-8.p-4.p-md-5
          .bloque-texto-a__texto.p-4
            p Como se puede observar en la figura anterior, el uso de la cláusula NOT NULL es para generar una restricción e impedir que se reciban valores nulos o vacíos dentro de los campos seleccionados; por ejemplo, en la tabla <b>tbl_Pacientes</b> que se observa en el ejemplo, el campo de nombres está como NOT NULL, porque para la base de datos no tendría ningún sentido registrar a un paciente sin nombre y de allí nace la necesidad del uso de esta cláusula. Para el caso que se desee poder recibir valores nulos, simplemente quitamos esta restricción; es decir, retiramos las palabras reservadas NOT NULL y automáticamente la base de datos permitirá almacenar valores NULL dentro de la misma; un ejemplo de ello es cuando se desea registrar a una persona y se solicita primer nombre y segundo nombre, no todas las personas tienen segundo nombre, por lo tanto se le puede dejar la posibilidad que estos sean opcionales y no afecten el almacenamiento de los datos. Observe la figura: 
        .col-lg-4.mb-4.mb-lg-0.py-4
          figure
            img.img-c(src='@/assets/curso/temas/tema3/img-7.svg')    


    .row.justify-content-center.align-items-center.mb-5.fnd-f3.p-5
      .col-lg-6 
        .pp-l.mb-5
          .titulo-sexto.color-primario
            h5 Figura 5
            br
            span.fst-italic Uso de cláusula <em>null</em>
        figure.pp-.mb-5
            img(src='@/assets/curso/temas/imgs/cf13-3.png')    
      .col-lg-6
        p Como se observa en la figura, el campo señalado segundo nombre, no tiene restricción porque no es obligatorio que todas las personas tengan segundo nombre; en este caso, al retirar la cláusula la base de datos entiende que es un valor no obligatorio en la inserción de los datos.














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
