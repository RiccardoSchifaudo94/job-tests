function pitagoric_table(){
    var col = new Array(10);
    var i;

    for(i=0;i<col.length;i++){
        col[i] = new Array();
        for(j=0;j<col.length;j++)
            col[i].push((i+1)*(j+1));
    }
    console.table(col);
    return col;
}
pitagoric_table();