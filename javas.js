<!DOCTYPE html>
<html lang="tr">
<head>
    <meta name="google-site-verification" content="oQTeC0f18SPUf9_ijL1GZOI9RWBIXX6sc_NAhQXWSIU" />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Falcı Bacı</title>
    <style>
        body {
            font-family: 'Playfair Display', serif; /* Daha şık bir font */
            background: linear-gradient(135deg, #fdd835, #e53935); /* Canlı bir arka plan geçişi */
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
        }
        .container {
            background-color: rgba(255, 255, 255, 0.9); /* Yarı saydam beyaz kutu */
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
            text-align: center;
            max-width: 600px;
            width: 90%;
        }
        h1 {
            color: #d32f2f; /* Daha belirgin bir kırmızı */
            margin-bottom: 30px;
            font-size: 2.5em;
            letter-spacing: 1px;
        }
        .upload-section {
            margin-bottom: 30px;
        }
        label {
            display: block;
            margin-bottom: 8px;
            color: #555;
            font-weight: bold;
        }
        input[type="file"] {
            margin-bottom: 15px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 6px;
            width: calc(100% - 22px);
            box-sizing: border-box;
        }
        button {
            background-color: #d32f2f;
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1.1em;
            transition: background-color 0.3s ease;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        button:hover {
            background-color: #b71c1c;
        }
        .image-container {
            display: flex;
            gap: 15px;
            margin-bottom: 20px;
            justify-content: center;
        }
        .image-container img {
            max-width: 100px;
            height: auto;
            border: 1px solid #ccc;
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        h2 {
            color: #d32f2f;
            margin-top: 30px;
            margin-bottom: 15px;
            font-size: 1.8em;
        }
        #yorum {
            padding: 20px;
            border: 1px solid #eee;
            border-radius: 8px;
            background-color: #f9f9f9;
            color: #555;
            white-space: pre-line;
            text-align: left;
            font-size: 1.1em;
            line-height: 1.6;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        #yorum::before {
            content: '✨ ';
            color: #fdd835;
            font-size: 1.3em;
            margin-right: 5px;
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1>Gizemli Bakış</h1>
        <div class="upload-section">
            <label for="image1">Birinci Sır:</label>
            <input type="file" id="image1" accept="image/*"><br>
            <label for="image2">İkinci İzlenim:</label>
            <input type="file" id="image2" accept="image/*"><br>
            <label for="image3">Üçüncü Yansıma:</label>
            <input type="file" id="image3" accept="image/*"><br>
            <button onclick="yorumla()">Aydınlat!</button>
        </div>
        <div class="image-container" id="imagePreviews">
        </div>
        <h2>Geleceğin Fısıltıları:</h2>
        <div id="yorum">
        </div>
    </div>

    <script>
        let images = [];
        const imagePreviewsDiv = document.getElementById('imagePreviews');
        const yorumDiv = document.getElementById('yorum');

        document.getElementById('image1').addEventListener('change', (event) => handleImageUpload(event, 0));
        document.getElementById('image2').addEventListener('change', (event) => handleImageUpload(event, 1));
        document.getElementById('image3').addEventListener('change', (event) => handleImageUpload(event, 2));

        function handleImageUpload(event, index) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    images[index] = e.target.result;
                    displayImages();
                }
                reader.readAsDataURL(file);
            }
        }

        function displayImages() {
            imagePreviewsDiv.innerHTML = '';
            images.forEach(imageSrc => {
                if (imageSrc) {
                    const img = document.createElement('img');
                    img.src = imageSrc;
                    imagePreviewsDiv.appendChild(img);
                }
            });
        }

        function yorumla() {
            if (images.length === 3 && images.every(img => img !== undefined)) {
                const yorumMetni = generateStylishComment();
                yorumDiv.textContent = yorumMetni;
            } else {
                yorumDiv.textContent = "Lütfen üç adet gizemli resmi yükleyiniz.";
            }
        }

        function generateStylishComment() {
            const girisler = ["Derinlerde saklı sırlar açığa çıkıyor...", "Görünenin ötesinde bir bakış...", "Bu üçlü yansıma kaderinizi fısıldıyor:"];
            const temalar1 = ["Aşk ve İlişkiler:", "Kariyer ve Başarı:", "Sağlık ve Enerji:", "Maddi Durum:", "Kişisel Gelişim:"];
            const yorumlar1 = [
                "Kalbinizin sesini dinleyin, beklenmedik bir karşılaşma olabilir.",
                "Azminiz sizi zirveye taşıyacak, yeni kapılar aralanıyor.",
                "İç huzurunuzu koruyun, dengeyi sağlamak önemli.",
                "Beklenmedik bir kaynaktan destek görebilirsiniz.",
                "Kendinize yatırım yapın, potansiyelinizi keşfedin."
            ];
            const temalar2 = ["Uyarılar:", "Tavsiyeler:", "Öneriler:"];
            const yorumlar2 = [
                "Aceleci kararlardan kaçının, her adımı dikkatle atın.",
                "Sezgilerinize güvenin, doğru yolu gösterecekler.",
                "Çevrenizdeki insanların desteğini alın, yalnız değilsiniz."
            ];
            const cikislar = ["Unutmayın, kader sizin ellerinizde şekillenir.", "Gelecek belirsiz olsa da, umut her zaman vardır.", "Bu sadece bir fısıltı, kendi yolunuzu çizin."];

            const rastgeleGiris = girisler[Math.floor(Math.random() * girisler.length)];
            const tema1 = temalar1[Math.floor(Math.random() * temalar1.length)];
            const yorum1 = yorumlar1[Math.floor(Math.random() * yorumlar1.length)];
            const tema2 = temalar2[Math.floor(Math.random() * temalar2.length)];
            const yorum2 = yorumlar2[Math.floor(Math.random() * yorumlar2.length)];
            const rastgeleCikis = cikislar[Math.floor(Math.random() * cikislar.length)];

            return `${rastgeleGiris} ${tema1} ${yorum1} ${tema2} ${yorum2} ${rastgeleCikis}`;
        }
    </script>
</body>
</html>
