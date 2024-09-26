// Dữ liệu người dùng giả lập
let users = [
    {
      name: "John Doe",
      email: "john@example.com",
      password: "123456"
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      password: "password"
    }
  ];
  
  // Hàm lấy tất cả người dùng
  export function getUsers() {
    return users;
  }
  
  // Hàm thêm người dùng mới
  export function addUser(newUser) {
    users.push(newUser);
  }
  