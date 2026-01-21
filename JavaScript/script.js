var groceries=['milk','eggs','cheese'];

function listGroceries(){
    for(var i=0;  i <groceries. length; i++){
        console.log(groceries[i]);
    
    }
}

listGroceries();

document.getElementById('box').addEventListener('click', function(){
    alert ('I got clicked');
});