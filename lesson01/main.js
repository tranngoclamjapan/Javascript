// var fullName = 'Dang \'Ngoc Son';
// var age = 26;

// document.write(fullName);
// document.write(age);

// var a = 1;
// a +=2;
// document.write(a);

// var b = 1;
// b -=2;
// document.write(b);

// var isSuccsess = true;
// console.log(isSuccsess);

// if(false){
//     console.log('DIEU KIEN DUNG');
// } else {
//     console.log('DIEU KIEN SAI');
// }

// toan tu so sanh === vaf !==
// var a = '1';
// var b = 1;

// console.log(a===b)

//Bai 20: Toán tử logical và câu lệnh điều kiện If


/* 6 toán tử luôn trả về kiểu Boolean fasle
0
''
null
undefined
NaN
false
*/
// var result = 'A' && undefined && 'C';
// console.log(result);

// var result = 'A' || 'B' && 'C';
// console.log(result);


// Create an object:
// const person = {
//     name:"Fiat", 
//     age:25, 
//     color:"white"
// };

// // Display some data from the object:
// document.getElementById('demo').innerHTML = person.name + " hien nay " + person.age + " tuoi";


// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
  
  // Display data from the object:
//   document.getElementById("demo").innerHTML = person.fullName();
  // function displayDate() {
  //   document.getElementById("demo").innerHTML = Date();
  // }


// onchange	An HTML element has been changed
// onclick	The user clicks an HTML element
// onmouseover	The user moves the mouse over an HTML element
// onmouseout	The user moves the mouse away from an HTML element
// onkeydown	The user pushes a keyboard key
// onload	The browser has finished loading the page


// function showDialog () {
//   var myString = '';
//   for (var param of arguments){
//     myString += `${param} - `;
    
//   }
//   console.log(myString);

// }
// showDialog('log 1', 'log2', 'log3');


//Object
//var emailKey = 'email';

// var myInfo = {
//   name: 'Tran Lam',
//   age: 25,
//   address: 'Hcm',
//   getName: function() {
//     return this.name;
//   }
//   }

// myInfo['my-email'] = 'tranngoclamjapan';
// var myKey = 'address';
// delete myInfo.address;
// console.log(myInfo.getName());



//Object constructor

// function User(firstName, lastName, avatar) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.avatar = avatar;

//   this.getName = function() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
// User.prototype.className = 'CN10B';
// User.prototype.getClassName = function() {
//   return this.className;
// }

// var author = new User('Lam', 'Tran', '53');
// var user = new User('P', 'Tran', '20');


// author.title = 'Chia se tc';
// user.comment = 'Cam on chia se';

// console.log(author);
// console.log(user.getClassName());

//bai 34: Đối tượng Date

// var date = new Date();

// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDate();


// console.log(`${day}/${month}/${year}`);

//bai 35: Lệnh rẽ nhánh If, else

// var date = 7;

// if (date === 2) {
//   console.log('Hom nay la thu 2');
// } else if (date === 3) {
//   console.log('Hom nay la thu 3');
// } else if (date === 4) {
//   console.log('Hom nay la thu 4');
// } else {
//   console.log('Khong biet');
// }


//bai 37: Lệnh rẽ nhánh Switch

// var date = 11;
// switch(date) {
//   case 2: 
//     console.log('Thu 2');
//     break;

//   case 3: 
//     console.log('Thu 3');
//     break;

//   case 4: 
//     console.log('Thu 4');
//     break;

//   default: 
//     console.log('Khong Biet');

// }

//bai 38: Toán tử 3 ngôi - Ternary operator

// var course = {
//   name: 'JV',
//   coin: 250
// }

// if (course.coin > 0) {
//   console.log(`${course.coin} Coin`);

// } else {
//   console.log('Mien phi');
// }

// var result = course.coin > 0 ? `${course.coin} Coin` : 'Mien phi';
// console.log(result);
 

// const cars = {fname:"John", lname:"Doe", age:25};

// var txt ='';
// for (let i in cars) {
//   txt += cars[i] + "<br>";
// }

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = isArray(fruits);

// function isArray(myArray) {
//   return myArray.constructor;
// }

// var myArray = [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ];

// for (var i =0; i< myArray.length; i++) {
//   for (var y = 0; y < myArray[i].length; y++) {
//     console.log(myArray[i][y]);
//   }
// }

// for ( let i =100; i>0; i--) {
//   console.log(i);
// }


 
// var courses = [
//   {
//     id: 1,
//     name: 'JV',
//     coin: 250
//   },
//   {
//     id: 2,
//     name: 'PHP',
//     coin: 350
//   },
//   {
//     id: 3,
//     name: 'Android',
//     coin: 0
//   }
// ];
// function courseHandler(course, index, originArray) {
//   // console.log(course);
//   return {
//     id: course.id,
//     name: `Khoa hoc: ${course.name}`,
//     coin: course.coin,
//     coinText: `Gia: ${course.coin}`,
//     index: index,
//     originArray: originArray
//   };
// } ;

