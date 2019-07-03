/*
 * 1、创建一个空对象，变量名为user；
 * 添加一个name属性，并设置值为John；
 * 添加一个surname属性，并设置其值为Mike；
 * 将name属性的值改为Peter;
 * 删除user的name属性
 */

// 创建一个空对象
var user = {};
user['name'] = 'John';
user['surname'] = 'Mike';
// console.log(user) => {name: "John", surname: "Mike"}
user.name = 'Peter';
// console.log(user) => {name: "Peter", surname: "Mike"}
// delete name
delete user.name;
// console.log(user) => {surname: "Mike"}


/*
* 2、计算下面fruit对象共有多少个水果，应该输出50
* */

var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};

var total = 0;
for (let key in fruit) {
    total += fruit[key];
}
console.log('总共有' + total + '个水果');

// 结果：总共有50个水果