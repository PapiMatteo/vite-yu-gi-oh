import { reactive } from "vue";

export const store = reactive({
    cardsList: [],
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    loading: false ,
    searchText: '',
});