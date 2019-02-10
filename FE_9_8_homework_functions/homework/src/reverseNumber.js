const reverseNumber = int => {

    const reversed = int.toString().split('').reverse().join('')
    
    return parseInt(reversed) * Math.sign(int)
}