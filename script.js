

// function showNum() {

//     let num = parseInt(document.querySelector('.userInput').value);
//     let i;
//     for (let i = 2; i < 100; i++) {

//         if (num % i === 0) {
//             break
//         }

//     }
//     console.log('i')
//     if (i === num) {
//         alert('this is a prime number');
//     }
//     else {
//         alert('this is not a prime number');
//     }
// }

function isPrime(num) {

    let i;
    for (let i = 2; i < num; i++) {

        if (num % i === 0) {
            break;
        }
    }
    if (i === num) {
        return true
    } else {
        return false
    }
}
for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}
