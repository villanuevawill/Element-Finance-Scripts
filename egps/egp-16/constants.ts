export const TREASURY_ADDRESS = "0x82ef450fb7f06e3294f2f19ed1713b255af0f541";
export const MILKMAN_ADDRESS = "0x11C76AD590ABDFFCD980afEC9ad951B160F02797";
export const BALANCER_VAULT_ADDRESS = "0xBA12222222228d8Ba445958a75a0704d566BF2C8";
export const GSC_TREASURY_ADDRESS = "0x654be0b5556f8eadbc2d140505445fa32715ef2b";
export const GSC_CORE_VOTING_ADDRESS = '0x422494292e7a9Dda8778Bb4EA05C2779a3d60f5D';
export const MULTISEND_ADDRESS = "0x8D29bE29923b68abfDD21e541b9374737B49cdAD";

export const crvPools = [
    // crv3crypto -> weth
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
        isMetaPool: true,
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
        isMetaPool: true,
    },
    // mim-3lp3crv-f -> 3crv
    // curve pool = https://etherscan.io/address/0x5a6a4d54456819380173272a5e8e9b9904bdf41b#readContract
    // i = 1, 3crv = https://etherscan.io/address/0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490
    {
        i: 1,
        pool: '0x5a6a4d54456819380173272a5e8e9b9904bdf41b',
        isInt128: true,
        withdrawn: '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
        isMetaPool: true,
    },
    // stecrv -> eth
    // curve pool = https://etherscan.io/address/0xdc24316b9ae028f1497c275eb9192a3ea0f67022#readContract
    // i = 0, eth
    {
        i: 0,
        pool: '0xdc24316b9ae028f1497c275eb9192a3ea0f67022',
        isInt128: true,
        withdrawn: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    },
    // crvTricrypto -> weth
    // curve pool = https://etherscan.io/address/0x3993d34e7e99abf6b6f367309975d1360222d446#readContract
    // i = 0, weth
    {
        i: 2,
        pool: '0x3993d34e7e99abf6b6f367309975d1360222d446',
        isInt128: false,
        withdrawn: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
    }
];

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
        // yvwbtc -> wbtc
        vault: "0xA696a63cc78DfFa1a63E9E50587C197387FF6C7E",
        withdrawn: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    },
    {
        // ydai -> dai
        vault: "0xdA816459F1AB5631232FE5e97a05BBBb94970c95",
        withdrawn: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    }
];

// Withdraw from the appropriate balancer pools
export const balancerPools = [
    {
        // LPePyvCurve-MIM-11FEB22
        pool: '0x09b1b33BaD0e87454ff05696b1151BFbD208a43F',
        tranche: '0x418De6227499181B045CAdf554030722E460881a',
        poolId: '0x09b1b33bad0e87454ff05696b1151bfbd208a43f0002000000000000000000a6',
        withdraw: {
            pt: '0x418De6227499181B045CAdf554030722E460881a',
            base: '0x5a6A4D54456819380173272A5E8E9B9904BdF41B',
        },
        isV1: true,
    },
    {
        // LPePyvcrvSTETH-15APR22
        pool: '0xb03C6B351A283bc1Cd26b9cf6d7B0c4556013bDb',
        tranche: '0x2361102893CCabFb543bc55AC4cC8d6d0824A67E',
        poolId: '0xb03c6b351a283bc1cd26b9cf6d7b0c4556013bdb0002000000000000000000ab',
        withdraw: {
            pt: '0x2361102893CCabFb543bc55AC4cC8d6d0824A67E',
            base: '0x06325440D014e39736583c165C2963BA99fAf14E',
        },
        isV1: true,
    },
    {
        // LPePyvUSDC-17DEC21
        pool: '0x90ca5cef5b29342b229fb8ae2db5d8f4f894d652',
        tranche: '0x76a34D72b9CF97d972fB0e390eB053A37F211c74',
        poolId: '0x90ca5cef5b29342b229fb8ae2db5d8f4f894d6520002000000000000000000b5',
        withdraw: {
            pt: '0x76a34D72b9CF97d972fB0e390eB053A37F211c74',
            base: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        },
        isV1: true,
    },
    {
        // LPePyvCurveLUSD-28SEP21
        pool: '0xA8D4433BAdAa1A35506804B43657B0694deA928d',
        tranche: '0x9b44Ed798a10Df31dee52C5256Dcb4754BCf097E',
        poolId: '0xa8d4433badaa1a35506804b43657b0694dea928d00020000000000000000005e',
        withdraw: {
            pt: '0x9b44Ed798a10Df31dee52C5256Dcb4754BCf097E',
            base: '0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA',
        },
        isV1: true,
    },
    {
        // LPePyvcrv3crypto-29APR22
        pool: '0x6Dd0F7c8F4793ed2531c0df4fEA8633a21fDcFf4',
        tranche: '0x285328906D0D33cb757c1E471F5e2176683247c2',
        poolId: '0x6dd0f7c8f4793ed2531c0df4fea8633a21fdcff40002000000000000000000b7',
        withdraw: {
            pt: '0x285328906D0D33cb757c1E471F5e2176683247c2',
            base: '0xc4AD29ba4B3c580e6D59105FFf484999997675Ff',
        },
        isV1: true,
    },
    {
        // LPePyvCurveLUSD-27DEC21
        pool: '0x893B30574BF183d69413717f30b17062eC9DFD8b',
        tranche: '0xa2b3d083AA1eaa8453BfB477f062A208Ed85cBBF',
        poolId: '0x893b30574bf183d69413717f30b17062ec9dfd8b000200000000000000000061',
        withdraw: {
            pt: '0xa2b3d083AA1eaa8453BfB477f062A208Ed85cBBF',
            base: '0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA',
        },
        isV1: true,
    },
    {
        // LPePyvUSDC-29APR22
        pool: '0x7edde0cb05ed19e03a9a47cd5e53fc57fde1c80c',
        tranche: '0x52C9886d5D87B0f06EbACBEff750B5Ffad5d17d9',
        poolId: '0x7edde0cb05ed19e03a9a47cd5e53fc57fde1c80c0002000000000000000000c8',
        withdraw: {
            pt: '0x52C9886d5D87B0f06EbACBEff750B5Ffad5d17d9',
            base: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        },
        isV1: true,
    },
    {
        // LPePyvCurve-MIM-29APR22
        pool: '0x14792d3F6FcF2661795d1E08ef818bf612708BbF',
        tranche: '0xC63958D9D01eFA6B8266b1df3862c6323CbDb52B',
        poolId: '0x14792d3f6fcf2661795d1e08ef818bf612708bbf0002000000000000000000be',
        withdraw: {
            pt: '0xC63958D9D01eFA6B8266b1df3862c6323CbDb52B',
            base: '0x5a6A4D54456819380173272A5E8E9B9904BdF41B',
        },
        isV1: true,
    },
    {
        // LPePyvcrvSTETH-15OCT21
        pool: '0xce16E7ed7654a3453E8FaF748f2c82E57069278f',
        tranche: '0x26941C63F4587796aBE199348ecd3d7C44F9aE0C',
        poolId: '0xce16e7ed7654a3453e8faf748f2c82e57069278f00020000000000000000006d',
        withdraw: {
            pt: '0x26941C63F4587796aBE199348ecd3d7C44F9aE0C',
            base: '0x06325440D014e39736583c165C2963BA99fAf14E',
        },
        isV1: true,
    },
    {
        // LPePyvDAI-16OCT21
        pool: '0x71628c66C502F988Fbb9e17081F2bD14e361FAF4',
        tranche: '0xb1cc77e701de60FE246607565CF7eDC9D9b6b963',
        poolId: '0x71628c66c502f988fbb9e17081f2bd14e361faf4000200000000000000000078',
        withdraw: {
            pt: '0xb1cc77e701de60FE246607565CF7eDC9D9b6b963',
            base: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        },
        isV1: true,
    },
    {
        // LPePyvCurveLUSD-29APR22
        pool: '0x56f30398d13f111401d6e7ffe758254a0946687d',
        tranche: '0x0740A6CfB9468B8b53070C0B327099293DCCB82d',
        poolId: '0x56f30398d13f111401d6e7ffe758254a0946687d000200000000000000000105',
        withdraw: {
            pt: '0x0740A6CfB9468B8b53070C0B327099293DCCB82d',
            base: '0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA'
        },
        isV1: true,
    },
    {
        // LPePyvUSDC-29OCT21
        pool: '0x787546Bf2c05e3e19e2b6BDE57A203da7f682efF',
        tranche: '0xf38c3E836Be9cD35072055Ff6a9Ba570e0B70797',
        poolId: '0x787546bf2c05e3e19e2b6bde57a203da7f682eff00020000000000000000007c',
        withdraw: {
            pt: '0xf38c3E836Be9cD35072055Ff6a9Ba570e0B70797',
            base: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
        },
        isV1: true,
    },
    {
        // LPePyvcrv3crypto-12NOV21
        pool: '0xF6dc4640D2783654BeF88E0dF3fb0F051f0DfC1A',
        tranche: '0x9CF2AB51aC93711Ec2fa32Ec861349568A16c729',
        poolId: '0xf6dc4640d2783654bef88e0df3fb0f051f0dfc1a00020000000000000000007e',
        withdraw: {
            pt: '0x9CF2AB51aC93711Ec2fa32Ec861349568A16c729',
            base: '0xc4AD29ba4B3c580e6D59105FFf484999997675Ff'
        },
        isV1: true,
    },
    {
        // LPePyvUSDC-28JAN22
        pool: '0x10a2F8bd81Ee2898D7eD18fb8f114034a549FA59',
        tranche: '0x8a2228705ec979961F0e16df311dEbcf097A2766',
        poolId: '0x10a2f8bd81ee2898d7ed18fb8f114034a549fa59000200000000000000000090',
        withdraw: {
            pt: '0x8a2228705ec979961F0e16df311dEbcf097A2766',
            base: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
        },
        isV1: true,
    },
    {
        // LPePyvDAI-28JAN22
        pool: '0xA47D1251CF21AD42685Cc6B8B3a186a73Dbd06cf',
        tranche: '0x449D7C2e096E9f867339078535b15440d42F78E8',
        poolId: '0xa47d1251cf21ad42685cc6b8b3a186a73dbd06cf000200000000000000000097',
        withdraw: {
            pt: '0x449D7C2e096E9f867339078535b15440d42F78E8',
            base: '0x6B175474E89094C44Da98b954EedeAC495271d0F'
        },
        isV1: true,
    },
    {
        // LPePyvcrvSTETH-28JAN22
        pool: '0x544c823194218f0640daE8291c1f59752d25faE3',
        tranche: '0x720465A4AE6547348056885060EEB51F9CAdb571',
        poolId: '0x544c823194218f0640dae8291c1f59752d25fae3000200000000000000000093',
        withdraw: {
            pt: '0x720465A4AE6547348056885060EEB51F9CAdb571',
            base: '0x06325440D014e39736583c165C2963BA99fAf14E'
        },
        isV1: true,
    },
    {
        // LPePyvCurve-alUSD-28JAN22
        pool: '0xC9AD279994980F8DF348b526901006972509677F',
        tranche: '0x55096A35Bf827919B3Bb0A5e6b5E2af8095F3D4d',
        poolId: '0xc9ad279994980f8df348b526901006972509677f00020000000000000000009e',
        withdraw: {
            pt: '0x55096A35Bf827919B3Bb0A5e6b5E2af8095F3D4d',
            base: '0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c'
        },
        isV1: true,
    },
];