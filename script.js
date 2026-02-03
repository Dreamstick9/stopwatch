let time  = document.getElementById('tem')
let s = document.getElementById('start');
let sp = document.getElementById('stop');
function bnd(sp){
    let ok = false
    sp.addEventListener('click', () => {
        ok = true
    })
    if(ok){
        return true
    }else{
        return false
    }
}

s.addEventListener('click', function(){
    for(let i = 0; i<= 100000; i++){
        time.textContent= i;
    }
})
