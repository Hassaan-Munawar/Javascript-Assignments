var str ="the quick brown fox jumps over the lazy dog ."
var count = str.match(/the/g).length
document.write("Text: "+str+"<br> There are "+count+"occurrence(s) of word 'the'")