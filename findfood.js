var dataValues = document.getElementById("data");

dataValues.addEventListener("submit", (e) => {
    e.preventDefault();
    var values = dataValues.elements;
    console.log(values[0].value);

    fetch('https://hook.us1.make.com/4yyx97ovmi6tf39iesal83m19lho5k04?zip=' + values[0].value, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => {
        // for (var i = 0; i < data.; i++){
        //     console.log(data[i]);
        //     console.log("hi")
        // }
        document.getElementById("foodbanks").style.display = "inline";

        for (const [key, value] of Object.entries(data)) {
            console.log(`${key}: ${value}`);
            document.getElementById(key).innerHTML = value;
            
            // "<a href=\'#\'>Test</a> "

          }
        
        //console.log(data["Info"]);
    })
        
});