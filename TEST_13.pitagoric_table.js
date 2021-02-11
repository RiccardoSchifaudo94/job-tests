function pitagoric_table(){
    var col = new Array(10);
    var i;

    for(i=0;i<col.length;i++){
        col[i] = new Array();
        for(j=0;j<colonne.length;j++)
            col[i].push((i+1)*(j+1));
    }
    return col;
}
pitagoric_table();