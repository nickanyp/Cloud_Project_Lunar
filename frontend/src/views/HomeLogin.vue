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
                <router-link to="/RegisterDormitory" class="h-12 w-9/12 ">
                    <button class="text-white p-3 rounded-3xl bg-[#2E4E73] hover:bg-gray-500" style="font-family: 'Prompt', sans-serif;">+ ลงทะเบียนหอพัก</button>
                </router-link>
            </div>
        </div>
        <div class='flex flex-col items-center mt-10 mx-20'>
            <div>
                <h1 class='text-3xl font-medium tracking-wide'>หอพัก</h1>
                <p class='mt-5 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec</p>
            </div>
            <div class='grid grid-cols-2 gap-10 mb-10'>
                <router-link to="/Dormitory" class="flex flex-col items-center text-left bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 hover:no-underline hover:shadow-lg">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="../../public/uploads/image.png" alt=""/>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <p class='text-[#2E4E73]'>14/02/2564</p>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#2E4E73]">AJ Park</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">701 ซอย ฉลองกรุง 1 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร 10520</p>
                    </div>
                </router-link>
                <button class="flex flex-col items-center text-left bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="../../public/uploads/image.png" alt=""/>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <p class='text-[#2E4E73]'>15/03/2564</p>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#2E4E73]">กัลยรัตน์</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">539/1 ซ. ถาวรพฤกษ์ เกกีงาม3 ซ. ฉลองกรุง1, ลาดกระบัง, กรุงเทพมหานคร 10520</p>
                    </div>
                </button>
                <button class="flex flex-col items-center text-left bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="../../public/uploads/image.png" alt=""/>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <p class='text-[#2E4E73]'>14/02/2564</p>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#2E4E73]">Room52</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">132/1,132/2,132/3. 132/4 ซอย ลาดกระบัง 52 เขต ลาดกระบัง. กรุงเทพมหานคร 10520</p>
                    </div>
                </button>
                <button class="flex flex-col items-center text-left bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="../../public/uploads/image.png" alt=""/>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <p class='text-[#2E4E73]'>14/02/2564</p>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#2E4E73]">AP House</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">แขวงลาดกระบัง เขตลาดกระบัง, กรุงเทพมหานคร 10520</p>
                    </div>
                </button>
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