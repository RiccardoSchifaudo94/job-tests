var string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
function printArrayAlpha(string){
    string.forEach(element => {
        console.log(element.trim(""));
    });
}
printArrayAlpha(string);

