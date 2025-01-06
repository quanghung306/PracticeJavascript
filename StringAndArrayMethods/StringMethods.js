var str = "Hello World!";
//Đếm số ký tự trong chuỗi (bao gồm khoảng trắng):
function CountLengthString(str) { 
    const length =str.length 
    console.log("🚀 ~ CountLengthString ~ length:", length)
}
CountLengthString(str)
//Chuyển đổi chuỗi thành viết hoa toàn bộ:
function UpCaseString(str){
    const Upcase = str.toUpperCase();
    console.log("🚀 ~ UpCaseString ~ Upcase:", Upcase)
}
UpCaseString(str);
//Tách chuỗi thành mảng các từ:
function SplitString(str) {
    const words = str.split('');
    console.log("🚀 ~ SplitString ~ words:", words)
  }
SplitString(str)
//Thay thế một phần của chuỗi bằng một chuỗi khác:
function Replace(str) { 
     const Replacestr= str.replace("World","Guy")
     console.log("🚀 ~ Replace ~ Replacestr:", Replacestr)
 }
 Replace(str)
//Thay thế tất cả các khoảng trắng trong chuỗi bằng dấu gạch ngang (-):
function replacedAll (str) {
    const replacedStr = str.replaceAll(" ","-");
    console.log("🚀 ~ replaced ~ replacedStr:", replacedStr)
  }
  replacedAll (str) 
//Đảo ngược một chuỗi:
function ReverseString(str) {
    const reversedStr = str.split('').reverse().join('');
    console.log("🚀 ~ ReverseString ~ reversedStr:", reversedStr)
  }
  ReverseString(str);
