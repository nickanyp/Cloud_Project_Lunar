<template>
    <section id="app" style="font-family: 'Prompt', sans-serif;">
        <NavBar />
        <div class="w-screen h-screen flex justify-center items-center">
            <p class="text-3xl">Dormitory</p>
        </div>
    </section>
</template>

<script>
import NavBar from './NavBar.vue';
// import FooterBar from './FooterBar.vue'

export default {
  components: {
    NavBar,
    // FooterBar
  }
}
</script>

