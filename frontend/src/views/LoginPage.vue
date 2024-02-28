<template>
    <section id="app" style="font-family: 'Prompt', sans-serif;">
        <div class="flex">
            <div class="flex flex-col w-1/2 h-screen justify-center items-center">
                <div class="flex flex-row">
                    <h1 class="text-xl font-semibold px-2" style='color: #2E4E73'>LUNAR</h1>
                    <img src="../../public/uploads/moon_dark.png" alt="moon" width="30"/>
                </div>
                <h1 class="text-xl font-semibold mb-5" style='color: #2E4E73'>DORMITORY</h1>

                <div class="relative mb-5 w-5/12">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <input placeholder="อีเมล" class="rounded-xl border-gray-200 border-2 pt-2 pb-2 pl-10 placeholder-gray-500 w-full shadow-xl"/>
                </div>

                <div class="relative mb-5 w-5/12">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    <input placeholder="รหัสผ่าน" class="rounded-xl border-gray-200 border-2 pt-2 pb-2 pl-10 placeholder-gray-500 w-full shadow-xl"/>
                </div>

                <router-link to="/" class="rounded-xl p-2 mt-3 mb-3 w-72 text-white bg-[#2E4E73] hover:bg-[#1A314C] text-center" >
                    เข้าสู่ระบบ
                </router-link>
                <router-link to="Register" class="m-5 underline text-sm font-medium text-[#2E4E73]">
                    ยังไม่มีบัญชี?
                </router-link>
            </div>

            <div class="w-1/2 h-screen bg-gray-300">
                <img src="../../public/uploads/image.png" alt="room" class="object-cover w-full h-full"/>
            </div>
        </div>
    </section>
</template>
