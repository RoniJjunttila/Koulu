
/* Author: Roni Junttila*/

//globaalit muuttujat
let kysymys = document.getElementsByClassName("question");
let kysymykset = [...kysymys];
let laskut = document.getElementById("laskut");
let d = 0;
let määrä = 0

let oikea_vastaus = 0;
let tulostuspaikat = [
  "#kakkonen",
  "#kolmonen",
  "#nelonen",
  "#vitonen"
]

let merkit = ["+", "-", "*", "/"]

//modal itsessään
function modal1() {
  let myModal = new bootstrap.Modal(document.getElementById('congratulations'), { backdrop: "static" })
  myModal.show();
  return;
}

//modal animaatiot
$('#congratulations').on('show.bs.modal', function () {
  $('.modal .modal-dialog').attr('class', 'modal-dialog animate__animated animate__fadeIn');
})

$('#congratulations').on('hide.bs.modal', function () {
  $('.modal .modal-dialog').attr('class', 'modal-dialog animate__animated animate__fadeOut');
})

//satunnainen luku
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//sekottaminen
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

document.body.onload = startgame(), $("#reload").addClass("disabled")

//pelin aloitus
function startgame() {

  if (d === 4) { return }
  kysymykset = shuffle(kysymykset);
  for (let i = 0; i < kysymykset.length; i++) {
    laskut.innerHTML = "";
    [].forEach.call(kysymykset, function (item) {
      laskut.appendChild(item);
    });
  }
  // oikeat vastaus laskut
  let eka = getRndInteger(2, 10)
  let toka = getRndInteger(1, 10)
  let jakolasku = getRndInteger(10, 100)
  let oikeat = [eka + toka, eka - toka, eka * toka, jakolasku / toka]
  let lasku = "";
  oikea_vastaus = oikeat[d]
  if (d === 3) {
    lasku = eka * toka
    oikeat.pop()
    oikeat.push(eka)
  }
  else if (oikea_vastaus <= 0) {
    eka = 0
    eka = getRndInteger(5, 10)
    toka = 0
    toka = getRndInteger(1, 5)
    delete oikeat[1]
    oikeat[1] = eka - toka
    lasku = eka
  } else {
    lasku = eka
  }

  $("#ykkönen").html(" " + lasku + " " + merkit[d] + " " + toka + " " + "=" + " " + oikeat[d])
  $("#ykkönen").addClass("right");

  //väärä vastaus
  for (i = 0; i < 4; i++) {
    let tulostus = "";
    let väärä1 = getRndInteger(1, 10)
    let väärä2 = getRndInteger(1, 10)
    let jakolasku2 = getRndInteger(10, 100)
    let väärälasku = getRndInteger(5, 15)
    let väärälasku2 = getRndInteger(1, 10)
    let vääräkaava = [väärälasku + väärälasku2, väärälasku, väärälasku * väärälasku2, väärälasku / väärälasku2]
    let väärät = [väärä1 + väärä2, väärä1 - väärä2, väärä1 * väärä2, väärä1 / väärä2]
    if (väärät[d] === oikea_vastaus) {
      väärä1 = ""
      väärä2 = ""
      väärä1 = getRndInteger(1, 10)
      väärä2 = getRndInteger(1, 10)
      väärät = []
      väärät = [väärä1 + väärä2, väärä1 - väärä2, väärä1 * väärä2, väärä1 / väärä2]
      tulostus = " " + väärä1 + " " + merkit[d] + " " + väärä2 + " " + "=" + " " + vääräkaava[d].toFixed(0)
    }
    else if (vääräkaava[d] <= 0) {
      väärä1 = ""
      väärä2 = ""
      väärä1 = getRndInteger(1, 10)
      väärä2 = getRndInteger(1, 10)
      väärät = []
      väärät = [väärä1 + väärä2, väärä1 - väärä2, väärä1 * väärä2, väärä1 / väärä2]
      tulostus = " " + väärä1 + " " + merkit[d] + " " + väärä2 + " " + "=" + " " + vääräkaava[d].toFixed(0)
    }
    else if (väärät[d] === vääräkaava[d]) {
      väärä1 = ""
      väärä2 = ""
      väärä1 = getRndInteger(1, 10)
      väärä2 = getRndInteger(1, 10)
      väärät = []
      väärät = [väärä1 + väärä2, väärä1 - väärä2, väärä1 * väärä2, väärä1 / väärä2]
      tulostus = " " + väärä1 + " " + merkit[d] + " " + väärä2 + " " + "=" + " " + vääräkaava[d].toFixed(0)
    }
    else if (väärät[d] <= 0) {
      väärä1 = ""
      väärä2 = ""
      väärä1 = getRndInteger(1, 10)
      väärä2 = getRndInteger(1, 10)
      väärät = []
      väärät = [väärä1 + väärä2, väärä1 - väärä2, väärä1 * väärä2, väärä1 / väärä2]
      tulostus = " " + väärä1 + " " + merkit[d] + " " + väärä2 + " " + "=" + " " + vääräkaava[d].toFixed(0)
    }
    else if (d === 3) {
      tulostus = " " + jakolasku2 + " " + merkit[d] + " " + väärä2 + " " + "=" + " " + väärälasku
    } else {
      tulostus = " " + väärä1 + " " + merkit[d] + " " + väärä2 + " " + "=" + " " + vääräkaava[d].toFixed(0)
      väärä1 = ""
      väärä2 = ""

    }
    $(tulostuspaikat[i]).html(tulostus)
  }
}

