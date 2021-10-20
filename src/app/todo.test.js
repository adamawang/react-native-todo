const todo = require("./todo")
// @ponicode
describe("handleChange", () => {
    let inst

    beforeEach(() => {
        inst = new todo.Todo()
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleChange("This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleChange("Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleChange("Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleChange("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.handleChange(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handlePress", () => {
    let inst

    beforeEach(() => {
        inst = new todo.Todo()
    })

    test("0", () => {
        let callFunction = () => {
            inst.handlePress()
        }
    
        expect(callFunction).not.toThrow()
    })
})
