// Create NGL Stage object, global variable
var stage = new NGL.Stage( "structure" );
stage.setParameters({backgroundColor: "white"});
// deal with window re-sizing
window.addEventListener( "resize", function( event ){stage.handleResize();}, false );

function color_protein(o, display_scheme) {
  o.addRepresentation("surface",{sele: "(:A or :B or :C) and protein", color: display_scheme.AschemeID})
  o.addRepresentation("cartoon",{sele: "(:A or :B or :C) and protein", color: display_scheme.AschemeID})
  o.autoView()
}

var A_fixations_scheme = NGL.ColormakerRegistry.addScheme(function (params) {
this.atomColor = function (atom) {
if (atom.resno == 0) {return 0xfff5f0}
else if ([16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 306, 307, 308, 313, 315, 317, 318, 319, 320, 321, 322, 323, 324, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 356, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 406, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174].includes(atom.resno)) {return 0xfff5f0}
else if ([22, 51, 104, 213, 225, 283, 305, 309, 310, 311, 312, 314, 316, 325, 355, 357, 358, 405, 407, 408, 792, 971].includes(atom.resno)) {return 0x67000d}
else {return 0xfff5f0}
}})

var display_fixations = {AschemeID:A_fixations_scheme}


var A_surface_scheme = NGL.ColormakerRegistry.addScheme(function (params) {
this.atomColor = function (atom) {
if (atom.resno == 0) {return 0xe7e7e7}
else if ([558, 679, 522, 406, 325, 300, 925, 792, 107, 587, 643, 96, 768, 673, 742, 312, 39, 430, 530, 1024, 175, 1027, 806, 891, 296, 429, 375, 542, 390, 986, 831, 138, 868, 137, 208, 799, 63, 419, 210, 822, 663, 1012, 243, 252, 98, 180, 100, 305, 64, 788, 177, 527, 352, 711, 250, 787, 818, 624, 261, 793, 206, 422, 959, 176, 140, 509, 257, 213, 492, 1005, 281, 303, 106, 840, 288, 650, 37, 1009, 182, 963, 334, 1031, 253, 790, 103, 854, 92, 102, 659, 595, 681, 817, 284, 464, 327, 510, 357, 1019, 769, 333, 678, 476, 758, 165, 919, 955, 72, 330, 981, 697, 957, 956, 361, 671, 577, 723, 912, 317, 832, 298, 669, 391, 581, 791, 112, 815, 164, 548, 197, 771, 814, 999, 961, 269, 331, 586, 653, 755, 256, 709, 717, 589, 394, 529, 994, 169, 212, 699, 850, 786, 412, 526, 562, 821, 909, 800, 738, 215, 879, 880, 200, 411, 713, 708, 222, 549, 323, 977, 775, 825, 736, 218, 523, 129, 1013, 441, 316, 336, 883, 684, 309, 207, 545, 508, 409, 638, 378, 901, 496, 449, 314, 904, 1004, 55, 51, 479, 810, 245, 719, 273, 318, 326, 617, 987, 686, 975, 1015, 198, 579, 239, 53, 286, 988, 41, 488, 541, 531, 582, 694, 423, 528, 923, 689, 408, 461, 178, 135, 367, 634, 661, 47, 359, 905, 437, 677, 124, 74, 819, 1018, 668, 701, 875, 345, 642, 468, 649, 350, 258, 782, 915, 443, 315, 133, 163, 183, 344, 871, 454, 110, 416, 104, 860, 259, 356, 828, 1017, 520, 622, 445, 876, 602, 743, 43, 540, 142, 368, 128, 803, 620, 363, 830, 342, 864, 84, 94, 86, 374, 789, 424, 407, 1032, 448, 90, 332, 621, 440, 1023, 73, 552, 285, 532, 438, 930, 972, 920, 783, 381, 431, 260, 547, 377, 676, 173, 852, 335, 38, 111, 220, 615, 299, 887, 139, 926, 237, 978, 179, 647, 293, 313, 740, 279, 223, 465, 979, 656, 517, 538, 507, 685, 614, 525, 349, 954, 188, 996, 932, 62, 466, 307, 439, 519, 772, 395, 227, 292, 784, 724, 324, 578, 265, 827, 280, 682, 1033, 108, 680, 1010, 50, 757, 691, 181, 591, 393, 365, 683, 544, 189, 861, 655, 877, 339, 328, 355, 895, 452, 546, 295, 695, 980, 130, 270, 144, 557, 704, 353, 1014, 389, 872, 873, 1020, 714, 171, 251, 148, 283, 311, 462, 174, 338, 997, 812, 319, 66, 248, 1001, 45, 301, 226, 911, 660, 924, 811, 1006, 970, 478, 778, 813, 958, 113, 191, 246, 702, 770, 654, 707, 665, 490, 101, 1025, 1028, 796, 518, 71, 630, 835, 436, 105, 457, 435, 953, 290, 563, 779, 1002, 224, 646, 85, 1016, 68, 583, 78, 263, 664, 91, 399, 625, 225, 320, 1022, 564, 908, 969, 804, 362, 816, 898, 442, 521, 657, 565, 146, 444, 971, 453, 1011, 131, 741, 433, 421, 960, 720, 776, 609, 44, 487, 859, 870, 70, 351, 989, 995, 985, 122, 56, 489, 88, 858, 125, 807, 370, 147, 618, 109, 93, 340, 89, 404, 321, 916, 698].includes(atom.resno)) {return 0x6C7593}
else {return 0xe7e7e7}
}})

