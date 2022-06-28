<script setup lang="ts">
import SponsorList from '~/components/sponsors/SponsorList.vue'
import { ISponsor, Rank } from '~/types/sponsors'
import SectionTitle from '~/components/SectionTitle.vue'

import Image01 from '!url-loader!~/assets/img/animation/image05.png'
const sponsors: ISponsor[] = [
  {
    id: '1234',
    name_jp: 'Sponsor_1',
    name_jp_kana: 'スポンサー_1',
    name_en: 'Sponsor_1',
    twitter: '@vuefes',
    facebook: 'vuefes',
    image: Image01,
    corporate_url: '#',
    rank: 'platinum',
  },
  {
    id: '2345',
    name_jp: 'Sponsor_2',
    name_jp_kana: 'スポンサー_2',
    name_en: 'Sponsor_2',
    twitter: '@vuefes',
    facebook: 'vuefes',
    image: Image01,
    corporate_url: '#',
    rank: 'platinum',
  },
  {
    id: '12345634',
    name_jp: 'Sponsor_3',
    name_jp_kana: 'スポンサー_3',
    name_en: 'Sponsor_3',
    twitter: '@vuefes',
    facebook: 'vuefes',
    image: Image01,
    corporate_url: '#',
    rank: 'platinum',
  },

  {
    id: '1234',
    name_jp: 'Sponsor_1',
    name_jp_kana: 'スポンサー_1',
    name_en: 'Sponsor_1',
    twitter: '@vuefes',
    facebook: 'vuefes',
    image: Image01,
    corporate_url: '#',
    rank: 'gold',
  },
  {
    id: '2345',
    name_jp: 'Sponsor_2',
    name_jp_kana: 'スポンサー_2',
    name_en: 'Sponsor_2',
    twitter: '@vuefes',
    facebook: 'vuefes',
    image: Image01,
    corporate_url: '#',
    rank: 'gold',
  },
  {
    id: '12345634',
    name_jp: 'Sponsor_3',
    name_jp_kana: 'スポンサー_3',
    name_en: 'Sponsor_3',
    twitter: '@vuefes',
    facebook: 'vuefes',
    image: Image01,
    corporate_url: '#',
    rank: 'gold',
  },
  {
    id: '12345123',
    name_jp: 'Sponsor_4',
    name_jp_kana: 'スポンサー_4',
    name_en: 'Sponsor_4',
    twitter: '@vuefes',
    facebook: 'vuefes',
    image: Image01,
    corporate_url: '#',
    rank: 'gold',
  },
  {
    id: '123456789',
    name_jp: 'Sponsor_1',
    name_jp_kana: 'スポンサー_1',
    name_en: 'Sponsor_1',
    twitter: '@vuefes',
    facebook: 'vuefes',
    image: Image01,
    corporate_url: '#',
    rank: 'gold',
  },
  {
    id: 'asdfasdf',
    name_jp: 'Sponsor_2',
    name_jp_kana: 'スポンサー_2',
    name_en: 'Sponsor_2',
    twitter: '@vuefes',
    facebook: 'vuefes',
    image: Image01,
    corporate_url: '#',
    rank: 'gold',
  },
  //   {
  //   id: 'asdfasdfqwer',
  //   name_jp: 'Sponsor_3',
  //   name_jp_kana: 'スポンサー_3',
  //   name_en: 'Sponsor_3',
  //   twitter: '@vuefes',
  //   facebook: 'vuefes',
  //   image: Image01,
  //   corporate_url: '#',
  //   rank: 'gold',
  // },
  //   {
  //   id: 'asdfzxcv',
  //   name_jp: 'Sponsor_4',
  //   name_jp_kana: 'スポンサー_4',
  //   name_en: 'Sponsor_4',
  //   twitter: '@vuefes',
  //   facebook: 'vuefes',
  //   image: Image01,
  //   corporate_url: '#',
  //   rank: 'gold',
  // }
]

const platinumSponsors = sponsors.filter(sponsor => sponsor.rank === 'platinum')
const goldSponsors = sponsors.filter(sponsor => sponsor.rank === 'gold')
const silverSponsors = sponsors.filter(sponsor => sponsor.rank === 'silver')
const bronzeSponsors = sponsors.filter(sponsor => sponsor.rank === 'bronze')
const mediaSponsors = sponsors.filter(sponsor => sponsor.rank === 'media')
</script>

<template>
  <section
    id="sponsors"
    class="py-10 px-5 bg-sponsors md:px-10 lg:p-20"
  >
    <div class="py-20 bg-white lg:py-40">
      <div class="mx-auto max-w-[41.875rem] sm:max-w-[51.25rem] md:max-w-[73.75rem]">
        <SectionTitle
          class="mb-10 lg:mb-20"
          title="Sponsors"
          title-yamato="スポンサー"
        />
        <SponsorList :sponsors="platinumSponsors" />
        <SponsorList :sponsors="goldSponsors" />
        <SponsorList :sponsors="silverSponsors" />
        <SponsorList :sponsors="bronzeSponsors" />
        <SponsorList :sponsors="mediaSponsors" />
      </div>
    </div>
  </section>
</template>
