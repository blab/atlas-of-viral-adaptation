// Create NGL Stage object, global variable
var stage = new NGL.Stage( "structure" );
stage.setParameters({backgroundColor: "white"});
// deal with window re-sizing
window.addEventListener( "resize", function( event ){stage.handleResize();}, false );

function color_protein(o, display_scheme) {
  o.addRepresentation("surface", {sele: "(:A or :C or :E) and protein", color: display_scheme.AschemeID})
  o.addRepresentation("surface", {sele: "(:B or :D or :F) and protein", color: display_scheme.BschemeID})
  o.autoView()
}

var B_fixations_scheme = NGL.ColormakerRegistry.addScheme(function (params) {
this.atomColor = function (atom) {
if (atom.resno == 0) {return 0xfff5f0}
else if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222].includes(atom.resno)) {return 0xfff5f0}
else if ([124, 172].includes(atom.resno)) {return 0x67000d}
else {return 0xfff5f0}
}})


var A_fixations_scheme = NGL.ColormakerRegistry.addScheme(function (params) {
this.atomColor = function (atom) {
if (atom.resno == 0) {return 0xfff5f0}
else if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 75, 76, 77, 78, 79, 80, 81, 82, 83, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327].includes(atom.resno)) {return 0xfff5f0}
else if ([74, 84, 97, 162, 163, 164, 185, 216, 256, 283, 295].includes(atom.resno)) {return 0x67000d}
else {return 0xfff5f0}
}})

var display_fixations = {AschemeID:A_fixations_scheme, BschemeID:B_fixations_scheme}


var A_surface_scheme = NGL.ColormakerRegistry.addScheme(function (params) {
this.atomColor = function (atom) {
if (atom.resno == 0) {return 0xe7e7e7}
else if ([142, 117, 128, 325, 300, 197, 289, 308, 96, 144, 81, 211, 322, 145, 312, 193, 269, 39, 31, 175, 256, 233, 33, 296, 94, 171, 169, 40, 212, 158, 137, 208, 194, 63, 79, 90, 210, 75, 174, 25, 187, 49, 215, 285, 57, 310, 100, 216, 248, 222, 323, 129, 45, 242, 219, 80, 226, 261, 48, 173, 38, 207, 35, 57, 299, 160, 231, 140, 190, 196, 275, 58, 21, 166, 304, 46, 82, 267, 313, 55, 291, 262, 223, 278, 201, 12, 192, 273, 101, 106, 141, 27, 198, 167, 277, 239, 262, 105, 53, 53, 240, 41, 103, 290, 233, 276, 188, 102, 224, 62, 78, 263, 135, 91, 157, 307, 225, 274, 32, 227, 47, 324, 10, 280, 124, 238, 116, 146, 159, 271, 162, 165, 131, 50, 123, 123, 77, 149, 315, 23, 133, 163, 65, 83, 104, 80, 122, 56, 125, 119, 199, 189, 24, 209, 172, 214, 217, 143, 298, 93, 264, 255, 321, 186].includes(atom.resno)) {return 0x6C7593}
else {return 0xe7e7e7}
}})

var B_surface_scheme = NGL.ColormakerRegistry.addScheme(function (params) {
this.atomColor = function (atom) {
if (atom.resno == 0) {return 0xe7e7e7}
else if ([74, 165, 157, 39, 133, 82, 53, 88, 43, 134, 124, 68, 69, 7, 33, 137, 175, 60, 8, 31, 66, 171, 16, 135, 173, 45, 19, 58, 131, 159, 120, 57, 132, 50, 78, 29, 153, 14, 164, 46, 34, 125, 76, 147, 128, 143, 1, 114, 160, 9, 30, 18, 105, 158, 75, 15, 73, 145, 146, 121, 174, 71, 161, 102, 86, 168, 172, 56, 27, 62, 32, 156, 49, 170, 59, 116, 167, 155, 169, 150, 26, 40, 154, 72, 11, 38, 35, 70, 139, 42, 127, 123, 64, 141, 25].includes(atom.resno)) {return 0x6C7593}
else {return 0xe7e7e7}
}})

var display_surface = {AschemeID:A_surface_scheme, BschemeID:B_surface_scheme}


var A_epitopes_scheme = NGL.ColormakerRegistry.addScheme(function (params) {
this.atomColor = function (atom) {
if (atom.resno == 0) {return 0xf0f0f0}
else if ([162, 163].includes(atom.resno)) {return 0x440154}
else {return 0xf0f0f0}
}})

var B_epitopes_scheme = NGL.ColormakerRegistry.addScheme(function (params) {
this.atomColor = function (atom) {
  {return 0xf0f0f0}
}})

var display_epitopes = {AschemeID:A_epitopes_scheme, BschemeID:B_epitopes_scheme}


//Load initial display coloring
document.addEventListener("DOMContentLoaded", function () {
// Load PDB entry
stage.loadFile( "rcsb://4M4Y", { defaultRepresentation: false, name: "ha_structure"} ).then((o)=>{
  o.setRotation([ 0.5, 0, 0 ]);
  color_protein(o,display_epitopes)});
});

// JavaScript to handle dropdown changes
function handleChange() {
    // Get the selected option value
    let selectedValue = document.getElementById('colorby_dropdown').value;
    var display_scheme
    if (selectedValue== "display-epitopes") {display_scheme=display_epitopes}
    else if (selectedValue== "display-fixations") {display_scheme=display_fixations}
    else if (selectedValue== "display-surface") {display_scheme=display_surface}
    let components = stage.getComponentsByName("ha_structure")
    color_protein(components, display_scheme)
}
