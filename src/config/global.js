export default {
  global: {
    componenteFormativo: 'Trabajo con datos',
    descripcionCurso:
      'Este componente formativo tiene como objetivo la comprensión del uso de los sistemas de bases de datos y el modelo de diseño establecido para el almacenamiento y resguardo de la información suministrada a través del software.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Gestores de base de datos y formatos de archivos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Lenguajes de sistemas administradores de base de datos (DBMS) y lenguaje estructurado de consulta (SQL)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tipos de datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Lenguajes de definición de datos DDL',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Restricciones de integridad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Lenguajes de manipulación de datos DML',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Construcción de base de datos NoSQL',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Gestores de base de datos y formatos de archivos',
      referencia:
        'EDteam. (2020). <em>¿Qué son las BASES DE DATOS y cómo funcionan?</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=knVwokXITGI ',
    },
    {
      tema:
        'Lenguajes de sistemas administradores de base de datos(DBMS) y lenguaje estructurado de consulta (SQL)',
      referencia:
        'Bases de Datos. (2020). <em>01 lenguaje de Consulta Estructurado (SQL) – Conceptos básicos </em>(video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HlRhFDY1Bmg ',
    },
    {
      tema: 'Lenguajes de definición de datos DDL',
      referencia:
        'EscuelaIT. (2013). <em>SQL – Lenguaje de Definición de Datos (DDL) </em>(video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=sRc',
    },
    {
      tema: 'Lenguajes de definición de datos DDL',
      referencia:
        'Robles, J. (2021).<em> Lenguaje de Definición de Datos (DDL) </em>(video). YouTube. ',
      tipo: 'Artículo',
      link: 'https://www.youtube.com/watch?v=7KQbw8v8jN8',
    },
  ],
  glosario: [
    {
      termino: 'Bases de datos documentales',
      significado:
        'almacena la información como un documento, generalmente utilizando para ello una estructura simple como JSON o XML y donde se utiliza una clave única para cada registro.',
    },
    {
      termino: '<em>DATE</em>',
      significado:
        'es un tipo de datos que permite almacenar valores de tipo fecha y se puede combinar con comandos como <em>GETDATE()</em> para que almacene de manera automática la fecha que tiene asignada el servidor.',
    },
    {
      termino: 'DDL',
      significado:
        'lenguaje de definición de datos el cual permite crear la estructura de la base de datos y sus componentes como tablas y campos, adicional a ello permite la creación de las diferentes relaciones de las entidades de la base de datos.',
    },
    {
      termino: 'DML',
      significado:
        'lenguaje de manipulación de datos que permite realizar las operaciones para el mantenimiento de los datos de las tablas, las cuales se llaman CRUD, que significa:<em> Create, Read, Update, Delete.</em>',
    },
    {
      termino: 'Integridad referencial',
      significado:
        'se refiere al tipo de restricción que se establece en las bases de datos para evitar que la información sea afectada y no sea de utilidad posteriormente.',
    },
    {
      termino: 'Integridad de unicidad',
      significado:
        'la regla de integridad de unicidad está relacionada con la definición de clave primaria. Concretamente, establece que toda clave primaria que se elija para una relación no debe tener valores repetidos.',
    },
    {
      termino: 'JSON',
      significado:
        'son archivos de intercambio de información que se usan a menudo en los sitios web, tienen una estructura específica y su tamaño y peso en disco son muy pequeños.',
    },
    {
      termino: 'NoSQL',
      significado:
        'son un tipo de bases de datos que permiten almacenar un gran volumen de información y trabajan con archivos planos, lo que hace que su peso y velocidad sean muy favorables.',
    },
    {
      termino: 'SQL',
      significado:
        'lenguaje de consulta estructurado, el cual permite mediante una serie de instrucciones específicas, recuperar la información almacenada dentro de las tablas de la base de datos.',
    },
    {
      termino: '<em>VARCHAR</em>',
      significado:
        'es un tipo de dato que se utiliza en las bases de datos para tener la posibilidad de almacenar cualquier tipo de dato sea carácter, número, símbolo entre otros.',
    },
  ],
  referencias: [
    {
      referencia:
        'Carrasquel, S., Coronado, D., Rodríguez, R. & Tineo, L. (2018). Gestión De Datos Difusos: Atributos Tipo 2 Y Tipo 3 En Bases De Datos Relacionales. <em>Publicaciones En Ciencias Y Tecnología,</em> 12(2), p. 83-95.',
      link: 'https://dialnet.unirioja.es/descarga/articulo/6641662.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
