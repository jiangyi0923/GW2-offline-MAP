var achievement = [
	{ "zoneid": "18","name":'测试1',"introduce":'这是个line路径测试',"tepy":"line","img":'./scripts/images/SkillChallenges.png',"color":'#FFEC8B',"bounds":[[10957.3,10957.3],[11000.8,11035.4],[10716.7,11203.4],[10677.5,11133.8]]},
	{ "zoneid": "18","name":'测试2',"introduce":'这是个point标记测试',"tepy":"point","img":['./scripts/images/SkillChallenges.png',,'./scripts/images/Waypoint.png','./scripts/images/Tasks.png'],"ps":['娃哈哈',,,,'结束'],"bounds":[[11535.4,10722.9],[11498.3,10658.7],[11780,10485.7],[11823.3,10552.2],[11857,10658]]}
];

var launchpads = [
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[3291 ,25775], [3704, 26047]]},//跳板和岩浆通道
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[3839, 26015], [3906, 25608]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[3906, 25608], [4640, 25692]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[4507, 25396], [4708, 24977]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[4706, 24890], [4511, 24813]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[4505, 25271], [4125, 25285]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[4058, 25279], [3446, 25017]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[3291, 25774], [3704, 26047]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[5081, 29125], [5261, 28883]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[5100, 29397], [5456, 30042]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[5275, 29520], [5081, 29125]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[5457, 30042], [6074, 29718]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[5501, 29895], [5275, 29520]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[5770, 30532], [5456, 30044]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[6049, 29316], [5501, 29897]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[6073, 29718], [6242, 29374]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[6162, 30119], [6073, 29718]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[6200, 30230], [7052, 30403]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[6216, 30103], [6423, 29888]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[6242, 29374], [6505, 29536]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[6387, 29286], [6021, 29313]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[6423, 29888], [6850, 29999]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[6505, 29536], [6535, 29093]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[6574, 28954], [6985, 29132]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[6813, 29739], [6508, 29537]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[6822, 28872], [6694, 29200]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[6860, 29092], [7005, 28800]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[6986, 30318], [6310, 29799]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[7005, 28905], [6607, 29185]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[7047, 29484], [6505, 29536]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[7089, 28731], [7299, 29043]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[7299, 29043], [7926, 28981]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[7394, 29416], [6927, 29988]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[7544, 29690], [7047, 29484]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[7926, 28981], [7927, 29466]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[7927, 29466], [7394, 29416]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[20907, 7645], [20902, 7845]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[21408, 7470], [20907, 7645]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[21749, 7519], [21896, 7322]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[21896, 7322], [22298, 7966]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[22303, 8024], [22753, 7609]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[22308, 7376], [22244, 7556]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[22406, 7857], [22335, 7653]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[22456, 7439], [21749, 7519]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[22753, 7609], [22944, 7235]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[22944, 7235], [22456, 7439]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[23089, 8148], [23538, 7673]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[23146, 7517], [23492, 6934]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[23380, 7561], [23025, 8129]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[23632, 8070], [23575, 8061]]},
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[13794, 10161], [14125, 9839]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[14628, 10642], [14684, 10351]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[16123, 11449], [15715, 11526]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[16719, 16097], [16790, 16379]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[17394, 16907], [17059, 17134]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[16395, 16847], [16271, 17151]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[16345, 20165], [15920, 20071]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[16984, 21336], [17092, 21633]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[15758, 20762], [16036, 21031]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[20441, 23215], [20508, 23478]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[21148, 22756], [21201, 22504]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[29462, 18297], [29698, 18042]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[29637, 16740], [29530, 16996]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[31074, 16994], [30857, 17040]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[27655, 9992], [27820, 10306]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[27688, 11471], [27813, 11056]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[28217, 11546], [28558, 11524]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[29771, 12832], [29751, 12716]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[29819, 12798], [29781, 12708]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[29900, 12775], [29800, 12687]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[29646, 15191], [29645, 14997]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[29839, 15255], [29689, 15497]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[30527, 15382], [30258, 15615]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[25738, 10887], [25989, 10794]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[24256, 10327], [24486, 10547]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[15224, 24113], [15138, 24433]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[13922, 24269], [13706, 24364]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[12708, 24331], [12352, 24504]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[11912, 24958], [12203, 24781]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[11248, 25762], [10899, 25948]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[11122, 27381], [11248, 27635]]}, 
	{"tepy":"line","img":'./scripts/images/launch.png',"color":'#90EE90',"bounds": [[11049, 27979], [11328, 27915]]},
	{"tepy":"img","img":'./scripts/images/way_z.png',"color":'#EE7AE9',"bounds": [[6114, 20837], [7281, 20046]]}, //图传送门
	{"tepy":"img","img":'./scripts/images/way_z.png',"color":'#EE7AE9',"bounds": [[6095, 20859], [5946, 21489]]}, 
	{"tepy":"img","img":'./scripts/images/way_z.png',"color":'#EE7AE9',"bounds": [[6073, 20856], [5514, 21765]]}, 
	{"tepy":"img","img":'./scripts/images/way_z.png',"color":'#EE7AE9',"bounds": [[5774, 20768], [5248, 19931]]}, 
	{"tepy":"img","img":'./scripts/images/way_z.png',"color":'#EE7AE9',"bounds": [[5772, 20802], [5407, 20840]]}, 
	{"tepy":"img","img":'./scripts/images/way_z.png',"color":'#EE7AE9',"bounds": [[5796, 20806], [5290, 21885]]}, 
	{"tepy":"img","img":'./scripts/images/way_z.png',"color":'#EE7AE9',"bounds": [[16646, 14662], [13872, 20331]]}, 
	{"tepy":"img","img":'./scripts/images/way_z.png',"color":'#EE7AE9',"bounds": [[16680, 14699], [20501, 14271]]}, 
	{"tepy":"img","img":'./scripts/images/way_z.png',"color":'#EE7AE9',"bounds": [[16663, 14799], [24051, 14060]]}, 
	{"tepy":"img","img":'./scripts/images/way_z.png',"color":'#EE7AE9',"bounds": [[16621, 14815], [10450, 20912]]}, 
	{"tepy":"img","img":'./scripts/images/way_z.png',"color":'#EE7AE9',"bounds": [[16550, 14759], [6003, 20530]]}, 
	{"tepy":"img","img":'./scripts/images/way_z.png',"color":'#EE7AE9',"bounds": [[16592, 14666], [11341, 11005]]}, 
	{"tepy":"img","img":'./scripts/images/way_z.png',"color":'#EE7AE9',"bounds": [[11937, 10966], [29065, 18418]]}, 
	{"tepy":"img","img":'./scripts/images/way_z.png',"color":'#EE7AE9',"bounds": [[17390, 23393], [16706, 12619]]}, 
	{"tepy":"img","img":'./scripts/images/way_z.png',"color":'#EE7AE9',"bounds": [[17418, 23392], [16672, 16653]]}, 
	{"tepy":"img","img":'./scripts/images/way_z.png',"color":'#EE7AE9',"bounds": [[17442, 23401], [17815, 15000]]},
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[5754, 15219], [4929, 15359]]}, //沙门 silverwastes
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[4942, 15550], [4429, 14751]]}, // silverwastes
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[4730, 14951], [5205, 14296]]}, // silverwastes
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[5063, 15002], [4319, 15337]]}, // silverwastes
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[4815, 15589], [4784, 15606]]}, // silverwastes
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[2028, 15461], [2082, 15597]]}, // verdant
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[2778, 15132], [2778, 15201]]}, // verdant
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[810, 17777], [1185, 18496]]}, // auric
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[1423, 16995], [1470, 18080]]}, // auric
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[1970, 18729], [2118, 17772]]}, // auric
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[1060, 17395], [2286, 17520]]}, // auric
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[965, 16732], [2030, 16413]]}, // auric
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[1531, 16403], [2490, 17495]]}, // auric
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[5090, 18256], [4609, 18419]]}, // tangled
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[4371, 18477], [4328, 17935]]}, // tangled
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[3854, 17666], [4323, 17881]]}, // tangled
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[3873, 18618], [4264, 17881]]}, // tangled
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[2940, 18530], [3571, 17704]]}, // tangled
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[3606, 18087], [3743, 18275]]}, // tangled
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[3631, 19087], [3538, 19162]]}, // tangled
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[5101, 19099], [5152, 19007]]}, // tangled
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[3721, 20383], [4149, 20777]]}, // dragon
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28149, 28296], [28132, 28285]]}, // oasis
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28245, 28109], [28232, 28137]]}, // oasis
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[27966, 28040], [28030, 28142]]}, // oasis
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28032, 26973], [28262, 26970]]}, // oasis
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28151, 28088], [28140, 28086]]}, // oasis
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28100, 28079], [28066, 27984]]}, // oasis
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28431, 28000], [28436, 28034]]}, // oasis
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28226, 28101], [28284, 28133]]}, // oasis
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28380, 28275], [28381, 28265]]}, // oasis
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28929, 26383], [29074, 26502]]}, // oasis
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[24847, 25395], [24995, 25548]]}, // highlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28508, 25226], [28327, 25182]]}, // highlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26974, 24824], [26944, 24570]]}, // highlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26424, 25240], [26355, 25206]]}, // highlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28562, 24410], [28598, 24426]]}, // highlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26069, 25136], [26046, 25167]]}, // highlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[27005, 25028], [27125, 25377]]}, // highlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26996, 25586], [27070, 25537]]}, // highlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[27955, 24186], [27849, 24145]]}, // highlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26995, 25104], [26904, 25076]]}, // highlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26480, 25079], [26483, 25326]]}, // highlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26882, 24629], [26867, 24859]]}, // highlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[27666, 24713], [27515, 24585]]}, // highlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28523, 24586], [28529, 24497]]}, // highlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[27182, 24195], [27130, 24190]]}, // highlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[29217, 24268], [29304, 24414]]}, // highlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28890, 29594], [28912, 29558]]}, // riverlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[27266, 30588], [27069, 30611]]}, // riverlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26162, 30456], [26136, 30702]]}, // riverlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[27867, 28683], [27557, 29123]]}, // riverlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[27406, 28556], [27160, 28549]]}, // riverlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26970, 31132], [26889, 31279]]}, // riverlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28358, 28683], [28545, 28764]]}, // riverlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26152, 30091], [26074, 29489]]}, // riverlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28163, 30967], [28167, 30921]]}, // riverlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[27122, 29635], [27229, 29451]]}, // riverlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28108, 31716], [28247, 31532]]}, // riverlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28591, 30750], [28639, 30793]]}, // riverlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28173, 31658], [28317, 31755]]}, // riverlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28246, 31661], [28206, 31579]]}, // riverlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28538, 29828], [28541, 30457]]}, // riverlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[27212, 29324], [26952, 29176]]}, // riverlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26131, 30734], [26097, 31008]]}, // riverlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28294, 31497], [28262, 31390]]}, // riverlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28806, 28982], [28803, 29197]]}, // riverlands
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28927, 32028], [28920, 31979]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28814, 32994], [28853, 32870]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26086, 36171], [26272, 36310]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26825, 36290], [26942, 36484]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26929, 35442], [26833, 35543]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[25833, 35530], [25696, 35249]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[27913, 34775], [27855, 34829]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[27803, 32846], [27811, 32934]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26653, 35617], [26561, 35673]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26717, 36548], [26733, 36379]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26451, 33530], [26674, 33373]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28090, 34048], [27921, 34022]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26064, 33024], [26044, 33249]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28643, 34843], [28631, 34882]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[25873, 35659], [25878, 35565]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26745, 36101], [26756, 35922]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[25848, 35778], [25798, 35895]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26110, 33315], [26161, 33462]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28730, 34530], [28787, 34531]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26657, 36082], [26694, 36201]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[27578, 35699], [27599, 35642]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26588, 36299], [26578, 36317]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26352, 35541], [26261, 35255]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28103, 32341], [28025, 32310]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[27891, 32991], [27846, 32970]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[25933, 34433], [26172, 34253]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26851, 36353], [26842, 36220]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28792, 34028], [28849, 34197]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26448, 35866], [26615, 36101]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26736, 35223], [26798, 35202]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28668, 33764], [28648, 33645]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26756, 33275], [26695, 33336]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[27376, 34434], [27426, 34355]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26153, 32221], [26455, 32279]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28641, 33393], [28685, 33319]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[25778, 34728], [25919, 34513]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26380, 35886], [26461, 36155]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26565, 36458], [26635, 36360]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26249, 32932], [26299, 32746]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28752, 35013], [28850, 34953]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26841, 32846], [27249, 32652]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[27735, 34196], [27852, 34441]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[28859, 33114], [28717, 33237]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[25671, 35065], [25575, 34897]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26815, 35339], [26952, 35160]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[26258, 36042], [26241, 36123]]}, // desolation
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[32668, 37709], [32820, 37826]]}, // vabbi
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[33368, 38507], [33413, 38596]]}, // vabbi
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[35448, 38673], [35439, 38910]]}, // vabbi
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[35307, 37813], [35578, 37795]]}, // vabbi
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[35379, 38572], [35360, 38673]]}, // vabbi
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[33323, 36629], [33344, 36548]]}, // vabbi
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[35579, 37799], [35462, 38057]]}, // vabbi
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[33354, 37074], [33323, 36994]]}, // vabbi
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[35113, 38619], [35252, 38572]]}, // vabbi
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[32843, 36968], [32966, 36930]]}, // vabbi
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[31402, 37023], [31390, 37033]]}, // vabbi
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[32843, 36650], [32966, 36689]]}, // vabbi
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[30922, 38995], [30887, 38734]]}, // vabbi
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[35361, 37930], [35382, 37915]]}, // vabbi
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[30887, 38739], [30922, 39088]]}, // vabbi
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[32569, 36610], [32600, 36719]]}, // vabbi
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[35564, 37945], [35547, 37858]]}, // vabbi
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[32526, 36812], [32115, 36812]]}, // vabbi
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[35596, 38795], [35664, 38889]]}, // vabbi
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[35432, 37746], [35499, 37786]]}, // vabbi
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[35479, 38038], [35545, 37926]]}, // vabbi
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[31006, 39088], [30887, 38734]]}, // vabbi
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[32024, 36810], [31958, 36785]]}, // vabbi
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[32413, 36905], [32349, 36996]]}, // vabbi
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[35412, 37727], [35324, 37795]]}, // vabbi
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[35317, 38728], [35358, 38909]]}, // vabbi
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[30887, 38739], [31005, 38997]]}, // vabbi
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[35503, 37828], [35543, 37798]]}, // vabbi
	{"tepy":"line","img":'./scripts/images/way_i.png',"color":'#EEE685',"bounds": [[32235, 37601], [32052, 37585]]}, // vabbi
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[877, 16061], [790, 16219]]}, //过图门 verdant to auric
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[2394, 18790], [2915, 18296]]}, // auric to tangled
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[2902, 19509], [3776, 19771]]}, // tangled to dragon
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[4155, 15495], [3750, 15250]]}, // silverwastes to verdant
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[5974, 15604], [5865, 15283]]}, // brisban to silverwastes
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[6039, 17105], [5559, 16744]]}, // brisban to dry
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[8011, 17021], [8082, 17270]]}, // metrica to brisban
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[9492, 14615], [9218, 14666]]}, // kessex to brisban
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[9443, 16316], [9244, 16368]]}, // caledon to brisban
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[10229, 20633], [9926, 20038]]}, // grove to caledon
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[9130, 17658], [9435, 17664]]}, // metrica to caledon
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[11061, 16191], [11090, 16023]]}, // caledon to kessex
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[12232, 14028], [12234, 14141]]}, // kessex to queensdale
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[10301, 14182], [10476, 13932]]}, // kessex to queensdale
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[13353, 14230], [13561, 14110]]}, // kessex to gendarran
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[11900, 10461], [12217, 10587]]}, // divinity to doric
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[13385, 10069], [13623, 10120]]}, // doric to harathi
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[11245, 11602], [11021, 11934]]}, // divinity to queensdale
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[13327, 12613], [13523, 12681]]}, // queensdale to gendarran
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[14344, 12335], [14341, 12140]]}, // gendarran to harathi
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[15718, 12361], [15749, 12195]]}, // gendarran to harathi
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[17487, 13631], [17758, 13600]]}, // gendarran to lornar
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[17544, 12749], [17780, 12754]]}, //gendarran to snowden
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[15879, 14217], [16119, 14380]]}, // gendarran to lion
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[16823, 15764], [16767, 15921]]}, // lion to bloodtide
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[17448, 15031], [17786, 15120]]}, // lion to lornar
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[17545, 16082], [17784, 16001]]}, // bloodtide to lornar
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[17602, 17798], [17795, 17828]]}, // bloodtide to lornar
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[15542, 18835], [15529, 19192]]}, // bloodtide to sparkfly
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[19344, 16580], [19618, 16380]]}, // lornar to dredgehaunt
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[19035, 18066], [19184, 18273]]}, // lornar to timberimg
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[20665, 17971], [20618, 18243]]}, // dredgehaunt to timberimg
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[19107, 13401], [19178, 13188]]}, // snowden to lornar
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[21645, 11577], [22032, 11797]]}, // snowden to wayfarer
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[20977, 11386], [21044, 11204]]}, // snowden to frostgorge
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[21428, 14519], [22148, 14491]]}, // hoelbrak to wayfarer
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[21086, 14721], [20942, 15114]]}, // hoelbrak to dredgehaunt
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[23110, 11450], [23061, 11163]]}, // wayfarer to frostgorge
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[23356, 11968], [23680, 11995]]}, // wayfarer to diessa
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[23706, 9704], [23993, 9741]]}, // frostgorge to fireheart
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[21330, 8244], [21380, 8046]]}, // frostgorge to bitterfrost
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[24301, 13685], [24090, 13465]]}, // citadel to diessa
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[25049, 14227], [25270, 14411]]}, // citadel to plains
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[26719, 13660], [26847, 13506]]}, // plains to diessa
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[29104, 14842], [29269, 14884]]}, // plains to blazeridge
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[28217, 13642], [28194, 13489]]}, // plains to marches
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[30932, 16429], [30928, 16180]]}, // fields to blazeridge
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[29314, 12615], [29103, 12452]]}, // blazeridge to marches
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[27235, 10757], [27059, 10748]]}, // marches to fireheart
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[19532, 21222], [19583, 21431]]}, // timberimg to maelstrom
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[17643, 21789], [17882, 21744]]}, // sparkfly to maelstrom
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[16978, 22219], [16980, 22547]]}, // sparkfly to straits
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[17870, 23464], [17679, 23537]]}, // maelstrom to straits
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[14575, 24541], [14352, 24600]]}, // straits to malchor
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[34276, 39104], [33572, 40060]]},
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[30987, 36368], [28936, 36264]]},
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[27324, 31710], [27327, 31868]]},
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[28249, 28612], [28780, 28090]]},
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[27941, 26042], [27948, 25801]]},
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[32785, 43568], [32754, 43078]]},
	{"tepy":"img","img":'./scripts/images/way_o.png',"color":'#8FBC8F',"bounds": [[11926, 25129], [11731, 25347]]} // malchor to cursed
		
];