document.addEventListener("DOMContentLoaded", function () {
    console.log("Loaded");

    const products_quantity = document.getElementById("products_quantity");
    const estimated_orders = document.getElementById("estimated_orders");
    const package_options = document.getElementById("package_options");


    const choose_package = document.getElementById("choose_package");

    const options_visible = document.getElementById("options_visible");
    const arrow = document.getElementById("arrow");

    const basic = document.getElementById("basic");
    const professional = document.getElementById("professional");
    const premium = document.getElementById("premium");

    const accounting = document.getElementById("accounting");
    const rental = document.getElementById("rental");

    const calc_products = document.getElementById("calc_products");
    const products_sum = document.getElementById("products_sum");

    const calc_orders = document.getElementById("calc_orders");
    const orders_sum = document.getElementById("orders_sum");

    const package_type_result = document.getElementById("package_type");
    const package_sum = document.getElementById("package_sum");
    const accounting_sum = document.getElementById("accounting_sum");
    const terminal_sum = document.getElementById("terminal_sum");
    const total_sum = document.getElementById("total_sum");

    const btn_basic = document.getElementById("btn_basic");
    const btn_professional = document.getElementById("btn_professional");
    const btn_premium = document.getElementById("btn_premium");

    let sum_1 = 0;
    let sum_2 = 0;
    let sum_3 = 0;
    let sum_4 = 35;
    let sum_5 = 5;

//calculation
    products_quantity.addEventListener("click", function () {
        calc_products.innerText = `${this.value} * $0.5`;
        products_sum.innerText = `$${(this.value * 0.5)}`;
        sum_1 = (this.value * 0.5);
        total_sum.innerText = `$${sum_1 + sum_2 + sum_3 + sum_4 + sum_5}`;
    });
    products_quantity.addEventListener("keyup", function () {
        calc_products.innerText = `${this.value} * $0.5`;
        products_sum.innerText = `$${(this.value * 0.5)}`;
        sum_1 = (this.value * 0.5);
        total_sum.innerText = `$${sum_1 + sum_2 + sum_3 + sum_4 + sum_5}`;
    });


    estimated_orders.addEventListener("click", function () {
        calc_orders.innerText = `${this.value} * $0.25`;
        orders_sum.innerText = `$${(this.value * 0.25)}`;
        sum_2 = (this.value * 0.25);
        total_sum.innerText = `$${sum_1 + sum_2 + sum_3 + sum_4 + sum_5}`;
    });
    estimated_orders.addEventListener("keyup", function () {
        calc_orders.innerText = `${this.value} * $0.25`;
        orders_sum.innerText = `$${(this.value * 0.25)}`;
        sum_2 = (this.value * 0.25);
        total_sum.innerText = `$${sum_1 + sum_2 + sum_3 + sum_4 + sum_5}`;
    });


    accounting.addEventListener("click", function () {
        if (this.checked) {
            accounting_sum.innerText = `$35`;
            sum_4 = 35;
            total_sum.innerText = `$${sum_1 + sum_2 + sum_3 + sum_4 + sum_5}`;
        } else {
            accounting_sum.innerText = `$0`;
            sum_4 = 0;
            totalSum.innerText = `$${sum_1 + sum_2 + sum_3 + sum_4 + sum_5}`;
        }
    });
    rental.addEventListener("click", function () {
        if (this.checked) {
            terminal_sum.innerText = `$5`;
            sum_5 = 5;
            total_sum.innerText = `$${sum_1 + sum_2 + sum_3 + sum_4 + sum_5}`;
        } else {
            terminal_sum.innerText = `$0`;
            sum_5 = 0;
            total_sum.innerText = `$${sum_1 + sum_2 + sum_3 + sum_4 + sum_5}`;
        }
    });

    //events
    choose_package.addEventListener("click", function () {
        options_visible.classList.toggle("show");
        arrow.classList.toggle("rotate");
    });

    basic.addEventListener("click", function () {
        options_visible.classList.toggle("show");
        arrow.classList.toggle("rotate");
        package_type.value = "Basic";
        choose_package.innerText = "";
        package_type_result.innerText = package_type.value;
        package_sum.innerText = '$0';
        sum_3 = 0;
        total_sum.innerText = `$${sum_1 + sum_2 + sum_3 + sum_4 + sum_5}`;
    });

    professional.addEventListener("click", function () {
        options_visible.classList.toggle("show");
        arrow.classList.toggle("rotate");
        package_type.value = "Professional";
        choose_package.innerText = "";
        package_type_result.innerText = package_type.value;
        package_sum.innerText = '$25';
        sum_3 = 25;
        total_sum.innerText = `$${sum_1 + sum_2 + sum_3 + sum_4 + sum_5}`;
    });
    premium.addEventListener("click", function () {
        options_visible.classList.toggle("show");
        arrow.classList.toggle("rotate");
        package_type.value = "Premium";
        choose_package.innerText = "";
        package_type_result.innerText = package_type.value;
        package_sum.innerText = '$60';
        sum_3 = 60;
        total_sum.innerText = `$${sum_1 + sum_2 + sum_3 + sum_4 + sum_5}`;
    });


    btn_basic.addEventListener("click", function () {
        package_type.value = "Basic";
        choose_package.innerText = "";
        package_type_result.innerText = package_type.value;
        package_sum.innerText = '$0';
        sum_3 = 0;
        total_sum.innerText = `$${sum_1 + sum_2 + sum_3 + sum_4 + sum_5}`;
    });
    btn_professional.addEventListener("click", function () {
        package_type.value = "Professional";
        choose_package.innerText = "";
        package_type_result.innerText = package_type.value;
        package_sum.innerText = '$25';
        sum_3 = 25;
        total_sum.innerText = `$${sum_1 + sum_2 + sum_3 + sum_4 + sum_5}`;
    });
    btn_premium.addEventListener("click", function () {
        package_type.value = "Premium";
        choose_package.innerText = "";
        package_type_result.innerText = package_type.value;
        package_sum.innerText = '$60';
        sum_3 = 60;
        total_sum.innerText = `$${sum_1 + sum_2 + sum_3 + sum_4 + sum_5}`;
    })


});