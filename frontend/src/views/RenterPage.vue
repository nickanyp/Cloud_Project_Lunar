<template>
    <section id="app" style="font-family: 'Prompt', sans-serif;">
        <NavBar />
        <div class='flex flex-col h-full items-center font-sans'>
            <div class='w-9/12 flex flex-row m-8'>
                <div class='basis-5/6 text-4xl'>รายละเอียดผู้เช่า</div>
                <div class='basis-1/6 text-lg items-end justify-end'>
                    <div @click="addRenter()" class="flex justify-end hover:no-underline text-base">
                        <button class="h-12 text-center text-white p-3 rounded-3xl bg-[#2E4E73] hover:bg-gray-500 hover:no-underline">+ เพิ่มผู้เช่า</button>
                    </div>
                </div>
            </div>
            <table class='w-9/12 rounded-xl text-center justify-center items-center'>
                <tr class='border-gray-300 border-2'>
                    <th class='p-2 border-gray-300 border-2 w-1/12'>เลขห้อง</th>
                    <th class='p-2 border-gray-300 border-2 w-2/12'>ประเภทห้อง</th>
                    <th class='p-2 border-gray-300 border-2'>ชื่อผู้เช่า1</th>
                    <th class='p-2 border-gray-300 border-2 '>ชื่อผู้เช่า2</th>
                    <th class='p-2 border-gray-300 border-2 w-1/12'>รายละเอียด</th>
                    <th class='p-2 border-gray-300 border-2 w-1/12'>แก้ไข</th>
                    <th class='p-2 border-gray-300 border-2 w-1/12'>ลบ</th>
                </tr>
                <tr v-for="val in renter" :key="val">
                    <td class="border-2 border-gray-300 px-4 py-2">{{val.num_room}}</td>
                    <td class="border-2 border-gray-300 px-4 py-2">{{val.type}}</td>
                    <td class="border-2 border-gray-300 px-4 py-2">{{val.name1}}</td>
                    <td class="border-2 border-gray-300 px-4 py-2">{{val.name2}}</td>
                    <td class="border-2 border-gray-300 px-4 py-2">
                        <div class="cursor-pointer underline" @click="detailRenter(val.id)">ดู</div>
                    </td>
                    <td class="border-2 border-gray-300 px-4 py-2">
                        <div class="w-full flex justify-center cursor-pointer" @click="editRenter(val.id)">
                            <svg class="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                            </svg>
                        </div>
                    </td>
                    <td class="border-2 border-gray-300 px-4 py-2">
                        <div class="w-full flex justify-center cursor-pointer" @click="delRenter(val.id)">
                            <svg class="feather feather-edit"  height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="24" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M432 80h-82.38l-34-56.75C306.1 8.827 291.4 0 274.6 0H173.4C156.6 0 141 8.827 132.4 23.25L98.38 80H16C7.125 80 0 87.13 0 96v16C0 120.9 7.125 128 16 128H32v320c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V128h16C440.9 128 448 120.9 448 112V96C448 87.13 440.9 80 432 80zM171.9 50.88C172.9 49.13 174.9 48 177 48h94c2.125 0 4.125 1.125 5.125 2.875L293.6 80H154.4L171.9 50.88zM352 464H96c-8.837 0-16-7.163-16-16V128h288v320C368 456.8 360.8 464 352 464zM224 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S208 183.2 208 192v208C208 408.8 215.2 416 224 416zM144 416C152.8 416 160 408.8 160 400V192c0-8.844-7.156-16-16-16S128 183.2 128 192v208C128 408.8 135.2 416 144 416zM304 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S288 183.2 288 192v208C288 408.8 295.2 416 304 416z"/>
                            </svg>
                        </div>
                    </td>
                </tr>
            </table>    
        </div>
        <FooterBar/>
    </section>
</template>

<script>
import NavBar from './NavBar.vue';
import FooterBar from './FooterBar.vue'
import axios from "axios";
import Swal from 'sweetalert2'

export default {
    components: {
        NavBar,
        FooterBar
    },
    data() {
        return {
          renter:null,
          userId : this.$route.params.userId,
          dorId : this.$route.params.dorId
        };
    },
    created() {
      axios.get("http://localhost:3000/Renter/" + this.userId+'/'+this.dorId)
      .then((response) => {
        this.renter = response.data.renter[0];
        console.log(this.renter)
      })
      .catch((err) => {
        console.log(err);
      });
    },
    methods: {
        detailRenter(id){
            this.$router.push('/RenterDetail/'+this.userId+'/'+this.dorId+'/'+id)
        },
        addRenter(){
            this.$router.push('/AddRenter/'+this.userId+'/'+this.dorId)
        },
        editRenter(id){
            this.$router.push('/EditRenter/'+this.userId+'/'+this.dorId+'/'+id)
        },
        delRenter(id){
            axios.delete("http://localhost:3000/deleteRenter/" + this.userId+'/'+this.dorId+'/'+id)
            .then((response) => {
                console.log(response.data[0])
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'ลบผู้เช่าสำเร็จ',
                    showConfirmButton: false,
                    timer: 1800
                }).then(() => {
                    this.$router.push('/Renter/'+this.userId+'/'+this.dorId)
                })
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }
}
</script>
