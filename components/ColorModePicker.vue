<template>
  <div>
    <ul>
      <li v-for="color of colors" :key="color">
        <component
          :is="`icon-${color}`"
          :class="getClasses(color)"
          @click="$colorMode.preference = color"
        />
      </li>
    </ul>
    <!--
    <p>
      <ColorScheme placeholder="..." tag="span">
        <b>{{ $colorMode.preference == 'dark' ? 'Escuro' :  $colorMode.preference == 'sepia' ? 'Sépia' :  'Claro' }}</b>
        <span v-if="$colorMode.preference === 'system'">(Modo <i>{{ $colorMode.value }}</i> detectado)</span>
      </ColorScheme>
    </p>
    -->
  </div>
</template>

<script>

import IconLight from '@/assets/icons/light.svg?inline'
import IconDark from '@/assets/icons/dark.svg?inline'
import IconSepia from '@/assets/icons/sepia.svg?inline'

export default {
  components: {
    IconLight,
    IconDark,
    IconSepia
  },
  data () {
    return {
      colors: ['dark', 'sepia', 'light']
    }
  },
  methods: {
    getClasses (color) {
      // Does not set classes on ssr preference is system (because we know them on client-side)
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value
      }
    }
  }
}
</script>

<style scoped>

*, *::before, *::after{
  box-sizing: unset !important;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;

}

ul li {
  display: inline-block;
  padding: 5px;
}

p {
  margin: 0;
  padding-top: 5px;
  padding-bottom: 20px;
}

.feather {
  position: relative;
  top: 0;
  cursor: pointer;
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
