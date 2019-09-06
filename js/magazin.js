

//<editor-fold desc="productsTemplate">
const productsTemplate = `
<div class="col-md-12">
        <h1 class="text-center font-weight-bold mb-5">
            Vinuri
        </h1>

        <h2 class="text-center font-weight-bold mb-5" id="no_products_label" style="display: none">
            Nici-un produs in aceasta categorie
        </h2>
    </div>
{{#products}}
<div class="col-md-4 p-3 shop_item" data-category-id="{{category_id}}" data-subcategory-id="{{subcategory_id}}">
    <a href="produs.html?product_code={{product_code}}" class="">
        <div class="text-center ">
            <img class="img-fluid" src="{{image}}" alt="" style="max-height: 300px">
        </div>
        <h3 class="font-weight-bold text-center pt-3">
            {{name}}
        </h3>
        <h3 class="font-weight-bold text-center" style="color:#9C2A30">
            
            {{price}} <small class="text-gray" style="text-decoration: line-through">{{priceBeforeDiscount}}</small>
        </h3>
       
    </a>

    <div class=" row pt-1">
        <div class="col-md-9 pr-0">
            <div class="button red font-weight-bold" style="width:100%">
                <a href="javascript:void(0);" onclick="onAddToCart({{product_code}})">
                    Vizualizeaza
                </a>
            </div>
        </div>
        <div class="col-md-3 pl-1">
            <div class="button red font-weight-bold" style="width:100%">
                <a href="javascript:void(0);" onclick="onAddToCart({{product_code}})">
                    <i class="fa fa-cart-plus" aria-hidden="true"></i>

                </a>
            </div>
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

            {{#categories}}
            <div class="accordion d-flex flex-row align-items-center active">
                {{name}}
            </div>
            <div class="accordion_panel pl-4 pt-2 ml-3" style="max-height: 260px;display: block">
                <div class="row">
                    <a href="javascript:void(0);" onclick="onSelectSubcategory(this,-1,{{category_id}})"
                       class="col-md-12">
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
        <img class="img-fluid" src="{{productDetail.image}}" alt="" style="max-height: 150px">
    </td>
    <td style="width:40%" class="hidden-sm-up text-center">
        <img class="img-fluid" src="{{productDetail.image}}" alt="" style="max-height: 150px">
    </td>
    <td class="hidden-sm-up">
        <div class=" ">
            <h4>{{productDetail.name}}</h4>
            <h4>{{productDetail.price}} Lei</h4>
            <label>
                Cantitate
                <input type="number" data-product-code="{{product_code}}" class="product_quantity_picker my-2" name="quantity" min="1" max="100" value="{{quantity}}" style=" font-size: 1rem; line-height:2rem;text-align: center ">

            </label>
            <h4>{{total}} Lei</h4>
        </div>

    </td>


    <td style="vertical-align: middle" class="hidden-sm-down text-center">
        <h4>{{productDetail.name}}</h4>

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
        <a href="javascript:void(0)" onclick="removeItemFromCart({{product_code}})">
            <i class="fa fa-trash-o" style="font-size:1.7rem" aria-hidden="true"></i>
        </a>

    </td>

</tr>
{{/items}}

`;


//</editor-fold>


