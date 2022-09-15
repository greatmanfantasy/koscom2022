<template>
    <div class="dashboard">
        <div class="grid row">

            <div class="flex md6 offset--md3">
                <div class="row column">
                    <div class="flex">
                        <va-card>
                            <va-card-content>
                                <div class="grid row">
                                    <div class="flex md12" style="text-align: center; font-size:24px;">
                                        고객님의 정보를 입력하세요
                                    </div>
                                    <div class="flex md2">
                                        <div> 연소득 : </div>
                                    </div>

                                    <div class="flex md8">
                                        <va-input v-model="salary" placeholder="연봉" />
                                    </div>
                                </div>
                                <div class="row">
                                    <va-checkbox v-model="checkbox_select" label="정보제공동의" class="mb-2" />
                                </div>
                                    
                            </va-card-content>
                        </va-card>

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

    </div>
</template>
  
<script setup lang="ts">
import { useRouter } from 'vue-router'
import {defineProps} from 'vue';
const router = useRouter();

function getStatusColor(status: string) {
    if (status === 'paid') {
        return 'success'
    }

    if (status === 'processing') {
        return 'info'
    }

    return 'danger'
}


function onsubmit() {
    router.push({ name: 'terms_agree' })
}

const props = defineProps({
    checkbox_select: Boolean,
})


</script>
  
<style lang="scss">
// .app-layout{
//     background-color: #C0C0C0;
// }

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
    // .va-button {
    //     color: #FFFFFF;
    // }
}

// --va-button-color: #FFFFFF;

// .text-align-center {
//     text-align: center;
//     line-height : 34px;
// }
</style>
  