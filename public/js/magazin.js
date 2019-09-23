const costTransportBucuresti = 14.99;
const costTransportTara = 19.99;


const categoriesData = {
    categories: [{
        name: "Vinuri",
        category_id: 1000,
        active:true,
        subcategories: [
            {
                id: 1001,
                subcategory: "Rosu"
            },
            {
                id: 1002,
                subcategory: "Rose"
            },
            {
                id: 1003,
                subcategory: "Alb"
            },
        ]
    }, {
        name: "Arta",

        category_id: 2000,
        subcategories: [
            {
                id: 2006,
                subcategory: "Albume Arta"
            },
            {
                id: 2001,
                subcategory: "Pictura"
            },
            {
                id: 2002,
                subcategory: "Fotografie Vintage"
            },
            {
                id: 2003,
                subcategory: "Muzica Vinyl"
            },
            {
                id: 2004,
                subcategory: "Muzica CD"
            },
            {
                id: 2005,
                subcategory: "Sculptura"
            },
        ]
    }
    ]
};

/*
let productsData = {
    products: [
        {
            product_code: 100001,
            category_id: 1000,
            subcategory_id: 1001,
            name: "GRIVIN Rosu",
            shortDescription: "Sec | 75 cl | Mehedinti, Romania",
            longDescription: `Acest vin rosu este un cupaj nobil de Merlot, Cabernet Sauvignon si
                            Syrah, fiind rezultatul unei meticuloase imbinari a muncii in podgorie
                            si in crama.
                            <br>
                            <br>
                            Acest vin este bogat, fervent si elegant. Cu o culoare intensa, mirosul
                            este complex, cu indicii de fructe coapte si condimente, ardei, cuisoare
                            si un strop de vanilie dulce, are un gust plin si bine structurat cu
                            taninuri usor matasoase. Se recomanda savurarea lui la o temperatura
                            intre 18 si 20 de grade Celsius.`,
            priceBeforeDiscount: '',
            price: '64.00',
            subdescription: "13.5%",
            in_stock: true,
            image: "img/produse/grivin_red.png"
        },
        {
            product_code: 100002,
            category_id: 1000,
            subcategory_id: 1002,
            name: "GRIVIN Rose",
            shortDescription: "Sec | 75 cl | Mehedinti, Romania",
            longDescription: `Cu o culoare roz deschis, vinul nostru ofera un buchet intens de fructe rosii si fructe de padure, cu o nota predominanta clara de capsuni.<br>Aroma este proaspata, cu o aciditate placuta si un finisaj aromatic fructat.<br>Se recomanda savurarea lui la o temperatura intre 10 si 14 grade Celsius.`,
            priceBeforeDiscount: '',
            price: '54.00',
            subdescription: "13.5%",
            in_stock: true,
            image: "img/produse/grivin_rose.png"
        },
        {
            product_code: 100003,
            category_id: 1000,
            subcategory_id: 1003,
            name: "GRIVIN Alb",
            shortDescription: "Sec | 75 cl | Mehedinti, Romania",
            longDescription: `Este un vin floral, cu note de tei, salcam si caprifoi. Gurmand si plin, lasa o savoare unica, cu o aciditate placuta si usoara, iti va oferi toata bogatia sa aromata daca il savurezi la o temperatura intre 10 si 14 grade Celsius.
                            `,
            priceBeforeDiscount: '',
            price: '54.00',
            subdescription: "13.5%",
            in_stock: true,
            image: "img/produse/grivin_white.png"
        },
    ]
};
*/

let productsData = PRODUSE;


