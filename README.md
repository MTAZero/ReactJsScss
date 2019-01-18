# Taivivu Frontend

### Rules
- Phần components nằm trong thư mục `app`, mỗi page sẽ có 1 folder riêng.
- Mỗi component phải được đặt tên có ý nghĩa và unique, tên className của thẻ ngoài cùng trùng tên với tên component.
- function `render()` luôn nằm dưới cùng của class, các `hooks` của React Component luôn nằm trên cùng.
- Tuyệt đối không dùng `var`, luôn dùng `const` khi có thể.
- Các `private` function đều phải có kí tự `_` trước tên function đó.
- Sử dụng arrow function `() => {}` khi lắng nghe sự kiện thay cho việc dùng `.bind(this)`.
- Không dùng dấu chấm phẩy (vì không cần thiết - don't debate).
- Luôn có dòng cuối cũng mỗi file js là rỗng.
- Để style cho phần UI thì sẽ sử dụng `sass` bằng cách tạo các thư mục tương ứng với các thư mục trong phần `app`.
- Các file `.scss` đều phải đặt tên trùng với tên component cần style.
- Tham khảo jsx style guide khi bắt đầu sẽ tốt hơn: https://github.com/UETCodeCamp/jsx-style-guide


### Installation

- Install packages:
```
//For yarn
yarn install

//For npm
npm i
```

- Run app:
```
//For yarn
yarn start

//For npm
npm start
```
