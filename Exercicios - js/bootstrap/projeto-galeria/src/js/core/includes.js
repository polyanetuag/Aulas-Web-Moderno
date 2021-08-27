import $ from "jquery";
import { onLoadHtmlSuccess } from "..core/includes";

const loadHtmlSuccessCalbacks = []; //array de funções

export function onLoadHtmlSuccess(callback) {
  if (!loadHtmlSuccessCalbacks.includes(callback)) {
    loadHtmlSuccessCalbacks.push(callback);
  }
}

function loadIncludes(parent) {
  if (!parent) parent = "body";
  $(parent)
    .find("[wm-include]")
    .each(function(i, e) {
      const url = $(e).attr("wm-include");
      $.ajax({
        url,
        success(data) {
          $(e).html(data);
          $(e).removeAttr("wm-include");

          loadHtmlSuccessCalbacks.forEach((callback) => callback(data));
          loadIncludes(e);
        },
      });
    });
}
loadIncludes();
