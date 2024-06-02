var res = fetch("https://restcountries.com/v3.1/all");
res.then((data)=>data.json()).then((data1)=>foo(data1))

var container = document.createElement("div");
container.className = "container";

var row =  document.createElement("row");
row.className = "row";

function foo(data1){
    for(var i=0;i<data1.length;i++){
        var col = document.createElement("div");
        col.className = "col-lg-4";
        col.innerHTML = `<div class="card text-light bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header"><b>${data1[i].name.common}</b></div>
        <img src="${data1[i].flags.svg}" class="img-fluid rounded-start" alt="...">
        <div class="card-body">
          <p class="card-title"><b>Capital:</b> ${data1[i].capital}</p>
          <p class="card-title"><b>Region:</b> ${data1[i].region}</p>
          <p class="card-title"><b>Country Code:</b>  ${data1[i].cca3}</p>
        </div>
      </div>`;
      row.append(col);
      container.append(row);
      document.body.append(container)
    }
}
