<template>
    <section id="app" style="font-family: 'Prompt', sans-serif;">
        <nav class="p-3" style="backgroundColor: #2E4E73; font-family: 'Prompt', sans-serif;">
          <div class="flex flex-row">
              <div class="flex flex-col basis-11/12">
                  <div class="flex flex-row mx-5">
                      <h1 class="text-white text-lg tracking-wider">LUNAR</h1>
                      <img src="../../public/uploads/moon.png" alt="moon" class="mx-2 w-7">
                  </div>
                  <h1 class="text-white text-lg tracking-wider mx-5">DORMITORY</h1>
              </div>
              <div class="flex justify-center content-center items-center w-32 basis-1/12">
                  <router-link to="/">
                    <button class="text-white text-base rounded-full border-2 px-3 py-2 " style="borderColor: #9ABDE3; font-family: 'Prompt', sans-serif;">ออกจากระบบ</button>
                  </router-link>
              </div>
          </div>
        </nav>

        <div class="flex flex-row mt-14 mx-20">
            <div class="basis-5/6">
                <h1 class='text-3xl font-medium tracking-wide mb-5'>สวัสดีคุณ อนัญพร</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec</p>
            </div>
            <div class="flex flex-row mx-10 gap-5 justify-end basis-1/6">
                <div @click="regisDor()" class="h-12 w-9/12 ">
                    <button class="text-white p-3 rounded-3xl bg-[#2E4E73] hover:bg-gray-500" style="font-family: 'Prompt', sans-serif;">+ ลงทะเบียนหอพัก</button>
                </div>
            </div>
        </div>
        <div class='flex flex-col items-center mt-10 mx-20'>
            <div>
                <h1 class='text-3xl font-medium tracking-wide'>หอพัก</h1>
                <p class='mt-5 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec</p>
            </div>
            <div class='grid grid-cols-2 gap-10 mb-10 w-9/12'>
                <div v-for="val in dormitory" :key="val">
                    <div @click="detailDor(val.id)" class="w-full flex flex-col items-center text-left bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 hover:no-underline hover:shadow-lg">
                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="../../public/uploads/image.png" alt=""/>
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#2E4E73]">{{val.name}}</h5>
                            <p class='text-[#2E4E73]'>{{val.phone}}</p>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{val.address}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterBar/>
    </section>
</template>

<script>
// import NavBar from './NavBar.vue';
import FooterBar from './FooterBar.vue'
import axios from "axios";

export default {
    components: {
        // NavBar,
        FooterBar
    },
    data() {
        return {
          dormitory:null,
          userId : this.$route.params.userId
        };
    },
    created() {
      axios.get("http://localhost:3000/myDormitory/" + this.$route.params.userId)
      .then((response) => {
        this.dormitory = response.data.dormitory[0];
        console.log(this.$route.params.userId)
        console.log(response)
      })
      .catch((err) => {
        console.log(err);
      });
    },
    methods: {
        detailDor(id){
            this.$router.push('/Dormitory/'+this.userId+'/'+id)
        },
        regisDor(){
            this.$router.push('/RegisterDormitory/'+this.userId)
        }
    }
}
</script>