<template>
    <section id="app" style="font-family: 'Prompt', sans-serif;">
        <div class="flex">
            <div class="w-1/2 h-screen bg-gray-300">
                <img src="../../public/uploads/image.png" alt="room" class="object-cover w-full h-full"/>
            </div>

            <form class="flex flex-col w-1/2 h-screen justify-center items-center">
                <router-link to="/" class="hover:no-underline">
                    <div class="flex flex-row">
                        <h1 class="text-xl font-semibold px-2" style="color: #2E4E73">LUNAR</h1> 
                        <img src="../../public/uploads/moon_dark.png" alt="moon" width="30"/>
                    </div>
                    <h1 class="text-xl font-semibold mb-5" style="color: #2E4E73">DORMITORY</h1>
                </router-link>
                <div class="relative mb-3 w-5/12">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                    </svg>
                    <input v-model="fname" type="text" placeholder="ชื่อจริง" class="rounded-xl border-gray-300 border-2 pt-2 pb-2 pl-10 placeholder-gray-500 w-full"/>
                </div>
                <div class="relative mb-3 w-5/12">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                    </svg>
                    <input v-model="lname" type="text" placeholder="นามสกุล" class="rounded-xl border-gray-300 border-2 pt-2 pb-2 pl-10 placeholder-gray-500 w-full"/>
                </div>
                <div class="relative mb-3 w-5/12">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <input v-model="email" type="text" placeholder="อีเมล" class="rounded-xl border-gray-300 border-2 pt-2 pb-2 pl-10 placeholder-gray-500 w-full"/>
                </div>

                <div class="relative mb-3 w-5/12">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    <input v-model="password" type="text" placeholder="รหัสผ่าน" class="rounded-xl border-gray-300 border-2 pt-2 pb-2 pl-10 placeholder-gray-500 w-full"/>
                </div>
                <div class="relative mb-3 w-5/12">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>
                    </svg>

                    <input v-model="phone" type="text" placeholder="เบอร์โทร" class="rounded-xl border-gray-300 border-2 pt-2 pb-2 pl-10 placeholder-gray-500 w-full"/>
                </div>

                <router-link to="" class="rounded-xl p-2 mt-3 w-5/12 text-white text-center hover:no-underline bg-[#2E4E73] hover:bg-[#1A314C]">
                    <input type="submit" value="ลงทะเบียน" @click="regis()">
                </router-link>
                <router-link to="Login" class="m-5 underline text-sm font-medium text-[#2E4E73]">กลับสู่หน้าเข้าสู่ระบบ</router-link>
            </form>
        </div>
    </section>
</template>

<script>
import axios from "axios";
import Swal from 'sweetalert2'

export default {
    data() {
        return {
          fname: '',
          lname: '',
          email: '',
          password: '',  
          phone: ''
        };
    },
    methods: {
        regis(){
            let formData = new FormData();
            formData.append("fname", this.fname);
            formData.append("lname", this.lname);
            formData.append("email", this.email);
            formData.append("password", this.password);
            formData.append("phone", this.phone);
            
            for (const value of formData.values()){
                console.log(value);
            }

            axios.post("http://localhost:3000/RegisUser", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                console.log(response)
                Swal.fire({
                    position: 'top-start',
                    icon: 'success',
                    title: 'สร้างบัญชีผู้ใช้สำเร็จ',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    this.$router.push('/Login')
                })
            }).catch((err) => {
                console.log(err)
            })
        },
    }
}
  
</script>