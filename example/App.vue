<template>
  <div>
    <block>Now you see me</block>
    <em>please keep your component in <code>/src</code></em>
    <br/>
    <em>styles in <code>/assets</code></em>
    <br/>
    <em>examples in <code>/example</code></em>
  </div>
</template>
<script>
import Block from '../src/index'
export default {
  data () {
    return {}
  },
  methods: {
  },
  components: {
    Block: Block
  },
}
</script>
