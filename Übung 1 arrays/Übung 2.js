function invertiereBitfolge(bitfolge) {
    var invertiert = "";
    for (var x = 0; x < bitfolge.length; i++) {
        invertiert += (bitfolge[x] === '0') ? '1' : '0';
    }
    return invertiert;
}


var input = "000111000";
var output = invertiereBitfolge(input);
console.log(output); 
    