//<editor-fold desc="productsTemplate">
const productsTemplate = `
<div class="col-md-12">
    

        <h2 class="text-center font-weight-bold mb-5" id="no_products_label" style="display: none">
            Catalog la <a href="contact.html"> cerere </a>
        </h2>
    </div>
{{#products}}
<div class="col-md-4 p-3 shop_item" data-category-id="{{category_id}}" data-subcategory-id="{{subcategory_id}}">
    <a href="produs.html?product_code={{product_code}}" class="">
        <div class="text-center" style="min-height:250px">
            <img class="img-fluid" src="img/produse/{{image}}" alt="" style="max-height:250px;">
        </div>
        <div  style="min-height:120px">
                <h3 class="font-weight-bold text-center pt-3">
                    {{name}}
                </h3>
        </div>
        
        <h3 class="font-weight-bold text-center" style="color:#9C2A30">
            
            {{priceFormatted}} <small class="text-gray" style="text-decoration: line-through">{{priceBeforeDiscount}}</small>
        </h3>
        <h5 class=" text-center text-gray">
            
          <!--  ( {{priceWithoutVAT}} fara TVA )-->
          (TVA inclus)
        </h5>
       
    </a>

    <div class=" row pt-1">
        <div class="col-md-12 col-lg-9 pr-lg-0">
            <div class="button red font-weight-bold" style="width:100%">
                <a href="produs.html?product_code={{product_code}}">
                    Vizualizeaza
                </a>
            </div>
        </div>
        <div class="col-md-3 pl-lg-1  hidden-md-down">
             {{#inStock}}
                <div class="button red font-weight-bold" style="width:100%">
                     <a href="javascript:void(0);" onclick="addItemToCart('{{product_code}}',1)">
                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                     </a>
                </div>
             {{/inStock}}
             {{^inStock}}
                <div class="button gray font-weight-bold" style="width:100%">
                     <a href="javascript:void(0);" >
                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                     </a>
                </div>
             {{/inStock}}
        </div>

    </div>


</div>
{{/products}}
`;
//</editor-fold>

//<editor-fold desc="filtersTemplate">
const filtersTemplate = `
 <div class="accordions">

        <!-- Accordion -->
        <div class="accordion_container">

            <h3>Filtre</h3>
            
            
            
            {{#categories}}
                {{#active}}
                <div class="accordion d-flex flex-row align-items-center active">
                {{/active}}
                {{^active}}
                <div class="accordion d-flex flex-row align-items-center ">
                {{/active}}
    
                    {{name}}
                </div>
                {{#active}}
                <div class="accordion_panel pl-4 pt-2 ml-3" style="max-height: 260px;display: block">
                {{/active}}
                {{^active}}
                <div class="accordion_panel pl-4 pt-2 ml-3" style="max-height: 260px;display: none">
                {{/active}}
                    <div class="row">
                        <a href="javascript:void(0);" onclick="onSelectSubcategory(this,-1,{{category_id}})"
                           class="col-md-12 according_active">
                            <h4 class="hover-red accordion-option">Toate</h4>
                        </a>
                    </div>
                    {{#subcategories}}
                    <div class="row  ">
                        <a href="javascript:void(0);" onclick="onSelectSubcategory(this,{{id}},{{category_id}})"
                           class="col-md-12 ">
                            <h4 class=" hover-red accordion-option">{{subcategory}}</h4>
                        </a>
                    </div>
                    {{/subcategories}}
                </div>
            </div>
            {{/categories}}

    </div>
`;
//</editor-fold>

