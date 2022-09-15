<template>
    <div class="dashboard">
        <div class="grid row">

            <div class="flex md12" style="height: 300px;"></div>
            
            <div class="flex md6 offset--md3">
                <div class="row column">
                        <va-card>
                            <va-card-content>
                                <div class="grid row">
                                <div class="flex md12" style="text-align: center; font-size:24px;">
                                    약관 동의
                                </div>
                                    <div style="width: 100%;">
                                        <va-checkbox v-model="check_bank" label="은행정보 수집 이용동의 (필수)" class="mb-2" />
                                    </div>
                                    <div style="width: 100%;">
                                        <va-checkbox v-model="check_card" label="카드사정보 수집 이용동의 (필수)" class="mb-2" />
                                    </div>
                                    <div style="width: 100%;">
                                        <va-checkbox v-model="check_insurance" label="보험사정보 수집 이용동의 (필수)" class="mb-2" />
                                    </div>
                                    <div style="width: 100%;">
                                        <va-checkbox v-model="check_stock" label="증권사정보 수집 이용동의 (필수)" class="mb-2" />
                                    </div>
                                    <div style="width: 100%;">
                                        <va-checkbox v-model="check_tax" label="국세청정보 수집 이용동의 (필수)" class="mb-2" />
                                    </div>
                                
                            </div>
                            </va-card-content>
                        </va-card>


                </div>
            </div>

            <div class="flex md12" style="height: 10px;"></div>

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
import { defineProps } from 'vue'
const router = useRouter();

const users = [
    {
        "name": "efiji",
        "email": "efiji",
        "country": "eafweifjo",
    },
]

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
    router.push({ name: 'loading' })
}

const props = defineProps({
    check_bank: Boolean,
    check_card: Boolean,
    check_insurance: Boolean,
    check_stock: Boolean,
    check_tax: Boolean,
})

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
