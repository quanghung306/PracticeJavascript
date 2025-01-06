var arr =[1,2,3,4,6,5,7]
//Lọc số chẵn trong mảng:
function EvenNum(arr){
    const evenNumbers = arr.filter(arr=>arr%2===0);
    console.log(`${evenNumbers} là số chẵn trong mảng`);
}
EvenNum(arr)
//Nhân đôi giá trị các phần tử trong mảng:
function DoubleElement(arr) {
    const  doubled = arr.map(arr=>arr*2);
    console.log(`Mảng sau khi nhân đôi giá trị là ${doubled} `);
  }
DoubleElement(arr)
//Tính tổng các phần tử trong mảng:
function SumElement(arr) {
    const sum = arr.reduce((x,y)=>x+y);
    console.log(`Mảng sau khi tổng các phần tử là ${sum} `);
  }
SumElement(arr)
//Sắp xếp mảng theo thứ tự giảm dần:
function SortArr(arr) { 
    const sortNum = [...arr].sort((x,y)=>y-x);
    console.log(`Mảng sau khi sắp xếp theo thứ tự giảm dần là ${sortNum} `);
 }
 SortArr(arr)
//Tìm phần tử đầu tiên lớn hơn 5:
function Find(arr) { 
    const firstGreaterThanFive = arr.find(x=>x>5) 
    console.log(`phần tử đầu tiên lớn hơn 5: ${firstGreaterThanFive} `);
 }
 Find(arr)