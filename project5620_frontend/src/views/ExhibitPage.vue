<template>
    
    <el-row>
        <!-- <div>
        exhibits
    </div> -->
      <el-col class="card"
        v-for="(o, index) in 2"
        :key="o"
        :span="10"
        :offset="index > 0 ? 2 : 0"
      >
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="src/assets/exhibit01.jpg"
            class="image"
          />
          <div style="padding: 14px">
            <span>Woman with a Parasol</span>
            <div class="bottom">
              <!-- <time class="time">{{ currentDate }}</time> -->
              <el-button text class="button">Operating</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  const currentDate = ref(new Date())
  </script>
  
  <style>
  <!-- .card{
    width:250px;
    top:20%;
  } -->
  .time {
    font-size: 12px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .button {
    padding: 0;
    min-height: auto;
  }
  
  .image {
    width: 100%;
    display: block;
  }
  </style>
  