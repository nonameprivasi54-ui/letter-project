const message = `Hayy papi cantik. Happy Father Dayy!! Makasih udh mau hadir dihidupku yg suram dan membuatnya berwarna. Maaf kalau gw ngeselin,maaf klau gw gajelas. Yang perlu papi tau,gw sayang banget sama lo. Walaupun lo ngeselin,nyebelin,tapi entah kenapa gw sayang banget sm lo. Jangan berubah,tetap jadi papi yang gw kenal. Smoga lo bisa cpt move on(kalau mau). Gitu aja,intinya i love u so much papi cantik.`;

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

