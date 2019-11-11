console.log("It's linked!");
let add_cart = document.querySelectorAll('button.add-to-cart');
let buy_item = document.querySelectorAll('buy-item');
let item_names = document.querySelectorAll('p.item-name');
let item_prices = document.querySelectorAll('span.price-span');
let check_out = document.querySelectorAll('.check-out-btn');
let check_out_modal = document.querySelector('.custom-modal');
let modal_close_btn = document.querySelector('.closebtn')
let items_list = document.querySelector('.cart-list');
let emptyCartAlert = document.querySelector('.empty-cart-alert');
let cart_size= document.querySelector(".cart-size")



modal_close_btn.onclick = () => {
	check_out_modal.style.display ="none";
	check_out_modal.style.zIndex ="0"
}

function getPricesFromTag(item) {  
	if (item.includes("N") || item.includes(",")) {
		let string_value = 
			item.substr(item.indexOf("N")+1, item.indexOf(",")-1) +
			item.substr(item.indexOf(",")+1,item.length);
		let number_value = parseInt(string_value);
		return number_value;
	}
	else {
		console.log("It's not properly getting the price");
	}
}
function displayModal(modal_variable) {
	modal_variable.style.display ="table";
	modal_variable.style.position ="absolute";
	modal_variable.style.zIndex ="1000";
}

let total_cost = 0;
let total_cart = 0;
for (let i=0;i<add_cart.length;++i) {
	let eachItem = add_cart[i];
	eachItem.number = 0;
	eachItem.name = item_names[i].innerText;
	eachItem.price = getPricesFromTag(item_prices[i].innerText);
	eachItem.htmlElement;
	eachItem.onclick = () => {
		++eachItem.number;
		++cart_size.innerText
		// ca
		console.log(cart_size)
		eachItem.quantity_price = 
			eachItem.number * eachItem.price;
		total_cost += eachItem.price;
		++total_cart;
		if (eachItem.number ==1) {
			eachItem.htmlElement = document.createElement('li')
			eachItem.htmlElement.innerText = 
				eachItem.name + " x " + eachItem.number + " = ₦" +
				eachItem.quantity_price;
			eachItem.htmlElement.className = "list-group-item";
			items_list.appendChild(eachItem.htmlElement);
		}else if (eachItem.number >1) {
			eachItem.htmlElement.innerText = 
				eachItem.name + " x " + eachItem.number + " = ₦" +
				eachItem.quantity_price;
		}
		
	}
	
}

let total_number_htmlElement = document.createElement('li');
let total_cost_htmlElement = document.createElement('li');
for(let i =0;i<check_out.length;++i) {
	check_out[i].onclick = () => {
		displayModal(check_out_modal);
		if (total_cart == 0) {
			emptyCartAlert.style.display = "block";
			
		}else {
			emptyCartAlert.style.display = "none";
			
			if (total_cart >0) {
				total_number_htmlElement.innerText = "Number of Items: " +
					(total_cart);
				total_number_htmlElement.className = "list-group-item";
				items_list.appendChild(total_number_htmlElement);

				total_cost_htmlElement.innerText = "Cost of Items: " + " = ₦" +
					total_cost;
				total_cost_htmlElement.className = "list-group-item text-red-alt";
				items_list.appendChild(total_cost_htmlElement);
			}
			
		}
	}
}

