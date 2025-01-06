//Kiểm tra số chẵn lẻ
function checkNum(n) {
  if (n % 2 === 0) {
    console.log(n, "là số chẳn");
  } else {
    console.log(n, "là số lẽ");
  }
}
checkNum(12);
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
  let max = c; //giả sử răng c là lớn nhất
  if (a > max) {
    max = a; // cấp nhật a là lớn nhất nên a lớn hơn max
  }
  if (b > max) {
    max = b; //cấp nhật b là lớn nhất nên b lớn hơn max
  }
  console.log(`${max} là số lớn nhất`);
}
findMaxNum(4, 12, 2); 
// dùng hàm sort tìm số lớn nhất trong 3 số 
function MaxNum(a,b,c){
  const numbers =[a,b,c];
  numbers.sort((x,y)=>x-y); //sắp xếp theo thứ tự mảng tăng dần
  console.log(`${numbers[numbers.length-1]} là số lớn nhất`);

}
 MaxNum(12,33,2)

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
