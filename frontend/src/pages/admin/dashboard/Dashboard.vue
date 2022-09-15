<template>
  <div class="dashboard">
    <div class="grid row">

      <div class="flex md6 offset--md3">
        <div class="row column">
          <div class="flex">
            <va-card class="larger-padding">
              <va-card-content>
                <div class="flex md12" style="text-align: center; font-size:24px;">
                                        첫 화면
                                    </div>
              </va-card-content>
            </va-card>
          </div>

          <div style="height: 60px;">
            
          </div>
        </div>
      </div>

    </div>

    <div class="flex xs12">
      <div class="row">
        <div style="position: relative; left: 50%; transform: translateX(-50%);">
          <va-button class="mr-2 mb-2" @click="onsubmit"> 다음 </va-button>
        </div>
      </div>
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
