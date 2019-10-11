var rover = {
    direction: "N" ,
    x : 0,
    y : 0,
    travelLog: [[0,0]],
  };

  function turnLeft(rover){
    console.log("turnLeft was called!");
  }
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
  
  function turnRight(rover){
    console.log("turnRight was called!");
  }
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
  
  function moveForward(rover){
    console.log("moveForward was called")
  }
  switch(rover.direction) {
    case "N":
      rover.y--;
      break;
    case "E":
      rover.x++;
      break;
    case "W":
      rover.x--;
      break;
    case "S":
      rover.y++;
      break;
  }
   
  
    function test(commands){
    commands ==commands.split()
    //commands===['f','l','r'] 
    for (var i=0; i<= commands.length; i++) {
      if(commands[i]==='f'){
        moveForward(rover);
        rover["travelLog"].push([rover.x,rover.y]);
      } else if (commands[i]==='l') {
        turnLeft(rover);
      } else if (commands[i]==='r') {
        turnRight(rover)
      }
    }
    }
    console.log(rover.travelLog);
    test("rffrfflfrff")