var choice;

function choose(x){
    choice = x;
}

function generateString(){
    let excelData = document.getElementById("excelData").value;
    let arrayExcelData = excelData.split("\n");
    console.log(arrayExcelData[arrayExcelData.length-1]);
    if(arrayExcelData.length > 100){
        alert("Don't exceed 100 records!");
    }
    for(let i=0; arrayExcelData[arrayExcelData.length-1]==""; i++){
        arrayExcelData.pop();
        console.log("risultato dopo pop" + arrayExcelData);
    }

    console.log(arrayExcelData);
    if( choice == "PEID"){
        draftOutputString = arrayExcelData.join('" OR custom_id:"')
        console.log(draftOutputString);
        finalOutputString = 'custom_id:"' + draftOutputString + '"';
        console.log(finalOutputString);
        document.getElementById("myInput").value = finalOutputString;
    } else if (choice == "prospectMail") {
        draftOutputString = arrayExcelData.join('" OR email:"')
        console.log(draftOutputString);
        finalOutputString = 'email:"' + draftOutputString + '"';
        console.log(finalOutputString);
        document.getElementById("myInput").value = finalOutputString;

    }
    
    
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
