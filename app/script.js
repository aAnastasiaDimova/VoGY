const showFreeButton =  document.getElementById("showFreeButton")
const showPaidButton =  document.getElementById("showPaidButton")
const clearFreeButton = document.getElementById("clearFreeButton")
const clearPaidButton = document.getElementById("clearPaidButton")
const backFree = document.getElementById("freeEdu")
const backPaid = document.getElementById("paidEdu")

showFreeButton.addEventListener("click", FreeFunction)

clearFreeButton.addEventListener("click", FreeFunction)

showPaidButton.addEventListener("click", PaidFunction)

clearPaidButton.addEventListener("click", PaidFunction)



function FreeFunction (){
    showFreeButton.classList.toggle("ShowFreeButton")
    backFree.classList.toggle("FreeEduBack")
}

function PaidFunction (){
    showPaidButton.classList.toggle("ShowPaidButton")
    backPaid.classList.toggle("PaidEduBack")
}