// SELECT/OPTION-LIVE-SEARCH
// =========================
var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("rx-custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.setAttribute("tabindex", "1");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  var inputselect = document.createElement("input");
  inputselect.setAttribute("type", "text");
  inputselect.setAttribute("placeholder", "Cari...");
  // inputselect.setAttribute("tabindex", "1");
  b.appendChild(inputselect);
  // ================================ //
  // ================================ //
  // ================================ //
  //          IF KATE DIRUBAH         //
  // ================================ //
  // ================================ //
  // ================================ //
  for (j = 0; j < ll; j++) {
    // j=1 ganti nang j=0
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("focusin", function (e) {
    this.nextSibling.firstChild.focus();
    this.nextSibling.classList.remove("select-hide");
  });
  inputselect.addEventListener("focusout", function (e) {
    this.parentElement.classList.add("select-hide");
  });
  var list = b.children;
  var result = b.firstChild.value.toUpperCase();
  for (let p = 1; p < b.childElementCount; p++) {
    b.firstChild.addEventListener("keyup", function () {
      if (
        this.parentElement.children[p].innerText
          .toUpperCase()
          .indexOf(this.parentElement.firstChild.value.toUpperCase()) > -1
      ) {
        this.parentElement.children[p].style.display = "";
      } else {
        this.parentElement.children[p].style.display = "none";
      }
    });
  }
}

var inputselect = document.createElement("input");

function closeAllSelect(elmnt) {
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
