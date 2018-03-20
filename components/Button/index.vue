<template>
    <span @click="outerClick">
        <button
        :class="buttonClass"
        @click="click"
        >
        <span>{{childText}}</span>
        </button>
    </span>
</template>
<script src="./index.js"></script>
<style src="./index.less" lang="less" scoped></style>