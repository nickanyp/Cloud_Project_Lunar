<template>
    <section id="app" style="font-family: 'Prompt', sans-serif;">
        <NavBar />
        <div class='flex flex-col h-full items-center font-sans'>
            <div class='w-9/12 flex flex-row m-8'>
                <div class='basis-5/6 text-4xl'>รายละเอียดผู้เช่า</div>
                <div class='basis-1/6 text-lg items-end justify-end'>
                    <router-link to="/RegisterDormitory" class="flex justify-end hover:no-underline text-base">
                        <button class="h-12 text-center text-white p-3 rounded-3xl bg-[#2E4E73] hover:bg-gray-500 hover:no-underline">+ เพิ่มผู้เช่า</button>
                    </router-link>
                </div>
            </div>
            <table class='w-9/12 rounded-xl text-center justify-center items-center'>
                <tr class='border-gray-300 border-2'>
                    <th class='p-2 border-gray-300 border-2 w-2/12'>เลขห้อง</th>
                    <th class='p-2 border-gray-300 border-2 w-2/12'>ประเภทห้อง</th>
                    <th class='p-2 border-gray-300 border-2'>ชื่อผู้เช่า1</th>
                    <th class='p-2 border-gray-300 border-2 '>ชื่อผู้เช่า2</th>
                    <th class='p-2 border-gray-300 border-2 w-1/12'>แก้ไข</th>
                    <th class='p-2 border-gray-300 border-2 w-1/12'>ลบ</th>
                </tr>
                
            </table>    
        </div>
        <!-- <FooterBar/> -->
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

