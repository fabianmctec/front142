//  conectar front backend


//conectando api local
// const url = 'http://localhost:5001/api/'

// conectando api render de la nube:
//const url = 'https://backend143.onrender.com/api/'
const url = 'https://backend143sep17.onrender.com/api/'


function sendRequest(endPoint, method, data){
    console.log("end point "+endPoint+" metodo "+method)
    let request = new XMLHttpRequest();
    request.open(method, url+endPoint);
    
    request.responseType = 'json';
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(data? JSON.stringify(data): data);
//  request.send(data? JSON.stringify(data): "");

     console.log(" sale de send request data:", data    )
    return request
}