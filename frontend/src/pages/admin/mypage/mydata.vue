<template>
    <div class="dashboard">
        <div class="grid row">

            <div class="flex xs12 md12">
                <div class="row column">
                    <div class="flex">
                        <va-card>
                            <va-card-title>나의 금융정보 불러오기</va-card-title>
                            <va-card-content>
                                <div class="table-wrapper">
                                    <table class="va-table va-table--striped va-table--hoverable">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Country</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr v-for="user in users" :key="user.id">
                                                <td>{{ user.name }}</td>
                                                <td>{{ user.email }}</td>
                                                <td>{{ user.country }}</td>
                                                <td>
                                                    <va-badge :text="user.status"
                                                        :color="getStatusColor(user.status)" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
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
  