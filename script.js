/* .js files add interaction to your website */

affirList = [
    "I am successful.",
    "I am confident.",
    "I am a living, breathing example of motivation.",
    "I am filled with focus.",
    "I feel more grateful each day.",
    "I'm freeing myself from doubt and fear.",
    "I will not let my mistakes define me.",
    "I am worthy of investing in myself.",
    "I celebrate the good qualities in myself and others.",
    "I practice gratitude everyday."
  ];
  
  var displayMessage = document.getElementById("affirmation");
  var inputButton = document.getElementById("inputButton");
  var index = 0;
  
  inputButton.addEventListener("click", displayAffirmation);
  
  function displayAffirmation(){
    displayMessage.innerHTML = affirList[index];
    index++;
  
    if(index == affirList.length){
      index = 0;
    }
  }