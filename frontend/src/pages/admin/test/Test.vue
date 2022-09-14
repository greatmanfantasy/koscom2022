<template>
    <div class="dashboard">
      <div class="grid row">
  
        <div class="flex xs12 md6">
            <va-card class="larger-padding">
              <va-card-title> 탭 배치</va-card-title>
            </va-card>
          </div>
  
          <div class="flex xs12 md6">
            <div class="row column">
              <div class="flex">
                <va-card class="larger-padding">
                  <va-card-title> 탭 배치</va-card-title>
                </va-card>
              </div>
  
              <div class="flex">
                <va-card class="larger-padding">
                  <va-card-title> 탭 배치</va-card-title>
                </va-card>
              </div>
  
  
            </div>
          </div>
  
            
  
          <div class="flex xs12">
            <va-card class="larger-padding">
              <va-card-title>{{ t('buttons.tags') }}</va-card-title>
              <va-card-content class="row">
                <div class="flex">
                  <va-button class="mr-2 mb-2"> {{ t('buttons.button') }}</va-button>
                  <va-button class="mr-2 mb-2" href="http://epic-spinners.epicmax.co/">
                    {{ t('buttons.a-link') }}
                  </va-button>
                  <va-button class="mr-2 mb-2" :to="{ name: 'charts' }">
                    {{ t('buttons.router-link') }}
                  </va-button>
                </div>
              </va-card-content>
            </va-card>
          </div>
  
      </div>
  
  
  
  
  
      <!-- <dashboard-charts /> -->
  
      <!-- <dashboard-info-block /> -->
  
      <!-- <div class="row row-equal">
        <div class="flex xs12 lg6">
          <dashboard-tabs @submit="addAddressToMap" />
        </div>
  
        <div class="flex xs12 lg6">
          <DashboardMap ref="dashboardMap" />
        </div>
      </div> -->
  
  
  
    </div>
  </template>
  
  <script setup lang="ts">
    import { ref } from 'vue'
    import { useI18n } from 'vue-i18n'
  
    const dashboardMap = ref()
  
    function addAddressToMap({ city, country }: { city: { text: string }; country: string }) {
      dashboardMap.value.addAddress({ city: city.text, country })
    }
    
    const { t } = useI18n()
  
    const options = ref([
      { label: 'One', value: 'one' },
      { label: 'Two', value: 'two' },
      { label: 'Three', value: 'three' },
    ])
    const model = ref('three')
    const activePage = ref(4)
  
  
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
  