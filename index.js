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
  $("#appJsonContainerChecked").hide();
  $("#textPlainContainer").hide();
  $("#textHtmlContainer").hide();
  $("#appXmlContainer").hide();
  $("#appJavascriptContainer").hide();

  $(document).on("click", ".addInputBoxesRow", function (e) {
    let parent = e.target.parentElement;
    let main = document.createElement("div");
    main.classList.add("input-group", "input-row");

    let firstChildDivInput = document.createElement("input");
    firstChildDivInput.classList.add("form-control", "text-truncate");
    firstChildDivInput.setAttribute("placeholder", "Key");
    firstChildDivInput.setAttribute("type", "text");

    let secondChildDivInput = document.createElement("input");
    secondChildDivInput.classList.add("form-control", "text-truncate");
    secondChildDivInput.setAttribute("placeholder", "Value");
    secondChildDivInput.setAttribute("type", "text");

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
      "delInputBoxesRow",
      "input-group-text"
    );
    spanDel.setAttribute("role", "button");
    spanDel.textContent = "delete";

    main.append(spanDel, firstChildDivInput, secondChildDivInput, spanAdd);
    $(parent).after(main);
  });

  $(document).on("click", ".delInputBoxesRow", function (e) {
    let clickedContainerId = e.target.parentElement.parentElement.id;

    if (clickedContainerId === "nav-queryparams") {
      let count = $("#nav-queryparams").find(".input-group").length;
      if (count === 1) {
        return;
      }
      let ele = e.target.parentElement.parentElement;
      ele.removeChild(e.target.parentElement);
    } else if (clickedContainerId === "nav-headers") {
      let count = $("#nav-headers").find(".input-group").length;
      if (count === 1) {
        return;
      }
      let ele = e.target.parentElement.parentElement;
      ele.removeChild(e.target.parentElement);
    } else if (clickedContainerId === "appUrlEncodedContainer") {
      let count = $("#appUrlEncodedContainer").find(".input-group").length;
      if (count === 1) {
        return;
      }
      let ele = e.target.parentElement.parentElement;
      ele.removeChild(e.target.parentElement);
    } else if (clickedContainerId === "appJsonContainer") {
      let count = $("#appJsonContainer").find(".input-group").length;
      if (count === 1) {
        return;
      }
      let ele = e.target.parentElement.parentElement;
      ele.removeChild(e.target.parentElement);
    }
  });

  $(document).on("click", ".addInputBoxesRow", function (e) {
    let count = $("#nav-queryparams").find(".input-group").length;
    console.log(count);
  });

  $(document).on("click", ".delInputBoxesRow", function (e) {
    let count = $("#nav-queryparams").find(".input-group").length;
    console.log(count);
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
      $("#appJsonContainerChecked").hide();
    } else if (selectedValue === "appjson") {
      if ($("#req-body-checkbox").prop("checked")) {
        $("#appJsonContainerChecked").show();
        $("#appJsonContainer").hide();
      } else {
        $("#appJsonContainerChecked").hide();
        $("#appJsonContainer").show();
      }
      $("#req-body-toggle").show();
      $("#appUrlEncodedContainer").hide();
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
      $("#appJsonContainerChecked").hide();
    } else if (selectedValue === "texthtml") {
      $("#req-body-toggle").hide();
      $("#appUrlEncodedContainer").hide();
      $("#appJsonContainer").hide();
      $("#textPlainContainer").hide();
      $("#textHtmlContainer").show();
      $("#appXmlContainer").hide();
      $("#appJavascriptContainer").hide();
      $("#appJsonContainerChecked").hide();
    } else if (selectedValue === "appxml") {
      $("#req-body-toggle").hide();
      $("#appUrlEncodedContainer").hide();
      $("#appJsonContainer").hide();
      $("#textPlainContainer").hide();
      $("#textHtmlContainer").hide();
      $("#appXmlContainer").show();
      $("#appJavascriptContainer").hide();
      $("#appJsonContainerChecked").hide();
    } else if (selectedValue === "appjavascript") {
      $("#req-body-toggle").hide();
      $("#appUrlEncodedContainer").hide();
      $("#appJsonContainer").hide();
      $("#textPlainContainer").hide();
      $("#textHtmlContainer").hide();
      $("#appXmlContainer").hide();
      $("#appJavascriptContainer").show();
      $("#appJsonContainerChecked").hide();
    }
  });

  $("#req-body-checkbox").on("change", function () {
    if ($("#req-body-checkbox").prop("checked")) {
      $("#appJsonContainerChecked").show();
      $("#appJsonContainer").hide();
    } else {
      $("#appJsonContainerChecked").hide();
      $("#appJsonContainer").show();
    }
  });
});
