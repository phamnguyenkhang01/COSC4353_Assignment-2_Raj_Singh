const qc = require ('./quotecalculator')

test('test quote calculator', () => {
    expect(qc.quotecalculator(1.5, 0.02, 0.01, 0.02, 0.10))
})