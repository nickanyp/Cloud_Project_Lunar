<template>
    <section id="app" style="font-family: 'Prompt', sans-serif;">
        <NavBar />
        <div class="flex flex-col items-center h-screen mt-14">
            <h1 class="text-4xl mb-6">รายละเอียดผู้เช่า</h1>
            <div class="border border-gray-300 rounded-xl p-3 mb-3 w-5/12">{{renter[0].num_room}}</div>
            <div class="border border-gray-300 rounded-xl p-3 mb-3 w-5/12">{{renter[0].type}}</div>
            <div class="border border-gray-300 rounded-xl p-3 mb-3 w-5/12">{{renter[0].price}}</div>
            <div class="border border-gray-300 rounded-xl p-3 mb-3 w-5/12">{{renter[0].name1}}</div>
            <div class="border border-gray-300 rounded-xl p-3 mb-3 w-5/12">{{renter[0].phone1}}</div>
            <div class="border border-gray-300 rounded-xl p-3 mb-3 w-5/12">{{renter[0].name2}}</div>
            <div class="border border-gray-300 rounded-xl p-3 mb-3 w-5/12">{{renter[0].phone2}}</div>
            <button @click="renterAll()" class="bg-[#2E4E73] hover:bg-gray-500 text-white px-4 py-2 rounded">ปิด</button>
        </div>
        <FooterBar/>
    </section>
</template>

<script>
import NavBar from './NavBar.vue';
import FooterBar from './FooterBar.vue'
import axios from "axios";

export default {
    components: {
        NavBar,
        FooterBar
    },
    data() {
        return {
          renter:null,
          userId : this.$route.params.userId,
          dorId : this.$route.params.dorId,
          rentId: this.$route.params.rentId
        };
    },
    created() {
      axios.get("http://localhost:3000/detailRenter/" + this.userId+'/'+this.dorId+'/'+this.rentId)
      .then((response) => {
        this.renter = response.data.renter[0];
        console.log(this.renter)
      })
      .catch((err) => {
        console.log(err);
      });
    },
    methods: {
        renterAll(){
            this.$router.push('/Renter/'+this.userId+'/'+this.dorId)
        },
    }
}
</script>
