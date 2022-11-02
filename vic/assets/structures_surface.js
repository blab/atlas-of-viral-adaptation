// Create NGL Stage object, global variable
var stage = new NGL.Stage( "structure" );
stage.setParameters({backgroundColor: "white"});
// deal with window re-sizing
window.addEventListener( "resize", function( event ){stage.handleResize();}, false );

function color_protein(o, display_scheme) {
  o.addRepresentation("surface", {sele: "(:A or :C or :E) and protein", color: display_scheme.AschemeID})
  o.addRepresentation("surface", {sele: "(:B or :D or :F) and protein", color: display_scheme.BschemeID})
  o.addRepresentation("cartoon", {sele: "(:A or :C or :E) and protein", color: display_scheme.AschemeID})
  o.addRepresentation("cartoon", {sele: "(:B or :D or :F) and protein", color: display_scheme.BschemeID})
  o.autoView()
}

var B_fixations_scheme = NGL.ColormakerRegistry.addScheme(function (params) {
this.atomColor = function (atom) {
if (atom.resno == 0) {return 0xfff5f0}
else if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 210, 211, 212, 213, 214, 215, 217, 218, 219, 220, 221, 222, 223, 224, 225].includes(atom.resno)) {return 0xfff5f0}
else if ([133, 159, 209].includes(atom.resno)) {return 0xfcbba1}
else if ([216].includes(atom.resno)) {return 0xfb694a}
else {return 0xfff5f0}
}})


var A_fixations_scheme = NGL.ColormakerRegistry.addScheme(function (params) {
this.atomColor = function (atom) {
if (atom.resno == 0) {return 0xfff5f0}
else if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 49, 50, 51, 52, 53, 54, 55, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 76, 77, 78, 79, 81, 82, 83, 84, 85, 86, 87, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 118, 119, 120, 121, 123, 124, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 138, 139, 140, 141, 142, 143, 144, 145, 147, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 165, 166, 167, 168, 169, 170, 171, 173, 174, 176, 177, 178, 179, 180, 181, 182, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 203, 204, 205, 206, 207, 208, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 236, 237, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 256, 257, 258, 259, 260, 261, 263, 264, 265, 266, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346].includes(atom.resno)) {return 0xfff5f0}
else if ([48, 75, 125, 137, 148, 149, 172, 202, 209].includes(atom.resno)) {return 0xfb694a}
else if ([56, 116, 150, 164, 183, 255, 267].includes(atom.resno)) {return 0xca181d}
else if ([80, 88, 117, 122, 146, 175, 238].includes(atom.resno)) {return 0xfcbba1}
else if ([235, 262].includes(atom.resno)) {return 0x67000d}
else {return 0xfff5f0}
}})

var display_fixations = {AschemeID:A_fixations_scheme, BschemeID:B_fixations_scheme}


var A_surface_scheme = NGL.ColormakerRegistry.addScheme(function (params) {
this.atomColor = function (atom) {
if (atom.resno == 0) {return 0xe7e7e7}
else if ([164, 128, 325, 230, 197, 270, 289, 211, 170, 145, 312, 39, 31, 136, 175, 20, 169, 40, 158, 148, 137, 208, 30, 90, 61, 283, 332, 311, 75, 25, 180, 338, 184, 73, 126, 285, 69, 319, 100, 305, 241, 341, 323, 254, 306, 177, 218, 129, 45, 242, 219, 80, 48, 336, 22, 335, 38, 220, 234, 207, 35, 202, 87, 231, 150, 205, 139, 196, 237, 257, 58, 166, 304, 179, 46, 313, 55, 291, 13, 278, 201, 168, 15, 115, 303, 141, 326, 27, 329, 288, 198, 71, 167, 37, 277, 239, 118, 240, 182, 52, 286, 253, 236, 5, 290, 233, 92, 127, 17, 34, 85, 121, 178, 14, 78, 263, 135, 320, 154, 227, 327, 47, 10, 280, 74, 238, 116, 146, 271, 162, 165, 297, 131, 134, 123, 77, 149, 315, 23, 287, 133, 232, 163, 183, 1, 244, 181, 59, 122, 56, 88, 119, 199, 172, 235, 147, 339, 328, 229, 298, 340, 255, 29, 11, 43].includes(atom.resno)) {return 0x6C7593}
else {return 0xe7e7e7}
}})


var B_surface_scheme = NGL.ColormakerRegistry.addScheme(function (params) {
this.atomColor = function (atom) {
if (atom.resno == 0) {return 0xe7e7e7}
else if ([165, 39, 82, 53, 88, 43, 124, 68, 60, 8, 97, 31, 135, 16, 45, 19, 131, 130, 101, 120, 57, 50, 29, 164, 46, 106, 125, 76, 147, 128, 143, 1, 160, 65, 52, 30, 18, 105, 158, 15, 73, 145, 146, 166, 71, 161, 2, 102, 86, 168, 28, 109, 163, 56, 27, 32, 156, 49, 170, 59, 116, 155, 169, 150, 61, 154, 11, 38, 139, 21, 42, 162, 64, 10, 141, 113, 151].includes(atom.resno)) {return 0x6C7593}
else {return 0xe7e7e7}
}})

