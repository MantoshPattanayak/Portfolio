const dynamicContent=document.getElementById("dynamic-text");
console.log(dynamicContent);
const phrase="Seeking an entry-level position to begin my career in a high-level professional environment....";
let letterIndex=0;
function printLetter(phrase){
if(letterIndex<phrase.length){
	dynamicContent.textContent+=phrase.charAt(letterIndex)
	letterIndex+=1;
	setTimeout(function(){
		printLetter(phrase)
	},300)

}

}
printLetter(phrase);