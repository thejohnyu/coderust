let replaceAt = function(string, index, character) { // (a, index(position), b)
    return string.substr(0, index) + character + string.substr(index + character.length);
  }
  
  let remove_duplicates_1 = function(s) {
  
    let hashset = new Set([]);
  
    let write_index = 0;
    let read_index = 0;
  
    while (read_index < s.length) {
      if (!hashset.has(s[read_index])) {
        hashset.add(s[read_index]);
        s = replaceAt(s, write_index, s[read_index]);
        write_index++;
      }
      read_index++;
    }
    return s.substr(0, write_index);
  };
  
  console.log("");
  console.log("");
  console.log("+++++++++++++++++++++++++++++++++++++++");
  console.log("Remove Duplicates");
  console.log("---------------------------------------");
  
  console.log("aabbccddefffgfijk", remove_duplicates_1("aabbccddefffgfijk"));
  console.log("Hello World!", remove_duplicates_1("Hello World!"));
  console.log("   Quick brown fox jumped   over lazy   dog           ", remove_duplicates_1("   Quick brown fox jumped   over lazy   dog           "));
  console.log("aaaaaaaaaaa", remove_duplicates_1("aaaaaaaaaaa"));
  console.log("aaaaaaaaaaabbbbbbbb", remove_duplicates_1("aaaaaaaaaaabbbbbbbb"));
// hello, 0, p
const replaceAt = (string, index, character) => {
   return string.substr(0, index) + character + string.substr(index + character.length)
}
// h + p + ello

// hpello, 5, h 
// o + h + o
// oho 