var rover = {
    direction: "N" ,
    x : 0,
    y : 0,
    travelLog: [[0,0]],
  };
  /*var grid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];*/
  
  // ======================
  function turnLeft(rover){
    switch(rover.direction) {
      case "N":
        rover.direction = "W";
        break;
      case "W":
        rover.direction = "S";
        break;
      case "S": 
        rover.direction = "E";
        break;
      case "E": 
        rover.direction = "N";
        break;
    }
      console.log("turnLeft was called! Current direction is " + rover.direction + " and rover position is " + rover.x +"-"  +rover.y);
  }
  
  function turnRight(rover){
    switch(rover.direction) {
      case "N": 
        rover.direction = "E";
        break;
      case "E": 
        rover.direction = "S";
        break;
      case "S": 
        rover.direction = "W";
        break;
      case "W":
        rover.direction = "N";
        break;
    }
      console.log("turnRight was called! Current direction is " + rover.direction + " and rover position is " + rover.x  + "-" +rover.y);
  }
  
  function moveForward(rover){
  switch(rover.direction) {
    case "N":
    if( rover.y===0){
      console.log("Danger! You will fall out!!");
      return false;
      }
      rover.y--;
      break;
  
    case "E":
    if ( rover.x===9){
      console.log("Danger! You will fall out!!");
      return false;
      }
      rover.x++;
      break;
  
    case "W": 
    if (rover.x===0){
      console.log("Danger! You will fall out!!");
      return false;
      }
      rover.x--;
      break;
  
    case "S":
    if(rover.y===9){
      console.log("Danger! You will fall out!!");
      return false;
      }
      rover.y++;
      break;
    }
    console.log("moveForward was called! Rover position is " + rover.x + '-' + rover.y);
  }
  
  
  function backForward(rover){
  switch(rover.direction) {
    case "N":
    if( rover.y===9){
      console.log("Danger! You will fall out!!");
      return false;
      }
      rover.y++;
      break;
  
    case "E":
    if ( rover.x===0){
      console.log("Danger! You will fall out!!");
      return false;
      }
      rover.x--;
      break;
  
    case "W": 
    if (rover.x===9){
      console.log("Danger! You will fall out!!");
      return false;
      }
      rover.x++;
      break;
  
    case "S":
    if(rover.y===0){
      console.log("Danger! You will fall out!!");
      return false;
      }
      rover.y--;
      break;
    }
    console.log("backForward was called! Rover position is " + rover.x + rover.y);
  }
  
   
  
    function test(commands){
    commands = commands.split('')
    //commands===['f','l','r'] 
    for (var i=0; i<= commands.length; i++) {
      if(commands[i]==='f'){
        moveForward(rover);
        rover["travelLog"].push([rover.x,rover.y]);
      } else if (commands[i]==='l') {
        turnLeft(rover);
      } else if (commands[i]==='r') {
        turnRight(rover)
      } else if (commands[i]=== 'b') {
        backForward(rover);
      }
    }
    }
    //console.log(rover.travelLog);
    //test("rffrfflfrff")
  
     function test2(){
    commands = window.prompt("Please enter the movements");
    commands = commands.split()
    //commands===['f','l','r'] 
    for (var i=0; i<= commands.length; i++) {
      if(commands[i]==='f'){
        moveForward(rover);
        rover["travelLog"].push([rover.x +rover.y]);
      } else if (commands[i]==='l') {
        turnLeft(rover);
      } else if (commands[i]==='r') {
        turnRight(rover)
      }
    }
    }
  
  test("rrbbllfrfffffflfrr")