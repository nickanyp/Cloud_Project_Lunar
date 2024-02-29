<template>
    <section id="app" style="font-family: 'Prompt', sans-serif;">
        <NavBar />
        <div class="flex flex-row mt-14 mx-20">
            <div class="basis-5/6">
                <h1 class='text-5xl font-medium tracking-wide mb-5'>AJ Park</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec</p>
            </div>
            <div class="flex flex-row mx-10 gap-5 justify-end basis-1/6">
                <router-link to="/EditDormitory" class="h-12 w-8/12 flex justify-end">
                    <button class="text-white font-medium p-3 rounded-3xl bg-[#2E4E73] hover:bg-gray-500">แก้ไขข้อมูล</button>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";
import NavBar from './NavBar.vue';
// import FooterBar from './FooterBar.vue'

export default {
  components: {
    NavBar,
    // FooterBar
  },
  data() {
        return {
          dormitory:null
        };
    },
    created() {
      axios.get("")
      .then((response) => {
        this.dormitory = response.data;
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
    },
}
</script>

