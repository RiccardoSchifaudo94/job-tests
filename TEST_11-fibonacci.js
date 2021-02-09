

function fibonacci(max){
    var array = new Array();
    var i;
    array[0] = array[1] = 1;
    for(i=2;i<max;i++){
        array[i] = i;
    }
    for(i=2;i<max;i++){
        array[i]=array[i-1]+array[i-2];
    }
    return array;
}

fibonacci(12);

//recursive 
function fibonacci_recursive(max){
    if(max<=1)
        return max;
    else
        return fibonacci_recursive(max-2) + fibonacci_recursive(max-1);
}
fibonacci_recursive(12);