//<editor-fold desc="cartItemTemplate">
const cartItemTemplate = `

{{#items}}
<tr class="" style="border-bottom:1px solid #c3c3c3">
    <td class="hidden-sm-down text-center">
         <a href="produs.html?product_code={{product_code}}">
            <img class="img-fluid" src="img/produse/{{productDetail.image}}" alt="" style="max-height: 100px">
        </a>
    </td>
    <td style="width:40%" class="hidden-md-up text-center">
        <img class="img-fluid" src="img/produse/{{productDetail.image}}" alt="" style="max-height: 150px">
    </td>
    <td class="hidden-md-up">
        <div class=" ">
        
            <h4>
                <a href="produs.html?product_code={{product_code}}">
                    {{productDetail.name}}
                </a>
            </h4>
            <h4>{{productDetail.price}} Lei</h4>
            <label>
                Cantitate
                   <select data-product-code="{{product_code}}"   class="js-example-basic-single form-control quantity_picker" name="state">
                                {{#helper}}
                                      
                                {{#selected}} 
                                <option selected value="{{value}}">{{value}}</option>
                                {{/selected}}
                                
                                
                                {{^selected}} 
                                 <option value="{{value}}">{{value}}</option>
                                {{/selected}}
                                
                                {{/helper}}

                            </select>
            </label>
            <h4>{{total}} Lei</h4>
            <a href="javascript:void(0)" onclick="removeItemFromCart('{{product_code}}')">
                <i class="fa fa-trash-o" style="font-size:1.7rem" aria-hidden="true"></i>
            </a>
        </div>

    </td>


    <td style="vertical-align: middle" class="hidden-sm-down text-center">
        <h4><a href="produs.html?product_code={{product_code}}">{{productDetail.name}}</a></h4>

    </td>

    <td style="vertical-align: middle" class="hidden-sm-down text-center" >
        <h3>{{productDetail.price}} Lei</h3>

    </td>
    <td style="vertical-align: middle" class="hidden-sm-down text-center">
    
    <select data-product-code="{{product_code}}"   class="js-example-basic-single form-control quantity_picker" name="state">
                                {{#helper}}
                                      
                                {{#selected}} 
                                <option selected value="{{value}}">{{value}}</option>
                                {{/selected}}
                                
                                
                                {{^selected}} 
                                 <option value="{{value}}">{{value}}</option>
                                {{/selected}}
                                
                                {{/helper}}

                            </select>
        <!--
        <input type="number" data-product-code="{{product_code}}" class="product_quantity_picker" name="quantity" min="1" max="100" value="{{quantity}}">
        -->
    </td>
    <td style="vertical-align: middle" class="hidden-sm-down text-center">
        <h3>{{total}} Lei</h3>

    </td>
    <td style="vertical-align: middle" class="hidden-sm-down text-center">
        <a href="javascript:void(0)" onclick="removeItemFromCart('{{product_code}}')">
            <i class="fa fa-trash-o" style="font-size:1.7rem" aria-hidden="true"></i>
        </a>

    </td>

</tr>
{{/items}}

`;


//</editor-fold>

//<editor-fold desc="checkoutBasketItemTemplate">
const checkoutBasketItemTemplate = `

    <h2 class="text-center">
        Continut cos
    </h2>
    <table class="table borderless ">
        <tbody>
        {{#items}}
        <tr class="" style="border-bottom:1px solid #eeeeee">
            <td class="hidden-sm-down text-center">
                <img class="img-fluid" src="img/produse/{{productDetail.image}}" alt="" style="max-height: 70px">
            </td>
            <td style="width:40%" class="hidden-md-up text-center">
                <img class="img-fluid" src="img/produse/{{productDetail.image}}" alt="" style="max-height: 70px">
            </td>
            <td class="hidden-md-up">
                <div class=" ">
                    <h5>{{productDetail.name}}</h5>
                    <h5>x{{quantity}}</h5>
                    <h5>{{total}} Lei</h5>
                </div>

            </td>


            <td style="vertical-align: middle" class="hidden-sm-down text-center">
                <h4>{{productDetail.name}}</h4>
            </td>
            <td style="vertical-align: middle" class="hidden-sm-down text-center">
                <h4>x{{quantity}}</h4>
            </td>

            <td style="vertical-align: middle" class="hidden-sm-down text-right font-weight-bold">
                <h4>{{total}} Lei</h4>

            </td>


        </tr>
        {{/items}}
        </tbody>

    </table>

`;
//</editor-fold>


//<editor-fold desc="Shop region">

let currentCategory;
let currentSubcategory;

function loadCartBadge() {
    let value = 0;
    getCart().items.forEach(item => {
        value += parseInt(item.quantity);
    });
    value = (value < 1) ? 'Gol' : value;
    $("#shoping_cart_badge").html(`(${value})`)



}

