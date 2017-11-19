//point to modal container
var modal = document.getElementById('modals');

//get the # of photos present on the page
var numPhoto = document.querySelectorAll('#modal_div .canvas_img').length;
// Get the images and insert it inside the modal
var imgArray = [];
var modalImgArray = [];
var spanCloseArray = [];

//create new div for i's modal
//node: the whole modal
//imgArray: img outside of modal
//modalArray: img inside of modal
//spanCloseArray: close button functionality
for (var i = 0; i < numPhoto; i++) {
	imgArray[i] = document.getElementById('canvas_img_' + i);
	
	var node = document.createElement("div");
	node.setAttribute("id", "myModal");
	node.setAttribute("class", "modal");
	
	node.innerHTML = "<span id=close_"+i+" class=close_modal>&times;</span><img class=modal-content id=modal_img_"+i+">";
	modal.appendChild(node);
	
	modalImgArray[i] = document.getElementById('modal_img_' + i);
	modalImgArray[i].setAttribute("src", imgArray[i].src);
	
	var showOnClick = function(node, i) {
		imgArray[i].onclick = function() {
			node.style.display = "block";
		}
	}
	showOnClick(node, i);
	
	spanCloseArray[i] = document.getElementById("close_"+i);
	var closeOnClick = function(node, i) {
		spanCloseArray[i].onclick = function() {
			node.style.display = "none";
		}
	}
	closeOnClick(node, i);
}