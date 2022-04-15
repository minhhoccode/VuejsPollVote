<template>
  <a
    @click="Voted"
    v-if="Vote"
    class="visit"
    style="transform: translateY(-10px); padding: 0.8rem; font-size: 10px"
    >Bình chọn</a
  >
  <a
    @click="Voted"
    v-if="!Vote"
    class="visit1"
    style="transform: translateY(-10px); padding-top: 0.8rem;padding-left: 0.3rem;padding-right: 0.3rem;padding-bottom: 0.8rem; font-size: 10px;"
    >Đã Bình chọn</a
  >
</template>

<script>

export default {  
    data() {
    return {
      Vote: true,
    };
  },
  methods: {
    Voted: function () {
      this.Vote = !this.Vote;
    },
  },
};
</script>

<style>
.visit {
  display: inline-block;
  text-decoration: none;
  border: none;
  background-color: #425b93;
  position: relative;
  color: #fff;
  cursor: pointer;
  margin: 10px 0 4px;
  border-radius: 20px;
  padding: 10 100px;
  transition: 0.2s;
}

.visit:hover {
  border: 1px solid rgb(116, 42, 42);
  background: rgb(116, 42, 42);
  transition: 0.3s;
  color: #fff;
  padding: 10 30px;
}
.visit1 {
  display: inline-block;
  text-decoration: none;
  border: none;
  background-color: rgb(116, 42, 42);
  position: relative;
  color: #fff;
  cursor: pointer;
  margin: 10px 0 4px;
  border-radius: 20px;
  padding: 10 100px;
  transition: 0.2s;
}

.visit1:hover {
  border: 1px solid #425b93;
  background: #425b93;
  transition: 0.3s;
  color: #fff;
  padding: 10 30px;
}
</style>

