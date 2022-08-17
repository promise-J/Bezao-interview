const encrypted = '£*%&><!)"(@abcdefghijklmno'.split("");
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

//this function handles both the encryption and decryption.
// it takes two parameter: first is the message, second is the type the message appears.
//  For example if you want to decrypt a message pass the type as a second argument "dec" else
// use the key "enc"

export function crackAText(message, type) {
  let value = "";
  let valid = true;
  if (type == "enc") {
    message = message.split(" ");
    for (let j = 0; j < message.length; j++) {
      for (let i = 0; i < message[j].length; i++) {
        const idx = encrypted.indexOf(message[j][i]);
        if (idx == -1) {
          valid = false;
        }
        value += alphabet[idx];
      }
      value += " ";
    }
    // valid = true;
    // console.log(value);
    // return value;
  } else {
    message = message.toLowerCase().split(" ");
    for (let j = 0; j < message.length; j++) {
      for (let i = 0; i < message[j].length; i++) {
        const idx = alphabet.indexOf(message[j][i]);
        value += encrypted[idx];
      }
      value += " ";
    }
  }
    return valid ? value.trim() : 'Opps, wrong repping';
}

// const result1 = crackAText("hello world", "dec");
const result2 = crackAText(")>aad ldga&", "enc");
// console.log(result1);
console.log(result2);






