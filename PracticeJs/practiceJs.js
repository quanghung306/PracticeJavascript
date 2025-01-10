// Câu 2: Tuấn, em trai Toàn, có một hộp bi. Tuấn dự định sẽ mở bi ra đếm và nếu có thể, nhóc muốn chia bi cho anh Toàn. Cụ thể, dự định của Tuấn như sau:

// Nếu có 1 bi, thì Tuấn sẽ có một viên bi, còn anh Toàn thì cái hộp bi cũng không có.
// Nếu có 2 viên, thì Tuấn sẽ chia đôi: Tuấn một viên, Toàn một viên.
// Nếu có 3 viên, thì Tuấn lấy 2, và chừa cho Toàn 1.
// Nếu có ít nhất 4 viên, thì Tuấn cho hết.
// Cho n là số bi hiện tại Tuấn có. Hãy xác định xem với lượng bi này, Tuấn sẽ làm gì với nó (bạn chỉ cần thao tác với n, chứ không cần phải khởi tạo n, và giả sử n đã có sẵn).
// (Dung switch-case.)
function brothers(number) {
  switch (number) {
    case 1:
      console.log(
        "Tuấn sẽ có một viên bi, còn anh Toàn thì cái hộp bi cũng không có"
      );
      break;
    case 2:
      console.log("Tuấn một viên, Toàn một viên");
      break;
    case 3:
      console.log("Tuấn lấy 2, và chừa cho Toàn 1");
      break;
    default:
      console.log("Tuấn cho hết");
      break;
  }
}
brothers(4);
//dùng if
function brotherIf(number) {
  if (number === 1) {
    console.log(
      "Tuấn sẽ có một viên bi, còn anh Toàn thì cái hộp bi cũng không có"
    );
  } else if (number === 2) {
    console.log("Tuấn một viên, Toàn một viên");
  } else if (number === 3) {
    console.log("Tuấn lấy 2, và chừa cho Toàn 1");
  } else {
    console.log("Tuấn cho hết");
  }
}
brotherIf(2);
// Nâng cao: Dùng một function đệ quy để tính giá trị x^{y} mod  a với x, y, a là 3 số cho trước.
let a = 13;
let x = 3;
let y = 5;
function recursive(x, y, a) {
  if (y == 0) return 1;
  // Nếu y là số lẻ ta sẽ tính x^y =x * x ^(y-1)
  if (y % 2 === 1) {
    return (x * recursive(x, y - 1, a)) % a;
  }
  // Nếu y là số chẵn ta sẻ tính x^y = (x^(y/2))^2
  const even = recursive(x, Math.floor(y / 2), a);
  return (even * even) % a;
}
console.log(" Giá trị", recursive(x, y, a));

// Với một array arr cho trước (chỉ bao gồm các số tự nhiên), thực hiện các yêu cầu sau:

// Sử dụng map để bình phương toàn bộ các phần tử trong array.

const arr = [5, 6, 7, 8, 9, 10, 11];
function naturelNum(arr) {
  return arr.map((x) => x * x);
}
console.log(naturelNum(arr));

// // Dùng array ban đầu, đếm xem trong arr có bao nhiêu số chính phương (số chính phương là số có dạng x^{2} với x là một số tự nhiên.
function countSquareNumber(arr) {
  let count = 0;
  for (const num of arr) {
    const sqrt = Math.sqrt(num);
    if (Number.isInteger(sqrt)) {
      count++;
    }
  }
  return count;
}
console.log("Số chính phương trong arr là ", countSquareNumber(arr));

const num = 11;
console.log(Math.sqrt(num));

// Đếm số lượng ước của các số trong arr, sau đó lưu vào một array mới.\
function countDivisors(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      count++;
    }
  }
  return count;
}
//   console.log(countDivisors(arr));
function newArray(listNumber) {
  return listNumber.map((number) => countDivisors(number));
}
console.log("Mảng mới sau khi đếm số lượng ước là : ", newArray(arr));

// Cho một array nums (chỉ bao gồm các số 0 và 1).

// In ra số lượng số 0 trong a.
const arrNumber = [0, 1, 1, 1, 0, 1, 0, 1];
function printZero(arrNumber) {
  return arrNumber.filter((num) => num === 0).length;
}
console.log("Số lượng 0 trong mảng a là : ", printZero(arrNumber));

// Nâng cao: Đếm số lượng các số 1 liên tiếp dài nhất trong a. 2 số nằm cạnh nhau được xem là liên tiếp nhau.
function countNumOne(arrNumber) {
  let count = 0;
  let maxCount = 0;
  for (const num of arrNumber) {
    if (num === 1) {
      count++;
      maxCount = Math.max(maxCount, count);
    } else {
      count = 0;
    }
  }
  return maxCount;
}
console.log("Số lượng các số 1 liên tiếp dài nhất là ", countNumOne(arrNumber));

// Cho sẵn 1 array a, hãy thực hiện các thao tác sau:

const array = [1, 3, 2, 5, 4];

// Tính tổng các phần tử của a và in ra màn hinh
function sumArray(array) {
  return array.reduce((sum, num) => sum + num);
}
console.log("Tổng các phần tử trong mảng là : ", sumArray(array));

// Cho trước 2 số m và n, in ra các phần tử của a nằm trong khoảng [m..n] theo thứ tự từ bé đến lớn.
let m = 2;
let n = 10;
function filter(array, m, n) {
  return array
    .filter((number) => number >= m && number <= n)
    .sort((x, y) => x - y);
}
console.log(
  `các phần tử của a nằm trong khoảng [${m}..${n}] ${filter(array, m, n)}`
);

// In ra các số nguyên tố trong a.
function isPrime(number) {
  if (number < 2) return false;
  for (let index = 2; index <= Math.sqrt(number); index++) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}
function printPrime(array) {
  return array.filter((number) => isPrime(number));
}
console.log(printPrime(array));