// var newCousre = course.map(courseHandler);
// console.log(newCousre);

// var course = course.find(function(course, index){
  
//   return course.name === 'Android';
// });

// var totaCoin = 0;
// for (var course of courses) {
//   totaCoin += course.coin;
// }
// console.log(totaCoin);

// function coinHandle (accumulator, currentValue, currentIndex, orginiArray) {
//    return accumulator + currentValue.coin;
// };

// var i = 0;
// var totaCoin = courses.reduce(function(total, courses){
//   i++;
//   console.log(i, total, courses);
//   return total + courses.coin;
// }, 0);
// console.log(totaCoin);

// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// const numbers2 = numbers.map(myFunction);
// const over18 = numbers.filter(lonhon18);
// const sum = numbers.reduce(tinhtong);
// let allOver18 = numbers.every(kiemtralonhon);



// document.getElementById("demo").innerHTML = allOver18;

// function myFunction(value ) {
//   return value * 2;
// };

// function lonhon18(giatri) {
//   return giatri > 5;
// } 

// function tinhtong(tong, giatri) {
//   return tong;
// } 

// function kiemtralonhon(giatri, chiso, mang ) {
//   return giatri > 18;
// };



// var depthArray = [1,2, [3,4], 5, 6, [7, 8, 9]];

// var newArray = depthArray.reduce(function(total, value){
//     return total.concat(value);
    
//   }, []);
//   console.log(newArray);
  
// var topics = [
//   {
//     topic: 'Front-end',
//     course: [
//       {
//         id: 1,
//         title: 'HTML, CSS'
//       },
//       {
//         id: 2,
//         title: 'Javascript'
//       }
//     ]
//   },
//   {
//     topic: 'Back-end',
//     course: [
//       {
//         id: 1,
//         title: 'PHP'
//       },
//       {
//         id: 2,
//         title: 'NodeJS'
//       }
//     ]
//   },
// ];

// var newCourse = topics.reduce(function(total, value){
//   return total.concat(value.course);
// },[]);

// console.log(newCourse);

// var html = newCourse.map(function(course){
//   return `
//     <div>
//       <h2> ${course.title}</h2>
//       <p>ID: ${course.id}</p>
//     </div>
//   `;
// });

// console.log(html.join(''));

// Bai 55: Hiểu về Javascript Callback Functions
// function myFunction(param) {
//   param('Hoc lap trinh');
// };

// function myCallBack(value) {
//   console.log('Value: ', value);
// }

// myFunction(myCallBack);

// function myFunction(param) {
//   param('Hoc Lap Trinh');
// };

// function myCallBack(value) {
//   console.log('Value: ', value);
// };
// myFunction(myCallBack);


//Bai 56: Callback - Phần 2


// Array.prototype.map2 = function(callback){
//   var output = [], arrayLength = this.length;
//   for (var i =0; i< arrayLength; i++) {
//     var result = callback(this[i],i);
//     output.push(result);
//   }
//   return output;
// }
     
  
// var course = [
//   'JV',
//   'PHP',
//   'Ruby'
// ];
// var htmls = course.map2(function(course){
//   return `<h2>${course}</h2>`;
// });

// console.log(htmls.join(''));


// var htmls = course.map(function(course){
//   return `<h2>${course}</h2>`;
// });

// console.log(htmls.join(''));


//Ham ForEach

// Array.prototype.forEach2 = function(callback){
//   var output = [], arrayLength = this.length;
//   for (var i =0; i< arrayLength; i++) {
//     var result = callback(this[i],i);
//     output.push(result);
//   }
//   return output;
// }
     
  
// var course = [
//   'JV',
//   'PHP',
//   'Ruby'
// ];
// var htmls = course.map2(function(course){
//   return `<h2>${course}</h2>`;
// });

// console.log(htmls.join(''));


//Filter



// Bai 58: My forEach() method
// Array.prototype.forEach2 =function(callback){
//   for (var index in this) {
//     if(this.hasOwnProperty(index)){
//       console.log(this.hasOwnProperty(index));
//       callback(this[index], index, this)
//     }
    
//   }
// };

// console.log(Array.prototype);
// var courses = [
//   'JV',
//   'PHP',
//   'Ruby'
// ];

// courses.forEach2(function(course,index,array){
//   console.log(course,index,array);
// });


//Bai 59: My filter() method
Array.prototype.filter2 = function(callback){
  var output = [];
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if(result) {
        output.push(this[index])
      }
    }
  }
  return output;
};
var courses = [
  {
    id: 1,
    name: 'JV',
    coin: 250
  },
  {
    id: 2,
    name: 'PHP',
    coin: 350
  },
  {
    id: 3,
    name: 'Android',
    coin: 50
  }
];

var filterCourse = courses.filter2(function(courses, index, array){
  return courses.coin > 250;
}); 
console.log(filterCourse);