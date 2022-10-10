<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue'
import PageSubTitle from '~/components/PageSubTitle.vue'
import ExplainText from '~/components/ExplainText.vue'
import AccordionView from '~/components/AccordionView.vue'
import LinkButtonField from '~/components/forms/LinkButtonField'
import { faqList, giftboxCaution1, giftboxCaution2, giftboxInfo, gifts, promotionCaution, promotionInfo, promotionInfo2, promotionInfo3, promotionInfo4 } from '~/utils/constants'
</script>

<template>
  <section
    id="ticket"
    class="bg-ticket py-10 px-5 md:px-10 lg:p-20"
  >
    <div class="bg-white py-20 md:py-40">
      <div class="mx-auto max-w-700 px-5 md:max-w-1190">
        <SectionTitle
          class="mb-10 md:mb-20"
          title="Ticket"
          title-yamato="チケット"
        />
        <ExplainText
          class="mx-auto mb-7.5 max-w-700 md:mb-20"
          :explain="promotionInfo"
        />
        <div class="mb-5 md:mb-0 md:flex md:justify-center md:gap-[5%]">
          <div class="mb-7.5">
            <div class="px-6 md:px-14">
              <img
                src="/img/preregister_bannar.jpg"
                alt=""
                class="w-full"
              >
            </div>
            <div class="mt-[-21.33vw] border border-vue-blue pt-[26.67vw] text-center text-vue-blue md:mt-[-25.69%] md:pt-[32.29%]">
              <h3 class="mb-5 text-xs md:mb-5 md:text-base lg:mb-7.5 lg:text-xl">事前登録チケット 一般参加用</h3>
              <p class="mb-5 text-25 font-bold md:mb-10 md:text-35 lg:mb-15 lg:text-50">無料</p>
            </div>
          </div>
          <div>
            <div class="px-6 md:px-14">
              <img
                src="/img/personal_sponsor_bannar.jpg"
                alt=""
                class="w-full"
              >
            </div>
            <div class="mt-[-21.33vw] border border-vue-blue pt-[26.67vw] text-center text-vue-blue md:mt-[-25.69%] md:pt-[32.29%]">
              <h3 class="mb-5 text-xs md:mb-5 md:text-base lg:mb-7.5 lg:text-xl">事前登録チケット 個人スポンサー用</h3>
              <p class="mb-5 md:mb-10 lg:mb-15"><span class="mr-1.5 text-25 font-bold md:text-35 lg:text-50">10,000</span><span class="md:text-3xl">円</span></p>
            </div>
          </div>
        </div>
        <p class="mb-10 text-xs leading-5 text-vue-blue md:mb-22.5 md:text-base">{{ promotionCaution }}</p>
        <ExplainText
          class="mx-auto mb-7.5 max-w-700"
          :explain="promotionInfo2"
        />
        <ExplainText
          class="mx-auto mb-7.5 max-w-700 font-bold"
          :explain="promotionInfo4"
        />
        <ExplainText
          class="mx-auto mb-7.5 max-w-700 md:mb-20"
          :explain="promotionInfo3"
        />
        <div class="mb-12.5 text-center md:mb-22.5">
          <LinkButtonField
            link="https://passmarket.yahoo.co.jp/event/show/detail/02j5vbqweig21.html"
            title-label="事前登録チケットを購入する"
            is-external-link
          />
        </div>
        <section class="mb-12.5 md:mb-22.5">
          <PageSubTitle class="mb-5 md:mb-14">個人スポンサー限定<br class="md:hidden">ギフトボックス</PageSubTitle>
          <ExplainText
            :explain="giftboxInfo"
            class="mx-auto mb-5 max-w-700 md:mb-14"
          />
          <div class="flex w-full flex-wrap justify-center text-vue-blue md:gap-[5%]">
            <div
              v-for="gift in gifts"
              :key="gift.value"
              class="mb-5 w-[45%] even:ml-[10%] md:mb-14 md:w-[30%] md:even:ml-0"
            >
              <div class="mb-1.5 aspect-square md:mb-2.5">
                <img
                  :src="`/img/${gift.value}_sample.jpg`"
                  :alt="`${gift.title}用サンプル画像`"
                  loading="lazy"
                >
              </div>
              <!-- eslint-disable vue/no-v-html -->
              <p
                class="text-center text-11 font-bold md:text-base"
                v-html="gift.title"
              />
              <!-- eslint-enaable vue/no-v-html -->
            </div>
          </div>
          <p class="text-xs leading-5 text-vue-blue md:text-base md:leading-7">{{ giftboxCaution1 }}</p>
          <p class="text-xs leading-5 text-vue-blue md:text-base md:leading-7">{{ giftboxCaution2 }}</p>
        </section>
        <section class="mx-auto max-w-700">
          <PageSubTitle class="mb-14">FAQ</PageSubTitle>
          <accordion-view
            v-for="(faq, index) in faqList"
            :key="index"
          >
            <template slot="title">{{ faq.question }}</template>
            <template slot="content">
              <!-- eslint-disable vue/no-v-html -->
              <p
                class="pb-5 text-13 leading-5 text-vue-blue md:pb-10 md:text-base md:leading-6"
                v-html="faq.answer"
              />
              <!-- eslint-enaable vue/no-v-html -->
            </template>
          </accordion-view>
        </section>
      </div>
    </div>
  </section>
</template>
