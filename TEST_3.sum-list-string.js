// **     =======  TEST 3 - ITERATION FUNCTION   =======   **//
var list = ["23","test",null,"34",56, 22.7,"hello",12,"ciao",78,null,1,true,"call",1.3,"12,3",false,"#e24ada",11];
var i;
var sum = 0;
function sum_list_string(string_list){

    var list = string_list.filter(notNull);

    for(i=0;i<list.length;i++){
        
        //console.log("before conversion => "+list[i]);
        
        list[i] = Number(list[i]);
        
        //console.log("after conversion => "+list[i]);
        
        if(!isNaN(list[i]))
            if(!isFloat(list[i]))
             sum += list[i];
        
        //console.log(sum);    
    }
    //console.log(sum);
    return sum;
}
function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}
function notNull(n){
    return n !== null;
}
sum_list_string(list);

sum = 0;

// ** =======    TEST 4 - RECURSIVE FUNCTION  =======    **//
// var conta = 0;
function sum_list_string_recursive(string_list){
    //console.log("recursion ="+conta);
    if(string_list.length>0){
        //console.log("enter in recursion");
        //console.log("string list previous filtering");
        //console.log(string_list);
        string_list = string_list.filter(notNull);
        //console.log("string list after filtering null elements");
        //console.log(string_list);
        string_list[string_list.length-1] = Number(string_list[string_list.length-1]);
        //console.log("conversion in number");
        //console.log(string_list[string_list.length-1]);
        if(!isNaN(string_list[string_list.length-1]))
            if(!isFloat(string_list[string_list.length-1]))
                sum += string_list[string_list.length-1];
                //console.log("total sum = ");
                //console.log(sum);
                //conta++;  
                string_list.pop();
                sum_list_string_recursive(string_list);
             
    }
    //console.log("sum result of recursive function");
    return sum;
}

sum_list_string_recursive(list);