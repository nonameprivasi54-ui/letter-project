const message = `Happy Father day!! makasih udh mau datang dihidupku yng suram dan membuatnya sedikit berwarna. Maaf kalau gw banyak salah sma papi,maaf kalau gw ngeselin. Yang papi hrus tau,gw sayang banget sama lo. Lo emang nyebelin,tapi gatau kenapa gw tetep sayang,haha. sehat terus ya,smg bisa crpt move one dri zy(kalau mau move on) Tetap jdi papi kesayangan Leon,jngn pergi ya,semangat menghadapi sikap leon. Gitu aja,intinya makasih,maaf,semangat!!`;

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

