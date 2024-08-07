// alert("mowli")
// alert(100)
// alert(1.9)
// // alert(4>9)
// let name = prompt("enter your name")
// let name = prompt("enter your name")

// alert(name)
// let firstnumber = Number(prompt("enter your number"));
// let secondnumber = Number(prompt("enter your number"));
// var datas = prompt("enter your gmail");
// alert(datas);
// ------------------------------------------------------------------------------------------
// / data type: string,integer,float and boolean

// alert('mowlish');
// alert(10)
// alert(10.235639)
// alert(2>5)

// variable declaration -> var,let and const

// var name = prompt("enter your name")
// var name = prompt("enter your name")
// var name = prompt("enter your name")

// alert(name)

// let name  = prompt("enter your name")
// alert(name)

// const name  = prompt("enter your name")
// alert(name)

// operators -> Arithmetic operator, Assignment operator, Logical operator,Conditional operator and bitwise operator ->&,| and!

// 1. Arithmetic operator -> +,-,*./ and %

// alert(5+5)
// alert(5+"mowlish")

// let firstnumber = Number(prompt("enter your number"));
// let secondnumber = Number(prompt("enter your second number"))
// alert(firstnumber+secondnumber)
// alert(firstnumber-secondnumber)
// alert(firstnumber*secondnumber)
// alert(firstnumber/secondnumber)
// alert(firstnumber%secondnumber)
// var datas = prompt("enter your data")
// alert(datas)

// 2. Logical operator -> &&, || or !

// alert(6 >5 && 40>10)
// alert(5 >5 || 40>10)
// alert(!(6>5))

// 3. Conditional operator -> >,>=,<,<=,==,===

// alert(5<=5)
// alert(5>=5)
// alert(5 == "5")
// alert(5 === "5")
// let myage = Number(prompt("enter your age"));
// if (myage >= 18 && myage <= 35) {
//   alert("eligiable for job");
// }
// let salary = Number(prompt("enter your amount"));
// if (salary >= 100000 && salary <= 200000) {
//   alert("eligiable");
// } else {
//   alert("not eligiable");
// }
// let loan = Number(prompt("enter your amount"));
// switch (true) {
//   case loan >= 1000 && loan <= 5000:
//     alert("eligiable");
//     break;

//   default:
//     alert("not eligible");
//     break;
// }
// for loop
// let firstnumber = Number(prompt("enter first number"));
// let secondnumber = Number(prompt("enter first number"));
// for (let index = 0; firstnumber <= secondnumber; firstnumber++) {
//   console.log(firstnumber);
// }
// let myname = prompt("enter your name :");
// for (let index = 0; index < myname.length; index++) {
//   console.log(myname[index]);
// }
// for-of
// for (const iterator of myname) {
//   console.log(iterator);
// }
// let detail = { name: "mowli", age: 20 };
// for (const key in detail) {
//   console.log(detail[key]);
// }
// let myname =prompt("enter your name")
// let index= 0
// while (index <myname.length) {
// console.log(myname[index]);
//   index++

// }
// do{
//   console.log(myname[index]);
//   index++
//   while (index <myname.length)
// }
// let firstnumber = prompt("enter your firstnumber");
// let secondnumber = prompt("enter your secondnumber");
// do {
//   console.log(firstnumber);
//   firstnumber++;
// }
//  while (firstnumber<= secondnumber);
// ....................................................important function........................................................
// function name() {
//   let myname = prompt("enter your name");
//   let index = 0;
//   while (index < myname.length) {
//     console.log(myname[index]);
//     index++;
//   }
// }
// name();
// function name() {
//   let number = prompt("enter your number");..................
//   let index = 0;
//   while (index < number.length) {
//     console.log(number[index]);
//     index++;
//   }
// }
// name()
// method
// let student={"mowli","gokul"}
// console.log(student);
// let ourbatchname = ["mowli", "gokul", "sam"];
// ourbatchname.splice(0.1, allwin);
// console.log(ourbatchname);
// Create an empty array

// let emtArray = [];

// // task
// for (let i = 0; i < 5; i++) {
//   // Prompt
//   let value = prompt(`Enter value ${i + 1}:`);

//   // Store
//   emtArray.push(value);
// }

// // Display  array
// console.log(emtArray);

