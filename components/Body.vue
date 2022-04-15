<template>
  <body class="bg-gradient-to-r from-[rgb(66,91,155)] to-[rgb(66,91,147)]">
    <!-- <div class="w-80 border rounded-lg border border-slate-200 my-4 mx-auto bg-white shadow p-5"> -->
    <div
      class="divide-y divide-blue-200"
      style="width: 90%; margin: auto; max-width: 600px"
    >
      <div class="py-4">
        <ul class="space-y-3">
          <li class="text-sm rounded-lg bg-white">
            <h1
              class="text-blue-900 font-extrabold text-3xl mb-4"
              style="
                text-align: center;
                padding-bottom: 1em;
                padding-top: 1em;
                padding-left: 1em;
                padding-right: 1em;
              "
            >
              Giải thưởng chia tay khóa cuối
            </h1>
            <h6
              class="text-red-900 font-extrabold mb-4"
              style="text-align: center; font-size: 20px"
            >
              Giải cống hiến 1
            </h6>
            <div
              class="relative p-3 peer cursor-pointer pr-8 text-red-900"
              tabindex="0"
            >
              <div class="font-bold" style="text-align: center">Thời gian</div>
              <div
                class="text-xs font-medium"
                style="text-align: center; padding-bottom: 1em"
              >
                36:24:12 s
                {{ countDown }}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="py-4">
        <ul class="space-y-3" style="text-align: center">
          <div class="row">
            <div class="post-container" style="background-color: #fff">
              <div class="">
                <img
                  src="../assets/qk.jpg"
                  class="avatar"
                  style="
                    text-align: center;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                  "
                />
                <div>
                  <h2
                    class="py-5 text-green-900"
                    style="font-size: 16px; font-weight: bold"
                  >
                    Vũ Lê Quốc Khánh
                  </h2>
                </div>
                <Voted />
              </div>
            </div>
            <div class="post-container" style="background-color: #fff">
              <div class="">
                <img
                  src="../assets/qk.jpg"
                  class="avatar"
                  style="
                    text-align: center;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                  "
                />
                <div>
                  <h2
                    class="py-5 text-green-900"
                    style="font-size: 16px; font-weight: bold"
                  >
                    Vũ Lê Quốc Khánh
                  </h2>
                </div>
                <Voted />
              </div>
            </div>
            <div class="post-container" style="background-color: #fff">
              <div class="">
                <img
                  src="../assets/qk.jpg"
                  class="avatar"
                  style="
                    text-align: center;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                  "
                />
                <div>
                  <h2
                    class="py-5 text-green-900"
                    style="font-size: 16px; font-weight: bold"
                  >
                    Vũ Lê Quốc Khánh
                  </h2>
                </div>
                <Voted />
              </div>
            </div>
          </div>


          <div class="row">
            <div class="post-container" style="background-color: #fff">
              <div class="">
                <img
                  src="../assets/qk.jpg"
                  class="avatar"
                  style="
                    text-align: center;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                  "
                />
                <div>
                  <h2
                    class="py-5 text-green-900"
                    style="font-size: 16px; font-weight: bold"
                  >
                    Vũ Lê Quốc Khánh
                  </h2>
                </div>
                <Voted />
              </div>
            </div>
            <div class="post-container" style="background-color: #fff">
              <div class="">
                <img
                  src="../assets/qk.jpg"
                  class="avatar"
                  style="
                    text-align: center;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                  "
                />
                <div>
                  <h2
                    class="py-5 text-green-900"
                    style="font-size: 16px; font-weight: bold"
                  >
                    Vũ Lê Quốc Khánh
                  </h2>
                </div>
                <Voted />
              </div>
            </div>
            <div class="post-container" style="background-color: #fff">
              <div class="">
                <img
                  src="../assets/qk.jpg"
                  class="avatar"
                  style="
                    text-align: center;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                  "
                />
                <div>
                  <h2
                    class="py-5 text-green-900"
                    style="font-size: 16px; font-weight: bold"
                  >
                    Vũ Lê Quốc Khánh
                  </h2>
                </div>
                <Voted />
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </body>
</template>

<script>
import Voted from "./Voted.vue";
export default {
    components: { Voted }
};
</script>

<style >
@import url("../style/style.css");
</style>
