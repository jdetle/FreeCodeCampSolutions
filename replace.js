function myReplace(phrase, before, after) {
  if (before.charAt(0).toUpperCase() == before.charAt(0)) {
    var newAfter= after.charAt(0).toUpperCase()+after.substring(1,after.length);
  }
  else{
    var newAfter = after.charAt(0).toLowerCase()+after.substring(1,after.length);
  }
  phrase = phrase.replace(before, newAfter);
  return phrase;
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