// // string methode
//  let myname = prompt("enter your name")
//    alert(myname .charAt(1))
// //    alert(myname .concat("mowli"))
// //    alert(myname .indexOf())
// //     console.log(myname.match("gokul"));
// //    alert(myname .trimend()
//   alert(myname;)

// setInterval(() => {
//   let mytime = new Date();
//   if (mytime.getHours() >= 12) {
//     let justtime = mytime.getHours() + ":" + mytime.getMinutes() + "PM";
//     console.log(justtime);
//   } else {
//     let justtime = mytime.getHours() + ":" + mytime.getMinutes() + "AM";
//     console.log(justtime);
//   }
// }, 1000);

// setTimeout(() => {
//   let content = document.getElementById("settimeout");
//   let spin = document.getElementById("spinner");
//   spin.style.display = "none";
//   content.style.display = "block";
// }, 4000);
// let settimeout = document.querySelector(".settimeout");
// settimeout.innerHTML = "mowli1234";
//
// setInterval(() => {
//   let todaydate = new Date();
//   let getdate = todaydate.getDate();
//   +":" + todaydate.getMonth();
//   console.log();
//   console.log(getdate);
// }, 2000);

// setInterval(() => {
// //   let todaydate = new Date();
//   console.log(todayday);
//   if (thismonth.get() = 8) {
//     let thismonth = todaydate.getDate() + ":" + mytime.getmonth() + "PM";
//     console.log(todaydate);
//   } else {
//     let thismonth = thismonth.getmonth() + ":" + mytime.getMinutes() + "AM";
// console.log(thismonth);
//   }
// }, 1000);

// let todaydate = new Date();

// if (thismonth.get() = 7) {

// } else {

// }/
// let todaydate = new Date();
// if (todaydate.getMonth() == 7) {
//   alert(todaydate.getDate() + ":"  + "Aug");
// }

// let name = document.getElementById("name")
// let number =document.getElementById("number")
// let formdata = document.getElementById("formdata")
// let submitbutton =document.getElementById("submitbutton")
// formdata.addEventListener("click",function (e) {
//   e.preventDefault()
//   let formdiv =document.createElement("div")
//   formdata.appendChild(formdiv)
//   let newname =document.createElement("input")
//   newname.value= name.value
//   newname.setAttribute("readonly","readonly")
//   formdiv.appendChild(formdata)
//   let newname =document.createElement("input")
//   newname.value= name.value
//   newname.setAttribute("readonly","readonly")
  
// }

// // )
// let myname = document.getElementById("myname");
// let myage = document.getElementById("myage");
// let formdata = document.getElementById("formdata")
// let datadisplay = document.getElementById("datadisplay")

// datadisplay.addEventListener("click",function (e) {
    
//     e.preventDefault();
//     let newdiv = document.createElement("div")
//     formdata.appendChild(newdiv)

//     let newmyname = document.createElement("input")
//     newmyname.value = myname.value
//     newmyname.setAttribute("readonly","readonly")
//     newdiv.appendChild(newmyname)
//     let newmyage = document.createElement("input")
//     newmyage.value = myage.value
//     newmyage.setAttribute("readonly","readonly")
//     newdiv.appendChild(newmyage)

//     let editbutton = document.createElement('button');
//     editbutton.innerHTML="Edit";
//     newdiv.appendChild(editbutton)

//     editbutton.addEventListener("click",function () {
//         newmyname.removeAttribute("readonly","readonly")
//         newmyage.removeAttribute("readonly","readonly")

//     })


//     let savebutton = document.createElement('button');
//     savebutton.innerHTML="Save";
//     newdiv.appendChild(savebutton)

//     savebutton.addEventListener("click",function () {
//         newmyname.setAttribute("readonly","readonly")
//         newmyage.setAttribute("readonly","readonly")

//     })

    
//     let deletbutton = document.createElement('button');
//     deletbutton.innerHTML="Delete";
//     newdiv.appendChild(deletbutton)

//     deletbutton.addEventListener("click",function () {
//         newdiv.style.display="none"

//     })
// }
let httpcreate = new XMLHttpRequest();
httpcreate.open('GET', "mowli.txt");
httpcreate.onload = function name(params) {
    alert(this.responseText)
    
}
httpcreate.send()