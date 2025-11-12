const message = `Happy father day papi cantik. Mff kalau kiranya telat ngucapin,haha. Makasih ya udah mau ngadepin segala kerandoman gw,udah mau dengerin keluh kesah gw. Maaf kalau gw belum bisa buat lo seneng. Semangat hidup y! Jngn pernah berubah,tetap menjadi papi cantik yang kukenal. Semoga hari hari lo menyenangkan,semoga bisa move on(kalau mau). Cukup sekian, intinya I love u so much papi cantik`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}

