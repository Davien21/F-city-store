modal_close_btn.onclick = () => {
	check_out_modal.style.display ="none";
	check_out_modal.style.zIndex ="0"
}
function displayModal(modal_variable) {
	modal_variable.style.display ="table";
	modal_variable.style.position ="absolute";
	modal_variable.style.zIndex ="1000";
}