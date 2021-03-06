document.addEventListener("DOMContentLoaded", function () {
    console.log("Loaded");


//events


    const options_visible = document.getElementById("options_visible");
    const basic = document.getElementById("basic");
    const professional = document.getElementById("professional");
    const premium = document.getElementById("premium");
    const products_quantity = document.getElementById("products_quantity");
    const estimated_orders = document.getElementById("estimated_orders");
    const choose_package = document.getElementById("choose_package");
    const package_option = document.getElementById("package");
    const package_sum = document.getElementById("package_sum");
    const sum = document.getElementById("sum");
    const total = document.getElementById("total");
    let sum_1 = 0;
    let sum_2 = 0;
    let sum_3 = 0;
    let sum_4 = 35;
    let sum_5 = 5;

    choose_package.addEventListener("click", function () {
        options_visible.classList.toggle("show");
    });


    basic.addEventListener("click", function () {
        options_visible.classList.toggle("show");
        package_option.value = "Basic";
        package_option.innerText = "Basic";
        package_sum.innerText = '$0';
        sum_3 = 0;
        total.innerText = '$' + (sum_1 + sum_2 + sum_3 + sum_4 + sum_5);
    });

    professional.addEventListener("click", function () {
        options_visible.classList.toggle("show");
        package_option.value = "Professional";
        package_option.innerText = "Professional";
        package_sum.innerText = '$25';
        sum_3 = 25;
        total.innerText = '$' + (sum_1 + sum_2 + sum_3 + sum_4 + sum_5);
    });
    premium.addEventListener("click", function () {
        options_visible.classList.toggle("show");
        package_option.value = "Premium";
        package_option.innerText = "Premium";
        package_sum.innerText = '$60';
        sum_3 = 60;
        total.innerText = '$' + (sum_1 + sum_2 + sum_3 + sum_4 + sum_5);
    });



    const accounting = document.getElementById("accounting");
    const rental = document.getElementById("rental");

    const products = document.getElementById("products");
    const products_sum = document.getElementById("products_sum");

    const orders = document.getElementById("orders");
    const orders_sum = document.getElementById("orders_sum");
    const accounting_sum = document.getElementById("accounting_sum");


//calculation
    products_quantity.addEventListener("click", function () {
        products.innerText = `${Math.abs(this.value)} * $2`;
        products_sum.innerText = '$' + Math.abs(this.value * 2);
        sum_1 = Math.abs(this.value * 2);
        total.innerText = '$' + (sum_1 + sum_2 + sum_3 + sum_4 + sum_5);
    });

    estimated_orders.addEventListener("click", function () {
        orders.innerText = `${Math.abs(this.value)} * $5`;
        orders_sum.innerText = '$' + Math.abs(this.value * 5);
        sum_2 = Math.abs(this.value * 5);
        total.innerText = '$' + (sum_1 + sum_2 + sum_3 + sum_4 + sum_5);
    });


    accounting.addEventListener("click", function () {
        if (this.checked) {
            accounting_sum.innerText = `$35`;
            sum_4 = 35;
            total.innerText = '$' + (sum_1 + sum_2 + sum_3 + sum_4 + sum_5);
        } else {
            accounting_sum.innerText = `$0`;
            sum_4 = 0;
            total.innerText = '$' + (sum_1 + sum_2 + sum_3 + sum_4 + sum_5);
        }
    });
    rental.addEventListener("click", function () {
        if (this.checked) {
            sum.innerText = `$5`;
            sum_5 = 5;
            total.innerText = `$${sum_1 + sum_2 + sum_3 + sum_4 + sum_5}`;
        } else {
           sum.innerText = `$0`;
            sum_5 = 0;
            total.innerText = '$' + (sum_1 + sum_2 + sum_3 + sum_4 + sum_5);
        }
    });

});