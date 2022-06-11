var msg = "Hello";
function fun1(a, b)
{
var c = a + b;
return (c);
};
function fun2(a, b)
{
var c = a - b;
return (c);
}
exports.message = msg;
exports.add = fun1;
exports.subtract = fun2;