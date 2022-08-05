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
else if ([1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 47, 48, 49, 50, 51, 52, 53, 54, 56, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 122, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 151, 152, 153, 154, 156, 157, 158, 159, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 213, 214, 215, 216, 217, 218, 219, 220, 221].includes(atom.resno)) {return 0xfff5f0}
else if ([2, 18, 55, 57, 77, 123, 124, 150, 155, 160, 201, 212].includes(atom.resno)) {return 0xfdcab5}
else if ([32, 46, 121].includes(atom.resno)) {return 0xfc8a6a}
else {return 0xfff5f0}
}})


var A_fixations_scheme = NGL.ColormakerRegistry.addScheme(function (params) {
this.atomColor = function (atom) {
if (atom.resno == 0) {return 0xfff5f0}
else if ([1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 46, 47, 49, 51, 52, 55, 56, 58, 59, 60, 61, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 76, 77, 79, 80, 81, 84, 85, 86, 87, 88, 89, 90, 91, 93, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 123, 125, 127, 128, 129, 130, 132, 134, 136, 138, 139, 141, 147, 148, 149, 150, 151, 152, 153, 154, 161, 162, 164, 165, 166, 167, 168, 169, 170, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 187, 191, 194, 195, 199, 200, 201, 203, 204, 205, 206, 208, 209, 210, 211, 214, 215, 216, 218, 219, 220, 221, 224, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 243, 245, 246, 247, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 261, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 277, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 300, 301, 302, 303, 304, 305, 306, 308, 309, 310, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329].includes(atom.resno)) {return 0xfff5f0}
else if ([2, 121, 124, 131, 135, 137, 142, 160, 173, 197, 217, 226, 262, 276, 311].includes(atom.resno)) {return 0xfc8a6a}
else if ([3, 25, 33, 45, 48, 53, 54, 57, 75, 78, 82, 92, 94, 122, 126, 140, 143, 146, 157, 163, 171, 186, 188, 190, 192, 196, 198, 202, 207, 212, 213, 222, 223, 227, 242, 244, 248, 260, 275, 299, 307, 312].includes(atom.resno)) {return 0xfdcab5}
else if ([50, 62, 83, 133, 155, 158, 159, 172, 193, 225, 278].includes(atom.resno)) {return 0xf14432}
else if ([144, 145, 156].includes(atom.resno)) {return 0xbc141a}
else if ([189].includes(atom.resno)) {return 0x67000d}
else {return 0xfff5f0}
}})

var display_fixations = {AschemeID:A_fixations_scheme, BschemeID:B_fixations_scheme}


var A_surface_scheme = NGL.ColormakerRegistry.addScheme(function (params) {
this.atomColor = function (atom) {
if (atom.resno == 0) {return 0xe7e7e7}
else if ([142, 128, 325, 300, 197, 130, 155, 289, 308, 96, 144, 81, 211, 145, 312, 193, 269, 39, 31, 175, 132, 120, 33, 296, 20, 94, 171, 169, 40, 212, 158, 137, 208, 194, 63, 210, 311, 75, 114, 25, 187, 49, 126, 285, 60, 310, 100, 95, 241, 248, 222, 129, 45, 54, 219, 153, 80, 226, 261, 48, 173, 22, 38, 207, 35, 57, 299, 160, 140, 150, 196, 275, 58, 21, 213, 46, 82, 313, 55, 291, 278, 168, 12, 192, 273, 106, 141, 326, 27, 198, 167, 37, 277, 239, 262, 53, 240, 236, 41, 103, 290, 233, 276, 188, 92, 156, 224, 62, 34, 85, 121, 14, 78, 263, 135, 91, 157, 307, 225, 274, 32, 227, 292, 47, 10, 280, 124, 74, 238, 159, 271, 162, 165, 297, 131, 50, 134, 315, 23, 133, 163, 65, 83, 9, 104, 59, 122, 259, 125, 119, 199, 189, 24, 209, 172, 214, 143, 298, 93, 264, 255, 321].includes(atom.resno)) {return 0x6C7593}
else {return 0xe7e7e7}
}})

