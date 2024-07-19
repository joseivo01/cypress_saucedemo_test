module.exports = {
    generic_price_label: '.inventory_item_price',
    generic_name_item: '.inventory_item_name',

    error_message: 'form > h3[data-test="error"]',

    hamburguer_button: 'div.bm-burger-button',
    home_all_item_button: '#inventory_sidebar_link',
    to_about_page_button: '#about_sidebar_link',
    logout_button: '#logout_sidebar_link',
    rest_app_button: '#reset_sidebar_link',
    close_hamburguer_btn: 'div.bm-cross-button',

    // General login elements:
    user_name_input: '#user-name',
    password_input: '#password',

    login_btn: '#login-button',

    // General home elements:
        // before seach a closest button
    inventory_item_name: (item_name) => { return `.inventory_list > .inventory_item > .inventory_item_label > a > div:contains("${item_name}")`},
    first_inventory_item: '.inventory_item:first',
    inventory_itens: '.inventory_item',

    add_cart_home_page_button: '.pricebar > button.btn_inventory:contains("ADD TO CART")',
    remove_cart_home_page_button: '.pricebar > button.btn_inventory:contains("REMOVE")',

    order_select_button: '.product_sort_container', //using .select  to selct an option .select('Name (A to Z)'

    my_cart_button: 'svg[data-icon="shopping-cart"]',
    element_on_cart: 'span.shopping_cart_badge',

    // General item page:
   item_name: '.inventory_details_desc_container > .inventory_details_name',
   item_description: '.inventory_details_desc_container > .inventory_details_desc',
   item_price: '.inventory_details_desc_container > .inventory_details_price',

   add_item_to_cart: '.inventory_details_desc_container > .btn_inventory:contains("ADD TO CART")',
   remove_item_to_cart: '.inventory_details_desc_container > .btn_inventory:contains("REMOVE")',
   back_button: '.inventory_details > button.inventory_details_back_button:contains("Back")',

    // General checkout page:
    cart_item_name: (item_name) => { return `.cart_item > .cart_item_label > a > div:contains("${item_name}")`},
    cart_item_remove_button: '.cart_item > .cart_item_label > .item_pricebar > .cart_button:contains("REMOVE")',

    header_infor_text: 'div.subheader',

    continue_shopping_button: '.cart_footer > a.btn_secondary:contains("Continue Shopping")',
    checkout_button: '.cart_footer > a.checkout_button:contains("CHECKOUT")',

        // note: i was worked on project that have more than one element with same ID
    first_name_input: '.checkout_info > #first-name',
    last_name_input: '.checkout_info > #last-name',
    postal_code_input: '.checkout_info > #postal-code',

    cancel_check_button: '.checkout_buttons > a.cart_cancel_link',
    continue_check_button: '.checkout_buttons > input[value="CONTINUE"]',

        // Do the mathematics, to verify a taxes of total value.
    total_item_field: 'summary_subtotal_label',
    tax_item_field: 'summary_tax_label',
    total_with_tax_item_field: 'summary_total_label',

    cancel_button: '.cart_footer > a.cart_cancel_link:contains("CANCEL")',
    finish_button: '.cart_footer > a.cart_button:contains("FINISH")',

    complete_message: '#checkout_complete_container > h2.complete-header',
    complete_message_text: '#checkout_complete_container > div.complete-text',
}