function populateProductList() {
    let template = productsTemplate;

    productsData.products.forEach(product => {

        product.inStock = product.stoc > 0;

        product.priceWithoutVAT = withoutVAT(product.price).toFixed(2) +" Lei";

        if (!product.inStock) {
            product.priceFormatted = "Out of stock";
            product.priceWithoutVAT = ""
        }
        else
            product.priceFormatted = parseFloat(product.price).toFixed(2) + " Lei";


    });
    Mustache.parse(template);

    productsData.currentCategory = currentCategory;
    let rendered = Mustache.render(template, productsData);
    $('#products_container').html(rendered);
}

function populateFilters() {
    //categoriesData.categories[0].active=true;
    let template = filtersTemplate;
    Mustache.parse(template);
    let rendered = Mustache.render(template, categoriesData);
    $('#filters_container').html(rendered);


}

function onSelectSubcategory(button, subcategory_id, category_id) {

    currentCategory = categoriesData.categories.filter((category) => category.category_id === category_id)[0];


    let noProductsLabel = $("#no_products_label");
    $(noProductsLabel).hide();


    if(button) {
        $(".according_active").removeClass("according_active");
        $(button).addClass("according_active");
    }

    console.log(subcategory_id, category_id);
    let shopItems = $('.shop_item');
    $(shopItems).hide();

    let elements = $(`.shop_item[data-category-id="${category_id}"]`);
    if (subcategory_id >= 0) {
        elements = $(`.shop_item[data-category-id="${category_id}"][data-subcategory-id="${subcategory_id}"]`);
    }

    $(elements).show();
    if (elements.length < 1) {
        $(noProductsLabel).show();
    }

}

function initShopPage() {
    populateFilters();
    populateProductList();
    initAccordions()

    onSelectSubcategory(null,-1,categoriesData.categories[0].category_id);
}

//</editor-fold>


//<editor-fold desc="Product page">


function initProductPage() {
    let productCode = getParameterByName('product_code');
    if (productCode === null) {
        alert("Produs inexistent");
        return;
    }
    let currentProduct = productsData.products.filter((product) => product.product_code.toString() === productCode.toString())[0];
    if (currentProduct === undefined) {
        alert("Produs inexistent");
        return;
    }

    console.log(currentProduct);
    let productName = $("#product_name");
    let shortDescription = $("#short_description");
    let subdescription = $("#subdescription");
    let price = $("#price");
    let priceWithoutVat = $("#price_without_vat");
    let discountedFrom = $("#discounted_from");
    let longDescription = $("#long_description");
    let productImage = $("#product_image");
    let addProductToCart = $("#add_product_to_cart_button");
    let productQuantityPicker = $(".product_quantity_picker");

    $(productName).text(currentProduct.name);
    $(shortDescription).text(currentProduct.shortDescription);
    $(longDescription).html(currentProduct.longDescription);
    $(subdescription).html(currentProduct.subdescription);
    $(price).html(parseFloat(currentProduct.price).toFixed(2) + " Lei");
    //$(priceWithoutVat).html("(" + withoutVAT(currentProduct.price).toFixed(2) + " Lei fara TVA)");


    $(discountedFrom).html(currentProduct.priceBeforeDiscount);


    $(productImage).attr('src', 'img/produse/' + currentProduct.image);
    $('.blur-5').removeClass('blur-5');

    $(addProductToCart).on('click', function () {
        addItemToCart(productCode, $(productQuantityPicker).val());
    })


}


//</editor-fold>

function withoutVAT(withVAT){
    return (parseFloat(withVAT)/1.19)

}

//<editor-fold desc="Cart">

$(document).ready(function () {
    if (Cookies.get('cart') === undefined) {
        Cookies.set('cart', {items: []});
    }
    loadCartBadge()
});


