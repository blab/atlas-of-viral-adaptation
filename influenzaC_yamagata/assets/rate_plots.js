// JavaScript to handle dropdown changes
function handleChange() {
    // Get the selected option value
    let selectedValue = document.getElementById('plots').value;
    // Loop through the plots to change their display by adding/removing class "hidden"
    Array.from(document.getElementsByClassName("plot")).forEach((el) => {
        // If they are matching, then remove the hidden class to display
        if(el.id === selectedValue) {
            el.classList.remove("hidden")
        }
        // Otherwise, add the hidden class to make sure the plot is hidden
        else {
            el.classList.add("hidden")
        }
    })
}

(function(vegaEmbed) {
  var spec = {"config": {"view": {"continuousWidth": 400, "continuousHeight": 300, "strokeWidth": 0}, "axis": {"grid": false}, "axisX": {"labelAngle": 270, "labelFontSize": 12}, "axisY": {"labelFontSize": 12, "titleFontSize": 14, "titlePadding": 20}}, "layer": [{"data": {"name": "data-04981a1961299432e3d437477219f886"}, "mark": {"type": "point", "filled": true, "opacity": 1, "size": 200}, "encoding": {"color": {"field": "legible_name", "legend": null, "scale": {"domain": ["Enterovirus D68", "Dengue 1-IV", "Influenza C/Mississippi", "Dengue 3-III", "RSV-B", "Parainfluenza-1", "Dengue 4-I", "229E", "Norovirus GII.4", "OC43-A", "Dengue 1-III", "Dengue 3-II", "Dengue 4-II", "Measles", "Dengue 1-V", "NL63", "Dengue 2-C", "Dengue 1-I", "Influenza A/H3N2", "RSV-A", "Influenza B/Vic", "Dengue 2-AA", "Mumps", "Influenza B/Yam", "Dengue 2-AI", "Parainfluenza-3", "Influenza C/Yamagata"], "range": ["#a373a5", "#0db0d6", "#c40062", "#76def7", "#6C7593", "#ff9000", "#adebfa", "#76C7BE", "#d0b9d2", "#208288", "#0db0d6", "#76def7", "#adebfa", "#F5AD52", "#0db0d6", "#BBE4D1", "#2cccf2", "#0db0d6", "#9F2A44", "#0B194C", "#E06E85", "#2cccf2", "#eb520d", "#ED9AB0", "#2cccf2", "#ffb24e", "#eb0076"]}, "type": "nominal"}, "href": {"field": "nextstrain_tree_url", "type": "nominal"}, "tooltip": [{"field": "legible_name", "title": "Virus", "type": "nominal"}, {"field": "legible_rate_percodon", "title": "Rate", "type": "nominal"}], "x": {"axis": {"labelExpr": "datum.label == 1 ? 'Measles H' : datum.label == 2 ? 'H3N2 HA1' : datum.label == 4 ? 'PB2' : datum.label == 6 ? 'PB1' : datum.label == 8 ? 'P3' : datum.label == 10 ? 'HEF1' : datum.label == 12 ? 'HEF2' : datum.label == 14 ? 'NP' : datum.label == 16 ? 'M' : 'NS'", "tickCount": 10, "values": [1, 2, 4, 6, 8, 10, 12, 14, 16, 18]}, "field": "xtick_pos", "title": "", "type": "quantitative"}, "y": {"axis": {"format": ".1f", "title": ["Adaptive Mutations", "per Codon per Year (\u00d7 10\u207b\u00b3)"]}, "field": "adaptive_subs_per_codon_per_year", "type": "quantitative"}}, "height": 250, "width": 600}, {"data": {"name": "data-04981a1961299432e3d437477219f886"}, "mark": "errorbar", "encoding": {"color": {"field": "legible_name", "legend": null, "scale": {"domain": ["Enterovirus D68", "Dengue 1-IV", "Influenza C/Mississippi", "Dengue 3-III", "RSV-B", "Parainfluenza-1", "Dengue 4-I", "229E", "Norovirus GII.4", "OC43-A", "Dengue 1-III", "Dengue 3-II", "Dengue 4-II", "Measles", "Dengue 1-V", "NL63", "Dengue 2-C", "Dengue 1-I", "Influenza A/H3N2", "RSV-A", "Influenza B/Vic", "Dengue 2-AA", "Mumps", "Influenza B/Yam", "Dengue 2-AI", "Parainfluenza-3", "Influenza C/Yamagata"], "range": ["#a373a5", "#0db0d6", "#c40062", "#76def7", "#6C7593", "#ff9000", "#adebfa", "#76C7BE", "#d0b9d2", "#208288", "#0db0d6", "#76def7", "#adebfa", "#F5AD52", "#0db0d6", "#BBE4D1", "#2cccf2", "#0db0d6", "#9F2A44", "#0B194C", "#E06E85", "#2cccf2", "#eb520d", "#ED9AB0", "#2cccf2", "#ffb24e", "#eb0076"]}, "type": "nominal"}, "tooltip": {"value": null}, "x": {"field": "xtick_pos", "title": "", "type": "quantitative"}, "y": {"field": "lower_95ci", "title": "", "type": "quantitative"}, "y2": {"field": "upper_95ci"}}, "height": 250, "width": 600}, {"data": {"name": "data-994311638f0b9d22a99d01543c25f213"}, "mark": {"type": "rule", "strokeDash": [3, 5]}, "encoding": {"x": {"field": "x", "type": "quantitative"}}}], "data": {"name": "data-04981a1961299432e3d437477219f886"}, "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json", "datasets": {"data-04981a1961299432e3d437477219f886": [{"virus": "influenzaC", "subtype": "Yamagata", "virus_and_subtype": "influenzaC_Yamagata", "gene": "PB2", "adaptive_subs_per_codon_per_year": 0.0033539285593937, "lower_95ci": 0.0, "upper_95ci": 0.0110066935562385, "ci": "[0.0, 0.0110066935562385]", "len_in_codons": 775, "adaptive_muts_per_year": 0.0025992946335301, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0085301875060848, "legible_name": "Influenza C/Yamagata", "virus_family": "orthomyxovirus", "color": "#eb0076", "legible_rate_percodon": "0.0\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.0 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/influenzaC/pb2/Yamagata", "xtick_pos": 4}, {"virus": "influenzaC", "subtype": "Yamagata", "virus_and_subtype": "influenzaC_Yamagata", "gene": "PB1", "adaptive_subs_per_codon_per_year": 0.1035257988101069, "lower_95ci": 0.0015877107291701, "upper_95ci": 0.237886001386372, "ci": "[0.001587710729170107, 0.23788600138637206]", "len_in_codons": 755, "adaptive_muts_per_year": 0.0781619781016307, "lower_95ci_mutspergene": 0.0011987216005234, "upper_95ci_mutspergene": 0.1796039310467109, "legible_name": "Influenza C/Yamagata", "virus_family": "orthomyxovirus", "color": "#eb0076", "legible_rate_percodon": "0.1\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.08 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/influenzaC/pb1/Yamagata", "xtick_pos": 6}, {"virus": "influenzaC", "subtype": "Yamagata", "virus_and_subtype": "influenzaC_Yamagata", "gene": "P3", "adaptive_subs_per_codon_per_year": 0.032950446429907, "lower_95ci": -0.0181505196298516, "upper_95ci": 0.1190663915518885, "ci": "[-0.018150519629851616, 0.11906639155188854]", "len_in_codons": 710, "adaptive_muts_per_year": 0.023394816965234, "lower_95ci_mutspergene": -0.0128868689371946, "upper_95ci_mutspergene": 0.0845371380018408, "legible_name": "Influenza C/Yamagata", "virus_family": "orthomyxovirus", "color": "#eb0076", "legible_rate_percodon": "0.03\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.02 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/influenzaC/p3/Yamagata", "xtick_pos": 8}, {"virus": "influenzaC", "subtype": "Yamagata", "virus_and_subtype": "influenzaC_Yamagata", "gene": "HEF1", "adaptive_subs_per_codon_per_year": 0.4212584098117445, "lower_95ci": 0.2193364787867339, "upper_95ci": 0.6671577228933111, "ci": "[0.21933647878673398, 0.6671577228933111]", "len_in_codons": 432, "adaptive_muts_per_year": 0.1819836330386736, "lower_95ci_mutspergene": 0.094753358835869, "upper_95ci_mutspergene": 0.2882121362899104, "legible_name": "Influenza C/Yamagata", "virus_family": "orthomyxovirus", "color": "#eb0076", "legible_rate_percodon": "0.42\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.18 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/influenzaC/hef1/Yamagata", "xtick_pos": 10}, {"virus": "influenzaC", "subtype": "Yamagata", "virus_and_subtype": "influenzaC_Yamagata", "gene": "HEF2", "adaptive_subs_per_codon_per_year": 0.3325514776473431, "lower_95ci": 0.0, "upper_95ci": 0.7659409321624935, "ci": "[0.0, 0.7659409321624935]", "len_in_codons": 209, "adaptive_muts_per_year": 0.0695032588282947, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.1600816548219611, "legible_name": "Influenza C/Yamagata", "virus_family": "orthomyxovirus", "color": "#eb0076", "legible_rate_percodon": "0.33\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.07 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/influenzaC/hef2/Yamagata", "xtick_pos": 12}, {"virus": "influenzaC", "subtype": "Yamagata", "virus_and_subtype": "influenzaC_Yamagata", "gene": "NP", "adaptive_subs_per_codon_per_year": 0.0777696605502989, "lower_95ci": 0.0019001761266699, "upper_95ci": 0.1893721505404821, "ci": "[0.001900176126669947, 0.18937215054048215]", "len_in_codons": 566, "adaptive_muts_per_year": 0.0440176278714691, "lower_95ci_mutspergene": 0.0010754996876951, "upper_95ci_mutspergene": 0.1071846372059129, "legible_name": "Influenza C/Yamagata", "virus_family": "orthomyxovirus", "color": "#eb0076", "legible_rate_percodon": "0.08\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.04 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/influenzaC/np/Yamagata", "xtick_pos": 14}, {"virus": "influenzaC", "subtype": "Yamagata", "virus_and_subtype": "influenzaC_Yamagata", "gene": "M", "adaptive_subs_per_codon_per_year": 0.0281071838844354, "lower_95ci": 0.0, "upper_95ci": 0.066390619114924, "ci": "[0.0, 0.06639061911492403]", "len_in_codons": 319, "adaptive_muts_per_year": 0.0089661916591349, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0211786074976607, "legible_name": "Influenza C/Yamagata", "virus_family": "orthomyxovirus", "color": "#eb0076", "legible_rate_percodon": "0.03\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.01 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/influenzaC/m/Yamagata", "xtick_pos": 16}, {"virus": "influenzaC", "subtype": "Yamagata", "virus_and_subtype": "influenzaC_Yamagata", "gene": "NS", "adaptive_subs_per_codon_per_year": 0.1234157693156287, "lower_95ci": 0.0, "upper_95ci": 0.340845192043466, "ci": "[0.0, 0.340845192043466]", "len_in_codons": 247, "adaptive_muts_per_year": 0.0304836950209602, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0841887624347361, "legible_name": "Influenza C/Yamagata", "virus_family": "orthomyxovirus", "color": "#eb0076", "legible_rate_percodon": "0.12\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.03 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/influenzaC/ns/Yamagata", "xtick_pos": 18}, {"virus": "measles", "subtype": "", "virus_and_subtype": "measles", "gene": "Measles H", "adaptive_subs_per_codon_per_year": 0.1488760781105891, "lower_95ci": 0.0, "upper_95ci": 0.464536965766201, "ci": "[0.0, 0.46453696576620107]", "len_in_codons": 618, "adaptive_muts_per_year": 0.0920054162723441, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.2870838448435123, "legible_name": "Measles", "virus_family": "paramyxovirus", "color": "#F5AD52", "legible_rate_percodon": "0.15\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.09 muts per year", "nextstrain_tree_url": "https://nextstrain.org/measles", "xtick_pos": 1}, {"virus": "h3n2", "subtype": "", "virus_and_subtype": "h3n2", "gene": "H3N2 HA1", "adaptive_subs_per_codon_per_year": 3.968017826307325, "lower_95ci": 2.958853820205344, "upper_95ci": 4.99468539503025, "ci": "[2.9588538202053436, 4.99468539503025]", "len_in_codons": 329, "adaptive_muts_per_year": 1.3054778648551095, "lower_95ci_mutspergene": 0.973462906847558, "upper_95ci_mutspergene": 1.6432514949649522, "legible_name": "Influenza A/H3N2", "virus_family": "orthomyxovirus", "color": "#9F2A44", "legible_rate_percodon": "3.97\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "1.31 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/flu/seasonal/h3n2/ha/60y", "xtick_pos": 2}], "data-994311638f0b9d22a99d01543c25f213": [{"x": 3}]}};
  var embedOpt = {"mode": "vega-lite"};

  function showError(el, error){
      el.innerHTML = ('<div class="error" style="color:red;">'
                      + '<p>JavaScript Error: ' + error.message + '</p>'
                      + "<p>This usually means there's a typo in your chart specification. "
                      + "See the javascript console for the full traceback.</p>"
                      + '</div>');
      throw error;
  }
  const el = document.getElementById('vis1');
  vegaEmbed("#vis1", spec, embedOpt)
    .catch(error => showError(el, error));
})(vegaEmbed);

(function(vegaEmbed) {
  var spec = {"config": {"view": {"continuousWidth": 400, "continuousHeight": 300, "strokeWidth": 0}, "axis": {"grid": false}, "axisX": {"labelAngle": 270, "labelFontSize": 12}, "axisY": {"labelFontSize": 12, "titleFontSize": 14, "titlePadding": 20}}, "layer": [{"data": {"name": "data-04981a1961299432e3d437477219f886"}, "mark": {"type": "point", "filled": true, "opacity": 1, "size": 200}, "encoding": {"color": {"field": "legible_name", "legend": null, "scale": {"domain": ["Enterovirus D68", "Dengue 1-IV", "Influenza C/Mississippi", "Dengue 3-III", "RSV-B", "Parainfluenza-1", "Dengue 4-I", "229E", "Norovirus GII.4", "OC43-A", "Dengue 1-III", "Dengue 3-II", "Dengue 4-II", "Measles", "Dengue 1-V", "NL63", "Dengue 2-C", "Dengue 1-I", "Influenza A/H3N2", "RSV-A", "Influenza B/Vic", "Dengue 2-AA", "Mumps", "Influenza B/Yam", "Dengue 2-AI", "Parainfluenza-3", "Influenza C/Yamagata"], "range": ["#a373a5", "#0db0d6", "#c40062", "#76def7", "#6C7593", "#ff9000", "#adebfa", "#76C7BE", "#d0b9d2", "#208288", "#0db0d6", "#76def7", "#adebfa", "#F5AD52", "#0db0d6", "#BBE4D1", "#2cccf2", "#0db0d6", "#9F2A44", "#0B194C", "#E06E85", "#2cccf2", "#eb520d", "#ED9AB0", "#2cccf2", "#ffb24e", "#eb0076"]}, "type": "nominal"}, "href": {"field": "nextstrain_tree_url", "type": "nominal"}, "tooltip": [{"field": "legible_name", "title": "Virus", "type": "nominal"}, {"field": "legible_rate_percodon", "title": "Rate", "type": "nominal"}], "x": {"axis": {"labelExpr": "datum.label == 1 ? 'Measles H' : datum.label == 2 ? 'H3N2 HA1' : datum.label == 4 ? 'PB2' : datum.label == 6 ? 'PB1' : datum.label == 8 ? 'P3' : datum.label == 10 ? 'HEF1' : datum.label == 12 ? 'HEF2' : datum.label == 14 ? 'NP' : datum.label == 16 ? 'M' : 'NS'", "tickCount": 10, "values": [1, 2, 4, 6, 8, 10, 12, 14, 16, 18]}, "field": "xtick_pos", "title": "", "type": "quantitative"}, "y": {"axis": {"format": ".1f", "title": ["Adaptive Mutations", "per Year"]}, "field": "adaptive_muts_per_year", "type": "quantitative"}}, "height": 250, "width": 600}, {"data": {"name": "data-04981a1961299432e3d437477219f886"}, "mark": "errorbar", "encoding": {"color": {"field": "legible_name", "legend": null, "scale": {"domain": ["Enterovirus D68", "Dengue 1-IV", "Influenza C/Mississippi", "Dengue 3-III", "RSV-B", "Parainfluenza-1", "Dengue 4-I", "229E", "Norovirus GII.4", "OC43-A", "Dengue 1-III", "Dengue 3-II", "Dengue 4-II", "Measles", "Dengue 1-V", "NL63", "Dengue 2-C", "Dengue 1-I", "Influenza A/H3N2", "RSV-A", "Influenza B/Vic", "Dengue 2-AA", "Mumps", "Influenza B/Yam", "Dengue 2-AI", "Parainfluenza-3", "Influenza C/Yamagata"], "range": ["#a373a5", "#0db0d6", "#c40062", "#76def7", "#6C7593", "#ff9000", "#adebfa", "#76C7BE", "#d0b9d2", "#208288", "#0db0d6", "#76def7", "#adebfa", "#F5AD52", "#0db0d6", "#BBE4D1", "#2cccf2", "#0db0d6", "#9F2A44", "#0B194C", "#E06E85", "#2cccf2", "#eb520d", "#ED9AB0", "#2cccf2", "#ffb24e", "#eb0076"]}, "type": "nominal"}, "tooltip": {"value": null}, "x": {"field": "xtick_pos", "title": "", "type": "quantitative"}, "y": {"field": "lower_95ci_mutspergene", "title": "", "type": "quantitative"}, "y2": {"field": "upper_95ci_mutspergene"}}, "height": 250, "width": 600}, {"data": {"name": "data-994311638f0b9d22a99d01543c25f213"}, "mark": {"type": "rule", "strokeDash": [3, 5]}, "encoding": {"x": {"field": "x", "type": "quantitative"}}}], "data": {"name": "data-04981a1961299432e3d437477219f886"}, "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json", "datasets": {"data-04981a1961299432e3d437477219f886": [{"virus": "influenzaC", "subtype": "Yamagata", "virus_and_subtype": "influenzaC_Yamagata", "gene": "PB2", "adaptive_subs_per_codon_per_year": 0.0033539285593937, "lower_95ci": 0.0, "upper_95ci": 0.0110066935562385, "ci": "[0.0, 0.0110066935562385]", "len_in_codons": 775, "adaptive_muts_per_year": 0.0025992946335301, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0085301875060848, "legible_name": "Influenza C/Yamagata", "virus_family": "orthomyxovirus", "color": "#eb0076", "legible_rate_percodon": "0.0\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.0 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/influenzaC/pb2/Yamagata", "xtick_pos": 4}, {"virus": "influenzaC", "subtype": "Yamagata", "virus_and_subtype": "influenzaC_Yamagata", "gene": "PB1", "adaptive_subs_per_codon_per_year": 0.1035257988101069, "lower_95ci": 0.0015877107291701, "upper_95ci": 0.237886001386372, "ci": "[0.001587710729170107, 0.23788600138637206]", "len_in_codons": 755, "adaptive_muts_per_year": 0.0781619781016307, "lower_95ci_mutspergene": 0.0011987216005234, "upper_95ci_mutspergene": 0.1796039310467109, "legible_name": "Influenza C/Yamagata", "virus_family": "orthomyxovirus", "color": "#eb0076", "legible_rate_percodon": "0.1\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.08 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/influenzaC/pb1/Yamagata", "xtick_pos": 6}, {"virus": "influenzaC", "subtype": "Yamagata", "virus_and_subtype": "influenzaC_Yamagata", "gene": "P3", "adaptive_subs_per_codon_per_year": 0.032950446429907, "lower_95ci": -0.0181505196298516, "upper_95ci": 0.1190663915518885, "ci": "[-0.018150519629851616, 0.11906639155188854]", "len_in_codons": 710, "adaptive_muts_per_year": 0.023394816965234, "lower_95ci_mutspergene": -0.0128868689371946, "upper_95ci_mutspergene": 0.0845371380018408, "legible_name": "Influenza C/Yamagata", "virus_family": "orthomyxovirus", "color": "#eb0076", "legible_rate_percodon": "0.03\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.02 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/influenzaC/p3/Yamagata", "xtick_pos": 8}, {"virus": "influenzaC", "subtype": "Yamagata", "virus_and_subtype": "influenzaC_Yamagata", "gene": "HEF1", "adaptive_subs_per_codon_per_year": 0.4212584098117445, "lower_95ci": 0.2193364787867339, "upper_95ci": 0.6671577228933111, "ci": "[0.21933647878673398, 0.6671577228933111]", "len_in_codons": 432, "adaptive_muts_per_year": 0.1819836330386736, "lower_95ci_mutspergene": 0.094753358835869, "upper_95ci_mutspergene": 0.2882121362899104, "legible_name": "Influenza C/Yamagata", "virus_family": "orthomyxovirus", "color": "#eb0076", "legible_rate_percodon": "0.42\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.18 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/influenzaC/hef1/Yamagata", "xtick_pos": 10}, {"virus": "influenzaC", "subtype": "Yamagata", "virus_and_subtype": "influenzaC_Yamagata", "gene": "HEF2", "adaptive_subs_per_codon_per_year": 0.3325514776473431, "lower_95ci": 0.0, "upper_95ci": 0.7659409321624935, "ci": "[0.0, 0.7659409321624935]", "len_in_codons": 209, "adaptive_muts_per_year": 0.0695032588282947, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.1600816548219611, "legible_name": "Influenza C/Yamagata", "virus_family": "orthomyxovirus", "color": "#eb0076", "legible_rate_percodon": "0.33\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.07 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/influenzaC/hef2/Yamagata", "xtick_pos": 12}, {"virus": "influenzaC", "subtype": "Yamagata", "virus_and_subtype": "influenzaC_Yamagata", "gene": "NP", "adaptive_subs_per_codon_per_year": 0.0777696605502989, "lower_95ci": 0.0019001761266699, "upper_95ci": 0.1893721505404821, "ci": "[0.001900176126669947, 0.18937215054048215]", "len_in_codons": 566, "adaptive_muts_per_year": 0.0440176278714691, "lower_95ci_mutspergene": 0.0010754996876951, "upper_95ci_mutspergene": 0.1071846372059129, "legible_name": "Influenza C/Yamagata", "virus_family": "orthomyxovirus", "color": "#eb0076", "legible_rate_percodon": "0.08\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.04 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/influenzaC/np/Yamagata", "xtick_pos": 14}, {"virus": "influenzaC", "subtype": "Yamagata", "virus_and_subtype": "influenzaC_Yamagata", "gene": "M", "adaptive_subs_per_codon_per_year": 0.0281071838844354, "lower_95ci": 0.0, "upper_95ci": 0.066390619114924, "ci": "[0.0, 0.06639061911492403]", "len_in_codons": 319, "adaptive_muts_per_year": 0.0089661916591349, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0211786074976607, "legible_name": "Influenza C/Yamagata", "virus_family": "orthomyxovirus", "color": "#eb0076", "legible_rate_percodon": "0.03\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.01 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/influenzaC/m/Yamagata", "xtick_pos": 16}, {"virus": "influenzaC", "subtype": "Yamagata", "virus_and_subtype": "influenzaC_Yamagata", "gene": "NS", "adaptive_subs_per_codon_per_year": 0.1234157693156287, "lower_95ci": 0.0, "upper_95ci": 0.340845192043466, "ci": "[0.0, 0.340845192043466]", "len_in_codons": 247, "adaptive_muts_per_year": 0.0304836950209602, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0841887624347361, "legible_name": "Influenza C/Yamagata", "virus_family": "orthomyxovirus", "color": "#eb0076", "legible_rate_percodon": "0.12\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.03 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/influenzaC/ns/Yamagata", "xtick_pos": 18}, {"virus": "measles", "subtype": "", "virus_and_subtype": "measles", "gene": "Measles H", "adaptive_subs_per_codon_per_year": 0.1488760781105891, "lower_95ci": 0.0, "upper_95ci": 0.464536965766201, "ci": "[0.0, 0.46453696576620107]", "len_in_codons": 618, "adaptive_muts_per_year": 0.0920054162723441, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.2870838448435123, "legible_name": "Measles", "virus_family": "paramyxovirus", "color": "#F5AD52", "legible_rate_percodon": "0.15\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.09 muts per year", "nextstrain_tree_url": "https://nextstrain.org/measles", "xtick_pos": 1}, {"virus": "h3n2", "subtype": "", "virus_and_subtype": "h3n2", "gene": "H3N2 HA1", "adaptive_subs_per_codon_per_year": 3.968017826307325, "lower_95ci": 2.958853820205344, "upper_95ci": 4.99468539503025, "ci": "[2.9588538202053436, 4.99468539503025]", "len_in_codons": 329, "adaptive_muts_per_year": 1.3054778648551095, "lower_95ci_mutspergene": 0.973462906847558, "upper_95ci_mutspergene": 1.6432514949649522, "legible_name": "Influenza A/H3N2", "virus_family": "orthomyxovirus", "color": "#9F2A44", "legible_rate_percodon": "3.97\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "1.31 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/flu/seasonal/h3n2/ha/60y", "xtick_pos": 2}], "data-994311638f0b9d22a99d01543c25f213": [{"x": 3}]}};
  var embedOpt = {"mode": "vega-lite"};

  function showError(el, error){
      el.innerHTML = ('<div class="error" style="color:red;">'
                      + '<p>JavaScript Error: ' + error.message + '</p>'
                      + "<p>This usually means there's a typo in your chart specification. "
                      + "See the javascript console for the full traceback.</p>"
                      + '</div>');
      throw error;
  }
  const el = document.getElementById('vis2');
  vegaEmbed("#vis2", spec, embedOpt)
    .catch(error => showError(el, error));
})(vegaEmbed);