<template>
  <div>
    <h1 v-if="error.statusCode === 404">Não há nada aqui</h1>
    <h1 v-else>Ocorreu um erro - {{ error.statusCode }}</h1>
    <NuxtLink to="/">Início</NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'error',
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'], // you can set a custom layout for the error page
}
</script>