let productsData = {
    products: [
        {
            product_code: 100001,
            category_id: 1000,
            subcategory_id: 1001,
            name: "Vin Rosu Grivin",
            shortDescription:"Demisec | 75 cl | Dealu Mare, Romania",
            longDescription:`Acest vin roșu este un cupaj nobil de Merlot, Cabernet Sauvignon și
                            Syrah, fiind rezultatul unei meticuloase imbinari a muncii în podgorie
                            și în crama.
                            <br>
                            <br>
                            Acest vin este bogat, fervent și elegant. Cu o culoare intensa, mirosul
                            este complex, cu indicii de fructe coapte si condimente, ardei, cuișoare
                            și un strop de vanilie dulce, are un gust plin și bine structurat cu
                            taninuri usor mătăsoase. Se recomanda savurarea lui la o temperatura
                            intre 18 si 20 de grade Celsius.`,
            priceBeforeDiscount:'100.00',
            price: '75.00',
            subdescription:"13.5%",
            in_stock: true,
            image: "img/produse/grivin_red.png"
        },
        {
            product_code: 100002,
            category_id: 1000,
            subcategory_id: 1002,
            name: "Vin Rose Grivin",
            shortDescription:"Demisec | 75 cl | Dealu Mare, Romania",
            longDescription:`Acest vin roșu este un cupaj nobil de Merlot, Cabernet Sauvignon și
                            Syrah, fiind rezultatul unei meticuloase imbinari a muncii în podgorie
                            și în crama.
                            <br>
                            <br>
                            Acest vin este bogat, fervent și elegant. Cu o culoare intensa, mirosul
                            este complex, cu indicii de fructe coapte si condimente, ardei, cuișoare
                            și un strop de vanilie dulce, are un gust plin și bine structurat cu
                            taninuri usor mătăsoase. Se recomanda savurarea lui la o temperatura
                            intre 18 si 20 de grade Celsius.`,
            priceBeforeDiscount:'100.00',
            price: '75.00',
            subdescription:"13.5%",
            in_stock: true,
            image: "img/produse/grivin_rose.png"
        },
        {
            product_code: 100003,
            category_id: 1000,
            subcategory_id: 1003,
            name: "Vin Alb Grivin",
            shortDescription:"Demisec | 75 cl | Dealu Mare, Romania",
            longDescription:`Acest vin roșu este un cupaj nobil de Merlot, Cabernet Sauvignon și
                            Syrah, fiind rezultatul unei meticuloase imbinari a muncii în podgorie
                            și în crama.
                            <br>
                            <br>
                            Acest vin este bogat, fervent și elegant. Cu o culoare intensa, mirosul
                            este complex, cu indicii de fructe coapte si condimente, ardei, cuișoare
                            și un strop de vanilie dulce, are un gust plin și bine structurat cu
                            taninuri usor mătăsoase. Se recomanda savurarea lui la o temperatura
                            intre 18 si 20 de grade Celsius.`,
            priceBeforeDiscount:'100.00',
            price: '75.00',
            subdescription:"13.5%",
            in_stock: true,
            image: "img/produse/grivin_white.png"
        },
    ]
};



//<editor-fold desc="Shop region">
const categoriesData ={
    categories: [{
        name: "Vinuri",
        category_id: 1000,
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
                id: 2001,
                subcategory: "Pictura"
            },
            {
                id: 2002,
                subcategory: "Fotografii Vintage"
            },
            {
                id: 2003,
                subcategory: "Muzica"
            },
            {
                id: 2004,
                subcategory: "Sculpturi"
            },
        ]
    }
    ]
};

function populateProductList() {
    let template = productsTemplate;
    Mustache.parse(template);
    let rendered = Mustache.render(template, productsData);
    $('#products_container').html(rendered);
}
function populateFilters() {
    let template = filtersTemplate;
    Mustache.parse(template);
    let rendered = Mustache.render(template, categoriesData);
    $('#filters_container').html(rendered);
}
function onSelectSubcategory(button, subcategory_id, category_id) {

    let noProductsLabel = $("#no_products_label");
    $(noProductsLabel).hide();
    $(".according_active").removeClass("according_active");

    $(button).addClass("according_active");

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
}
//</editor-fold>


//<editor-fold desc="Product page">



