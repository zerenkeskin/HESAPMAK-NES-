/*BİL209 1. ÖDEV ZEREN KESKİN 200601034-->*/
        function sayilariTopla()
        {
            var degisken1 = parseInt (document.getElementById("sayi1").value);
            var degisken2 = parseInt (document.getElementById("sayi2").value);
            var yanit = document.getElementById("yanit");
            yanit.value = degisken1 + degisken2;
        }
        function sayilariCikar()
        {
            var degisken1 = parseInt (document.getElementById("sayi1").value);
            var degisken2 = parseInt (document.getElementById("sayi2").value);
            var yanit = document.getElementById("yanit");
            yanit.value = degisken1 - degisken2;
        }
        function sayilariCarp()
        {
            var degisken1 = parseInt (document.getElementById("sayi1").value);
            var degisken2 = parseInt (document.getElementById("sayi2").value);
            var yanit = document.getElementById("yanit");
            yanit.value = degisken1 * degisken2;
        }
        function sayilariBol()
        {
            var degisken1 = parseInt (document.getElementById("sayi1").value);
            var degisken2 = parseInt (document.getElementById("sayi2").value);
            var yanit = document.getElementById("yanit");
            yanit.value = degisken1 / degisken2;
        }
