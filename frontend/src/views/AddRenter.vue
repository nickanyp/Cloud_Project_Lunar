<template>
    <section id="app" style="font-family: 'Prompt', sans-serif;">
        <NavBar />
        <div class="container mx-auto my-auto p-6 flex flex-col h-screen w-full items-center">
            <div class="w-3/5 bg-slate-200 rounded-xl mt-5 p-5">
                <h1 class="text-2xl font-bold mb-6">Room 101</h1>
                <div class="grid grid-cols-2 gap-4 mb-4 ml-10">
                    <div>
                        <p class="mb-2">
                            <span class="font-bold">เลขห้อง:</span> {roomData.num}
                        </p>
                        <p class="mb-2">
                            <span class="font-bold">ชื่อผู้เช่า1:</span> {roomData.name1}
                        </p>
                        <p class="mb-2">
                            <span class="font-bold">ชื่อผู้เช่า2:</span> {roomData.name2}
                        </p>
                        </div>
                        <div>
                        <p class="mb-2">
                            <span class="font-bold">ค่าน้ำ:</span> {roomData.water} หน่วย
                        </p>
                        <p class="mb-2">
                            <span class="font-bold">ค่าไฟ:</span> {roomData.fire} หน่วย
                        </p>
                        <p class="mb-2">
                            <span class="font-bold">ราคาห้อง:</span> {roomData.price} บาท
                        </p>
                    </div>
                </div>
                <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleSave}>Save</button>
            </div>
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
