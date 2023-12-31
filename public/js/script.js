const moment = require('moment-timezone');

let selectedPaymentMethod = "applepay";
let selectedAction = "payment";

const baseJSON = {
    'pay': {
        "pnm_order_identifier": "82885779238",
        "pnm_payment_identifier": "768816060953",
        "site_order_identifier": "955580604",
        "site_customer_identifier": "955580604",
        "version": "3.0",
        "pnm_processing_fee": "3.28",
        "pnm_processing_fee_currency": "USD",
        "net_payment_amount": "254.96",
        "net_payment_currency": "USD",
        "payment_amount": "258.24",
        "payment_currency": "USD",
        "timestamp": "1698115702",
        "status": "payment",
        "pnm_withheld_amount": "3.28",
        "pnm_withheld_currency": "USD",
        "due_to_site_amount": "254.96",
        "due_to_site_currency": "USD",
        "due_to_parent_amount": "0.00",
        "due_to_parent_currency": "USD",
        "due_to_child_amount": "254.96",
        "due_to_child_currency": "USD",
        "standin": "false",
        "payment_timestamp": "2023-10-23 19:48:20 -0700",
        "order_payee_identifier": "S1690231311",
        "site_identifier": "S1690231311",
        "site_channel": "consumer",
        "pricing_schedule_name": "consumer",
        "ext_cshawaccountnumber": "76568727556779168",
        "ext_payer_label": "thirdparty",
        "ext_thirdpartypayer": "Franklin Thomas",
        "signature": "5c4a17b9475cb749c6f4986aa260c894d1ed68995ab16a4b4311f932fe470950"
    },
    'cancel': {
        "pnm_order_identifier": "89695248406",
        "pnm_payment_identifier": "510822450097",
        "site_order_identifier": "2999997",
        "site_customer_identifier": "2999997",
        "version": "3.0",
        "payment_amount": "415.47",
        "payment_currency": "USD",
        "timestamp": "1698115147",
        "standin": "false",
        "payment_timestamp": "2023-10-23 18:48:19 -0700",
        "order_payee_identifier": "S1690231311",
        "reverse_date": "2023-10-23",
        "reverse_amount": "415.47",
        "reverse_currency": "USD",
        "site_identifier": "S1690231311",
        "site_channel": "consumer",
        "pricing_schedule_name": "consumer",
        "ext_cshawaccountnumber": "30000199999981000",
        "ext_payer_label": "coborrower",
        "ext_thirdpartypayer": "Jason James",
        "signature": "adc24fe83902a96d46bb0f1c0cee3455b91a949af0cafff48fa61df9ffd953dd"
    },
    'chargeback': {
        "pnm_order_identifier": "89695248406",
        "pnm_payment_identifier": "466870639824",
        "site_order_identifier": "2999997",
        "site_customer_identifier": "2999997",
        "version": "3.0",
        "payment_amount": "23.28",
        "payment_currency": "USD",
        "timestamp": "1698114485",
        "standin": "false",
        "payment_timestamp": "2023-10-17 10:07:08 -0700",
        "order_payee_identifier": "S1690231311",
        "reverse_date": "2023-10-23",
        "reverse_amount": "23.28",
        "reverse_currency": "USD",
        "site_identifier": "S1690231311",
        "site_channel": "consumer",
        "pricing_schedule_name": "consumer",
        "ext_cshawaccountnumber": "30000199999981000",
        "ext_payer_label": "thirdparty",
        "ext_thirdpartypayer": "Terry Test",
        "signature": "dcc90954bdebec6800231e02462c0318fa4f473a7244a678fb6f315131282c83"
        },
    'refund': {
        "pnm_order_identifier": "89695248406",
        "pnm_payment_identifier": "510822450097",
        "site_order_identifier": "2999997",
        "site_customer_identifier": "2999997",
        "version": "3.0",
        "payment_amount": "415.47",
        "payment_currency": "USD",
        "timestamp": "1698115147",
        "standin": "false",
        "payment_timestamp": "2023-10-23 18:48:19 -0700",
        "order_payee_identifier": "S1690231311",
        "reverse_date": "2023-10-23",
        "reverse_amount": "415.47",
        "reverse_currency": "USD",
        "site_identifier": "S1690231311",
        "site_channel": "consumer",
        "pricing_schedule_name": "consumer",
        "ext_cshawaccountnumber": "30000199999981000",
        "ext_payer_label": "thirdparty",
        "ext_thirdpartypayer": "Terry Test",
        "signature": "adc24fe83902a96d46bb0f1c0cee3455b91a949af0cafff48fa61df9ffd953dd"
        },
    'return': {
        "pnm_order_identifier": "89695248406",
        "pnm_payment_identifier": "931412285840",
        "site_order_identifier": "2999997",
        "site_customer_identifier": "2999997",
        "version": "3.0",
        "payment_amount": "333.33",
        "payment_currency": "USD",
        "timestamp": "1698114461",
        "standin": "false",
        "payment_timestamp": "2023-10-23 18:57:52 -0700",
        "order_payee_identifier": "S1690231311",
        "reverse_date": "2023-10-23",
        "reverse_amount": "333.33",
        "reverse_currency": "USD",
        "site_identifier": "S1690231311",
        "site_channel": "consumer",
        "pricing_schedule_name": "consumer",
        "ext_cshawaccountnumber": "30000199999981000",
        "ext_payer_label": "thirdparty",
        "ext_thirdpartypayer": "Jason Jones",
        "signature": "7c1312419e46dd4c5d06a2b3753031bcee3cdbd0d811541b281ef4126b809a39"
        },
    'otpcreate': {
        "timestamp": "1698111840",
        "origin": "Consumer Flow",
        "site_customer_identifier": "2999997",
        "site_order_identifier": "2999997",
        "payee_identifier": "S1690231311",
        "pnm_order_identifier": "89695248406",
        "version": "3.0",
        "site_identifier": "S1690231311",
        "signature": "76790a393616d9d838977f988149510d8dcd65f4882ceb3e7f0c4464c9e1bffb",
        "one_time_pay_json": [
            {
            "identifier": "205639819292434",
            "amount": "415.47",
            "date": "2023-10-25 00:00:00 -0700",
            "agent_name": ""
            }
        ],
        "change_event": {
            "name": "consumer_schedule_one_time",
            "context": "205639819292434"
        }
    },
    'otpcancel': {
        "timestamp": "1698113720",
        "origin": "Consumer Flow",
        "site_customer_identifier": "2999997",
        "site_order_identifier": "2999997",
        "payee_identifier": "S1690231311",
        "pnm_order_identifier": "89695248406",
        "version": "3.0",
        "site_identifier": "S1690231311",
        "signature": "6d615d4baeafaf8fe520c35306e84011ae77faee16e13c1c4f954f13004cc2ed",
        "one_time_pay_json": [
            {
            "identifier": "782004814137910",
            "amount": "333.33",
            "date": "2023-10-26 00:00:00 -0700",
            "agent_name": ""
            }
        ],
        "change_event": {
            "name": "consumer_cancel_one_time",
            "context": "782004814137910"
        }
        }

};

