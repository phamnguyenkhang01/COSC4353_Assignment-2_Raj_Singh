const qc = require ('./quotecalculator')

test('test quote calculator', () => {
    expect(qc.margin(1.5, 0.02, 0.01, 0.02, 0.10)).toBe(.195)

    margin = qc.margin(1.5, 0.02, 0.01, 0.02, 0.10)
    expect(qc.totaldue(1500, margin)).toBe(2542.5)

})