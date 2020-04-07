let msT = 0;
let msH = 0;
let secT = 0;
let secO = 0;

// let msHunds = document.getElementById('msHundreds').textContent = '0'
// let secTens = document.getElementById('secondTens').textContent = '0'
// let secOnes = document.getElementById('secondOnes').textContent = '0'
// let yes = true;
function inc(){
    let sect =document.getElementById('secondTens')
    let seco =document.getElementById('secondOnes')
    let msh =document.getElementById('msHundreds')
    let mst =document.getElementById('msTens')


    

    let msTens = document.getElementById('msTens').textContent = msT;
    let msHunds = document.getElementById('msHundreds').textContent = msH;
    let secTens = document.getElementById('secondTens').textContent = secT;
    let secOnes = document.getElementById('secondOnes').textContent = secO;
        
    if(msT == 9){
        msT = 0;
    }else{
    msT++;
    }
    if (msH == 9 & msT == 9){
        // msH = 1
        msH = 0
        
        secO++
    }else if(msT == 9 ){
        msH++
    }
    if(secO > 9){
        secO = 0;
        secT++
        msh.style.color = 'red'
        mst.style.color = 'red'
        seco.style.color = 'red'
        sect.style.color = 'red'
        debugger

    }
        
    if(secT == 1 & secO > 0){
        msh.style.color = 'black'
        mst.style.color = 'black'
        seco.style.color = 'black'
        sect.style.color = 'black'



        
        secT = 0;
    }
    
    


}

setInterval(inc,10)
let t = 1
setInterval(() => {
    console.log(t++)
}, 1000);



