const palindromes = function (string) {
    const modString = string.replaceAll(/[^a-zA-Z0-9]+/g, "");
    const modString2 = modString.replaceAll(" ", "");
    const modString3 = modString2.toLowerCase();
    console.log(modString3);
    var splitString = modString3.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return (modString3 === joinArray);
  
};

// Do not edit below this line
module.exports = palindromes;
