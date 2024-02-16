function confirmAnswer() {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);

    let sum = x + y;
    var meth = prompt(`What's ${x} + ${y}`)

    if (Number(meth) === Number(sum)) {
        alert("ok");
    } else {
        alert("dumbass");
    }
}
confirmAnswer()
