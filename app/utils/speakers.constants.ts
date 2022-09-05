export const speakers = [
  {
    id: 'yyx990803',
    name: 'Evan You',
    title: 'Vue クリエーター',
    image: '/speaker/evan.jpeg',
    description:
      'Evan is an independent open source developer and is the creator / project lead of Vue and Vite.',
    twitter: 'youyuxi',
    github: 'yyx990803',
    session: {
      title: 'キーノート',
      description: '調整中',
      time: 40,
    },
  },
  {
    id: 'posva',
    name: 'Eduardo San Martin Morote',
    title: 'Pinia クリエーター',
    image: '/speaker/eduardo.jpeg',
    description:
      'Eduardo is a Frontend Nerd who works on the Vue.js Core Team, with a special focus on the Vue Router.',
    twitter: 'posva',
    github: 'posva',
    session: {
      title: 'State Alchemy with Pinia',
      description:
        '<p>Pinia might be a light library with a simple API but it takes advantage of many Vue Reactivity concepts like Effect Scopes, that are unknown by most. In this talk we will go through some of the internals of Pinia, understanding them and discovering how to enhance our usage of Pinia.</p>',
      time: 20,
    },
  },
  {
    id: 'Atinux',
    name: 'Sebastien Chopin',
    title: 'NuxtLabs CEO',
    image: '/speaker/sebastien.jpeg',
    description:
      'Author of Nuxt and CEO at NuxtLabs. I am passionate about open source and developer experience. I strive to make the web faster and create the flow feeling for developers by making the best tools to express their full creativity.',
    twitter: 'Atinux',
    github: 'Atinux',
    linkedin: 'atinux',
    session: {
      title: 'From Zero to One',
      description:
        '<p>Live coding session about making a full blown deployed application with Nuxt 3.</p>',
      time: 20,
    },
  },
  {
    id: 'patak',
    name: 'Matias Capeletto',
    title: 'Vite コアチームメンバー',
    image: '/speaker/matias.jpeg',
    description: 'A collaborative being, working full time on the Vite ecosystem @StackBlitz.',
    twitter: 'patak_dev',
    github: 'patak-dev',
    web: 'https://patak.dev/',
    session: {
      title: 'Vite 3 and Beyond',
      description: '<p>New Vite features in Vite 3, state of Core dev, and what is next.</p>',
      time: 20,
    },
  },
  {
    id: 'anfu',
    name: 'Anthony Fu',
    title: 'Vue, Vite, Nuxt コアチームメンバー',
    image: '/speaker/anthony.jpg',
    description: 'Anthony is a fanatical open sourceror. DX and ecosystem for Vue, Vite and Nuxt.',
    twitter: 'antfu7',
    github: 'antfu',
    session: {
      title: 'Patterns of VueUse',
      description:
        '<p>Patterns and best practices we have learnt during the past two years of building VueUse.</p>',
      time: 20,
    },
  },
  {
    id: 'Jess',
    name: 'Jessica Sachs',
    title: 'PathAI スタッフエンジニア',
    image: '/speaker/jess.jpg',
    description:
      'Jess is a Staff Software Engineer at <a class="inner-link" href="https://www.pathai.com/" target="_blank" rel="noopener">PathAI</a> where she’s building their component library, Anodyne. She’s been coding for more than 10 years and now works professionally within the Open Source community. She is a Core Team Member of both Cypress ambassador and <a class="inner-link" href="https://fakerjs.dev/" target="_blank" rel="noopener">Faker</a> and a contributor to <a class="inner-link" href="https://vuejs.org/" target="_blank" rel="noopener">Vue</a> and <a class="inner-link" href="https://vitest.dev/" target="_blank" rel="noopener">Vitest</a>. She’s also an educator at Vue Mastery.',
    twitter: '_JessicaSachs',
    github: 'JessicaSachs',
    session: {
      title: '調整中',
      description: '調整中',
      time: 20,
    },
  },
  // {
  //   id: 'Akryum',
  //   name: 'Guillaume Chau',
  //   title: 'Vue コアチームメンバー',
  //   image: '/speaker/Akryum.jpeg',
  //   description: 'Open Source contributor, Engineer @ Livestorm.',
  //   twitter: 'Akryum',
  //   github: 'Akryum',
  //   session: {
  //     title: 'How Vite enables Histoire',
  //     description: 'A deep dive about how Histoire works.',
  //     time: 20,
  //   },
  // },
  // 国内スピーカー
  {
    id: 'miyaoka',
    name: 'miyaoka',
    title: '株式会社STUDIO フロントエンドエンジニア',
    image: '/speaker/miyaoka.jpeg',
    description:
      'ノーコードデザインツールのSTUDIOで、フロントエンド技術を利用したGUIツールの開発をしています',
    twitter: 'miyaoka',
    github: 'miyaoka',
    session: {
      title: 'Vue2 Vue3 マイグレーション 令和最新 最強',
      description:
        '<p>Vue1時代から開発を続けてきた1000コンポーネント規模のプロジェクトを3ヶ月でVue3に移行した話をします。Vue3化は変更点が大きいため移行コストが問題になりますが、なぜ、どのようにして行ったのか、作業につまづいたところ、どのようなメリットがあったかなどを振り返って話します。</p>',
      time: 20,
    },
  },
  {
    id: 'yamanoku',
    name: 'やまのく',
    title: 'フロントエンドデザイナー',
    image: '/speaker/yamanoku.png',
    description: `1児の父で猫3匹と大型犬1頭の飼い主。<br>
    株式会社クラウドワークスに所属する傍ら Web 技術を活用したユーザビリティ向上について考えてます。<br>
    Vue.js には関連する OSS のドキュメント翻訳での貢献をしています。`,
    twitter: 'yamanoku',
    github: 'yamanoku',
    session: {
      title: 'Vue.js でアクセシブルなコンポーネントをつくるために',
      description: `<p>昨今 Web 開発において、アクセシビリティを重視することはそれほど珍しくなくなってきました。<br>
      最新の Vue.js 公式ドキュメントでもアクセシビリティに関する項目が追加されました。<br>
      しかしながらアクセシビリティ対応に関しては、間違った知識のままはじめるとアクセシブルでなくなる可能性もあります。<br>
      この発表ではそうした間違いや疑問を解消し Vue.js でのアクセシビリティ向上に取り組みやすくするやり方を発表いたします。</p>`,
      time: 20,
    },
  },
  {
    id: 'ota-meshi',
    name: '太田 洋介',
    title: 'フューチャー株式会社 Technology Innovation Group シニアアーキテクト',
    image: '/speaker/ota-meshi.jpeg',
    description:
      'eslint-plugin-vueのメンテナー。Vue.js Core Team メンバー。Stylelint、Stylus、Intlifyのチームメンバー。Google Open Source Peer Bonus 2022受賞。',
    twitter: 'omoteota',
    github: 'ota-meshi',
    session: {
      title: 'eslint-plugin-vueを使用して継続的にVue3移行する',
      description: `<p>Vue2のアプリケーションをVue3に移行するニーズは増えてきていると思いますが、複数のアプリケーションを移行する場合、手動で実施するのはコストもかかりますし、Vue2をメインに使用してきたエンジニアが、新しいVue3でのアプリケーション開発で古い機能を使ってしてしまうというリスクもあります。<br>
      eslint-plugin-vueは古い書き方を検知し、場合によって自動的にVue3の新しい書き方に書き換えることで、継続的にVue3移行を助けます。<br>
      セッションでは、自社の開発するアプリケーションで実際にeslint-plugin-vueを使用してVue3移行を進めた話とともに、eslint-plugin-vueのVue3移行を助けるチェックルールや、自社のアプリケーション専用に独自に作成したカスタムルールの一部も紹介できればと考えています。</p>`,
      time: 20,
    },
  },
  {
    id: 'shigasy',
    name: '志賀 奎太',
    title: 'Retty株式会社 Webエンジニア',
    image: '/speaker/shigasy.jpg',
    description: `Retty株式会社に新卒で入社。toC領域でリニューアルプロジェクトなどを経て、現在はtoB領域の開発に従事。<br>
    趣味はeスポーツ観戦。`,
    twitter: '',
    github: 'shigasy',
    session: {
      title: '施策を止めるな！Vue2からVue3への移行',
      description: `<p>Vue3が正式リリースして約2年が経ちます。「そろそろウチのプロジェクトもVue3にしたい」と思う気持ちはありつつ、メインの施策を優先してしまい移行のための時間を取れないことが往々にしてあります。<br>
      そのような中、Rettyではチームと連携して「メインの施策を止めることなく」「大きな不具合を起こすことなく」Vue3に移行することができました。<br>
      チームで作業する時のポイントや具体的なVue3への移行手順、移行する前に知っておけば良かったことなどをご紹介します。</p>`,
      time: 20,
    },
  },
  {
    id: 'tbashiyy',
    name: 'tbashiyy',
    title: '株式会社イエソド エンジニア',
    image: '/speaker/tbashiyy.jpeg',
    description: `株式会社イエソドのエンジニア。<br>
    Vue.js + TypeScript、Server-Side Kotlinを利用してプロダクト作りに励んでいます。<br>
    型のある言語が好みです。趣味はビール片手に料理すること。`,
    twitter: 'tbashiyy',
    github: 'tbashiyy',
    session: {
      title: '十数万レコードに耐えうるVue.jsプロジェクトを実現するためのパフォーマンスチューニング',
      description: `
        <p>ブラウザの高速化された昨今でも、Vue.js/Vuexで大量のレコードや要素を扱うにはちょっとした試行錯誤が必要です。<br>
        弊社のVue.jsプロジェクトでは、初回ローディング時にほぼ全てのデータをフロントエンドで読み込み処理します。今年に入り十数万件のデータを扱うこととなりました。試しにテストしてみると、緩やかな時の流れの世界がそこにはありました。しかし、チーム総出でチューニングを行った結果、Vue.jsはいきいきと動き出したのです！<br>
        本セッションでは、パフォーマンスチューニングで得られたプラクティスをご紹介します。</p>
        <ul>
        <li>Chrome DevToolsの活用</li>
        <li>リアクティブのコントロール</li>
        <li>Intersection Observerを使った表示の制限</li>
        <li>繰り返し使用するコンポーネントの関数型コンポーネント化etc…</li>
        </ul>
        <p>※Vue2.Xでの事例となります。</p>
      `,
      time: 20,
    },
  },
  {
    id: 'monsat',
    name: '田中弘治',
    title: '株式会社ダイレクトサーチジャパン 代表取締役',
    image: '/speaker/monsat.png',
    description:
      'コワーキングスペース茅場町 Co-Edo を運営するかたわら、フロントエンドエンジニアとして開発も行っています。開発はすべて独学で行い、独立後は受託開発を本業としています。 Vue.js 3, Nuxt 3, TypeScript, Firebase, Stripe API, GitHub API 等を活用した開発をおもに行っています。',
    twitter: 'ktanaka',
    github: 'monsat',
    session: {
      title: 'Nuxt モジュールの作り方を知って 開発した機能を再利用しよう',
      description: `
        <p>Nuxt 3 は Nuxt Kit により、モジュール作成がより効率的になりました。<br>
        モジュールは使ったことはあるけど、作ったことはないという方もいるかもしれません。<br>
        モジュールの作り方を知れば、時間をかけて開発した機能を、再利用して使い回すことが可能です。<br>
        本セッションでは、ゼロからモジュール開発を体験していただきます。</p>
        <p>使う側から、作る側へ。みんなで Vue.js や Nuxt のエコシステムを広げていきましょう。</p>
        <ul>
        <li>プラグインと Nuxt モジュール、両者の役割</li>
        <li>Nuxt モジュールの使い方</li>
        <li>モジュール開発、最初の一歩</li>
        <li>カスタマイズしやすくなった Nuxt 3 の Hooks (Nuxt Hooks と App Hooks)</li>
        <li>シンプルで実践的なモジュール開発例</li>
        </ul>
      `,
      time: 20,
    },
  },
  {
    id: 'mew-ton',
    name: 'みゅーとん',
    title: '株式会社hacomono 基盤開発',
    image: '/speaker/mew-ton.jpg',
    description: `趣味で3Dアバターを使って楽器演奏などをしています。<br>
    仕事では、株式会社hacomono でフロントエンドの開発基盤の実装を主に担当しています。<br>
    手間最小で最大限テストできるフロントエンドの開発基盤設計を日々模索しています。`,
    twitter: '_mew_ton',
    github: 'mew-ton',
    session: {
      title: 'デザインシステムを後から導入する前提で作った 変更に強いNuxt3プロジェクトの構成',
      description: `<p>弊社では将来的に弊社独自のデザインシステムの設計の後、既存のプロジェクトをすべて置き換えていく予定となっています。<br>
      私は、直近立ち上がった新規プロジェクトにて、将来的にデザインシステムに置き換わることが確実であることを前提として、変化に強く、テストコードによる品質を担保できるNuxt3プロジェクト開発基盤を作りましたので、本セッションにて共有できればと思います。</p>`,
      time: 20,
    },
  },
  {
    id: 't0yohei',
    name: 'とよへい',
    title: '株式会社クラウドワークス web エンジニア',
    image: '/speaker/t0yohei.jpeg',
    description:
      'Vue.js に出会ってフロントエンド開発の楽しさを知った人。新卒で SIer に入社後、株式会社クラウドワークスに転職。以後 Rails + CoffeeScript, Vue.js な web アプリケーションの開発、 Vue.js の社内布教を行う。最近は新規事業開発の何でも屋さん。',
    twitter: 't0yohei',
    github: 't0yohei',
    session: {
      title: '負債まみれのレガシーフロントエンド画面を Vue.js でリプレイスした話',
      description: `
        <p>とある Rails のテンプレート + CoffeeScript で構築された画面を、 Vue.js でリプレイスしました。<br>
        その際の知見を、具体的な工夫や悩んだポイント、実際の遭遇した技術的負債の話を交えて共有できればと思います。<br>
        本セッションのキーワードは以下になります。</p>
        <ul>
        <li>Vue3 の script setup + TypeScript に始まる開発体験の良さ</li>
        <li>Container Component、Layout Component などの開発プラクティス</li>
        <li>Storybook、 StoryShots(VRT) によるフロントエンド DX</li>
        <li>あるべき姿に至るまでの長い道のりと取捨選択</li>
        <li>命令的 UI から宣言的 UI へのパラダイムの変更</li>
        <li>Ajax のリクエストを送ると、json にシリアライズされた html が帰ってくる API のエンドポイント</li>
        <li>忍耐力</li>
        </ul>
      `,
      time: 20,
    },
  },
  {
    id: 'kawamataryo',
    name: '川俣 涼',
    title: 'LAPRAS株式会社 ソフトウェアエンジニア',
    image: '/speaker/kawamataryo.jpg',
    description:
      'LAPRAS株式会社のソフトウェアエンジニア。新卒で地元茨城県の消防本部に就職し、消防隊、救急隊として6年間勤務。その後、妻の仕事の手伝いで始めたHP制作をきっかけにエンジニアへ転職。エムスリー株式会社、株式会社Misocaを経て現職に。趣味は懸垂。',
    twitter: 'KawamataRyo',
    github: 'kawamataryo',
    session: {
      title: 'JSからTSへ移行したVue.jsプロダクトの型チェックを漸進的に強化する',
      description: `<p>昨今のフロントエンド開発では、型による安全性と開発者体験の向上が見込めるTypeScript（以下TS）の採用がほぼ標準となっています。<br>
      しかしReactに比べTSへの対応が遅れたVue.jsのプロダクトでは、まだTS化が出来ていないものや、型チェックが緩いままのものが数多くあると思います。<br>
      本セッションでは、JSからTSへ移行したVue.jsプロダクトにて、自作ツールや計測ダッシュボードを駆使して斬新的に型チェックを強化していった過程についてお話します。<br>
現在、Vue.jsプロダクトのTS化、型チェックの強化を検討している方の参考になれば嬉しいです。</p>`,
      time: 20,
    },
  },
  {
    id: 'kenji7157',
    name: '川野邉 賢二',
    title: 'ENECHANGE株式会社 フロントエンドエンジニア',
    image: '/speaker/kenji7157.jpeg',
    description:
      '新卒から受託開発企業、SES企業を経験した後に、ENECHANGE株式会社で「エネルギーの未来をつくる」フロントエンドエンジニアとして従事。趣味はランニング・個人開発。お手やわらかに。',
    twitter: 'kenji7157',
    github: 'kenji7157',
    session: {
      title: '「こわくない」Vuetifyで始めるOSSコントリビュート',
      description:
        '<p>Vuetifyに"コントリビュート"する手順についてお話しします。開発環境の構築からPR作成・マージされるところまで、分かりやすく丁寧に解説します。OSS開発・コントリビュートにトライしたい方のお力になれば嬉しいです。</p>',
      time: 20,
    },
  },
  {
    id: 'watsuyo',
    name: 'watsuyo',
    title: '株式会社 iCARE フロントエンドエンジニア, PjM',
    image: '/speaker/watsuyo.jpeg',
    description:
      'iCAREのフロントエンドエンジニア、PjM。 産業技術大学院大学情報アーキテクチャコース在学中。Vue.js や TypeScript を使用したプロダクトやデザインシステムを開発。最近は、PjM も担当。趣味は、美味しい焼肉とお寿司を食べること。',
    twitter: 'watsuyo_2',
    github: 'watsuyo',
    session: {
      title: '安全に開発効率を上げるための Vue 2.7 移行',
      description: `
        <p>株式会社 iCARE では、Vue 2.6 で開発しているプロダクトを、 Vue 2.7 を経由してから Vue 3 に移行する計画を立てました。<br>
        以下の内容を発表します。</p>
        <ul>
        <li>なぜ移行先は Vue 3 でなく、Vue 2.7 を選んだのか</li>
        <li>Vue 2.7 を経由することによって軽減される負担とリスク</li>
        <li>開発スピードを落とせない環境下で、バージョン移行を実現するために必要なこと</li>
        <li>Vue 2.6 から Vue 2.7 への移行コストはどれくらいなのか</li>
        <li>移行の費用対効果</li>
        <li>移行の感想と反省</li>
        </ul>
      `,
      time: 20,
    },
  },
  {
    id: 'KanDai',
    name: '菅家 大地',
    title: '株式会社プレイド デザインエンジニア',
    image: '/speaker/KanDai.jpg',
    description: `株式会社プレイドでデザインエンジニアとしてVue３やReactを使った開発をしています。<br>
    Webコンサルティング会社のデザイナー、株式会社TAMのフロントエンドエンジニアを経て現職。<br>
    2019年に宮城県に移住。仙台でフロントエンド系のコミュニティの運営をしています。`,
    twitter: 'kan_dai',
    github: 'KanDai',
    session: {
      title: 'NuxtJSによるJamstack構築とNuxt 3でどう変わるのか',
      description: `<p>モダンなWebアプリやWebサイト構築のアーキテクチャとして数年前からJamstackが注目されています。Vue.jsでもNuxtJSのSSG(Static Site Generation)やGridsomeのようなフレームワークを使うことでJamstackのサイトを構築できます。<br>
      このセッションでは、実際にNuxtJS(v2)とmicroCMSを使ったサイト構築で得た知見として、NuxtJSでJamstackサイトを構築する際に必要な基礎知識やシステム構成、規模が大きくなった時のビルド周りの最適化、運用に関するヒントや実際に苦労したポイントなどを紹介します。<br>
      その上で、今夏リリース予定のNuxt3のSSG周りの変更点を、実際のコードなどを交えながら紹介していきます。</p>`,
      time: 20,
    },
  },
  {
    id: 'KushibikiMashu',
    name: 'プログラミングをするパンダ',
    title: 'BASE株式会社 シニアエンジニア',
    image: '/speaker/KushibikiMashu.png',
    description: `新卒で就職した日系大手企業を退職した後、Web系の開発会社に転職してエンジニアとしてキャリアを始める。<br>
    その後、弁護士ドットコム株式会社でレガシーシステムの改善、SaaS事業の新規開発・運用などを経験した後、2021年にフロントエンドエンジニアとしてBASE株式会社に入社。<br>
    社外活動では、技術ブログを執筆したり Software Design 2022年3月号のTDD特集に寄稿するなど情報発信を行なっている。アジャイル開発（XP、スクラム）とTDDが好き。現在DevOpsを勉強中。`,
    twitter: 'Panda_Program',
    github: 'KushibikiMashu',
    session: {
      title:
        '社内用共通コンポーネントのビジュアルリグレッションテストにStorybookとChromaticを選択した話',
      description: `
        <p>Vue を取り巻くエコシステム（ツール）とその運用の話です。</p>
        <p>■ 概要<br>
        社内のコンポーネントライブラリに対してStorybookとChromaticでビジュアルリグレッションテストを導入して、見た目のデグレを防止している話をします。</p>
        <p>■ 詳細<br>
        Chromaticとは、Storybookのメンテナーが作成しているStorybook用のツールです。<br>
        ストーリーごとのスクリーンショットを撮影し、差分を画像で比較してくれる機能を備えています。</p>
        <p>以下の課題を解決することを目的にして Chromatic を導入しました。</p>
        <ul>
        <li>既存のコンポーネントを改修した際に発生する DOM、CSS に起因する表示崩れを自動で検知できないこと</li>
        <li>依存モジュールのバージョンアップに時間がかかること</li>
        </ul>
        <p>その結果、両方の課題を解決できた上に作業が楽になったという話をします。<br>
        また、なぜ他のテストではなくてビジュアルリグレッションテストを導入したのか、その意思決定の過程についても紹介します。</p>
        <p>なお、本発表は以下の3記事の内容を合わせて再構成したものになる予定です。</p>
        <ul>
        <li><a class="inner-link" target="_blank" rel="noopener" href="https://devblog.thebase.in/entry/2021/12/08/203039">「Storybook と Chromatic でビジュアルリグレッションテストを実施する」</a></li>
        <li><a class="inner-link" target="_blank" rel="noopener" href-"https://devblog.thebase.in/entry/process-of-introduction-of-chromatic">「ビジュアルリグレッションテストのツールを導入するまでの意思決定プロセス」</a></li>
        <li><a class="inner-link" target="_blank" rel="noopener" href-"https://devblog.thebase.in/entry/typescript-compiler-api-storybook">「TypeScript Compiler API で40の Storybook コンポーネントを storiesOf から CSF（Component Story Format）に置換した」</a></li>
        </ul>
      `,
      time: 20,
    },
  },
  {
    id: '8845musign',
    name: '腹筋ローラーの力を信じろ',
    title: '株式会社イエソド デザイナー&フロントエンドエンジニア',
    image: '/speaker/8845musign.jpg',
    description:
      '株式会社イエソド。デザインとエンジニアリングの両側面からWebサイト制作・Webサービス開発に従事。また、『Every Layout -モジュラーなレスポンシブデザインを実現するCSS設計論』を共同監訳。システム運用からディレクション、デザイン、開発の幅広い経験を活かして活動中。',
    twitter: 'yesodco_yoko',
    github: '8845musign',
    session: {
      title: '不確実性のある将来に対応するためのデザイン戦略',
      description: `<p>ソフトウェア開発には不確実性がつきものです。初期フェーズにおいてはUIの過度の一貫性や、多機能なコンポーネントはプロダクトの将来を狭める可能性があります。 また、デザイナーである私はデザインのすべてを掌握したいと考えます。ですが、現実には多くの人の手によってデザインは成長していきます。<br>
      私はルールやパーツの「責務を絞る」ことで、将来の不確実性に対応しつつ最低限の一貫性を担保できると考えています。Tailwindに代表されるユーティリティクラスのアプローチや、Every Layoutのコンポジションレイアウトなど、いくつかの選択肢があります。<br>
      そして、さまざまな粒度のレイヤーにおいて「デザインの道具」を提供していくことで、スキル・職種を問わずにデザインへ取り組みやすくなるかもしれません。<br>
      本セッションでは、私が関わっているVue.jsのプロジェクトでの取り組みをご説明します。</p>`,
      time: 20,
    },
  },
  // LT
  {
    id: 'oreo',
    name: 'oreo',
    title: '株式会社iCARE フロントエンドエンジニア',
    image: '/speaker/oreo2990.jpeg',
    description:
      '新卒で商社に入社し、水産業や林業といった生活産業部門のリスク管理業務に5年間従事。自身が行なってきた与信管理自動化ツールに出会ったことがきっかけで、プログラミングに興味を持ちエンジニアにジョブチェンジ。2021年9月から現職に。趣味はブログ執筆とモルック。',
    twitter: 'oreo2991',
    github: 'oreo2990',
    session: {
      title: 'レガシーなMPAアプリケーションをwebpackからviteに移行する話',
      description: `<p>株式会社iCAREでは、Vue2.6(※2.7に移行中)+Composition APIで開発を行っており、vue2系では比較的モダンな構成です。一方、Ruby on RailsのView毎にVueインスタンスを生成するMPAであり、アプリケーション全体の構成としては、レガシーな構造になっています。
      エントリーポイントが多いことによる弊害で、サービス拡大に伴いビルド時間は長くなり、最近では開発サーバーの立ち上げに約2分も掛かるようになりました。これを改善すべく、Vue2.7化と併せてビルドシステムのWebpackからViteへの移行を試みています。
      SPAへのVite導入等に関しては記事がありますが、レガシーなMPAアプリケーションでのVite移行に関する記事はあまりなく、移行できるか？等の不安や疑問を抱きながら実装を進めています。本LTでは、この取り組みを通して得た知見を共有させて頂きます。</p>`,
      time: 5,
    },
  },
  {
    id: 'ebiryu',
    name: 'ebiryu',
    title: 'ストックマーク株式会社 ソフトウェアエンジニア',
    image: '/speaker/ebiryu.jpg',
    description:
      'ストックマーク株式会社で、主にフロントエンドの開発をしています。<br>型やテストのある開発環境やテスト可能なコンポーネント設計、デザインシステムの運用に関心があります。',
    twitter: 'ebiryu65',
    github: 'ebiryu',
    session: {
      title: 'provide/injectを用いたローカルな状態管理',
      description: `
      <p>フロントエンドの状態管理というとVuex、Piniaによるグローバルな状態管理の手法がよく取り上げられます。しかし、開発を進めていると、Atomic Designでいうmoleculesやorganisms規模のコンポーネントに状態を持たせたい、などローカルな状態管理が欲しくなる場面も発生します。</p>
      <p>このとき、コンポーネント内で状態を定義すると外から状態の参照や操作をすることが難しくなってしまいます。これを解決するために、親コンポーネントの状態をpropsやv-modelで渡すと、状態管理の責務が親に移りコードの見通しが悪くなります。</p>
      <p>本LTでは、Composition APIのprovide/injectを活用してローカルな状態を管理する方法を紹介します。Composition APIのinjectを用いると外からの状態操作をオプショナルにできるため、実装がシンプルになります。</p>
      `,
      time: 5,
    },
  },
  {
    id: 'l4dybird',
    name: '掛水優輝',
    title: '株式会社デジタルバリュー ディベロッパー',
    image: '/speaker/l4dybird.jpeg',
    description:
      '新卒から地方IT企業を経験した後、株式会社デジタルバリューにてフロントエンドエンジニアとしてインターネットバンキングの開発に携わっており Nuxt2 + Composition API で開発をしています。<br>プライベートでは C# を用いて Discord Bot を開発しています。最近は Vitest にお熱。',
    twitter: 'GekiUmaOsushi',
    github: 'l4dybird',
    session: {
      title: 'Nuxt2 + Composition API から Nuxt Bridge へのマイグレーションのすゝめ',
      description: `
      <p>Nuxt3 のリリースが近づくにつれて既存で開発している Nuxt2 アプリケーションを Nuxt Bridge へマイグレーションをする必要が出てきています。</p>
      <p>Nuxt2 でも Nuxt Bridge へのマイグレーションに備えて準備できる事がある為、今回は unplugin-auto-import を利用した AutoImport の導入について知見を共有できればと思います。</p>
      `,
      time: 5,
    },
  },
  {
    id: 'FurusawaKaoru',
    name: '古澤 棟熏(ふるさわ かおる)',
    title: 'ユアマイスター株式会社 フロントエンドエンジニア',
    image: '/speaker/FurusawaKaoru.gif',
    description:
      '新卒で金融系の受託会社に就職した後により困難にチャレンジするためにユアマイスター株式会社に転職。最近はVue.jsやNuxtを使いながらリプレースや新機能を開発しています。',
    twitter: 'firirice',
    github: 'FurusawaKaoru',
    session: {
      title: 'Nuxt Content v2でエンジニアブログを作っている話',
      description: `
      <p>Nuxtの公式モジュールで強力なヘッドレスCMSのNuxt ContentがNuxt3のRCに続いて、5月25日にV2がリリースされました。 こちらを利用し、一からエンジニアブログを開発している中で私が開発体験がいいと感じて便利だと思った機能についてお話します。</p>
      <p>Nuxt Content V2はNuxt3に対応したモジュールのため、Nuxt3を前提にお話しますが、セッションではNuxt3については触れない予定です。<br>
      また、V1は触ったことがないためV1と比較してよくなった点などは話せないかもしれないのでご了承ください。</p>
      `,
      time: 5,
    },
  },
]
