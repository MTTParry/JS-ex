
const zip = (a, b) => a.map((k, i) => [k, b[i]]);

// A function to Add two numbers together
function add(x, y) {
    return x + y
}


const xs = [1, 2, 3, 4, 5, 6, 7]
const ys = [1, 2, 3, 4, 5, 6, 7]
var zs = []
for (let i = 0; i < xs.count; i++) {
    zs.push(add(xs[i], ys[i]))
}
console.log(zs)


function hi(whom) {
    return "Hello " + whom + "!"
}