var B_surface_scheme = NGL.ColormakerRegistry.addScheme(function (params) {
this.atomColor = function (atom) {
if (atom.resno == 0) {return 0xe7e7e7}
else if ([74, 165, 157, 39, 133, 47, 82, 53, 88, 43, 134, 69, 7, 33, 137, 12, 60, 8, 77, 97, 31, 171, 135, 16, 45, 58, 19, 159, 120, 57, 132, 29, 153, 14, 164, 46, 106, 34, 125, 36, 147, 128, 143, 54, 1, 160, 52, 30, 18, 105, 94, 158, 15, 73, 145, 146, 121, 79, 71, 161, 102, 86, 168, 117, 172, 56, 27, 67, 62, 32, 156, 49, 59, 155, 169, 150, 61, 154, 72, 11, 38, 35, 70, 139, 21, 42, 127, 162, 64, 25].includes(atom.resno)) {return 0x6C7593}
else {return 0xe7e7e7}
}})

var display_surface = {AschemeID:A_surface_scheme, BschemeID:B_surface_scheme}


var A_epitopes_scheme = NGL.ColormakerRegistry.addScheme(function (params) {
this.atomColor = function (atom) {
if (atom.resno == 0) {return 0xf0f0f0}
else if ([25, 33].includes(atom.resno)) {return 0x21918c}
else if ([45, 311, 312, 307].includes(atom.resno)) {return 0x2c728e}
else if ([48, 50, 275, 53, 276, 54, 57, 278, 82, 83, 78].includes(atom.resno)) {return 0xaddc30}
else if ([62, 75, 78, 92, 94, 140, 142, 82, 135, 137, 143, 144, 145].includes(atom.resno)) {return 0x440154}
else if ([121, 122, 124, 172, 126, 171, 173, 207].includes(atom.resno)) {return 0x5ec962}
else if ([131, 133, 155, 156, 157, 158, 160, 135, 145, 137, 140, 144, 226, 142, 143, 225, 193, 196, 159, 189, 192, 197, 163, 248, 188, 198, 222, 227, 213].includes(atom.resno)) {return 0x3b528b}
else if ([212, 213, 248].includes(atom.resno)) {return 0x472d7b}
else if ([299, 307, 311].includes(atom.resno)) {return 0x28ae80}
else {return 0xf0f0f0}
}})


var B_epitopes_scheme = NGL.ColormakerRegistry.addScheme(function (params) {
this.atomColor = function (atom) {
if (atom.resno == 0) {return 0xf0f0f0}
else if ([57].includes(atom.resno)) {return 0x28ae80}
else if ([121, 155, 150].includes(atom.resno)) {return 0xfde725}
else {return 0xf0f0f0}
}})

var display_epitopes = {AschemeID:A_epitopes_scheme, BschemeID:B_epitopes_scheme}

var A_epitope_overlap_scheme = NGL.ColormakerRegistry.addScheme(function (params) {
this.atomColor = function (atom) {
if (atom.resno == 0) {return 0xf0f0f0}
else if ([131, 133, 135, 137, 142, 143, 144, 145, 275, 276, 278, 25, 155, 156, 157, 158, 159, 160, 33, 163, 299, 172, 173, 50, 307, 53, 54, 57, 188, 189, 62, 192, 193, 196, 197, 75, 78, 207, 82, 83, 213, 92, 94, 225, 226, 227, 248, 121, 122, 124, 126].includes(atom.resno)) {return 0x21918c}
else if ([198, 171, 140, 45, 48, 212, 311, 312, 222].includes(atom.resno)) {return 0x440154}
else if ([2, 3, 260, 5, 262, 271, 146, 22, 164, 174, 186, 190, 63, 67, 201, 202, 81, 217, 106, 242, 244].includes(atom.resno)) {return 0xfde725}
else {return 0xf0f0f0}
}})


var B_epitope_overlap_scheme = NGL.ColormakerRegistry.addScheme(function (params) {
this.atomColor = function (atom) {
if (atom.resno == 0) {return 0xf0f0f0}
else if ([].includes(atom.resno)) {return 0x21918c}
else if ([150, 57, 155, 121].includes(atom.resno)) {return 0x440154}
else if ([].includes(atom.resno)) {return 0xfde725}
else {return 0xf0f0f0}
}})

var display_overlap_epitopes = {AschemeID:A_epitope_overlap_scheme, BschemeID:B_epitope_overlap_scheme}


//Load initial display coloring
document.addEventListener("DOMContentLoaded", function () {
// Load PDB entry
stage.loadFile( "rcsb://4fnk", {defaultRepresentation: false, name: "ha_structure"} ).then((o)=>{
  o.setRotation([ 2.25, 0.5, 0.25 ]);
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
    else if (selectedValue== "display-overlap-epitopes") {display_scheme=display_overlap_epitopes}
    let components = stage.getComponentsByName("ha_structure")
    color_protein(components, display_scheme)
}
