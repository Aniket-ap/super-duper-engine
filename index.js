let authTabSelect = document.getElementById("auth-tab-select");
let reqBodyTabSelect = document.getElementById("req-body-tab-select");
let authTabContainer = document.getElementById("auth-wrapper");
let reqBodyTabContainer = document.getElementById("request-body-wrapper");
const authToggle = document.getElementById("auth-tab-toggle");
const reqBodyToggle = document.getElementById("req-body-toggle");
let queryParamsTabInner = document.querySelector(
  "#nav-queryparams #inner-fields"
);

function onChangeHttpMethods(event) {
  console.log(event.target.value);
}

function onKeyUpURL(event) {
  console.log(event.target.value);
}

authTabSelect.addEventListener("change", (event) => {
  let selectedValue = event.target.value;

  if (selectedValue === "noauth") {
    authTabContainer.innerHTML = "";
    authToggle.innerHTML = "";
  } else if (selectedValue === "apikey") {
    authTabContainer.innerHTML = `
        <div class="row mt-3">
            <div class="col-6">
            <div>
                <label class="form-label">API Key</label>
                <input type="email" class="form-control " />
            </div>
            </div>
            <div class="col-6">
            <div>
                <label class="form-label">API Value</label>
                <input type="email" class="form-control " />
            </div>
            </div>
      </div>
        `;
    authToggle.innerHTML = `
        <span class="mx-3">Add to:</span>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" checked
                value="header">
            <label class="form-check-label">Header</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions"
                value="queryparams">
            <label class="form-check-label">Query Params</label>
        </div>
        `;
  } else if (selectedValue === "bearertoken") {
    authTabContainer.innerHTML = "";
    authToggle.innerHTML = "";
    authTabContainer.innerHTML = `
    <div class="row mt-3">
    <div class="col-6">
      <div>
        <label class="form-label">Bearer Token</label>
        <input type="email" class="form-control" />
      </div>
    </div>
  </div>
    `;
  } else if (selectedValue === "basicoauth") {
    authTabContainer.innerHTML = "";
    authToggle.innerHTML = "";
    authTabContainer.innerHTML = `
    <div class="row mt-3">
    <div class="col-6">
      <div>
        <label class="form-label">Username</label>
        <input type="email" class="form-control" />
      </div>
    </div>
    <div class="col-6">
      <div>
        <label class="form-label">Password</label>
        <input type="email" class="form-control" />
      </div>
    </div>
  </div>
    `;
  } else if (selectedValue === "oauth2") {
    authTabContainer.innerHTML = "";
    authToggle.innerHTML = "";
    authTabContainer.innerHTML = `
    <div class="row mt-3">
    <div class="col-6">
      <div>
        <label class="form-label">Access Token</label>
        <input type="email" class="form-control" />
      </div>
    </div>
  </div>
    `;
  }
});

