<template>
  <div class="col" :class="colClass"></div>
</template>
<script>
let validator = value => {
  let keys = Object.keys(value);
  let valid = true;
  keys.forEach(key => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};

export default {
  name: "Col",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    phone: {
      type: Object,
      validator,
    }
  },
  data() {
    return {};
  },
  computed: {
    colClass() {
      let { span, offset, phone } = this;
      let phoneClass = [];
      if (phone) {
        phoneClass = [`col-phone-${phone.span}`];
      }

      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...phoneClass
      ];
    }
  }
};
</script>
<style lang="scss" scoped>
.col {
  width: 50%;
  height: 100px;
  border: 1px solid green;

  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }

  @media (max-width: 576px) {
    $class-prefix: col-phone-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: offset-phone-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
}
</style>

