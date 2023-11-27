<script>
export default {
    props: {
        card: Object,
    }
}
</script>

<template>
    <div class="ms_card">
        <img :src="card.card_images[0].image_url" alt="">
        <h2 class="text-center">{{ card.name }}</h2>
        <p class="text-center">{{ card.archetype }}</p>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
.ms_card {
    // padding-bottom: 4rem;
    min-height: 550px;
    color: $text-color;
    background-color: $primary-bg-color;
    img {
    width: 100%;
    }
    p {
        color: black;
        font-size: 2rem;
    }
}



</style>