reqBodyTabSelect.addEventListener("change", (event) => {
  let selectedValue = event.target.value;
  if (selectedValue === "none") {
    reqBodyToggle.innerHTML = "";
    reqBodyTabContainer.innerHTML = "";
  } else if (selectedValue === "appurlencoded") {
    reqBodyTabContainer.innerHTML = "";
    reqBodyToggle.innerHTML = "";
    reqBodyTabContainer.innerHTML = `
    <div class="input-group">
                    <input type="text" aria-label="First name" placeholder="Key" class="form-control">
                    <input type="text" aria-label="Last name" placeholder="Value" class="form-control">
                    <span class="material-symbols-outlined input-group-text" onclick="addInput(event)">add</span>
                    <span class="material-symbols-outlined input-group-text">delete</span>
                </div>
                <div class="input-group">
                    <input type="text" aria-label="First name" placeholder="Key" class="form-control">
                    <input type="text" aria-label="Last name" placeholder="Value" class="form-control">
                    <span class="material-symbols-outlined input-group-text" onclick="addInput(event)">add</span>
                    <span class="material-symbols-outlined input-group-text">delete</span>
                </div>
                <div class="input-group">
                    <input type="text" aria-label="First name" placeholder="Key" class="form-control">
                    <input type="text" aria-label="Last name" placeholder="Value" class="form-control">
                    <span class="material-symbols-outlined input-group-text" onclick="addInput(event)">add</span>
                    <span class="material-symbols-outlined input-group-text">delete</span>
                </div>
        `;
  } else if (selectedValue === "appjson") {
    reqBodyTabContainer.innerHTML = "";
    reqBodyToggle.innerHTML = `
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="req-body-checkbox">
            <label class="form-check-label">Use Raw Input</label>
        </div>
        `;
    reqBodyTabContainer.innerHTML = `
    <div class="input-group">
    <input type="text" aria-label="First name" placeholder="Key" class="form-control">
    <input type="text" aria-label="Last name" placeholder="Value" class="form-control">
    <span class="material-symbols-outlined input-group-text" onclick="addInput(event)">add</span>
    <span class="material-symbols-outlined input-group-text">delete</span>
</div>
<div class="input-group">
    <input type="text" aria-label="First name" placeholder="Key" class="form-control">
    <input type="text" aria-label="Last name" placeholder="Value" class="form-control">
    <span class="material-symbols-outlined input-group-text" onclick="addInput(event)">add</span>
    <span class="material-symbols-outlined input-group-text">delete</span>
</div>
<div class="input-group">
    <input type="text" aria-label="First name" placeholder="Key" class="form-control">
    <input type="text" aria-label="Last name" placeholder="Value" class="form-control">
    <span class="material-symbols-outlined input-group-text" onclick="addInput(event)">add</span>
    <span class="material-symbols-outlined input-group-text">delete</span>
</div>
        `;
  } else if (selectedValue === "textplain") {
    reqBodyTabContainer.innerHTML = "";
    reqBodyToggle.innerHTML = "";
    reqBodyTabContainer.innerHTML = `
      <div class="col-sm-6 mt-5">
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Request Body</label>
        <textarea class="form-control " id="exampleFormControlTextarea1" rows="5"></textarea>
        <label for="exampleFormControlTextarea1" class="form-label">Write the raw request body</label>
      </div>
    </div>
      `;
  } else if (selectedValue === "texthtml") {
    reqBodyTabContainer.innerHTML = "";
    reqBodyToggle.innerHTML = "";
    reqBodyTabContainer.innerHTML = `
    <div class="col-sm-6 mt-5">
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Request Body</label>
      <textarea class="form-control " id="exampleFormControlTextarea1" rows="5"></textarea>
      <label for="exampleFormControlTextarea1" class="form-label">Write the raw request body</label>
    </div>
  </div>
    `;
  } else if (selectedValue === "appxml") {
    reqBodyTabContainer.innerHTML = "";
    reqBodyToggle.innerHTML = "";
    reqBodyTabContainer.innerHTML = `
    <div class="col-sm-6 mt-5">
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Request Body</label>
      <textarea class="form-control " id="exampleFormControlTextarea1" rows="5"></textarea>
      <label for="exampleFormControlTextarea1" class="form-label">Write the raw request body</label>
    </div>
  </div>
    `;
  } else if (selectedValue === "appjavascript") {
    reqBodyTabContainer.innerHTML = "";
    reqBodyToggle.innerHTML = "";
    reqBodyTabContainer.innerHTML = `
    <div class="col-sm-6 mt-5">
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Request Body</label>
      <textarea class="form-control " id="exampleFormControlTextarea1" rows="5"></textarea>
      <label for="exampleFormControlTextarea1" class="form-label">Write the raw request body</label>
    </div>
  </div>
    `;
  }
});

function addInput(event) {
  if (true) {
    let main = document.createElement("div");
    main.classList.add("d-flex");

    let firstChildDiv = document.createElement("div");
    firstChildDiv.classList.add("d-flex", "w-100", "border-0");
    let firstChildDivInput = document.createElement("input");
    firstChildDivInput.classList.add("form-control", "border");
    firstChildDivInput.setAttribute("placeholder", "Key");
    firstChildDivInput.setAttribute("type", "text");
    firstChildDiv.appendChild(firstChildDivInput);

    let secondChildDiv = document.createElement("div");
    secondChildDiv.classList.add("d-flex", "w-100", "border-0");
    let secondChildDivInput = document.createElement("input");
    secondChildDivInput.classList.add("form-control", "border");
    secondChildDivInput.setAttribute("placeholder", "Value");
    secondChildDivInput.setAttribute("type", "text");
    secondChildDiv.appendChild(secondChildDivInput);

    let btnAdd = document.createElement("button");
    btnAdd.classList.add("px-1", "py-1", "border", "border-gray-300", "d-flex");
    
    let spanBtn = document.createElement("span");
    spanBtn.classList.add("material-symbols-outlined");
    spanBtn.textContent = "delete";
    spanBtn.setAttribute("onclick", "onDeleteInputRow(event)");
    btnAdd.appendChild(spanBtn);

    main.append(firstChildDiv, secondChildDiv, btnAdd);

    queryParamsTabInner.append(main);
  }
}

function onDeleteInputRow(event) {
  let element = event.target.parentElement.parentElement.parentElement;
  element.removeChild(event.target.parentElement.parentElement);
}