function addItemToCart(productCode, quantity) {


    let currentCart = getCart();

    let itemExists = false;


    let product =getItemByCode(productCode);

    if(product.stoc==0)
        return;

    currentCart.items.forEach(itemInCart => {
        if (itemInCart.product_code === productCode) {
            let newQuantity = parseInt(itemInCart.quantity) + parseInt(quantity);

            if(newQuantity>product.stoc)
                newQuantity=product.stoc;

            if (newQuantity > 99)
                newQuantity = 99;
            itemInCart.quantity = newQuantity;

            itemExists = true;
        }
    });

    if (!itemExists)
        currentCart.items.push({product_code: productCode, quantity: quantity});

    Cookies.set('cart', currentCart);
    loadCartBadge();
}


function removeItemFromCart(productCode) {


    let currentCart = getCart();
    currentCart.items = currentCart.items.filter(item => item.product_code.toString() !== productCode.toString());
    console.log(currentCart);


    /*
    let response = confirm("Sunteti siguri ca vreti sa stergeti produsul din cos?");
    if (response !== true)
        return;
    */


    Cookies.set('cart', currentCart);
    redrawCart();
}


function getCart() {
    return JSON.parse(Cookies.get('cart'));
}

function getItemByCode(productCode) {
    return productsData.products.filter((product) => product.product_code.toString() === productCode.toString())[0];
}

function updateCartQuantity(productCode, newQuantity) {
    let cart = getCart();
    cart.items.forEach(item => {
        if (item.product_code.toString() === productCode.toString()) {
            item.quantity = newQuantity;
        }
    });
    Cookies.set('cart', cart);
    redrawCart()
}

function redrawCart() {
    let cart = getCart();


    if (cart.items.length < 1) {
        $("#go-to-checkout-button").attr("disabled", true);
    } else {
        $("#go-to-checkout-button").attr("disabled", false);

    }
    console.log(cart.helper);

    let emptyCart = $("#empty_cart");

    if (cart.items.length < 1) {
        emptyCart.show();
    } else {
        emptyCart.hide()
    }

    cart.items.forEach((item) => {
        let product = getItemByCode(item.product_code);
        if (product !== undefined) {
            item.total = (parseFloat(product.price) * item.quantity).toFixed(2);
            item.productDetail = product;
            console.log(product);

            item.helper = [...Array(Math.min(product.stoc + 1, 100)).keys()];


            item.helper.splice(0, 1);
            item.helper = item.helper.map(x => {
                return {value: x, selected: x == item.quantity}
            })


        }
        console.log(item);
    });


    console.log(cart);

    let template = cartItemTemplate;
    Mustache.parse(template);
    let rendered = Mustache.render(template, cart);
    $('#cart_item_container').html(rendered);


    $(".quantity_picker").off('change');
    $(".quantity_picker").on('change', function () {
        let productCode = $(this).data("product-code");
        let newVal = $(this).val();
        updateCartQuantity(productCode, newVal);
        console.log(productCode, newVal);
    });

    let total = 0;
    cart.items.forEach(item => {
        total += parseFloat(item.total);

    });

    $("#cart-total").html(total.toFixed(2) + " Lei ");

    loadCartBadge();

}

var typingTimer;
var doneTypingInterval = 500;

function initCart() {
    redrawCart();

    let cartNoteTextarea = $("#cart-note-textarea");
    cartNoteTextarea.text(Cookies.get('note') ? Cookies.get('note') : '');
    $(cartNoteTextarea).keyup(function () {
        clearTimeout(typingTimer);
        if ($('#cart-note-textarea').val()) {
            typingTimer = setTimeout(updateNoteInCookie, doneTypingInterval);
        }
    });

}

function updateNoteInCookie() {
    //alert("UPDATE")
    Cookies.set('note', $("#cart-note-textarea").val());
}

function continueToCheckout() {
    updateNoteInCookie();

    window.location.href = "checkout.html"
}

//</editor-fold>


//<editor-fold desc="Checkout">

let subtotal = 0;
let tempCart;

let deliveryType = "RAMBURS";

