// const blocks = [1, 6, 5, 9, 1, 6, 5, 12]
// const blocks = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]
const blocks = [10, 8, 5, 6, 4, 2, 1]
// const blocks = [2, 4, 3, 1, 1, 5, 2, 1, 3, 4]
// const blocks = [1, 8, 1, 8, 1, 9, 1, 8, 1, 2]
const water = []

let highest = 0
let nextHighest = 0
let waterBlocks = 0

for (let i = 0; i < blocks.length; i++) {
    nextHighest = 0
    for (j = i + 1; j < blocks.length; j++) {
        if (blocks[j] > nextHighest) {
            nextHighest = blocks[j]
        }
    }
    if (blocks[i] <= highest && blocks[i] <= nextHighest) {
        if (highest <= nextHighest) {
            waterBlocks += highest - blocks[i]
            water.push(highest)
        }
        else if (highest > nextHighest) {
            waterBlocks += nextHighest - blocks[i]
            water.push(nextHighest)
        }
    }
    else {
        highest = blocks[i]
        water.push(0)
    }
}

sizeX = blocks.length
sizeY = Math.max.apply(null, blocks)

console.log(`Width: ${sizeX}`)
console.log(`Height: ${sizeY}`)
console.log(`Number of water blocks: ${waterBlocks}`)

for (let y = sizeY; y > 0; y--) {
    let row = ''
    for (let x = 0; x < sizeX; x++) {
        if (blocks[x] >= y) {
            row = row.concat('\x1b[30m\x1b[43m[]\x1b[0m')
        } else if (water[x] >= y) {
            row = row.concat('\x1b[37m\x1b[44m--\x1b[0m')
        } else {
            row = row.concat('  ')
        }
    }
    console.log(row)
}