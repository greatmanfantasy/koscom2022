<template>
    <div class="dashboard">
        <div class="grid row">

            <div class="flex md12" style="height: 300px;"></div>

            <div class="flex md6 offset--md3">
                <div class="row column">
                    <div class="flex">
                        <va-card>
                            <va-card-content>
                                <div class="grid row">
                                    <div class="flex md12" style="text-align: center; font-size:24px;">
                                        <font size=6><b>금세</b></font> 에 필요한 <b>인건</b>님의 정보를 입력해 주세요
                                    </div>

                                    <div class="flex md2">
                                        <div><font size=5>연소득 :</font></div>
                                    </div>

                                    <div class="flex md4">
                                        <va-input v-model="salary" placeholder="" />
                                    </div>

                                    <div class="flex md1">
                                        <div><font size=5>원</font></div>
                                    </div>
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
  