function removeSelectedClassFromAllPaymentButtons() {
const allButtons = document.querySelectorAll(".paymentButton");
allButtons.forEach(button => {
    // Remove dynamic text color classes
    ["applepay", "googlepay", "debit", "venmo", "paypal", "sei", 
    "ach", "cvs", "ace", "caseys", "walmart", "dollargeneral", "walgreens"].forEach(type => {
        button.classList.remove(type + "-button");
    });
});
}

function removeSelectedClassFromAllActionButtons() {
const allButtons = document.querySelectorAll(".actionButton");
allButtons.forEach(button => {
    // Remove dynamic text color classes
    ["applepay", "googlepay", "debit", "venmo", "paypal", "sei", 
    "ach", "cvs", "ace", "caseys", "walmart", "dollargeneral", "walgreens"].forEach(type => {
        button.classList.remove(type + "-button");
    });
});
}

function removeDisabledClassFromAllButtons() {
const allButtons = document.querySelectorAll(".paymentButton, .actionButton");
allButtons.forEach(button => {
    button.classList.remove("disabled");
}); 
}


// Generate signature
function randomString(length) {
    let result = '';
    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function updateJSON(methodOrAction, clickedButton, type) {
    
    if (type === 'payment') {
        selectedPaymentMethod = methodOrAction;
    } else if (type === 'action') {
        selectedAction = methodOrAction;
    }
    let updatedJSON = { ...baseJSON[selectedAction] };

    if (clickedButton.classList.contains('paymentButton')) {
    removeSelectedClassFromAllPaymentButtons();
    clickedButton.classList.add(selectedPaymentMethod.toLowerCase() + "-button");
    
    // Update the Action button with the Payment button's class
    const buttonContainer = document.querySelector('.actionContainer');
    const actionButton = buttonContainer.querySelector('button[class*="-button"]');
    
    // If actionButton exists, remove the old class and add the new one
    if (actionButton) {
        // Remove the old class
        const classListArray = Array.from(actionButton.classList);
        const oldClass = classListArray.find(cls => cls.endsWith('-button'));
        if (oldClass) {
            actionButton.classList.remove(oldClass);
        }
        
        // Add the new class
        actionButton.classList.add(selectedPaymentMethod.toLowerCase() + "-button");
    }
    }

    if (clickedButton.classList.contains('actionButton')) {
    removeSelectedClassFromAllActionButtons();
    clickedButton.classList.add(selectedPaymentMethod.toLowerCase() + "-button");
    }

    const invalidRetailers = ['sei', 'ace', 'cvs', 'caseys', 'walmart', 'dollargeneral', 'walgreens'];
    const invalidActions = ['cancel', 'refund', 'return', 'chargeback', 'otpcreate', 'otpcancel'];

    const extraInvalidCombinations = ['paypal-cancel', 'venmo-cancel', 'ach-refund','paypal-return','venmo-return', 'debit-return', 
                                    'googlepay-return','applepay-return','ach-chargeback','googlepay-otpcreate','googlepay-otpcancel'];

    let combination = selectedPaymentMethod + '-' + selectedAction;

    if (
        (invalidRetailers.includes(selectedPaymentMethod) && invalidActions.includes(selectedAction)) || 
        extraInvalidCombinations.includes(combination)
    ) {
    updatedJSON = "Invalid Combination";
    } else {

    switch (combination) {
        case 'applepay-pay':
            updatedJSON.payment_type = "debit";
            updatedJSON.payment_card_type = "Debit (Apple Pay)";
            updatedJSON.payment_card_last4 = "1234";
            break;

        case 'googlepay-pay':
            updatedJSON.payment_type = "debit";
            updatedJSON.payment_card_type = "Google Pay";
            updatedJSON.payment_card_last4 = "2345";

            break;

        case 'debit-pay':
            updatedJSON.payment_type = "debit";
            updatedJSON.payment_card_type = "Debit";
            updatedJSON.payment_card_last4 = "3456";
            break;

        case 'venmo-pay':
            updatedJSON.payment_card_type = "Venmo";
            updatedJSON.payment_type = "paypal";
            break;

        case 'paypal-pay':
            updatedJSON.payment_card_type = "PayPal";
            updatedJSON.payment_type = "paypal";
            break;

        case 'ach-pay':
            updatedJSON.payment_type = "ach";
            updatedJSON.payment_bank_name = "Austin City Employee CU"
            updatedJSON.payment_bank_last4 = "1115"
            break;

        case 'sei-pay':
            updatedJSON.retailer_name = "7-Eleven";
            updatedJSON.retailer_location_identifier = "17436";
            updatedJSON.retailer_location_address = "8000 Fm 2147 West, Horseshoe Bay, TX";
            updatedJSON.payment_type = "cash";
            break;

        case 'ace-pay':
            updatedJSON.retailer_name = "Ace Cash Express";
            updatedJSON.retailer_location_identifier = "4058";
            updatedJSON.retailer_location_address = "730 Woollomes Avenue, Delano, CA";
            updatedJSON.payment_type = "cash";
            break;

        case 'cvs-pay':
            updatedJSON.retailer_name = "CVS";
            updatedJSON.retailer_location_identifier = "7137";
            updatedJSON.retailer_location_address = "5449 Jackson Rd., Ann Arbor, MI";
            updatedJSON.payment_type = "cash";
            break;

        case 'caseys-pay':
            updatedJSON.retailer_name = "Casey's";
            updatedJSON.retailer_location_identifier = "02024";
            updatedJSON.retailer_location_address = "2900 Nw 7 Hwy, Blue Springs, MO";
            updatedJSON.payment_type = "cash";
            break;

        case 'walmart-pay':
            updatedJSON.retailer_name = "Walmart";
            updatedJSON.retailer_location_identifier = "3384";
            updatedJSON.retailer_location_address = "300 W 15th St, Hereford, TX";
            updatedJSON.payment_type = "cash";
            break;

        case 'dollargeneral-pay':
            updatedJSON.retailer_name = "Dollar General";
            updatedJSON.retailer_location_identifier = "19133";
            updatedJSON.retailer_location_address = "5900 Reisterstown Rd, Baltimore, MD";
            updatedJSON.payment_type = "cash";
        break;

        case 'walgreens-pay':
            updatedJSON.retailer_name = "Walgreens";
            updatedJSON.retailer_location_identifier = "7144";
            updatedJSON.retailer_location_address = "3631 Gravois Ave, Saint Louis, MO";
            updatedJSON.payment_type = "cash";
        break;

        case 'applepay-cancel':
            updatedJSON.status = "cancel";
            updatedJSON.payment_type = "debit";
            updatedJSON.reverse_type = "Cancel";
            updatedJSON.reverse_code = "canceled";
            updatedJSON.reverse_reason = "Canceling payment"; 
            updatedJSON.payment_card_type = "Debit (Apple Pay)";
            updatedJSON.payment_card_last4 = "1234";           
            break;

        case 'googlepay-cancel':
            updatedJSON.status = "cancel";
            updatedJSON.payment_type = "debit";
            updatedJSON.reverse_type = "Cancel";
            updatedJSON.reverse_code = "canceled";
            updatedJSON.reverse_reason = "Canceling payment"; 
            updatedJSON.payment_card_type = "Google Pay";
            updatedJSON.payment_card_last4 = "6143";  
            break;

        case 'debit-cancel':
            updatedJSON.status = "cancel";
            updatedJSON.payment_type = "debit";
            updatedJSON.reverse_type = "Cancel";
            updatedJSON.reverse_code = "canceled";
            updatedJSON.reverse_reason = "Canceling payment"; 
            updatedJSON.payment_card_type = "DebitCard";
            updatedJSON.payment_card_last4 = "8550";  
            break;

        // case 'venmo-cancel':
        //     updatedJSON.payment_type = "venmo - Need to confirm";
        //     updatedJSON.reverse_type = "Cancel";
        //     updatedJSON.reverse_code = "canceled";
        //     updatedJSON.reverse_reason = "Cancel Venmo payment - Need to confirm";
        //     break;

        // case 'paypal-cancel':
        //     updatedJSON.payment_type = "paypal - Need to confirm";
        //     updatedJSON.reverse_type = "Cancel";
        //     updatedJSON.reverse_code = "canceled";
        //     updatedJSON.reverse_reason = "Cancel PayPal payment - Need to confirm";
        //     break;

        case 'ach-cancel':
            updatedJSON.status = "cancel";
            updatedJSON.payment_type = "ach";
            updatedJSON.reverse_type = "Cancel";
            updatedJSON.reverse_code = "canceled";
            updatedJSON.reverse_reason = "Cancel ACH payment";
            updatedJSON.payment_bank_last4 = "7653"
            updatedJSON.payment_bank_name = "First Community bank";
            break;

        case 'applepay-refund':
            updatedJSON.status = "refund";
            updatedJSON.payment_type = "debit";
            updatedJSON.reverse_type = "Refund";
            updatedJSON.reverse_code = "refunded";
            updatedJSON.reverse_reason = "merchant_requested";
            updatedJSON.payment_card_type = "Debit (Apple Pay)";
            updatedJSON.payment_card_last4 = "8582";
            break;

        case 'googlepay-refund':
            updatedJSON.status = "refund";
            updatedJSON.payment_type = "debit";
            updatedJSON.reverse_type = "Refund";
            updatedJSON.reverse_code = "refunded";
            updatedJSON.reverse_reason = "merchant_requested";
            updatedJSON.payment_card_type = "Google Pay";
            updatedJSON.payment_card_last4 = "4082";
            break;

        case 'debit-refund':
            updatedJSON.status = "refund";
            updatedJSON.payment_type = "debit";
            updatedJSON.reverse_type = "Refund";
            updatedJSON.reverse_code = "refunded";
            updatedJSON.reverse_reason = "merchant_requested";
            updatedJSON.payment_card_type = "Debit Card";
            updatedJSON.payment_card_last4 = "7491";
            break;

        case 'venmo-refund':
            updatedJSON.status = "refund";
            updatedJSON.payment_type = "paypal";
            updatedJSON.reverse_type = "Refund";
            updatedJSON.reverse_code = "refunded";
            updatedJSON.reverse_reason = "merchant_requested";
            updatedJSON.payment_card_type = "Venmo";
            break;

        case 'paypal-refund':
            updatedJSON.status = "refund";
            updatedJSON.payment_type = "paypal";
            updatedJSON.reverse_type = "Refund";
            updatedJSON.reverse_code = "refunded";
            updatedJSON.reverse_reason = "merchant_requested";
            updatedJSON.payment_card_type = "PayPal";
            break;

        case 'ach-return':
            updatedJSON.status = "return";
            updatedJSON.payment_type = "ach";
            updatedJSON.reverse_type = "Bank Return";
            updatedJSON.reverse_code = "R01";
            updatedJSON.reverse_reason = "Insufficient Funds";
            updatedJSON.payment_bank_name =  "Safe Credit Union";
            updatedJSON.payment_bank_last4 = "1155";
            break;

        case 'applepay-chargeback':
            updatedJSON.status = "chargeback";
            updatedJSON.payment_type = "debit";
            updatedJSON.reverse_type = "Chargeback";
            updatedJSON.payment_card_type = "Debit (Apple Pay)";
            updatedJSON.payment_card_last4 = "8582";
            break;

        case 'googlepay-chargeback':
            updatedJSON.status = "chargeback";
            updatedJSON.payment_type = "debit";
            updatedJSON.reverse_type = "Chargeback";
            updatedJSON.payment_card_type = "Google Pay";
            updatedJSON.payment_card_last4 = "6643";
            break;

        case 'debit-chargeback':
            updatedJSON.status = "chargeback";
            updatedJSON.payment_type = "debit";
            updatedJSON.reverse_type = "Chargeback";
            updatedJSON.payment_card_type = "Debit Card";
            updatedJSON.payment_card_last4 = "8432";
            break;

        case 'venmo-chargeback':
            updatedJSON.status = "chargeback";
            updatedJSON.payment_type = "paypal";
            updatedJSON.reverse_type = "Chargeback";
            updatedJSON.payment_card_type = "Venmo";
            break;

        case 'paypal-chargeback':
            updatedJSON.status = "chargeback";
            updatedJSON.payment_type = "paypal";
            updatedJSON.reverse_type = "Chargeback";
            updatedJSON.payment_card_type = "PayPal";
            break;

        case 'applepay-otpcreate':
            updatedJSON.one_time_pay_json[0].created = "2023-10-23 17:15:20 -0700";
            updatedJSON.one_time_pay_json[0].status = "active";
            updatedJSON.one_time_pay_json[0].means = "Debit (Apple Pay) 6231";
            updatedJSON.one_time_pay_json[0].payment_type = "debit";
            updatedJSON.change_event.email = "test@example.com";
            break;

        case 'debit-otpcreate':
            updatedJSON.one_time_pay_json[0].created = "2023-10-23 17:15:20 -0700";
            updatedJSON.one_time_pay_json[0].status = "active";
            updatedJSON.one_time_pay_json[0].means = "Debit Card 6821";
            updatedJSON.one_time_pay_json[0].payment_type = "debit";
            updatedJSON.change_event.email = "test@example.com";
            break;

        case 'paypal-otpcreate':
            updatedJSON.one_time_pay_json[0].created = "2023-10-23 17:15:20 -0700";
            updatedJSON.one_time_pay_json[0].status = "active";
            updatedJSON.one_time_pay_json[0].means = "PayPal";
            updatedJSON.one_time_pay_json[0].payment_type = "paypal";
            updatedJSON.change_event.email = "test@example.com";
            break;

        case 'venmo-otpcreate':
            updatedJSON.one_time_pay_json[0].created = "2023-10-23 17:15:20 -0700";
            updatedJSON.one_time_pay_json[0].status = "active";
            updatedJSON.one_time_pay_json[0].means = "Venmo";
            updatedJSON.one_time_pay_json[0].payment_type = "paypal";
            updatedJSON.change_event.email = "test@example.com";
            break;

        case 'ach-otpcreate':
            updatedJSON.one_time_pay_json[0].created = "2023-10-23 17:15:20 -0700";
            updatedJSON.one_time_pay_json[0].status = "active";
            updatedJSON.one_time_pay_json[0].means = "Trustmark National Bank 2933 (Business Checking)";
            updatedJSON.one_time_pay_json[0].payment_type = "ach";
            updatedJSON.change_event.email = "test@example.com";
            break;

        case 'applepay-otpcancel':
            updatedJSON.one_time_pay_json[0].created = "2023-10-23 17:15:20 -0700";
            updatedJSON.one_time_pay_json[0].canceled = "2023-10-23 19:15:20 -0700";
            updatedJSON.one_time_pay_json[0].status = "user_suspended";
            updatedJSON.one_time_pay_json[0].means = "Debit (Apple Pay) 6231";
            updatedJSON.one_time_pay_json[0].payment_type = "debit";
            updatedJSON.change_event.email = "test@example.com";
            break;

        case 'debit-otpcancel':
            updatedJSON.one_time_pay_json[0].created = "2023-10-23 17:15:20 -0700";
            updatedJSON.one_time_pay_json[0].canceled = "2023-10-23 19:15:20 -0700";
            updatedJSON.one_time_pay_json[0].status = "user_suspended";
            updatedJSON.one_time_pay_json[0].means = "Debit Card 6821";
            updatedJSON.one_time_pay_json[0].payment_type = "debit";
            updatedJSON.change_event.email = "test@example.com";
            break;
        
        case 'venmo-otpcancel':
            updatedJSON.one_time_pay_json[0].created = "2023-10-23 17:15:20 -0700";
            updatedJSON.one_time_pay_json[0].canceled = "2023-10-23 19:15:20 -0700";
            updatedJSON.one_time_pay_json[0].status = "user_suspended";
            updatedJSON.one_time_pay_json[0].means = "Venmo";
            updatedJSON.one_time_pay_json[0].payment_type = "paypal";
            updatedJSON.change_event.email = "test@example.com";
            break;

        case 'paypal-otpcancel':
            updatedJSON.one_time_pay_json[0].created = "2023-10-23 17:15:20 -0700";
            updatedJSON.one_time_pay_json[0].canceled = "2023-10-23 19:15:20 -0700";
            updatedJSON.one_time_pay_json[0].status = "user_suspended";
            updatedJSON.one_time_pay_json[0].means = "PayPal";
            updatedJSON.one_time_pay_json[0].payment_type = "paypal";
            updatedJSON.change_event.email = "test@example.com";
            break;

        case 'ach-otpcancel':
            updatedJSON.one_time_pay_json[0].created = "2023-10-23 17:15:20 -0700";
            updatedJSON.one_time_pay_json[0].canceled = "2023-10-23 19:15:20 -0700";
            updatedJSON.one_time_pay_json[0].status = "user_suspended";
            updatedJSON.one_time_pay_json[0].means = "Trustmark National Bank 2933 (Business Checking)";
            updatedJSON.one_time_pay_json[0].payment_type = "ach";
            updatedJSON.change_event.email = "test@example.com";
            break;

        }
    }
    const dateObj = new Date();

    updatedJSON.payment_timestamp = moment(dateObj).tz("America/Los_Angeles").format('YYYY-MM-DD HH:mm:ss Z');
    updatedJSON.timestamp = Math.floor(Date.now() / 1000).toString();
    updatedJSON.signature = randomString(64);
    
    let jsonString = JSON.stringify(updatedJSON, null, 4);
    let dynamicProperties = [
    "payment_method",
    "payment_card_type",
    "payment_card_last4",
    "payment_type",
    "payment_bank_name",
    "payment_bank_last4",
    "retailer_name",
    "retailer_location_identifier",
    "retailer_location_address",
    "reverse_type",
    "reverse_code",
    "reverse_reason",
    "status",
    "means",
    "canceled"
    ];

    dynamicProperties.forEach(prop => {
        let regex = new RegExp('("' + prop + '": ".*?")', 'g');

        jsonString = jsonString.replace(regex, match => {
    // If the property is 'status' and its value is 'payment', return the original match
        if (prop === 'status' && match.includes('"payment"')) {
        return match;
        }
        return `<span class="dynamic-${selectedPaymentMethod.toLowerCase()}">${match}</span>`;
        });
    });

    document.getElementById('jsonOutput').innerHTML = jsonString;
}
    if (selectedAction === 'otpcreate' || selectedAction === 'otpcancel') {
        dynamicProperties = dynamicProperties.concat([
            "one_time_pay_json",
            "change_event"
        ]);
    }
    let defaultButton = document.querySelector("#defaultptype");
    let defaultAction = document.querySelector("#defaultatype");
    updateJSON('applepay', defaultButton, 'payment');
    updateJSON('pay', defaultAction, 'action');