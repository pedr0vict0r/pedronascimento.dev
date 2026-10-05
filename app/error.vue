<script setup>
defineProps({
  error: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <main class="error-page">
    <h1 v-if="error.statusCode === 404">Não há nada aqui</h1>
    <h1 v-else>Ocorreu um erro - {{ error.statusCode }}</h1>
    <!-- recarga completa: limpa o estado de erro sem depender do router -->
    <a href="/">Início</a>
  </main>
</template>

<style>
.error-page {
  font-family: Quicksand, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;
}
</style>
