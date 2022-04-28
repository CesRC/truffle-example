/* const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin"); */
const VaccineTracker = artifacts.require("VaccineTracker");

module.exports = function (deployer) {
  /*   deployer.deploy(ConvertLib);
    deployer.link(ConvertLib, MetaCoin);
    deployer.deploy(MetaCoin); */
  deployer.deploy(VaccineTracker);
};



