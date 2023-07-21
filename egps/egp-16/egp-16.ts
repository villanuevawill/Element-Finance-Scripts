import { network, ethers } from 'hardhat'

// Artifacts
import iYearnVault from '../../elf-contracts/artifacts/contracts/interfaces/IYearnVault.sol/IYearnVault.json'
import iERC20 from '../../elf-contracts/artifacts/contracts/interfaces/IERC20.sol/IERC20.json'
import iCurvePool from '../../artifacts/egps/egp-16/CurvelpPriceChecker.sol/iCurvePool.json'
import iCurveMetaPool from '../../artifacts/egps/egp-16/CurvelpPriceChecker.sol/iCurveMetaPool.json'
import iMilkman from '../../artifacts/egps/egp-16/CurvelpPriceChecker.sol/iMilkman.json'

// Helpers
import * as addresses from '../helpers/addresses'
import { createCallHash } from '../helpers/hashing'
import { CurvelpPriceChecker__factory } from '../../typechain'
import { Signer } from 'ethers'
import { Address } from 'cluster'

// Withdraw from the appropriate Yearn Vaults
export const yearnPools = [
    {
        // ycrv3crypto -> crv3crypto
        vault: "0xE537B5cc158EB71037D4125BDD7538421981E6AA",
        withdrawn: "0xc4AD29ba4B3c580e6D59105FFf484999997675Ff",
    },
    {
        // yalusd3crv-f -> alusd3crv-f
        vault: "0xA74d4B67b3368E83797a35382AFB776bAAE4F5C8",
        withdrawn: "0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c",
    },
    {
        // yeurscrv -> eurscrv
        vault: "0x25212Df29073FfFA7A67399AcEfC2dd75a831A1A",
        withdrawn: "0x194eBd173F6cDacE046C53eACcE9B953F28411d1",
    },
    {
        // ylusd3crv-f -> lusd3crv-f
        vault: "0x5fA5B62c8AF877CB37031e0a3B2f34A78e3C56A6",
        withdrawn: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA"
    },
    {
        // ymim-3lp3crv-f => mim-3lp3crv-f
        vault: "0x2DfB14E32e2F8156ec15a2c21c3A6c053af52Be8",
        withdrawn: "0x5a6A4D54456819380173272A5E8E9B9904BdF41B",
    },
    {
        // ystecrv -> stecrv
        vault: "0xdCD90C7f6324cfa40d7169ef80b12031770B4325",
        withdrawn: "0x06325440D014e39736583c165C2963BA99fAf14E",
    },
    {
        // yusdc -> usdc
        vault: "0xa354f35829ae975e850e23e9615b11da1b3dc4de",
        withdrawn: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    },
    {
        // ywbtc -> wbtc
        vault: "0xA696a63cc78DfFa1a63E9E50587C197387FF6C7E",
        withdrawn: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    },
    {
        // ydai -> dai
        vault: "0xdA816459F1AB5631232FE5e97a05BBBb94970c95",
        withdrawn: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    }
];

