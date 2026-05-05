Aşama 1: Proje İskeleti ve Layout (Header/Footer)
Bu aşamada projenin ana çerçevesini ve mega menünün yerleşeceği Header bileşenini oluşturuyoruz.

Prompt 1:

"React ve Tailwind CSS kullanarak modern bir kurumsal web sitesi için Layout, Header ve Footer component'leri oluştur. Header içinde logonun ve sağ tarafta 'İletişim' butonunun olduğu bir yapı kurgula. Orta kısımda 'Kurumsal', 'Ürünlerimiz', 'Hizmetlerimiz' ve 'İletişim' linkleri olsun. Şimdilik 'Ürünlerimiz' linkinin hover durumunda açılacak boş bir Mega Menü dropdown container'ı ekle. Renk paletinde ağırlıklı olarak kurumsal lacivert ve koyu gri kullan."  

Aşama 2: Mega Menü Bileşeninin Kodlanması
Katalogdaki kategorileri hiyerarşik olarak sunacak yapıyı kuruyoruz.

Prompt 2:

"Bir önceki adımda oluşturduğumuz Mega Menü container'ının içini dolduracağız. Tailwind CSS kullanarak ekranı kaplayan (full-width) bir mega menü tasarla. İçerisinde şu kategoriler grid yapısında (örneğin 4 kolon) listelensin:

Güvenlik ve Geçiş Sistemleri (Alt linkler: CCTV, Turnikeler, Bariyerler)

Savunma Sistemleri (Alt linkler: Zırhlı Kulübe, Balistik Cam)

Ses, Işık ve Görüntü Sistemleri (Alt linkler: Profesyonel Ses, Cephe Aydınlatma)

Endüstriyel Kapı Sistemleri (Alt linkler: Seksiyonel, Yüksek Hızlı Kapılar)

Yangın Güvenliği (Alt linkler: Yangın Perdesi, Duman Perdesi)
Menü açıldığında yumuşak bir fade-in animasyonu (Framer Motion veya Tailwind transitions) kullanılsın."

Aşama 3: Ana Sayfa (Landing Page) Bölümleri
Mega menüden sonra kullanıcıyı karşılayacak ana blokları üretiyoruz.

Prompt 3:

"Ana sayfa (Home) için şu 3 bileşeni oluştur:

Hero Section: Arka planda koyu tonlarda teknolojik bir görselin olduğu, ortasında büyük fontla '25 Yıllık Tecrübe ile Güvenlik ve Teknoloji Çözümleri' yazan ve altında 'Çözümlerimizi İnceleyin' butonu bulunan tam ekran bir banner.

Hizmetlerimiz Özeti: Danışmanlık, Projelendirme, Bakım & Onarım ve 7/24 Servis hizmetlerini 4'lü kart (grid) şeklinde ikonlarla gösteren bir bölüm.

Global Varlık: Libya, Irak, Azerbaycan, Özbekistan, Kazakistan, Makedonya ve Kıbrıs metinlerini içeren, firmanın uluslararası tecrübesini vurgulayan basit bir metin ve istatistik bloğu."

Aşama 4: Dinamik Ürün Kartları ve Grid Yapısı
Farklı ürünleri sergilemek için tekrar kullanılabilir (reusable) component'ler kurguluyoruz.

Prompt 4:

"Ürünleri listelemek için React'te tekrar kullanılabilir (reusable) bir ProductCard componenti yaz. Kartın içinde üstte ürün görseli alanı, altında ürün başlığı (örn: 'Seksiyonel Kapılar'), ve kısacık bir açıklama (örn: 'Isı yalıtımı ve sessiz çalışma') olsun. Ardından bu kartları kullanarak, sol tarafta kategorilerin olduğu bir filtreleme menüsü (sidebar) ve sağ tarafta kartların listelendiği responsive bir sayfa şablonu (ProductsLayout) oluştur."

Aşama 5: İletişim ve Footer Tamamlamaları
Sitenin iletişim fonksiyonlarını aktif hale getiriyoruz.

Prompt 5:

"Bize Ulaşın (Contact) sayfası tasarla. Sol tarafta bir iletişim formu (Ad, Soyad, Email, Mesaj), sağ tarafta ise iletişim bilgileri olsun: Adres (1940. Cadde Kuruçayırlı Tower 81/29 Yenimahalle / ANKARA), Tel (+90 506 323 22 23), Mail (info@piteknoloji.net). Ayrıca Footer bileşenine bu bilgilerin kısa bir özetini ve Mega menüdeki ana kategorilerin linklerini ekle."