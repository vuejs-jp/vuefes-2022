<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue'
import SubTitle from '~/components/SubTitle.vue'
import ExplainText from '~/components/ExplainText.vue'
import AccordionView from '~/components/AccordionView.vue'
import LinkButtonField from '~/components/forms/LinkButtonField'
import { faqList, giftboxCaution, giftboxInfo, gifts, promotionCaution, promotionInfo, ticketPlans, ticketUrl } from '~/utils/constants'
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
          class="mb-[30px]"
          :explain="promotionInfo"
        />
        <div class="mb-[20px]">
          <div class="mb-[30px]">
            <img
              src="/img/preregister_bannar.png"
              alt=""
              class="px-6 mx-auto"
              loading="lazy"
            >
            <div class="pt-[100px] mt-[-80px] text-center text-vue-blue border border-vue-blue">
              <h3 class="mb-[20px] text-[12px]">事前登録チケット 一般参加用</h3>
              <p class="mb-[20px] text-[25px] font-bold">無料</p>
            </div>
          </div>
          <div>
            <img
              src="/img/personal_sponsor_bannar.png"
              alt=""
              class="px-6 mx-auto"
              loading="lazy"
            >
            <div class="pt-[100px] mt-[-80px] text-center text-vue-blue border border-vue-blue">
              <h3 class="mb-[20px] text-[12px]">事前登録チケット 個人スポンサー用</h3>
              <p class="mb-[20px]"><span class="mr-[5px] text-[25px] font-bold">10,000</span>円</p>
            </div>
          </div>
        </div>
        <p class="mb-[40px] text-xs font-bold leading-5 text-vue-blue">{{ promotionCaution }}</p>
        <div class="text-center">
          <LinkButtonField
            link="/"
            title-label="事前登録チケットを購入する"
            is-external-link
            class="mb-[50px] text-center opacity-30"
            disabled
          />
        </div>
        <section class="mb-[50px]">
          <h3 class="mb-[20px] text-[20px] font-bold text-center text-vue-blue">個人スポンサー限定<br>ギフトボックス</h3>
          <ExplainText
            :explain="giftboxInfo"
            class="mb-[20px]"
          />
          <div class="flex flex-wrap justify-center w-full text-vue-blue">
            <div
              v-for="gift in gifts"
              :key="gift.value"
              class="mb-[20px] even:ml-[10%] w-[45%]"
            >
              <img
                :src="`/img/${gift.value}_sample.png`"
                :alt="`${gift.title}用サンプル`"
                loading="lazy"
                class="mb-[5px]"
              >
              <p
                class="text-[11px] font-bold text-center"
                v-html="gift.title"
              />
            </div>
          </div>
          <p class="text-xs font-bold leading-5 text-vue-blue">※画像はすべてイメージです。</p>
          <p class="text-xs font-bold leading-5 text-vue-blue">※ギフトボックスの内容は予告なく変更される可能性がありますので、あらかじめご了承ください。</p>
        </section>
        <section>
          <h3 class="mb-14 text-xl font-bold text-center text-vue-blue">FAQ</h3>
          <accordion-view
            v-for="(faq, index) in faqList"
            :key="index"
          >
            <template slot="title">{{ faq.question }}</template>
            <template slot="content">
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p
                class="text-[13px] leading-5 text-vue-blue"
                v-html="faq.answer"
              />
            </template>
          </accordion-view>
        </section>
      </div>
    </div>
  </section>
</template>
