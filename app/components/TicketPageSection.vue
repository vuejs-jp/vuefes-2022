<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue'
import SubTitle from '~/components/SubTitle.vue'
import ExplainText from '~/components/ExplainText.vue'
import AccordionView from '~/components/AccordionView.vue'
import { faqList, giftboxCaution, giftboxInfo, gifts, promotionCaution, promotionInfo, ticketPlans, ticketUrl } from '~/utils/constants'
</script>

<template>
  <section
    id="ticket"
    class="bg-ticket py-10 px-5 md:px-10 lg:p-20"
  >
    <div class="bg-white py-20 lg:py-40">
      <div class="mx-auto max-w-[43.75rem] px-5 lg:max-w-[74.375rem]">
        <SectionTitle
          class="mb-10 lg:mb-20"
          title="Ticket"
          title-yamato="チケット"
        />
        <ExplainText
          class="mx-auto max-w-[43.75rem]"
          :explain="promotionInfo"
        />
        <div class="flex w-full flex-wrap justify-center">
          <div
            v-for="ticketPlan in ticketPlans"
            :key="ticketPlan.value"
            class="relative mx-8 w-[40%] px-4 md:mb-[8vw] md:w-[32%] 3xl:w-[84%]"
          >
            <div class="absolute top-[35%] left-[1.2vw] flex h-[200px] w-[250px] flex-col items-center justify-center border border-vue-blue text-center align-middle text-sm md:left-[0vw] md:h-[280px] md:w-[27vw] md:text-lg lg:top-[45%]">
              <h3 class="pb-4 md:pb-12">{{ ticketPlan.title }}</h3>
              <p>
                <span class="text-lg font-bold md:text-5xl">
                  {{ ticketPlan.price !== 0 ? ticketPlan.price.toLocaleString() : '無料' }}
                </span>
                <span class="text-sm md:text-3xl">
                  {{ ticketPlan.price !== 0 ? ' 円' : '' }}
                </span>
              </p>
            </div>
            <div class="z-10 pb-[32.5vw] md:pb-[140px]">
              <img
                :src="`/img/${ticketPlan.value}_bannar.png`"
                :alt="`${ticketPlan.title}用バナー`"
                class="w-[280px] md:w-[42vw]"
                loading="lazy"
              >
            </div>
          </div>
        </div>
        <ExplainText
          class="mx-auto max-w-[43.75rem]"
          :explain="promotionCaution"
        />
        <SubTitle title="個人スポンサー限定ギフトボックス" />
        <ExplainText
          class="mx-auto max-w-[43.75rem]"
          :explain="giftboxInfo"
        />
        <div class="flex w-full flex-wrap justify-center">
          <div
            v-for="gift in gifts"
            :key="gift.value"
            class="relative mb-[8vw] w-[50%] px-4 md:w-[30%]"
          >
            <div class="w-full pb-5">
              <img
                :src="`/img/${gift.value}_sample.png`"
                :alt="`${gift.title}用サンプル`"
                class="w-[16rem] md:w-[300px]"
                loading="lazy"
              >
            </div>
            <div class="flex items-center justify-center md:w-[300px] 3xl:w-[120px]">
              <h3>{{ gift.title }}</h3>
            </div>
          </div>
        </div>
        <ExplainText
          class="mx-auto max-w-[43.75rem]"
          :explain="giftboxCaution"
        />
        <SubTitle title="FAQ" />
        <div
          v-for="(faq, index) in faqList"
          :key="index"
          class="mx-auto max-w-[43.75rem]"
        >
          <accordion-view>
            <div slot="title">{{ faq.question }}</div>
            <div slot="content">
              <!--eslint-disable-next-line -->
              <p v-html="faq.answer" />
              <!--eslint-enable-next-line -->
            </div>
          </accordion-view>
        </div>
      </div>
    </div>
  </section>
</template>