export const crvPools = [
    // crv3crypto -> eth
    // curve pool = https://etherscan.io/address/0xd51a44d3fae010294c616388b506acda1bfaae46#readContract
    // i = 2, weth = https://etherscan.io/token/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2
    {
        i: 2,
        pool: '0xd51a44d3fae010294c616388b506acda1bfaae46',
        isInt128: false,
        withdrawn: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    },
    // alusd3crv-f -> 3crv
    // curve pool = https://etherscan.io/address/0x43b4fdfd4ff969587185cdb6f0bd875c5fc83f8c#readContract
    // i = 1, 3crv = https://etherscan.io/address/0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490
    {
        i: 1,
        pool: '0x43b4fdfd4ff969587185cdb6f0bd875c5fc83f8c',
        isInt128: true,
        withdrawn: '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
    },
    // eurscrv -> eurs
    // curve pool = https://etherscan.io/address/0x0ce6a5ff5217e38315f87032cf90686c96627caa#readContract
    // i = 0, eurs = https://etherscan.io/address/0xdB25f211AB05b1c97D595516F45794528a807ad8
    {
        i: 0,
        pool: '0x0ce6a5ff5217e38315f87032cf90686c96627caa',
        isInt128: true,
        withdrawn: '0xdB25f211AB05b1c97D595516F45794528a807ad8',
    },
    // lusd3crv-f -> 3crv
    // curve pool = https://etherscan.io/address/0xed279fdd11ca84beef15af5d39bb4d4bee23f0ca#readContract
    // i = 1, 3crv = https://etherscan.io/address/0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490
    {
        i: 1,
        pool: '0xed279fdd11ca84beef15af5d39bb4d4bee23f0ca',
        isInt128: true,
        withdrawn: '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
    },
    // mim-3lp3crv-f -> 3crv
    // curve pool = https://etherscan.io/address/0x5a6a4d54456819380173272a5e8e9b9904bdf41b#readContract
    // i = 1, 3crv = https://etherscan.io/address/0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490
    {
        i: 1,
        pool: '0x5a6a4d54456819380173272a5e8e9b9904bdf41b',
        isInt128: true,
        withdrawn: '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
    },
    // stecrv -> weth
    // curve pool = https://etherscan.io/address/0xdc24316b9ae028f1497c275eb9192a3ea0f67022#readContract
    // i = 0, eth
    {
        i: 0,
        pool: '0xdc24316b9ae028f1497c275eb9192a3ea0f67022',
        isInt128: true,
        withdrawn: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    },
];

// Withdraw from the appropriate balancer pools
export const balancerPools = [
    {
        // LPePyvCurve-MIM-11FEB22
        pool: '0x09b1b33BaD0e87454ff05696b1151BFbD208a43F',
    },
    {
        // LPePyvCurve-EURS-11FEB22
        pool: '0x6AC02eCD0c2A23B11f9AFb3b3Aaf237169475cac',
    },
    {
        // LPePyvcrvSTETH-15APR22
        pool: '0xb03C6B351A283bc1Cd26b9cf6d7B0c4556013bDb',
    },
    {
        // LPePyvUSDC-17DEC21
        pool: '0x90ca5cef5b29342b229fb8ae2db5d8f4f894d652',
    },
    {
        // LPePyvCurveLUSD-28SEP21
        pool: '0xA8D4433BAdAa1A35506804B43657B0694deA928d',
    },
    {
        // LPePyvcrv3crypto-29APR22
        pool: '0x6Dd0F7c8F4793ed2531c0df4fEA8633a21fDcFf4',
    },
    {
        // LPePyvCurveLUSD-27DEC21
        pool: '0x893B30574BF183d69413717f30b17062eC9DFD8b',
    },
    {
        // LPePyvUSDC-29APR22
        pool: '0x7edde0cb05ed19e03a9a47cd5e53fc57fde1c80c',
    },
    {
        // LPePyvCurve-MIM-29APR22
        pool: '0x14792d3F6FcF2661795d1E08ef818bf612708BbF',
    },
    {
        // LPePyvCrvTriCrypto-15AUG21
        pool: '0x3A693EB97b500008d4Bb6258906f7Bbca1D09Cc5',
    },
    {
        // LPePyvCurve-alUSD-29APR22
        pool: '0x63E9B50DD3eB63BfBF93B26F57b9EFB574e59576',
    },
    {
        // LPePyvcrvSTETH-15OCT21
        pool: '0xce16E7ed7654a3453E8FaF748f2c82E57069278f',
    },
    {
        // LPePyvWBTC-29APR22
        pool: '0x4bd6D86dEBdB9F5413e631Ad386c4427DC9D01B2',
    },
    {
        // LPePyvDAI-16OCT21
        pool: '0x71628c66C502F988Fbb9e17081F2bD14e361FAF4',
    },
    {
        // LPePyvCurveLUSD-29APR22
        pool: '0x56f30398d13f111401d6e7ffe758254a0946687d',
    },
    {
        // LPePyvUSDC-29OCT21
        pool: '0x787546Bf2c05e3e19e2b6BDE57A203da7f682efF',
    },
    {
        // LPePyvDAI-29APR22
        pool: '0xEdf085f65b4F6c155e13155502Ef925c9a756003',
    },
    {
        // LPePyvcrv3crypto-12NOV21
        pool: '0xF6dc4640D2783654BeF88E0dF3fb0F051f0DfC1A',
    },
    {
        // LPePyvWBTC-26NOV21
        pool: '0x4Db9024fc9F477134e00Da0DA3c77DE98d9836aC',
    },
    {
        // LPePyvUSDC-28JAN22
        pool: '0x10a2F8bd81Ee2898D7eD18fb8f114034a549FA59',
    },
    {
        // LPePyvDAI-28JAN22
        pool: '0xA47D1251CF21AD42685Cc6B8B3a186a73Dbd06cf',
    },
    {
        // LPePyvcrvSTETH-28JAN22
        pool: '0x544c823194218f0640daE8291c1f59752d25faE3',
    },
];

