

const choose=document.getElementById('ch');
const elec=document.getElementById('elc');
const line=document.getElementById('lins');
const line2=document.getElementById('lins2');
const line3=document.getElementById('linecov');
const frame=document.getElementById('frames');
const frame123=document.getElementById('fr1');
const frame234=document.getElementById('fr2');
const frame567=document.getElementById('fr3');
const wheels=document.getElementById('wheels');
const wheel2=document.getElementById('wheel1');
const wheel3=document.getElementById('wheel2');
const wheel4=document.getElementById('wheel3');
const wheel5=document.getElementById('wheel4');
const wheel6=document.getElementById('wheel5');
const wheel7=document.getElementById('wheel6');
const wheel8=document.getElementById('wheel7');
const wheel9=document.getElementById('wheel8');
const wheel10=document.getElementById('wheel9');
const wheel11=document.getElementById('wheel10');
const wheel12=document.getElementById('wheel11');
const wheel13=document.getElementById('wheel12');
const wheel14=document.getElementById('wheel13');
const wheel15=document.getElementById('wheel14');
const frame890=document.getElementById('fr4');
const frame110=document.getElementById('fr5');







function showelec(){
  
   choose.style.display='none';
   elec.style.display='block';
   line.style.height='400px';
   line.style.transition='2.5s';
  /* line.style.border='none';
   line2.style.border='none';*/
   line2.style.height='400px';
   line2.style.transition='2.5s';
   line3.style.marginTop='3%'
   line3.style.transition='2.5s'
   
    
}

function close1(){
   elec.style.display='none';
   choose.style.display='block';
   line.style.height='1px';
   line.style.transition='2.5s';
   line.style.overflowY='hidden'
   line2.style.height='1px';
   line2.style.transition='2.5s';
   line3.style.marginTop='18%'
   line3.style.transition='2.5s'
   

}

function frames(){
   frame.style.display='block';
   elec.style.display='none'
}

function close2(){
   wheels.style.display='none';
   frame.style.display='none';
   elec.style.display='block'
}



function wheel(){
   wheels.style.display='block';
   elec.style.display='none'
}

function openwheel(x,y){
   x.style.opacity='1';
   y.style.opacity='1';
   wheels.style.display='none';
   elec.style.display='block';
}

function clean(){
   wheel2.style.display='none';
   wheel3.style.display='none';
   frame.style.display='none';
   frame123.style.opacity='0%';
   frame234.style.opacity='0%'
   frame567.style.opacity='0%'
   frame890.style.opacity='0%'
   frame110.style.opacity='0%'
   wheel4.style.opacity='0'
   wheel5.style.opacity='0'
   wheel6.style.opacity='0'
   wheel7.style.opacity='0'
   wheel8.style.opacity='0'
   wheel9.style.opacity='0'
   wheel10.style.opacity='0'
   wheel11.style.opacity='0'
   wheel12.style.opacity='0'
   wheel13.style.opacity='0'
   wheel14.style.opacity='0'
   wheel15.style.opacity='0'
}



function openframe1(x){
 
   x.style.opacity='1';
   frame.style.display='none';
   elec.style.display='block';
   
   
 
}
function prey(){
   frame234.style.opacity='0'
   frame123.style.opacity='0'
   frame567.style.opacity='0'
   frame890.style.opacity='0'
   frame110.style.opacity='0'
}

function prey2(){
   wheel2.style.opacity='0'
   wheel3.style.opacity='0'
   wheel4.style.opacity='0'
   wheel5.style.opacity='0'
   wheel6.style.opacity='0'
   wheel7.style.opacity='0'
   wheel8.style.opacity='0'
   wheel9.style.opacity='0'
   wheel10.style.opacity='0'
   wheel11.style.opacity='0'
   wheel12.style.opacity='0'
   wheel13.style.opacity='0'
   wheel14.style.opacity='0'
   wheel15.style.opacity='0'
}

function hoverer(x){

x.style.opacity='0.5';
}




function hovernot(){

   frame123.opacity='0'

   }

   

   


