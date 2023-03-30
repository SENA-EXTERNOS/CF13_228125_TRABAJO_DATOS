<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    

    p Apreciado aprendiz, bienvenido a este componente formativo donde abordaremos la temática relacionada con los sistemas de almacenamiento como son las bases de datos, las cuales permiten que un sistema de información pueda resguardar los datos y la información, desde un entorno gráfico. 

    p.mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:    

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/MJUopc_lgn0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        









</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
