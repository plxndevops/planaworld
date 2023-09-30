'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4ae338c2ec67254093ca70c8a430d1c9",
"assets/AssetManifest.json": "4200e1664e3e9baa45c958bc23efd914",
"assets/assets/fonts/Muller/Muller-ExtraBold.otf": "6c7cf32822732c3a6831c5ecf30fa656",
"assets/assets/fonts/Muller/Muller-LightItalic.otf": "a18cc6ada5feacddbe555fa8bd3d252b",
"assets/assets/fonts/Muller/Muller-NarrowExtraBold.otf": "b19671dd5b740479a24f75acf68a0b1f",
"assets/assets/fonts/Muller/Muller-NarrowExtraBoldItalic.otf": "cf9e042b4c4018150b9ce0a0684d63dd",
"assets/assets/fonts/Muller/Muller-NarrowLight.otf": "1cb389b0fd03e20ac1d0d5ae8b6ae7e9",
"assets/assets/fonts/Muller/Muller-Thin.otf": "dccca47daa61499ec333b239da8f5b39",
"assets/assets/fonts/Niramit/Niramit-Bold.ttf": "534610629b2ea3bc5579f554365feba0",
"assets/assets/fonts/Niramit/Niramit-BoldItalic.ttf": "bf449eb803e3f206ac74202fbc351ebe",
"assets/assets/fonts/Niramit/Niramit-ExtraLight.ttf": "76907c9d895c8aa1d88ed8fbe474427a",
"assets/assets/fonts/Niramit/Niramit-ExtraLightItalic.ttf": "006b372f8bb668a2b601cd125a6f2eb8",
"assets/assets/fonts/Niramit/Niramit-Italic.ttf": "c8a5dd6921b7cbc22495cd3d98ac9ef5",
"assets/assets/fonts/Niramit/Niramit-Light.ttf": "bd36468b132da81bbb67359f8c7b2c05",
"assets/assets/fonts/Niramit/Niramit-LightItalic.ttf": "ec86c1718324046e4841668144378292",
"assets/assets/fonts/Niramit/Niramit-Medium.ttf": "23d58f68778052c6114e7e3dadb31f4c",
"assets/assets/fonts/Niramit/Niramit-MediumItalic.ttf": "98004b50040e72af82b332bc6038d252",
"assets/assets/fonts/Niramit/Niramit-Regular.ttf": "c7d0f1b1e41e0c9c658f961737ad63e9",
"assets/assets/fonts/Niramit/Niramit-SemiBold.ttf": "4a7e4c88c71cb15b0cdf64552eee61b6",
"assets/assets/fonts/Niramit/Niramit-SemiBoldItalic.ttf": "e71dbfd99483b40a35026a453c099890",
"assets/assets/images/42.png": "84ffa60ef99551cf2c25a40262078a36",
"assets/assets/images/47.png": "7d4fe141d419791118c3c1e838bc685e",
"assets/assets/images/56.png": "3602c21fc2bcf7dc690b85c773f13479",
"assets/assets/images/app_store.png": "8f58d74850fdc041a883d7e211ac6b3a",
"assets/assets/images/bg-gif.gif": "98401a759bc838efb151062fe10f51ab",
"assets/assets/images/bg_img1.png": "3dfd0f69d01c2306f7a9c9a8806c3aa5",
"assets/assets/images/iphone_plana/booking/booking.gif": "51d804f059e768c8e1789d8e11cc0556",
"assets/assets/images/iphone_plana/booking/Group%252034_iphone13promaxgold_portrait.png": "3f36885eb85d45f9f2f5e3c1c714a9a8",
"assets/assets/images/iphone_plana/booking/Group%252035_iphone13promaxgold_portrait.png": "784544810de5ea1d931f83b26d267105",
"assets/assets/images/iphone_plana/booking/Group%252048_iphone13promaxgold_portrait.png": "5dcbc6fe1fb091aa09500d3727298746",
"assets/assets/images/iphone_plana/booking/Group%252099.png": "57fdc0e91a2aff34327101d985d898a7",
"assets/assets/images/iphone_plana/complete/complete.gif": "3466cb1671cc160bdc67367c4f3a9237",
"assets/assets/images/iphone_plana/complete/Group%252034_iphone13promaxgold_portrait.png": "3f36885eb85d45f9f2f5e3c1c714a9a8",
"assets/assets/images/iphone_plana/complete/Group%252040_iphone13promaxgold_portrait.png": "155385ba35c3289286c15d02434df375",
"assets/assets/images/iphone_plana/complete/Group%252081_iphone13promaxgold_portrait.png": "f66cf5718a9b1e6344c016bf225cd03d",
"assets/assets/images/iphone_plana/complete/Group%252082_iphone13promaxgold_portrait.png": "7d4fe141d419791118c3c1e838bc685e",
"assets/assets/images/iphone_plana/complete/Group%252085_iphone13promaxgold_portrait.png": "5a4b9352eaa57faa2af2b30538422b8f",
"assets/assets/images/iphone_plana/complete/Group%252092.png": "3602c21fc2bcf7dc690b85c773f13479",
"assets/assets/images/iphone_plana/complete/Group%252093.png": "61cdf6e03c72de0bc01415e2f63663ab",
"assets/assets/images/iphone_plana/complete/Group%252095.png": "93c70b7a6db2c0daecbfafa260542199",
"assets/assets/images/iphone_plana/create/create.gif": "68ef78dd43308518ae5b277ff5072184",
"assets/assets/images/iphone_plana/create/Group%252036_iphone13promaxgold_portrait.png": "74d526321a022a5fb32b7baaaf1eb602",
"assets/assets/images/iphone_plana/create/Group%252041_iphone13promaxgold_portrait.png": "5a85336f9da4ce9309f7ca8be0b2bca6",
"assets/assets/images/iphone_plana/create/Group%252049_iphone13promaxgold_portrait.png": "3374ab9140f7007a3ddfcb8f79da295b",
"assets/assets/images/iphone_plana/create/Group%252050_iphone13promaxgold_portrait.png": "4ce291ddc55c5a57dd7ed800f96aa4e0",
"assets/assets/images/iphone_plana/create/Group%252051_iphone13promaxgold_portrait.png": "b5105596116f40d91c66fc19b1a2b378",
"assets/assets/images/iphone_plana/create/Group%252052_iphone13promaxgold_portrait.png": "72e542a59fd9ad39d9463ed3f244a304",
"assets/assets/images/iphone_plana/create/Group%252087_iphone13promaxgold_portrait.png": "cccdbbe615bd58fa75068189ed4df56a",
"assets/assets/images/iphone_plana/engage/engage.gif": "4a0384f1c02355b68de02c469c621f31",
"assets/assets/images/iphone_plana/engage/Group%2520103.png": "c085515f6f4d3af9dcaa934cfc662601",
"assets/assets/images/iphone_plana/engage/Group%252044_iphone13promaxgold_portrait.png": "2dd322b934783a4da94173c9494f2429",
"assets/assets/images/iphone_plana/engage/Group%252089.png": "05f156a58e973b186a28d6279f565977",
"assets/assets/images/iphone_plana/engage/Group%252099.png": "57fdc0e91a2aff34327101d985d898a7",
"assets/assets/images/iphone_plana/Group%252043_iphone13promaxgold_portrait.png": "84ffa60ef99551cf2c25a40262078a36",
"assets/assets/images/iphone_plana/Group%252046_iphone13promaxgold_portrait.png": "144e885e626823a3f5b128610db6965b",
"assets/assets/images/iphone_plana/Group%252053_iphone13promaxgold_portrait.png": "b830c51b4f78a2b23f8e28dc2da265f0",
"assets/assets/images/iphone_plana/Group%252056_iphone13promaxgold_portrait.png": "c85a2f705bc576c40c59e1c482484fd4",
"assets/assets/images/iphone_plana/Group%252057_iphone13promaxgold_portrait.png": "a8a1c6d50f8353ceee7bae8d2be10e78",
"assets/assets/images/iphone_plana/Group%252058_iphone13promaxgold_portrait.png": "b60b8d194efe52d480a1d1e488507be8",
"assets/assets/images/iphone_plana/Group%252059_iphone13promaxgold_portrait.png": "6b5a3466d4814c6a4d2af33b788f4bae",
"assets/assets/images/iphone_plana/Group%252060_iphone13promaxgold_portrait.png": "46b0858fb289e6cb48a801d972a56878",
"assets/assets/images/iphone_plana/Group%252061_iphone13promaxgold_portrait.png": "53793df4e2d90ecc08c0c38124efd81e",
"assets/assets/images/iphone_plana/Group%252063_iphone13promaxgold_portrait.png": "9725b0237907303cac910b1bb90c8dba",
"assets/assets/images/iphone_plana/Group%252076_iphone13promaxgold_portrait.png": "698a9887345738bb73aede54b5226d85",
"assets/assets/images/iphone_plana/Group%252080_iphone13promaxgold_portrait.png": "16233afcb5199f9daf7a0b2b84e9a012",
"assets/assets/images/iphone_plana/Group%252083_iphone13promaxgold_portrait.png": "2ac430fddbf35ea447448634539a0d7d",
"assets/assets/images/iphone_plana/Group%252084_iphone13promaxgold_portrait.png": "c32748c8b08b1fef94409d3a71e7c28f",
"assets/assets/images/iphone_plana/Group%252088_iphone13promaxgold_portrait.png": "2f9ef8576c19a7a764e238e5db6d21c5",
"assets/assets/images/iphone_plana/post/Group%252038_iphone13promaxgold_portrait.png": "3227dbabea95017764e69116d0ecb943",
"assets/assets/images/iphone_plana/post/Group%252039_iphone13promaxgold_portrait.png": "2ef71845354f07989182c7284165b6c5",
"assets/assets/images/iphone_plana/post/Group%252042_iphone13promaxgold_portrait.png": "fb4db10ccea64f1af6a9932903587390",
"assets/assets/images/iphone_plana/post/Group%252054_iphone13promaxgold_portrait.png": "583c6e1f04586a616458fe8e8be4141d",
"assets/assets/images/iphone_plana/post/Group%252055_iphone13promaxgold_portrait.png": "7291d891c63b1bd8997cea500369a70e",
"assets/assets/images/iphone_plana/post/post.gif": "ccd39a9204ae3aa89e54fa83863257de",
"assets/assets/images/iphone_vendor/connect/connect.gif": "dbe757f085d39d93a8083e23a5261335",
"assets/assets/images/iphone_vendor/connect/Group%252019_iphone13promaxgold_portrait.png": "b2b79df4c424f1c7e2d8134b2ca77deb",
"assets/assets/images/iphone_vendor/connect/Group_16_iphone.png": "d2f3b0cc4b625b63cdc1ebe5546f4859",
"assets/assets/images/iphone_vendor/connect/Group_17_iphone.png": "8d88be9d50ff1839d8154ab1724c9faf",
"assets/assets/images/iphone_vendor/Group%252011_iphone13promaxgold_portrait.png": "92555fa01a09babd2b8409c05198bce9",
"assets/assets/images/iphone_vendor/Group%252013_iphone13promaxgold_portrait.png": "d73ba1aaca06fc3731c13e7b6693191c",
"assets/assets/images/iphone_vendor/Group%252014_iphone13promaxgold_portrait.png": "c6f5ae9763c7b85e61c62b5ac24c38e5",
"assets/assets/images/iphone_vendor/Group%252015_iphone13promaxgold_portrait.png": "48be942c5ef7d9e2eb0e4116da05d821",
"assets/assets/images/iphone_vendor/Group%25201_iphone13promaxgold_portrait.png": "d53b170ce956d2329a77522e6eda7e98",
"assets/assets/images/iphone_vendor/Group%252021_iphone13promaxgold_portrait.png": "7d541186e533f0056eca97581b4195b6",
"assets/assets/images/iphone_vendor/Group%252022_iphone13promaxgold_portrait.png": "1ba9c5c5cc773acbfb0bec5dc36001fc",
"assets/assets/images/iphone_vendor/Group%252023_iphone13promaxgold_portrait.png": "04c57afb141d387a7aeba5319299ecd5",
"assets/assets/images/iphone_vendor/Group%252025_iphone13promaxgold_portrait.png": "2f6dbb79a9078f8c8280c1b3298748bf",
"assets/assets/images/iphone_vendor/Group%252026_iphone13promaxgold_portrait.png": "08d2ce57a00852f67a3d96b40e936a57",
"assets/assets/images/iphone_vendor/Group%252028_iphone13promaxgold_portrait.png": "1e34dc5384088e1d2254dcd943ed7386",
"assets/assets/images/iphone_vendor/Group%25204_iphone13promaxgold_portrait.png": "054b278992d9858d45ac223cafe618e1",
"assets/assets/images/iphone_vendor/Group%25205_iphone13promaxgold_portrait.png": "b9534941266c2d55e0097ad919f687f1",
"assets/assets/images/iphone_vendor/Group%25207_iphone13promaxgold_portrait.png": "bb706f4f63853eb98a1e6671d2c6dc0d",
"assets/assets/images/iphone_vendor/Group%25208_iphone13promaxgold_portrait.png": "aa8b9cc95d9bc7634b407bd00aa794d4",
"assets/assets/images/iphone_vendor/Group%25209_iphone13promaxgold_portrait.png": "c5a562d300065cc5d6e06d59cefc3581",
"assets/assets/images/iphone_vendor/manage/Group%252020_iphone13promaxgold_portrait.png": "8678325beb7a4e4d48a62e92d1d130b8",
"assets/assets/images/iphone_vendor/manage/Group_24_iphone.png": "2f6dbb79a9078f8c8280c1b3298748bf",
"assets/assets/images/iphone_vendor/manage/Group_27_iphone.png": "2ce1d4bd9a484371b4606a3487c4ff7f",
"assets/assets/images/iphone_vendor/manage/Group_6_iphone.png": "a8d81c4effec74e9b00c6b810e96c3cc",
"assets/assets/images/iphone_vendor/manage/manage.gif": "fcdbfe0f56d30d25bb5a99fda92b5a36",
"assets/assets/images/iphone_vendor/metrics/Group_10_iphone.png": "17abc0724c830361f57a0ad31ec65b31",
"assets/assets/images/iphone_vendor/metrics/Group_2_iphone13.png": "2e9ff69dbfdae156dbd748112a5e4862",
"assets/assets/images/iphone_vendor/metrics/Group_iphone.png": "74b56454715191ff5bb37c830df101ba",
"assets/assets/images/iphone_vendor/metrics/metric.gif": "a9183941aae392d7366426095ac2ca38",
"assets/assets/images/logo_black.png": "666c2271e6d3d906f9bd8f038cf5f1ae",
"assets/assets/images/logo_white.png": "acf537e8205fc18ca5b6d8a8d802e28c",
"assets/assets/images/plana_ss/Group%252034.png": "adfcf81bb0295a480dfe9d2e4e9f2387",
"assets/assets/images/plana_ss/Group%252035.png": "415a1b7e2a6bcac619c95e9ba445296d",
"assets/assets/images/plana_ss/Group%252036.png": "c6745c5fb1ebc0272624ef9f806ad3df",
"assets/assets/images/plana_ss/Group%252037.png": "326216839feee20fcab1c22bdd25f13e",
"assets/assets/images/plana_ss/Group%252038.png": "16a6836ebb1a318ed6deef24b6a07297",
"assets/assets/images/plana_ss/Group%252039.png": "e97ed9d0503a6ae377b112fd9e390c66",
"assets/assets/images/plana_ss/Group%252040.png": "383976e83702c178bb1e2653d439a2a1",
"assets/assets/images/plana_ss/Group%252041.png": "eaeaa70420618d494d8be9a947c7047b",
"assets/assets/images/plana_ss/Group%252042.png": "51ef8c85eee8d41b0343860eb60c2051",
"assets/assets/images/plana_ss/Group%252043.png": "3cdd766a89668d0c4f6ced0b0996bce4",
"assets/assets/images/plana_ss/Group%252044.png": "17bea82832339caee12b7f08ab267668",
"assets/assets/images/plana_ss/Group%252046.png": "a146a5ea58637727e0341b02fc17ff42",
"assets/assets/images/plana_ss/Group%252047.png": "0f988183f3e810f39c26ee10842ae3ca",
"assets/assets/images/plana_ss/Group%252048.png": "9eacb420b188b927bc996d2c26985d52",
"assets/assets/images/plana_ss/Group%252049.png": "32436957a0fcb971a84fef77b1e582f3",
"assets/assets/images/plana_ss/Group%252050.png": "c5e7e1d191f832dcc8ff416d2e2029d0",
"assets/assets/images/plana_ss/Group%252051.png": "af26261233a3b993c0eab9528b4ec2a2",
"assets/assets/images/plana_ss/Group%252052.png": "f776fbdf0e7bb302ce672cdbe0652cf7",
"assets/assets/images/plana_ss/Group%252053.png": "1a9fdbf7381c2ce0b168ae86cb1fc641",
"assets/assets/images/plana_ss/Group%252054.png": "67ec33be299cf55902feae69e012d388",
"assets/assets/images/plana_ss/Group%252055.png": "a0e7607b4eb04c36d610c58cd1ff95fd",
"assets/assets/images/plana_ss/Group%252056.png": "e9c747a8c217414588d8014cc2d2842a",
"assets/assets/images/plana_ss/Group%252057.png": "8f5f4bd276599af273291f39f0918d1c",
"assets/assets/images/plana_ss/Group%252058.png": "2b5410b88de7c08f72c3d55fc0943a82",
"assets/assets/images/plana_ss/Group%252059.png": "527d98a08a4f5aa9386ad4cd5f8ece9b",
"assets/assets/images/plana_ss/Group%252060.png": "86764ffcf52ada9b7ea4b655c7c38112",
"assets/assets/images/plana_ss/Group%252061.png": "49f4ac20f7d7dd300e9ae39d4867bb89",
"assets/assets/images/plana_ss/Group%252063.png": "e3fd1bb5b00c341de28f2333be0a5a38",
"assets/assets/images/plana_ss/Group%252076.png": "77c99e54bef66efbc1752e6bc30a171e",
"assets/assets/images/plana_ss/Group%252077.png": "5e60495fc91f1771c84ca7c1d259d1d9",
"assets/assets/images/plana_ss/Group%252078.png": "f05a3fc4258da64dfb1055ddc1370ca8",
"assets/assets/images/plana_ss/Group%252079.png": "dd7a235b59aaed0a87ef24af49fe5625",
"assets/assets/images/plana_ss/Group%252080.png": "fdd8ec28eb929b6c465a09612a25a61e",
"assets/assets/images/plana_ss/Group%252081.png": "c231a1bc2f841558dfc177f36f7905c4",
"assets/assets/images/plana_ss/Group%252082.png": "2dda0dad155df5af952a39740fa586d4",
"assets/assets/images/plana_ss/Group%252083.png": "a94d500b7d16b1c70dc6eb7f7bef9f0a",
"assets/assets/images/plana_ss/Group%252084.png": "c198777a65b6ff0a8dd4c0b9e9263ef0",
"assets/assets/images/plana_ss/Group%252085.png": "ce75736398d3ea8c21de19c857602ad3",
"assets/assets/images/plana_ss/Group%252086.png": "65a452fc8003ed90c97793e2395c6f35",
"assets/assets/images/plana_ss/Group%252087.png": "c50c7da9a8881d3b0f57818627170473",
"assets/assets/images/plana_ss/Group%252088.png": "a33641db34caf820f00e754132c33449",
"assets/assets/images/Plana_User.m4v": "4264832676a2104414302db2a0b0ef2e",
"assets/assets/images/plana_vendor_ss/Group%25201.png": "c5b304fd5949d240846d295c13b6a779",
"assets/assets/images/plana_vendor_ss/Group%252010.png": "66c975f6aceb31b2065e7cbf18b6ec5a",
"assets/assets/images/plana_vendor_ss/Group%252011.png": "0c25492b415a78c868b9a566e2f5140f",
"assets/assets/images/plana_vendor_ss/Group%252013.png": "d03703ea7499c4661fb9a13cf5096cff",
"assets/assets/images/plana_vendor_ss/Group%252014.png": "4abd51b6dce04ef3b57d7da70cbdc41e",
"assets/assets/images/plana_vendor_ss/Group%252015.png": "a3ca8d07491d5f41d1c5522e441f9a4e",
"assets/assets/images/plana_vendor_ss/Group%252016.png": "0559ea2a167352650741aa89dc0e2074",
"assets/assets/images/plana_vendor_ss/Group%252017.png": "5f6f7602b8150b377f03dcd6c19e0907",
"assets/assets/images/plana_vendor_ss/Group%252018.png": "acfefd1d692774d2440055442b88a814",
"assets/assets/images/plana_vendor_ss/Group%252019.png": "7d6eb82df8598c6b5dae18d0f444c0f0",
"assets/assets/images/plana_vendor_ss/Group%25202.png": "16472a48d469e78fcf91a2bf87ea2506",
"assets/assets/images/plana_vendor_ss/Group%252020.png": "394f6f49cbb3174c881e00b780c268f4",
"assets/assets/images/plana_vendor_ss/Group%252021.png": "e73fdc6a2f6ecd4b20a0b2119350831c",
"assets/assets/images/plana_vendor_ss/Group%252022.png": "600a765fcd1c6abd58e4e8cb8a8b1cd9",
"assets/assets/images/plana_vendor_ss/Group%252023.png": "85e6825f9fcb549b474b2793c22bfb6a",
"assets/assets/images/plana_vendor_ss/Group%252024.png": "9ba8c056842dd34acfca6fb688b98bc8",
"assets/assets/images/plana_vendor_ss/Group%252025.png": "d916fb8cdafa3a9e9e9239d42af83aad",
"assets/assets/images/plana_vendor_ss/Group%252026.png": "6491fb091b473387df2fa8d2764d6954",
"assets/assets/images/plana_vendor_ss/Group%252027.png": "fb049acb81cc019b7050e3a2184ffcad",
"assets/assets/images/plana_vendor_ss/Group%252028.png": "a842c02468f64b1ea1f945395cfd1feb",
"assets/assets/images/plana_vendor_ss/Group%25203.png": "1beaec0318e156f276efda0f2528c019",
"assets/assets/images/plana_vendor_ss/Group%25204.png": "56cd1aa732e59a9ac1528776a5c8939d",
"assets/assets/images/plana_vendor_ss/Group%25205.png": "751b91d833fec4102035bdbe5d6c7993",
"assets/assets/images/plana_vendor_ss/Group%25206.png": "817d207cec5ed47023c120fa64a3e0e8",
"assets/assets/images/plana_vendor_ss/Group%25207.png": "38b696c57b8633f258f93aa847004bac",
"assets/assets/images/plana_vendor_ss/Group%25208.png": "baecdcef26526e480fef208510c3bd30",
"assets/assets/images/plana_vendor_ss/Group%25209.png": "04c2cb7fd2a3ede2ca5e0f2032086df7",
"assets/assets/images/play.png": "4c44d5242c7e805d3643399ebcd5e0f2",
"assets/assets/images/svgs/bg_frame1%2520-%2520Copy.svg": "8ff69010e459f03298f9296029667ec9",
"assets/assets/images/svgs/bg_frame1.svg": "8ff69010e459f03298f9296029667ec9",
"assets/assets/images/svgs/pb.svg": "7277cc2c415af9f06dcd3892a6d93c7f",
"assets/assets/images/svgs/plana_logo.svg": "a353569e4cdac1d7263aabc093f86542",
"assets/assets/images/userAppLogo.png": "8e0bc11bb3456c61c04ac17c58e867dc",
"assets/FontManifest.json": "5760425d0131721b26d1548d259830ab",
"assets/fonts/MaterialIcons-Regular.otf": "a94447720adad203fc3bdd753961fc5f",
"assets/NOTICES": "e37e448931da7d6dc2da134eb9ec48ba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/sign_in_button/assets/logos/2.0x/facebook_new.png": "dd8e500c6d946b0f7c24eb8b94b1ea8c",
"assets/packages/sign_in_button/assets/logos/2.0x/google_dark.png": "68d675bc88e8b2a9079fdfb632a974aa",
"assets/packages/sign_in_button/assets/logos/2.0x/google_light.png": "1f00e2bbc0c16b9e956bafeddebe7bf2",
"assets/packages/sign_in_button/assets/logos/3.0x/facebook_new.png": "689ce8e0056bb542425547325ce690ba",
"assets/packages/sign_in_button/assets/logos/3.0x/google_dark.png": "c75b35db06cb33eb7c52af696026d299",
"assets/packages/sign_in_button/assets/logos/3.0x/google_light.png": "3aeb09c8261211cfc16ac080a555c43c",
"assets/packages/sign_in_button/assets/logos/facebook_new.png": "93cb650d10a738a579b093556d4341be",
"assets/packages/sign_in_button/assets/logos/google_dark.png": "d18b748c2edbc5c4e3bc221a1ec64438",
"assets/packages/sign_in_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/userAppLogo.png": "ddce88522bc8310b00d47bcd22c04b23",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "8e0bc11bb3456c61c04ac17c58e867dc",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "daddfcb98edb340a28cf24d3c5da7b32",
"icons/Icon-512.png": "dc1c9ffd79e70367c9e5d33bc67ff739",
"icons/Icon-maskable-192.png": "daddfcb98edb340a28cf24d3c5da7b32",
"icons/Icon-maskable-512.png": "dc1c9ffd79e70367c9e5d33bc67ff739",
"index.html": "4a3a744f39fb25314a828321849ab638",
"/": "4a3a744f39fb25314a828321849ab638",
"main.dart.js": "b823ca4e00b869a330ff6d8972e083f2",
"manifest.json": "de85626b117ced3e42af2c40a7ccad2b",
"version.json": "a33f6549c1d85731ac3f95b03fbcd588"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
