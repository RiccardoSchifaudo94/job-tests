var array = [23,12,45,87,75,15,77,92,84,94];

function sort(array){
    var park;
    var i;
    var j;
    
    for(i=0;i<array.length;i++){
        for(j=0;j<array.length-1;j++){
            if(array[i]<array[j]){
                park = array[i];
                array[i] = array[j];
                array[j] = park;
            }
        }
    }

    return array;
}

sort(array);