function generateString(){
    let excelData = document.getElementById("excelData").value;
    let arrayExcelData = excelData.split("\n");
    console.log(arrayExcelData[arrayExcelData.length-1]);
    for(let i=0; arrayExcelData[arrayExcelData.length-1]==""; i++){
        arrayExcelData.pop();
        console.log("risultato dopo pop" + arrayExcelData);
    }

    console.log(arrayExcelData);
    draftOutputString = arrayExcelData.join('" OR custom_id:"')
    console.log(draftOutputString);
    finalOutputString = 'custom_id:"' + draftOutputString + '"';
    console.log(finalOutputString);
    document.getElementById("myInput").value = finalOutputString;
    
}

function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }