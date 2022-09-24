// obsion 2
function makeYello(){
    document.body.style.backgroundColor='yellow'
}



// obtion 1
const makeBlueButton =document.getElementById('makeBlue');
        makeBlueButton.onclick =makeAuntilBlue;
        function makeAuntilBlue(){
            document.body.style.backgroundColor ='blue'
        }

        // obsion3


        const makeRedButton =document.getElementById('makered');
        makeRedButton.onclick = function makeRed(){
            document.body.style.backgroundColor ='red'
        }
       

        // obsion 4
        const pinkButton = document.getElementById('makepink');
        pinkButton.addEventListener('click',makePink)
    
        function makePink(){
            document.body.style.backgroundColor = 'pink'
        }



        // obsion 5 ( atai besi amora used korbo)
        const makeGreenButton =document.getElementById('makegreen');
    makeGreenButton.addEventListener('click', function makeGreen (){
        document.body.style.backgroundColor ='green';
    })

        // obsion 6 very importuned amora r ro besi used korbo

    document.getElementById('make-goldenrod').addEventListener('click',function(){
        document.body.style.backgroundColor = 'goldenrod';
       })