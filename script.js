//Opdracht 10 
//HEY KIDDO
//second function calls first function
/*const checkAdult = function(age){
    console.log("Entering checkAdult");
    console.log("Input is: ", age);
    if (age>=18){
    return isAdult="true";
    } return isAdult="false";
};
const greetVisitor = function(age){
    console.log("Entering greetVisitor 1st");
    console.log("Input is: ", age);
    const greeting=checkAdult(age);
    console.log("Entering greetVisitor 2nd");
    console.log("Input isAdult: ", isAdult);
    if (age>=18){
    console.log("Entering if; isAdult: ", isAdult);
    console.log("Hello there!");
    } else {
    console.log("Entering else; isAdult: ", isAdult);
    console.log("Hey kiddo!");
    }
};
greetVisitor(17);*/
//VRAAG: Hoe kun je gebruik maken van "true" en "false" in de 2de functie? 
//Nu gesmokkeld door weer met age te werken; maar nu voegt 1ste functie eigenlijk niks toe...
//Geprobeerd met if (isAdult=true) maar dan verandert hij zelf de waarde naar true waardoor hij altijd "Hello there!" zegt...

//VAT CALCULATIONS Exercise 1

let typeOfProduct=("Goods");
switch (typeOfProduct) {
    case "Goods":
        console.log("percVAT Goods =",percVAT = 0.21);
        break;
    case "Food":
        console.log("percVAT Food =",percVAT = 0.09);
        break;
    case "Purchases":
        console.log("percVat Purchases =",percVAT = 0);
        break 
}
const calculateVAT = function(typeOfProduct, basePrice){
        console.log("Switch states percVAT is:", percVAT);
        console.log("basePrice is:", basePrice);
        const amountVAT=percVAT*basePrice;
        console.log("amountVAT is:",amountVAT);
        return amountVAT;
};
const calculatePriceInclVAT = function(basePrice, amountVAT){
        console.log("Entering calculatePriceInclVAT1st");
        calculateVAT("",1000);
        console.log("Entering calculatePriceInclVAT2nd");
        console.log("basePrice and amountVAT are:", basePrice, amountVAT)
        const priceInclVAT=basePrice+amountVAT;
        console.log("Price incl VAT is:", priceInclVAT);
}
calculatePriceInclVAT();
//VRAAG: Het lukt wel om in eerste functie basePriceInclVAT te berekenen maar niet in de 2de; 
//dan zet hij de basePrice en amountVAT weer op undefined als je daar de 2de keer terugkeert. Wat doe ik fout?