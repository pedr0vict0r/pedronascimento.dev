<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">Pedro Nascimento Developer</h1>
      <p class="subtitle">Um Desenvolvedor de Belém do Pará</p>
      <div class="links">
        <a
          href="https://www.linkedin.com/in/pedro-nascimento/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/pedr0vict0r"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-size: min(max(35px, 10vw), 80px);
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: min(max(25px, 5vw), 40px);
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
