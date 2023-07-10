require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
        networks: {
                hardhat: {
                localhost: {
                        url: "http://ec2-35-88-12-204.us-west-2.compute.amazonaws.com:8545"
            ,           chainID: 1337

                }
,
			forking: { 
				url: "https://cloudflare-eth.com/",

			}

		}
   },

        solidity: "0.8.18",
};




