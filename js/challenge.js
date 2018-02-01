function tomString() {
    
var firstString = document.getElementById("tom").value;
var crazy = [];
for (var i = firstString.length - 1; i >= 0; i--) { 
    crazy += firstString[i];   

}
console.log(crazy);


}




