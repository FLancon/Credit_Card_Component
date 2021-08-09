const formCardNumber = document.getElementById('form-card-number');
const cardNumber = document.getElementById('card-number');
const formCardName = document.getElementById('form-card-text');
const cardName = document.getElementById('card-name');
const formCardExp = document.getElementById('form-card-exp');
const cardValidityDate = document.getElementById('card-validity-date');
const formCardCcv = document.getElementById('form-card-ccv');
const cardCcv = document.getElementById('cvc');
let cardInner = document.getElementsByClassName("flip-card-inner")[0]


formCardNumber.addEventListener('input', function(){
    cardNumber.innerHTML = formCardNumber.value;

    if (formCardNumber.value == "") {
        cardNumber.innerHTML = "•••• •••• •••• ••••";
    }

  });

  formCardName.addEventListener('input', function(){

    var str = formCardName.value;
    var newStr = str.slice(0,3) + ' / ' + str.slice(3);

    cardName.innerHTML = formCardName.value;

    if (formCardName.value == "") {
        cardName.innerHTML = "FULL NAME";
    }

  });

  formCardExp.addEventListener('input', function(){
    cardValidityDate.innerHTML = formCardExp.value;

    if (formCardExp.value == "") {
      cardValidityDate.innerHTML = "•••";
    } 
    
    //Si on a entré le mois dans la date d'expiration
    if(formCardExp.value.length===2){
          //On affiche un slash
          formCardExp.value+="/";
    }

    else {
      cardValidityDat.innerHTML = formCardExp.value;
    }


  });

  formCardCcv.addEventListener('input', function(){
    cardCcv.innerHTML = formCardCcv.value;

    if (formCardCcv.value == "") {
      cardCcv.innerHTML = "•••";
    }

  });


  // FORMATTING CREDIT CARD NUMBER 
  /////////////

  var txtCardNumber = document.querySelector("#form-card-number");
  txtCardNumber.addEventListener("input", onChangeTxtCardNumber);
  
  function onChangeTxtCardNumber(e) {		
      var cardNumber = txtCardNumber.value;
   
      // Do not allow users to write invalid characters
      var formattedCardNumber = cardNumber.replace(/[^\d]/g, "");
      formattedCardNumber = formattedCardNumber.substring(0, 16);
    
      // Split the card number is groups of 4
      var cardNumberSections = formattedCardNumber.match(/\d{1,4}/g);
      if (cardNumberSections !== null) {
          formattedCardNumber = cardNumberSections.join(' ');	
      }
    
      // If the formmattedCardNumber is different to what is shown, change the value
      if (cardNumber !== formattedCardNumber) {
          txtCardNumber.value = formattedCardNumber;
      }
  }
/////////////



// Only validate Number and Slash
/////////////
function validateNumberAndForwardSlash(event) {
  var key = window.event ? event.keyCode : event.which;

if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode == 191) {
  return true;
} else {
  return false;
}
};
/////////////


//Activation du flip de la carte si on est sur le champs CVC
formCardCcv.onfocus = function () {
  cardInner.style.transform = "rotateY(180deg)";
}
formCardCcv.onblur = function () {
  cardInner.style.transform = "rotateY(0deg)";
}