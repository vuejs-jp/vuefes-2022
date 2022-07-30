interface IGoods {
  image: string
  name: string
  price: string
  description: string
  specification: string
}

export const storeDescription =
  'Vue Fes Japan オリジナルグッズをお買い求めいただける Vue Fes Store が今年も登場します。完全受注生産で、オンラインにてご注文いただくと、当日までにご自宅にお届けします。オリジナルグッズを揃えて、Vue Fes Japan を盛り上げましょう！'

// TODO: ご注文受付期間の修正
export const orderAcceptancePeriod = 'ご注文受付期間：●/●～●/●'
export const productShippingSchedule = '商品発送予定：9月下旬ごろ'

export const goodsList: IGoods[] = [
  {
    image: 't-shirt.png',
    name: 'Tシャツ',
    price: '3,500円',
    description:
      'カタカナフォントが印象的な Vue Fes Japan オリジナル Tシャツです。型崩れしにくく、洗濯で伸び縮みしにくい生地を使用しています。',
    specification: 'カラー：ホワイト\nサイズ：S / M / L / XL',
  },
  {
    image: 'parker.png',
    name: 'パーカー',
    price: '5,500円',
    description:
      'Vue Fes Japan Online 2022 のメインビジュアルをあしらった、ポケット付きのフルジップパーカーです。肌触りが良いパイル裏地のスウェット生地を使用しています。',
    specification: 'カラー：ナチュラル\nサイズ：S / M / L / XL',
  },
  {
    image: 'eco_bag.png',
    name: 'エコバッグ',
    price: '1,000円',
    description:
      '普段のお買い物に使える、収納力たっぷりの大判エコバッグです。使わないときはポケットに小さく畳んで収納できます。',
    specification: 'カラー：ネイビー\nサイズ：W460×H400mm（バッグ本体）',
  },
  {
    image: 'blanket.png',
    name: 'ブランケット',
    price: '3,500円',
    description:
      '少しずつ寒さを感じるようになる、Vue Fes 本番の秋にぴったりのブランケットです。繊維が長くフカフカな仕上げになっています。',
    specification: 'サイズ：W900×H650mm',
  },
  {
    image: 'smartphone_ring.png',
    name: 'スマホリング',
    price: '1,000円',
    description:
      '落下防止や、動画視聴に最適なスマホリングです。専用の強粘着テープで取り付けるだけですぐに使えます。リングは360度回転し、前後にも180度スイングします。',
    specification: 'サイズ：W35mm×H40mm',
  },
  {
    image: 'mobile_battery.png',
    name: 'モバイルバッテリー',
    price: '1,000円',
    description:
      'ポップな柄が散りばめられたモバイルバッテリーです。外出先のバッテリー切れに備えられます。cheero製ですので、過充電や過放電などの安全性も安心です。',
    specification: '電池容量：5000mAh\n充電時間：約4時間\n付属品：microUSBケーブル',
  },
  {
    image: 'vue_fes_don.png',
    name: 'Vue Fes 丼',
    price: '3,000円',
    description:
      '食事の時にも Vue Fes Japan を感じられる、つや感のあるどんぶりです。ミニサイズのラーメンや、丼ものと相性抜群。',
    specification: 'サイズ：直径17cm',
  },
  {
    image: 'multi_cleaner.png',
    name: 'マルチクリーナー',
    price: '800円',
    description:
      'マイクロファイバー製のマルチクリーナーです。メガネ、スマートフォンなどマルチな用途で使えます。印刷面、裏面のどちらでも拭けます。',
    specification: 'サイズ：W200×H200mm',
  },
  // TODO: ステッカーの説明・仕様を追加
  {
    image: 'sticker.png',
    name: 'ステッカー',
    price: '500円',
    description: '説明...',
    specification: '仕様...',
  },
]

export const storeSupplement =
  '※グッズ販売における利益は、すべて Vue Fes Japan の運営、または Vue.js 日本ユーザーグループの活動のために大切に使わせていただきます。'
