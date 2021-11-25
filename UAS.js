


document.addEventListener("DOMContentLoaded",() => {
	const os = new SelectDropdown({ id: "frontend" }),
		fruit = new SelectDropdown({ id: "backend" });
		flower = new SelectDropdown({id:"middle"});
		flower2 = new SelectDropdown({id:"middle2"});
});

class SelectDropdown {
	constructor(args) {
		this.isOpening = false;
		this.select = document.querySelector(`select[id=${args.id}]`);
		this.selectBtn = document.createElement("button");
		this.options = document.createElement("div");
		this.buildDropdown();
	}
	buildDropdown() {
		if (this.select !== null) {
			// create div to contain <select>
			let wrapper = document.createElement("div");
			wrapper.setAttribute("class","select");
			this.select.parentElement.insertBefore(wrapper,this.select);
			wrapper.appendChild(this.select);

			// create button
			let id = this.select.id,
				selectBtnAttrs = {
					"class": "select__button select__button--pristine",
					"type": "button",
					"id": `${id}-options`,
					"aria-haspopup": "listbox",
					"aria-expanded": "false"
				};

			for (let a in selectBtnAttrs)
				this.selectBtn.setAttribute(a,selectBtnAttrs[a]);

			let selectBtnText = document.createTextNode(this.select.options[0].innerHTML);
			this.selectBtn.appendChild(selectBtnText);
			wrapper.appendChild(this.selectBtn);

			// create options div
			let optionsAttrs = {
				"class": "select__options",
				"aria-labelledby": selectBtnAttrs.id
			};
			for (let a in optionsAttrs)
				this.options.setAttribute(a,optionsAttrs[a]);

			// then each option
			for (let o of this.select.options) {
				let option = document.createElement("a"),
					optionText = document.createTextNode(o.innerHTML),
					optionAttrs = {
						"href": "#",
						"class": "select__option",
						"data-value": o.value,
						"role": "option",
						"aria-selected": "false"
					};

				for (let a in optionAttrs)
					option.setAttribute(a,optionAttrs[a]);

				option.appendChild(optionText);
				this.options.appendChild(option);
			}
			wrapper.appendChild(this.options);

			// sync with pre-selected option
			let preselected = this.options.querySelector(`[data-value=${this.select.value}]`);
			preselected.setAttribute("aria-selected",true);
			this.selectBtn.innerHTML = preselected.innerHTML;

			// restack so options can appear over other dropdowns
			let selects = document.querySelectorAll(".select"),
				selectCount = 0;
			while (selectCount < selects.length) {
				selects[selectCount].style.zIndex = selects.length - selectCount;
				++selectCount;
			}

			// assign event listeners
			document.querySelector(`label[for=${id}]`).addEventListener("click",() => {
				if (!this.isExpanded())
					this.selectBtn.focus();
				else
					this.closeSelect();
			});
			this.selectBtn.addEventListener("click",() => { this.openSelect(); });
			this.options.addEventListener("click",e => { this.closeSelect(e); });

			document.addEventListener("click",() => {
				let el = document.activeElement;
				if (el.parentElement.getAttribute("aria-labelledby") !== selectBtnAttrs.id)
					this.closeSelect();
			});
			window.addEventListener("keydown",e => {
				switch (e.keyCode) {
					case 27: // Esc
						this.closeSelect();
						break;
					case 32: // Spacebar
						this.closeSelect(e);
						break;
					case 38: // Up
						this.goToOption("previous");
						break;
					case 40: // Down
						this.goToOption("next");
						break;
					default:
						break;
				}
			});
		}
	}
	isExpanded() {
		return this.selectBtn.getAttribute("aria-expanded") === "true";
	}
	openSelect(e) {
		if (!this.isExpanded()) {
			// prevent immediate closing to not ruin animation
			let foldDur = window.getComputedStyle(this.options);
			foldDur = foldDur.getPropertyValue("transition-delay").split("");
			if (foldDur.indexOf("m") > -1) {
				foldDur.splice(foldDur.length - 2,2);
				foldDur = parseInt(foldDur.join(""));

			} else if (foldDur.indexOf("s") > -1) {
				foldDur.pop();
				foldDur = parseFloat(foldDur.join("")) * 1e3;
			}
			this.isOpening = true;
			setTimeout(() => {this.isOpening = false;},foldDur);

			// manage states
			this.selectBtn.setAttribute("aria-expanded",true);

			let btnClasses = this.selectBtn.classList,
				pristineClass = "select__button--pristine",
				animClass = `select__button--fold${this.select.options.length}`;

			if (btnClasses.contains(pristineClass)) {
				btnClasses.remove(pristineClass);
			} else {
				btnClasses.remove(animClass);
				void this.selectBtn.offsetWidth;
			}
			btnClasses.add(animClass);

			// set focus to selected option
			let selected = this.options.querySelector("[aria-selected=true]");
			if (selected !== null)
				selected.focus();
			else
				this.options.childNodes[0].focus();
		}
	}
	closeSelect(e) {
		if (this.isExpanded() && !this.isOpening) {
			if (e && e.target !== this.options.childNodes[0]) {
				// update values of both original and custom dropdowns
				this.select.value = e.target.getAttribute("data-value");
				this.selectBtn.innerHTML = e.target.innerHTML;

				// indicate selected item
				for (let n of this.options.childNodes)
					n.setAttribute("aria-selected",false);

				e.target.setAttribute("aria-selected",true);
				e.preventDefault();
			}
			this.selectBtn.setAttribute("aria-expanded",false);
			this.selectBtn.focus();

			// fire animation
			let btnClasses = this.selectBtn.classList,
				animClass = `select__button--fold${this.select.options.length}`;

			btnClasses.remove(animClass);
			void this.selectBtn.offsetWidth;
			btnClasses.add(animClass);
		}
	}
	goToOption(goTo) {
		if (this.isExpanded()) {
			let optionLinks = this.options.querySelectorAll("a"),
				activeEl = document.activeElement,
				linkFound = false;

			// check for focused option
			for (let l of optionLinks) {
				if (activeEl === l) {
					linkFound = true;
					break;
				}
			}
			// allow movement with arrows until top or bottom option is reached
			if (linkFound) {
				if (goTo === "previous" && activeEl !== optionLinks[0])
					activeEl.previousSibling.focus();

				else if (goTo === "next" && activeEl !== optionLinks[optionLinks.length - 1])
					activeEl.nextSibling.focus();
			}
		}
	}
}








function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function alert1() {
  alert("This page isn't avaiable right now.");
}



function search() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