var display_surface = {AschemeID:A_surface_scheme}


var A_epitopes_scheme = NGL.ColormakerRegistry.addScheme(function (params) {
this.atomColor = function (atom) {
if (atom.resno == 0) {return 0xf0f0f0}
else if ([309, 311, 312, 316, 325, 355, 357, 314].includes(atom.resno)) {return 0x440154}
else if ([407, 408].includes(atom.resno)) {return 0xfde725}
else {return 0xf0f0f0}
}})

var display_epitopes = {AschemeID:A_epitopes_scheme}

var A_rbd_overlap_scheme = NGL.ColormakerRegistry.addScheme(function (params) {
this.atomColor = function (atom) {
if (atom.resno == 0) {return 0xf0f0f0}
else if ([312, 355, 357, 325, 309, 407, 408, 314, 316, 311].includes(atom.resno)) {return 0xff5000}
else if ([].includes(atom.resno)) {return 0xffd000}
else if ([404, 405, 406, 308, 310, 313, 315, 317, 318, 319, 320, 321, 322, 323, 324, 352, 353, 354, 356, 358, 359].includes(atom.resno)) {return 0x6a6a6a}
else {return 0xf0f0f0}
}})

var display_rbd_overlap = {AschemeID:A_rbd_overlap_scheme}



//Load initial display coloring
document.addEventListener("DOMContentLoaded", function () {
// Load PDB entry
stage.loadFile( "rcsb://6u7h", { defaultRepresentation: false, name: "spike_structure"} ).then((o)=>{
  o.setRotation([1.0, 3.0, 1.5 ]);
  color_protein(o,display_epitopes)});
});

// remove default hoverPick mouse action
// this appears to remve the default tooltip behavior
stage.mouseControls.remove("hoverPick")

// Spike residues in predicted epitopes
var spike_clickable_residues = [309, 311, 312, 316, 325, 355, 357, 314, 407, 408]


// create tooltip element and add to the viewer canvas
var tooltip = document.createElement("div");
Object.assign(tooltip.style, {
  display: "none",
  position: "relative",
  zIndex: 10,
  pointerEvents: "none",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  color: "lightgrey",
  padding: "0.5em",
  fontFamily: "sans-serif"
});
stage.viewer.container.appendChild(tooltip);


// listen to `hovered` signal to move tooltip around and change its text
// only label residues that are in predicted epitopes
stage.signals.hovered.add(function (pickingProxy) {
  if (pickingProxy && (pickingProxy.atom || pickingProxy.bond)){
    var atom = pickingProxy.atom || pickingProxy.closestBondAtom;
    var cp = pickingProxy.canvasPosition;

    if (spike_clickable_residues.includes(atom.resno)){
      tooltip.innerText = "Spike " + atom.resno;
      tooltip.style.bottom = cp.y  + "px";
      tooltip.style.left = cp.x  + "px";
      console.log(tooltip.style.left);
      tooltip.style.display = "inline-block";}
    else {tooltip.style.display = "none";}
  }else{
    tooltip.style.display = "none";
  }
});

// click on residue to redirect to nextstrain build, colored by genotype at residue
stage.signals.clicked.add(function (pickingProxy) {
  if (pickingProxy && (pickingProxy.atom || pickingProxy.bond)){
    var atom = pickingProxy.atom || pickingProxy.closestBondAtom;
    if (spike_clickable_residues.includes(atom.resno)){window.open(`https://nextstrain.org/groups/blab/`, '_blank')}
  }
});


// JavaScript to handle dropdown changes
function handleChangeStructure() {
    // Get the selected option value
    let selectedValue = document.getElementById('colorby_dropdown').value;
    var display_scheme
    if (selectedValue== "display-epitopes") {display_scheme=display_epitopes}
    else if (selectedValue== "display-fixations") {display_scheme=display_fixations}
    else if (selectedValue== "display-surface") {display_scheme=display_surface}
    else if (selectedValue== "display-rbd-overlap") {display_scheme=display_rbd_overlap}
    let components = stage.getComponentsByName("spike_structure")
    color_protein(components, display_scheme)
}

// JavaScript to handle residue input changes
function handleResidueSelection() {
    // Get the selected option value
    let selectedValue = document.getElementById('select_spike_residue_input').value;

    // check if selectedValue is in predicted epitope or not.
    // if it is, color it red, if not, color it light pink
    if (spike_clickable_residues.includes(Number(selectedValue))) {var selected_color= 0xbc141a}
    else {var selected_color= 0xfc8a6a}


    var A_select_scheme = NGL.ColormakerRegistry.addScheme(function (params) {
    this.atomColor = function (atom) {
    if (atom.resno == 0) {return 0xf0f0f0}
    else if (atom.resno == selectedValue) {return selected_color}
    else if ([309, 311, 312, 316, 325, 355, 357, 314].includes(atom.resno)) {return 0x440154}
    else if ([407, 408].includes(atom.resno)) {return 0xfde725}
    else {return 0xf0f0f0}
    }})

    var select_scheme = {AschemeID:A_select_scheme}
    let components = stage.getComponentsByName("spike_structure")
    color_protein(components, select_scheme)
}
