function setup() {
     loadJSON("https://dev.trainerpl.us/api/v1/library", gotData);
}

function gotData(data){
  // console.log(data);
  println(data);
}
