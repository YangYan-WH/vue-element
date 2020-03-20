<template>
  <button class="g-button" :class="{ [`icon-${iconPosition}`]: true }">
    <svg v-if="icon" class="icon" aria-hidden="true">
      <use :xlink:href="`#icon-${icon}`" />
    </svg>
    <svg class="loading" aria-hidden="true">
      <use xlink:href='#icon-loading'>
    </svg>
    <div class='slot'>
      <slot></slot>
    </div>
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
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  margin-right: .3em;
  order: 1;
}
.slot{
  order:1;
}
.icon-right > .icon{
  order:2;
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

.loading {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  margin-right: .3em;
  animation: loading 2s linear infinite;
}
@keyframes loading{
  0%{ transform: rotate(0deg);}
  100%{ transform: rotate(360deg);}
}
</style>
<script>
export default {
  // props:['icon']
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        console.log(value)
        return value === 'left' || value === 'right'
      }
    }
  }
};
</script>