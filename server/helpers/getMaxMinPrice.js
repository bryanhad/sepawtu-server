function getMaxMinPrice(pMax, pMin) {
    const maxPrice = pMax
    ? (pMax <= 0 || isNaN(pMax)) ? null : pMax
    : null
    
    const minPrice = pMin
        ? (pMin <= 0 || isNaN(pMin)) ? null : pMin
        : null

    return {maxPrice, minPrice}
}

module.exports = getMaxMinPrice