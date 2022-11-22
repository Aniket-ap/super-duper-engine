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
    let parentElementIdName = parent.parentElement.id;
    let keyClassName = "";
    let valueClassName = "";
    let addClassName = "";
    let deleteClassName = "";

    if (parentElementIdName === "nav-queryparams") {
      keyClassName = "params-key-1-1d";
      valueClassName = "params-value-1-1d";
      addClassName = "params-add-1-1d";
      deleteClassName = "params-delete-1-1d";
    } else if (parentElementIdName === "nav-headers") {
      keyClassName = "headers-key-1-1d";
      valueClassName = "headers-value-1-1d";
      addClassName = "headers-add-1-1d";
      deleteClassName = "headers-delete-1-1d";
    } else if (parentElementIdName === "appUrlEncodedContainer") {
      keyClassName = "body-application-x-www-form-urlencoded-key-1-1d";
      valueClassName = "body-application-x-www-form-urlencoded-value-1-1d";
      addClassName = "body-application-x-www-form-urlencoded-add-1-1d";
      deleteClassName = "body-application-x-www-form-urlencoded-delete-1-1d";
    } else if (parentElementIdName === "appJsonContainer") {
      keyClassName = "body-applicationjson-key-1-1d";
      valueClassName = "body-applicationjson-value-1-1d";
      addClassName = "body-applicationjson-add-1-1d";
      deleteClassName = "body-applicationjson-delete-1-1d";
    }

    let main = $("<div></div>");
    main.attr("class", "input-group");

    let firstChildDivInput = $("<input/>");
    firstChildDivInput.attr({
      class: `form-control ${keyClassName}`,
      placeholder: "Key",
      type: "text",
    });

    let secondChildDivInput = $("<input/>");
    secondChildDivInput.attr({
      class: `form-control ${valueClassName}`,
      placeholder: "Value",
      type: "text",
    });

    let buttonAdd = $("<button>add</button>");
    buttonAdd.attr({
      class: `material-symbols-outlined input-group-text addInputBoxesRow ${addClassName}`,
      role: "button",
      title: "Add new",
    });

    let buttonDel = $("<button>delete</button>");
    buttonDel.attr({
      class: `material-symbols-outlined input-group-text delInputBoxesRow ${deleteClassName}`,
      role: "button",
      title: "Delete",
    });

    main.append(buttonDel, firstChildDivInput, secondChildDivInput, buttonAdd);
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
