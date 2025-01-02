//Kiểm tra số chẵn lẻ
function checkNum(n) {
  if (n % 2 === 0) {
    console.log(n, "là số chẳn");
  } else {
    console.log(n, "là số lẽ");
  }
}
checkNum();
// Viết một chương trình nhập tuổi của người dùng và in ra một trong các kết quả:
// "Trẻ em" nếu tuổi < 13.
// "Thiếu niên" nếu 13 ≤ tuổi < 18.
// "Người lớn" nếu tuổi ≥ 18.
function age(n) {
  if (n < 13) {
    console.log("trẻ em");
  } else if (n < 18) {
    console.log("thiếu niên");
  } else {
    console.log("người lớn");
  }
}
age(17);
// Viết chương trình kiểm tra xem một năm có phải là năm nhuận không.
// Gợi ý:
// Một năm là năm nhuận nếu:
// Chia hết cho 4 và không chia hết cho 100, hoặc Chia hết cho 400.
function checkYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} là năm nhuận.`);
  } else {
    console.log(`${year} không phải là năm nhuận.`);
  }
}
checkYear(2000);
//Tìm số lớn nhất trong 3 số
//Nhập vào 3 số a, b, c và tìm số lớn nhất
function findMaxNum(a, b, c) {
  if (c < a) {
    console.log(`${a} là số lớn nhât`);
  } else if (c < b) {
    console.log(`${b} là số lớn nhất`);
  } else {
    console.log(`${c} là số lớn nhất`);
    
  }
}
findMaxNum(12, 2, 4);
// Kiểm tra tam giác hợp lệ
// Nhập độ dài 3 cạnh của tam giác và kiểm tra xem có phải tam giác hợp lệ không:
// Tam giác hợp lệ nếu tổng hai cạnh bất kỳ luôn lớn hơn cạnh còn lại.
function checkTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    console.log(`Độ dài ba cạnh ${a},${b},${c} Tam giác hợp lệ`);
  } else {
    console.log(`Độ dài ba cạnh ${a},${b},${c} Không phải tam giác hợp lệ`);
  }
}
checkTriangle(2, 3, 3);
