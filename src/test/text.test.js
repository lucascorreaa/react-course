const text = require('./text')

test('mostre o texto mais o a', () => {
    expect(text("rafa")).toBe("rafaa")
})