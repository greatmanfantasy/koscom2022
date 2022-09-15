<template>
    <div class="dashboard">
        <div class="grid row">

            <div class="flex xs12 md12">
                <div class="row column">
                    <div class="flex">
                        <va-card>
                            <va-card-title>000님의 맞춤 절세 솔루션</va-card-title>
                            <va-card-content>
                                <div class="grid row">
                                    <div class="flex xs12 md1">
                                        <div class="text-align-center"> 청약 </div>
                                    </div>

                                    <div class="flex xs12 md1">
                                        <div class="text-align-center"> 연금 </div>
                                    </div>                                    
                                </div>
                            </va-card-content>
                        </va-card>

                    </div>

                </div>
            </div>


            <div class="flex xs12 md12">
                <va-button class="mr-2 mb-2" @click="onsubmit"> 다음 </va-button>
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
    router.push({ name: 'dashboard' })
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

// .text-align-center {
//     text-align: center;
//     line-height : 34px;
// }
</style>
  