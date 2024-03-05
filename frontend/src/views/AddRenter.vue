<template>
    <section id="app" style="font-family: 'Prompt', sans-serif;">
        <NavBar />
        <div class="flex flex-col items-center h-screen mt-14">
            <h1 class="text-4xl mb-6">เพิ่มรายละเอียดผู้เช่า</h1>
            <input type="text" placeholder="เลขห้อง" class="border border-gray-300 rounded-xl p-3 mb-3 w-5/12"/>
            <select class="border border-gray-300 rounded-xl p-3 mb-3 w-5/12" name="" id="">
                <option value="">ห้องเดี่ยว</option>
                <option value="">ห้องเดี่ยวเครื่องปรับอากาศ</option>
                <option value="">ห้องคู่</option>
                <option value="">ห้องคู่เครื่องปรับอากาศ</option>
            </select>
            <input type="text" placeholder="ราคา" class="border border-gray-300 rounded-xl p-3 mb-3 w-5/12"/>
            <input type="text" placeholder="E-mail" class="border border-gray-300 rounded-xl p-3 mb-3 w-5/12"/>
            <input type="text" placeholder="ชื่อผู้เช่า1" class="border border-gray-300 rounded-xl p-3 mb-3 w-5/12"/>
            <input type="text" placeholder="เบอร์โทรผู้เช่า1" class="border border-gray-300 rounded-xl p-3 mb-3 w-5/12"/>
            <input type="text" placeholder="ชื่อผู้เช่า2" class="border border-gray-300 rounded-xl p-3 mb-3 w-5/12"/>
            <input type="text" placeholder="เบอร์โทรผู้เช่า2" class="border border-gray-300 rounded-xl p-3 mb-3 w-5/12"/>
            <button class="bg-[#2E4E73] hover:bg-gray-500 text-white px-4 py-2 rounded">Save</button>
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
