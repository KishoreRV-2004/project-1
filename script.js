//selecting popupoverlay,popupcontainer,addpopup
var popupoverlay=document.querySelector(".popupoverlay")
var popupcontainer=document.querySelector(".popupcontainer")
var addpopup=document.querySelector(".addpopup")

addpopup.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupcontainer.style.display="block"
})

//selecting popup-cancel
var popupcancel=document.getElementById("popup-cancel")

popupcancel.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupcontainer.style.display="none"
})

//selecting container,popup-add,book-name,book-author,book-about,popup-delete
var container=document.querySelector(".container")
var popupadd=document.getElementById("popup-add")
var bookname=document.getElementById("book-name")
var bookauthor=document.getElementById("book-author")
var bookabout=document.getElementById("book-about")
var popupdelete=document.getElementById("popup-delete")

popupadd.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","textcontainer")
    div.innerHTML=`<h1>${bookname.value}</h1>
            <h2>${bookauthor.value}</h2>
            <p>${bookabout.value}</p>
             <button onclick="boxdelete(event)">DELETE</button>`
    container.append(div)
     popupoverlay.style.display="none"
    popupcontainer.style.display="none"
})

function boxdelete(event)
{
    event.target.parentElement.remove()
}


