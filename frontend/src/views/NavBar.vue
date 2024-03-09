<template>
    <nav class="p-3" style="backgroundColor: #2E4E73; font-family: 'Prompt', sans-serif;">
        <div class=" flex flex-row">

            <div class="flex flex-col">
                <div class="flex flex-row mx-5">
                    <h1 class="text-white text-lg tracking-wider">LUNAR</h1>
                    <img src="../../public/uploads/moon.png" alt="moon" class="mx-2 w-7">
                </div>
                <h1 class="text-white text-lg tracking-wider mx-5">DORMITORY</h1>
            </div>
            <div class="flex flex-row gap-10 justify-center content-center items-center w-full ">
                <div @click="homeLogin()" class="text-white border-2 border-white text-base hover:bg-slate-500 border-3 rounded-3xl hover:no-underline p-3">หอพักทั้งหมด</div>
                <div @click="dorPage()" class="text-white text-base hover:bg-slate-500 border-3 rounded-3xl hover:no-underline p-3">ข้อมูลหอพัก</div>
                <div @click="renter()" class="text-white text-base hover:bg-slate-500 border-3 rounded-3xl hover:no-underline p-3">ข้อมูลผู้เช่า</div>
                <div @click="notiPay()" class="text-white text-base hover:bg-slate-500 border-3 rounded-3xl hover:no-underline p-3">แจ้งชำระ</div>
            </div>

            <div class="flex justify-center content-center items-center w-40">
                <router-link to="/">
                  <button class="text-white text-base rounded-full border-2 px-3 py-2 " style="borderColor: #9ABDE3; font-family: 'Prompt', sans-serif;">ออกจากระบบ</button>
                </router-link>
            </div>
    
        </div>
      </nav>
</template>

<script>

export default {
    data() {
        return {
            userId : this.$route.params.userId,
            dorId : this.$route.params.dorId
        };
    },
    methods: {
        homeLogin(){
            this.$router.push('/HomeLogin/'+this.userId)
        },
        dorPage(){
            this.$router.push('/Dormitory/'+this.userId+'/'+this.dorId)
        },
        renter(){
            this.$router.push('/Renter/'+this.userId+'/'+this.dorId)
        },
        notiPay(){
            this.$router.push('/NotiPayment/'+this.userId+'/'+this.dorId)
        }
    }
}
</script>