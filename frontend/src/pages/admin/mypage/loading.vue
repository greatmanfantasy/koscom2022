<template>
    <div class="dashboard">
        <div class="grid row">

            <div class="flex md6 offset--md3">
                <div class="row column">
                    <div class="flex">
                        <va-card>
                            <va-card-content>
                                <div class="flex md12" style="text-align: center; font-size:24px;">
                                    인건님의 정보를 불러오고 있어요
                                </div>
                                <div class="flex md12">
                                    <va-progress-circle  :thickness="0.3" indeterminate/>
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
    router.push({ name: 'anticipate' })
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
  