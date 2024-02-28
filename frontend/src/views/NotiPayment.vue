<template>
    <section id="app" style="font-family: 'Prompt', sans-serif;">
        <NavBar />
        <div class='flex flex-col h-full items-center font-sans'>
            <div class='w-9/12 flex flex-row m-8'>
                <div class='basis-5/6 text-4xl'>ชื่อหอพัก</div>
                <div class='basis-1/6 text-lg items-end justify-end'>
                    <select class="border rounded-xl border-solid border-gray-300 p-1" style="font-family: 'Prompt', sans-serif;" name="" id="">
                        <option value="">เดือน</option>
                        <option value="">มกราคม</option>
                        <option value="">กุมภาพันธ์</option>
                        <option value="">มีนาคม</option>
                    </select>
                </div>
            </div>
            <table class='w-9/12 rounded-xl text-center justify-center items-center'>
                <tr class='border-gray-300 border-2'>
                    <th class='p-2 border-gray-300 border-2 w-2/12'>เลขห้อง</th>
                    <th class='p-2 border-gray-300 border-2'>หน่วยน้ำ</th>
                    <th class='p-2 border-gray-300 border-2'>หน่วยไฟ</th>
                    <th class='p-2 border-gray-300 border-2 w-1/12'>แจ้งชำระ</th>
                    <th class='p-2 border-gray-300 border-2 w-1/12'>สถานะ</th>
                    <th class='p-2 border-gray-300 border-2 w-2/12'>ยืนยันการชำระเงิน</th>
                </tr>
                
            </table>    
        </div>
    </section>
</template>

<script>
import NavBar from './NavBar.vue';

export default {
  components: {
    NavBar
  }
}
</script>

