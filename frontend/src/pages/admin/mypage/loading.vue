<template>
    <div class="dashboard">
        <div class="grid row">
            <div class="flex md12" style="height: 300px;"></div>

            <div class="flex md6 offset--md3">
                <div class="row column">
                    <div class="flex">
                        <div class="flex md12" style="text-align: center; font-size:24px;">
                                    <b>인건</b>님의 정보를 불러오고 있어요
                                </div>
                                <div class="flex md12">
                                    <div style="margin-left: 46%; margin-right: auto;">
                                        <va-progress-circle  :thickness="0.3" indeterminate/>
                                    </div>
                                </div>
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

// setTimeout( () => this.$router.push({ path: '/login'}), 2000)
// setTimeout(function () { this.fetchHole() }.bind(this), 1000)

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


setTimeout(function(that){
    if (router.currentRoute.value.name == 'Loading' || router.currentRoute.value.name == 'loading') {
        router.push({ name: 'anticipate'});
    } else{
        console.log(router.currentRoute.value.name)
    }
        
  }, 3000)
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
  