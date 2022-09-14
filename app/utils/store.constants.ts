interface IGoods {
  image: string
  name: string
  price: string
  description: string
  specification: string
  url: string
}

export const storeDescription =
  'Vue Fes Japan オリジナルグッズをお買い求めいただける Vue Fes Store のご注文受付期間は終了しました。商品の発送は10月上旬ごろを予定しています。到着をお楽しみに！'

export const goodsList: IGoods[] = [
  {
    image: 't-shirt.png',
    name: 'Tシャツ',
    price: '3,500円',
    description:
      'カタカナフォントが印象的な Vue Fes Japan オリジナル Tシャツです。型崩れしにくく、洗濯で伸び縮みしにくい生地を使用しています。',
    specification: 'カラー：ホワイト\nサイズ：S / M / L / XL / XXL / XXXL',
    url: 'https://vuejs-jp.stores.jp/items/62d3d1d50850a04b31f5503e',
  },
  {
    image: 'parker.png',
    name: 'パーカー',
    price: '5,500円',
    description:
      'Vue Fes Japan Online 2022 のメインビジュアルをあしらった、ポケット付きのフルジップパーカーです。肌触りが良いパイル裏地のスウェット生地を使用しています。',
    specification: 'カラー：ナチュラル\nサイズ：S / M / L / XL',
    url: 'https://vuejs-jp.stores.jp/items/62d3d0354ff8c260c98a56a8',
  },
  {
    image: 'eco_bag.png',
    name: 'エコバッグ',
    price: '1,000円',
    description:
      '普段のお買い物に使える、収納力たっぷりの大判エコバッグです。使わないときはポケットに小さく畳んで収納できます。',
    specification: 'カラー：ネイビー\nサイズ：W460×H400mm（バッグ本体）',
    url: 'https://vuejs-jp.stores.jp/items/62d3ced7dbe74476407ba99e',
  },
  {
    image: 'blanket.png',
    name: 'ブランケット',
    price: '3,500円',
    description:
      '少しずつ寒さを感じるようになる、Vue Fes 本番の秋にぴったりのブランケットです。繊維が長くフカフカな仕上げになっています。',
    specification: 'サイズ：W900×H650mm',
    url: 'https://vuejs-jp.stores.jp/items/62d3d73fdbe74476407babb8',
  },
  {
    image: 'smartphone_ring.png',
    name: 'スマホリング',
    price: '1,000円',
    description:
      '落下防止や、動画視聴に最適なスマホリングです。専用の強粘着テープで取り付けるだけですぐに使えます。リングは360度回転し、前後にも180度スイングします。',
    specification: 'サイズ：W35mm×H40mm',
    url: 'https://vuejs-jp.stores.jp/items/62d3d7914ff8c260c98a589e',
  },
  {
    image: 'mobile_battery.png',
    name: 'モバイルバッテリー',
    price: '4,000円',
    description:
      'ポップな柄が散りばめられたモバイルバッテリーです。外出先のバッテリー切れに備えられます。cheero製ですので、過充電や過放電などの安全性も安心です。',
    specification: '電池容量：5000mAh\n充電時間：約4時間\n付属品：microUSBケーブル',
    url: 'https://vuejs-jp.stores.jp/items/62d3d7cdd191230ffe11ceed',
  },
  {
    image: 'vue_fes_don.png',
    name: 'Vue Fes 丼',
    price: '3,500円',
    description:
      '食事の時にも Vue Fes Japan を感じられる、つや感のあるどんぶりです。ミニサイズのラーメンや、丼ものと相性抜群。',
    specification: 'サイズ：直径17cm',
    url: 'https://vuejs-jp.stores.jp/items/62d3db73a74e3339691049b3',
  },
  {
    image: 'multi_cleaner.png',
    name: 'マルチクリーナー',
    price: '800円',
    description:
      'マイクロファイバー製のマルチクリーナーです。メガネ、スマートフォンなどマルチな用途で使えます。印刷面、裏面のどちらでも拭けます。',
    specification: 'サイズ：W200×H200mm',
    url: 'https://vuejs-jp.stores.jp/items/62d3d2499b47bf45eae53d90',
  },
  {
    image: 'sticker.jpeg',
    name: 'ステッカー',
    price: '500円',
    description:
      'Vue.js、Vue Fes Japan、Nuxtのロゴが集まった特製ステッカーです。それぞれロゴの形に合わせて切り抜かれています。',
    specification: 'サイズ：W164×H133mm',
    url: 'https://vuejs-jp.stores.jp/items/62d3d28e9b47bf3d14e54747',
  },
]

export const storeSupplement =
  '※グッズ販売における利益は、すべて Vue Fes Japan の運営、または Vue.js 日本ユーザーグループの活動のために大切に使わせていただきます。'
