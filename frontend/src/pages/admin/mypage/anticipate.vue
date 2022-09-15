<template>
    <div class="dashboard">
        <div class="grid row">

            <div class="flex md6 offset--md3">
                <div class="row column">
                    <div class="flex">
                        <va-card>
                            <va-card-content>
                                <div class="flex md12" style="text-align: center; font-size:24px;">
                                    인건님의 예상 환급금액
                                </div>
                                <div> 1,232,300 원 추가납부 </div>
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
                                                    <va-list>
                                                        <va-list-label>
                                                            test 화면
                                                        </va-list-label>

                                                        <va-list-item class="mb-2" clickable>
                                                            <va-list-item-section>
                                                                <va-list-item-label>Add profile images
                                                                </va-list-item-label>

                                                                <va-list-item-label caption>You can use PNG or JPG
                                                                    files.</va-list-item-label>
                                                            </va-list-item-section>
                                                        </va-list-item>

                                                        <va-list-item clickable>
                                                            <va-list-item-section>
                                                                <va-list-item-label>Invite friends</va-list-item-label>

                                                                <va-list-item-label caption>You can send invitations via
                                                                    email or any messenger.</va-list-item-label>
                                                            </va-list-item-section>
                                                        </va-list-item>

                                                        <va-list-separator fit spaced />

                                                    </va-list>
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
