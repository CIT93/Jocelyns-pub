
const TBL = document.getElementById("tab-data");
const FORM = document.getElementById("form");

function renderTblHeading() {
  TBL.innerHTML = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["Name","HouseHold","HouseSize","Footprint", "Actions",];

  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });

  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
}
function renderTblBtn(obj,index,data){
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  btnDel.addEventListener('click', function(e){
    console.log('Hello from inside the delete button');
     console.log(e);
     data.splice(index, 1); 
     renderTbl(data);
  });

  btnEdit.addEventListener('click', function (e) {
    
    if (obj.firstName !== undefined) {
        FORM.elements['firstname'].value = obj.firstName;
    } else {
        FORM.elements['firstname'].value = ''; 
    }

    if (obj.lastName !== undefined) {
        FORM.elements['lastname'].value = obj.lastName;
    } else {
        FORM.elements['lastname'].value = '';
    }

    if (obj.houseM !== undefined) {
        FORM.elements['housem'].value = obj.houseM;
    } else {
        FORM.elements['housem'].value = '';
    }

    if (obj.houseS !== undefined) {
        FORM.elements['houses'].value = obj.houseS;
    } else {
        FORM.elements['houses'].value = '';
    }

    
     
});
return td;
}
function renderTblBody(data) {
  const tbody = document.createElement("tbody");
  data.forEach(function (obj,index) {
    console.log(index);
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(obj)) {
      if (key !== "lastNme" && key !== "houseMPTS" && key !== "houseSPTS") {
        console.log("built td");
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      }
    }
   const td = renderTblBtn(obj,index,data);
    tr.appendChild(td);
    tbody.appendChild(tr);
    
  });
  return tbody;
}

function renderTbl(data) {
  TBL.innerHTML = "";
  if (data.length !==0){
    const table = renderTblHeading();
  const tbody = renderTblBody(data);
  table.appendChild(tbody);
  TBL.appendChild(table);
  } else {
    const message = document.createElement("p");
    message.textContent = "No data avaialable.";
    TBL.appendChild(message);
  }
}

export { renderTbl,renderTblHeading };