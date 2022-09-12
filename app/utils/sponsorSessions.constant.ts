export const sponsorSessions = [
  {
    id: 'medpeer',
    sponsor: 'メドピア株式会社',
    session: {
      title: 'メドピアのサービスにおけるテスト戦略の過去と未来',
      description: `医療系サービスを提供するメドピア株式会社の、2019 年からサービス開始しているかかりつけ薬局サービス「kakari」におけるフロントエンドテスト戦略。<br>
      Jest を使ったユニットテストと、Playwright を使った e2e テスト、検討導入して結局はずしてしまった Storybook やスナップショットテストなどについてのお話をします。`,
      time: 20,
    },
    speakers: [
      {
        image: '/speaker/kazuhiro-kobayashi.jpeg',
        title: 'フロントエンドエンジニア',
        name: '小林 和弘',
        twitter: 'kzhrk0430',
        github: 'kzhrk',
        description:
          '2019年10月メドピア入社。薬局と患者さんを繋ぐかかりつけ薬局化支援サービス「kakari」の開発を担当。',
      },
    ],
  },
  {
    id: 'future',
    sponsor: 'フーチャー株式会社',
    session: {
      title: '業務システムでVue.jsを活用するための取り組み',
      description: `2017年、フューチャーでは、業務システム開発において、初めてVue.jsを採用しました。<br>
      その後、開発者の教育をはじめ、開発者体験向上のための取り組みやUIコンポーネントの自社開発をするなど、改善を続け、アパレル、食品小売、メディア、金融、医療など、様々な業界のお客様のシステムに導入しています。<br>
      その過程で、社内で発生した課題をOSSへ還元する活動をしているうちに、Vue.jsコアチームに選出されるメンバが出たりと、当社にとってもVue.jsはなくてはならない存在になっています。<br>
      このセッションでは、Vue.jsが当社で活用されていくストーリーを、プロジェクト事例を交えて、ご紹介します。`,
      time: 20,
    },
    speakers: [
      {
        image: '/speaker/kenichi-hoshi.png',
        title: '執行役員/アーキテクト',
        name: '星 賢一',
        twitter: 'shout_star',
        github: 'shout-star',
        description:
          'フューチャー株式会社でコアテクノロジーグループ（R&D部門）のリーダーを務めています。Vue.jsコアチーム ota-meshiの上長と名乗ったほうがわかりやすいかもしれません（笑）',
      },
      {
        image: '/speaker/takuya-kishimoto.png',
        title: 'テクノロジーアーキテクト',
        name: '岸本 卓也',
        twitter: '',
        github: '',
        description:
          'プロジェクトで技術領域のリーディングを担当しており、得意領域はフロントエンド～バックエンドのアプリ部分です。主にJavaやJavaScriptと戯れつつ日々を過ごしています。',
      },
    ],
  },
  {
    id: 'cloudsign',
    sponsor: 'クラウドサイン',
    session: {
      title: 'Design System Meets Vue.js',
      description: `クラウドサインは、従来の「紙と印鑑」による契約作業を「クラウド」に置き換え、契約締結から契約書管理までがオンラインでできる契約マネジメントプラットフォームです。<br>
      リリースから 6 年経過したクラウドサインですが、成長の影には常にデザインシステムの存在がありました。<br>
      デザインシステムとは不変のものではなく、クラウドサインの事業、プロダクト、組織の成長と共に姿を変えていく必要があるものであると、私たちは考えています。<br>
      本発表では、私たちのデザインシステムの変遷について紹介し、その中で Vue.js がいかにデザイナーとフロントエンドの橋渡し役になってくれたかを説明します。`,
      time: 20,
    },
    speakers: [
      {
        image: '/speaker/hivesbee.jpeg',
        title: 'クラウドサイン事業部 エンジニアリングマネージャー / TL',
        name: '芳賀 将至',
        twitter: '',
        github: 'hivesbee',
        description: `電子契約プラットフォーム「クラウドサイン」のエンジニアリングマネージャー。<br>
      新卒でSIerに入社し、その後官公庁向けのパッケージサービス開発などを経て、2017年弁護士ドットコムに入社。<br>
      フロントエンドをメインとする最初のエンジニアとして設計から実装までを担当。`,
      },
    ],
  },
  {
    id: 'hey',
    sponsor: 'ヘイ株式会社',
    session: {
      title: 'プロダクト開発を止めずに Composition API と TypeScript に最速で移行するための戦い',
      description: `弊社のプロダクト、ネットショップ開設サービス「STORES」は Nuxt.js で開発を行なっており、多くのページやコンポーネントは Composition API と TypeScript で書かれています。<br>
      しかし、ストアデザイン機能など、一部のUIが複雑なページは Options API と JavaScript のままであり、リファクタリングもコストが高く、機能追加や改善の手が入れづらい状態が続いていました。<br>
      本セッションでは複雑で手がつけずらいソースコードをプロダクト開発を止めることなく、且つ安全に最速で移行するために考えた戦術をご紹介します。`,
      time: 20,
    },
    speakers: [
      {
        image: '/speaker/m0nch1.jpeg',
        title: 'フロントエンドエンジニア',
        name: 'm0nch1',
        twitter: 'm0nch12',
        github: 'm0nch1',
        description: `・主に官公庁のWeb受託開発の中小企業に4年ほど在籍したのち、フロントエンドエンジニアとして2021年にheyに入社<br>
        ・ネットショップ開設サービス「STORES」の新規機能開発ラインでリーダーをしています<br>
        ・熊が好き
        `,
      },
      {
        image: '/speaker/wattanx.jpeg',
        title: 'フロントエンドエンジニア',
        name: 'wattanx',
        twitter: 'pontaxx',
        github: 'wattanx',
        description: `・新卒で受託開発系の会社に入社し、業務系Webアプリケーションの開発に従事。<br>
        ・フロントエンドエンジニアとして2022年1月にheyに入社。<br>
        ・現在はSTORESの開発に関わっている。<br>
        ・猫が好き
        `,
      },
    ],
  },
  {
    id: 'line',
    sponsor: 'LINE株式会社',
    session: {
      title: 'LINE MUSIC のパフォーマンスを向上させた Vue3 マイグレーション',
      description: `みなさんは仕事中などにパソコンで音楽を聴くことはありますか？ LINE MUSIC はスマホアプリだけではなくWeb版アプリがあります。<br>
      Vue.js を使用している LINE MUSIC のWeb版アプリでは、パフォーマンスの向上を目的に Vue3 へのマイグレーションを行いました。<br>
      その結果、アプリの読込時間が半分に減少するなど大きな成果が得られました。<br>
      このセッションでは Vue2 で実装されたプロジェクトを運用されている方に向けて、どういった経緯で Vue3 へのマイグレーションを行う事にし、どのようにして進めたか、そしてマイグレーション前後のパフォーマンスの変化をご紹介します。`,
      time: 20,
    },
    speakers: [
      {
        image: '/speaker/shibasaka.jpeg',
        title: 'フロントエンドエンジニア',
        name: '柴坂浩行',
        twitter: 'pastelcoder',
        github: 'yukishiba',
        description:
          '京都のWeb製作会社でWebデザイナー、フロントエンドエンジニアを経て Vue.js のとりこになる。現在はLINE株式会社の京都開発室で LINE MUSIC のフロントエンドを担当。',
      },
    ],
  },
  // {
  //   id: 'yesod',
  //   sponsor: '株式会社イエソド',
  //   session: {
  //     title: '',
  //     description: '',
  //     time: 20,
  //   },
  //   speakers: [
  //     {
  //       image: '',
  //       title: '',
  //       name: '',
  //       twitter: '',
  //       github: '',
  //       description: '',
  //     },
  //   ],
  // },
  {
    id: 'grapecity',
    sponsor: 'グレープシティ株式会社',
    session: {
      title: 'Vue.jsのUIを強化するグレープシティのJavaScriptライブラリ',
      description: `グレープシティはアプリケーション開発を支援するライブラリを提供しています。
      昨今のWeb関連技術の進歩に伴い、企業の業務アプリも急激にWeb化が進み、高いUXを求めてフロントエンドのフレームワークにVue.jsが採用されるケースが増えてきています。<br>
      
      Vue.jsのエコシステムは非常に強力で、それだけでもアプリ開発は可能ですが、弊社の提供するJavaScript UIライブラリを使用することで、業務アプリに求められる様々な要件に素早く対応できます。<br>
      
      本セッションでは、「Excelライク」なスプレッドシートを実現する「SpreadJS（スプレッドJS）」をはじめとした、Vue.jsで使えるグレープシティのJavaScript UIライブラリをデモを交えながらご紹介します。`,
      time: 20,
    },
    speakers: [
      {
        image: '/speaker/hiroyuki-fukui.png',
        title: 'ツール事業部 プロダクトマーケティング',
        name: '福井 潤之（フクイ ヒロユキ）',
        twitter: '',
        github: '',
        description: `2012年7月にグレープシティに入社。<br>
        .NET Framework用開発コンポーネント製品のテクニカルサポートとプロダクトマネージャーを経て、現在はJavaScriptライブラリ製品のプロダクトマーケティングに従事。`,
      },
    ],
  },
  {
    id: 'icare',
    sponsor: '株式会社iCARE',
    session: {
      title: '急拡大中のヘルステックSaaSを支えるフロントエンド開発',
      description: `iCAREは現役の産業医が代表を務める法人向けヘルスケアサービスを提供する会社です。 「働くひとの健康を世界中に創る」をパーパス（存在意義）に掲げ、企業に眠る健康データ（健康診断・ストレスチェック・産業医⾯談など）を⼀元管理することで、働きがいのある組織創りを支援する健康管理システムCarelyを開発・提供しています。<br>
      今回のセッションでは、Vue2.7+Composition APIにTypescriptやGraphQLを使用したフロントエンド開発についてご紹介します。`,
      time: 20,
    },
    speakers: [
      {
        image: '/speaker/ogijun.png',
        title: 'CTO',
        name: '荻野 淳也',
        twitter: 'ogijun',
        github: '',
        description:
          '20年以上システム開発に携わった後、2015年からコーヒー屋に転身したものの、2021年から再び開発の現場へ。',
      },
      {
        image: '/speaker/shoko.png',
        title: 'フロントエンドエンジニア',
        name: 'Shoko',
        twitter: '',
        github: '',
        description: `2021年からフロントエンドエンジニアとしてiCAREに参画。<br>
        最近はフロントエンドだけでなく、サーバーサイドにも挑戦中。`,
      },
    ],
  },
  {
    id: 'base',
    sponsor: 'BASE株式会社',
    session: {
      title: 'BASEのフロントエンド組織が2.5倍の人数になってどう変わったのか',
      description: `2020年9月に公開されたテックブログ「<a class="inner-link" href="https://devblog.thebase.in/entry/2020/09/17/110000" target="_blank" rel="noopener">BASEにおけるVue.jsのこれまでとこれから</a>」から2年経ち、当時から比べるとフロントエンド組織の人数が2.5倍に増加しました。<br>
      本セッションでは、記事公開から2年の間の組織の変遷と合わせて、人数増加に伴って拡大したBASEのVue.jsのコードベースのmonorepo化と、既存のVue資産の運用と今後の展望についてお話をします。`,
      time: 20,
    },
    speakers: [
      {
        image: '/speaker/gatchan0807.png',
        title: 'BASE株式会社 Product Dev Division エンジニア',
        name: 'がっちゃん',
        twitter: 'gatchan0807',
        github: 'gatchan0807',
        description:
          '1996年生まれ、大阪府出身。専門学校卒業後、新卒で株式会社じげんにフロントエンドエンジニアとして入社。その後2021年1月にBASE株式会社に転職し、現在はEコマースプラットフォーム「BASE」のWeb開発に従事している。',
      },
    ],
  },
]
