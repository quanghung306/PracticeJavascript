var str = "Hello World!";
//Đếm số ký tự trong chuỗi (bao gồm khoảng trắng):
function CountLengthString(str) {
  return str.length;
}
console.log('Đếm số ký tự trong chuỗi: ',CountLengthString(str));

//Chuyển đổi chuỗi thành viết hoa toàn bộ:
function UpCaseString(str) {
  return str.toUpperCase();
}
console.log('Chuyển đổi chuỗi thành viết hoa toàn bộ:',UpCaseString(str));
//Tách chuỗi thành mảng các từ:
function SplitString(str) {
  return str.split("");
}
console.log('Chuyển đổi chuỗi thành viết hoa toàn bộ:',SplitString(str));
//Thay thế một phần của chuỗi bằng một chuỗi khác:
function Replace(str) {
  return str.replace("World", "Guy");
}
console.log('Chuyển đổi chuỗi thành viết hoa toàn bộ:',Replace(str));
//Thay thế tất cả các khoảng trắng trong chuỗi bằng dấu gạch ngang (-):
function replacedAll(str) {
  return str.replaceAll(" ", "-");
}
console.log('Thay thế tất cả các khoảng trắng trong chuỗi bằng dấu gạch ngang (-):',replacedAll(str));
//Đảo ngược một chuỗi:
function ReverseString(str) {
  return str.split("").reverse().join("");
}
console.log('Đảo ngược một chuỗi: ', ReverseString(str));
// Kiểm tra chuỗi có bắt đầu hoặc kết thúc bằng một chuỗi con không
// Mô tả: Cho chuỗi "JavaScript is amazing!", kiểm tra xem chuỗi có bắt đầu bằng "Java" và kết thúc bằng "!" không.
function CheckString(str) {
  return str.startsWith("Java") && str.endsWith("!");
}
const str1 = "JavaScript is amazing!";
console.log('chuỗi có bắt đầu hoặc kết thúc bằng một chuỗi con không: ',CheckString(str1));
//  Kết hợp các chuỗi từ mảng
//  Mô tả: Cho mảng chuỗi ["I", "am", "learning", "JavaScript"], kết hợp các phần tử trong mảng thành một chuỗi "I am learning JavaScript".
function CombineStrings(str) {
  return str.join(" ");
}
const str2 = ["I", "am", "learning", "JavaScript"];
console.log('Kết hợp các phần tử trong mảng thành một chuỗi là ',CombineStrings(str2));

// Tìm tất cả các từ có độ dài từ 4 trở lên trong chuỗi
// Mô tả: Cho chuỗi "JavaScript is a powerful language", tìm tất cả các từ có độ dài từ 4 trở lên.
function FindLongWords(str) {
  return str.split(" ").filter((words) => words.length >= 4);
}
const str3 = "JavaScript is a powerful language";
console.log('Tất cả các từ có độ dài từ 4 trở lên trong chuỗi: ',FindLongWords(str3));

// Kiểm tra chuỗi có chứa ký tự đặc biệt không
// Mô tả: Cho chuỗi "Hello$World!", kiểm tra xem chuỗi này có chứa ký tự đặc biệt như $, !, @ không.
function containsSpecialChar(str) {
  return str.match(/[$!@]/g);
  
}
const str4 = "Hello$World!";
containsSpecialChar(str4);
// Chuyển chuỗi thành dạng Title Case
// Mô tả: Cho chuỗi "the quick brown fox", chuyển chuỗi này thành dạng "Title Case" là "The Quick Brown Fox".
function TittleCaseString(str) {
  return str.split(" ").map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");
  
}
const str5 = "the quick brown fox";
console.log('chuyển chuỗi này thành dạng "Title Case" là ',TittleCaseString(str5));
;

 