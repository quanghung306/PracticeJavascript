// Tạo một Promise mô phỏng quá trình tải dữ liệu mất 2 giây. Nếu thành công, trả về chuỗi "Dữ liệu đã tải xong!". Nếu thất bại, trả về lỗi "Không thể tải dữ liệu.".
const loadData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Dữ liệu đã tải xong!");
    } else {
      reject("Không thể tải dữ liệu.");
    }
  }, 2000);
});

loadData
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
// Viết các Promise liên tiếp:
// Tạo một Promise mô phỏng quá trình kiểm tra tài khoản (1 giây).
// Nếu tài khoản hợp lệ, Promise thứ hai trả về dữ liệu người dùng (1 giây).
// Nếu thành công, hiển thị thông tin người dùng. Nếu thất bại ở bất kỳ bước nào, hiển thị lỗi.
function checkAccount() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isValid = true;
      if (isValid) {
        resolve("tài khoản hợp lệ");
      } else {
        reject("tài khoản hợp lệ");
      }
    }, 1000);
  });
}
function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Thông tin người dùng: John Doe");
    }, 1000);
  });
}
checkAccount()
  .then((message) => {
    console.log(message);
    return getUserData();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
//   Cho ba Promise:
//   Promise A mất 1 giây để trả về "Kết quả A".
//   Promise B mất 2 giây để trả về "Kết quả B".
//   Promise C mất 1.5 giây để trả về "Kết quả C".
//   Sử dụng Promise.all để chạy đồng thời cả ba Promise và hiển thị kết quả khi tất cả hoàn thành.
const promiseA = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Kết quả A");
  }, 1000);
});
const promiseB = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Kết quả B");
  }, 2000);
});
const promiseC = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Kết quả C");
  }, 1500);
});
Promise.all([promiseA, promiseB, promiseC])
  .then((results) => {
    console.log("kết quả", results);
  })
  .catch((error) => {
    console.log("lỗi", error);
  });
//   Tạo một Promise mô phỏng việc lấy thông tin sản phẩm từ API:
//   Nếu id sản phẩm là số dương, trả về thông tin sản phẩm.
//   Nếu id sản phẩm là số âm, trả về lỗi "ID không hợp lệ.". Hãy gọi Promise này và xử lý lỗi bằng .catch.
function getInforApi(id) {
  return new Promise((resolve, reject) => {
    if (id > 0) {
      resolve(`thông tin id là ${id}`);
    } else {
      reject("id không hợp lệ");
    }
  });
}
getInforApi(1)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
// Viết ba Promise:
// Promise A mất 3 giây để hoàn thành.
// Promise B mất 2 giây để hoàn thành.
// Promise C mất 1 giây để hoàn thành.
// Sử dụng Promise.all để đợi tất cả Promise hoàn thành và hiển thị kết quả.
// Sử dụng Promise.race để hiển thị kết quả của Promise hoàn thành đầu tiên.
const promiseE = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Kết quả E ");
  }, 1000);
});
const promiseF = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Kết quả F");
  }, 2000);
});
const promiseG = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Kết quả G");
  }, 1500);
});
// `Promise.all`
Promise.all([promiseE, promiseF, promiseG])
  .then((results) => console.log("Kết quả tất cả:", results))
  .catch((error) => console.error(error));

// `Promise.race`
Promise.race([promiseE, promiseF, promiseG])
  .then((result) => console.log("Promise hoàn thành đầu tiên:", result))
  .catch((error) => console.error(error));
//   Tạo một hàm callAPI(url):
//   Giả lập việc gọi API mất 2 giây.
//   Trả về kết quả dạng JSON nếu thành công.
//   Trả về lỗi "API không phản hồi." nếu gặp lỗi. Sử dụng Promise hoặc async/await để xử lý kết quả.
function callAPI(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random();
      console.log("🚀 ~ setTimeout ~ success:", success);
      if (success > 0.5) {
        resolve({ data: "Dữ liệu từ API", url });
      } else {
        reject("API không phản hồi.");
      }
    }, 2000);
  });
}
async function fetchAPI() {
  try {
    const response = await callAPI("https://example.com"); //url api
    console.log("kết quả:", response);
  } catch (error) {
    console.log(error);
  }
}
fetchAPI();