function initProductPage(){
    let productCode = getParameterByName('product_code');
    if(productCode===null){
        alert("Produs inexistent");
        return;
    }
    let currentProduct = productsData.products.filter((product)=>product.product_code.toString()===productCode.toString())[0];
    if(currentProduct===undefined){
        alert("Produs inexistent");
        return;
    }
    let productName = $("#product_name");
    let shortDescription = $("#short_description");
    let subdescription = $("#subdescription");
    let price = $("#price");
    let discountedFrom = $("#discounted_from");
    let longDescription = $("#long_description");
    let productImage = $("#product_image");
    let addProductToCart = $("#add_product_to_cart_button");
    let productQuantityPicker = $(".product_quantity_picker");

    $(productName).text(currentProduct.name);
    $(shortDescription).text(currentProduct.shortDescription);
    $(longDescription).html(currentProduct.longDescription);
    $(subdescription).html(currentProduct.subdescription);
    $(price).html(currentProduct.price);
    $(discountedFrom).html(currentProduct.priceBeforeDiscount);
    $(productImage).attr('src',currentProduct.image);
    $('.blur-5').removeClass('blur-5');

    $(addProductToCart).on('click', function(){
        addItemToCart(productCode,$(productQuantityPicker).val());
    })



}




//</editor-fold>


//<editor-fold desc="Cart">

$(document).ready(function() {
    if(Cookies.get('cart')===undefined){
        Cookies.set('cart',{items:[]});
    }
});

function addItemToCart(productCode, quantity) {

    alert("ADDINT ITEM TO CART " + productCode + "x" + quantity);
    let currentCart = getCart();

    let itemExists = false;
    currentCart.items.forEach(itemInCart=>{
       if(itemInCart.product_code===productCode){
           itemInCart.quantity = parseInt(itemInCart.quantity)+parseInt(quantity);
           itemExists=true;
       }
    });

    if(!itemExists)
        currentCart.items.push({product_code:productCode,quantity:quantity});

    Cookies.set('cart',currentCart);

}


function removeItemFromCart(productCode){


    let currentCart = getCart();
    currentCart.items = currentCart.items.filter(item=>item.product_code.toString()!==productCode.toString());
    console.log(currentCart);


    /*
    let response = confirm("Sunteti siguri ca vreti sa stergeti produsul din cos?");
    if (response !== true)
        return;
    */


    Cookies.set('cart',currentCart);
    redrawCart();
}


function getCart(){
    return JSON.parse(Cookies.get('cart'));
}

function getItemByCode(productCode){
    return productsData.products.filter((product)=>product.product_code.toString()===productCode.toString())[0];
}

function updateCartQuantity(productCode,newQuantity){
    let cart = getCart();
    cart.items.forEach(item=>{
        if( item.product_code.toString() === productCode.toString()){
            item.quantity = newQuantity;
        }
    });
    Cookies.set('cart',cart);
    redrawCart()
}

function redrawCart(){
    let cart = getCart();




    console.log(cart.helper);

    let emptyCart = $("#empty_cart");

    if(cart.items.length<1){
        emptyCart.show();
    }else{
        emptyCart.hide()
    }

    cart.items.forEach((item)=>{
        let product = getItemByCode(item.product_code);
        if(product!==undefined) {
            item.total = (parseInt(product.price)*item.quantity).toFixed(2);
            item.productDetail = product;

            item.helper=[...Array(100).keys()];
            item.helper.splice(0,1);
            item.helper= item.helper.map(x=>{
                return {value:x,selected:x==item.quantity}
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
    $(".quantity_picker").on('change', function(){
        let productCode = $(this).data("product-code");
        let newVal = $(this).val();
        updateCartQuantity(productCode,newVal);
        console.log(productCode,newVal);
    });

    let total = 0;
    cart.items.forEach(item=>{
       total+= parseInt(item.total);

    });

    $("#cart-total").html(total.toFixed(2) + " Lei ");

}

var typingTimer;
var doneTypingInterval = 500;

function initCart(){
    redrawCart();

    let cartNoteTextarea = $("#cart-note-textarea");
    cartNoteTextarea.text(Cookies.get('note')?Cookies.get('note'):'');
    $(cartNoteTextarea).keyup(function(){
        clearTimeout(typingTimer);
        if ($('#cart-note-textarea').val()) {
            typingTimer = setTimeout(updateNoteInCookie, doneTypingInterval);
        }
    });

}

function updateNoteInCookie(){
    //alert("UPDATE")
    Cookies.set('note',$("#cart-note-textarea").val());
}

function continueToCheckout(){
    updateNoteInCookie();
}

//</editor-fold>