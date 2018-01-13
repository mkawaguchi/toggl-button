/*jslint indent: 2, unparam: true*/
/*global $: false, document: false, togglbutton: false*/
'use strict';

togglbutton.render('.summary .content-main:not(.toggl)', { observe: true }, function (elem) {
  console.debug("calling");
  console.debug(elem);
  var link, titleEle = $(".title", elem);
  if (elem.querySelectorAll('.toggl-button').length) { return; }

  var description = titleEle.innerText || "";

  var link = togglbutton.createTimerLink({
    className: 'dreamscope',
    buttonType: 'minimal',
    description: description
    // projectName: "project"
  });
  elem.insertBefore(link, titleEle);
});