export const TREASURY_ADDRESS = "0x82ef450fb7f06e3294f2f19ed1713b255af0f541";
export const MILKMAN_ADDRESS = "0x11C76AD590ABDFFCD980afEC9ad951B160F02797";
export const BALANCER_VAULT = "0xBA12222222228d8Ba445958a75a0704d566BF2C8";

export async function withdrawFromYearn(signer: Signer) {
    for (let i in yearnPools) {
        const iYearnVaultContract = new ethers.Contract(
        yearnPools[i].vault,
        iYearnVault.abi,
        signer
        );

        const balance = await iYearnVaultContract.balanceOf(TREASURY_ADDRESS);
        const symbol = await iYearnVaultContract.symbol();
        const decimals = await iYearnVaultContract.decimals();

        console.log(`Withdrawing ${ethers.utils.formatUnits(balance, decimals)} ${symbol} yearn vault`);
        await iYearnVaultContract.withdraw(balance, TREASURY_ADDRESS, 10000);
    }

    return signer;
};

export async function deployPriceChecker(signer: Signer) {
    // Deploy the curve price checker
    const factory = new CurvelpPriceChecker__factory(signer);
    let priceChecker = await factory.deploy('Curve LP Withdraw Price Checker');
    priceChecker = await priceChecker.deployed();
    const address = priceChecker.address;

    return { signer, address };    
};

export async function swapviaMilkman(signer: Signer, address: String) {
    const iMilkmanContract = new ethers.Contract(
        // milkman address
        MILKMAN_ADDRESS,
        iMilkman.abi,
        signer
    );

    for (let i in crvPools) {
        const priceCheckerData = ethers.utils.defaultAbiCoder.encode(
            ["uint256", "bool", "uint256", "int128", "address"],
            // 1% slippage param
            [100, crvPools[i].isInt128, crvPools[i].i, crvPools[i].i, crvPools[i].pool]
        );

        const lpTokenContract = new ethers.Contract(
            yearnPools[i].withdrawn,
            iERC20.abi,
            signer
        );
        const lpBalance = await lpTokenContract.balanceOf(TREASURY_ADDRESS);
        const lpSymbol = await lpTokenContract.symbol();

        const withdrawnTokenContract = new ethers.Contract(
            crvPools[i].withdrawn,
            iERC20.abi,
            signer
        );
        const withdrawnSymbol = await withdrawnTokenContract.symbol();

        console.log(
            `Requesting an on-chain Swap via Milkman at 1% slippage.\n`,
            `${lpBalance} ${lpSymbol} -> ${withdrawnSymbol}`,
        )

        // approve erc20 spend amount to milkman contract
        await lpTokenContract.approve(MILKMAN_ADDRESS, lpBalance);

        await iMilkmanContract.requestSwapExactTokensForTokens(
            lpBalance,
            yearnPools[i].withdrawn,
            crvPools[i].withdrawn,
            TREASURY_ADDRESS,
            address,
            priceCheckerData
        );
    }
}

async function proposal() {
    // Fill in the rest of the proposal logic
}

async function main() {
  const result = await proposal()
};

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error)
//     process.exit(1)
//   })
