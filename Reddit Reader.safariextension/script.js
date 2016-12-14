var comments;
var commentIndex;

window.onload = function () {
  var divs = document.getElementsByTagName("div");

  for (var i = 0; i < divs.length; i++) {
    if (divs[i].id.indexOf("siteTable_") == 0 &&
        divs[i].className === "sitetable nestedlisting") {
      var commentArea = divs[i];
      comments = Array.from(commentArea.comments).filter(function (child) {
        return !(child.className === "clearleft");
      });
      commentIndex = 0;
      break;
    }
  }
}

window.addEventListener("keydown", function (e) {

  // TODO Add more fool-proof indexing constraints
  if (commentIndex >= 0 && commentIndex < comments.length) {
    switch (e.keyCode) {

      // J key
      case 74:
        if (comments[commentIndex].className.includes("noncollapsed")) {
          comments[commentIndex].className = comments[commentIndex].className.replace(" noncollapsed ", " collapsed ");
          commentIndex++;
        }
        break;

      // K key
      case 75:
        commentIndex--;
        if (comments[commentIndex].className.includes("collapsed")) {
          comments[commentIndex].className = comments[commentIndex].className.replace(" collapsed ", " noncollapsed ");
        }
        break;

      default:
        break;
    }
  }
}, false);
