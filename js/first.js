var a = 9;
b = 2;

// 1. using 3rd/temp variable

// c=a
// a=b
// b=c

// 2. without using 3rd
// a=a+b
// b=a-b
// a=a-b

// 3. single line

// a=(a+b)-(b=a)

// document.write("the value of a="+a+"<br>the value of b="+b)
// document.write(a==9)

// a = 20;
// b = 20;



// month=new Date().getMonth()

// switch (month) {
//   case 0:
//     document.write("B");
//     break;
//   case 4:
//     document.write("May");
//     break;
//   default:
//     document.write("Eql");
// }

// if(a>b){
//     document.write("A")
// }else if(b>a){
//     document.write("B")
// }else{
//     document.write("Equal")
// }





// 0-400

// for(
//     i=0; //i=21
//     i<=20; //21<=20 - f
//     i++
// ){
//     document.write(i+"<br>")
// }


// 5*1=5


// table=20

// for(i=1;i<=10;i++){
//     document.write(table+"*"+i+"="+table*i+"<br>")
// }


// a=10
// b=10
// c=3
// d=4


// switch(true)
// {

//     case a>b && a>c && a>d:
//         document.write("A")
//         break

//     default:
//         document.write("DS")


// }






// 15-5
// a=15
// do{
//     document.write(a+"<br>")
//     a--
// }while(a>=50)


for(i=0;i<5;i++){
    for(j=0;j<5;j++){
       if(i==0 || i==2){
           document.write("*")
       }else if(j==0 || j==4){
           document.write("*")   
       }else{
           document.write("&nbsp;&nbsp;")
       }
    }
    document.write("<br>")
}





