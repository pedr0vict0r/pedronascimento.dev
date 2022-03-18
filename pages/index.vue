<template>
  <div>
    <div class="color-mode-picker"><ColorModePicker /></div>
    <div class="container">
      <div>
        <!-- <Logo /> -->
        <img
          style="height: auto"
          alt=""
          class="avatar avatar-user"
          src="https://avatars.githubusercontent.com/u/17133455"
          width="260"
          height="260"
        />
        <br /><br />
        <h1 class="title">Pedro Nascimento</h1>
        <p class="subtitle">Um Desenvolvedor de Belém do Pará</p>
        <div class="links">
          <a
            href="https://www.linkedin.com/in/pedro-nascimento/"
            target="_blank"
            rel="noopener noreferrer"
            class="button-blue">
            LinkedIn
          </a>
          <a
            href="https://github.com/pedr0vict0r"
            target="_blank"
            rel="noopener noreferrer"
            class="button-grey">
            GitHub
          </a>
          <a
            href="https://gitlab.com/pedr0vict0r"
            target="_blank"
            rel="noopener noreferrer"
            class="button-orange">
            GitLab
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style>
.container {
  font-family: Quicksand, 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.links {
  padding-top: 15px;
}

.avatar {
  display: inline-block;
  overflow: hidden;
  line-height: 1;
  vertical-align: middle;
  border-radius: 6px;
  flex-shrink: 0;
  box-shadow: 0 0 0 1px;
}

.avatar-user {
  border-radius: 50% !important;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
}

.color-mode-picker {
  padding: 10px;
  text-align: right;
}
</style>
