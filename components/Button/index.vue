<template>
    <span @click="outerClick">
        <button
        :class="buttonClass"
        @click="click"
        >
        <span v-show="!showSecond">{{text}}</span>
        <span v-show="showSecond">{{childSecond}}</span>
        </button>
    </span>
</template>
<script src="./index.js"></script>
<style src="./index.css" scoped></style>