
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

const result = excelToJson({
    sourceFile: 'Lista produse GRIVIN.ods',
    header:{
        // Is the number of rows that will be skipped and will not be present at our result object. Counting from top to bottom
        rows: 1 // 2, 3, 4, etc.
    },
    columnToKey:{
        'A':'{{A1}}',
        'B':'{{B1}}',
        'C':'{{C1}}',
        'D':'{{D1}}',
        'E':'{{E1}}',
        'F':'{{F1}}',
        'G':'{{G1}}',
        'H':'{{H1}}',
        'I':'{{I1}}',
        'J':'{{J1}}',
        'K':'{{K1}}',
        'L':'{{L1}}',
        'M':'{{M1}}',
    }
});


let content = [];
result['xls-1209-125817'].forEach((item)=>{
    if(item.considera==1)
        content.push(item);
});

content = {
    products:content
};

let tmp = "const PRODUSE = "+JSON.stringify(content)+";";


fs.writeFile("public/js/produse.js", tmp, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }

    console.log("JSON file has been saved.");
});