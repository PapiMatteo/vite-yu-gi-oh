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
    <div class="container">
        <p>Find {{ store.cardsList.data.length }} card</p>
    </div>
</template>