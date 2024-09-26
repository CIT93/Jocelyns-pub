
const TBL = document.getElementById("tab-data");


function renderTblHeading (){
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = [ "Name","HouseHold", "HouseSize", "Footprint", "Actions",];
    headingTextArr.forEach(function (text) {
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
      
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table;
  }
  
  function renderTbl(data){
    const table = renderTblHeading();
    const tbody = document.createElement("tbody");


    data.forEach(item => {
      const tr = document.createElement("tr")
      const nameTable = document.createElement("td");
      nameTable.textContent = item.firstName;
      tr.appendChild(nameTable);
      const householdTable = document.createElement("td");
      householdTable.textContent = item.houseM;
      tr.appendChild(householdTable);
      const housesizeTable = document.createElement("td");
      housesizeTable.textContent = item.houseS;
      tr.appendChild(housesizeTable);
      const footprintTable = document.createElement("td");
      footprintTable.textContent = item.cftpTotal
      tr.appendChild(footprintTable);



    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";
    
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    tr.appendChild(td);

    tbody.appendChild(tr);

  });




    table.appendChild(tbody);
    console.log(table);
    TBL.appendChild(table);
    TBL.innerHTML ="";
  
  }
  
  export {renderTbl,renderTblHeading}