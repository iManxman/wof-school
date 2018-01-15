function a(subject, callback) {
console.log(`Начал доклад про ${subject}.`);
If (callback) {
callback();
}
}
a('асинхронность в JS', () => {
console.log('Закончил доклад.');
});
function a() {
console.log('1');
}
function b(cb) {
setTimeout(() => {
console.log(‘2’);
cb();
}, 0);
}
function c() {
console.log('3');
}
a();
b(c);