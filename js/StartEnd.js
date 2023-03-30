//Game Over when:
setTimeout(()=>{
    if(matchCount===listImg.length){
        // alert(`Nice! You win`)
        if(confirm('Nice. You win! Do you want play again?')){
            location.reload();
        } else {
            alert('Thanks. See yaa!')
        }

    }
},300)