//tähtien lisäys sivulle ja animaatiot
function pistetys() {
  $('[name="tähti1"]').removeClass("fa fa-star-o").addClass("fa fa-star").addClass("oikea")
  if (määrä === 2) {
    $('[name="tähti2"]').removeClass("fa fa-star-o").addClass("fa fa-star").addClass("oikea")
  }
  if (määrä === 3) {
    $('[name="tähti3"]').removeClass("fa fa-star-o").addClass("fa fa-star").addClass("oikea")
  }
  if (määrä === 4) {
    $('[name="tähti4"]').removeClass("fa fa-star-o").addClass("fa fa-star").addClass("oikea")
  }
}

//vastaukset tarkistimnen ja nappuloiden värien lisäys
$(".btn").on("click", function () {
  d++
  $(".btn").toggleClass("clicked")
  let vastaus = (this.id)
  if (vastaus === "ykkönen") {
    määrä++
    $(".question").addClass("lukittu")
    $(this).removeClass("bg-dark").addClass("bg-success")
    pistetys(määrä)
  } else {
    $(this).removeClass("bg-dark").addClass("bg-danger")
    $("#ykkönen").removeClass("bg-dark").addClass("bg-success")
    $(".question").addClass("lukittu")
  }

  //poistetaa taustavärit 
  setTimeout(function () {
    $(".question").addClass("disabled")
    $("#ykkönen").removeClass("bg-success").addClass("bg-dark")
    $(".bg-danger").removeClass("bg-danger").addClass("bg-dark")
    if (d === 4) {
      modal1()
      $('[name="tähti1"]').removeClass("oikea")
      $('[name="tähti2"]').removeClass("oikea")
      $('[name="tähti3"]').removeClass("oikea")
      $('[name="tähti4"]').removeClass("oikea")
      $("#reload").removeClass("disabled")
      return;
    }
    next()
  }, 1300);

  //poistaa valinnat 
  function next() {
    startgame()
    $(".question").removeClass("disabled")
    $(".question").removeClass("lukittu")
    $(".btn").toggleClass("clicked")
  }
});

//uudelleen käynnistys
$("#reload").on("click", function () {
  $(".kysymykset").fadeOut("fast");
  setTimeout(function () {
    location.reload();
  }, 400);
});