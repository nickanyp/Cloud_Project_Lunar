<template>
    <section id="app" style="font-family: 'Prompt', sans-serif;">
        <nav class="p-3" style="backgroundColor: #2E4E73; font-family: 'Prompt', sans-serif;">
          <div class="flex flex-row">
              <div class="flex flex-col basis-11/12">
                  <div class="flex flex-row mx-5">
                      <h1 class="text-white text-lg tracking-wider">LUNAR</h1>
                      <img src="../../public/uploads/moon.png" alt="moon" class="mx-2 w-7">
                  </div>
                  <h1 class="text-white text-lg tracking-wider mx-5">DORMITORY</h1>
              </div>
              <div class="flex justify-center content-center items-center w-32 basis-1/12">
                  <router-link to="/">
                    <button class="text-white text-base rounded-full border-2 px-3 py-2 " style="borderColor: #9ABDE3; font-family: 'Prompt', sans-serif;">ออกจากระบบ</button>
                  </router-link>
              </div>
          </div>
        </nav>
        <form>
            <div class="flex flex-row w-full mt-10">
                <h5 class="text-3xl font-medium tracking-wide mx-10 basis-3/4">ลงทะเบียนหอพัก</h5>
                <div class="flex flex-row mx-10 gap-5 justify-end basis-1/4">
                    <button class="text-white w-full font-medium p-3 rounded-3xl bg-[#2E4E73] hover:bg-gray-500">ยืนยัน</button>
                    <button @click="$router.push('/HomeLogin')" class=" border-2 w-full font-medium p-2 rounded-3xl border-[#2E4E73] text-[#2E4E73]"> ยกเลิก</button>
                    
                </div>
            </div>
            
            <div class="flex flex-col mb-5 mt-5 mx-10">
                <!-- <h1 class="font-medium text-xl">ข้อมูลหอพักทั่วไป</h1> -->
                <div>
                    <p class=" mb-3 font-medium text-lg">ชื่อหอพัก :</p>
                    <input type="text" v-model="name" class="border-2 border-gray rounded-lg p-2 w-1/4 shadow-lg">
                </div>
            </div>
            <div class="flex flex-col mb-5 mx-10">
                <h1 class=" mb-3 font-medium text-lg">ที่อยู่ :</h1>
                <div class="grid grid-cols-3">
                    <div>
                        <p class="mt-3 mb-3">เลขที่/ถนน/ซอย/อาคาร</p>
                        <input type="text" v-model="address" class="border-2 border-gray rounded-lg p-2 w-10/12 shadow-lg">
                    </div>
                    <div>
                        <p class="mt-3 mb-3">จังหวัด</p>
                        <input type="text" v-model="province" class="border-2 border-gray rounded-lg p-2 w-10/12 shadow-lg">
                    </div>
                    <div>
                        <p class="mt-3 mb-3">เขต/อำเภอ</p>
                        <input type="text" v-model="district" class="border-2 border-gray rounded-lg p-2 w-10/12 shadow-lg">
                    </div>
                    <div>
                        <p class="mt-3 mb-3">แขวง/ตำบล</p>
                        <input type="text" v-model="parish" class="border-2 border-gray rounded-lg p-2 w-10/12 shadow-lg">
                    </div>
                    <div>
                        <p class="mt-3 mb-3">รหัสไปรษณีย์</p>
                        <input type="text" v-model="post" class="border-2 border-gray rounded-lg p-2 w-10/12 shadow-lg">
                    </div>
                    <div>
                        <p class="mt-3 mb-3">เบอร์โทรศัพท์</p>
                        <input type="text" v-model="phone" class="border-2 border-gray rounded-lg p-2 w-10/12 shadow-lg">
                    </div>
                </div>
            </div>
            <div class="flex flex-col mb-5 mt-5 mx-10">
                <div class="grid grid-cols-3">
                    <div>
                        <h1 class="mt-3 mb-3 font-medium">วันที่ทำบิลค่าเช่า :</h1>
                        <input type="text" v-model="due_date" class="border-2 border-gray rounded-lg p-2 w-10/12 shadow-lg">
                    </div>
                    <div>
                        <h1 class="mt-3 mb-3 font-medium">จำนวนห้อง :</h1>
                        <input type="text" v-model="room" class="border-2 border-gray rounded-lg p-2 w-10/12 shadow-lg">
                    </div>
                    <div>
                        <h1 class="mt-3 mb-3 font-medium">จำนวนชั้น :</h1>
                        <input type="text" v-model="floor" class="border-2 border-gray rounded-lg p-2 w-10/12 shadow-lg">
                    </div>
                    <div>
                        <h1 class="mt-3 mb-3 font-medium">ค่าน้ำ (/หน่วย) : </h1>
                        <input type="text" v-model="water" class="border-2 border-gray rounded-lg p-2 w-10/12 shadow-lg">
                    </div>
                    <div>
                        <h1 class="mt-3 mb-3 font-medium">ค่าไฟ (/หน่วย) :</h1>
                        <input type="text" v-model="light" class="border-2 border-gray rounded-lg p-2 w-10/12 shadow-lg">
                    </div>
                </div>
            </div>
        </form>
    </section>
</template>

<script>
import axios from "axios";
import Swal from 'sweetalert2'

export default {
    data() {
        return {
          name: '',
          address: '',
          province: '',
          district: '',  
          parish: '',
          post: '',
          phone: '',
          due_date: '',
          room: '',
          floor: '',
          water: '',
          light: '',
        };
    },
    methods: {
        regis(){
            let formData = new FormData();
            formData.append("name", this.name);
            formData.append("address", this.address);
            formData.append("province", this.province);
            formData.append("district", this.district);
            formData.append("parish", this.parish);
            formData.append("post", this.post);
            formData.append("phone", this.phone);
            formData.append("due_date", this.due_date);
            formData.append("room", this.room);
            formData.append("floor", this.floor);
            formData.append("water", this.water);
            formData.append("light", this.light);
            
            for (const value of formData.values()){
                console.log(value);
            }

            axios.post("", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                console.log(response.data)
                axios.post("")
                .then((response) => {
                    console.log(response.data)
                    Swal.fire({
                        title: 'Success',
                        text: 'ลงทะเบียนสำเร็จ',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    }).then(() => {
                        this.$router.push('/HomeLogin');
                    }   
                    )
                })
                .catch((err) => {
                    console.log(err);
                });
            })
            .catch((err) => {
                console.log(err);
            });
        },
    }
}
  
</script>
