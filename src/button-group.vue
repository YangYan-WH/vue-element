<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>
<style>
.g-button-group {
  display: inline-flex;
  vertical-align: middle;
}
.g-button-group > .g-button{
    border-radius: 0;
}

.g-button-group > .g-button:hover{
    z-index: 1;

}

.g-button-group > .g-button:first-child {
  border-top-left-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
}
.g-button-group > .g-button:last-child {
  border-top-right-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  margin-left:-1px;
}
</style>

<script>
    export default{
        mounted(){
            console.log(1)
        }
    }
</script>
