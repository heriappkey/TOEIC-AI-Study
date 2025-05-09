// --- Wrap entire script in DOMContentLoaded to ensure elements are loaded ---
document.addEventListener('DOMContentLoaded', () => {

    // --- Translations Object ---
    const translations = {
        en: {
            logoText: "TOEIC AI Study",
            navHome: "Home",
            navAbout: "About",
            navDownload: "Download",
            navFAQ: "FAQ",
            heroTitle: "TOEIC Exam Prep Made Easier with AI!",
            heroSubtitle: "Pass the TOEIC faster with personalized study plans and mock tests that follow the real exam format.",
            heroParagraph: "The TOEIC AI Study app understands your strengths and weaknesses, giving you the tools you need to grow efficiently. AI helps you learn more practically and makes it easier to pass!",
            btnPlayStore: "Google Play", // Shortened for consistency with DOCX
            btnAppStore: "App Store",   // Shortened for consistency with DOCX
            featuresTitle: "Key App Features",
            feature1Title: "20,000 Question Bank",
            feature1Desc: "Access thousands of TOEIC practice questions for every test section. With over 20,000 up-to-date questions, you can study better and practice more.",
            feature2Title: "AI-Powered Adaptive Learning",
            feature2Desc: "Questions are tailored to your skill level, ensuring you're always learning at the right pace and category, without getting bored or overwhelmed.",
            feature3Title: "Personalized Study Recommendations",
            feature3Desc: "Get daily learning suggestions crafted by AI to strengthen your weaknesses and maximize your study time.",
            feature4Title: "Detailed Feedback for Every Answer",
            feature4Desc: "Understand every question you answered with instant scoring and in-depth explanations from AI. Learn from every mistake.",
            feature5Title: "Comprehensive Multilingual Support",
            feature5Desc: "Explore the app in more than 10 languages to make learning easier in your native tongue. Enjoy a global and flexible study experience.",
            feature6Title: "Fun Learning with Visuals",
            feature6Desc: "Tired of just reading? Use our complete and interactive video library to make studying more enjoyable.",
            feature7Title: "Motivational Progress Reports",
            feature7Desc: "Track how far you’ve come each day with progress graphs that inspire you to keep going.",
            feature8Title: "Learn Anytime, Anywhere",
            feature8Desc: "Available on Android and iOS, so you can study whenever and wherever it fits into your busy schedule.",
            whyChooseTitle: "Why Choose TOEIC AI Study?",
            whyChoose1Title: "Personalized Learning Experience",
            whyChoose1Desc: "AI creates the best learning plan for you based on your study data. Experience optimal learning for maximum results.",
            whyChoose2Title: "Practical Exam Preparation",
            whyChoose2Desc: "Mock tests and practice questions follow the real TOEIC format to help you prepare more effectively and pass with higher scores.",
            whyChoose3Title: "Reliable AI Technology",
            whyChoose3Desc: "Advanced natural language processing enables AI to provide deep analysis and accurate advice—trusted by users worldwide.",
            whyChoose4Title: "Faster and More Efficient Progress",
            whyChoose4Desc: "Instant AI feedback helps you identify weaknesses and gives you actionable steps to improve quickly.",
            whyChoose5Title: "Multilingual Support",
            whyChoose5Desc: "With over 10 supported languages, you can learn from anywhere without being limited by language or culture.",
            whyChoose6Title: "Flexible Learning Anytime, Anywhere",
            whyChoose6Desc: "Make your free time more productive by studying TOEIC directly from your smartphone, anytime and anywhere.",
            whyChoose7Title: "Flexible Study Plans",
            whyChoose7Desc: "Set your own daily study sessions and goals. In-app reminders help build consistent learning habits.",
            whyChoose8Title: "Visual Progress Tracking",
            whyChoose8Desc: "Track your improvement with easy-to-understand visual progress graphs.",
            whyChoose9Title: "Community Sharing",
            whyChoose9Desc: "Study and share your progress with the community to grow faster and stay motivated.",
            whyChoose10Title: "Great for Companies & Institutions",
            whyChoose10Desc: "Robust management tools make this app a perfect fit for businesses and institutions aiming to improve team performance.",
            differentiatorsTitle: "What Makes TOEIC AI Different?",
            diff1Title: "Study Anytime, Anywhere",
            diff1Desc: "Available on Android & iOS, use your free time efficiently.",
            diff2Title: "Global Multilingual Support",
            diff2Desc: "Learn in your native language with support for over 10 languages.",
            diff3Title: "World’s Largest Question Bank",
            diff3Desc: "Over 20,000 TOEIC questions covering all topics and categories.",
            diff4Title: "Real Exam Simulation",
            diff4Desc: "Practice with tests that mimic the real TOEIC exam for more effective preparation.",
            diff5Title: "Motivating Global Ranking",
            diff5Desc: "Compete globally with others to boost your learning motivation.",
            diff6Title: "Complete Practice Categories",
            diff6Desc: "Includes all categories like listening, reading, speaking, and writing—right from your phone.",
            diff7Title: "One App for Learning and Business",
            diff7Desc: "Includes business courses to help you succeed beyond just passing the exam.",
            comparisonTitle: "Comparison with Other Apps",
            compFeature: "Feature",
            compCompetitorA: "App A",
            compCompetitorB: "App B",
            compQuestionCount: "Question Count",
            compMultilingual: "Multilingual Support",
            compRealExamSim: "Real Exam Simulation",
            compYes: "Yes",
            compSome: "Some",
            compNo: "No",
            compAIExplanation: "AI-Powered Explanation",
            compAutomatedAI: "Automated by AI + user Q&A",
            compYesBasic: "Yes (Basic)",
            compAIPoweredPlan: "AI-Powered Plan",
            compYesFull: "Yes (Full)",
            compLimited: "Limited",
            compScorePrediction: "Score Prediction",
            compYesAccurate: "Yes (Accurate)",
            compPrice: "Pricing",
            compFreemium: "Freemium",
            promoBannerText: "\"TOEIC AI Study is the next-generation TOEIC learning app that revolutionizes your learning journey—maximize your time and achieve the best results. Start now and build a brighter future!\"",
            midPageCtaTitle: "Join Now to Boost Your Score!",
            midPageCtaDesc: "Take the first step toward TOEIC success—let’s pass the exam together!",
            pricingTitle: "Unlock All AI Features",
            pricingFreeTitle: "Free Version",
            pricingFreePriceValue: "Free", // Price value only
            pricingFreeFeat1: "Limited to 4,000 Practice Questions",
            pricingFreeFeat2: "AI Feedback Available",
            pricingFreeFeat3: "Adaptive Study Plan Available",
            pricingFreeFeat4: "20-question mock test",
            pricingFreeFeat5: "Video Library Available",
            btnGetStartedFree: "Get Started Free",
            pricingPremiumTitle: "Premium Version",
            pricingPremiumPriceValue: "$14.99", // Price value only
            pricingPerMonth: "/month",
            pricingPremiumFeat1: "Over 20,000 Practice Questions available",
            pricingPremiumFeat2: "AI Feedback Available",
            pricingPremiumFeat3: "Adaptive Study Plan Available",
            pricingPremiumFeat4: "100-question mock test + AI insights",
            pricingPremiumFeat5: "Video Library Available",
            pricingPremiumFeat6: "Unlock Full AI Support",
            btnUpgradePremium: "Upgrade to Premium",
            testimonialsTitle: "What Users Say - Real Users, Real Progress",
            testimonial1Quote: "“I failed TOEIC twice before, but the AI helped me find my weak points. I passed with 820!”",
            testimonial1Name: "Heri",
            testimonial2Quote: "“It’s like having a personal tutor available 24/7. The instant feedback saved me so much time.”",
            testimonial2Name: "Harkani",
            testimonial3Quote: "“I was anxious about the exam, but this app broke down the process and kept me motivated.”",
            testimonial3Name: "Faizal",
            faqTitle: "Frequently Asked Questions",
            faq1Question: "What is TOEIC AI Study?",
            faq1Answer: "It’s a next-gen learning app using AI to help you prepare for TOEIC more efficiently. Personalized study plans and mock tests help you improve quickly.",
            faq2Question: "Which TOEIC test sections are supported?",
            faq2Answer: "All sections: speaking, reading, listening, and writing. Choose what you need to practice.",
            faq3Question: "How many practice questions are available?",
            faq3Answer: "Over 20,000, including grammar, vocabulary, and sentence structure—constantly updated.",
            faq4Question: "Does the app support multiple languages?",
            faq4Answer: "Yes! It supports more than 10 languages to help you learn in your preferred language.",
            faq5Question: "What are the benefits of the AI features?",
            faq5Answer: "AI analyzes your answers and gives you instant, personalized feedback—making it easier to improve.",
            faq6Question: "Can I use the app offline?",
            faq6Answer: "Some features are available offline, but for best experience, stay connected to the internet.",
            faq7Question: "What devices is this app available on?",
            faq7Answer: "It’s available on Android and iOS, downloadable from Google Play and Apple App Store.",
            faq8Question: "Is the app free?",
            faq8Answer: "Yes, basic features are free. For full access, there’s a premium plan with complete features.",
            faq9Question: "Is the mock test format similar to the real TOEIC exam?",
            faq9Answer: "Yes, it's designed based on the actual TOEIC format to give you realistic exam practice.",
            faq10Question: "Can I set learning goals?",
            faq10Answer: "Yes, you can set daily and weekly goals. AI will help you achieve them with reminders.",
            faq11Question: "Is it beginner-friendly?",
            faq11Answer: "Absolutely! It’s designed for beginners and adjustable for all skill levels.",
            finalCtaTitle: "Ready to Revolutionize Your TOEIC Prep with AI? Download now and take the first step toward your success.",
            finalCtaSubtitle: "Join over 500,000 learners",
            btnDownloadNowPlay: "Download Now", // Generic "Download Now" for footer buttons as per DOCX
            btnDownloadNowApple: "Download Now",
            footerRights: "All rights reserved."
        },
        jp: { // Placeholder: Using English text for JP, replace with actual translations
            logoText: "TOEIC AI スタディ", 
            navHome: "ホーム",
            navAbout: "概要",
            navDownload: "ダウンロード",
            navFAQ: "よくある質問",
            heroTitle: "AIでTOEIC試験対策がもっと簡単に！",
            heroSubtitle: "パーソナライズされた学習プランと実際の試験形式に沿った模擬テストで、より速くTOEICに合格しましょう。",
            heroParagraph: "TOEIC AI Studyアプリはあなたの長所と短所を理解し、効率的に成長するために必要なツールを提供します。AIはより実践的な学習を助け、合格を容易にします！",
            btnPlayStore: "Google Play",
            btnAppStore: "App Store",
            featuresTitle: "主なアプリ機能",
            feature1Title: "20,000問の問題バンク",
            feature1Desc: "全てのテストセクションに対応した数千のTOEIC練習問題にアクセス。20,000問以上の最新問題で、より良く学習し、より多く練習できます。",
            feature2Title: "AI搭載の適応学習",
            feature2Desc: "あなたのスキルレベルに合わせて問題が調整され、飽きたり圧倒されたりすることなく、常に適切なペースとカテゴリで学習できます。",
            feature3Title: "パーソナライズされた学習推奨",
            feature3Desc: "弱点を強化し、学習時間を最大限に活用するためにAIが作成した毎日の学習提案を受け取ります。",
            feature4Title: "全解答への詳細なフィードバック",
            feature4Desc: "AIによる即時採点と詳細な説明で、解答したすべての問題を理解します。すべての間違いから学びましょう。",
            feature5Title: "包括的な多言語サポート",
            feature5Desc: "母国語での学習を容易にするため、10以上の言語でアプリを探索できます。グローバルで柔軟な学習体験をお楽しみください。",
            feature6Title: "ビジュアルで楽しく学習",
            feature6Desc: "ただ読むのにうんざりしていませんか？完全でインタラクティブなビデオライブラリを使用して、学習をより楽しくしましょう。",
            feature7Title: "モチベーションを高める進捗レポート",
            feature7Desc: "継続する意欲を刺激する進捗グラフで、毎日の進捗状況を追跡します。",
            feature8Title: "いつでもどこでも学習",
            feature8Desc: "AndroidおよびiOSで利用可能なので、忙しいスケジュールに合わせていつでもどこでも学習できます。",
            whyChooseTitle: "TOEIC AI Studyを選ぶ理由",
            whyChoose1Title: "パーソナライズされた学習体験",
            whyChoose1Desc: "AIがあなたの学習データに基づいて最適な学習プランを作成します。最大限の結果を得るための最適な学習を体験してください。",
            whyChoose2Title: "実践的な試験対策",
            whyChoose2Desc: "模擬テストと練習問題は実際のTOEIC形式に沿っており、より効果的に準備し、より高いスコアで合格するのに役立ちます。",
            whyChoose3Title: "信頼性の高いAI技術",
            whyChoose3Desc: "高度な自然言語処理により、AIは詳細な分析と正確なアドバイスを提供できます。世界中のユーザーから信頼されています。",
            whyChoose4Title: "より速く、より効率的な進捗",
            whyChoose4Desc: "AIによる即時フィードバックは、弱点を特定し、迅速に改善するための具体的なステップを提供します。",
            whyChoose5Title: "多言語サポート",
            whyChoose5Desc: "10以上の対応言語で、言語や文化に制限されることなくどこからでも学習できます。",
            whyChoose6Title: "いつでもどこでも柔軟な学習",
            whyChoose6Desc: "スマートフォンから直接TOEICを学習することで、いつでもどこでも自由な時間をより生産的に活用できます。",
            whyChoose7Title: "柔軟な学習プラン",
            whyChoose7Desc: "毎日の学習セッションと目標を自分で設定します。アプリ内リマインダーが一貫した学習習慣の構築を助けます。",
            whyChoose8Title: "視覚的な進捗追跡",
            whyChoose8Desc: "わかりやすい視覚的な進捗グラフで改善状況を追跡します。",
            whyChoose9Title: "コミュニティ共有",
            whyChoose9Desc: "コミュニティと進捗を共有して学習し、より速く成長し、モチベーションを維持します。",
            whyChoose10Title: "企業や教育機関に最適",
            whyChoose10Desc: "堅牢な管理ツールにより、このアプリはチームのパフォーマンス向上を目指す企業や教育機関に最適です。",
            differentiatorsTitle: "TOEIC AI Studyの違い",
            diff1Title: "いつでもどこでも学習",
            diff1Desc: "AndroidおよびiOSで利用可能。空き時間を効率的に活用しましょう。",
            diff2Title: "グローバルな多言語サポート",
            diff2Desc: "10以上の言語をサポートし、母国語で学習できます。",
            diff3Title: "世界最大の問題バンク",
            diff3Desc: "すべてのトピックとカテゴリを網羅する20,000以上のTOEIC問題。",
            diff4Title: "実際の試験シミュレーション",
            diff4Desc: "実際のTOEIC試験を模倣したテストで練習し、より効果的な準備をしましょう。",
            diff5Title: "モチベーションを高めるグローバルランキング",
            diff5Desc: "学習意欲を高めるために、世界中の他の人々と競争しましょう。",
            diff6Title: "完全な練習カテゴリ",
            diff6Desc: "リスニング、リーディング、スピーキング、ライティングなど、すべてのカテゴリをスマートフォンから直接学習できます。",
            diff7Title: "学習とビジネスのための1つのアプリ",
            diff7Desc: "試験合格だけでなく、成功を助けるビジネスコースも含まれています。",
            comparisonTitle: "他のアプリとの比較",
            compFeature: "機能",
            compCompetitorA: "アプリA",
            compCompetitorB: "アプリB",
            compQuestionCount: "問題数",
            compMultilingual: "多言語サポート",
            compRealExamSim: "実際の試験シミュレーション",
            compYes: "はい",
            compSome: "一部",
            compNo: "いいえ",
            compAIExplanation: "AIによる解説",
            compAutomatedAI: "AIによる自動化＋ユーザーQ&A",
            compYesBasic: "はい（基本）",
            compAIPoweredPlan: "AI搭載プラン",
            compYesFull: "はい（完全）",
            compLimited: "限定的",
            compScorePrediction: "スコア予測",
            compYesAccurate: "はい（正確）",
            compPrice: "価格",
            compFreemium: "フリーミアム",
            promoBannerText: "「TOEIC AI Studyは、あなたの学習の旅を革新する次世代のTOEIC学習アプリです。時間を最大限に活用し、最高の結果を達成しましょう。今すぐ始めて、より明るい未来を築きましょう！」",
            midPageCtaTitle: "今すぐ参加してスコアを上げましょう！",
            midPageCtaDesc: "TOEIC合格への第一歩を踏み出しましょう。一緒に合格しましょう！",
            pricingTitle: "全てのAI機能のロックを解除",
            pricingFreeTitle: "無料版",
            pricingFreePriceValue: "無料",
            pricingFreeFeat1: "4,000の練習問題に限定",
            pricingFreeFeat2: "AIフィードバック利用可能",
            pricingFreeFeat3: "適応学習プラン利用可能",
            pricingFreeFeat4: "20問の模擬テスト",
            pricingFreeFeat5: "ビデオライブラリ利用可能",
            btnGetStartedFree: "無料で始める",
            pricingPremiumTitle: "プレミアム版",
            pricingPremiumPriceValue: "¥1,480", 
            pricingPerMonth: "/月",
            pricingPremiumFeat1: "20,000以上の練習問題が利用可能",
            pricingPremiumFeat2: "AIフィードバック利用可能",
            pricingPremiumFeat3: "適応学習プラン利用可能",
            pricingPremiumFeat4: "100問の模擬テスト＋AIインサイト",
            pricingPremiumFeat5: "ビデオライブラリ利用可能",
            pricingPremiumFeat6: "完全なAIサポートのロックを解除",
            btnUpgradePremium: "プレミアムにアップグレード",
            testimonialsTitle: "ユーザーの声 - 実際のユーザー、実際の進捗",
            testimonial1Quote: "「以前TOEICに2回落ちましたが、AIが弱点を見つける手助けをしてくれました。820点で合格しました！」",
            testimonial1Name: "ヘリ",
            testimonial2Quote: "「24時間年中無休の個人チューターがいるようです。即時フィードバックで時間を大幅に節約できました。」",
            testimonial2Name: "ハルカニ",
            testimonial3Quote: "「試験について不安でしたが、このアプリがプロセスを分解し、モチベーションを維持してくれました。」",
            testimonial3Name: "ファイザル",
            faqTitle: "よくある質問",
            faq1Question: "TOEIC AI Studyとは何ですか？",
            faq1Answer: "AIを使用してTOEICの準備をより効率的に行うための次世代学習アプリです。パーソナライズされた学習プランと模擬テストで、迅速に上達できます。",
            faq2Question: "どのTOEICテストセクションがサポートされていますか？",
            faq2Answer: "スピーキング、リーディング、リスニング、ライティングの全セクション。練習が必要なものを選択してください。",
            faq3Question: "利用可能な練習問題の数は？",
            faq3Answer: "文法、語彙、文構造を含む20,000以上。常に更新されています。",
            faq4Question: "アプリは複数の言語をサポートしていますか？",
            faq4Answer: "はい！10以上の言語をサポートしており、お好みの言語で学習できます。",
            faq5Question: "AI機能の利点は何ですか？",
            faq5Answer: "AIがあなたの解答を分析し、即座にパーソナライズされたフィードバックを提供するため、改善が容易になります。",
            faq6Question: "アプリをオフラインで使用できますか？",
            faq6Answer: "一部の機能はオフラインで利用可能ですが、最適な体験のためにはインターネットに接続したままにしてください。",
            faq7Question: "このアプリはどのデバイスで利用できますか？",
            faq7Answer: "AndroidおよびiOSで利用可能で、Google PlayおよびApple App Storeからダウンロードできます。",
            faq8Question: "アプリは無料ですか？",
            faq8Answer: "はい、基本機能は無料です。完全なアクセスには、全機能を備えたプレミアムプランがあります。",
            faq9Question: "模擬テストの形式は実際のTOEIC試験と似ていますか？",
            faq9Answer: "はい、実際のTOEIC形式に基づいて設計されており、現実的な試験練習ができます。",
            faq10Question: "学習目標を設定できますか？",
            faq10Answer: "はい、毎日および毎週の目標を設定できます。AIがリマインダーで目標達成を支援します。",
            faq11Question: "初心者にも使いやすいですか？",
            faq11Answer: "もちろんです！初心者向けに設計されており、すべてのスキルレベルに合わせて調整可能です。",
            finalCtaTitle: "AIでTOEIC対策を革新する準備はできましたか？今すぐダウンロードして、成功への第一歩を踏み出しましょう。",
            finalCtaSubtitle: "50万人以上の学習者が参加",
            btnDownloadNowPlay: "今すぐダウンロード",
            btnDownloadNowApple: "今すぐダウンロード",
            footerRights: "全著作権所有。"
        },
        id: { // Placeholder: Using English text for ID, replace with actual translations
            logoText: "TOEIC AI Study", 
            navHome: "Beranda",
            navAbout: "Tentang",
            navDownload: "Unduh",
            navFAQ: "FAQ",
            heroTitle: "Persiapan Ujian TOEIC Lebih Mudah dengan AI!",
            heroSubtitle: "Lulus TOEIC lebih cepat dengan rencana belajar yang dipersonalisasi dan tes tiruan yang mengikuti format ujian sebenarnya.",
            heroParagraph: "Aplikasi TOEIC AI Study memahami kekuatan dan kelemahan Anda, memberi Anda alat yang Anda butuhkan untuk berkembang secara efisien. AI membantu Anda belajar lebih praktis dan memudahkan kelulusan!",
            btnPlayStore: "Google Play",
            btnAppStore: "App Store",
            featuresTitle: "Fitur Utama Aplikasi",
            feature1Title: "Bank Soal 20.000",
            feature1Desc: "Akses ribuan soal latihan TOEIC untuk setiap bagian tes. Dengan lebih dari 20.000 soal terbaru, Anda bisa belajar lebih baik dan berlatih lebih banyak.",
            feature2Title: "Pembelajaran Adaptif Berbasis AI",
            feature2Desc: "Soal disesuaikan dengan tingkat keahlian Anda, memastikan Anda selalu belajar dengan kecepatan dan kategori yang tepat, tanpa bosan atau kewalahan.",
            feature3Title: "Rekomendasi Belajar yang Dipersonalisasi",
            feature3Desc: "Dapatkan saran belajar harian yang dibuat oleh AI untuk memperkuat kelemahan Anda dan memaksimalkan waktu belajar Anda.",
            feature4Title: "Umpan Balik Rinci untuk Setiap Jawaban",
            feature4Desc: "Pahami setiap pertanyaan yang Anda jawab dengan penilaian instan dan penjelasan mendalam dari AI. Belajar dari setiap kesalahan.",
            feature5Title: "Dukungan Multibahasa Komprehensif",
            feature5Desc: "Jelajahi aplikasi dalam lebih dari 10 bahasa untuk mempermudah pembelajaran dalam bahasa ibu Anda. Nikmati pengalaman belajar global dan fleksibel.",
            feature6Title: "Belajar Menyenangkan dengan Visual",
            feature6Desc: "Bosan hanya membaca? Gunakan perpustakaan video kami yang lengkap dan interaktif untuk membuat belajar lebih menyenangkan.",
            feature7Title: "Laporan Kemajuan yang Memotivasi",
            feature7Desc: "Lacak sejauh mana kemajuan Anda setiap hari dengan grafik kemajuan yang menginspirasi Anda untuk terus maju.",
            feature8Title: "Belajar Kapan Saja, Di Mana Saja",
            feature8Desc: "Tersedia di Android dan iOS, sehingga Anda dapat belajar kapan pun dan di mana pun sesuai jadwal sibuk Anda.",
            whyChooseTitle: "Mengapa Memilih TOEIC AI Study?",
            whyChoose1Title: "Pengalaman Belajar yang Dipersonalisasi",
            whyChoose1Desc: "AI membuat rencana pembelajaran terbaik untuk Anda berdasarkan data studi Anda. Rasakan pembelajaran optimal untuk hasil maksimal.",
            whyChoose2Title: "Persiapan Ujian Praktis",
            whyChoose2Desc: "Tes tiruan dan soal latihan mengikuti format TOEIC asli untuk membantu Anda mempersiapkan diri lebih efektif dan lulus dengan skor lebih tinggi.",
            whyChoose3Title: "Teknologi AI yang Andal",
            whyChoose3Desc: "Pemrosesan bahasa alami tingkat lanjut memungkinkan AI memberikan analisis mendalam dan saran akurat—dipercaya oleh pengguna di seluruh dunia.",
            whyChoose4Title: "Kemajuan Lebih Cepat dan Efisien",
            whyChoose4Desc: "Umpan balik AI instan membantu Anda mengidentifikasi kelemahan dan memberi Anda langkah-langkah yang dapat ditindaklanjuti untuk meningkat dengan cepat.",
            whyChoose5Title: "Dukungan Multibahasa",
            whyChoose5Desc: "Dengan lebih dari 10 bahasa yang didukung, Anda dapat belajar dari mana saja tanpa dibatasi oleh bahasa atau budaya.",
            whyChoose6Title: "Belajar Fleksibel Kapan Saja, Di Mana Saja",
            whyChoose6Desc: "Jadikan waktu luang Anda lebih produktif dengan belajar TOEIC langsung dari ponsel cerdas Anda, kapan saja dan di mana saja.",
            whyChoose7Title: "Rencana Belajar Fleksibel",
            whyChoose7Desc: "Atur sesi dan target belajar harian Anda sendiri. Pengingat dalam aplikasi membantu membangun kebiasaan belajar yang konsisten.",
            whyChoose8Title: "Pelacakan Kemajuan Visual",
            whyChoose8Desc: "Lacak peningkatan Anda dengan grafik kemajuan visual yang mudah dipahami.",
            whyChoose9Title: "Berbagi Komunitas",
            whyChoose9Desc: "Belajar dan bagikan kemajuan Anda dengan komunitas untuk berkembang lebih cepat dan tetap termotivasi.",
            whyChoose10Title: "Bagus untuk Perusahaan & Institusi",
            whyChoose10Desc: "Alat manajemen yang kuat menjadikan aplikasi ini sangat cocok untuk bisnis dan institusi yang bertujuan meningkatkan kinerja tim.",
            differentiatorsTitle: "Apa yang Membuat TOEIC AI Berbeda?",
            diff1Title: "Belajar Kapan Saja, Di Mana Saja",
            diff1Desc: "Tersedia di Android & iOS, manfaatkan waktu luang Anda secara efisien.",
            diff2Title: "Dukungan Multibahasa Global",
            diff2Desc: "Belajar dalam bahasa ibu Anda dengan dukungan untuk lebih dari 10 bahasa.",
            diff3Title: "Bank Soal Terbesar di Dunia",
            diff3Desc: "Lebih dari 20.000 soal TOEIC mencakup semua topik dan kategori.",
            diff4Title: "Simulasi Ujian Nyata",
            diff4Desc: "Berlatih dengan tes yang meniru ujian TOEIC asli untuk persiapan yang lebih efektif.",
            diff5Title: "Peringkat Global yang Memotivasi",
            diff5Desc: "Bersaing secara global dengan orang lain untuk meningkatkan motivasi belajar Anda.",
            diff6Title: "Kategori Latihan Lengkap",
            diff6Desc: "Mencakup semua kategori seperti mendengarkan, membaca, berbicara, dan menulis—langsung dari ponsel Anda.",
            diff7Title: "Satu Aplikasi untuk Belajar dan Bisnis",
            diff7Desc: "Termasuk kursus bisnis untuk membantu Anda sukses di luar sekadar lulus ujian.",
            comparisonTitle: "Perbandingan dengan Aplikasi Lain",
            compFeature: "Fitur",
            compCompetitorA: "Aplikasi A",
            compCompetitorB: "Aplikasi B",
            compQuestionCount: "Jumlah Soal",
            compMultilingual: "Dukungan Multibahasa",
            compRealExamSim: "Simulasi Ujian Nyata",
            compYes: "Ya",
            compSome: "Beberapa",
            compNo: "Tidak",
            compAIExplanation: "Penjelasan Berbasis AI",
            compAutomatedAI: "Otomatis oleh AI + Tanya Jawab pengguna",
            compYesBasic: "Ya (Dasar)",
            compAIPoweredPlan: "Rencana Berbasis AI",
            compYesFull: "Ya (Penuh)",
            compLimited: "Terbatas",
            compScorePrediction: "Prediksi Skor",
            compYesAccurate: "Ya (Akurat)",
            compPrice: "Harga",
            compFreemium: "Freemium",
            promoBannerText: "\"TOEIC AI Study adalah aplikasi pembelajaran TOEIC generasi berikutnya yang merevolusi perjalanan belajar Anda—maksimalkan waktu Anda dan raih hasil terbaik. Mulai sekarang dan bangun masa depan yang lebih cerah!\"",
            midPageCtaTitle: "Bergabung Sekarang Untuk Meningkatkan Skor Anda!",
            midPageCtaDesc: "Ambil langkah pertama menuju sukses JLPT—ayo lulus ujian bersama kami!",
            pricingTitle: "Buka Semua Fitur AI",
            pricingFreeTitle: "Versi Gratis",
            pricingFreePriceValue: "Gratis",
            pricingFreeFeat1: "Terbatas hingga 4.000 Soal Latihan",
            pricingFreeFeat2: "Umpan Balik AI Tersedia",
            pricingFreeFeat3: "Rencana Studi Adaptif Tersedia",
            pricingFreeFeat4: "Tes tiruan 20 soal",
            pricingFreeFeat5: "Perpustakaan Video Tersedia",
            btnGetStartedFree: "Mulai Gratis",
            pricingPremiumTitle: "Versi Premium",
            pricingPremiumPriceValue: "Rp 225.000", 
            pricingPerMonth: "/bulan",
            pricingPremiumFeat1: "Lebih dari 20.000 Soal Latihan tersedia",
            pricingPremiumFeat2: "Umpan Balik AI Tersedia",
            pricingPremiumFeat3: "Rencana Studi Adaptif Tersedia",
            pricingPremiumFeat4: "Tes tiruan 100 soal + wawasan AI",
            pricingPremiumFeat5: "Perpustakaan Video Tersedia",
            pricingPremiumFeat6: "Buka Dukungan AI Penuh",
            btnUpgradePremium: "Upgrade ke Premium",
            testimonialsTitle: "Apa Kata Pengguna - Pengguna Nyata, Kemajuan Nyata",
            testimonial1Quote: "“Saya gagal TOEIC dua kali sebelumnya, tetapi AI membantu saya menemukan titik lemah saya. Saya lulus dengan 820!”",
            testimonial1Name: "Heri",
            testimonial2Quote: "“Ini seperti memiliki tutor pribadi yang tersedia 24/7. Umpan balik instan menghemat banyak waktu saya.”",
            testimonial2Name: "Harkani",
            testimonial3Quote: "“Saya cemas tentang ujian, tetapi aplikasi ini memecah prosesnya dan membuat saya tetap termotivasi.”",
            testimonial3Name: "Faizal",
            faqTitle: "Pertanyaan yang Sering Diajukan",
            faq1Question: "Apa itu TOEIC AI Study?",
            faq1Answer: "Ini adalah aplikasi pembelajaran generasi berikutnya yang menggunakan AI untuk membantu Anda mempersiapkan TOEIC lebih efisien. Rencana belajar yang dipersonalisasi dan tes tiruan membantu Anda meningkat dengan cepat.",
            faq2Question: "Bagian tes TOEIC mana saja yang didukung?",
            faq2Answer: "Semua bagian: berbicara, membaca, mendengarkan, dan menulis. Pilih apa yang perlu Anda latih.",
            faq3Question: "Berapa banyak soal latihan yang tersedia?",
            faq3Answer: "Lebih dari 20.000, termasuk tata bahasa, kosakata, dan struktur kalimat—terus diperbarui.",
            faq4Question: "Apakah aplikasi ini mendukung banyak bahasa?",
            faq4Answer: "Ya! Mendukung lebih dari 10 bahasa untuk membantu Anda belajar dalam bahasa pilihan Anda.",
            faq5Question: "Apa manfaat fitur AI?",
            faq5Answer: "AI menganalisis jawaban Anda dan memberi Anda umpan balik instan yang dipersonalisasi—membuatnya lebih mudah untuk ditingkatkan.",
            faq6Question: "Bisakah saya menggunakan aplikasi secara offline?",
            faq6Answer: "Beberapa fitur tersedia offline, tetapi untuk pengalaman terbaik, tetap terhubung ke internet.",
            faq7Question: "Aplikasi ini tersedia di perangkat apa saja?",
            faq7Answer: "Tersedia di Android dan iOS, dapat diunduh dari Google Play dan Apple App Store.",
            faq8Question: "Apakah aplikasi ini gratis?",
            faq8Answer: "Ya, fitur dasar gratis. Untuk akses penuh, ada paket premium dengan fitur lengkap.",
            faq9Question: "Apakah format tes tiruan mirip dengan ujian TOEIC asli?",
            faq9Answer: "Ya, dirancang berdasarkan format TOEIC aktual untuk memberi Anda latihan ujian yang realistis.",
            faq10Question: "Bisakah saya menetapkan target belajar?",
            faq10Answer: "Ya, Anda dapat menetapkan target harian dan mingguan. AI akan membantu Anda mencapainya dengan pengingat.",
            faq11Question: "Apakah ini ramah pemula?",
            faq11Answer: "Tentu saja! Dirancang untuk pemula dan dapat disesuaikan untuk semua tingkat keahlian.",
            finalCtaTitle: "Siap Merevolusi Persiapan TOEIC Anda dengan AI? Unduh sekarang dan ambil langkah pertama menuju kesuksesan Anda.",
            finalCtaSubtitle: "Bergabunglah dengan lebih dari 500.000 pelajar",
            btnDownloadNowPlay: "Unduh Sekarang",
            btnDownloadNowApple: "Unduh Sekarang",
            footerRights: "Seluruh hak cipta."
        }
    };

    // --- DOM Elements ---
    const headerEl = document.getElementById('header');
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const navLinks = document.getElementById('nav-links');
    const backToTopButton = document.getElementById('back-to-top');
    const faqItems = document.querySelectorAll('.faq-item');
    const currentYearSpan = document.getElementById('currentYear');
    
    const langDropdownButtonDesktop = document.getElementById('selected-lang-btn-desktop');
    const langDropdownDesktop = document.getElementById('lang-dropdown-desktop');
    const currentLangTextDesktop = document.getElementById('current-lang-text-desktop');
    
    const langDropdownButtonMobile = document.getElementById('selected-lang-btn-mobile');
    const langDropdownMobile = document.getElementById('lang-dropdown-mobile');
    const currentLangTextMobile = document.getElementById('current-lang-text-mobile');

    // --- Initial Language Setup ---
    let currentLanguage = localStorage.getItem('selectedLanguage') || 'en'; 

    function applyTranslations(lang) {
        document.documentElement.lang = lang; 
        if (currentLangTextDesktop) currentLangTextDesktop.textContent = lang.toUpperCase();
        if (currentLangTextMobile) currentLangTextMobile.textContent = lang.toUpperCase();
        
        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.getAttribute('data-translate-key');
            let translationText = '';

            if (translations[lang] && translations[lang][key]) {
                translationText = translations[lang][key];
            } else if (translations.en[key]) { 
                translationText = translations.en[key]; // Fallback to English
            }

            // Preserve icons if they exist within the element
            const iconElement = element.querySelector('i.fab, i.fas');
            if (iconElement && (element.tagName === 'BUTTON' || element.closest('.btn'))) {
                 element.innerHTML = iconElement.outerHTML + " " + translationText;
            } else if (iconElement && element.tagName === 'SPAN' && element.parentElement.classList.contains('btn')){
                 // Special case for span inside button if icon is outside span but part of button logic
                 // This might need adjustment based on exact HTML structure of buttons
                 const buttonParent = element.closest('.btn');
                 if(buttonParent){
                    // Reconstruct button content carefully
                    // This is a simplified example; complex cases might need more specific handling
                    let newHTML = iconElement.outerHTML + " " + translationText;
                    // If the button has other static text or elements, this logic needs to be more robust
                    // For now, assuming the span is the primary text container next to an icon
                    element.innerHTML = translationText; // Update span, assume icon is handled by parent or sibling logic
                 } else {
                    element.textContent = translationText;
                 }
            }
            else {
                element.textContent = translationText;
            }
        });
        localStorage.setItem('selectedLanguage', lang); 
    }
    
    // --- Event Listeners ---

    // Sticky Header
    if (headerEl) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { 
                headerEl.classList.add('scrolled');
            } else {
                headerEl.classList.remove('scrolled');
            }
        });
    }

    // Mobile Navigation Toggle
    if (mobileNavToggle && navLinks) {
        mobileNavToggle.addEventListener('click', () => {
            const isExpanded = navLinks.classList.toggle('active');
            mobileNavToggle.setAttribute('aria-expanded', isExpanded);
            const icon = mobileNavToggle.querySelector('i');
            if (isExpanded) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        navLinks.querySelectorAll('a:not([data-lang])').forEach(link => { 
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileNavToggle.setAttribute('aria-expanded', 'false');
                    mobileNavToggle.querySelector('i').classList.remove('fa-times');
                    mobileNavToggle.querySelector('i').classList.add('fa-bars');
                }
            });
        });
    }

    // Language Switcher Logic
    function setupLanguageSwitcher(button, dropdown, navMenu) {
        if (button && dropdown) {
            button.addEventListener('click', (e) => {
                e.stopPropagation(); 
                const isOpen = dropdown.classList.toggle('show');
                button.setAttribute('aria-expanded', isOpen);
                button.classList.toggle('open', isOpen); 
            });

            dropdown.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const lang = e.target.getAttribute('data-lang');
                    if (lang && translations[lang]) {
                        currentLanguage = lang;
                        applyTranslations(currentLanguage);
                        dropdown.classList.remove('show');
                        button.classList.remove('open');
                        button.setAttribute('aria-expanded', 'false');
                        
                        if (navMenu && navMenu.classList.contains('active') && dropdown.id.includes('mobile')) {
                            navMenu.classList.remove('active');
                            mobileNavToggle.setAttribute('aria-expanded', 'false');
                            mobileNavToggle.querySelector('i').classList.remove('fa-times');
                            mobileNavToggle.querySelector('i').classList.add('fa-bars');
                        }
                    }
                });
            });
        }
    }

    setupLanguageSwitcher(langDropdownButtonDesktop, langDropdownDesktop, null);
    setupLanguageSwitcher(langDropdownButtonMobile, langDropdownMobile, navLinks);


    window.addEventListener('click', (e) => {
        if (langDropdownDesktop && langDropdownButtonDesktop && !langDropdownButtonDesktop.contains(e.target) && !langDropdownDesktop.contains(e.target)) {
            langDropdownDesktop.classList.remove('show');
            langDropdownButtonDesktop.classList.remove('open');
            langDropdownButtonDesktop.setAttribute('aria-expanded', 'false');
        }
        if (langDropdownMobile && langDropdownButtonMobile && !langDropdownButtonMobile.contains(e.target) && !langDropdownMobile.contains(e.target)) {
            langDropdownMobile.classList.remove('show');
            langDropdownButtonMobile.classList.remove('open');
            langDropdownButtonMobile.setAttribute('aria-expanded', 'false');
        }
    });


    // Back to Top Button Visibility & Functionality
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) { 
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
    }
    
    // Active Navigation Link Highlighting on Scroll
    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav-links li a:not([data-lang])'); 

    window.addEventListener('scroll', () => {
        let currentSectionId = 'hero'; 
        const headerOffset = headerEl ? headerEl.offsetHeight + 20 : 70;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - headerOffset) { 
                currentSectionId = section.getAttribute('id');
            }
        });
        
        navAnchors.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === `#${currentSectionId}`) {
                a.classList.add('active');
            }
        });
    });


    // FAQ Accordion
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const currentlyActive = document.querySelector('.faq-item.active');
                if (currentlyActive && currentlyActive !== item) {
                    currentlyActive.classList.remove('active');
                    currentlyActive.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                }
                const isNowActive = item.classList.toggle('active');
                question.setAttribute('aria-expanded', isNowActive);
            });
        }
    });

    // Scroll-triggered Animations using IntersectionObserver
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // observer.unobserve(entry.target); // Uncomment to animate only once
                } else {
                    // entry.target.classList.remove('is-visible'); // Uncomment to re-animate on scroll up
                }
            });
        }, { threshold: 0.1 }); 

        animatedElements.forEach(el => {
            observer.observe(el);
        });
    } else {
        animatedElements.forEach(el => el.classList.add('is-visible'));
    }

    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    applyTranslations(currentLanguage); // Apply translations on initial load
});