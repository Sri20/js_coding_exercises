const { TestScheduler } = require("@jest/core");
const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require("../challenges/exercise007");


describe("sumDigits", () => {
    test(" sum of the digits  ", () => {
        expect(sumDigits(12345)).toEqual(15)
        expect(sumDigits(13)).toEqual(4)
        expect(sumDigits(5)).toEqual(5)
    })

})
describe("createRange", () => {
    test(" create an array of numbers with start,end,step value given ", () => {
        expect(createRange(3,11,2)).toEqual([3, 5, 7, 9, 11])
    })
    test(" create an  decrementing array ", () => {
        expect(createRange(100,87,2)).toEqual([100,98,96,94,92,90,88])
    })
    test(" step value not given ", () => {
        expect(createRange(30,35)).toEqual([30,31,32,33,34,35])
    })
})

describe("getScreentimeAlertList", () => {


    
    const users =   
    [{
        username: "beth_1234",
        name : "Beth Smith",
        screenTime: [
        { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
        { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
        { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
        { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
        { date: "2019-06-11", usage: { mapMyRun: 34, whatsApp: 78, facebook: 0, safari: 10} },
        ]
        },
        {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
        { date: "2019-06-11", usage: { mapMyRun: 57, whatsApp: 80, facebook: 0, safari: 10} },
        { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
        { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
        ]
        }
        ]

    test(" one user has more than 100 mins  ", () => {
        expect(getScreentimeAlertList(users,"2019-05-04")).toEqual(["beth_1234"])
    })
    test(" more than 1 user uses more than 100 mins  ", () => {
        expect(getScreentimeAlertList(users,"2019-06-11")).toEqual(["beth_1234","sam_j_1989"])
    })
    test(" no screen day  ", () => {
        expect(getScreentimeAlertList(users,"2020-06-11")).toEqual([])
    })
})


describe("hexToRGB", () => {
    test(" RGB code generates for hex string  ", () => {

        expect(hexToRGB('#FF1133')).toBe("rgb(255,17,51)")
    })
    test(" RGB code returns invalid hexstring  ", () => {

        expect(hexToRGB('FF11335')).toBe("invalid")
        expect(hexToRGB('#F1133')).toBe("invalid")

    })
})



describe("findWinner", () => {
    const board = [ ["X", "0", null],
                    ["X", null, "0"],
                    ["X", null, "0"] ]

    test(" winner is ", () => {
        expect(findWinner(board)).toBe('X')
    })
    const board1 = [ ["X", "0", null],
                     ["0", "0", "0"],
                    ["X", null, "0"] ]

    test(" winner is ", () => {
        expect(findWinner(board1)).toBe('0')
    })
    const board2 = [ ["X", "0", null],
                     ["0", "0", "X"],
                    ["X", "0", "0"] ]

    test(" winner is (diagnol) ", () => {
        expect(findWinner(board2)).toBe('0')
    })
    const board3 = [ ["0", "0", null],
                     ["0", "0", "X"],
                    ["X", "X", "0"] ]

    test(" winner is ", () => {
        expect(findWinner(board3)).toBe('0')
    })
    const board4 = [["0", "0", null],
                    ["0", null, "X"],
                    ["X", "X", "0"] ]

    test(" winner is ,no winner ", () => {
        expect(findWinner(board4)).toBe(null)
    })
    const board5 = [["0", "0", "X"],
                    ["0", "X", "X"],
                    ["X", "X", "0"] ]

    test(" winner is ,(diagnol) ", () => {
        expect(findWinner(board5)).toBe('X')
    })
})


    