export {caesarShift}

/**
 * caesar方式の変換を行う。
 * amountが負の場合は想定しない。
 *
 * @param targetStr 対象
 * @param amount ずらす数
 * @returns {*}
 */
function caesarShift(targetStr, amount) {

  let amountString = amount
  let amountInteger = amount

  if (amount < 0) {
    amountString = amount + 26
    amountInteger = amount + 10
  }

  let output = ''
  //一文字ずつ繰り返す
  for (let character of targetStr) {

    //文字の場合
    if (character.match(/[a-z]/i)) {
      let code = character.charCodeAt(0)
      //大文字
      if ((code >= 65) && (code <= 90)) {
        character = String.fromCharCode(((code - 65 + amountString) % 26) + 65)
        //小文字
      } else if ((code >= 97) && (code <= 122))
        character = String.fromCharCode(((code - 97 + amountString) % 26) + 97)
    }

    //数字の場合
    if (character.match(/[0-9]/)) {
      let int = parseInt(character, 10) + parseInt(amountInteger, 10)
      if (String(int).length >= 2) {
        int = String(int)[1]
      }
      character = int
    }
    output += character
  }

  return output
}