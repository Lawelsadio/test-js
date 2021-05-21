// 1. 1.Write a function that returns the maximum of two numbers.
function maxx(x,y) {
    if(x > y)
    { 
         return x ;
    }else{
        return y;
    }
    }
  
console.log("le max est",maxx(100,19))
/*
2.  Write a function called fozz_bezz that takes a number.
○   If the number is divisible by 3, it should return “Fozz”.
○   If it is divisible by 5, it should return “Bezz”.
○   If it is divisible by both 3 and 5, it should return “FozzBezz”.
○   Otherwise, it should return the same number.
*/

function fozz_bezz (x){
    let y = x%3; z = x%5;
    if(y==0 && z==0){
        return "FozzBezz" 
    }
    else if(y==0){
        return "Fozz" 
}
else if(z==0){
    return "Bezz"
}
else {
    return x;
}
}

console.log(fozz_bezz(60))


/*
3.  Write a function to check the speed of drivers. This function should have one parameter: speed.
○   If speed is less than 80, it should print “Ok”.
○	Otherwise, for every 4km/h above the speed limit (80), it should give the driver one demerit point and print the total number of demerit points. For example, if the speed is 90, it should print: “Points: 2”.
○	If the driver gets more than 12 points, the function should print: “License suspended”
*/
function driver_speed (speed ){
    let Autorise = 80;
    let demerit ;
    if(speed<Autorise){
        return "ok";
    }
else {
    demerit = parseInt(speed - Autorise)/parseInt(4);
    demerit = parseInt(demerit)
    if(demerit >= 12){
        return "permis suspendu";
    }
    else
    return demerit;
}
}
console.log(driver_speed(170))

/*
4.  Write a function called showNumbers that takes a parameter called limit. It should print all the numbers between 0 and limit with a label to identify the even and odd numbers. For example, if the limit is 3, it should print:
○   0 EVEN
○   1 ODD
○   2 EVEN
○   3 ODD
*/
function showNumbers (limit){
    for(i=0;i<=limit; i++){
        if(i%2==0){
            console.log(i,"EVEN")
        }else console.log(i,"ODD")
    }
}

showNumbers(9)


/*
5.  Write a function that returns the sum of multiples of 3 and 5 between
0 and limit (parameter). For example, if limit is 20, it should return the sum of 3, 5, 6, 9, 10, 12, 15, 18, 20
*/

function sum_of_multiples(limit) {
    let count= 0
    for(let i=!0;i<=limit; i++)
    { 
    if (i%3 == 0 || i%5 == 0){ 
    count = count +i;
    }
    }
    return count;
}
console.log("la somme des Multiples est:",sum_of_multiples(20))
/*
6.  Write a function called show_stars(rows). If rows are 5, it should print the following:
○   *
○   **
○   ***
○   ****
○   *****
*/

function show_stars(rows){
    let count="";
    for(let i=0;i<rows;i++){
        count = count+"*"
        console.log(count);
    }
}
show_stars(5);

/*
7.  Write a function that prints all the prime numbers between 0 and limit
where limit is a parameter.
*/

function prime_numbers (limit){
    for(i=2;i<limit;i++)
    {  
        iter = i;
        estPrem = true;
    for(j=2;j<iter;j++)
       {
         if(iter%j==0){
            estPrem=false;
         }  
       }
       if(estPrem==true){
         console.log(i+" est premier");
    }
    }
    }
    
    
    prime_numbers(21)
    