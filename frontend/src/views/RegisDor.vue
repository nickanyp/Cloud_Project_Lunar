@ -0,0 +1,98 @@
<template>
    <section id="app" style="font-family: 'Prompt', sans-serif;">
        <NavBar />
        <div>
            <div class="flex flex-row w-full mt-10">
                <h5 class="text-3xl font-medium tracking-wide mx-10 basis-3/4">ลงทะเบียนหอพัก</h5>
                <div class="flex flex-row mx-10 gap-5 justify-end basis-1/4">
                    <button class="text-white w-10/12 font-medium p-3 rounded-3xl bg-[#2E4E73] hover:bg-gray-500">บันทึก</button>
                    <button class="w-10/12 border-2 font-medium p-2 rounded-3xl border-[#2E4E73] text-[#2E4E73]"> ยกเลิก</button>
                </div>
            </div>
            
            <div class="flex flex-col mb-5 mt-5 mx-10">
                <!-- <h1 class="font-medium text-xl">ข้อมูลหอพักทั่วไป</h1> -->
                <div>
                    <p class=" mb-3 font-medium text-lg">ชื่อหอพัก :</p>
                    <input class="border-2 border-gray rounded-lg p-2 w-1/4 shadow-lg">
                </div>
            </div>
            <div class="flex flex-col mb-5 mx-10">
                <h1 class=" mb-3 font-medium text-lg">ที่อยู่ :</h1>
                <div class="grid grid-cols-3">
                    <div>
                        <p class="mt-3 mb-3">เลขที่/ถนน/ซอย/อาคาร</p>
                        <input class="border-2 border-gray rounded-lg p-2 w-10/12 shadow-lg">
                    </div>
                    <div>
                        <p class="mt-3 mb-3">จังหวัด</p>
                        <input class="border-2 border-gray rounded-lg p-2 w-10/12 shadow-lg">
                    </div>
                    <div>
                        <p class="mt-3 mb-3">เขต/อำเภอ</p>
                        <input class="border-2 border-gray rounded-lg p-2 w-10/12 shadow-lg">
                    </div>
                    <div>
                        <p class="mt-3 mb-3">แขวง/ตำบล</p>
                        <input class="border-2 border-gray rounded-lg p-2 w-10/12 shadow-lg">
                    </div>
                    <div>
                        <p class="mt-3 mb-3">รหัสไปรษณีย์</p>
                        <input class="border-2 border-gray rounded-lg p-2 w-10/12 shadow-lg">
                    </div>
                    <div>
                        <p class="mt-3 mb-3">เบอร์โทรศัพท์</p>
                        <input class="border-2 border-gray rounded-lg p-2 w-10/12 shadow-lg">
                    </div>
                </div>
            </div>
            <div class="flex flex-col mb-5 mt-5 mx-10">
                <div class="grid grid-cols-3">
                    <div>
                        <h1 class="mt-3 mb-3 font-medium">วันที่ทำบิลค่าเช่า :</h1>
                        <input class="border-2 border-gray rounded-lg p-2 w-10/12 shadow-lg">
                    </div>
                    <div>
                        <h1 class="mt-3 mb-3 font-medium">วันสิ้นสุดการชำระเงิน :</h1>
                        <input class="border-2 border-gray rounded-lg p-2 w-10/12 shadow-lg">
                    </div>
                    <div>
                        <h1 class="mt-3 mb-3 font-medium">ประเภทห้อง :</h1>
                        <input class="border-2 border-gray rounded-lg p-2 w-10/12 shadow-lg">
                    </div>
                    <div>
                        <h1 class="mt-3 mb-3 font-medium">จำนวนห้อง :</h1>
                        <input class="border-2 border-gray rounded-lg p-2 w-10/12 shadow-lg">
                    </div>
                    <div>
                        <h1 class="mt-3 mb-3 font-medium">ค่าห้อง :</h1>
                        <input class="border-2 border-gray rounded-lg p-2 w-10/12 shadow-lg">
                    </div>
                    <div>
                        <h1 class="mt-3 mb-3 font-medium">ค่าน้ำ (/หน่วย) : </h1>
                        <input class="border-2 border-gray rounded-lg p-2 w-10/12 shadow-lg">
                    </div>
                    <div>
                        <h1 class="mt-3 mb-3 font-medium">ค่าไฟ (/หน่วย) :</h1>
                        <input class="border-2 border-gray rounded-lg p-2 w-10/12 shadow-lg">
                    </div>
                    <div>
                        <h1 class="mt-3 mb-3 font-medium">ค่าปรับ :</h1>
                        <input class="border-2 border-gray rounded-lg p-2 w-10/12 shadow-lg">
                    </div>
                </div>
            </div>
        </div>
        <FooterBar/>
    </section>
</template>

<script>
import NavBar from './NavBar.vue';
import FooterBar from './FooterBar.vue'

export default {
  components: {
    NavBar,
    FooterBar
  }
}
</script>