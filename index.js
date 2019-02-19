const black = '\x1b[30m'
const cyan = '\x1b[36m'
const bgYellow = "\x1b[43m"
const bgBlue = "\x1b[44m"
const reset = "\x1b[0m"

const arr = (n) => {
    const arr = []
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * n) + 1)
    }
    return arr
}
const scheme = arr(20)

const water = []
let highest = 0
let nextHighest = 0
let waterBlocks = 0
const sizeX = scheme.length
const sizeY = Math.max.apply(null, scheme)

for (let i = 0; i < scheme.length; i++) {
    nextHighest = 0
    for (j = i + 1; j < scheme.length; j++) {
        if (scheme[j] > nextHighest) {
            nextHighest = scheme[j]
        }
    }
    if (scheme[i] <= highest && scheme[i] <= nextHighest) {
        if (highest <= nextHighest) {
            waterBlocks += highest - scheme[i]
            water.push(highest)
        } else if (highest > nextHighest) {
            waterBlocks += nextHighest - scheme[i]
            water.push(nextHighest)
        }
    } else {
        highest = scheme[i]
        water.push(0)
    }
}

for (let y = sizeY; y > 0; y--) {
    let row = ''
    for (let x = 0; x < sizeX; x++) {
        if (scheme[x] >= y) {
            row = row.concat(`${black+bgYellow}[]${reset}`)
        } else if (water[x] >= y) {
            row = row.concat(`${cyan+bgBlue}~~${reset}`)
        } else {
            row = row.concat('  ')
        }
    }
    console.log(row)
}
console.log(`Width: ${sizeX}`)
console.log(`Height: ${sizeY}`)
console.log(`Number of water blocks: ${waterBlocks}`)