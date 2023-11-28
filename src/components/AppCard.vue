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
        <p class="text-center">{{ card.archetype ? card.archetype : 'Nessun Archetipo' }}</p>      
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
.ms_card {
    color: $text-color;
    background-color: $primary-bg-color;
    height: 100%;
    img {
    width: 100%;
    display: block;
    }
    p{
        color: black;
        font-size: 2rem;
    }
    
}



</style>