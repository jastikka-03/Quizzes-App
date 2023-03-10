const forms=document.querySelectorAll('.form-quizz');
let tableResult=[];
const reponses=['c','c','a','b','a'];
const emojis=['๐','โญ','๐','๐ญ','๐'];
const titleResultat=document.querySelector('.resultats h2');
const noteResultat=document.querySelector('.note');
const helpResultat=document.querySelector('.help');
const allQuestions=document.querySelectorAll('.question-block');
let verifTable=[];
forms.forEach((form)=>{
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        for(i=1;i<6;i++){
            tableResult.push(document.querySelector(`input[name="q${i}"]:checked`).value)

        }

        veriffunc(tableResult);
        tableResult=[];

    })
})
function veriffunc(tabResults){
    for(let a=0;a<5;a++){
        if(tabResults[a]===reponses[a]){
            verifTable.push(true);

        }else{
            verifTable.push(false);
        }
    }
    showResultats(verifTable);
    colorFunction(verifTable);
    verifTable=[];
}
function showResultats(tabcheck){
    const nbFaltes=tabcheck.filter(e1 => e1 !== true).length;
    switch(nbFaltes){
        case 0:
            titleResultat.innerText="๐Well done, it's flawless !๐";
            helpResultat.innerText='';
            noteResultat.innerText='5/5';
        break;
        case 1:
            titleResultat.innerText="โญ you are almost there!โญ";
            helpResultat.innerText='Retry another answer in the red box, then re-validate !';
            noteResultat.innerText='4/5';
        break;
        case 2:
            titleResultat.innerText="โญ One more effort...๐";
            helpResultat.innerText='Retry another answer in the red box, then re-validate !';
            noteResultat.innerText='3/5';
        break;
        case 3:
            titleResultat.innerText="๐ There are still some errors! ๐ญ";
            helpResultat.innerText='Retry another answer in the red box, then re-validate !';
            noteResultat.innerText='2/5';
        break;
        case 4:
            titleResultat.innerText="๐ญ Then do better !๐ญ";
            helpResultat.innerText='Retry another answer in the red box, then re-validate !';
            noteResultat.innerText='1/5';
        break;
        case 5:
            titleResultat.innerText="๐ Then do better ๐";
            helpResultat.innerText='Retry another answer in the red box, then re-validate !';
            noteResultat.innerText='0/5';
        break;
        default:
            'Wops, unexpected case'      
    }
}
function colorFunction(tabValBool){
    for(let j=0;j < tabValBool.length; j++){
        if(tabValBool[j]===true){
            allQuestions[j].style.background='lightgreen';

        }else{
            allQuestions[j].style.background='#ffb8b8';
            allQuestions[j].classList.add('.echec');
            setTimeout(()=>{
                allQuestions[j].classList.remove('.echec');
            }, 500)
        }
    }
}
allQuestions.forEach(item=>{
    item.addEventListener('click', ()=>{
        item.style.background="white"
    })
})