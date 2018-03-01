<template>
    <div class="meer-line" :style="{'width': width}" />
</template>
<script>
    export default {
        name: 'Liner',
        props: {
            width: {
                type: String,
                default: '100%'
            }
        }
    }
</script>
<style scoped>
    .meer-line{
        background: #d9d9d9;
        height: 2px;
    }
</style>