function initCheckout() {





    let checkoutState = $("#judet");


    $(checkoutState).on('change', updateCheckoutTotals);

    let checkoutBasketContainer = $("#checkout-basket-container");


    let currentCart = getCart();

    if (currentCart.items.length < 1)
        window.location.href = "magazin.html";

    console.log(currentCart);

    subtotal = 0;


    currentCart.items.forEach((item) => {
        let product = getItemByCode(item.product_code);


        if (product !== undefined) {
            item.total = (parseFloat(product.price) * item.quantity).toFixed(2);
            subtotal += parseFloat(product.price) * parseFloat(item.quantity);
            item.productDetail = product;

        }
        console.log(item);
    });


    tempCart = currentCart;


    let template = checkoutBasketItemTemplate;
    Mustache.parse(template);
    let rendered = Mustache.render(template, currentCart);
    $(checkoutBasketContainer).html(rendered);


    initCheckoutFormValidation();
    updateCheckoutTotals();



    $('input[type=radio][name=modalitate_de_plata]').change(function() {
        if(this.value==="RAMBURS" || this.value==="OP"){
            $('.hide-if-showroom').show();
        }else{
            $('.hide-if-showroom').hide();
        }

        deliveryType=this.value;
        updateCheckoutTotals();
    });

}

function initCheckoutFormValidation() {

    $.validator.addMethod("requiredIfNotShowroom", function(value, element) {
        if(deliveryType==="SHOWROOM")
            return true;
        else
            return value;
    }, "Campul acesta este obligatoriu");

    $('#address_form').validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            nume: "required",
            adresa: {
                requiredIfNotShowroom:true
            },
            judet: {
                requiredIfNotShowroom:true
            },
            oras: {
                requiredIfNotShowroom:true
            },
            telefon: {
                required: true,
                min: 9
            },
            email: {
                required: true,
                // Specify that email should be validated
                // by the built-in "email" rule
                email: true
            },

        },
        // Specify validation error messages
        messages: {
            nume: "Introduceti un nume",
            adresa: "Adresa este obligatorie pentru a putea plasa comanda",
            judet: "Trebuie sa selectati un judet",
            oras: "Orasul este obligatoriu",
            email: "Introduceti o adresa de email valida",
            telefon: "Introduceti un numar de telefon valid"
        },
        submitHandler: function (form) {
        }
    });

}


let costTransport;

function updateCheckoutTotals() {
    let subtotalText = $("#subtotal");
    let shippingText = $("#shipping");
    let totalText = $("#total");
    let vatText = $("#vat");


    costTransport = costTransportBucuresti;
    let checkoutState = $("#judet").val();
    if (checkoutState !== "Bucuresti" && checkoutState !== '') {
        costTransport = costTransportTara;
    }

    if(deliveryType==="SHOWROOM")
        costTransport = 0;



    $(subtotalText).html(subtotal.toFixed(2));

    $(totalText).html((subtotal + costTransport).toFixed(2));
    $(vatText).html((withoutVAT(subtotal + costTransport) ).toFixed(2));


    $(shippingText).html(costTransport.toFixed(2));


}


