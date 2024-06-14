const resul = {}


fetch('data.json')
    .then(resul => resul.json())
    .then(data => {
        console.log( data)
        // console.log(JSON.parse(data))
    })