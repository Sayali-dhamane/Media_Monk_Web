//popup function 
screen=0;

setTimeout(()=>{
    cont= document.getElementById('content');
    intro=document.getElementById('intro');

   cont.style='display:block;'
   intro.style='display:none'; 
},4000)

setTimeout(()=>{
    text=document.getElementById('tc');
    
    text.style='transition:1s;left:42%'
},2000)




var pages;
document.addEventListener("DOMContentLoaded", function() {
    pages=document.getElementsByClassName('page')

    console.log()
    pages[screen].style='background-color:white;'
    
  });


var margin=0;

function left(){
    // console.log(margin)
    img = document.getElementById('img');
    if(margin==-600){
        margin=0;
        img.style='margin-left:'+margin+'px';
        previoustext()
    }else if(margin>=0){}else{
    margin=margin+700;
    img.style='margin-left:'+margin+'px';

   previoustext()
}

  
}

function right(){
    img = document.getElementById('img');
    if(margin!=-6200 && margin!=-4900){
    margin=margin-700;
    img.style='margin-left:'+margin+'px';
        nexttext()
    }else if(margin==-4900){
        margin=margin-600
        img.style='margin-left:'+margin+'px';
        nexttext()
    }else{
        document.getElementById('last').style='display:none';
        document.getElementById('text').style='opacity:0';
        
        margin=0;
        img.style='margin-left:'+margin+'px';

        setTimeout(()=>{
            screen=0;
        document.getElementById('text').innerHTML = texts[screen]
        page()
        },500)
        setTimeout(() => {
            document.getElementById('text').style='transition:1s;opacity:1';
            document.getElementById('align').style=alinment[screen]; 
        }, 800);
    }
}


function previoustext(){
    page()
    document.getElementById('text').style='opacity:0';
    
    setTimeout(()=>{
        screen=screen-1;
    document.getElementById('text').innerHTML = texts[screen]
    page()
    },500)



    setTimeout(() => {
        document.getElementById('text').style='transition:1s;opacity:1';
        document.getElementById('align').style=alinment[screen]; 
    }, 800);
}

function nexttext(){
    
    document.getElementById('text').style='opacity:0';
    setTimeout(()=>{
        screen=screen+1;
        document.getElementById('text').innerHTML = texts[screen]
        page();
    },500)

    

    setTimeout(() => {

        document.getElementById('text').style='transition:1s;opacity:1;';
        document.getElementById('align').style=alinment[screen];

    }, 800);

}

function page(){
    
    for(let i=0;i<pages.length;i++){
        if(i==screen){
            console.log(pages[i].style[0])
            pages[i].style='background-color:white;color:black';
        }else{
            pages[i].style='background-color:rgba(0,0,0,0);color:white';
        }
    }

    checktext()
}



function checktext(){
        introText =document.getElementById('introtext')
        
        if(screen==0){
            introText.style='display:block';
            document.getElementById('step').style='display:none';
        }else if(screen==9){
            document.getElementById('step').style='display:none';
            document.getElementById('last').style='display:block';
        }
        else{
            introText.style='display:none'
            document.getElementById('step').style='display:block;margin-left:30px;margin-top:0px';
            document.getElementById('step').innerText=`Step ${screen} out of 8 on the path of digital Enlightment.`;
        }
}

alinment=['top:0%;left:3%;','top:30%;left:3%;','top:30%;left:3%;','top:30%;left:63%;text-align:right;','top:30%;left:63%;text-align:right','top:30%;left:63%;text-align:right','top:30%;left:3%;','top:30%;left:3%;','top:30%;left:3%;','top:0%;left:70%;']

texts=['WE ARE BREAKING OUR VOW OF SILENCE','TALENT IS GIVEN THROUGH SKILLS IS EARNED','BE FLEXIBLE TO CHANGE AND STUDY IN CONVICTION','USE MANY SKILLS YET WORK AS ONE','TO MASTER ANYTHING FIND INTEREST IN EVERYTHING','INDIVIDUALS FLOURISH IN CULTURE AND WISDOM ARE SHARED','TRAIN FOR PERFECTION BUT AIM FOR MORE','TAKE PRIDE IN OUR WORK BUT DO NOT SEEK PRAISE','TEMPORARY SACRIFICE BRING LASTING RESULTS','BECOME A MONK']

