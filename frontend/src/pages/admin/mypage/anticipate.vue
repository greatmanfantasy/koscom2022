<template>
    <div class="dashboard">
        <div class="grid row">

            <div class="flex md8 offset--md2">
                <div class="row column">
                    <div class="flex">
                        <va-card no-padding-h style="overflow-x: auto" class="timelines__horizontal-long">
                            <va-card-content>
                                <va-timeline align-top style="min-width: 600px" class="timelines__horizontal-long__timeline">
                                    <va-timeline-item active>
                                        <template #before>
                                            <div class="text--center">
                                                <font size="5"><b>인건</b>님의 예상 환급금액</font>
                                            </div>
                                        </template>
                                        <template #after>
                                        <va-card stripe stripe-color="warning" class="mb-0">
                                            <br><br>
                                            <div style="text-align:center;">
                                                <font size="40"><strong>1,232,300 원 추가납부</strong></font>
                                            </div>
                                            <va-card-content>
                                                <div class="text--center">
                                                    <font size="4">예상세액 : 25,630,000 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 예상납부세액 : 24,080,000</font>
                                                </div>
                                            </va-card-content>
                                        </va-card>
                                        </template>
                                    </va-timeline-item>
                                </va-timeline>
                            </va-card-content>
                        </va-card>
                    </div>
                </div>
            </div>


            <div class="flex md6">
                <div class="row column">
                    <div class="flex">
                        <va-card>
                            <va-card-content>

                                <div class="tree-view-advanced-preview">
                                    <div class="tree-view-advanced-preview__buttons">
                                        <va-button class="mr-2" @click="expand">EXPAND ALL</va-button>
                                        <va-button @click="collapse">COLLAPSE ALL</va-button>
                                    </div>

                                    <div>
                                        <font size="5"><strong>상세내역</strong></font>
                                    </div>
                                    <br>

                                    <va-tree-view ref="treeView">
                                        <va-tree-category label="세액">
                                            <va-tree-node>- 근로소득세 : 23,000,000 원</va-tree-node>
                                            <va-tree-node>- 이자소득세 : 470,000 원</va-tree-node>
                                            <va-tree-category label="(예상)배당소득세 : 23,500 원">
                                                <va-tree-node>■ 삼성전자 20주</va-tree-node>
                                                <va-tree-node>--> 12월 배당예상액 : 12,000원</va-tree-node>
                                                <va-tree-node>■ KB금융 15주</va-tree-node>
                                                <va-tree-node>--> 10월 배당예상액 : 5,700원</va-tree-node>
                                                <va-tree-node>--> 12월 배당예상액 : 5,800원</va-tree-node>
                                            </va-tree-category>
                                        </va-tree-category>
                                        <va-tree-category label="공제">
                                            <va-tree-node>- 인적공제 : 160,000 원</va-tree-node>
                                            <va-tree-node>- 기타 및 특별공제 : 1,009,000 원</va-tree-node>
                                        </va-tree-category>
                                    </va-tree-view>
                                </div>
            
                            </va-card-content>
                        </va-card>
                    </div>

                </div>
            </div>


            <div class="flex md6">
                <div class="row column">
                    <div class="flex">
                        <va-card>
                            <va-card-content>

                                <div class="tree-view-advanced-preview">
                                    <div class="tree-view-advanced-preview__buttons">
                                        <va-button class="mr-2" @click="expand2">EXPAND ALL</va-button>
                                        <va-button @click="collapse2">COLLAPSE ALL</va-button>
                                    </div>

                                    <div>
                                        <font size="5"><strong>나의 공제 현황</strong></font>
                                    </div>
                                    <br>

                                    <va-tree-view ref="treeView2">
                                        <va-tree-category label="금융상품">
                                            <va-tree-node>- 청약저축 : 230,000 원 공제</va-tree-node>
                                            <va-tree-node>- 연금저축 : 1,080,000 원 공제</va-tree-node>
                                        </va-tree-category>
                                        <va-tree-category label="카드소비">
                                            <va-tree-node>- 신용카드 : 2,756,000 원 공제</va-tree-node>
                                            <va-tree-node>- 대중교통 : 97,000 원 공제</va-tree-node>
                                        </va-tree-category>
                                        <va-tree-category label="기타">
                                            <va-tree-node>- 정치기부금 : 100,000 원 공제</va-tree-node>
                                        </va-tree-category>
                                    </va-tree-view>
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

import { ref } from 'vue'

    const treeView = ref()

    const expand = () => {
        treeView.value?.expand?.()
    }

    const collapse = () => {
        treeView.value?.collapse?.()
    }

    const treeView2 = ref()

    const expand2 = () => {
        treeView2.value?.expand?.()
    }

    const collapse2 = () => {
        treeView2.value?.collapse?.()
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

.tree-view-advanced-preview {
    &__buttons {
    margin-bottom: 1rem;
    display: flex;
    }
}
</style>
