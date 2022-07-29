
function addnewstore() {
    const num = document.getElementById('num').value;

    let Numbers = localStorage.getItem("Numbers")
    if(Numbers === null){
        Numbersnum = []
    }else{
        Numbersnum = JSON.parse(Numbers)
    }

    Numbersnum.push(num)
    localStorage.setItem ('Numbers' , JSON.stringify(Numbersnum))
    
    return;

}





