<template>
    <div class="dashboard">
        <div class="grid row">

            <div class="flex xs12 md12">
                <div class="row column">
                    <div class="flex">
                        <va-card>
                            <va-card-title>예상 세액</va-card-title>
                            <va-card-content>
                                <div> 1,232,300 원 </div>
                                <div>
                                    <va-card>
                                        <va-card-title></va-card-title>
                                        <va-card-content>
                                            <va-accordion v-model="basicAccordionValue1">
                                                <va-collapse header="상세내역">
                                                    <div class="pa-3">
                                                        <div>
                                                            text1
                                                        </div>
                                                    </div>
                                                </va-collapse>
                                            </va-accordion>

                                            <va-accordion v-model="basicAccordionValue2">
                                                <va-collapse header="나의 절세 현황">
                                                    <div class="pa-3">
                                                        <div>
                                                            text1
                                                        </div>
                                                    </div>
                                                </va-collapse>
                                            </va-accordion>

                                        </va-card-content>
                                    </va-card>

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
    router.push({ name: 'custom_solution' })
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
