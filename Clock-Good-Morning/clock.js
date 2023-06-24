function calMe(){
       let morning = document.querySelector("#morning");
       let afternoon = document.querySelector("#afternoon");
       let evening = document.querySelector("#evening");
       let night = document.querySelector("#night");

       let wake = morning.options[document.getElementById("morning").selectedIndex];
       let lunch = afternoon.options[document.getElementById("afternoon").selectedIndex];
       let even = evening.options[document.getElementById("evening").selectedIndex];
       let one = night.options[document.getElementById("night").selectedIndex];

       console.log(wake.text);
       console.log(lunch.text);
       console.log(even.text);
       console.log(one.text);

      //  chinge time of small box

       let stortime = document.getElementsByClassName("timeparam");
       stortime [0].innerText = wake.text; 
       stortime [1].innerText = lunch.text;
       stortime [2].innerText = even.text;
       stortime [3].innerText = one.text;

      // change text depanding at dropdown box

       let test = document.getElementById("text");
       let img = document.querySelector("#image");
       
       let time = new Date();
       let hours = time.getHours();

       if(hours === parseInt(morning.value))
          {
            console.log("Good Moring..!");
            test.innerText = "Good Moring..!";
            img.src ='./image/Goodmorning_image.png'
          }
          else if(hours === parseInt(afternoon.value))
          {
            console.log("Good Afternoon");
            test.innerText = "Good Afternoon";
            img.src ='./image/GoodAfternoon_image.png'
          }
          else if(hours === parseInt(evening.value))
          {
            console.log("Good Evening");
            test.innerText = "Good Evening";
            img.src ='./image/lunch_image.png'
          }
          else if(hours === parseInt(night.value))
          {
            console.log("Good night");
            test.innerText = "Good night";
            img.src ='./image/Night_image.png'
          }
          else
          {
            console.log("default value");
          }        
}

// live clock

setInterval(myFunction, 1000);
function myFunction() {
    let date = new Date();

    let Hour = date.getHours();
    console.log("hours");
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let AMPM = "AM";
    
    if (Hour > 12) {
      Hour -= 12;
      AMPM = "PM";
    }
  
    if (Hour < 10) {
      Hour = "0" + Hour;
    }
  
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    document.getElementById("hours").innerHTML = Hour;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("ampm").innerHTML = AMPM;

    // chinge text on live clock

  let live = document.getElementById("livetimeText");
  
  let hours = new Date().getHours();
 if (hours >= 0o6 && hours < 11) 
 {
  live.innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
 }
 else if (hours >= 11 && hours < 15) 
 {
  live.innerText = "LET'S HAVE SOME LUNCH !!";
 }
 else if (hours >= 15 && hours < 21) 
 {
  live.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
 }
 else if (hours >= 21 || hours < 0o6) 
 {
  live.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
 }
 else 
 {
  live.innerText = "CLOSE YOUR EYES AND GO TO SLEEP..!!";
 }   
}



