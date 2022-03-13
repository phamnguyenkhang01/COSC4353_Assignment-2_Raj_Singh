function margin ( ppg, locationf, ratehistoryf, gallonsrequestedf, profitf) {
    // ppg is price per gallon, kept at 1.5
    // location factor = .02 for texans, .04 out of state
    // gallons requested = 0.02 if > 1000gls, 0.03 if less
    // rate history = 0.01 if client requested before, 0 if not
    // profite = 0.10

    // margin calculation = locationf - ratehistoryf + gallonsrequestf + profitf
    return (locationf - ratehistoryf + gallonsrequestedf + profitf) * ppg
    
}
function totaldue (gallons, marginp){
    marginp = 1.5 + marginp
    // full price = ppg * suggested price
    return gallons * marginp
}

module.exports = {margin, totaldue}