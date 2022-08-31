<!-- controller input -->
<template>
  <div class="control">
    <label> <slot /> </label>
    <input
    v-bind="$attrs"
    :value="value"
    :required="required"
    :type="type"
    @input="$emit('input', $event.target.value)"
    >
    <!-- $event.target.value - это значение в текущем инпуте -->
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    required: {
      type: Boolean,
      default: true
    }
  }
}
</script>
