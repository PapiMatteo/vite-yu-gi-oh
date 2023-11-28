<script>
import { store } from '../store';

export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container pt-5">
        <select name="" id="" v-model="store.searchText" @change="$emit('searchSelected')">
            <option value=""></option>
            <option value="Alien">Alien</option>
            <option value="Ally of Justice">Ally of Justice</option>
            <option value="Ancient Gear">Ancient Gear</option>
        </select>
    </div>
    
</template>