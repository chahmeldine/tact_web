type Locale = 'fr' | 'en' | 'zh';
type LandingRoute = {
  path: string;
  hash: string;
  query: {
    lang?: string | string[] | null;
  };
};

const landingCopies = {
  fr: {
    meta: {
      title: 'Installer',
      description: 'Installe TACT pour partager ta carte digitale par NFC, QR ou lien public.',
    },
    nav: {
      product: 'Produit',
      pricing: 'Prix',
      business: 'Business',
      start: 'Démarrer',
      homeLabel: 'TACT accueil',
      mainLabel: 'Navigation principale',
    },
    stores: {
      label: 'Liens de téléchargement',
      playStore: 'Play Store',
      appGallery: 'APPGallery',
      appleStore: 'Apple Store',
    },
    hero: {
      eyebrow: 'NFC Android · Lien · iOS',
      title: 'Ta carte.\nUn geste.\nPartout.',
      copy: 'Pose ton téléphone. Ton contact reçoit ta carte sans app, sans friction. TACT transforme chaque rencontre en connexion réelle.',
      demo: 'Voir une démo →',
      phoneStatus: 'Android · NFC actif',
      name: 'Alex Moreau',
      role: 'Product Designer · Paris',
      tabs: ['Carte', 'Contacts', 'Stats'],
    },
    stats: [
      ['0 s', 'pour partager'],
      ['∞', 'contacts'],
      ['23+', 'réseaux supportés'],
      ['100%', 'sans papier'],
    ],
    features: {
      eyebrow: 'Pourquoi TACT',
      title: 'Une carte de visite ne se donne pas. Elle se pose.',
      items: [
        ['01', 'NFC virtuel Android', 'Ton téléphone partage ta carte via HCE quand le parcours NFC est actif et autorisé.'],
        ['02', 'Page publique gettact.app/toi', 'Un lien propre. Une page qui ressemble à ta carte. Partageable par SMS, mail, QR code ou tap NFC.'],
        ['03', 'QR et partage iOS', 'Sur iPhone, TACT reste fluide avec lien, QR code et partage système.'],
        ['04', 'Contacts enrichis', 'Tags, notes, date de rencontre et rappels de relance pour chaque personne rencontrée.'],
        ['05', 'Stats de partage', 'Vues par source, clics, NFC vs lien vs QR. Tu sais ce qui intéresse vraiment.'],
        ['06', 'Design premium', 'Noir. Blanc. Syne. DM Sans. Ta carte reflète ton niveau, pas un template générique.'],
      ],
    },
    steps: {
      eyebrow: 'Comment ça marche',
      title: 'Quatre gestes, pas un tunnel.',
      items: [
        ['01', 'Crée ta carte', 'Photo, identité, réseaux sociaux et prévisualisation en temps réel.'],
        ['02', 'Active le NFC', 'Sur Android, active HCE et garde un QR prêt quand le contexte l’exige.'],
        ['03', 'Pose, c’est partagé', 'L’autre téléphone reçoit un lien web. Ta carte s’ouvre instantanément.'],
        ['04', 'Suis tes connexions', 'Vues, sources, contacts et relances. Ton réseau devient actionnable.'],
      ],
      androidTitle: 'Sur Android',
      androidCopy: 'HCE pour partager la carte depuis le téléphone, avec lien public et QR en secours.',
      iosTitle: 'Sur iOS',
      iosCopy: 'Partage par lien, AirDrop ou QR code. Complet, différent, pensé pour les limites iOS.',
    },
    pricing: {
      eyebrow: 'Tarifs',
      title: 'Simple comme ta carte.',
      tableLabel: 'Offres TACT',
      headers: ['Offre', 'Type', 'Prix', 'Contenu', 'Action'],
      offers: [
        ['Gratuit', '—', '0€', '1 carte digitale, NFC, contacts illimités, stats 7j', 'Commencer'],
        ['Premium', 'Mensuel', '7,99€/mois', 'Stats complètes, multi-cartes, rappels, SMS auto', 'Passer Premium'],
        ['PRO', 'Annuel', '79,99€/an', 'Tout Premium + carte métal offerte', 'Choisir PRO'],
        ['Carte PVC', 'One-shot', '14,99€', 'Carte physique NFC', 'Commander'],
        ['Carte Métal', 'One-shot', '24,99€', 'Carte métal brossé NFC', 'Commander'],
      ],
    },
    testimonials: [
      ["J'ai posé mon téléphone, la personne a reçu ma carte. Elle n'avait pas TACT. Ça a quand même marché.", 'Thomas V. — Fondateur'],
      ['Fini les cartes papier oubliées au fond d’un sac. Mes contacts me disent toujours qu’ils ont vu ma page.', 'Sarah M. — Designeuse freelance'],
      ["Les stats m'ont montré que mon LinkedIn convertit 3× plus que mon site.", 'Karim B. — Dev indie'],
    ],
    testimonialsLabel: 'Témoignages',
    final: {
      title: 'Commence à\nréseauter mieux.',
      copy: "Télécharger l'application gratuitement",
    },
  },
  en: {
    meta: {
      title: 'Install',
      description: 'Install TACT to share your digital card by NFC, QR code, or public link.',
    },
    nav: {
      product: 'Product',
      pricing: 'Pricing',
      business: 'Business',
      start: 'Start',
      homeLabel: 'TACT home',
      mainLabel: 'Main navigation',
    },
    stores: {
      label: 'Download links',
      playStore: 'Play Store',
      appGallery: 'APPGallery',
      appleStore: 'Apple Store',
    },
    hero: {
      eyebrow: 'Android NFC · Link · iOS',
      title: 'Your card.\nOne gesture.\nEverywhere.',
      copy: 'Tap your phone. Your contact receives your card with no app and no friction. TACT turns every meeting into a real connection.',
      demo: 'See a demo →',
      phoneStatus: 'Android · NFC active',
      name: 'Alex Moreau',
      role: 'Product Designer · Paris',
      tabs: ['Card', 'Contacts', 'Stats'],
    },
    stats: [
      ['0 s', 'to share'],
      ['∞', 'contacts'],
      ['23+', 'supported networks'],
      ['100%', 'paperless'],
    ],
    features: {
      eyebrow: 'Why TACT',
      title: 'A business card is not handed out. It is tapped.',
      items: [
        ['01', 'Virtual Android NFC', 'Your phone shares your card via HCE when the NFC flow is active and authorized.'],
        ['02', 'Public gettact.app/you page', 'A clean link. A page that looks like your card. Share it by text, email, QR code, or NFC tap.'],
        ['03', 'QR and iOS sharing', 'On iPhone, TACT stays smooth with links, QR code, and native share.'],
        ['04', 'Enriched contacts', 'Tags, notes, meeting dates, and follow-up reminders for every person you meet.'],
        ['05', 'Sharing stats', 'Views by source, clicks, NFC vs link vs QR. Know what actually gets attention.'],
        ['06', 'Premium design', 'Black. White. Syne. DM Sans. Your card feels intentional, not generic.'],
      ],
    },
    steps: {
      eyebrow: 'How it works',
      title: 'Four gestures, not a funnel.',
      items: [
        ['01', 'Create your card', 'Photo, identity, social links, and real-time preview.'],
        ['02', 'Enable NFC', 'On Android, enable HCE and keep a QR code ready when context requires it.'],
        ['03', 'Tap to share', 'The other phone receives a web link. Your card opens instantly.'],
        ['04', 'Track connections', 'Views, sources, contacts, and reminders. Your network becomes actionable.'],
      ],
      androidTitle: 'On Android',
      androidCopy: 'HCE shares the card from the phone, with public link and QR fallback.',
      iosTitle: 'On iOS',
      iosCopy: 'Share by link, AirDrop, or QR code. Complete, different, designed around iOS limits.',
    },
    pricing: {
      eyebrow: 'Pricing',
      title: 'As simple as your card.',
      tableLabel: 'TACT offers',
      headers: ['Offer', 'Type', 'Price', 'Includes', 'Action'],
      offers: [
        ['Free', '—', '€0', '1 digital card, NFC, unlimited contacts, 7-day stats', 'Start'],
        ['Premium', 'Monthly', '€7.99/mo', 'Full stats, multiple cards, reminders, auto SMS', 'Go Premium'],
        ['PRO', 'Yearly', '€79.99/yr', 'Everything Premium + free metal card', 'Choose PRO'],
        ['PVC Card', 'One-shot', '€14.99', 'Physical NFC card', 'Order'],
        ['Metal Card', 'One-shot', '€24.99', 'Brushed metal NFC card', 'Order'],
      ],
    },
    testimonials: [
      ['I tapped my phone and the person got my card. They did not have TACT. It still worked.', 'Thomas V. — Founder'],
      ['No more paper cards forgotten at the bottom of a bag. My contacts always mention they saw my page.', 'Sarah M. — Freelance designer'],
      ['The stats showed my LinkedIn converts 3× better than my website.', 'Karim B. — Indie dev'],
    ],
    testimonialsLabel: 'Testimonials',
    final: {
      title: 'Start\nnetworking better.',
      copy: 'Download the app for free',
    },
  },
  zh: {
    meta: {
      title: '安装',
      description: '安装 TACT，通过 NFC、二维码或公开链接分享你的数字名片。',
    },
    nav: {
      product: '产品',
      pricing: '价格',
      business: '商务',
      start: '开始',
      homeLabel: 'TACT 首页',
      mainLabel: '主导航',
    },
    stores: {
      label: '下载链接',
      playStore: 'Play Store',
      appGallery: 'APPGallery',
      appleStore: 'Apple Store',
    },
    hero: {
      eyebrow: 'Android NFC · 链接 · iOS',
      title: '你的名片。\n一个动作。\n随处分享。',
      copy: '轻触手机，对方无需安装应用即可收到你的名片。TACT 让每次见面都变成真实连接。',
      demo: '查看演示 →',
      phoneStatus: 'Android · NFC 已开启',
      name: 'Alex Moreau',
      role: '产品设计师 · 巴黎',
      tabs: ['名片', '联系人', '数据'],
    },
    stats: [
      ['0 秒', '完成分享'],
      ['∞', '联系人'],
      ['23+', '支持平台'],
      ['100%', '无纸化'],
    ],
    features: {
      eyebrow: '为什么选择 TACT',
      title: '名片不是递出去的，而是轻触分享的。',
      items: [
        ['01', 'Android 虚拟 NFC', '在 NFC 流程开启并授权后，手机可通过 HCE 分享你的名片。'],
        ['02', '公开页面 gettact.app/you', '一个干净的链接，一个像名片一样的页面。短信、邮件、二维码或 NFC 都可分享。'],
        ['03', '二维码与 iOS 分享', '在 iPhone 上，TACT 通过链接、二维码和系统分享保持流畅。'],
        ['04', '增强联系人', '为每个见过的人添加标签、备注、见面日期和跟进提醒。'],
        ['05', '分享数据', '按来源查看浏览和点击，比较 NFC、链接和二维码的效果。'],
        ['06', '高级设计', '黑、白、Syne、DM Sans。你的名片不再像通用模板。'],
      ],
    },
    steps: {
      eyebrow: '如何使用',
      title: '四个步骤，不是复杂流程。',
      items: [
        ['01', '创建名片', '照片、身份、社交链接和实时预览。'],
        ['02', '开启 NFC', '在 Android 上启用 HCE，并准备二维码作为备用方式。'],
        ['03', '轻触即分享', '对方手机收到网页链接，你的名片立即打开。'],
        ['04', '跟踪连接', '浏览、来源、联系人和提醒，让人脉变得可行动。'],
      ],
      androidTitle: 'Android',
      androidCopy: 'HCE 从手机分享名片，并提供公开链接和二维码备用。',
      iosTitle: 'iOS',
      iosCopy: '通过链接、AirDrop 或二维码分享。完整体验，但遵循 iOS 限制。',
    },
    pricing: {
      eyebrow: '价格',
      title: '像你的名片一样简单。',
      tableLabel: 'TACT 套餐',
      headers: ['套餐', '类型', '价格', '内容', '操作'],
      offers: [
        ['免费', '—', '0€', '1 张数字名片、NFC、无限联系人、7 天数据', '开始'],
        ['Premium', '月付', '7,99€/月', '完整数据、多张名片、提醒、自动短信', '升级 Premium'],
        ['PRO', '年付', '79,99€/年', '包含 Premium 全部功能 + 免费金属卡', '选择 PRO'],
        ['PVC 卡', '一次性', '14,99€', '实体 NFC 卡', '订购'],
        ['金属卡', '一次性', '24,99€', '拉丝金属 NFC 卡', '订购'],
      ],
    },
    testimonials: [
      ['我轻触手机，对方就收到了我的名片。他没有安装 TACT，但依然成功了。', 'Thomas V. — 创始人'],
      ['再也不用担心纸质名片被忘在包里。我的联系人总会说他们看过我的页面。', 'Sarah M. — 自由设计师'],
      ['数据告诉我，LinkedIn 的转化是网站的 3 倍。', 'Karim B. — 独立开发者'],
    ],
    testimonialsLabel: '用户评价',
    final: {
      title: '开始\n更好地建立人脉。',
      copy: '免费下载应用',
    },
  },
} as const;

export function useLandingCopy() {
  const route = getLandingRoute();
  const locale = computed<Locale>(() => {
    const lang = route.query.lang;

    if (lang === 'en' || lang === 'zh' || lang === 'fr') {
      return lang;
    }

    return 'fr';
  });
  const copy = computed(() => landingCopies[locale.value]);
  const currentPath = computed(() => route.path);

  function localizedPath(targetLocale: Locale, hash = route.hash) {
    return {
      path: currentPath.value,
      query: { lang: targetLocale },
      hash,
    };
  }

  function sectionPath(hash: string) {
    return {
      path: '/',
      query: { lang: locale.value },
      hash,
    };
  }

  function sectionHref(hash: string) {
    return `/?lang=${locale.value}${hash}`;
  }

  return { copy, locale, localizedPath, sectionPath, sectionHref };
}

function getLandingRoute(): LandingRoute {
  try {
    return useRoute() as LandingRoute;
  } catch {
    return {
      path: '/',
      hash: '',
      query: {},
    };
  }
}
