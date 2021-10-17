const createStore = require("./createStore")
// @ponicode
describe("createStore.default", () => {
    test("0", () => {
        let callFunction = () => {
            createStore.default()
        }
    
        expect(callFunction).not.toThrow()
    })
})
