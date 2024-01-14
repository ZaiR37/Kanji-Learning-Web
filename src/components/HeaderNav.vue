<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
  <header>
    <div id="logo">
      <router-link class="Nav-Link" to="/">KANJI LEARNING</router-link>
    </div>
    <ul id="nav-menu">
      <li> <router-link class="Nav-Link" to="/kanji-list">Kanji List</router-link></li>
      <li> <router-link class="Nav-Link" to="/quiz">Quiz</router-link></li>
      <li> <router-link class="Nav-Link" to="/about">About</router-link></li>
    </ul>
  </header>
</template>

<style scoped>
header {
  border-bottom: 0.12em solid var(--header-border-clr);
  display: flex;
}

header>* {
  flex-grow: 1;
}

header .Nav-Link {
  color: var(--clr-text);
  text-decoration: none;
}

header #logo {
  margin: auto;
  padding: 0px 50px;

  font-size: 30px;
  font-weight: 600;
  font-style: italic;

  background: linear-gradient(to right, var(--clr-primary), var(--clr-secondary), var(--clr-primary));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

header #logo span {
  margin: 0;
}

header #nav-menu {
  padding: 20px 50px;
  margin: 0;

  font-size: 18px;
  list-style: none;

  display: flex;
  justify-content: flex-end;
  gap: 2rem;
}

header #nav-menu .Nav-Link {
  position: relative;
  display: inline-block;
  padding: 0px var(--nav-underline-padding);
  text-decoration: none;
}

header #nav-menu .Nav-Link:hover {
  text-shadow: 5px 5px 8px var(--nav-list-shadow);
  cursor: pointer;
}

header #nav-menu .Nav-Link:after {
  position: absolute;
  left: 0px;
  background-color: var(--nav-underline-clr);
  content: '';
  display: block;
  height: .2em;
  margin-top: .2em;
  transition: width .5s;
  width: 0;
}

header #nav-menu .Nav-Link:hover:after {
  width: 100%;
}

@media all and (max-width: 730px) {
  header {
    flex-direction: column;
    padding-top: 20px;
  }

  header #nav-menu {
    justify-content: center;
  }
}
</style>
