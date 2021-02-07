var i;
var string = " ";

for(i=1;i<100;i++){
    
    string = "";
    
    if(i%3===0){
        string +="Open";
    }
    if(i%7===0){
        string += "Source";
    }

    if(string.length>3)
      console.log(string);
    else
      console.log(i);
    

}