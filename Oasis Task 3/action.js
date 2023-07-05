var calculateTemp = document.querySelectorAll(".user-temp"),
    bgColor = document.getElementById("tempBGcolor"),

    resultC = " ",
    resultF = " ",
    endTemp = " ",
    end = " ",
    startTemp = " ",
    start = " ",

    red = " ",
    green = " ",
    blue = " ",
    targetRed = " ",
    targetGreen = " ",
    targetBlue = " "

function getC()
{
    resultF = document.getElementById("far").value;
    var tempC = (resultF - 32) * (5/9);
    resultC = document.getElementById("cel").value = Math.round(tempC);
    changeBG();
};
function getF()
{
    resultC = document.getElementById("cel").value;
    var tempF = resultC * (9/5) + 32;
    resultF = document.getElementById("far").value = Math.round(tempF);
    changeBG();
};

calculateTemp[0].addEventListener("input", function(event){
    getC();
});

calculateTemp[1].addEventListener("input",function(event){
    getF();
});

var ddPurple = {
    startTemp: -50,
    endTemp: -10,
    hexNum: "#372a3d",
    red: 55,
    green: 42,
    blue: 61
};

var darkPurple = {
    startTemp: -10,
    endTemp: 0,
    hexNum: "#562d58",
    red: 86,
    green: 45,
    blue: 88
};

var indigo = {
    startTemp: 0,
    endTemp: 10,
    hexNum: "#313b7b",
    red: 49,
    green: 59,
    blue: 123
};

var darkBlue = {
    startTemp: 10,
    endTemp: 20,
    hexNum: "#134b9e",
    red: 19,
    green: 75,
    blue: 158
};

var blueO = {
    startTemp: 20,
    endTemp: 30,
    hexNum: "#305adb",
    red: 48,
    green: 90,
    blue: 219
};

var lightBlue = {
    startTemp: 30,
    endTemp: 40,
    hexNum: "#0081d3",
    red: 0,
    green: 129,
    blue: 211
};

var turquoise = {
    startTemp: 40,
    endTemp: 50,
    hexNum: "#00a39a",
    red: 0,
    green: 163,
    blue: 154
};

var greenO = {
    startTemp: 50,
    endTemp: 60,
    hexNum: "#00bb34",
    red: 0,
    green: 187,
    blue: 52
};

var yellowGreen = {
    startTemp: 60,
    endTemp: 70,
    hexNum: "#7ac600",
    red: 122,
    green: 198,
    blue: 0
};

var yellow = {
    startTemp: 70,
    endTemp: 80,
    hexNum: "#d7c000",
    red: 215,
    green: 192,
    blue: 0
};

var orange = {
    startTemp: 80,
    endTemp: 90,
    hexNum: "#ef7600",
    red: 239,
    green: 118,
    blue: 0
};

var redO = {
    startTemp: 90,
    endTemp: 100,
    hexNum: "#cd3400",
    red: 205,
    green: 52,
    blue: 0
};

var darkRed = {
    startTemp: 100,
    endTemp: 150,
    hexNum: "#9f0d14",
    red: 159,
    green: 13,
    blue: 20
};

var deepDarkRed = {
    startTemp: 150,
    endTemp: 150,
    hexNum: "#581100",
    red: 88,
    green: 17,
    blue: 0
};

