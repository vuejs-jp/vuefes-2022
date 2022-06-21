<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue'
import SubTitle from '~/components/SubTitle.vue'
import ExplainText from '~/components/ExplainText.vue'
import AccordionView from '~/components/AccordionView.vue'
import { faqList, giftboxCaution, giftboxInfo, gifts, promotionCaution, promotionInfo, ticketPlans } from '~/utils/constants'
</script>

<template>
  <section
    id="ticket"
    class="py-10 px-5 bg-ticket md:px-10 lg:p-20"
  >
    <div class="py-20 bg-white lg:py-40">
      <div class="px-5 mx-auto max-w-[43.75rem] lg:max-w-[74.375rem]">
        <SectionTitle
          class="mb-10 lg:mb-20"
          title="Ticket"
          title-yamato="チケット"
        />
        <ExplainText
          class="mx-auto max-w-[43.75rem]"
          :explain="promotionInfo"
        />
        <div class="flex flex-wrap justify-center w-full">
          <div
            v-for="ticketPlan in ticketPlans"
            :key="ticketPlan.value"
            class="relative px-4 mx-8 w-full md:mb-[8vw] md:w-[40%]"
          >
            <div class="flex absolute top-[50%] left-[1.2vw] flex-col justify-center items-center w-[60vw] h-[30vw] text-center align-middle border border-vue-blue md:left-0 md:w-[460px] md:h-[280px]">
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
            <div class="z-10 pb-[32.5vw] w-full md:pb-[140px]">
              <img
                :src="`/img/${ticketPlan.value}_bannar.png`"
                :alt="`${ticketPlan.title}用バナー`"
                class="w-[42rem] md:w-[500px]"
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
        <div class="flex flex-wrap justify-center w-full">
          <div
            v-for="gift in gifts"
            :key="gift.value"
            class="relative px-4 mb-[8vw] w-[50%] md:w-[30%]"
          >
            <div class="pb-5 w-full">
              <img
                :src="`/img/${gift.value}_sample.png`"
                :alt="`${gift.title}用サンプル`"
                class="w-[16rem] md:w-[300px]"
                loading="lazy"
              >
            </div>
            <div class="flex justify-center items-center md:w-[300px] 3xl:w-[120px]">
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
              <p>{{ faq.answer }}</p>
            </div>
          </accordion-view>
        </div>
      </div>
    </div>
  </section>
</template>
