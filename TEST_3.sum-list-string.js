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

//helpers functions 
function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}
function notNull(n){
    return n !== null;
}

//init iteration function
sum_list_string(list);

//reset sum var
sum = 0;

// ** =======    TEST 4 - RECURSIVE FUNCTION  =======    **//
// var conta = 0;
function sum_list_string_recursive(string_list){
    //until array is not empty recall recursive function
    if(string_list.length>0){
        //enter in recursion;
        //string list previous filtering;
        string_list = string_list.filter(notNull);
        //string list after filtering null elements;
        string_list[string_list.length-1] = Number(string_list[string_list.length-1]);
        //conversion in number;
        if(!isNaN(string_list[string_list.length-1]))
            if(!isFloat(string_list[string_list.length-1]))
                sum += string_list[string_list.length-1];
                //disabled - conta++;  
                //remove last array element just added to sum vars after check controls
                string_list.pop();
                //recall recursive function with same array reduced of removed last element
                sum_list_string_recursive(string_list);
             
    }
    //return sum result of recursive function
    return sum;
}
//init recursive function
sum_list_string_recursive(list);