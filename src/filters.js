import numeral from 'numeral'

const dollarFilter = function (value) {
    if (!value) {
        return '$ 0'
    }

    return numeral(value).format('($ 0,000,00.00 a)')
}

const percentFilter = function (value) {
    if (!value) {
        return '0 %'
    }

    // return `${Number(value).toFixed(2)} %`
    return numeral(value).format('0 %')
}

export { dollarFilter, percentFilter }