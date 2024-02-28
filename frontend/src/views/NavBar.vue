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
                <router-link to="/" class="text-white text-base hover:bg-slate-500 border-3 rounded-3xl hover:no-underline p-3">หน้าแรก</router-link>
                <router-link to="RegisDor" class="text-white text-base hover:bg-slate-500 border-3 rounded-3xl hover:no-underline p-3">ลงทะเบียนหอพัก</router-link>
                <router-link to="#" class="text-white text-base hover:bg-slate-500 border-3 rounded-3xl hover:no-underline p-3">ข้อมูลผู้เช่า</router-link>
                <router-link to="#" class="text-white text-base hover:bg-slate-500 border-3 rounded-3xl hover:no-underline p-3">แจ้งชำระ</router-link>
            </div>

            <div class="flex justify-center content-center items-center w-32">
                <router-link to="Login">
                  <button class="text-white text-base rounded-full border-2 px-3 py-2 " style="borderColor: #9ABDE3; font-family: 'Prompt', sans-serif;">เข้าสู่ระบบ</button>
                </router-link>
            </div>
    
        </div>
      </nav>
</template>