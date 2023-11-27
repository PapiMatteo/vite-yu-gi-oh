<script>
import axios from "axios";
import AppHeader from './components/AppHeader.vue';
import {store} from './store.js';
import AppContent from "./components/AppContent.vue";



export default {
    data() {
        return {
          store,
        };
    },
    created() {
      this.store.loading = true;
      axios
        .get(this.store.apiUrl)
        .then((resp) => {
          this.store.cardsList = resp.data
        })
    },
    components: { AppHeader, AppContent }
}

</script>

<template>
  <AppHeader/>
  <AppContent/>
  
</template>

<style lang="scss">
@use './style/general.scss';


</style>
