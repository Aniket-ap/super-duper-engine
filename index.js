$(document).ready(function () {
  // Hide all element in Authorization Tab initially
  $("#auth-tab-toggle").hide();
  $("#apiKeyContainer").hide();
  $("#bearerTokenContainer").hide();
  $("#basicOathContainer").hide();
  $("#oAuth2Container").hide();

  // Hide all element in Request Body Tab initially
  $("#req-body-toggle").hide();
  $("#appUrlEncodedContainer").hide();
  $("#appJsonContainer").hide();
  $("#textPlainContainer").hide();
  $("#textHtmlContainer").hide();
  $("#appXmlContainer").hide();
  $("#appJavascriptContainer").hide();

  $(".addInputBoxesRow").click(function (e) {
    let main = document.createElement("div");
    main.classList.add("input-group", "input-row");

    let firstChildDivInput = document.createElement("input");
    firstChildDivInput.classList.add("form-control");
    firstChildDivInput.setAttribute("placeholder", "Key");
    firstChildDivInput.setAttribute("type", "text");
    firstChildDivInput.setAttribute("aria-label", "First name");

    let secondChildDivInput = document.createElement("input");
    secondChildDivInput.classList.add("form-control");
    secondChildDivInput.setAttribute("placeholder", "Value");
    secondChildDivInput.setAttribute("type", "text");
    secondChildDivInput.setAttribute("aria-label", "Last name");

    let spanAdd = document.createElement("span");
    spanAdd.classList.add(
      "material-symbols-outlined",
      "input-group-text",
      "addInputBoxesRow"
    );
    spanAdd.setAttribute("role", "button");
    spanAdd.textContent = "add";

    let spanDel = document.createElement("span");
    spanDel.classList.add(
      "material-symbols-outlined",
      "DelInputBoxesRow",
      "input-group-text"
    );
    spanDel.setAttribute("role", "button");
    spanDel.textContent = "delete";

    main.append(firstChildDivInput, secondChildDivInput, spanAdd, spanDel);
    $("#inner-fields").append(main);
  });

  $("#auth-tab-select").change(function (e) {
    let selectedValue = e.target.value;
    if (selectedValue === "noauth") {
      $("#auth-tab-toggle").hide();
      $("#apiKeyContainer").hide();
      $("#bearerTokenContainer").hide();
      $("#basicOathContainer").hide();
      $("#oAuth2Container").hide();
    } else if (selectedValue === "apikey") {
      $("#auth-tab-toggle").show();
      $("#apiKeyContainer").show();
      $("#bearerTokenContainer").hide();
      $("#basicOathContainer").hide();
      $("#oAuth2Container").hide();
    } else if (selectedValue === "bearertoken") {
      $("#auth-tab-toggle").hide();
      $("#apiKeyContainer").hide();
      $("#bearerTokenContainer").show();
      $("#basicOathContainer").hide();
      $("#oAuth2Container").hide();
    } else if (selectedValue === "basicoauth") {
      $("#auth-tab-toggle").hide();
      $("#apiKeyContainer").hide();
      $("#bearerTokenContainer").hide();
      $("#basicOathContainer").show();
      $("#oAuth2Container").hide();
    } else if (selectedValue === "oauth2") {
      $("#auth-tab-toggle").hide();
      $("#apiKeyContainer").hide();
      $("#bearerTokenContainer").hide();
      $("#basicOathContainer").hide();
      $("#oAuth2Container").show();
    }
  });

  $("#req-body-tab-select").change(function (e) {
    let selectedValue = e.target.value;
    if (selectedValue === "none") {
      $("#req-body-toggle").hide();
      $("#appUrlEncodedContainer").hide();
      $("#appJsonContainer").hide();
      $("#textPlainContainer").hide();
      $("#textHtmlContainer").hide();
      $("#appXmlContainer").hide();
      $("#appJavascriptContainer").hide();
    } else if (selectedValue === "appurlencoded") {
      $("#req-body-toggle").hide();
      $("#appUrlEncodedContainer").show();
      $("#appJsonContainer").hide();
      $("#textPlainContainer").hide();
      $("#textHtmlContainer").hide();
      $("#appXmlContainer").hide();
      $("#appJavascriptContainer").hide();
    } else if (selectedValue === "appjson") {
      $("#req-body-toggle").show();
      $("#appUrlEncodedContainer").hide();
      $("#appJsonContainer").show();
      $("#textPlainContainer").hide();
      $("#textHtmlContainer").hide();
      $("#appXmlContainer").hide();
      $("#appJavascriptContainer").hide();
    } else if (selectedValue === "textplain") {
      $("#req-body-toggle").hide();
      $("#appUrlEncodedContainer").hide();
      $("#appJsonContainer").hide();
      $("#textPlainContainer").show();
      $("#textHtmlContainer").hide();
      $("#appXmlContainer").hide();
      $("#appJavascriptContainer").hide();
    } else if (selectedValue === "texthtml") {
      $("#req-body-toggle").hide();
      $("#appUrlEncodedContainer").hide();
      $("#appJsonContainer").hide();
      $("#textPlainContainer").hide();
      $("#textHtmlContainer").show();
      $("#appXmlContainer").hide();
      $("#appJavascriptContainer").hide();
    } else if (selectedValue === "appxml") {
      $("#req-body-toggle").hide();
      $("#appUrlEncodedContainer").hide();
      $("#appJsonContainer").hide();
      $("#textPlainContainer").hide();
      $("#textHtmlContainer").hide();
      $("#appXmlContainer").show();
      $("#appJavascriptContainer").hide();
    } else if (selectedValue === "appjavascript") {
      $("#req-body-toggle").hide();
      $("#appUrlEncodedContainer").hide();
      $("#appJsonContainer").hide();
      $("#textPlainContainer").hide();
      $("#textHtmlContainer").hide();
      $("#appXmlContainer").hide();
      $("#appJavascriptContainer").show();
    }
  });
});

function onDeleteInputRow(event) {
  let element = event.target.parentElement.parentElement.parentElement;
  element.removeChild(event.target.parentElement.parentElement);
}
