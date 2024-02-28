<template>
    <section id="app" style="font-family: 'Prompt', sans-serif;">
        <NavBar />
        <div class='mt-20 mx-20'>
            <h1 class='text-3xl font-medium tracking-wide mb-5'>สวัสดีคุณ อนัญพร</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec</p>
        </div>
        <div class='flex flex-col items-center mt-10 mx-20'>
            <div>
                <h1 class='text-3xl font-medium tracking-wide'>หอพัก</h1>
                <p class='mt-5 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec</p>
            </div>
            <div class='grid grid-cols-2 gap-10 mb-10'>
                <button class="flex flex-col items-center text-left bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="../../public/uploads/image.png" alt=""/>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <p class='text-[#2E4E73]'>14/02/2564</p>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#2E4E73]">AJ Park</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">701 ซอย ฉลองกรุง 1 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร 10520</p>
                    </div>
                </button>
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