<template>
  <div class="dashboard">
    <div class="grid row">

      <div class="flex xs12 md6">
        <div class="row column">
          <div class="flex">
            <va-card class="larger-padding">
              <va-card-title> 나의 금융정보 불러오기</va-card-title>
            </va-card>
          </div>

          <div class="flex">
            <va-card class="larger-padding">
              <va-card-title> 세금 예측</va-card-title>
            </va-card>
          </div>

          <div class="flex">
            <va-card class="larger-padding">
              <va-card-title> 전세 솔루션</va-card-title>
            </va-card>
          </div>

          <div class="flex">
            <va-card class="larger-padding">
              <va-card-title> 사이트 정보 </va-card-title>
            </va-card>
          </div>

        </div>
      </div>

    </div>

    <div class="flex xs12 md12">
      <va-button class="mr-2 mb-2" @click="onsubmit"> 다음 </va-button>
    </div>


  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { useRouter } from 'vue-router'
const router = useRouter();

function onsubmit() {
  router.push({ name: 'input_salary' })
}

</script>

<style lang="scss">
.row-equal .flex {
  .va-card {
    height: 100%;
  }
}

.dashboard {
  .va-card {
    margin-bottom: 0 !important;

    &__title {
      font-size: 20px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
