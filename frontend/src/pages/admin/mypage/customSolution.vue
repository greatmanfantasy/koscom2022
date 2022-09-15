<template>
    <div class="dashboard">
        <div class="grid row">

            <div class="flex md6 offset--md3">
                <div class="row column">

                    <div class="flex md12" style="height: 100px;"></div>

                    <div class="flex md12" style="text-align: center; font-size:24px;">
                        <b>인건</b>님의 맞춤 절세 솔루션
                    </div>

                    <div class="flex md12" style="height: 100px;"></div>

                </div>
            </div>



            <div class="flex md6">
                <div class="row column">

                    <div class="flex">

                        <va-accordion v-model="colorAccordionValue">
                            <va-collapse :header='"청약저축"' color="orrange" color-all>
                                <div class="pa-3">

                                    <div><b>·</b>  청약저축 금액 증액</div>
                                    <div><b>·</b>  월 30,000원 -> 월 100,000원</div>
                                    <p class="display-3">절세효과: 480,000원</p>
                                </div>
                            </va-collapse>

                        </va-accordion>

                    </div>
                    <!--
                            <va-card >
                        -->


                    <div class="flex">
                        <va-accordion v-model="colorAccordionValue">
                            <va-collapse :header='"연금저축"' color="orrange" color-all>
                                <div class="pa-3">
                                    <div><b>·</b>  연금저축 납부금 일부 IRP로 전환</div>
                                    <div><b>·</b>  7,000,000 中 3,000,000원 IRP로 전환</div>
                                    <p class="display-3">절세효과: 325,000원</p>
                                </div>
                            </va-collapse>
                        </va-accordion>
                    </div>

                    <div class="flex">

                        <va-accordion v-model="colorAccordionValue">
                            <va-collapse :header='"카드"' color="orrange" color-all>
                                <div class="pa-3">
                                    <div><b>·</b>  2,350,000원을 초과하는 카드 이용금액은 체크카드로 이용</div>
                                    <p class="display-3">절세효과: 초과이용액의 30% 소득공제</p>
                                </div>
                            </va-collapse>
                        </va-accordion>

                    </div>

                    <div class="flex">

                        <va-accordion v-model="colorAccordionValue">
                            <va-collapse :header='"ISA"' color="orrange" color-all>
                                <div class="pa-3">
                                    <div><b>·</b>  ㅇㅇㅇ, ㅁㅁㅁ 펀드 상품 ISA로 통합 운용</div>
                                    <p class="display-3">절세효과 : 670,000원</p>
                                </div>
                            </va-collapse>
                        </va-accordion>
                    </div>

                </div>
            </div>


            <div class="flex md6">
                <div class="row column">
                    <div class="flex">
                        <va-card>
                            <va-card-content>
                                <div class="flex md12" style="height: 70px;"></div>

                                <div style="text-align: center">
                                    <img alt="금세" width="150" src="/title_icon.png">
                                </div>

                                <div style="text-align: center; font-size:24px; "><b>금세</b> 솔루션을 통해</div>
                                <div style="text-align: center; font-size:24px; margin-bottom: 20px;"><b>인건</b>님은 최대
                                </div>
                                <div style="text-align: center; font-size:40px; margin-bottom: 30px;"><b>1,802,500원</b>
                                </div>
                                <div style="text-align: center; font-size:24px;">까지 추가 환급 받을 수 있어요!</div>
                                <br>
                                <div style="text-align: center; font-size:12px;">(카드 이용금액 전년도와 동일 가정시)</div>

                                <div class="flex md12" style="height: 150px;"></div>

                            </va-card-content>
                        </va-card>
                    </div>



                </div>
            </div>


            <!-- <div class="flex xs12">
                <div class="row">
                    <div style="position: relative; left: 50%; transform: translateX(-50%);">
                        <va-button class="mr-2 mb-2" @click="onsubmit"> 다음 </va-button>
                    </div>
                </div>
            </div> -->

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

    .va-collapse {
        font-size: 20px;

        &__header {
            font-size: 28px;
            font-weight: bold;
        }
    }
}

// .text-align-center {
//     text-align: center;
//     line-height : 34px;
// }
</style>
  