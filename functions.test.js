const {
    returntwo,
    greeting,
    add,
    subtract,
    muti,
    divide
} = require('./function.js')

test('this is testing to see if return 2 works ', () =>{
    expect(returntwo()).toEqual(2)
})
test('this is a test to see if greeting works', () =>{
    expect(greeting('james')).toBe('hello james')
})

describe('math functions', () =>{
    test('this is testing to see if itll add 2 #s', () =>{
        expect(add(1,2)).toBe(3)
    })
    test('testing if itll subtract 2 #s', () =>{
        expect(subtract(1,2)).toBe(-1)
    })
    test(' test to see if itll multi 2 #s', () =>{
        expect(muti(1,2)).toBe(2)
    })
    test(' testing to see if itll divide 2 #s', () =>{
        expect(divide(1,2)).toBe(0.5)
    })

})