function changeBG(){
    var currentTemp = resultF;

    if(currentTemp < -50){
        start = null;
        end = null;
        red = ddPurple.red;
        blue = ddPurple.blue;
        green = ddPurple.green;
        newRed = ddPurple.red;
        newBlue = ddPurple.blue;
        newGreen = ddPurple.green;
    }
    if (currentTemp > -50 && currentTemp <= -10){
        // start = turquoise.startTemp;
        start = ddPurple.startTemp;
        end = ddPurple.endTemp;
        red = ddPurple.red;
        blue = ddPurple.blue;
        green = ddPurple.green;
        targetRed = darkPurple.red;
        targetBlue = darkPurple.blue;
        targetGreen = darkPurple.green;
        }
    
      if (currentTemp > -10 && currentTemp <= 0){
        // start = turquoise.startTemp;
        start = darkPurple.startTemp;
        end = darkPurple.endTemp;
        red = darkPurple.red;
        blue = darkPurple.blue;
        green = darkPurple.green;
        targetRed = indigo.red;
        targetBlue = indigo.blue;
        targetGreen = indigo.green;
        }
    
      if (currentTemp > 0 && currentTemp <= 10){
        // start = turquoise.startTemp;
        start = indigo.startTemp;
        end = indigo.endTemp;
        red = indigo.red;
        blue = indigo.blue;
        green = indigo.green;
        targetRed = darkBlue.red;
        targetBlue = darkBlue.blue;
        targetGreen = darkBlue.green;
        }
    
      if (currentTemp > 10 && currentTemp <= 20){
        // start = turquoise.startTemp;
        start = darkBlue.startTemp;
        end = darkBlue.endTemp;
        red = darkBlue.red;
        blue = darkBlue.blue;
        green = darkBlue.green;
        targetRed = blueO.red;
        targetBlue = blueO.blue;
        targetGreen = blueO.green;
        }
    
        if (currentTemp > 20 && currentTemp <= 30){
          // start = turquoise.startTemp;
          start = blueO.startTemp;
          end = blueO.endTemp;
          red = blueO.red;
          blue = blueO.blue;
          green = blueO.green;
          targetRed = lightBlue.red;
          targetBlue = lightBlue.blue;
          targetGreen = lightBlue.green;
          }
    
      if (currentTemp > 30 && currentTemp <= 40){
        // start = turquoise.startTemp;
        start = lightBlue.startTemp;
        end = lightBlue.endTemp;
        red = lightBlue.red;
        blue = lightBlue.blue;
        green = lightBlue.green;
        targetRed = turquoise.red;
        targetBlue = turquoise.blue;
        targetGreen = turquoise.green;
        }
    
      if (currentTemp > 40 && currentTemp <= 50){
        // start = turquoise.startTemp;
        start = turquoise.startTemp;
        end = turquoise.endTemp;
        red = turquoise.red;
        blue = turquoise.blue;
        green = turquoise.green;
        targetRed = greenO.red;
        targetBlue = greenO.blue;
        targetGreen = greenO.green;
        }
    
      if (currentTemp > 50 && currentTemp <= 60){
        // start = green.startTemp;
        start = greenO.startTemp;
        end = greenO.endTemp;
        red = greenO.red;
        blue = greenO.blue;
        green = greenO.green;
        targetRed = yellowGreen.red;
        targetBlue = yellowGreen.blue;
        targetGreen = yellowGreen.green;
        }
    
        if (currentTemp > 60 && currentTemp <= 70){
          // start = green.startTemp;
          start = yellowGreen.startTemp;
          end = yellowGreen.endTemp;
          red = yellowGreen.red;
          blue = yellowGreen.blue;
          green = yellowGreen.green;
          targetRed = yellow.red;
          targetBlue = yellow.blue;
          targetGreen = yellow.green;
          }
    
        if (currentTemp > 70 && currentTemp <= 80){
            // start = green.startTemp;
            start = yellow.startTemp;
            end = yellow.endTemp;
            red = yellow.red;
            blue = yellow.blue;
            green = yellow.green;
            targetRed = orange.red;
            targetBlue = orange.blue;
            targetGreen = orange.green;
        }
    
        if (currentTemp > 80 && currentTemp <= 90){
            // start = green.startTemp;
            start = orange.startTemp;
            end = orange.endTemp;
            red = orange.red;
            blue = orange.blue;
            green = orange.green;
            targetRed = redO.red;
            targetBlue = redO.blue;
            targetGreen = redO.green;
        }
    
        if (currentTemp > 90 && currentTemp <= 100){
            // start = green.startTemp;
            start = redO.startTemp;
            end = redO.endTemp;
            red = redO.red;
            blue = redO.blue;
            green = redO.green;
            targetRed = darkRed.red;
            targetBlue = darkRed.blue;
            targetGreen = darkRed.green;
        }
    
        if (currentTemp > 100 && currentTemp <= 150){
            // start = green.startTemp;
            start = darkRed.startTemp;
            end = darkRed.endTemp;
            red = darkRed.red;
            blue = darkRed.blue;
            green = darkRed.green;
            targetRed = deepDarkRed.red;
            targetBlue = deepDarkRed.blue;
            targetGreen = deepDarkRed.green;
        }
    
        if (currentTemp > 150){
          start = null;
          end = null;
          red = deepDarkRed.red;
          blue = deepDarkRed.blue;
          green = deepDarkRed.green;
          targetRed = deepDarkRed.red;
          targetBlue = deepDarkRed.blue;
          targetGreen = deepDarkRed.green;
          }
    
          var redGap = Math.abs(targetRed - red);
          var blueGap = Math.abs(targetBlue - blue);
          var greenGap = Math.abs(targetGreen - green);

          var percMult = 1 / (end - start);
          var tempPercent = (end - currentTemp) * percMult;

          if (targetRed > red){
            var newRed = Math.trunc(targetRed - redGap * tempPercent);
        }
        else{
            var newRed = Math.trunc(targetRed + redGap * tempPercent);
        }
    
        if (targetBlue > blue){
            var newBlue = Math.trunc(targetBlue - blueGap * tempPercent);
        }
        else{
            var newBlue = Math.trunc(targetBlue + blueGap * tempPercent);
        }
    
        if (targetGreen > green){
            var newGreen = Math.trunc(targetGreen - greenGap * tempPercent);
        }
        else{
            var newGreen = Math.trunc(targetGreen + greenGap * tempPercent);
        }
        bgColor.style.backgroundColor = 'rgb(' + newRed + ',' + newGreen + ',' + newBlue + ')';
        console.log("START HERE - current Temp: "  + currentTemp);
        console.log("End: "  + end);
        console.log("tempPercent: "  + tempPercent);
    
        console.log("Red: "  + red  + "   Target Red: "  + targetRed  + "   New Red: " + newRed);
    
        console.log("Green: "  + green  + "   Target Green: "  + targetGreen  + "   New Green: " + newGreen);
    
        console.log("Blue: " + blue  + "   Target Blue: "  + targetBlue  + "   New Blue: " + newBlue);
    
        console.log("redGap: "  + redGap);
        console.log("greenGap: "  + greenGap);
        console.log("blueGap: "  + blueGap);
};

window.onload = getF();
