<template>
    <section id="app" style="font-family: 'Prompt', sans-serif;">
        <NavBar />
        <div class="h-full">
            <div class="flex flex-col justify-center items-center overflow-hidden h-[65vh] w-full bg-[url('https://cdn.discordapp.com/attachments/859670322160599051/1212421188853440632/6e716d1046575431_1.png?ex=65f1c639&is=65df5139&hm=32c418af2193fc1cf3eb29baf3aa79f0adce516f73399de231f577b89833b02c&')] bg-cover">
              <p class="text-base text-white">THE BEST <br /></p>
              <p class="text-6xl tracking-widest mt-3 text-white">Dormitory<br /></p>
              <p class="text-base tracking-normal mt-10 indent-20 text-white">
                ระบบจัดการหอพัก สำหรับเจ้าของหอพัก<br />ตัวช่วยบริหารหอพักอย่างมืออาชีพ สะดวกสบาย ครบจบในที่เดียว<br />
              </p>
              <router-link to="Login" class="text-white mt-10 border-white border-2 p-3 hover:text-black hover:bg-gray-500 hover:no-underline">
                  เริ่มใช้งานกันเลย!
              </router-link>
            </div>

            <div class="flex flex-col justify-center items-center tracking-widest ">
              <h1 class="text-3xl font-medium pt-14" style='color: "#2E4E73"'>
                  LUNAR DORMITORY ทำอะไรได้บ้าง?
              </h1>
              <p class="mt-10">
                  ให้การใช้ชีวิตในหอพักสะดวกสบายยิ่งขึ้น เมื่อผู้เช่ามีแอป LUNAR
                  DORMITORY
              </p>
            </div>
        </div>

        <div class="flex justify-center items-center my-10" id="room">
          <img src="../../public/uploads/sofa.png" alt="room" class="object-contain w-[15%]"/>
          <div class="flex flex-col pt-5 pb-5 ml-20 w-[40%]">
            <div class="w-full">
              <h1 class="font-medium text-2xl">ผังห้อง</h1>
              <p class="pt-3">
                ดูสถานะห้องพักได้อย่างครอบคลุม ระบบแสดงทั้งจำนวนชั้น จำนวนห้อง
                นอกจากนี้ยังสามารถดูสถานะทุกห้องในหอพัก อพาร์ทเม้นท์ของคุณได้
                ไม่ว่าจะเป็น ห้องที่ใกล้หมดสัญญา ห้องว่าง–ไม่ว่าง ฯลฯ
                เห็นภาพรวมของธุรกิจ ช่วยลดความผิดพลาดในการปล่อยห้องพัก
                และการต่อสัญญา
              </p>
            </div>
          </div>
        </div>

        <div class="flex justify-center items-center my-10" id="bill">
          <img src="../../public/uploads/bill.png" alt="bill" class="object-contain w-[15%]" />
          <div class="flex flex-col pt-5 pb-5 ml-20 w-[40%]">
            <div class="w-full">
              <h1 class="font-medium text-2xl">บิลค่าเช่า</h1>
              <p class="pt-3">
                ออกใบแจ้งค่าเช่า และส่งบิลไปยังผู้เช่าทุกคนได้ง่ายๆ
                ในรูปแบบออนไลน์ ลดเวลาในการส่งบิลแบบเดิมๆ
                ผู้เช่าสะดวกสบายรับบิลได้ทุกที่ผ่าน App Horganice
                พร้อมออกใบเสร็จค่าห้องพักอัตโนมัติทันที หลังผู้เช่าชำระเรียบร้อย
              </p>
            </div>
          </div>
        </div>

        <div class="flex justify-center items-center my-10" id="dashboard">
          <img src="../../public/uploads/dashboard.png" alt="dashboard" class="object-contain w-[15%]" />
          <div class="flex flex-col pt-5 pb-5 ml-20 w-[40%]">
            <div class="w-full">
              <h1 class="font-medium text-2xl">DashBoard</h1>
              <p class="pt-3">
                วิเคราะห์ผลประกอบการธุรกิจ ทั้งรายรับ-รายจ่าย,
                รายรับค่าเช่ารายเดือน, การเข้า-ออกของผู้เช่า
                นำข้อมูลไปวางแผนการตลาดได้อย่างมีประสิทธิภาพ
                บริหารหอพักให้เติบโตอย่างมั่นคง
              </p>
            </div>
          </div>
        </div>

        <div class="flex justify-center items-center my-10" id="report">
          <img src="../../public/uploads/report.png" alt="room" class="object-contain w-[15%]" />
          <div class="flex flex-col pt-5 pb-5 ml-20 w-[40%]" >
            <div class="w-full">
              <h1 class="font-medium text-2xl">รายงานสรุป</h1>
              <p class="pt-3">ดูภาพรวมรายงานสรุปเรื่องต่างๆ ในแต่ละเดือน เช่น รายงานบิลค่าเช่า, การจองรายเดือน-วัน, ย้ายเข้า-ออก สามารถ export ข้อมูลเป็นไฟล์ excel ได้</p>
            </div>
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