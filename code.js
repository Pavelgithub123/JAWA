//1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                 // 3
//Почему код даёт именно такие результаты?

//РАЗБЕРЕМ ПОШАГОВО

/*var a = 1, b = 1, c, d;
c = ++a; alert(c); //=2, "c" стало 2 и переменная "a" теперь 2, так как инкремент ПРЕФЕКСНЫЙ (ДО ЗНАЧЕНИЯ ++) увеличил переменную "a" и это значение за ней закрепилось.

alert(a); // = 2

d = b++; alert(d); // "d" стало 1, так как инкремент ++ в любом случае добавляет значение на 1, но ПОСТФИКСНЫЙ (++ после значения) присвоил значение "d" до увеличения значения "b", а ее изменил уже после.

alert(b); // = 2, инкремент ++ ПОСЛЕ увеличил переменную на 1.
c = (2+ ++a); alert(c); // = 5, здесь 2 прибавляем к переменной "a", которой опять прилепили 1, а она была 2, значит 2+(1+2) = 5, но при этом a++ дало изменение переменной 3.

alert(a); // = 3

d = (2+ b++); alert(d); // = 4, к "b" равное 1 и увеличенное на 1, мы прибавили 2, так получив 4, но так как ++ стоит после значения, то эта 1 не прибавляется к "b", а вот 2+ добавляется, меняя значение переменной на 3


alert(a); // 3                
alert(b); // 3

// ВЫВОД:
//A++ бежит от тебя , УВЕЛИЧИВАЕТСЯ САМА НА 1, ТЕБЕ ДАЕТ СТАРОЕ ЗНАЧЕНИЕ, ДО УВЕЛИЧЕНИЯ
//++A бежит к тебе, УВЕЛИЧИВАЕТСЯ САМА НА 1, ТЕБЕ ДАЕТ СВОЕ УВЕЛИЧЕННОЕ ЗНАЧЕНИЕ

*/



//2. Чему будет равен x в примере ниже?

/*var a = 2;
var x = 1 + (a *= 2);
alert(x); // = 5*/

//ПРОВЕРИЛ ВМЕСТО (a *= 2) ВАРИАНТ (a * 2) или любое другое значение, работает так же, ЗАЧЕМ *= ставить не понял


//Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. 

/*var a = 10;
var b = 100;
if (a >= 0 && b >= 0) {
consol.log(a -b);
}
else if(a < 0 && b < 0) {
consol.log (a * b);
}
else {
consol.log(a + b);
}*/
// Искал самостоятельное решение, но времени мало, почсмотрел решение, однако оно тоже не рабочее.
// Смог настроить через alert вывод при 2 условиях, но 3-е не смог вставить //


// Затем написать скрипт, который работает по следующему принципу:

//если a и b положительные, вывести их разность;

//если а и b отрицательные, вывести их произведение;

//если а и b разыйных знаков, вывести их сумму; ноль можно считать положительным числом.

//4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
/*
var a = parseFloat(prompt ("Введите число от 0 до 15"));
switch (a) {
case 0:
document.write (0);
case 1:
document.write ("1 ");
case 2:
document.write ("2 ");
case 3:
document.write ("3 ");
case 4:
document.write ("4 ");
case 5:
document.write ("5 ");
case 6:
document.write ("6 ");
case 7:
document.write ("7 ");
case 8:
document.write ("8 ");
case 9:
document.write ("9 ");
case 10:
document.write ("10 ");
case 11:
document.write ("11 ");
case 12:
document.write ("12 ");
case 13:
document.write ("13 ");
case 14:
document.write ("14 ");
case 15:
document.write ("15 ");
break;
default:
    document.write ("Ввод числа выполнен не верно")
    break;
} */
//5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.


/*functsiom sum (a, b) {
    return a + b;
    }
    
    function subtraction (a, b) {
    return a - b;
    }
    
    function division (a, b) {
    if (b! = 0) {
    return a / b;
    }
    else {
    alert ("На ноль делить нельзя!")
    }
    }*/
//6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).

/* function mathOperation(arg1, arg2, operation) {
    switch (operation) {
    cfse "+":
    return sum(arg1, arg2);
    case "-":
    return subtraction(arg1, arg2);
    case "/":
    return division(arg1, arg2);
    case "*":
    return multiplication(arg1, arg2);
    defaault:
    document.write("Операция" + operation + "не предусмотрена");
}
    }
consol.log(matOperation(3, 5, "+"));
consol.log(matOperation(3, 5, "-"));
consol.log(matOperation(3, 5, "/"));
consol.log(matOperation(3, 5, "*"));
consol.log(matOperation(3, 5, "lorem")); */

//7) *Сравнить null и 0. Попробуйте объяснить результат.

/*var varNull = null, VarZero = 0;
if (varNull > varZero)
{
document.write ("null > zero <br>");
}
if (varNull < varZero)
{
document.write ("null < zero <br>");
}
if (varNull == varZero)
{
document.write ("null = zero <br>");
}
if (varNull != varZero)
{
document.write ("null != zero <br>");
}*/

//8) *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.


function power(val, pow) {
    if (pow == 1) {
        return val;
    }
    if (pow == 0) {
        return 1;
    }

    if (pow > 0) {
        var temp = val * power(val, pow - 1);
        console.log(temp);
        return temp;
    }
    else if (pow < 0) {
        return (1 / val) * (power(val, pow + 1))
    }
    else {
        return 1
    }
}


var a = parseFloat(promptt("Введите число"));
var b = parsentInt(prompt("Введите положительную, отрицательную или нулевую степень"));
alert("Результат: " + power(a, b));