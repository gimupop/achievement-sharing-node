import {conversion,conversionGender,conversionAgeToBirthYear} from '../src/app'


describe('conversion',() =>{

  it('should response gender and birth if parameter is normal',function () {
    let result = conversion('1_025')
    expect(result).toEqual('ljsijw=rfqj:gnwym=64475656')
  })

  it('should response only birth if parameter gender is not normal range',function () {
    let result = conversion('0_025')
    expect(result).toEqual('gnwym=64475656')
  })

  it('should response blank if parameter gender is normal range and parameter age is string',function () {
    let result = conversion('0_hoge')
    expect(result).toEqual('')
  })

  it('should response only gender if parameter is only gender',function () {
    let result = conversion('1')
    expect(result).toEqual('ljsijw=rfqj')
  })

  it('should response blank if parameter is not normal',function () {
    let result = conversion('hoge__')
    expect(result).toEqual('')
  })

  it('should response blank if parameter is blank',function () {
    let result = conversion('')
    expect(result).toEqual('')
  })

})

describe('conversionGender',() =>{

  it('should response male if parameter is 1',function () {
    let result = conversionGender('1')
    expect(result).toEqual('male')
  })

  it('should response female if parameter is 2',function () {
    let result = conversionGender('2')
    expect(result).toEqual('female')
  })

  it('should response null if parameter is not normal range',function () {
    let result = conversionGender('3')
    expect(result).toEqual(null)
  })

  it('should response null if parameter is not expected',function () {
    let result = conversionGender('hoge_1')
    expect(result).toEqual(null)
  })

  it('should response null if parameter is blank',function () {
    let result = conversionGender('')
    expect(result).toEqual(null)
  })

  it('should response null if parameter is undefined',function () {
    let result = conversionGender(undefined)
    expect(result).toEqual(null)
  })

  it('should response null if parameter is null',function () {
    let result = conversionGender(null)
    expect(result).toEqual(null)
  })

})

describe('conversionAgeToBirth',() =>{

  it('should response calc result if parameter is 2 digit',function () {
    let result = conversionAgeToBirthYear('025')
    expect(result).toEqual('19920101')
  })

  it('should response calc result if parameter is 1 digit',function () {
    let result = conversionAgeToBirthYear('005')
    expect(result).toEqual('20120101')
  })

  it('should response calc result if parameter is 3 digit',function () {
    let result = conversionAgeToBirthYear('125')
    expect(result).toEqual('18920101')
  })

  it('should response null if parameter blank',function () {
    let result = conversionAgeToBirthYear('')
    expect(result).toEqual(null)
  })

  it('should null result if parameter undefined',function () {
    let result = conversionAgeToBirthYear(undefined)
    expect(result).toEqual(null)
  })

  it('should response null if parameter is null',function () {
    let result = conversionAgeToBirthYear(null)
    expect(result).toEqual(null)
  })

})