module.exports = function check(str, bracketsConfig) {
  let prev;
    do{
    prev = str;
    bracketsConfig.forEach(element => { 
      str = str.replace(new RegExp("\\" + element[0]+"\\" +element[1], "g"), '');
      str = str.replace(new RegExp(element[0]+element[1], "g"), '');
    });
    }while (str!=prev);
    return str==="";
}
