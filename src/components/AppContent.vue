<script>
import { store } from '../store';
import AppCard from './AppCard.vue';
import AppLoader from './AppLoader.vue';
import AppStats from './AppStats.vue';

export default {
    data(){
        return {
            store
        }
    },
    components: {
    AppCard,
    AppLoader,
    AppStats
}
}
</script>

<template>
    <div class="wrapper mt-5">
        <div class="container pt-5">
            <div class="content-top ">
                <AppStats />
            </div>
            <AppLoader v-if="store.loading"/>
            <div class="row row-cols-5 g-4" v-else>
                <div class="col" v-for="card in store.cardsList.data">
                    <AppCard  :card="card"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.wrapper {
    width: 80%;
    margin: 0 auto;
    background-color: white;

    .container {
        .content-top {
            background-color: #212529;
            color: white;
            font-size: 2rem;
            padding-top: 10px;
            height: 70px;
        }
    }
}

</style>