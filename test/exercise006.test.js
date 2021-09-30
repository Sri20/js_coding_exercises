const { TestScheduler } = require("@jest/core");
const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} = require("../challenges/exercise006");


describe("sumMultiples", () => {
    test("check number array multiple of 3 or 5 and adds", () => {
        expect(sumMultiples([1,4,5,6,8,9,90,30,80,121])).toBe(220)
        expect(sumMultiples([81,9,24])).toBe(114)
        expect(sumMultiples([25,40,10])).toBe(75)
    })
    test(" array has no multiples of 3 or5", () => {
        expect(sumMultiples([22,143,124,4,8,77,16])).toBe(0)
    })
})

describe("isValidDNA", () => {
    //test("checks a string is valid DNA")
    test(" returns true for valid DNA", () => {
        expect(isValidDNA('TGTACTG')).toBe(true)
        expect(isValidDNA('TGATGATCATTACGTACTG')).toBe(true)
    })
    test(" returns false for invalid DNA", () => {
        expect(isValidDNA('TGTACTGERG')).toBe(false)
        expect(isValidDNA('Random12RG')).toBe(false)
    })
})


describe("getComplementaryDNA", () => {
    test(" complement valid DNA", () => {
        expect(getComplementaryDNA('TGTACTG')).toBe('ACATGAC')
        expect(getComplementaryDNA('TGATC')).toBe('ACTAG')
    })
    test(" returns null if invalid DNA", () => {
        expect(getComplementaryDNA('TGTACTGERG')).toBe('')
        expect(getComplementaryDNA('Random12RG')).toBe('')
    })
})


describe("isItPrime", () => {
    test(" returns true or false if prime number or not  ", () => {
        expect(isItPrime(2)).toBe(true)
        expect(isItPrime(4)).toBe(false)
        expect(isItPrime(100)).toBe(false)
        expect(isItPrime(49)).toBe(false)
        expect(isItPrime(11)).toBe(true)
        expect(isItPrime(0)).toBe(false)
        expect(isItPrime(1)).toBe(false)
        expect(isItPrime(83)).toBe(true)
    })    

})

describe("createMatrix", () => {
    test(" create array matrix and fills it with the string ", () => {
        expect(createMatrix(3,'foo')).toEqual([['foo','foo','foo'], ['foo','foo','foo'],['foo','foo','foo']])
    })

})


describe("areWeCovered", () => {
    const staff1=
    [ { name: "Sally", rota: ["Monday", "Tuesday", "Friday","Wednesday"] },
    { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
    { name: "Pam", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
    { name: "Jim", rota: ["Saturday",  "Friday", "Wednesday","Sunday"] } ]

    test(" no staff present ", () => {
        expect(areWeCovered([],'Monday')).toBe(false)
    })
    test(" returns true if enough staff present atleast 3 ", () => {
        expect(areWeCovered(staff1,'Tuesday')).toBe(true)
        expect(areWeCovered(staff1,'Saturday')).toBe(true)
        expect(areWeCovered(staff1,'Wednesday')).toBe(true)
        expect(areWeCovered(staff1,'Sunday')).toBe(true)
    })
    test(" returns false if not enough staff present ", () => {
        expect(areWeCovered(staff1,'Monday')).toBe(false)
        expect(areWeCovered(staff1,'Thursday')).toBe(false)
        expect(areWeCovered(staff1,'Friday')).toBe(false)

    })

})

