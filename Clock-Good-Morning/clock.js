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

    // chinge text dipending on live clock
    let img = document.querySelector("#image");
    let timetext = document.querySelector("#livetime");
    let test = document.querySelector("#text");
    
    if(Hour>=6 && 12>Hour)
    {
      let timetext = document.querySelector("#livetime");
      timetext.innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
      
      let img = document.querySelector("#image");
      img.scr = './image/Goodmorning_image.png';

      let test = document.querySelector("#text");
      test.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
    }
    
    if(Hour>=12 && 16>Hour)
    {
      let timetext = document.querySelector("#livetime");
      timetext.innerHTML = "LET'S HAVE SOME LUNCH !!";
      
      let img = document.querySelector("#image");
      img.scr = './image/GoodAfternoon_image.png';

      let test = document.querySelector("#text");
      test.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";

    }
    if(Hour>=16 && 21>Hour)
    {
      let timetext = document.querySelector("#livetime");
      timetext.innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
      
      let img = document.querySelector("#image");
      img.scr = './image/lunch_image.png';

      let test = document.querySelector("#text");
      test.innerHTML = "GOOD EVENING !!";
    }

    if(Hour>=21 && 00>Hour)
    {
      let timetext = document.querySelector("#livetime");
      timetext.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
      
      let img = document.querySelector("#image");
      img.scr = './image/Night_image.png';

      let test = document.querySelector("#text");
      test.innerHTML = "GOOD NIGHT !!";
  
    }

    if(Hour>=00 && 6>Hour)
    {
      let timetext = document.querySelector("#livetime");
      timetext.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
      
      let img = document.querySelector("#image");
      img.scr = './image/Night_image.png';

      let test = document.querySelector("#text");
      test.innerHTML = "GOOD NIGHT !!";
    }
}


