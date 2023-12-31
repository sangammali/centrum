const registrationConstants = require("./registration.constants");
const loginTypeConstants = require("./loginType.constants");
const firstTimeLoginValidateConstants = require("./firstTimeLoginValidate.constants");
const firstTimeLoginConstants = require("./firstTimeLogin.constants");
const authenticationConstants = require("./authentication.constants");
const validateConstants = require("./validate.constants");
const customerDetailsConstants = require("./customerDetails.constants");
const changeCredentialsConstants = require("./changeCredentials.constants");
const initiateResetCredentialsConstants = require("./initiateResetCredentials.constants");
const confirmResetCredentialsConstants = require("./confirmResetCredentials.constants");
const unblockLoginConstants = require("./unblockLogin.constants");
const customerProfileConstants = require("./customerProfile.constants");

const customerModuleConstants = {
  registration: registrationConstants,
  loginType: loginTypeConstants,
  firstTimeLoginValidate: firstTimeLoginValidateConstants,
  firstTimeLogin: firstTimeLoginConstants,
  authentication: authenticationConstants,
  validate: validateConstants,
  customerDetails: customerDetailsConstants,
  changeCredentials: changeCredentialsConstants,
  initiateResetCredentials: initiateResetCredentialsConstants,
  confirmResetCredentials: confirmResetCredentialsConstants,
  unblockLogin: unblockLoginConstants,
  customerProfile: customerProfileConstants,
};

module.exports = customerModuleConstants;
