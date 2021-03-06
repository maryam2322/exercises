//******** mux number *******//
function maxNumber(a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}

console.log("Max is: ", maxNumber(10, 2))
console.log("Max is: ", maxNumber(1, 5))

//******** Check type of string *******//

function type(x) {
    let a = typeof (x);
    if (a === "string") {
        return x
    } else {
        return false
    }
}

console.log(type("salam"))
console.log(type(34))

//******** FizzBuss problem *******//

function divisibility(x) {
    if (x % 3 === 0 && x % 5 === 0)
        return 'fizzbuzz'

    else if (x % 5 === 0)
        return 'Buzz'

    else if (x % 3 === 0)
        return 'Fizz'

    else {
        return x
    }
}

console.log(divisibility(25))
console.log(divisibility(27))
console.log(divisibility(45))
console.log(divisibility(2))

//******** Power 2 *******//

function power2(x) {
    let j = 0

    for (let i = 1; x >= 2 ** j; i++) {
        j++
        if (x < 2 ** i) {
            return 2 ** i
        }
    }
}

console.log("Power 2 is : ", power2(95))
console.log("Power 2 is : ", power2(1010))
console.log("Power 2 is : ", power2(32))

//******** Complete number *******//

function complete(n) {
    let sum = 0
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i
        }
    }
    if (sum === n) {
        return 'YES'
    } else {
        return 'NO'
    }
}

console.log("Is a complete number? ", complete(27))
console.log("Is a complete number? ", complete(6))
console.log("Is a complete number? ", complete(28))


//******** Aval Bini *******//

function isPrime(n) {
    let i = 2
    for (i; i < n; i++)
        if (n % i === 0) break
    if(i === n) {
        return true
    }
    return false
}

function findPrimeNumber(a, b) {
    for (let j = a + 1; j < b; j++) {
        if (isPrime(j)) {
            console.log("The prime numbers of this rang: ", j)
        }
    }
}

findPrimeNumber(10, 20)


//******** Jan sakht *******//

function hardPassword(j) {
    let str = j.toString()
    let lStr = str.length

    for (let i = 0; i < lStr; i++) {
        if (!isPrime(Number(str.substring(0, lStr - i)))) {
            return false
        }
    }
    return true
}

function findHardPass(N) {
    for (let j = 10 ** (N - 1); j < 10 ** N; j++) {
        if (hardPassword(j)) {
            console.log("Hard Password is: ",j)
        }
    }
}

findHardPass(3)