function confirmAnswer() {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);

    let sum = x + y;
    var meth = prompt(`What's ${x} + ${y}`)

    while (!(Number(meth) === Number(sum))) {
        alert("dumbass");
        return meth;
    }
    console.log("good");
}
confirmAnswer()
