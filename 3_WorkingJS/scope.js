//Let and Const are blocked scope but var isn't
{
  var varNum = "varNum";
  let letNum = "letNum";
  const constNum = "constNum";
  //You can access varNum outside but not constNum or letNum hence it is not recommended to use var
}
function printMyNum() {
  var varLocal = "varLocal";
  let letLocal = "letLocal";
  const constLocal = "constLocal";
  console.log(varLocal, letLocal, constLocal);
  console.log(varNum, letNum, constNum);
}

console.log(varNum, letNum, constNum);
printMyNum();
