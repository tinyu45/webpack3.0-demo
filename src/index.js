// document.write("hello webpack")
let text=require("./js/runoob.js");
// 引入样式
require("!style-loader!css-loader!./styles/layout.css")
document.write(text)