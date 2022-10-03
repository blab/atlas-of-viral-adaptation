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
  var spec = {"config": {"view": {"continuousWidth": 400, "continuousHeight": 300, "strokeWidth": 0}, "axis": {"grid": false}, "axisX": {"labelAngle": 270, "labelFontSize": 12}, "axisY": {"labelFontSize": 12, "titleFontSize": 14, "titlePadding": 20}}, "layer": [{"data": {"name": "data-63aa06238c3334ccc57e10326de250f3"}, "mark": {"type": "point", "filled": true, "opacity": 1, "size": 200}, "encoding": {"color": {"field": "legible_name", "legend": null, "scale": {"domain": ["229E", "Measles", "NL63", "RSV-A", "RSV-B", "Influenza A/H3N2", "Enterovirus D68", "OC43-A", "Mumps", "Norovirus GII.4", "Influenza B/Yam", "Influenza B/Vic"], "range": ["#76C7BE", "#F5AD52", "#BBE4D1", "#0B194C", "#6C7593", "#9F2A44", "#a373a5", "#208288", "#f58452", "#d0b9d2", "#ED9AB0", "#E06E85"]}, "type": "nominal"}, "href": {"field": "nextstrain_tree_url", "type": "nominal"}, "tooltip": [{"field": "legible_name", "title": "Virus", "type": "nominal"}, {"field": "legible_rate_percodon", "title": "Rate", "type": "nominal"}], "x": {"axis": {"labelExpr": "datum.label == 1 ? 'Measles H' : datum.label == 2 ? 'H3N2 HA1' : datum.label == 4 ? 'VP4' : datum.label == 6 ? 'VP2' : datum.label == 8 ? 'VP3' : datum.label == 10 ? 'VP1' : datum.label == 12 ? '2A' : datum.label == 14 ? '2B' : datum.label == 16 ? '2C' : datum.label == 18 ? '3A' : datum.label == 20 ? '3B' : datum.label == 22 ? '3C' : '3D'", "tickCount": 13, "values": [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]}, "field": "xtick_pos", "title": "", "type": "quantitative"}, "y": {"axis": {"format": ".1f", "title": ["Adaptive Mutations", "per Codon per Year (\u00d7 10\u207b\u00b3)"]}, "field": "adaptive_subs_per_codon_per_year", "type": "quantitative"}}, "height": 250, "width": 600}, {"data": {"name": "data-63aa06238c3334ccc57e10326de250f3"}, "mark": "errorbar", "encoding": {"color": {"field": "legible_name", "legend": null, "scale": {"domain": ["229E", "Measles", "NL63", "RSV-A", "RSV-B", "Influenza A/H3N2", "Enterovirus D68", "OC43-A", "Mumps", "Norovirus GII.4", "Influenza B/Yam", "Influenza B/Vic"], "range": ["#76C7BE", "#F5AD52", "#BBE4D1", "#0B194C", "#6C7593", "#9F2A44", "#a373a5", "#208288", "#f58452", "#d0b9d2", "#ED9AB0", "#E06E85"]}, "type": "nominal"}, "tooltip": {"value": null}, "x": {"field": "xtick_pos", "title": "", "type": "quantitative"}, "y": {"field": "lower_95ci", "title": "", "type": "quantitative"}, "y2": {"field": "upper_95ci"}}, "height": 250, "width": 600}, {"data": {"name": "data-994311638f0b9d22a99d01543c25f213"}, "mark": {"type": "rule", "strokeDash": [3, 5]}, "encoding": {"x": {"field": "x", "type": "quantitative"}}}], "data": {"name": "data-63aa06238c3334ccc57e10326de250f3"}, "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json", "datasets": {"data-63aa06238c3334ccc57e10326de250f3": [{"virus": "enterovirusd68", "subtype": "", "virus_and_subtype": "enterovirusd68", "gene": "VP4", "adaptive_subs_per_codon_per_year": 0.3249943092308427, "lower_95ci": 0.0, "upper_95ci": 0.974361587462183, "ci": "[0.0, 0.974361587462183]", "len_in_codons": 69, "adaptive_muts_per_year": 0.0224246073369281, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0672309495348906, "legible_name": "Enterovirus D68", "virus_family": "picornavirus", "color": "#a373a5", "legible_rate_percodon": "0.32\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.02 muts per year", "nextstrain_tree_url": "https://nextstrain.org/enterovirus/d68/genome", "xtick_pos": 4}, {"virus": "enterovirusd68", "subtype": "", "virus_and_subtype": "enterovirusd68", "gene": "VP2", "adaptive_subs_per_codon_per_year": 1.130880804254751, "lower_95ci": 0.4995851487260931, "upper_95ci": 2.002014534484871, "ci": "[0.49958514872609316, 2.002014534484871]", "len_in_codons": 248, "adaptive_muts_per_year": 0.2804584394551782, "lower_95ci_mutspergene": 0.1238971168840711, "upper_95ci_mutspergene": 0.496499604552248, "legible_name": "Enterovirus D68", "virus_family": "picornavirus", "color": "#a373a5", "legible_rate_percodon": "1.13\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.28 muts per year", "nextstrain_tree_url": "https://nextstrain.org/enterovirus/d68/genome", "xtick_pos": 6}, {"virus": "enterovirusd68", "subtype": "", "virus_and_subtype": "enterovirusd68", "gene": "VP3", "adaptive_subs_per_codon_per_year": 0.0745836795176365, "lower_95ci": 0.0, "upper_95ci": 0.4117134498089564, "ci": "[0.0, 0.4117134498089564]", "len_in_codons": 235, "adaptive_muts_per_year": 0.0175271646866445, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0967526607051047, "legible_name": "Enterovirus D68", "virus_family": "picornavirus", "color": "#a373a5", "legible_rate_percodon": "0.07\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.02 muts per year", "nextstrain_tree_url": "https://nextstrain.org/enterovirus/d68/genome", "xtick_pos": 8}, {"virus": "enterovirusd68", "subtype": "", "virus_and_subtype": "enterovirusd68", "gene": "VP1", "adaptive_subs_per_codon_per_year": 1.517049084058603, "lower_95ci": 0.7582093757458963, "upper_95ci": 2.327216254157004, "ci": "[0.7582093757458963, 2.327216254157004]", "len_in_codons": 309, "adaptive_muts_per_year": 0.4687681669741083, "lower_95ci_mutspergene": 0.2342866971054819, "upper_95ci_mutspergene": 0.7191098225345142, "legible_name": "Enterovirus D68", "virus_family": "picornavirus", "color": "#a373a5", "legible_rate_percodon": "1.52\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.47 muts per year", "nextstrain_tree_url": "https://nextstrain.org/enterovirus/d68/genome", "xtick_pos": 10}, {"virus": "enterovirusd68", "subtype": "", "virus_and_subtype": "enterovirusd68", "gene": "2A", "adaptive_subs_per_codon_per_year": 0.4344329462667213, "lower_95ci": 0.0, "upper_95ci": 1.08146423805384, "ci": "[0.0, 1.08146423805384]", "len_in_codons": 147, "adaptive_muts_per_year": 0.063861643101208, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.1589752429939144, "legible_name": "Enterovirus D68", "virus_family": "picornavirus", "color": "#a373a5", "legible_rate_percodon": "0.43\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.06 muts per year", "nextstrain_tree_url": "https://nextstrain.org/enterovirus/d68/genome", "xtick_pos": 12}, {"virus": "enterovirusd68", "subtype": "", "virus_and_subtype": "enterovirusd68", "gene": "2B", "adaptive_subs_per_codon_per_year": 0.0002882820458267, "lower_95ci": 0.0, "upper_95ci": 0.0038796178949845, "ci": "[0.0, 0.0038796178949845254]", "len_in_codons": 99, "adaptive_muts_per_year": 2.8539922536853014e-05, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0003840821716034, "legible_name": "Enterovirus D68", "virus_family": "picornavirus", "color": "#a373a5", "legible_rate_percodon": "0.0\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.0 muts per year", "nextstrain_tree_url": "https://nextstrain.org/enterovirus/d68/genome", "xtick_pos": 14}, {"virus": "enterovirusd68", "subtype": "", "virus_and_subtype": "enterovirusd68", "gene": "2C", "adaptive_subs_per_codon_per_year": 0.2753424909208843, "lower_95ci": 0.0, "upper_95ci": 0.8709890751677574, "ci": "[0.0, 0.8709890751677574]", "len_in_codons": 330, "adaptive_muts_per_year": 0.0908630220038918, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.2874263948053599, "legible_name": "Enterovirus D68", "virus_family": "picornavirus", "color": "#a373a5", "legible_rate_percodon": "0.28\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.09 muts per year", "nextstrain_tree_url": "https://nextstrain.org/enterovirus/d68/genome", "xtick_pos": 16}, {"virus": "enterovirusd68", "subtype": "", "virus_and_subtype": "enterovirusd68", "gene": "3A", "adaptive_subs_per_codon_per_year": 0.0, "lower_95ci": 0.0, "upper_95ci": 0.0, "ci": "[0.0, 0.0]", "len_in_codons": 89, "adaptive_muts_per_year": 0.0, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0, "legible_name": "Enterovirus D68", "virus_family": "picornavirus", "color": "#a373a5", "legible_rate_percodon": "0.0\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.0 muts per year", "nextstrain_tree_url": "https://nextstrain.org/enterovirus/d68/genome", "xtick_pos": 18}, {"virus": "enterovirusd68", "subtype": "", "virus_and_subtype": "enterovirusd68", "gene": "3B", "adaptive_subs_per_codon_per_year": 0.0, "lower_95ci": 0.0, "upper_95ci": 0.0, "ci": "[0.0, 0.0]", "len_in_codons": 22, "adaptive_muts_per_year": 0.0, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0, "legible_name": "Enterovirus D68", "virus_family": "picornavirus", "color": "#a373a5", "legible_rate_percodon": "0.0\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.0 muts per year", "nextstrain_tree_url": "https://nextstrain.org/enterovirus/d68/genome", "xtick_pos": 20}, {"virus": "enterovirusd68", "subtype": "", "virus_and_subtype": "enterovirusd68", "gene": "3C", "adaptive_subs_per_codon_per_year": 0.0, "lower_95ci": 0.0, "upper_95ci": 0.0, "ci": "[0.0, 0.0]", "len_in_codons": 183, "adaptive_muts_per_year": 0.0, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0, "legible_name": "Enterovirus D68", "virus_family": "picornavirus", "color": "#a373a5", "legible_rate_percodon": "0.0\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.0 muts per year", "nextstrain_tree_url": "https://nextstrain.org/enterovirus/d68/genome", "xtick_pos": 22}, {"virus": "enterovirusd68", "subtype": "", "virus_and_subtype": "enterovirusd68", "gene": "3D", "adaptive_subs_per_codon_per_year": 0.3421578702666206, "lower_95ci": 0.0312003072602813, "upper_95ci": 0.735949789390216, "ci": "[0.031200307260281307, 0.735949789390216]", "len_in_codons": 457, "adaptive_muts_per_year": 0.1563661467118456, "lower_95ci_mutspergene": 0.0142585404179485, "upper_95ci_mutspergene": 0.3363290537513287, "legible_name": "Enterovirus D68", "virus_family": "picornavirus", "color": "#a373a5", "legible_rate_percodon": "0.34\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.16 muts per year", "nextstrain_tree_url": "https://nextstrain.org/enterovirus/d68/genome", "xtick_pos": 24}, {"virus": "measles", "subtype": "", "virus_and_subtype": "measles", "gene": "Measles H", "adaptive_subs_per_codon_per_year": 0.1488760781105891, "lower_95ci": 0.0, "upper_95ci": 0.464536965766201, "ci": "[0.0, 0.46453696576620107]", "len_in_codons": 618, "adaptive_muts_per_year": 0.0920054162723441, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.2870838448435123, "legible_name": "Measles", "virus_family": "paramyxovirus", "color": "#F5AD52", "legible_rate_percodon": "0.15\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.09 muts per year", "nextstrain_tree_url": "https://nextstrain.org/measles", "xtick_pos": 1}, {"virus": "h3n2", "subtype": "", "virus_and_subtype": "h3n2", "gene": "H3N2 HA1", "adaptive_subs_per_codon_per_year": 3.968017826307325, "lower_95ci": 2.958853820205344, "upper_95ci": 4.99468539503025, "ci": "[2.9588538202053436, 4.99468539503025]", "len_in_codons": 329, "adaptive_muts_per_year": 1.3054778648551095, "lower_95ci_mutspergene": 0.973462906847558, "upper_95ci_mutspergene": 1.6432514949649522, "legible_name": "Influenza A/H3N2", "virus_family": "orthomyxovirus", "color": "#9F2A44", "legible_rate_percodon": "3.97\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "1.31 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/flu/seasonal/h3n2/ha/60y", "xtick_pos": 2}], "data-994311638f0b9d22a99d01543c25f213": [{"x": 3}]}};
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
  var spec = {"config": {"view": {"continuousWidth": 400, "continuousHeight": 300, "strokeWidth": 0}, "axis": {"grid": false}, "axisX": {"labelAngle": 270, "labelFontSize": 12}, "axisY": {"labelFontSize": 12, "titleFontSize": 14, "titlePadding": 20}}, "layer": [{"data": {"name": "data-63aa06238c3334ccc57e10326de250f3"}, "mark": {"type": "point", "filled": true, "opacity": 1, "size": 200}, "encoding": {"color": {"field": "legible_name", "legend": null, "scale": {"domain": ["229E", "Measles", "NL63", "RSV-A", "RSV-B", "Influenza A/H3N2", "Enterovirus D68", "OC43-A", "Mumps", "Norovirus GII.4", "Influenza B/Yam", "Influenza B/Vic"], "range": ["#76C7BE", "#F5AD52", "#BBE4D1", "#0B194C", "#6C7593", "#9F2A44", "#a373a5", "#208288", "#f58452", "#d0b9d2", "#ED9AB0", "#E06E85"]}, "type": "nominal"}, "href": {"field": "nextstrain_tree_url", "type": "nominal"}, "tooltip": [{"field": "legible_name", "title": "Virus", "type": "nominal"}, {"field": "legible_rate_percodon", "title": "Rate", "type": "nominal"}], "x": {"axis": {"labelExpr": "datum.label == 1 ? 'Measles H' : datum.label == 2 ? 'H3N2 HA1' : datum.label == 4 ? 'VP4' : datum.label == 6 ? 'VP2' : datum.label == 8 ? 'VP3' : datum.label == 10 ? 'VP1' : datum.label == 12 ? '2A' : datum.label == 14 ? '2B' : datum.label == 16 ? '2C' : datum.label == 18 ? '3A' : datum.label == 20 ? '3B' : datum.label == 22 ? '3C' : '3D'", "tickCount": 13, "values": [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]}, "field": "xtick_pos", "title": "", "type": "quantitative"}, "y": {"axis": {"format": ".1f", "title": ["Adaptive Mutations", "per Year"]}, "field": "adaptive_muts_per_year", "type": "quantitative"}}, "height": 250, "width": 600}, {"data": {"name": "data-63aa06238c3334ccc57e10326de250f3"}, "mark": "errorbar", "encoding": {"color": {"field": "legible_name", "legend": null, "scale": {"domain": ["229E", "Measles", "NL63", "RSV-A", "RSV-B", "Influenza A/H3N2", "Enterovirus D68", "OC43-A", "Mumps", "Norovirus GII.4", "Influenza B/Yam", "Influenza B/Vic"], "range": ["#76C7BE", "#F5AD52", "#BBE4D1", "#0B194C", "#6C7593", "#9F2A44", "#a373a5", "#208288", "#f58452", "#d0b9d2", "#ED9AB0", "#E06E85"]}, "type": "nominal"}, "tooltip": {"value": null}, "x": {"field": "xtick_pos", "title": "", "type": "quantitative"}, "y": {"field": "lower_95ci_mutspergene", "title": "", "type": "quantitative"}, "y2": {"field": "upper_95ci_mutspergene"}}, "height": 250, "width": 600}, {"data": {"name": "data-994311638f0b9d22a99d01543c25f213"}, "mark": {"type": "rule", "strokeDash": [3, 5]}, "encoding": {"x": {"field": "x", "type": "quantitative"}}}], "data": {"name": "data-63aa06238c3334ccc57e10326de250f3"}, "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json", "datasets": {"data-63aa06238c3334ccc57e10326de250f3": [{"virus": "enterovirusd68", "subtype": "", "virus_and_subtype": "enterovirusd68", "gene": "VP4", "adaptive_subs_per_codon_per_year": 0.3249943092308427, "lower_95ci": 0.0, "upper_95ci": 0.974361587462183, "ci": "[0.0, 0.974361587462183]", "len_in_codons": 69, "adaptive_muts_per_year": 0.0224246073369281, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0672309495348906, "legible_name": "Enterovirus D68", "virus_family": "picornavirus", "color": "#a373a5", "legible_rate_percodon": "0.32\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.02 muts per year", "nextstrain_tree_url": "https://nextstrain.org/enterovirus/d68/genome", "xtick_pos": 4}, {"virus": "enterovirusd68", "subtype": "", "virus_and_subtype": "enterovirusd68", "gene": "VP2", "adaptive_subs_per_codon_per_year": 1.130880804254751, "lower_95ci": 0.4995851487260931, "upper_95ci": 2.002014534484871, "ci": "[0.49958514872609316, 2.002014534484871]", "len_in_codons": 248, "adaptive_muts_per_year": 0.2804584394551782, "lower_95ci_mutspergene": 0.1238971168840711, "upper_95ci_mutspergene": 0.496499604552248, "legible_name": "Enterovirus D68", "virus_family": "picornavirus", "color": "#a373a5", "legible_rate_percodon": "1.13\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.28 muts per year", "nextstrain_tree_url": "https://nextstrain.org/enterovirus/d68/genome", "xtick_pos": 6}, {"virus": "enterovirusd68", "subtype": "", "virus_and_subtype": "enterovirusd68", "gene": "VP3", "adaptive_subs_per_codon_per_year": 0.0745836795176365, "lower_95ci": 0.0, "upper_95ci": 0.4117134498089564, "ci": "[0.0, 0.4117134498089564]", "len_in_codons": 235, "adaptive_muts_per_year": 0.0175271646866445, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0967526607051047, "legible_name": "Enterovirus D68", "virus_family": "picornavirus", "color": "#a373a5", "legible_rate_percodon": "0.07\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.02 muts per year", "nextstrain_tree_url": "https://nextstrain.org/enterovirus/d68/genome", "xtick_pos": 8}, {"virus": "enterovirusd68", "subtype": "", "virus_and_subtype": "enterovirusd68", "gene": "VP1", "adaptive_subs_per_codon_per_year": 1.517049084058603, "lower_95ci": 0.7582093757458963, "upper_95ci": 2.327216254157004, "ci": "[0.7582093757458963, 2.327216254157004]", "len_in_codons": 309, "adaptive_muts_per_year": 0.4687681669741083, "lower_95ci_mutspergene": 0.2342866971054819, "upper_95ci_mutspergene": 0.7191098225345142, "legible_name": "Enterovirus D68", "virus_family": "picornavirus", "color": "#a373a5", "legible_rate_percodon": "1.52\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.47 muts per year", "nextstrain_tree_url": "https://nextstrain.org/enterovirus/d68/genome", "xtick_pos": 10}, {"virus": "enterovirusd68", "subtype": "", "virus_and_subtype": "enterovirusd68", "gene": "2A", "adaptive_subs_per_codon_per_year": 0.4344329462667213, "lower_95ci": 0.0, "upper_95ci": 1.08146423805384, "ci": "[0.0, 1.08146423805384]", "len_in_codons": 147, "adaptive_muts_per_year": 0.063861643101208, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.1589752429939144, "legible_name": "Enterovirus D68", "virus_family": "picornavirus", "color": "#a373a5", "legible_rate_percodon": "0.43\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.06 muts per year", "nextstrain_tree_url": "https://nextstrain.org/enterovirus/d68/genome", "xtick_pos": 12}, {"virus": "enterovirusd68", "subtype": "", "virus_and_subtype": "enterovirusd68", "gene": "2B", "adaptive_subs_per_codon_per_year": 0.0002882820458267, "lower_95ci": 0.0, "upper_95ci": 0.0038796178949845, "ci": "[0.0, 0.0038796178949845254]", "len_in_codons": 99, "adaptive_muts_per_year": 2.8539922536853014e-05, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0003840821716034, "legible_name": "Enterovirus D68", "virus_family": "picornavirus", "color": "#a373a5", "legible_rate_percodon": "0.0\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.0 muts per year", "nextstrain_tree_url": "https://nextstrain.org/enterovirus/d68/genome", "xtick_pos": 14}, {"virus": "enterovirusd68", "subtype": "", "virus_and_subtype": "enterovirusd68", "gene": "2C", "adaptive_subs_per_codon_per_year": 0.2753424909208843, "lower_95ci": 0.0, "upper_95ci": 0.8709890751677574, "ci": "[0.0, 0.8709890751677574]", "len_in_codons": 330, "adaptive_muts_per_year": 0.0908630220038918, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.2874263948053599, "legible_name": "Enterovirus D68", "virus_family": "picornavirus", "color": "#a373a5", "legible_rate_percodon": "0.28\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.09 muts per year", "nextstrain_tree_url": "https://nextstrain.org/enterovirus/d68/genome", "xtick_pos": 16}, {"virus": "enterovirusd68", "subtype": "", "virus_and_subtype": "enterovirusd68", "gene": "3A", "adaptive_subs_per_codon_per_year": 0.0, "lower_95ci": 0.0, "upper_95ci": 0.0, "ci": "[0.0, 0.0]", "len_in_codons": 89, "adaptive_muts_per_year": 0.0, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0, "legible_name": "Enterovirus D68", "virus_family": "picornavirus", "color": "#a373a5", "legible_rate_percodon": "0.0\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.0 muts per year", "nextstrain_tree_url": "https://nextstrain.org/enterovirus/d68/genome", "xtick_pos": 18}, {"virus": "enterovirusd68", "subtype": "", "virus_and_subtype": "enterovirusd68", "gene": "3B", "adaptive_subs_per_codon_per_year": 0.0, "lower_95ci": 0.0, "upper_95ci": 0.0, "ci": "[0.0, 0.0]", "len_in_codons": 22, "adaptive_muts_per_year": 0.0, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0, "legible_name": "Enterovirus D68", "virus_family": "picornavirus", "color": "#a373a5", "legible_rate_percodon": "0.0\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.0 muts per year", "nextstrain_tree_url": "https://nextstrain.org/enterovirus/d68/genome", "xtick_pos": 20}, {"virus": "enterovirusd68", "subtype": "", "virus_and_subtype": "enterovirusd68", "gene": "3C", "adaptive_subs_per_codon_per_year": 0.0, "lower_95ci": 0.0, "upper_95ci": 0.0, "ci": "[0.0, 0.0]", "len_in_codons": 183, "adaptive_muts_per_year": 0.0, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0, "legible_name": "Enterovirus D68", "virus_family": "picornavirus", "color": "#a373a5", "legible_rate_percodon": "0.0\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.0 muts per year", "nextstrain_tree_url": "https://nextstrain.org/enterovirus/d68/genome", "xtick_pos": 22}, {"virus": "enterovirusd68", "subtype": "", "virus_and_subtype": "enterovirusd68", "gene": "3D", "adaptive_subs_per_codon_per_year": 0.3421578702666206, "lower_95ci": 0.0312003072602813, "upper_95ci": 0.735949789390216, "ci": "[0.031200307260281307, 0.735949789390216]", "len_in_codons": 457, "adaptive_muts_per_year": 0.1563661467118456, "lower_95ci_mutspergene": 0.0142585404179485, "upper_95ci_mutspergene": 0.3363290537513287, "legible_name": "Enterovirus D68", "virus_family": "picornavirus", "color": "#a373a5", "legible_rate_percodon": "0.34\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.16 muts per year", "nextstrain_tree_url": "https://nextstrain.org/enterovirus/d68/genome", "xtick_pos": 24}, {"virus": "measles", "subtype": "", "virus_and_subtype": "measles", "gene": "Measles H", "adaptive_subs_per_codon_per_year": 0.1488760781105891, "lower_95ci": 0.0, "upper_95ci": 0.464536965766201, "ci": "[0.0, 0.46453696576620107]", "len_in_codons": 618, "adaptive_muts_per_year": 0.0920054162723441, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.2870838448435123, "legible_name": "Measles", "virus_family": "paramyxovirus", "color": "#F5AD52", "legible_rate_percodon": "0.15\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.09 muts per year", "nextstrain_tree_url": "https://nextstrain.org/measles", "xtick_pos": 1}, {"virus": "h3n2", "subtype": "", "virus_and_subtype": "h3n2", "gene": "H3N2 HA1", "adaptive_subs_per_codon_per_year": 3.968017826307325, "lower_95ci": 2.958853820205344, "upper_95ci": 4.99468539503025, "ci": "[2.9588538202053436, 4.99468539503025]", "len_in_codons": 329, "adaptive_muts_per_year": 1.3054778648551095, "lower_95ci_mutspergene": 0.973462906847558, "upper_95ci_mutspergene": 1.6432514949649522, "legible_name": "Influenza A/H3N2", "virus_family": "orthomyxovirus", "color": "#9F2A44", "legible_rate_percodon": "3.97\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "1.31 muts per year", "nextstrain_tree_url": "https://nextstrain.org/groups/blab/flu/seasonal/h3n2/ha/60y", "xtick_pos": 2}], "data-994311638f0b9d22a99d01543c25f213": [{"x": 3}]}};
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