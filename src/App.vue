<script>
import axios from "axios";
import AppHeader from './components/AppHeader.vue';
import {store} from './store.js';
import AppContent from "./components/AppContent.vue";
import AppFilter from "./components/AppFilter.vue";

export default {
    data() {
        return {
          store,
        };
    },
    created() {
      this.store.loading = true;
      axios
        .get(this.store.apiUrl, {
          params: {
            num: 20,
            offset: 0
          }
        })
        .then((resp) => {
          this.store.cardsList = resp.data;
          this.store.loading = false;
        });
    },
    components: {
      AppHeader,
      AppContent,
      AppFilter
    },
    methods: {
      handleSearch() {
        axios.get(this.store.apiUrl, {
          params: {
            archetype: this.store.searchText,
            num: 20,
            offset: 0
          }
        }).then((resp) => {
          this.store.cardsList = resp.data;
        })
      }
    }
}

</script>

<template>
  
  <AppHeader/>
  <AppFilter @searchSelected="handleSearch"/>
  <AppContent/>

</template>

<style lang="scss">
@use './style/general.scss';

</style>