var display_surface = {AschemeID:A_surface_scheme, BschemeID:B_surface_scheme}


var A_epitopes_scheme = NGL.ColormakerRegistry.addScheme(function (params) {
this.atomColor = function (atom) {
if (atom.resno == 0) {return 0xf0f0f0}
else if ([48, 80, 116].includes(atom.resno)) {return 0x440154}
else if ([56, 75].includes(atom.resno)) {return 0x21918c}
else if ([88, 235, 238].includes(atom.resno)) {return 0x35b779}
else if ([137, 150, 146, 148, 149].includes(atom.resno)) {return 0x90d743}
else if ([146, 148, 149, 150].includes(atom.resno)) {return 0x31688e}
else if ([172, 175].includes(atom.resno)) {return 0xfde725}
else if ([183, 255].includes(atom.resno)) {return 0x443983}
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
stage.loadFile( "rcsb://4nrj", { defaultRepresentation: false, name: "ha_structure"} ).then((o)=>{
  o.setRotation([ 2.25, 1.0, 0.25 ]);
  color_protein(o,display_epitopes)});
});

// remove default hoverPick mouse action
// this appears to remve the default tooltip behavior
stage.mouseControls.remove("hoverPick")

// HA1 residues in predicted epitopes
var A_clickable_residues = [48, 80, 116, 56, 75, 88, 235, 238, 137,
  150, 146, 148, 149, 146, 148, 149, 150, 172, 175, 183, 255]

// HA2 residues in predicted epitopes
var B_clickable_residues = []

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
    if (['A','C','E'].includes(atom.chainname)){
      var chain="HA1"}
    else {var chain="HA2"}
    if (chain=="HA1" && A_clickable_residues.includes(atom.resno)){
      tooltip.innerText = chain + " " + atom.resno;
      tooltip.style.bottom = cp.y  + "px";
      tooltip.style.left = cp.x  + "px";
      console.log(tooltip.style.left);
      tooltip.style.display = "inline-block";}
    else if (chain=="HA2" && B_clickable_residues.includes(atom.resno)){
      tooltip.innerText = chain + " " + atom.resno;
      tooltip.style.bottom = cp.y  + "px";
      tooltip.style.left = cp.x  + "px";
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
    if (['A','C','E'].includes(atom.chainname)){var chain="HA1"}
    else {var chain="HA2"}
    if (chain=="HA1" && A_clickable_residues.includes(atom.resno)){window.open(`https://nextstrain.org/groups/blab/flu/seasonal/vic/ha/60y?c=gt-${chain}_${atom.resno}`, '_blank')}
    else if (chain=="HA2" && B_clickable_residues.includes(atom.resno)){window.open(`https://nextstrain.org/groups/blab/flu/seasonal/vic/ha/60y?c=gt-${chain}_${atom.resno}`, '_blank')}
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
    let components = stage.getComponentsByName("ha_structure")
    color_protein(components, display_scheme)
}

// JavaScript to handle residue input changes
function handleResidueSelectionHA1() {
    // Get the selected option value
    let selectedValue = document.getElementById('select_ha1_residue_input').value;

    // check if selectedValue is in predicted epitope or not.
    // if it is, color it red, if not, color it light pink
    if (A_clickable_residues.includes(Number(selectedValue))) {var selected_color= 0xbc141a}
    else {var selected_color= 0xfc8a6a}

    var A_select_scheme = NGL.ColormakerRegistry.addScheme(function (params) {
    this.atomColor = function (atom) {
    if (atom.resno == 0) {return 0xf0f0f0}
    else if (atom.resno == selectedValue) {return selected_color}
    else if ([48, 80, 116].includes(atom.resno)) {return 0x440154}
    else if ([56, 75].includes(atom.resno)) {return 0x21918c}
    else if ([88, 235, 238].includes(atom.resno)) {return 0x35b779}
    else if ([137, 150, 146, 148, 149].includes(atom.resno)) {return 0x90d743}
    else if ([146, 148, 149, 150].includes(atom.resno)) {return 0x31688e}
    else if ([172, 175].includes(atom.resno)) {return 0xfde725}
    else if ([183, 255].includes(atom.resno)) {return 0x443983}
    else {return 0xf0f0f0}
    }})


    var select_scheme = {AschemeID:A_select_scheme, BschemeID:B_epitopes_scheme}
    let components = stage.getComponentsByName("ha_structure")
    color_protein(components, select_scheme)
}
