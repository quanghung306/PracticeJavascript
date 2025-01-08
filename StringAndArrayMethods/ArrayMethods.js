var arr = [1, 2, 3, 4, 6, 5, 7];
//Lọc số chẵn trong mảng:
function EvenNum(arr) {
  const evenNumbers = arr.filter((arr) => arr % 2 === 0);
  console.log(`${evenNumbers} là số chẵn trong mảng`);
}
EvenNum(arr);
//Nhân đôi giá trị các phần tử trong mảng:
function DoubleElement(arr) {
  const doubled = arr.map((arr) => arr * 2);
  console.log(`Mảng sau khi nhân đôi giá trị là ${doubled} `);
}
DoubleElement(arr);
//Tính tổng các phần tử trong mảng:
function SumElement(arr) {
  const sum = arr.reduce((x, y) => x - y);
  console.log(`Mảng sau khi tổng các phần tử là ${sum} `);
}
SumElement(arr);
//Sắp xếp mảng theo thứ tự giảm dần:
function SortArr(arr) {
  const sortNum = [...arr].sort((x, y) => y - x);
  console.log(`Mảng sau khi sắp xếp theo thứ tự giảm dần là ${sortNum} `);
}
SortArr(arr);
//Tìm phần tử đầu tiên lớn hơn 5:
function Find(arr) {
  const firstGreaterThanFive = arr.find((x) => x > 5);
  console.log(`phần tử đầu tiên lớn hơn 5: ${firstGreaterThanFive} `);
}
Find(arr);
//Cho hai mảng hãy ghép hai mảng thành một
function MergingArray() {
  const arr1 = ["John", "Adam"];
  const arr2 = ["Eva", "Zeus", "Hades"];
  const MergingArray = arr1.concat(arr2);
  console.log(`Mảng sau khi ghép là: ${MergingArray}`);
}
MergingArray();
//Tính tổng tất cả các số trong mảng lồng nhau
function SumArray() {
  const myArr = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
   const SumArray = myArr.flat().reduce((x, y) => x + y);
  console.log(`Tông mảng lồng nhau là: ${SumArray}`);
}
SumArray();
//Tìm phần tử chung giữa các mảng
function FindElement() {
  const Arr1 =[1, 2, 3];
  const Arr2 =[2, 3, 4];
  const Arr3 =[3, 4, 5];
  const CommonElement = Arr1.filter(element=>Arr2.includes(element) && Arr3.includes(element) )
  console.log(`Phần tử trùng nhau là : ${CommonElement}`)
  }
  FindElement()
//Tạo mảng mới với mỗi phần tử là tổng các phần tử của các mảng con
function sumOfSubArrays() {
  const Arr= [[1, 2], [3, 4], [5, 6]];
  const SumArry = Arr.map(x=>x.reduce((sum,num) => sum+num))
  console.log(`tổng các phần tử của các mảng con là: ${SumArry}`)
  }
sumOfSubArrays();
//Kiểm tra xem phần tử có tồn tại trong tất cả các mảng
function CheckElementExist(){
  const Arr1 =[1, 2, 3];
  const Arr2 =[2, 3, 4];
  const Arr3 =[3, 4, 5];
  const CheckExist = [Arr1, Arr2, Arr3 ].every(array=> array.includes(3))
  console.log(`phần tử 3 có tồn tại trong tất cả các mảng : ${CheckExist}`)
}
CheckElementExist();
//Đếm phần tử trong các mảng con
function CountArrays() {
  const Arr= [[1, 2], [3, 4], [5, 6]];
  const SumArry = Arr.map((arr)=>arr.length).reduce((sum,num)=>sum+num);
  console.log(`Đếm phần tử trong các mảng con là: ${SumArry}`)
}
CountArrays();
//Lọc phần tử duy nhất từ nhiều mảng
function FilterElements  () { 
  const Arr1 =[1, 2, 3];
  const Arr2 =[3, 4, 5];
  const Arr3 =[5, 6, 7]
  const AllElement=[...Arr1,...Arr2,...Arr3]
  const FilterElements = AllElement.filter(element=>AllElement.lastIndexOf(element) === AllElement.indexOf(element));
  console.log("phần tử duy nhất từ nhiều mảng:", FilterElements)
 }
 FilterElements  () 