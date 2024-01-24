function setColor(set) {
        let changeColor = set;
        return function() {
        if(changeColor) {
            let userColor = document.getElementById('color').value;
            document.getElementById('myPara').style.color = userColor;
        }
        }
        
}


window.onload = function() {
    let toggle = true;
    document.getElementById('btn').onclick = setColor(toggle);
}

// another wat is  document.getElementById('btn').onclick = function() {secColor(toggle)}

// a closure is function with its bindings

// when onclick, it will th execute the function