function MAKE_ORDER() {

    let checkoutEmail = $("#email");
    let checkoutFirstname = $("#nume");
    let checkoutLastname = $("#prenume");
    let checkoutAdress = $("#adresa");
    let checkoutState = $("#judet");
    let checkoutCity = $("#oras");
    let checkoutZipcode = $("#cod_postal");
    let checkoutPhoneNumber = $("#telefon");

    let order = {};
    order.produse = tempCart.items.map(item => {
        return {
            'Nume_Produs': item.productDetail.name,
            'Cod_Produs': item.product_code,
            'Cantitate': item.quantity,
            'Pret_final_vazut_de_client': item.productDetail.price,
            'Pret_discount_vazut_de_client': item.productDetail.priceBeforeDiscount,
            'Apare_in_stock': item.productDetail.in_stock
        };
    });
    order.valori = {
        'Cost_transport': costTransport.toFixed(2),
        'Subtotal_fara_transport': subtotal.toFixed(2),
        'Total': (subtotal + costTransport).toFixed(2),
        'FARA_TVA': (withoutVAT(subtotal,costTransport)).toFixed(2)
    };
    order.date_de_livrare = {
        'Plata':deliveryType,
        'Email': $(checkoutEmail).val(),
        'Nume': $(checkoutFirstname).val(),
        'Prenume': $(checkoutLastname).val(),
        'Adresa': $(checkoutAdress).val(),
        'Judet': $(checkoutState).val(),
        'Oras': $(checkoutCity).val(),
        'Cod_Postal': $(checkoutZipcode).val(),
        'Telefon': $(checkoutPhoneNumber).val(),
    };

    console.log(order);


    let isFormValid = $("#address_form").valid();


    order.note = Cookies.get('note');

    if (isFormValid) {
        postData('https://glacial-stream-75477.herokuapp.com/order', order)
            .then(data => {
                console.log(JSON.stringify(data));
                Cookies.set('cart', {items: []});
                Cookies.set('note', '');
                showOrderCompleteModal();
            })


    } else {
        alert("Datele nu au fost completate corect");
    }


}


let orderCompleteTimer = 10;

function showOrderCompleteModal() {
    let orderCompleteModal = $("#received_order_modal");

    $(orderCompleteModal).modal({
        backdrop: 'static',
        keyboard: false
    });
    $(orderCompleteModal).modal('show');


    let countdown = $("#countdown");

    setInterval(function () {
        {
            $(countdown).html(orderCompleteTimer);

            orderCompleteTimer--;
            if (orderCompleteTimer < 0) {
                window.location.href = 'magazin.html';
            }
        }
    }, 1000);

}


//</editor-fold>


//<editor-fold desc="Contact">

let recaptchaFilled = false;

function correctCaptcha() {
    recaptchaFilled = true;
}


function initContactPage() {


    $('#contact_form').validate({
        // Specify validation rules
        rules: {
            name: "required",
            subject: "required",
            message: "required",
            phone: {
                required: true,
                min: 9
            },
            email: {
                required: true,
                email: true
            },
        },
        messages: {
            name: "Introduceti un nume",
            subject: "Trebuie sa mentionati un subiect",
            message: "Trebuie sa mentionati un mesaj",
            email: "Introduceti o adresa de email valida",
            telefon: "Introduceti un numar de telefon valid"
        }
    });


    $("#contact_form").submit(function (event) {
        event.preventDefault();
        console.log('THIS');
        if (!recaptchaFilled) {
            $("#recaptcha_error").html("Bifati \"I'm not a robot\"");
            $("#recaptcha_error").show();
        } else if (!$('#contact_form').valid()) {
            console.log("FORM NOT VALID");
        } else {

            let data = {};
            let tmp = $("#contact_form").serializeArray();
            tmp.forEach(item => {
                data[item.name] = item.value;
            });

            //https://glacial-stream-75477.herokuapp.com/message
            //http://localhost:5000/message
            postData('https://glacial-stream-75477.herokuapp.com/message', data).then(data => {
                console.log(JSON.stringify(data));

                showMessageReceivedModal();
            })
        }
    });
}

let messageReceivedTimer = 10;


function showMessageReceivedModal() {
    let messageReceivedModal = $("#received_message_modal");

    $(messageReceivedModal).modal({
        backdrop: 'static',
        keyboard: false
    });
    $(messageReceivedModal).modal('show');


    let countdown = $("#countdown");

    setInterval(function () {
        {
            $(countdown).html(messageReceivedTimer);

            messageReceivedTimer--;
            if (messageReceivedTimer < 0) {
                window.location.reload();
            }
        }
    }, 1000);

}

//</editor-fold>

function postData(url, data) {
    // Default options are marked with *
    return fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, cors, *same-origin
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
}