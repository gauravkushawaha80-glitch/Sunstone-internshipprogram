//length
//string ki size btayega
let name="djkfairwueiu";
console.log(name.length);
//touppercase
//sabko capital me convertkardega
console.log(name.toUpperCase());
// tolowercase
//sabko lower me convert kardega
let name1="KUSHWAHA";
console.log(name1.toLowerCase());
//trim
// space ko trim kardega left and right side both
let g="  aryan    ";
console.log(g.trim());
//includes
//batata hai ki string on string me hai yah nahi
let q="javascrrpt is not awesome ";
console.log(q.includes("no"));
//starts with
// bbata hai ki aisa koi word joh string mw start hi eraha hai 
let w="Ashutiosh is a boy";
console.log(w.startsWith("Ashuq"));
// endswith 
// batata hai ki koi word usse end ho raha hai yah nahi 
let e="wehdfl sdfkjl hhi sd g fdjfjdfjk jksdf hhi slkflsdkjf alf hhi hdwo";
console.log(e.endsWith("dwo"));
//indexof
// index batayega ki konsa index par word hai 
console.log(e.indexOf("g"));
// lastindexof 
//ye aakhri ka index 
console.log(e.lastIndexOf("ilho"));
//slice 
// range me jitne elements padhe hai voh retiurn kai 
console.log(e.slice(2,19));
// substring
//
console.log(e.substring(1,32));
 // replace 
 //haha stfing me dekjegfa vaha yek bar replace kar dega 

 console.log(e.replace("hhi","hi"));
//r replace 
// jaha poore string me dekhega vaha har jagah kar deha 
console.log(e.replaceAll("hhi","hi"));
//split 
// jiss characrer se karoge toh split kardenge and voh 
console.log(e.split(" "));
console.log(e);
//  