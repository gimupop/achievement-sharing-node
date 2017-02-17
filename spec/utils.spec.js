import {caesarShift} from '../src/utils'

describe('caesarShift',() =>{

  it('should work when amount is positive_number',function () {
    let result = caesarShift('Shift=1234:;-+?,.',7)
    expect(result).toEqual('Zopma=8901:;-+?,.')
  })

  it('should work when amount is negative_number',function(){
    let result = caesarShift('Shift=1234:;-+?,.',-6)
    expect(result).toEqual('Mbczn=5678:;-+?,.')
  })

})