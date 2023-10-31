function addNewlinesBeforeNumbers(inputString) {
    // Use a regular expression to find all numbers in the input string
    // and add two newline characters before each number.
    var resultString = inputString.replace(/\d+/g, '<br><br>$&');
    return resultString;
  }

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
            //console.log(`${key}: ${value}`);
            document.getElementById(key).innerHTML = value;
            
            // "<a href=\'#\'>Test</a> "

          }
        
        //console.log(data["Info"]);
          
    })
    
    console.log(values)
    if (values[2].value != ""){
        document.getElementById("gptHolder").innerHTML = '<div class=\"gptInfo\"><p>Loading...</p></div>'
        //console.log(values[2].value);
        /*
        fetch('https://hook.us1.make.com/xuejgwvk45i2x4buy6lkpo4ltc1wqmdh?State=' + values[2].value + '&Community=' + values[3].value,  + '&Demographic=' + values[4].value, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        */
        fetch('https://hook.us1.make.com/xuejgwvk45i2x4buy6lkpo4ltc1wqmdh?State=' + values[2].value + "&Community=" + values[3].value + "&Demographic=" + values[4].value , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
        })
        .then(response => response.json())
        .then(data => {

            console.log(data["message"]);
            console.log(typeof data["message"]);
            var editedText = addNewlinesBeforeNumbers(data["message"]);
            document.getElementById("gptHolder").innerHTML = "<div class=\"gptInfo\"><p>" + editedText + "</p></div>";
            
        })
        }
        
});

//Change box for loading
//Make embeds larger