<template>
  <button class="g-button">
    <svg v-if='icon' class="icon" aria-hidden="true">
      <use :xlink:href=`#icon-${icon}` />
      //<use xlink:href='#icon-settings' />
    </svg>
    <slot></slot>
  </button>
</template>

<style lang='scss'>
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
}
.g-button:hover {
  border-color: var(--border-color-hover);
}
.g-button:active {
  background-color: var(--button-active-bg);
}
.g-button:focus {
  outline: none;
}
</style>
<script>
export default {
  props:['icon']
};
</script>