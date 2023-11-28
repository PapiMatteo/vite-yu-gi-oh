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
    <div class="container" v-if="store.cardsList.data">
        <span>Find {{ store.cardsList.data.length}} cards</span>
    </div>
</template>