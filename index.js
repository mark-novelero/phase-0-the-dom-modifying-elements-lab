var ele = document.getElementById('main'); 
ele.remove();

var newHeader = document.createElement('h1');
document.body.appendChild(newHeader); 
newHeader.id = 'victory'; 
newHeader.innerHTML = "<h1>Your-Name is the champion</h1>";