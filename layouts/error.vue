<template>
  <div>
    <h1 v-if="error.statusCode === 404">Não há nada aqui</h1>
    <h1 v-else>Ocorreu um erro - {{ error.statusCode }}</h1>
    <NuxtLink to="/">Início</NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'ErrorLayout'
}
</script>
