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
  var spec = {"config": {"view": {"continuousWidth": 400, "continuousHeight": 300, "strokeWidth": 0}, "axis": {"grid": false}, "axisX": {"labelAngle": 270, "labelFontSize": 12}, "axisY": {"labelFontSize": 12, "titleFontSize": 14, "titlePadding": 20}}, "layer": [{"data": {"name": "data-75a8bca097efaece6dcf4fd2aa080144"}, "mark": {"type": "point", "filled": true, "opacity": 1, "size": 200}, "encoding": {"color": {"field": "legible_name", "legend": null, "scale": {"domain": ["RSV-A", "Adenovirus B-3", "Dengue 1-III", "Parvovirus B19-1A", "Dengue 2-AA", "OC43-A", "RSV-B", "Mumps", "HepatitisB-A2", "NL63", "Dengue 4-I", "Dengue 1-IV", "229E", "Enterovirus D68", "Parainfluenza-1", "Rotavirus A/P[8]", "Influenza B/Vic", "Norovirus GII.4", "Dengue 1-V", "Dengue 2-AI", "Dengue 3-III", "Influenza A/H3N2", "Dengue 3-II", "Influenza C/Mississippi", "Dengue 2-C", "Measles", "Adenovirus B-7", "HepatitisB-D3", "Influenza C/Yamagata", "Dengue 4-II", "Influenza B/Yam", "Parainfluenza-3", "Dengue 1-I"], "range": ["#0B194C", "#ff926e", "#0db0d6", "#BC0000", "#2cccf2", "#208288", "#6C7593", "#eb520d", "#ffd8bc", "#BBE4D1", "#adebfa", "#0db0d6", "#76C7BE", "#9779bd", "#ff9000", "#1a3da6", "#E06E85", "#5700bc", "#0db0d6", "#2cccf2", "#76def7", "#9F2A44", "#76def7", "#c40062", "#2cccf2", "#F5AD52", "#ff6633", "#ffe9bc", "#eb0076", "#adebfa", "#ED9AB0", "#ffb24e", "#0db0d6"]}, "type": "nominal"}, "href": {"field": "nextstrain_tree_url", "type": "nominal"}, "tooltip": [{"field": "legible_name", "title": "Virus", "type": "nominal"}, {"field": "legible_rate_percodon", "title": "Rate", "type": "nominal"}], "x": {"axis": {"labelExpr": "datum.label == 1 ? 'Measles H' : datum.label == 2 ? 'H3N2 HA1' : datum.label == 4 ? 'Polymerase' : datum.label == 6 ? 'Large' : datum.label == 8 ? 'Middle' : datum.label == 10 ? 'Small' : datum.label == 12 ? 'X' : 'Core'", "tickCount": 8, "values": [1, 2, 4, 6, 8, 10, 12, 14]}, "field": "xtick_pos", "title": "", "type": "quantitative"}, "y": {"axis": {"format": ".1f", "title": ["Adaptive Mutations", "per Codon per Year (\u00d7 10\u207b\u00b3)"]}, "field": "adaptive_subs_per_codon_per_year", "type": "quantitative"}}, "height": 250, "width": 600}, {"data": {"name": "data-75a8bca097efaece6dcf4fd2aa080144"}, "mark": "errorbar", "encoding": {"color": {"field": "legible_name", "legend": null, "scale": {"domain": ["RSV-A", "Adenovirus B-3", "Dengue 1-III", "Parvovirus B19-1A", "Dengue 2-AA", "OC43-A", "RSV-B", "Mumps", "HepatitisB-A2", "NL63", "Dengue 4-I", "Dengue 1-IV", "229E", "Enterovirus D68", "Parainfluenza-1", "Rotavirus A/P[8]", "Influenza B/Vic", "Norovirus GII.4", "Dengue 1-V", "Dengue 2-AI", "Dengue 3-III", "Influenza A/H3N2", "Dengue 3-II", "Influenza C/Mississippi", "Dengue 2-C", "Measles", "Adenovirus B-7", "HepatitisB-D3", "Influenza C/Yamagata", "Dengue 4-II", "Influenza B/Yam", "Parainfluenza-3", "Dengue 1-I"], "range": ["#0B194C", "#ff926e", "#0db0d6", "#BC0000", "#2cccf2", "#208288", "#6C7593", "#eb520d", "#ffd8bc", "#BBE4D1", "#adebfa", "#0db0d6", "#76C7BE", "#9779bd", "#ff9000", "#1a3da6", "#E06E85", "#5700bc", "#0db0d6", "#2cccf2", "#76def7", "#9F2A44", "#76def7", "#c40062", "#2cccf2", "#F5AD52", "#ff6633", "#ffe9bc", "#eb0076", "#adebfa", "#ED9AB0", "#ffb24e", "#0db0d6"]}, "type": "nominal"}, "tooltip": {"value": null}, "x": {"field": "xtick_pos", "title": "", "type": "quantitative"}, "y": {"field": "lower_95ci", "title": "", "type": "quantitative"}, "y2": {"field": "upper_95ci"}}, "height": 250, "width": 600}, {"data": {"name": "data-994311638f0b9d22a99d01543c25f213"}, "mark": {"type": "rule", "strokeDash": [3, 5]}, "encoding": {"x": {"field": "x", "type": "quantitative"}}}], "data": {"name": "data-75a8bca097efaece6dcf4fd2aa080144"}, "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json", "datasets": {"data-75a8bca097efaece6dcf4fd2aa080144": [{"virus": "hepatitisB", "subtype": "A2", "virus_and_subtype": "hepatitisB_A2", "gene": "Polymerase", "adaptive_subs_per_codon_per_year": 0.0020527412688526, "lower_95ci": -0.031156250297574, "upper_95ci": 0.0192590206607188, "ci": "[-0.031156250297574087, 0.019259020660718888]", "len_in_codons": 846, "adaptive_muts_per_year": 0.0017366191134493, "lower_95ci_mutspergene": -0.0263581877517476, "upper_95ci_mutspergene": 0.0162931314789681, "legible_name": "HepatitisB-A2", "virus_family": "hepadnavirus", "color": "#ffd8bc", "legible_rate_percodon": "0.0\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.0 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/hepatitisB/A2/", "xtick_pos": 4}, {"virus": "hepatitisB", "subtype": "A2", "virus_and_subtype": "hepatitisB_A2", "gene": "Large", "adaptive_subs_per_codon_per_year": 0.0, "lower_95ci": 0.0, "upper_95ci": 0.0, "ci": "[0.0, 0.0]", "len_in_codons": 401, "adaptive_muts_per_year": 0.0, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0, "legible_name": "HepatitisB-A2", "virus_family": "hepadnavirus", "color": "#ffd8bc", "legible_rate_percodon": "0.0\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.0 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/hepatitisB/A2/", "xtick_pos": 6}, {"virus": "hepatitisB", "subtype": "A2", "virus_and_subtype": "hepatitisB_A2", "gene": "Middle", "adaptive_subs_per_codon_per_year": 0.0, "lower_95ci": 0.0, "upper_95ci": 0.0, "ci": "[0.0, 0.0]", "len_in_codons": 282, "adaptive_muts_per_year": 0.0, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0, "legible_name": "HepatitisB-A2", "virus_family": "hepadnavirus", "color": "#ffd8bc", "legible_rate_percodon": "0.0\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.0 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/hepatitisB/A2/", "xtick_pos": 8}, {"virus": "hepatitisB", "subtype": "A2", "virus_and_subtype": "hepatitisB_A2", "gene": "Small", "adaptive_subs_per_codon_per_year": 0.0, "lower_95ci": 0.0, "upper_95ci": 0.0, "ci": "[0.0, 0.0]", "len_in_codons": 227, "adaptive_muts_per_year": 0.0, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0, "legible_name": "HepatitisB-A2", "virus_family": "hepadnavirus", "color": "#ffd8bc", "legible_rate_percodon": "0.0\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.0 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/hepatitisB/A2/", "xtick_pos": 10}, {"virus": "hepatitisB", "subtype": "A2", "virus_and_subtype": "hepatitisB_A2", "gene": "X", "adaptive_subs_per_codon_per_year": -0.041241648375197, "lower_95ci": -0.2120676912747404, "upper_95ci": 0.0, "ci": "[-0.21206769127474043, 0.0]", "len_in_codons": 155, "adaptive_muts_per_year": -0.0063924554981555, "lower_95ci_mutspergene": -0.0328704921475847, "upper_95ci_mutspergene": 0.0, "legible_name": "HepatitisB-A2", "virus_family": "hepadnavirus", "color": "#ffd8bc", "legible_rate_percodon": "-0.04\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "-0.01 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/hepatitisB/A2/", "xtick_pos": 12}, {"virus": "hepatitisB", "subtype": "A2", "virus_and_subtype": "hepatitisB_A2", "gene": "Core", "adaptive_subs_per_codon_per_year": 0.0, "lower_95ci": 0.0, "upper_95ci": 0.0, "ci": "[0.0, 0.0]", "len_in_codons": 186, "adaptive_muts_per_year": 0.0, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0, "legible_name": "HepatitisB-A2", "virus_family": "hepadnavirus", "color": "#ffd8bc", "legible_rate_percodon": "0.0\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.0 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/hepatitisB/A2/", "xtick_pos": 14}, {"virus": "measles", "subtype": "", "virus_and_subtype": "measles", "gene": "Measles H", "adaptive_subs_per_codon_per_year": 0.1488760781105891, "lower_95ci": 0.0, "upper_95ci": 0.464536965766201, "ci": "[0.0, 0.46453696576620107]", "len_in_codons": 618, "adaptive_muts_per_year": 0.0920054162723441, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.2870838448435123, "legible_name": "Measles", "virus_family": "paramyxovirus", "color": "#F5AD52", "legible_rate_percodon": "0.15\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.09 muts per year", "nextstrain_tree_url": "https://nextstrain.org/measles", "xtick_pos": 1}, {"virus": "h3n2", "subtype": "", "virus_and_subtype": "h3n2", "gene": "H3N2 HA1", "adaptive_subs_per_codon_per_year": 3.968017826307325, "lower_95ci": 2.958853820205344, "upper_95ci": 4.99468539503025, "ci": "[2.9588538202053436, 4.99468539503025]", "len_in_codons": 329, "adaptive_muts_per_year": 1.3054778648551095, "lower_95ci_mutspergene": 0.973462906847558, "upper_95ci_mutspergene": 1.6432514949649522, "legible_name": "Influenza A/H3N2", "virus_family": "orthomyxovirus", "color": "#9F2A44", "legible_rate_percodon": "3.97\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "1.31 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/flu/seasonal/h3n2/ha/60y", "xtick_pos": 2}], "data-994311638f0b9d22a99d01543c25f213": [{"x": 3}]}};
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
  var spec = {"config": {"view": {"continuousWidth": 400, "continuousHeight": 300, "strokeWidth": 0}, "axis": {"grid": false}, "axisX": {"labelAngle": 270, "labelFontSize": 12}, "axisY": {"labelFontSize": 12, "titleFontSize": 14, "titlePadding": 20}}, "layer": [{"data": {"name": "data-75a8bca097efaece6dcf4fd2aa080144"}, "mark": {"type": "point", "filled": true, "opacity": 1, "size": 200}, "encoding": {"color": {"field": "legible_name", "legend": null, "scale": {"domain": ["RSV-A", "Adenovirus B-3", "Dengue 1-III", "Parvovirus B19-1A", "Dengue 2-AA", "OC43-A", "RSV-B", "Mumps", "HepatitisB-A2", "NL63", "Dengue 4-I", "Dengue 1-IV", "229E", "Enterovirus D68", "Parainfluenza-1", "Rotavirus A/P[8]", "Influenza B/Vic", "Norovirus GII.4", "Dengue 1-V", "Dengue 2-AI", "Dengue 3-III", "Influenza A/H3N2", "Dengue 3-II", "Influenza C/Mississippi", "Dengue 2-C", "Measles", "Adenovirus B-7", "HepatitisB-D3", "Influenza C/Yamagata", "Dengue 4-II", "Influenza B/Yam", "Parainfluenza-3", "Dengue 1-I"], "range": ["#0B194C", "#ff926e", "#0db0d6", "#BC0000", "#2cccf2", "#208288", "#6C7593", "#eb520d", "#ffd8bc", "#BBE4D1", "#adebfa", "#0db0d6", "#76C7BE", "#9779bd", "#ff9000", "#1a3da6", "#E06E85", "#5700bc", "#0db0d6", "#2cccf2", "#76def7", "#9F2A44", "#76def7", "#c40062", "#2cccf2", "#F5AD52", "#ff6633", "#ffe9bc", "#eb0076", "#adebfa", "#ED9AB0", "#ffb24e", "#0db0d6"]}, "type": "nominal"}, "href": {"field": "nextstrain_tree_url", "type": "nominal"}, "tooltip": [{"field": "legible_name", "title": "Virus", "type": "nominal"}, {"field": "legible_rate_percodon", "title": "Rate", "type": "nominal"}], "x": {"axis": {"labelExpr": "datum.label == 1 ? 'Measles H' : datum.label == 2 ? 'H3N2 HA1' : datum.label == 4 ? 'Polymerase' : datum.label == 6 ? 'Large' : datum.label == 8 ? 'Middle' : datum.label == 10 ? 'Small' : datum.label == 12 ? 'X' : 'Core'", "tickCount": 8, "values": [1, 2, 4, 6, 8, 10, 12, 14]}, "field": "xtick_pos", "title": "", "type": "quantitative"}, "y": {"axis": {"format": ".1f", "title": ["Adaptive Mutations", "per Year"]}, "field": "adaptive_muts_per_year", "type": "quantitative"}}, "height": 250, "width": 600}, {"data": {"name": "data-75a8bca097efaece6dcf4fd2aa080144"}, "mark": "errorbar", "encoding": {"color": {"field": "legible_name", "legend": null, "scale": {"domain": ["RSV-A", "Adenovirus B-3", "Dengue 1-III", "Parvovirus B19-1A", "Dengue 2-AA", "OC43-A", "RSV-B", "Mumps", "HepatitisB-A2", "NL63", "Dengue 4-I", "Dengue 1-IV", "229E", "Enterovirus D68", "Parainfluenza-1", "Rotavirus A/P[8]", "Influenza B/Vic", "Norovirus GII.4", "Dengue 1-V", "Dengue 2-AI", "Dengue 3-III", "Influenza A/H3N2", "Dengue 3-II", "Influenza C/Mississippi", "Dengue 2-C", "Measles", "Adenovirus B-7", "HepatitisB-D3", "Influenza C/Yamagata", "Dengue 4-II", "Influenza B/Yam", "Parainfluenza-3", "Dengue 1-I"], "range": ["#0B194C", "#ff926e", "#0db0d6", "#BC0000", "#2cccf2", "#208288", "#6C7593", "#eb520d", "#ffd8bc", "#BBE4D1", "#adebfa", "#0db0d6", "#76C7BE", "#9779bd", "#ff9000", "#1a3da6", "#E06E85", "#5700bc", "#0db0d6", "#2cccf2", "#76def7", "#9F2A44", "#76def7", "#c40062", "#2cccf2", "#F5AD52", "#ff6633", "#ffe9bc", "#eb0076", "#adebfa", "#ED9AB0", "#ffb24e", "#0db0d6"]}, "type": "nominal"}, "tooltip": {"value": null}, "x": {"field": "xtick_pos", "title": "", "type": "quantitative"}, "y": {"field": "lower_95ci_mutspergene", "title": "", "type": "quantitative"}, "y2": {"field": "upper_95ci_mutspergene"}}, "height": 250, "width": 600}, {"data": {"name": "data-994311638f0b9d22a99d01543c25f213"}, "mark": {"type": "rule", "strokeDash": [3, 5]}, "encoding": {"x": {"field": "x", "type": "quantitative"}}}], "data": {"name": "data-75a8bca097efaece6dcf4fd2aa080144"}, "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json", "datasets": {"data-75a8bca097efaece6dcf4fd2aa080144": [{"virus": "hepatitisB", "subtype": "A2", "virus_and_subtype": "hepatitisB_A2", "gene": "Polymerase", "adaptive_subs_per_codon_per_year": 0.0020527412688526, "lower_95ci": -0.031156250297574, "upper_95ci": 0.0192590206607188, "ci": "[-0.031156250297574087, 0.019259020660718888]", "len_in_codons": 846, "adaptive_muts_per_year": 0.0017366191134493, "lower_95ci_mutspergene": -0.0263581877517476, "upper_95ci_mutspergene": 0.0162931314789681, "legible_name": "HepatitisB-A2", "virus_family": "hepadnavirus", "color": "#ffd8bc", "legible_rate_percodon": "0.0\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.0 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/hepatitisB/A2/", "xtick_pos": 4}, {"virus": "hepatitisB", "subtype": "A2", "virus_and_subtype": "hepatitisB_A2", "gene": "Large", "adaptive_subs_per_codon_per_year": 0.0, "lower_95ci": 0.0, "upper_95ci": 0.0, "ci": "[0.0, 0.0]", "len_in_codons": 401, "adaptive_muts_per_year": 0.0, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0, "legible_name": "HepatitisB-A2", "virus_family": "hepadnavirus", "color": "#ffd8bc", "legible_rate_percodon": "0.0\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.0 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/hepatitisB/A2/", "xtick_pos": 6}, {"virus": "hepatitisB", "subtype": "A2", "virus_and_subtype": "hepatitisB_A2", "gene": "Middle", "adaptive_subs_per_codon_per_year": 0.0, "lower_95ci": 0.0, "upper_95ci": 0.0, "ci": "[0.0, 0.0]", "len_in_codons": 282, "adaptive_muts_per_year": 0.0, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0, "legible_name": "HepatitisB-A2", "virus_family": "hepadnavirus", "color": "#ffd8bc", "legible_rate_percodon": "0.0\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.0 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/hepatitisB/A2/", "xtick_pos": 8}, {"virus": "hepatitisB", "subtype": "A2", "virus_and_subtype": "hepatitisB_A2", "gene": "Small", "adaptive_subs_per_codon_per_year": 0.0, "lower_95ci": 0.0, "upper_95ci": 0.0, "ci": "[0.0, 0.0]", "len_in_codons": 227, "adaptive_muts_per_year": 0.0, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0, "legible_name": "HepatitisB-A2", "virus_family": "hepadnavirus", "color": "#ffd8bc", "legible_rate_percodon": "0.0\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.0 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/hepatitisB/A2/", "xtick_pos": 10}, {"virus": "hepatitisB", "subtype": "A2", "virus_and_subtype": "hepatitisB_A2", "gene": "X", "adaptive_subs_per_codon_per_year": -0.041241648375197, "lower_95ci": -0.2120676912747404, "upper_95ci": 0.0, "ci": "[-0.21206769127474043, 0.0]", "len_in_codons": 155, "adaptive_muts_per_year": -0.0063924554981555, "lower_95ci_mutspergene": -0.0328704921475847, "upper_95ci_mutspergene": 0.0, "legible_name": "HepatitisB-A2", "virus_family": "hepadnavirus", "color": "#ffd8bc", "legible_rate_percodon": "-0.04\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "-0.01 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/hepatitisB/A2/", "xtick_pos": 12}, {"virus": "hepatitisB", "subtype": "A2", "virus_and_subtype": "hepatitisB_A2", "gene": "Core", "adaptive_subs_per_codon_per_year": 0.0, "lower_95ci": 0.0, "upper_95ci": 0.0, "ci": "[0.0, 0.0]", "len_in_codons": 186, "adaptive_muts_per_year": 0.0, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0, "legible_name": "HepatitisB-A2", "virus_family": "hepadnavirus", "color": "#ffd8bc", "legible_rate_percodon": "0.0\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.0 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/hepatitisB/A2/", "xtick_pos": 14}, {"virus": "measles", "subtype": "", "virus_and_subtype": "measles", "gene": "Measles H", "adaptive_subs_per_codon_per_year": 0.1488760781105891, "lower_95ci": 0.0, "upper_95ci": 0.464536965766201, "ci": "[0.0, 0.46453696576620107]", "len_in_codons": 618, "adaptive_muts_per_year": 0.0920054162723441, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.2870838448435123, "legible_name": "Measles", "virus_family": "paramyxovirus", "color": "#F5AD52", "legible_rate_percodon": "0.15\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.09 muts per year", "nextstrain_tree_url": "https://nextstrain.org/measles", "xtick_pos": 1}, {"virus": "h3n2", "subtype": "", "virus_and_subtype": "h3n2", "gene": "H3N2 HA1", "adaptive_subs_per_codon_per_year": 3.968017826307325, "lower_95ci": 2.958853820205344, "upper_95ci": 4.99468539503025, "ci": "[2.9588538202053436, 4.99468539503025]", "len_in_codons": 329, "adaptive_muts_per_year": 1.3054778648551095, "lower_95ci_mutspergene": 0.973462906847558, "upper_95ci_mutspergene": 1.6432514949649522, "legible_name": "Influenza A/H3N2", "virus_family": "orthomyxovirus", "color": "#9F2A44", "legible_rate_percodon": "3.97\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "1.31 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/flu/seasonal/h3n2/ha/60y", "xtick_pos": 2}], "data-994311638f0b9d22a99d01543c25f213": [{"x": 3}]}};
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
