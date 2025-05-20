function echo(...str) {
    str.forEach(s => {
        console.log(s);
        const para = document.createElement("p");
        para.innerText = s;
        document.body.appendChild(para);
    });
}

echo("Hello, World!","Is anyone there?","I am here!","Help, I've fallen and I can't get up!");

