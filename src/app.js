import {caesarShift} from './utils'
export {conversion,conversionGender,conversionAgeToBirthYear}
/**
 * 変換と暗号化を行ったデモグラ情報を返却する。
 *
 * @param target gender_ageの形式
 * @returns {*}
 */
function conversion(target) {
  const targetList = target.split('_')

  let resultMap = new Map()
  resultMap.set('gender',conversionGender(targetList[0]))
  resultMap.set('birth',conversionAgeToBirthYear(targetList[1]))

  let demographicsString = ''
  for(let [key ,val] of resultMap.entries()){
    if (val) {
      demographicsString += key + '=' + val + ':'
    }
  }
  demographicsString = demographicsString.substr(0,demographicsString.length-1)
  console.log(demographicsString)
  return caesarShift(demographicsString, 5)
}

/**
 * セゾン側の性別の記述方式をMAの記述方式に変換する。
 * @param saisonGender
 * @returns {*}
 */
function conversionGender(saisonGender) {
  let maGender
  if (saisonGender == 1) {
    maGender = 'male'
  } else if (saisonGender == 2) {
    maGender = 'female'
  } else {
    maGender = null
  }
  return maGender
}

/**
 * 年齢を生まれた年に変換し、デフォルトの年月日をつけて返す。
 * @param age
 * @returns {*}
 */
function conversionAgeToBirthYear(age) {
  if (age && Number(age)) {
    const defaultMMDD = '0101'
    const DD = new Date()
    const year = DD.getFullYear()
    const birthYear = year - age
    return birthYear + defaultMMDD
  }
  return null
}


/**
 * グローバル領域にメソッドを追加。
 */
if (typeof window !== 'undefined') {
  window.microadBlade = window.microadBlade || {}
  window.microadBlade.saisonMaDemographic = window.microadBlade.saisonMaDemographic || {}
  window.microadBlade.saisonMaDemographic.conversion = window.microadBlade.saisonMaDemographic.conversion || conversion
}