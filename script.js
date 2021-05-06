$(".inner-switch" ).on("click", function(
  ){
  
    if( $("body").hasClass("dark")){
      $("body" ).removeClass( "dark ");
      $(".inner-switch").text("OFF");
    }else{
      $("body").addClass("dark");
      $(".inner-switch").text("ON");
    }
  });
  
  function calories() {
    function find(id) { return document.getElementById(id) }
    var age = find("age").value,  height = find("height").value * 2.54,  weight = find("weight").value / 2.2,  result = 0
    if (find("male").checked) 
      result = 66.47 + (13.75 * weight) + (5.0 * height - (6.75 * age))
    else if (find("female").checked)
      result = 665.09 + (9.56 * weight) + (1.84 * height - (4.67 * age))
    find("totalCals").innerHTML = Math.round( result )
  }
  calories();
  function Bmicalculator() {
    var weight = document.bmiForm.weight.value, height = document.bmiForm.height.value
     if(weight > 0 && height > 0){	
    var finalBmi = weight/(height*height)*703
    document.bmiForm.bmi.value = finalBmi
     if(finalBmi < 18.5){
    document.bmiForm.meaning.value = "You may be underweight!"
      }
      if(finalBmi > 18.5 && finalBmi < 25){
    document.bmiForm.meaning.value = "Congratulations! You are healthy!"
      }
      if(finalBmi > 25){
    document.bmiForm.meaning.value = "You may be overweight!"
      }
    }
    else{
    alert("Please fill in everything correctly!")
      }
    }
    var slim = new Array('images/abs1.png','images/img1.jpg','images/img4.jpg','images/img7.jpg','images/img10.jpg');
    var mid = new Array('images/abs2.jpg', 'images/abs4.jpg', 'images/img2.jpg','images/img5.jpg','images/img8.jpg');
    var heavy = new Array('images/abs3.jpg', 'images/abs5.jpg','images/img3.jpg','images/img6.jpg','images/img9.jpg');

    function choosePic(){
      //random number
      console.log("test");
      var randomNum = Math.floor(Math.random() * 4);
      //place image in slot
      document.getElementById('imageloc').src = `images/abs1.png`;
      //if (group => 0.34 || group =< 0.42){
        //document.getElementById('imageloc').src = `${slim[randomNum]}`;
      //}
      //else if (group => 0.43 || group =< 0.57){
        //document.getElementById('imageloc').src = `${mid[randomNum]}`
      //}
      //else if (group => 0.58 || group =< 0.63){
        //document.getElementById('imageloc').src = `${heavy[randomNum]}`
      //}
    }