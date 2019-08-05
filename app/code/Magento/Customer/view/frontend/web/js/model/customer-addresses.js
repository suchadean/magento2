/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

/**
 * @api
 */
define([
    'ko',
    './customer/address'
], function (ko, Address) {
    'use strict';

    let isLoggedIn = ko.observable(window.isCustomerLoggedIn);

    return {
        /**
         * @return {Array}
         */
        getAddressItems: function () {
            let customerAddresses = window.customerData.addresses;

            return isLoggedIn()
                ? customerAddresses.map(address => new Address(address))
                : [];
        }
    };

});
