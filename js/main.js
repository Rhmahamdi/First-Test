var sNameInput = document.getElementById("siteName");
var sUrlInput = document .getElementById("webSiteUrl");
var myAddbtn =document.getElementById("AddBtn");
var allWebSites=[];



if (JSON.parse(localStorage.getItem("myBookmarker"))!= null){
    allWebSites = JSON.parse( localStorage .getItem("myBookmarker"))
    displayWebsite()
}

function addWebSite ()
{
    var sNameValue = sNameInput.value;
    var sUrlValue  = sUrlInput.value;
    var oneSite ={
        name: sNameValue ,
        URL: sUrlValue 
    };
    
    allWebSites.push(oneSite);
    console.log(allWebSites);
    localStorage.setItem ("myBookmarker",JSON.stringify(allWebSites) );

    clearInputs();
    displayWebsite();


}
function clearInputs(){
    sNameInput.value ="";
    sUrlInput .value ="";
}
function displayWebsite()
{
    var hasala=``;
    
    for(var i=0 ; i < allWebSites.length ; i++){
        hasala+=`<tr>
    
        <td> ` + allWebSites[i].name +  `</td>
        <td> <button class="myBtn" ><a href="` + allWebSites[i].URL + `" target="_blank"> visit </a></button></td>
        <td> <button class="myBtn" onclick="updateSite(`+i+`)"> Update </button> </td>
        <td> <button class="myBtn" onclick="deleteSite(`+i+`)"> Delete </button> </td>
        
        </tr>`
    }
    document.getElementById("tBody").innerHTML=hasala;



}
function deleteSite(sIndex){

    allWebSites.splice(sIndex ,1);
    displayWebsite();
    localStorage.setItem("myBookmarker",JSON.stringify(allWebSites));

}
function updateSite( proIndex){
    sNameInput.value = allWebSites[proIndex].name;
    sUrlInput.value =allWebSites[proIndex].URL;

    myAddbtn.innerHTML="UpdateWebSite";
    myAddbtn.classList.add("btn-warning");
    myAddbtn.setAttribute("onclick", "updateCurrentSite("+proIndex+")");


}
function updateCurrentSite(proIndex){
    allWebSites[proIndex].name=sNameInput.value;
    allWebSites[proIndex].url=sUrlInput.value;

    displayWebsite();
    clearInputs();

    localStorage.setItem("myBookmarker", JSON.stringify(allWebSites));

    myAddbtn.innerHTML="Add WebSite";
    myAddbtn.classList.remove("btn-warning");
    myAddbtn.setAttribute("onclick", "addWebSite()");

}

function  searchWebSite(userWord)
{
   
    console.log(userWord)

    var hasala=``;
    for(var i=0 ;i<allWebSites.length;i++){
        if ( allWebSites[i].name.toLowerCase().includes( userWord.toLowerCase() ) ) 
        {
            hasala+= `<tr>
            <td>` +  i  + `</td>
            <td>` + allWebSites[i].name + `</td>
            <td> <button class="myBtn" ><a href="` + allWebSites[i].URL + `" target="_blank"> visit </a></button></td>
            <td> <button class="myBtn" onclick="updateSite(`+i+`)"> Update </button> </td>
            <td> <button class="myBtn" onclick="deleteSite(`+i+`)"> Delete </button> </td>
            </tr>`  
        }
       

    }

    document.getElementById("tBody").innerHTML=hasala;


}





