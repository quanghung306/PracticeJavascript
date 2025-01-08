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
  // Kiểm tra chuỗi có bắt đầu hoặc kết thúc bằng một chuỗi con không
  // Mô tả: Cho chuỗi "JavaScript is amazing!", kiểm tra xem chuỗi có bắt đầu bằng "Java" và kết thúc bằng "!" không.
function CheckString() { 
  const str= "JavaScript is amazing!"
  const CheckString=str.startsWith('Java') && str.endsWith('!') ;
  console.log(`Kiểm tra chuỗi có bắt đầu hoặc kết thúc bằng một chuỗi con không: ${CheckString}`)
 }
 CheckString();
//  Kết hợp các chuỗi từ mảng
//  Mô tả: Cho mảng chuỗi ["I", "am", "learning", "JavaScript"], kết hợp các phần tử trong mảng thành một chuỗi "I am learning JavaScript".
function CombineStrings(){
  const str =["I", "am", "learning", "JavaScript"];
  const CombineStrings= str.join(' ')
  console.log("🚀 ~ CombineStrings ~ CombineStrings:", CombineStrings)
}
CombineStrings();
// Chuyển chuỗi thành mảng rồi lấy các phần tử đầu tiên và cuối cùng
// Mô tả: Cho chuỗi "apple,banana,orange", chuyển chuỗi này thành mảng và lấy phần tử đầu tiên và cuối cùng.
function getFirstAndLastElement() {
  const str = "apple,banana,orange";
  const FirstElement= str.split(",").shift()
  const LastElement= str.split(",").pop()
  console.log(`Phần tử đầu tiên là ${FirstElement} và phần tử cuối cùng là ${LastElement}`)

  }
getFirstAndLastElement();
// Tìm tất cả các từ có độ dài từ 4 trở lên trong chuỗi
// Mô tả: Cho chuỗi "JavaScript is a powerful language", tìm tất cả các từ có độ dài từ 4 trở lên.
function FindLongWords() {
  const str ="JavaScript is a powerful language";
  const LongWords =str.split(' ').filter(words=> words.length >= 4)
  console.log(` các từ có độ dài từ 4 trở lên ${LongWords}`)
  }
  FindLongWords();
  // Kiểm tra chuỗi có chứa ký tự đặc biệt không
  // Mô tả: Cho chuỗi "Hello$World!", kiểm tra xem chuỗi này có chứa ký tự đặc biệt như $, !, @ không.
  function containsSpecialChar() {
    const str = "Hello$World!";
     const Special= str.match(/[$!@]/g);
    console.log("Ký tự đặc biệt:", Special)
  }
  containsSpecialChar()
// Chuyển chuỗi thành dạng Title Case
// Mô tả: Cho chuỗi "the quick brown fox", chuyển chuỗi này thành dạng "Title Case" là "The Quick Brown Fox".
function TittleCaseString() {
  const str="the quick brown fox";
  const TittleCase= str.split(' ').map(word=>word[0].toUpperCase()+ word.slice(1).toLowerCase()).join(' ')
  console.log(`Chuyển chuỗi thành dạng Title Case:  ${TittleCase}`)
  }
  TittleCaseString()