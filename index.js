function addClass(){
    const mainDiv = document.getElementById('class')
    const div = document.createElement("div")
    const text = document.createTextNode("class")

    div.appendChild(text)
    mainDiv.appendChild(div)

    const button = document.createElement("button")
    button.textContent = 'Attribute'
    div.appendChild(button)

    
    
    const buttonf = document.createElement("button")
    buttonf.textContent = 'Functionalities'
    div.appendChild(buttonf)

    const input = document.createElement("input")
    input.setAttribute('type', 'text')
    input.setAttribute('placeholder', 'attribute')

    div.appendChild(input)


    //attribute
    button.onclick = function addAtt(){
    const label = document.createElement("label")
    const text = document.createTextNode("attribute")

    label.appendChild(text)
    div.appendChild(label)

    const input = document.createElement("input")
    input.setAttribute('type', 'text')
    input.setAttribute('placeholder', 'text')

    label.appendChild(input)
    }
    //functions
    buttonf.onclick = function addFunc(){
        const label = document.createElement("label")
        const text = document.createTextNode("funcitonalitie")

        label.appendChild(text)
        div.appendChild(label)

    const input = document.createElement("input")
    input.setAttribute('type', 'text')
    input.setAttribute('placeholder', 'functionalities')

    label.appendChild(input)
    }
   }
