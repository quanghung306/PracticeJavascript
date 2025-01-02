//Tính tổng các số từ 1 đến n
function SumNum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(`Tổng từ 1 đến ${n} là ${sum}`);
}
SumNum(10)
//Tính tổng các số chẵn từ 1 đến n
function SumEvenNum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if(i%2===0){
            sum += i;
            
        }
    }
    console.log(`Tổng các số chẵn từ 1 đến ${n} là ${sum}`);
  }
  SumEvenNum(10);
//Bảng cửu chương
function multiplication() {
  for (let i = 1; i <= 2; i++) {
    console.log(`Bảng cửu chương ${i}:`);
    for (let j = 1; j <= 9; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("   Hết  ");
  }
}
multiplication();
//In hình tam giác số
function triangle() {
  let n = 6;
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "*";
    }
    console.log(line);
  }
}
triangle();
// In số nguyên tố từ 1 đến n trong mảng
function elementNum(n) {
    const prime = [];
    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            prime.push(i);
        }
    }
    console.log(`Số nguyên tố từ 1 đến ${n} là ${prime.join(", ")}`);
}
elementNum(10);
// Tính giai thừa của một số
// Nhập một số n và tính giai thừa n!.
// Gợi ý:
// Giai thừa: n! = n * (n-1) * ... * 1.
function factorial(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  console.log(`Giai thừa của ${n} là ${factorial} `);
}
factorial(5);
// Tìm ước số chung lớn nhất (UCLN)
// Nhập 2 số a và b rồi tìm UCLN của chúng.
// Gợi ý:
// Dùng thuật toán Euclid:
// Nếu b = 0 → UCLN là a.
// Ngược lại, thay a = b và b = a % b, rồi lặp lại.
function findMaxUCLN(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  console.log("UCLN là:", a);
}
findMaxUCLN(8, 16);
