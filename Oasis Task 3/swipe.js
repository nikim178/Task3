var touchPoint,
    prevTouchPoint,
    tpStartX,
    tpMoveX,
    tpStartY,
    tpMoveY


window.addEventListener("touchstart", function(e){
  touchPoint =  e.changedTouches[0];
  tpStartX = touchPoint.pageX;
  tpStartY = touchPoint.pageY;
  console.log(tpStartX);
  }
);

window.addEventListener("touchmove", function(e){
  touchPoint =  e.changedTouches[0];
  tpMoveX = touchPoint.pageX;
  tpMoveY = touchPoint.pageY;


  if(tpMoveX > tpStartX){
    resultF++;
    document.getElementById("far").value = resultF;
    getC();
    tpStartX = tpMoveX;
  }
  else{
    resultF--;
    document.getElementById("far").value = resultF;
    getC();
    tpStartX = tpMoveX;
  }
  //
  // if(tpMoveY < tpStartY){
  //   resultF++;
  //   document.getElementById("fahrenheit").value = resultF;
  //   getC();
  // }
  // else{
  //   resultF--;
  //   document.getElementById("fahrenheit").value = resultF;
  //   getC();
  // }

    console.log(tpStartX);
    console.log(tpMoveX);
    console.log(resultF);

  }
);
