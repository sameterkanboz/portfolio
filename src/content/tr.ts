import type { Content } from "./types";

export const tr: Content = {
  lang: "tr",
  meta: {
    title: "Samet Erkan Boz · Full Stack Mühendis",
    description:
      "İstanbul'da full stack mühendis. Abonelik markası beije için Next.js, React ve NestJS ile mağaza siteleri, yönetim araçları ve servisler geliştiriyorum.",
  },
  other: { href: "/", label: "English", hrefLang: "en" },
  hero: {
    eyebrow: "Full stack mühendis, İstanbul",
    headline:
      "Bir abonelik işinin arkasındaki mağaza sitelerini, yönetim araçlarını ve servisleri geliştiriyorum.",
    lede: "Temmuz 2024'ten beri, regl bakım ürünlerini abonelikle satan beije'de çalışıyorum. Landing sayfalarıyla başladım; bugün Next.js uygulamaları ve NestJS servislerinden oluşan bir monorepoda platform işlerini üstleniyorum.",
    email: "E-posta gönder",
  },
  work: {
    label: "İşler",
    heading: "beije'de neler yaptım",
    intro:
      "Full Stack Developer, Temmuz 2024'ten bugüne. Yaptığım işin genişliğini en iyi dört iş anlatıyor.",
    cases: [
      {
        title: "Müşteri sitesi",
        body: "2025'ten beri beije.co'nun en aktif geliştiricisiyim. Kampanya ve landing sayfalarını, 3D Secure ve tek kullanımlık şifreyle ödeme alan, kayıtlı kartları destekleyen sepet ve ödeme adımlarını, aboneliği düzenleme, erteleme ve iptal akışlarını, iade talebini de formundan e-postalarına kadar ben geliştirdim.",
        tags: ["Next.js", "React", "MUI", "Redux Toolkit"],
      },
      {
        title: "Yeni yönetim paneli",
        body: "Eski operasyon panelini yeni bir Next.js paneline taşıdım: toplu işlem yapılabilen sipariş kuyrukları, iadeler ve geri dönen siparişler, promosyon kodları ve kuponlar, etiket ve fatura yazdırma, müşteri ve yorum yönetimi. Tek kod tabanı iki markaya hizmet ediyor, Türkçe ve İngilizce çalışıyor ve her yöneticiye yalnızca yetkisinin izin verdiği ekranları gösteriyor.",
        tags: ["Next.js", "GraphQL", "Refine", "next-intl"],
      },
      {
        title: "Monorepo genelinde platform yükseltmesi",
        body: "Yedi frontend uygulamasının tamamını iki haftada React 19, Next.js 16 ve MUI 9'a taşıdım; aynı işte ESLint 9 düz yapılandırmasına ve daha yeni bir Nx sürümüne geçtik. Ekip için geçiş rehberini de ben yazdım.",
        tags: ["React 19", "Next.js 16", "MUI 9", "Nx"],
      },
      {
        title: "Bütün sistemi çalıştıran uçtan uca testler",
        body: "İlk aylarımda müşteri sitesinin Cypress testlerinin çoğunu yazdım, sonra yönetim paneli için Playwright'ı kurdum. Testler CI'da, örnek verilerle doldurulmuş yerel bir Docker ortamına ve ödeme test ortamına karşı çalışıyor; bozulan bir ödeme adımı müşteriye ulaşmadan pull request'te yakalanıyor.",
        tags: ["Playwright", "Cypress", "Docker", "GitHub Actions"],
      },
    ],
    alsoLabel: "beije'de ayrıca",
    also: [
      {
        title: "ruuts.xyz",
        body: "beije'nin tıraş ürünleri alt markası ruuts'un markaya özel özelliklerinin çoğu: başlangıç kiti düzenleyicisi, ileri bir tarihte başlayan abonelikler ve beije hesabıyla kayıt.",
      },
      {
        title: "Her servis için yerelleştirilmiş hatalar",
        body: "Yaklaşık on NestJS servisinin hata ve doğrulama mesajlarını kullanıcının dilinde ve numaralı hata kodlarıyla döndürmesini sağlayan ortak kütüphane.",
      },
      {
        title: "Figma'dan gelen tasarım değişkenleri",
        body: "Figma tasarım sisteminden üretilen renk, yazı ve boşluk değişkenleri, elle yazılmış değerleri reddeden bir lint kuralı ve rengini çevresindeki metinden alan yaklaşık 1.400 ikonluk tek bir kütüphane.",
      },
      {
        title: "Backend servisleri",
        body: "Hız sınırlı SMS doğrulama kodları, giriş geçmişi, topluluk için moderasyon API'leri, yönetici yetkileri ve etiket yazdırmayı da içeren kargo firması entegrasyonları.",
      },
    ],
  },
  path: {
    label: "Öncesi",
    heading: "Buraya nasıl geldim",
    steps: [
      {
        period: "2024",
        role: "Frontend Developer, sözleşmeli",
        place: "kargakarga",
        note: "Next.js ile performans odaklı web sayfaları.",
      },
      {
        period: "2024",
        role: "Full Stack Stajyer",
        place: "Kafein",
        note: "Bir ayda veritabanından ekranlarına kadar bir mobil uygulama; React Native, Go ve PostgreSQL ile.",
      },
      {
        period: "2023",
        role: "Frontend Developer, sözleşmeli",
        place: "fiyatperformans",
        note: "Next.js ve Redux ile e-ticaret arayüzü.",
      },
      {
        period: "2022 – 2023",
        role: "Frontend Developer",
        place: "Depixen",
        note: "React ve React Native ürünleri, Three.js ile 3D araştırma çalışmaları.",
      },
      {
        period: "2020 – 2024",
        role: "Bilgisayar Mühendisliği, lisans",
        place: "İstanbul Gelişim Üniversitesi",
        note: "Son yılımda üniversitenin robotik araştırma merkezinde öğrenci asistanlığı.",
      },
    ],
  },
  stack: {
    label: "Teknolojiler",
    heading: "Neyle çalışıyorum",
    groups: [
      {
        title: "Frontend",
        body: "TypeScript, React, Next.js, MUI, Redux Toolkit, Storybook, React Native",
      },
      {
        title: "Backend",
        body: "Node.js, NestJS, GraphQL, MongoDB, PostgreSQL, RabbitMQ",
      },
      {
        title: "Test ve yayın",
        body: "Playwright, Cypress, Nx, GitHub Actions, Docker",
      },
    ],
  },
  contact: {
    label: "İletişim",
    heading: "Bana ulaşın",
    body: "Bana en hızlı e-postayla ulaşabilirsiniz. Bir iki gün içinde yanıtlarım.",
  },
};
