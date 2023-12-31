const express = require("express");
const appModules = express.Router();
const customer = require("../modules/customer/routes");
const common = require("../modules/common/routes");

// module_name: customer
// module_route: /sso/customer
// module_description:
//      handles routes related to customer module
appModules.use("/sso/customer", customer);

// module_name: common
// module_route: /common
// module_description:
//      handles routes related to common module
appModules.use("/sso/common", common);

module.exports = appModules;
