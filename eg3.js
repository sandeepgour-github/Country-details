let xhr = new XMLHttpRequest();
let btn = document.querySelector("input[type=button]");
let div = document.querySelector(".container");
let countryList = document.querySelector("#countryList");
let str = "";

window.addEventListener("load", () => {
  xhr.onreadystatechange = processList;
  xhr.open("GET", "https://restcountries.com/v3.1/all", true);
  xhr.send(null);
});
let jsArray;
function processList() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let js = xhr.responseText;
    jsArray = JSON.parse(js);
    for (let i = 0; i < jsArray.length; i++) {
      str += `<option>` + `<b>` + jsArray[i].name.common + `<b>` + `</option>`;
      console.log(jsArray[i].name.common);
    }
    countryList.innerHTML = str;
    console.log(jsArray[1]);
  }
}

imgSrc = "";
let img = document.createElement("img");
let para1 = document.createElement("p");
let para2 = document.createElement("p");
let div2 = document.createElement("div");
let div3 = document.createElement("p");
let para3 = document.createElement("p");
let para4 = document.createElement("p");
let hr = document.createElement("hr");
let br = document.createElement("br");

let text;

btn.addEventListener("click", loadDe);
function loadDe() {
  cname = countryList.value;
  for (let i = 0; i < jsArray.length; i++) {
    if (cname === jsArray[i].name.common) {
      // console.log(typeof cname);
      // console.log(typeof jsArray[i].name.common);
      console.log(true);

      imgSrc = jsArray[i].flags.png;
      img.src = imgSrc;

      img.style.borderTopLeftRadius = "10px";
      img.style.borderTopRightRadius = "10px";
      img.style.width = "320px";
      img.style.height = "150px";
      img.title = "flag";
      div.append(img);

      para1.innerText = cname;
      para1.style.fontSize = "larger";
      para1.style.fontWeight = "bold";
      div.append(para1);
      console.log(i + 1);
      //div.append(jsArray[i].currencies.INR.name);

      para2.innerText = jsArray[i].region;
      para2.style.color = "grey";
      para2.style.fontWeight = "bold";
      para2.style.textTransform = "uppercase";
      div.append(para2);

      hr.style.width = "80%";
      div2.append(hr);
      div.append(div2);

      div3.innerText = jsArray[i].population + " million";
      div3.style.fontSize = "larger";
      div3.style.fontWeight = "590";

      div.append(div3);

      let obj = jsArray[i].languages;
      console.log(obj);

      for (var propt in obj) {
        console.log(propt + ": " + obj[propt]);
        para3.innerText = "Language: " + obj[propt];
        para3.style.color = "red";

        para3.style.fontWeight = "400";
        para3.style.fontSize = "larger";

        div.append(para3);
      }

      obj = jsArray[i].currencies;
      console.log(obj);

      for (var propt in obj) {
        // console.log(propt + ":" + obj[propt]);
        let a = obj[propt];
        for (var p in a) {
          para4.innerText = "Currency: " + a[p];
          para4.style.color = "blue";

          para4.style.fontWeight = "400";
          para4.style.fontSize = "larger";
          div.append(para4);
          console.log(p + ":" + a[p]);
          break;
        }
      }
    }
  }
}
