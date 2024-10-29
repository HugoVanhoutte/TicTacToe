<script setup lang="ts">
/* eslint-disable vuejs-accessibility/click-events-have-key-events */
import { ref } from 'vue';

const symbol = ref<string[]>(['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none']);
const winner = ref<string>('none');
const winningCombinations = [
  // Horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonal
  [0, 4, 8],
  [2, 4, 6],
];
const chooseRandomBox = () => Math.floor(Math.random() * 9);

const clearBoard = () => {
  winner.value = 'none';
  symbol.value = ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'];
};

const checkVictory = (): void => {
  winningCombinations.forEach((winningCombination) => {
    if (
      symbol.value[winningCombination[0]] === symbol.value[winningCombination[1]]
      && symbol.value[winningCombination[1]] === symbol.value[winningCombination[2]]
    ) {
      winner.value = symbol.value[winningCombination[0]];
    }
  });
};

const setCross = (id: number): string | null => {
  if (winner.value !== 'none') {
    return null;
  }
  if (symbol.value[id] !== 'none') {
    return null;
  }
  symbol.value[id] = 'cross';
  checkVictory();
  if (winner.value !== 'none') {
    return null;
  }
  let isBoxChosen = false;
  while (isBoxChosen !== true && symbol.value.filter((box) => box === 'none').length > 1) {
    const randomBox = chooseRandomBox();
    if (symbol.value[randomBox] === 'none') {
      isBoxChosen = true;
      symbol.value[randomBox] = 'circle';
      checkVictory();
      if (winner.value !== 'none') {
        return null;
      }
    }
  }
  if (symbol.value.filter((box) => box === 'none').length === 0) {
    winner.value = 'draw';
  }
  return null;
};
</script>
<template>
  <div class="container">
    <h1>Morpion</h1>
    <div class="winner" v-if="winner !== 'none'">
      <h1>{{ winner }} <span v-if="winner !== 'draw'">wins </span></h1>
      <button @click="clearBoard()">Play Again</button>
    </div>
    <div class="morpion">
      <div class="box" id="0" @click="setCross(0)">
        <i class="fa-solid fa-xmark" v-if="symbol[0] === 'cross'" style="color:blue;"/>
        <i class="fa-regular fa-circle" v-if="symbol[0] === 'circle'" style="color:red;"/>
      </div>
      <div class="box" id="1" @click="setCross(1)">
        <i class="fa-solid fa-xmark" v-if="symbol[1] === 'cross'" style="color:blue;"/>
        <i class="fa-regular fa-circle" v-if="symbol[1] === 'circle'" style="color:red;"/>
      </div>
      <div class="box" id="2" @click="setCross(2)">
        <i class="fa-solid fa-xmark" v-if="symbol[2] === 'cross'" style="color:blue;"/>
        <i class="fa-regular fa-circle" v-if="symbol[2] === 'circle'" style="color:red;"/>
      </div>
      <div class="box" id="3" @click="setCross(3)">
        <i class="fa-solid fa-xmark" v-if="symbol[3] === 'cross'" style="color:blue;"/>
        <i class="fa-regular fa-circle" v-if="symbol[3] === 'circle'" style="color:red;"/>
      </div>
      <div class="box" id="4" @click="setCross(4)">
        <i class="fa-solid fa-xmark" v-if="symbol[4] === 'cross'" style="color:blue;"/>
        <i class="fa-regular fa-circle" v-if="symbol[4] === 'circle'" style="color:red;"/>
      </div>
      <div class="box" id="5" @click="setCross(5)">
        <i class="fa-solid fa-xmark" v-if="symbol[5] === 'cross'" style="color:blue;"/>
        <i class="fa-regular fa-circle" v-if="symbol[5] === 'circle'" style="color:red;"/>
      </div>
      <div class="box" id="6" @click="setCross(6)">
        <i class="fa-solid fa-xmark" v-if="symbol[6] === 'cross'" style="color:blue;"/>
        <i class="fa-regular fa-circle" v-if="symbol[6] === 'circle'" style="color:red;"/>
      </div>
      <div class="box" id="7" @click="setCross(7)">
        <i class="fa-solid fa-xmark" v-if="symbol[7] === 'cross'" style="color:blue;"/>
        <i class="fa-regular fa-circle" v-if="symbol[7] === 'circle'" style="color:red;"/>
      </div>
      <div class="box" id="8" @click="setCross(8)">
        <i class="fa-solid fa-xmark" v-if="symbol[8] === 'cross'" style="color:blue;"/>
        <i class="fa-regular fa-circle" v-if="symbol[8] === 'circle'" style="color:red;"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
// FIN Reset CSS
.container {
  width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .morpion {
    width: 300px;
    height: 300px;
    display: grid;
    grid-template-columns: 100px 100px 100px;
    .box {
      width: 100px;
      height: 100px;
      border: 1px black solid;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font-size: 6rem;
      }
    }
  }
  .winner {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.75);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      font-size: 3rem;
      color: white;
      text-transform: capitalize;
    }
    button {
      width: 50%;
      height: 5rem;
      font-size: 3rem;
      margin: 2rem;
    }
  }
  h1 {
    font-size: 5rem;
    margin-bottom: 3rem;
  }
}
</style>
