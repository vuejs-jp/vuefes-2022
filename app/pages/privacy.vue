<script setup lang="ts">
import { linkUrl } from '~/utils/constants'
import NavPageSection from '~/components/NavPageSection.vue'
import PrivacyPolicyAndCocSectionTitle from '~/components/PrivacyPolicyAndCocSectionTitle.vue'
import LinkButtonField from '~/components/forms/LinkButtonField.vue'
import IchimatsuDividedBar from '~/components/IchimatsuDividedBar.vue'
import FooterPageSection from '~/components/FooterPageSection.vue'
</script>

<template>
  <div>
    <nav-page-section />
    <PrivacyPolicyAndCocSectionTitle
      class="mb-10 lg:mb-20"
      title="Privacy Policy"
      title-yamato="プライバシーポリシー"
      title-type="PrivacyPolicy"
    />
    <div class="px-5 mx-auto max-w-[43.75rem] text-sm leading-7 text-vue-blue lg:max-w-[73.75rem] lg:text-lg lg:leading-8">
      <p class="mb-8">Vue Fes Japan 2019（以下、 カンファレンス）では、カンファレンスへの参加者およびスポンサー（以下、ユーザー）の個人情報保護の重要性について認識しています。</p>
      <p class="mb-16">個人情報の保護に関する法律を遵守できるよう、以下のプライバシーポリシー（以下、本プライバシーポリシー）に従い、適切な取扱い、保護そして継続的改善に努めます。</p>

      <h2 class="mb-8 text-3xl font-bold">個人情報の収集</h2>
      <p class="mb-8">当カンファレンスは、個人情報の入手を適法かつ公正な手段によって行うものとし、ユーザーの意思に反する不正な入手を行わないものとします。</p>
      <p class="mb-8">当カンファレンスでは、ユーザーの以下の個人情報を取り扱います。</p>
      <ul class="pl-12 mb-16 list-disc">
        <li>
          メールアドレス
          <ul class="pl-12 mb-4 list-circle">
            <li class="mt-4">本ウェブサイトで入力されたメールアドレス</li>
            <li>スポンサーお申し込みフォームで入力されたメールアドレス</li>
            <li>CFP お申し込みフォームで入力されたメールアドレス</li>
          </ul>
        </li>
        <li>
          名前
          <ul class="pl-12 mb-4 list-circle">
            <li class="mt-4">スポンサーお申し込みフォームで入力されたご担当者名</li>
            <li>CFP お申し込みフォームで入力されたお名前</li>
          </ul>
        </li>
      </ul>

      <h2 class="mb-8 text-3xl font-bold">個人情報の利用目的</h2>
      <p class="mb-8">当カンファレンスは、ユーザーから収集した個人情報を、以下の目的で利用するものとします。</p>
      <ul class="pl-12 mb-16 list-decimal">
        <li>当カンファレンスの更新情報をご提供する場合</li>
        <li>当カンファレンスに関するご案内、お問い合わせ等へ対応する場合</li>
        <li>ユーザーに対して当カンファレンスに対する意見、感想のご提供を求める場合</li>
        <li>当カンファレンス各規約等に違反する行為又はその恐れのある行為を行ったユーザーに対して注意又は警告を行う場合</li>
        <li>当カンファレンスに対する債務を有するユーザーに同債務の履行を要求する場合</li>
        <li>当カンファレンスに関する規約等の変更などを通知する場合</li>
      </ul>

      <h2 class="mb-8 text-3xl font-bold">使用する Third Party Cookie</h2>
      <p class="mb-8">当カンファレンスでは、本ウェブサイトの利用状況や利便性を向上させるために、Third Party が提供するサービスを利用しており、そのThird Party によって Cookie が設定されることがあります。当カンファレンスで利用している Third Party のサービスは以下のとおりです。</p>
      <ul class="pl-12 mb-8 list-disc">
        <li>Google Analytics</li>
        <li>Google Document</li>
      </ul>
      <p class="mb-8">Third Party それぞれの Cookie の利用により取得されたデータは、各サービスの運営会社が定めるプライバシーポリシーに従って取得、管理されます。</p>
      <p class="mb-8">当該運営会社のプライバシーポリシーや Cookie に関する説明は、以下をご参照ください。</p>
      <ul class="pl-12 mb-16 list-disc">
        <li>
          Google 社の <a
            target="_blank"
            rel="noreferrer"
            href="https://policies.google.com/privacy?hl=ja"
            class="hover:text-gray-500 underline focus:underline focus:outline-none transition cursor-pointer"
          >プライバシーポリシー</a>
        </li>
      </ul>
      <div class="mb-32 text-center">
        <LinkButtonField
          :link="linkUrl"
          title-label="トップに戻る"
        />
      </div>
    </div>
    <ichimatsu-divided-bar color="vue-blue" />
    <footer-page-section />
  </div>
</template>
