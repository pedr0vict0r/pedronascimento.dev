<template>
  <div>
    <div class="color-mode-picker"><ColorModePicker /></div>
    <main class="container">
      <div>
        <img
          class="avatar avatar-user"
          src="https://avatars.githubusercontent.com/u/17133455"
          alt="Foto de Pedro Nascimento"
          width="260"
          height="260"
        >
        <h1 class="title">Pedro Nascimento</h1>
        <p class="subtitle">Um Desenvolvedor de Belém do Pará</p>
        <div class="links">
          <a
            href="https://www.linkedin.com/in/pedro-nascimento/"
            target="_blank"
            rel="noopener noreferrer"
            class="button-blue"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/pedr0vict0r"
            target="_blank"
            rel="noopener noreferrer"
            class="button-grey"
          >
            GitHub
          </a>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
.container {
  font-family: Quicksand, 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  margin: 0 auto;
  padding: 0 15px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding-top: 15px;
}

.avatar {
  display: block;
  margin: 0 auto 28px;
  max-width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 0 0 1px;
}

.avatar-user {
  border-radius: 50% !important;
  border: 1px solid #3b8070;
  color: #3b8070;
}

.color-mode-picker {
  padding: 10px;
  text-align: right;
}
</style>
