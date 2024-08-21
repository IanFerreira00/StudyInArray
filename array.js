var frutas = ['maça','laranja','banana']
console.log(frutas)

const contador = frutas.length
console.log(contador)

frutas.push('caqui','jaca')
console.log(frutas)

frutas.pop()
console.log(frutas)

frutas.shift()
console.log(frutas)

frutas.unshift('jaca')
console.log(frutas)

frutas.forEach(function(fruta){
    console.log(fruta)
})

const plural = frutas.map(fruta => fruta + 's')
console.log(plural)

const filter = frutas.filter(fruta => fruta.length > 5)
console.log (filter)

const reduce = frutas.reduce((acumulador, fruta) => acumulador + ', ' + fruta)
console.log (reduce)

const replace = reduce.replace('jaca','uva')
console.log(replace)