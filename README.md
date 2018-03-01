# meer

## a ui design for vue.

usage:

### Buttoner

```js
<template>
  <div class="hello">
    <p>Buttoner</p>
    <Liner width="50%"/>
    <fieldset>
      <legend>type</legend>
      <Buttoner text="normal" type="normal" />
      <Buttoner text="simple" type="simple" />
      <Buttoner text="dotted" type="dotted" />
      <Buttoner text="danger" type="danger" />
    </fieldset>
    <fieldset>
      <legend>size</legend>
      <Buttoner text="large" type="normal" size="large" />
      <Buttoner text="default" type="normal" size="default" />
      <Buttoner text="small" type="normal" size="small" />
    </fieldset>
    <fieldset>
      <legend>count down</legend>
      <Buttoner text="count down" :second="second" />
    </fieldset>
  </div>
</template>

<script>
import {Buttoner, Liner} from 'meer'
export default {
  name: 'Components',
  data() {
    return {
      showCountDown: true,
      second: 10
    }
  },
  props: {
    msg: String
  },
  components: {
    Buttoner, Liner
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.fix-margin{
  margin-bottom: 20px;
}
</style>

```
