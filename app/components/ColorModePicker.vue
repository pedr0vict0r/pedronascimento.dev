<script setup>
import IconDark from '~/components/icon/Dark.vue'
import IconLight from '~/components/icon/Light.vue'
import IconSepia from '~/components/icon/Sepia.vue'

const colorMode = useColorMode()

const modes = [
  { value: 'dark', label: 'Tema escuro', icon: IconDark },
  { value: 'sepia', label: 'Tema sépia', icon: IconSepia },
  { value: 'light', label: 'Tema claro', icon: IconLight },
]

function classesFor(mode) {
  // no SSR com preferência "system" o tema real só é conhecido no cliente
  if (colorMode.unknown) {
    return {}
  }
  return {
    preferred: mode === colorMode.preference,
    selected: mode === colorMode.value,
  }
}
</script>

<template>
  <ul>
    <li v-for="mode of modes" :key="mode.value">
      <button
        type="button"
        class="mode-button"
        :aria-label="mode.label"
        :title="mode.label"
        :aria-pressed="mode.value === colorMode.preference"
        @click="colorMode.preference = mode.value"
      >
        <component :is="mode.icon" :class="classesFor(mode.value)" />
      </button>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul li {
  display: inline-block;
  padding: 5px;
}

.mode-button {
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  cursor: pointer;
}

.mode-button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: 5px;
}

.feather {
  position: relative;
  top: 0;
  display: block;
  padding: 7px;
  background-color: var(--bg-secondary);
  border: 2px solid var(--border-color);
  margin: 0;
  border-radius: 5px;
  transition: all 0.1s ease;
}

.feather:hover {
  top: -3px;
}

.feather.preferred {
  border-color: var(--color-primary);
  top: -3px;
}

.feather.selected {
  color: var(--color-primary);
}
</style>
