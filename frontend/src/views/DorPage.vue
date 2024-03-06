<template>
  <section id="app" style="font-family: 'Prompt', sans-serif">
    <NavBar />
    <div class="flex flex-row mt-14 mx-20">
      <div class="basis-5/6">
        <h1 class="text-5xl font-medium tracking-wide mb-5">AJ Park</h1>
        <p>ข้อมูลหอพัก</p>
      </div>
    </div>
    <div class="flex flex-col justify-center align-center">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          ชื่อหอพัก
        </label>
        <input
          class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-b"
          id="username"
          type="text"
          placeholder="AJ Park"
        />
      </div>
      <h1>ที่อยู่ :</h1>
      <div class="grid grid-cols-2 gap-2">
        <div>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            เลขที่/ถนน/ซอย/อาคาร
          </label>
          <input
            class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-b"
            id="username"
            type="text"
            placeholder="AJ Park"
          />
        </div>
        <div>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            จังหวัด
          </label>
          <input
            class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-b"
            id="username"
            type="text"
            placeholder="AJ Park"
          />
        </div>
        <div>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            แขวง/ตำบล
          </label>
          <input
            class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-b"
            id="username"
            type="text"
            placeholder="AJ Park"
          />
        </div>
        <div>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            รหัสไปรษณีย์
          </label>
          <input
            class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-b"
            id="username"
            type="text"
            placeholder="AJ Park"
          />
        </div>
      </div>

      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        วันที่ทำบิลค่าเช่า :
      </label>
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-b"
        id="username"
        type="text"
        placeholder="AJ Park"
      />
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        จำนวนห้อง :
      </label>
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-b"
        id="username"
        type="text"
        placeholder="AJ Park"
      />
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        ค่าน้ำ (/หน่วย) :
      </label>
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-b"
        id="username"
        type="text"
        placeholder="AJ Park"
      />
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        ค่าไฟ (/หน่วย) :
      </label>
      <input
        class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-b"
        id="username"
        type="text"
        placeholder="AJ Park"
      />
    </div>
    <div class="flex flex-row mx-10 justify-end gap-10 mb-10">
        <button
          class="text-white font-medium p-3 rounded-3xl bg-[#2E4E73] hover:bg-gray-500"
        >
          ลบข้อมูล
        </button>
        <router-link to="/EditDormitory">
          <button
          class="text-white font-medium p-3 rounded-3xl bg-[#2E4E73] hover:bg-gray-500"
        >
          แก้ไขข้อมูล
        </button>
        </router-link>
    </div>
    
    <FooterBar></FooterBar>
  </section>
</template>

<script>
import axios from "axios";
import NavBar from "./NavBar.vue";
import FooterBar from './FooterBar.vue'

export default {
  components: {
    NavBar,
    FooterBar
  },
  data() {
    return {
      dormitory: null,
    };
  },
  created() {
    axios
      .get("")
      .then((response) => {
        this.dormitory = response.data;
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
