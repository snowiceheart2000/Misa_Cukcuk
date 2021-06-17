<template>
  <div id="app">
    <TheNavbar/>
    <TheHeader/>
    <TheContent/>
  </div>
</template>

<script>

import TheNavbar from'./base/layout/TheNavbar.vue'
import TheHeader from './base/layout/TheHeader.vue'
import TheContent from './base/layout/TheContent.vue'

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheHeader,
    TheContent
  }
}
</script>

<style>
@import './base/style/components/button.css';
@import './base/style/components/input.css';
@import './base/style/components/table.css';
@import './base/style/components/dialog.css';
@import './base/style/components/icon.css';
@import './base/style/components/combobox.css';

body {
    margin: 0;
    font-family: GoogleSans-Regular;
    font-size: 13px;
}

.bg-primary {
    background-color: #01B075;
}

.bg-primary:hover {
    background-color: #2FBE8E;
}

.bg-primary:default {
    background-color: #019160;
}

.bg-primary:focus {
    background-color: #EBF9F4;
}

.bg-selected-row {
    background-color: #d2d2d2;
}

@font-face {
    font-family: 'GoogleSans-Regular';
    src: url('./assets/font/GoogleSans-Regular.otf') format('opentype');
}

@font-face {
    font-family: 'GoogleSans-Bold';
    src: url('./assets/font/GoogleSans-Bold.otf') format('opentype');
}

@font-face {
    font-family: 'GoogleSans-Italic';
    src: url('./assets/font/GoogleSans-Italic.otf') format('opentype');
}

@font-face {
    font-family: 'GoogleSans-BoldItalic';
    src: url('./assets/font/GoogleSans-BoldItalic.otf') format('opentype');
}
</style>
