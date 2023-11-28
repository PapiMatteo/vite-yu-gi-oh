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
      this.getCards()
    },
    components: {
      AppHeader,
      AppContent,
      AppFilter
    },
    methods: {
      getCards(){
        this.store.loading = true;
      axios
        .get(this.store.apiUrl, {
          params: {
            num: 50,
            offset: 0
          }
        })
        .then((resp) => {
          this.store.cardsList = resp.data;
          this.store.loading = false;
        });
      },
      handleSearch() {
        if(this.store.searchText.length > 0){
          axios.get(this.store.apiUrl, {
            params: {
            archetype: this.store.searchText,
            num: 50,
            offset: 0
            }
          }).then((resp) => {
          this.store.cardsList = resp.data;
          })
        } else {
          this.getCards()
        }
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
