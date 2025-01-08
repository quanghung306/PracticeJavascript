const arr = [1, 2, 3, 4, 6, 5, 7];
const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const arr3 = [3, 4, 5];
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
//Lọc số chẵn trong mảng:
function EvenNum(arr) {
  return arr.filter((arr) => arr % 2 === 0);
}
console.log('số chẵn trong mảng',EvenNum(arr));
;
//Nhân đôi giá trị các phần tử trong mảng:
function DoubleElement(arr) {
  return arr.map((arr) => arr * 2);
}
console.log('Nhân đôi giá trị các phần tử trong mảng:',DoubleElement(arr));
//Tính tổng các phần tử trong mảng:
function SumElement(arr) {
  return arr.reduce((sum, num) => sum + num);
}
console.log('Tổng các phần tử trong mảng',SumElement(arr));

//Sắp xếp mảng theo thứ tự giảm dần:
function SortArr(arr) {
  return [...arr].sort((x, y) => y - x);
}
console.log('mảng theo thứ tự giảm dần: ',SortArr(arr));
//Tìm phần tử đầu tiên lớn hơn 5:
function Find(arr) {
  return arr.find((x) => x > 5);
}
console.log('phần tử đầu tiên lớn hơn 5:',Find(arr));
;
//Cho hai mảng hãy ghép hai mảng thành một
function MergingArray(str1,str2) {
  return str1.concat(str2);
}
const str1 = ["John", "Adam"];
const str2 = ["Eva", "Zeus", "Hades"];
console.log('Mảng sau khi ghép là',MergingArray(str1,str2));
;
//Tính tổng tất cả các số trong mảng lồng nhau
function SumArray(myArr) {
  return myArr.flat().reduce((x, y) => x + y);
}
console.log('Tổng tất cả các số trong mảng lồng nhau là',SumArray(myArr));
//Tìm phần tử chung giữa các mảng
function FindElement(arr1,arr2,arr3) {
  return arr1.filter((element) => arr2.includes(element) && arr3.includes(element));
}
console.log("Phần tử chung giữa các mảng:", FindElement(arr1,arr2,arr3))
//Tạo mảng mới với mỗi phần tử là tổng các phần tử của các mảng con
function sumOfSubArrays(myArr) {
  return myArr.map((arr) => arr.reduce((sum, num) => sum + num));
}
console.log('tổng các phần tử của các mảng con: ',sumOfSubArrays(myArr));

//Kiểm tra xem phần tử có tồn tại trong tất cả các mảng
function CheckElementExist(arr,element) {
  return arr.every((array) => array.includes(element));
}
console.log('phần tử có tồn tại trong tất cả các mảng',CheckElementExist([arr1,arr2,arr3],3));
//Đếm phần tử trong các mảng con
function CountArrays(myArr) {
  return myArr.map((arr) => arr.length).reduce((sum, num) => sum + num);
}
console.log(`Phần tử trong các mảng con là ${CountArrays(myArr)}`);

//Lọc phần tử duy nhất từ nhiều mảng
function FilterElements(arr) {
  return arr.filter((element) => arr.lastIndexOf(element) === arr.indexOf(element));
}
const allElement = [...arr1, ...arr2, ...arr3];
console.log('phần tử duy nhất từ nhiều mảng',FilterElements(allElement));

