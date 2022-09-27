let i=document.querySelectorAll('#a')

for (let index = 0; index < i.length; index++) {
    i[index].addEventListener("mouseover",()=>{
        i[index].style.width='30px';
    })
    i[index].addEventListener("mouseout",()=>{
        i[index].style.width='20px';
    })
}
// section1is completed
let leftarrow=document.querySelector(".left")
let rightarrow=document.querySelector(".right")
let images=["1.jpg",'2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','222.jpg']
let imgindex=4;
let img=document.getElementById("img");
leftarrow.onclick=function(){
    imgindex-=1
    if(imgindex==0){
        leftarrow.style.display='none'
    }
    else{
        leftarrow.style.display='block'
    }
    img.setAttribute("src",'images/'+images[imgindex])
    if(imgindex<images.length-1){
        rightarrow.style.display='block'
    }
}
rightarrow.onclick=function(){
    imgindex+=1
    if(imgindex==images.length-1){
        rightarrow.style.display='none'
    }
    else{    
        rightarrow.style.display='block'
    }
    img.setAttribute("src",'images/'+images[imgindex])
    if(imgindex>1){
        leftarrow.style.display='block'
    }
}