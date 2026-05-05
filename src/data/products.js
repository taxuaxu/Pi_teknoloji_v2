export const categories = [
  "Tümü",
  "Güvenlik ve Geçiş Sistemleri",
  "Savunma Sistemleri",
  "Ses, Işık ve Görüntü Sistemleri",
  "Endüstriyel Kapı Sistemleri",
  "Yangın Güvenliği"
];

export const allProducts = [
  { 
    id: 1,
    slug: "seksiyonel-kapilar",
    category: "Endüstriyel Kapı Sistemleri", 
    title: "Seksiyonel Kapılar", 
    desc: "Isı yalıtımı ve sessiz çalışma özelliklerine sahip, minimum bakım gerektiren endüstriyel kapılar.", 
    img: "/images/page12_img3.jpeg",
    features: [
      "Yüksek ısı ve ses yalıtımı sağlayan sandviç panel yapısı",
      "Sessiz çalışma ve uzun ömürlü kullanım",
      "Geniş cam ve havalandırma penceresi seçenekleri",
      "Fotosel ve pnömatik alt güvenlik sistemleri ile üst düzey emniyet"
    ],
    specs: {
      "Panel Kalınlığı": "40 mm / 42 mm",
      "Rüzgar Dayanımı": "Class 3 (EN 12424)",
      "Motor Seçenekleri": "Monofaze / Trifaze Endüstriyel Motor",
      "Çalışma Hızı": "0.15 - 0.25 m/sn"
    }
  },
  { 
    id: 2,
    slug: "sarmal-kapilar",
    category: "Endüstriyel Kapı Sistemleri", 
    title: "Sarmal Kapılar", 
    desc: "Küçük işletmeler ve dar alanlar için ideal, yer kaplamayan kepenk sistemleri.", 
    img: "/images/page12_img1.jpeg",
    features: [
      "Dar alanlarda bile yüksek verimli kullanım",
      "Alüminyum veya çelik lameller ile ekstra güvenlik",
      "Hızlı açılıp kapanma opsiyonu",
      "Uzaktan kumanda ve manuel entegrasyon"
    ],
    specs: {
      "Malzeme": "Alüminyum / Galvaniz Çelik",
      "Güvenlik Sınıfı": "Yüksek (Balistik opsiyonlu)",
      "Maksimum Genişlik": "12 metreye kadar",
      "Kontrol": "Uzaktan Kumanda, Radar, Buton"
    }
  },
  { 
    id: 3,
    slug: "yuksek-hizli-kapilar",
    category: "Endüstriyel Kapı Sistemleri", 
    title: "Yüksek Hızlı Kapılar", 
    desc: "İş süreçlerini hızlandıran, ısı kaybını engelleyen aşınmasız ve sessiz kapı çözümleri.", 
    img: "/images/page13_img3.jpeg",
    features: [
      "Forklift ve lojistik geçişlerinde saniyeler içinde açılma",
      "Kaza anında kendini onarabilen fermuar sistemi",
      "Maksimum enerji tasarrufu ve iklimlendirme kontrolü",
      "Radar, manyetik alan ve ipli switch entegrasyonu"
    ],
    specs: {
      "Açılma Hızı": "2.5 m/sn'ye kadar",
      "Kumaş Tipi": "900 g/m² PVC donanımlı dokuma",
      "Çalışma Sıcaklığı": "-30°C ile +70°C arası",
      "Görüş Alanı": "Şeffaf PVC pencere opsiyonu"
    }
  },
  { 
    id: 4,
    slug: "yukleme-rampasi",
    category: "Endüstriyel Kapı Sistemleri", 
    title: "Yükleme Rampaları", 
    desc: "Araçlar ve yükleme alanları arasındaki yükseklik farkını dengeleyen, yüksek kapasiteli çözümler.", 
    img: "/images/page14_img5.jpeg",
    features: [
      "Farklı tır yüksekliklerine kusursuz uyum",
      "Elektro-hidrolik sistem ile güvenli ve sarsıntısız yükleme",
      "Kaymayı önleyici gözyaşı desenli sac platform",
      "Tesis güvenliği için emniyet valfleri"
    ],
    specs: {
      "Dinamik Kapasite": "6 Ton / 10 Ton opsiyonlu",
      "Platform Sacı": "6/8 mm gözyaşı desenli",
      "Motor Gücü": "1.1 kW Hidrolik Ünite",
      "Eğim Açısı": "± 300 mm"
    }
  },
  { 
    id: 5,
    slug: "yanasma-korukleri",
    category: "Endüstriyel Kapı Sistemleri", 
    title: "Yanaşma Körükleri", 
    desc: "Yükleme süreçlerinde malları dış hava koşullarına karşı koruyan enerji tasarruflu sistemler.", 
    img: "/images/page14_img6.jpeg",
    features: [
      "Yağmur, kar ve rüzgara karşı tam izolasyon",
      "Esnek pvc malzemesiyle tır dorseine zarar vermez",
      "Soğuk zincir lojistiğinde maksimum enerji koruması",
      "Çarpma anında esneyen alüminyum/galvaniz iskelet"
    ],
    specs: {
      "Ön Branda": "3mm yüksek mukavemetli PVC",
      "Genişlik": "Ortalama 3400 mm",
      "Yükseklik": "Ortalama 3400 mm",
      "Derinlik": "600 mm standart"
    }
  },
  { 
    id: 6,
    slug: "turnike-sistemleri",
    category: "Güvenlik ve Geçiş Sistemleri", 
    title: "Turnike Sistemleri", 
    desc: "İnsan trafiğinin yoğun olduğu alanlarda güvenli ve kontrollü geçiş sağlayan turnike sistemleri.", 
    img: "/images/page6_img10.png",
    features: [
      "Stadyum, plaza ve kurumlar için VIP, tripod, boy turnikesi seçenekleri",
      "Parmak izi, kartlı geçiş ve yüz tanıma sistemleri ile tam entegrasyon",
      "Acil durumlarda serbest geçiş sağlayan 'Drop Arm' teknolojisi",
      "Paslanmaz çelik dayanıklı gövde mimarisi"
    ],
    specs: {
      "Gövde Malzemesi": "304 / 316 Paslanmaz Çelik",
      "Çalışma Voltajı": "110-240V AC",
      "Geçiş Hızı": "35-40 kişi/dakika",
      "Koruma Sınıfı": "IP54 / IP65 Dış Ortam Uygun"
    }
  },
  { 
    id: 7,
    slug: "mantar-bariyerler",
    category: "Güvenlik ve Geçiş Sistemleri", 
    title: "Mantar Bariyerler", 
    desc: "Araç girişlerini kontrol altında tutmak ve güvenliği artırmak için yüksek güvenlikli bariyerler.", 
    img: "/images/page6_img8.jpeg",
    features: [
      "Yüksek hızlı araç çarpmalarına karşı test edilmiş balistik dayanım",
      "Hidrolik, pnömatik veya elektromekanik çalışma sistemleri",
      "Gece görünürlüğü için entegre LED aydınlatma",
      "Elektrik kesintisinde manuel kullanım opsiyonu"
    ],
    specs: {
      "Çarpma Dayanımı": "K12 / PAS68 Sertifikalı Seçenekler",
      "Yükselme Süresi": "3-5 saniye",
      "Çap ve Yükseklik": "220mm Çap / 700mm Yükseklik",
      "Çalışma Sıklığı": "Sürekli kullanım (Intensive use)"
    }
  },
  { 
    id: 8,
    slug: "cctv-sistemleri",
    category: "Güvenlik ve Geçiş Sistemleri", 
    title: "CCTV Sistemleri", 
    desc: "Geniş alanlarda 52.000m²'ye kadar gözetleme imkanı sunan yüksek çözünürlüklü ve yapay zeka destekli kameralar.", 
    img: "/images/page4_img7.png",
    features: [
      "Yüz tanıma, sınır ihlali ve terkedilmiş obje tespiti (Yapay Zeka Destekli)",
      "DarkFighter teknolojisi ile zifiri karanlıkta bile renkli görüntü",
      "Termal kamera entegrasyonu ve çok mercekli panoramik gözetim",
      "Bulut tabanlı veya yerel devasa veri depolama mimarisi"
    ],
    specs: {
      "Çözünürlük": "4K / 8K Ultra HD",
      "Gece Görüş Mesafesi": "150 metreden 500 metreye kadar (Lazer)",
      "Video Sıkıştırma": "H.265+ ile yüksek depolama tasarrufu",
      "Çalışma Ortamı": "IP67 / IK10 Vandal-Proof"
    }
  },
  { 
    id: 9,
    slug: "zirhli-nobet-kulubesi",
    category: "Savunma Sistemleri", 
    title: "Zırhlı Nöbet Kulübesi", 
    desc: "Yüksek güvenlik gerektiren askeri ve sivil tesisler için zırhlı nöbet kulübeleri.", 
    img: "/images/page7_img3.jpeg",
    features: [
      "Personeli olası terör saldırılarından tam koruma sağlayan kompozit zırh",
      "Balistik özellikli camlar ve ateş etme mazgalları",
      "Klima, telefon ve aydınlatma altyapısıyla yaşanabilir iç alan",
      "Mobil olarak istenilen konuma taşınabilme kolaylığı"
    ],
    specs: {
      "Koruma Seviyesi": "BR7 - Stanag 4569 (İsteğe Göre)",
      "Duvar Kalınlığı": "Zırh yapısına göre değişken (Armox 500T vb)",
      "Ekstra Donanım": "Karartma perdeleri, Acil durum butonu",
      "Ölçüler": "1.5x1.5m / 2x2m standart ölçüler"
    }
  },
  { 
    id: 10,
    slug: "balistik-cam",
    category: "Savunma Sistemleri", 
    title: "Kurşun Geçirmez Balistik Cam", 
    desc: "Yüksek kinetik enerjiyi absorbe ederek merminin ilerlemesini durduran çok katmanlı balistik camlar.", 
    img: "/images/page7_img5.jpeg",
    features: [
      "Polikarbonat ve cam tabakalarının özel reçinelerle lamine edilmesi",
      "Görüş netliğinden ödün vermeden maksimum koruma",
      "Uzun namlulu silahlara ve şarapnel parçalarına karşı dayanım",
      "Banka, askeri nizamiyeler ve kamu binaları için özel kesimler"
    ],
    specs: {
      "Sertifikasyon": "EN 1063 (BR1'den BR7'ye kadar)",
      "Işık Geçirgenliği": "%75 - %85 arası",
      "Kalınlık Seçenekleri": "18mm'den 80mm'ye kadar",
      "UV Koruması": "Özel UV filtreli yüzey"
    }
  },
  { 
    id: 11,
    slug: "profesyonel-ses-sistemleri",
    category: "Ses, Işık ve Görüntü Sistemleri", 
    title: "Profesyonel Ses Sistemleri", 
    desc: "Kongre merkezleri, tiyatro ve performans sahneleri için profesyonel ses ve akustik çözümleri.", 
    img: "/images/page9_img2.jpeg",
    features: [
      "Line-Array hoparlör teknolojisiyle sahnedeki sesi her koltuğa eşit dağıtma",
      "Dante/AES67 ses ağı protokolleriyle dijital pürüzsüz aktarım",
      "DSP (Dijital Sinyal İşleme) ile mekan akustiği optimizasyonu",
      "Uzun ömürlü, aşırı ısınmayan yüksek güçlü amfiler"
    ],
    specs: {
      "Sistem Tipi": "Aktif / Pasif Line Array",
      "Maksimum SPL": "135 dB ve üzeri",
      "Frekans Tepkisi": "40 Hz - 20 kHz",
      "Entegrasyon": "Dijital mikser ve matris ağları"
    }
  },
  { 
    id: 12,
    slug: "cephe-aydinlatma",
    category: "Ses, Işık ve Görüntü Sistemleri", 
    title: "Cephe Aydınlatma", 
    desc: "Binaların dış yüzeyleri için ışık kontrol sistemleri ve lineer aydınlatma armatürleri.", 
    img: "/images/page11_img4.jpeg",
    features: [
      "DMX protokolü sayesinde senkronize animasyonlu renk oyunları",
      "Wall-washer (Duvar boyama) teknikleri ile mimari dokunun vurgulanması",
      "Zorlu hava koşullarına dayanıklı uzun ömürlü LED altyapısı",
      "Enerji tasarruflu yeşil bina (Green Building) konseptlerine uygunluk"
    ],
    specs: {
      "IP Sınıfı": "IP66 / IP67 Su ve Toz Geçirmez",
      "Kontrol Protokolü": "DMX512 / RDM / DALI",
      "Led Tipi": "RGB, RGBW, Tunable White",
      "Çalışma Ömrü": "50.000 Saat üzeri"
    }
  },
  { 
    id: 13,
    slug: "yangin-perdesi",
    category: "Yangın Güvenliği", 
    title: "Yangın Perdesi", 
    desc: "Binayı belirlenen zaman aralığında yangından ve ısıdan koruyan yüksek dayanımlı yangın perdeleri.", 
    img: "/images/page15_img4.jpeg",
    features: [
      "Mimari estetiği bozmayan, asma tavan içerisine gizlenebilen kaset sistemi",
      "Yangın dedektörlerinden gelen sinyalle otomatik olarak yerçekimiyle (Gravity Fail-Safe) inme",
      "120 dakikaya (E120/EW120) kadar alev ve duman geçişini tamamen kesme",
      "Kompakt yapısıyla büyük açıklıklarda dahi kullanılabilme"
    ],
    specs: {
      "Yangın Dayanımı": "E60, E120, EW120 Sertifikaları",
      "Kumaş Yapısı": "Çelik tel takviyeli poliüretan kaplı fiberglas",
      "İndirme Hızı": "Yaklaşık 0.15 m/sn",
      "Güç Kaynağı": "24V DC / 220V AC Batarya destekli"
    }
  },
  { 
    id: 14,
    slug: "duman-perdesi",
    category: "Yangın Güvenliği", 
    title: "Duman Perdesi", 
    desc: "Duman akışını engelleyerek güvenli tahliye yolları oluşturan, akülü sistemli duman perdeleri.", 
    img: "/images/page16_img4.jpeg",
    features: [
      "Zehirli gazların tavan hizasında bloke edilerek tahliye koridorlarının temiz kalması",
      "Havalandırma (Duman Tahliye Fanları) sistemleri ile senkronize çalışma",
      "Sürekli sıcaklık direncine sahip özel dokuma kumaş",
      "Otopark, AVM ve atrium boşlukları için standartlara uygun tasarım"
    ],
    specs: {
      "Dayanım Sınıfı": "D60, DH120 (EN 12101-1)",
      "Sıcaklık Testi": "600°C / 1000°C 120 dakika",
      "Sistem Tipi": "Sabit (Static) veya Hareketli (Active)",
      "Malzeme": "Silikon/Poliüretan kaplı cam elyafı kumaş"
    }
  }
];
