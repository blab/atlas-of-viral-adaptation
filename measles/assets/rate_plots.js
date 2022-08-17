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
  var spec = {"config": {"view": {"continuousWidth": 400, "continuousHeight": 300, "strokeWidth": 0}, "axis": {"grid": false}, "axisX": {"labelAngle": 270, "labelFontSize": 12}, "axisY": {"labelFontSize": 12, "titleFontSize": 14, "titlePadding": 20}}, "layer": [{"data": {"name": "data-99371617fa94b288441f1d62437e7a25"}, "mark": {"type": "point", "filled": true, "opacity": 1, "size": 200}, "encoding": {"color": {"field": "legible_name", "legend": null, "scale": {"domain": ["229E", "Measles", "NL63", "RSV-A", "RSV-B", "Influenza A/H3N2", "OC43-A", "Mumps", "Norovirus GII.4"], "range": ["#76C7BE", "#F5AD52", "#BBE4D1", "#0B194C", "#6C7593", "#9F2A44", "#208288", "#f58452", "#d0b9d2"]}, "type": "nominal"}, "tooltip": [{"field": "legible_name", "title": "Virus", "type": "nominal"}, {"field": "legible_rate_percodon", "title": "Rate", "type": "nominal"}], "x": {"axis": {"labelExpr": "datum.label == 1 ? 'H3N2 HA1' : datum.label == 3 ? 'N' : datum.label == 5 ? 'P' : datum.label == 7 ? 'V' : datum.label == 9 ? 'C' : datum.label == 11 ? 'M' : datum.label == 13 ? 'F' : datum.label == 15 ? 'H' : 'L'", "tickCount": 9, "values": [1, 3, 5, 7, 9, 11, 13, 15, 17]}, "field": "xtick_pos", "title": "", "type": "quantitative"}, "y": {"axis": {"format": ".1f", "title": ["Adaptive Mutations", "per Codon per Year (\u00d7 10\u207b\u00b3)"]}, "field": "adaptive_subs_per_codon_per_year", "type": "quantitative"}}, "height": 250, "width": 600}, {"data": {"name": "data-99371617fa94b288441f1d62437e7a25"}, "mark": "errorbar", "encoding": {"color": {"field": "legible_name", "legend": null, "scale": {"domain": ["229E", "Measles", "NL63", "RSV-A", "RSV-B", "Influenza A/H3N2", "OC43-A", "Mumps", "Norovirus GII.4"], "range": ["#76C7BE", "#F5AD52", "#BBE4D1", "#0B194C", "#6C7593", "#9F2A44", "#208288", "#f58452", "#d0b9d2"]}, "type": "nominal"}, "tooltip": {"value": null}, "x": {"field": "xtick_pos", "title": "", "type": "quantitative"}, "y": {"field": "lower_95ci", "title": "", "type": "quantitative"}, "y2": {"field": "upper_95ci"}}, "height": 250, "width": 600}, {"data": {"name": "data-d5821704ce5b97c541566c58a3f65a74"}, "mark": {"type": "rule", "strokeDash": [3, 5]}, "encoding": {"x": {"field": "x", "type": "quantitative"}}}], "data": {"name": "data-99371617fa94b288441f1d62437e7a25"}, "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json", "datasets": {"data-99371617fa94b288441f1d62437e7a25": [{"virus": "measles", "subtype": "", "virus_and_subtype": "measles", "gene": "N", "adaptive_subs_per_codon_per_year": 0.1987160692898716, "lower_95ci": 0.0, "upper_95ci": 0.5375918404658502, "ci": "[0.0, 0.5375918404658502]", "len_in_codons": 526, "adaptive_muts_per_year": 0.1045246524464725, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.2827733080850371, "legible_name": "Measles", "virus_family": "paramyxovirus", "color": "#F5AD52", "legible_rate_percodon": "0.2\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.1 muts per year", "xtick_pos": 3}, {"virus": "measles", "subtype": "", "virus_and_subtype": "measles", "gene": "P", "adaptive_subs_per_codon_per_year": 0.4953899322578792, "lower_95ci": 0.0484274225886392, "upper_95ci": 1.0956100391995711, "ci": "[0.048427422588639274, 1.0956100391995713]", "len_in_codons": 508, "adaptive_muts_per_year": 0.2516580855870026, "lower_95ci_mutspergene": 0.0246011306750287, "upper_95ci_mutspergene": 0.5565698999133822, "legible_name": "Measles", "virus_family": "paramyxovirus", "color": "#F5AD52", "legible_rate_percodon": "0.5\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.25 muts per year", "xtick_pos": 5}, {"virus": "measles", "subtype": "", "virus_and_subtype": "measles", "gene": "V", "adaptive_subs_per_codon_per_year": 0.0906652562560069, "lower_95ci": 0.0, "upper_95ci": 0.3004418708304074, "ci": "[0.0, 0.3004418708304074]", "len_in_codons": 300, "adaptive_muts_per_year": 0.027199576876802, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0901325612491222, "legible_name": "Measles", "virus_family": "paramyxovirus", "color": "#F5AD52", "legible_rate_percodon": "0.09\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.03 muts per year", "xtick_pos": 7}, {"virus": "measles", "subtype": "", "virus_and_subtype": "measles", "gene": "C", "adaptive_subs_per_codon_per_year": 0.0846090587213617, "lower_95ci": 0.0, "upper_95ci": 0.2799266662548265, "ci": "[0.0, 0.27992666625482654]", "len_in_codons": 187, "adaptive_muts_per_year": 0.0158218939808946, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0523462865896525, "legible_name": "Measles", "virus_family": "paramyxovirus", "color": "#F5AD52", "legible_rate_percodon": "0.08\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.02 muts per year", "xtick_pos": 9}, {"virus": "measles", "subtype": "", "virus_and_subtype": "measles", "gene": "M", "adaptive_subs_per_codon_per_year": 0.0, "lower_95ci": 0.0, "upper_95ci": 0.0, "ci": "[0.0, 0.0]", "len_in_codons": 336, "adaptive_muts_per_year": 0.0, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0, "legible_name": "Measles", "virus_family": "paramyxovirus", "color": "#F5AD52", "legible_rate_percodon": "0.0\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.0 muts per year", "xtick_pos": 11}, {"virus": "measles", "subtype": "", "virus_and_subtype": "measles", "gene": "F", "adaptive_subs_per_codon_per_year": 0.0341272342106297, "lower_95ci": 0.0, "upper_95ci": 0.1266472961301056, "ci": "[0.0, 0.12664729613010564]", "len_in_codons": 551, "adaptive_muts_per_year": 0.0188041060500569, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0697826601676882, "legible_name": "Measles", "virus_family": "paramyxovirus", "color": "#F5AD52", "legible_rate_percodon": "0.03\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.02 muts per year", "xtick_pos": 13}, {"virus": "measles", "subtype": "", "virus_and_subtype": "measles", "gene": "H", "adaptive_subs_per_codon_per_year": 0.1488760781105891, "lower_95ci": 0.0, "upper_95ci": 0.464536965766201, "ci": "[0.0, 0.46453696576620107]", "len_in_codons": 618, "adaptive_muts_per_year": 0.0920054162723441, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.2870838448435123, "legible_name": "Measles", "virus_family": "paramyxovirus", "color": "#F5AD52", "legible_rate_percodon": "0.15\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.09 muts per year", "xtick_pos": 15}, {"virus": "measles", "subtype": "", "virus_and_subtype": "measles", "gene": "L", "adaptive_subs_per_codon_per_year": 0.0696477489789021, "lower_95ci": 0.0019629917949619, "upper_95ci": 0.1477218174503109, "ci": "[0.00196299179496196, 0.14772181745031096]", "len_in_codons": 2184, "adaptive_muts_per_year": 0.1521106837699223, "lower_95ci_mutspergene": 0.0042871740801969, "upper_95ci_mutspergene": 0.3226244493114791, "legible_name": "Measles", "virus_family": "paramyxovirus", "color": "#F5AD52", "legible_rate_percodon": "0.07\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.15 muts per year", "xtick_pos": 17}, {"virus": "h3n2", "subtype": "", "virus_and_subtype": "h3n2", "gene": "H3N2 HA1", "adaptive_subs_per_codon_per_year": 3.968017826307325, "lower_95ci": 2.958853820205344, "upper_95ci": 4.99468539503025, "ci": "[2.9588538202053436, 4.99468539503025]", "len_in_codons": 329, "adaptive_muts_per_year": 1.3054778648551095, "lower_95ci_mutspergene": 0.973462906847558, "upper_95ci_mutspergene": 1.6432514949649522, "legible_name": "Influenza A/H3N2", "virus_family": "orthomyxovirus", "color": "#9F2A44", "legible_rate_percodon": "3.97\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "1.31 muts per year", "xtick_pos": 1}], "data-d5821704ce5b97c541566c58a3f65a74": [{"x": 2}]}};
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
  var spec = {"config": {"view": {"continuousWidth": 400, "continuousHeight": 300, "strokeWidth": 0}, "axis": {"grid": false}, "axisX": {"labelAngle": 270, "labelFontSize": 12}, "axisY": {"labelFontSize": 12, "titleFontSize": 14, "titlePadding": 20}}, "layer": [{"data": {"name": "data-99371617fa94b288441f1d62437e7a25"}, "mark": {"type": "point", "filled": true, "opacity": 1, "size": 200}, "encoding": {"color": {"field": "legible_name", "legend": null, "scale": {"domain": ["229E", "Measles", "NL63", "RSV-A", "RSV-B", "Influenza A/H3N2", "OC43-A", "Mumps", "Norovirus GII.4"], "range": ["#76C7BE", "#F5AD52", "#BBE4D1", "#0B194C", "#6C7593", "#9F2A44", "#208288", "#f58452", "#d0b9d2"]}, "type": "nominal"}, "tooltip": [{"field": "legible_name", "title": "Virus", "type": "nominal"}, {"field": "legible_rate_percodon", "title": "Rate", "type": "nominal"}], "x": {"axis": {"labelExpr": "datum.label == 1 ? 'H3N2 HA1' : datum.label == 3 ? 'N' : datum.label == 5 ? 'P' : datum.label == 7 ? 'V' : datum.label == 9 ? 'C' : datum.label == 11 ? 'M' : datum.label == 13 ? 'F' : datum.label == 15 ? 'H' : 'L'", "tickCount": 9, "values": [1, 3, 5, 7, 9, 11, 13, 15, 17]}, "field": "xtick_pos", "title": "", "type": "quantitative"}, "y": {"axis": {"format": ".1f", "title": ["Adaptive Mutations", "per Year"]}, "field": "adaptive_muts_per_year", "type": "quantitative"}}, "height": 250, "width": 600}, {"data": {"name": "data-99371617fa94b288441f1d62437e7a25"}, "mark": "errorbar", "encoding": {"color": {"field": "legible_name", "legend": null, "scale": {"domain": ["229E", "Measles", "NL63", "RSV-A", "RSV-B", "Influenza A/H3N2", "OC43-A", "Mumps", "Norovirus GII.4"], "range": ["#76C7BE", "#F5AD52", "#BBE4D1", "#0B194C", "#6C7593", "#9F2A44", "#208288", "#f58452", "#d0b9d2"]}, "type": "nominal"}, "tooltip": {"value": null}, "x": {"field": "xtick_pos", "title": "", "type": "quantitative"}, "y": {"field": "lower_95ci_mutspergene", "title": "", "type": "quantitative"}, "y2": {"field": "upper_95ci_mutspergene"}}, "height": 250, "width": 600}, {"data": {"name": "data-d5821704ce5b97c541566c58a3f65a74"}, "mark": {"type": "rule", "strokeDash": [3, 5]}, "encoding": {"x": {"field": "x", "type": "quantitative"}}}], "data": {"name": "data-99371617fa94b288441f1d62437e7a25"}, "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json", "datasets": {"data-99371617fa94b288441f1d62437e7a25": [{"virus": "measles", "subtype": "", "virus_and_subtype": "measles", "gene": "N", "adaptive_subs_per_codon_per_year": 0.1987160692898716, "lower_95ci": 0.0, "upper_95ci": 0.5375918404658502, "ci": "[0.0, 0.5375918404658502]", "len_in_codons": 526, "adaptive_muts_per_year": 0.1045246524464725, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.2827733080850371, "legible_name": "Measles", "virus_family": "paramyxovirus", "color": "#F5AD52", "legible_rate_percodon": "0.2\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.1 muts per year", "xtick_pos": 3}, {"virus": "measles", "subtype": "", "virus_and_subtype": "measles", "gene": "P", "adaptive_subs_per_codon_per_year": 0.4953899322578792, "lower_95ci": 0.0484274225886392, "upper_95ci": 1.0956100391995711, "ci": "[0.048427422588639274, 1.0956100391995713]", "len_in_codons": 508, "adaptive_muts_per_year": 0.2516580855870026, "lower_95ci_mutspergene": 0.0246011306750287, "upper_95ci_mutspergene": 0.5565698999133822, "legible_name": "Measles", "virus_family": "paramyxovirus", "color": "#F5AD52", "legible_rate_percodon": "0.5\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.25 muts per year", "xtick_pos": 5}, {"virus": "measles", "subtype": "", "virus_and_subtype": "measles", "gene": "V", "adaptive_subs_per_codon_per_year": 0.0906652562560069, "lower_95ci": 0.0, "upper_95ci": 0.3004418708304074, "ci": "[0.0, 0.3004418708304074]", "len_in_codons": 300, "adaptive_muts_per_year": 0.027199576876802, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0901325612491222, "legible_name": "Measles", "virus_family": "paramyxovirus", "color": "#F5AD52", "legible_rate_percodon": "0.09\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.03 muts per year", "xtick_pos": 7}, {"virus": "measles", "subtype": "", "virus_and_subtype": "measles", "gene": "C", "adaptive_subs_per_codon_per_year": 0.0846090587213617, "lower_95ci": 0.0, "upper_95ci": 0.2799266662548265, "ci": "[0.0, 0.27992666625482654]", "len_in_codons": 187, "adaptive_muts_per_year": 0.0158218939808946, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0523462865896525, "legible_name": "Measles", "virus_family": "paramyxovirus", "color": "#F5AD52", "legible_rate_percodon": "0.08\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.02 muts per year", "xtick_pos": 9}, {"virus": "measles", "subtype": "", "virus_and_subtype": "measles", "gene": "M", "adaptive_subs_per_codon_per_year": 0.0, "lower_95ci": 0.0, "upper_95ci": 0.0, "ci": "[0.0, 0.0]", "len_in_codons": 336, "adaptive_muts_per_year": 0.0, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0, "legible_name": "Measles", "virus_family": "paramyxovirus", "color": "#F5AD52", "legible_rate_percodon": "0.0\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.0 muts per year", "xtick_pos": 11}, {"virus": "measles", "subtype": "", "virus_and_subtype": "measles", "gene": "F", "adaptive_subs_per_codon_per_year": 0.0341272342106297, "lower_95ci": 0.0, "upper_95ci": 0.1266472961301056, "ci": "[0.0, 0.12664729613010564]", "len_in_codons": 551, "adaptive_muts_per_year": 0.0188041060500569, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.0697826601676882, "legible_name": "Measles", "virus_family": "paramyxovirus", "color": "#F5AD52", "legible_rate_percodon": "0.03\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.02 muts per year", "xtick_pos": 13}, {"virus": "measles", "subtype": "", "virus_and_subtype": "measles", "gene": "H", "adaptive_subs_per_codon_per_year": 0.1488760781105891, "lower_95ci": 0.0, "upper_95ci": 0.464536965766201, "ci": "[0.0, 0.46453696576620107]", "len_in_codons": 618, "adaptive_muts_per_year": 0.0920054162723441, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.2870838448435123, "legible_name": "Measles", "virus_family": "paramyxovirus", "color": "#F5AD52", "legible_rate_percodon": "0.15\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.09 muts per year", "xtick_pos": 15}, {"virus": "measles", "subtype": "", "virus_and_subtype": "measles", "gene": "L", "adaptive_subs_per_codon_per_year": 0.0696477489789021, "lower_95ci": 0.0019629917949619, "upper_95ci": 0.1477218174503109, "ci": "[0.00196299179496196, 0.14772181745031096]", "len_in_codons": 2184, "adaptive_muts_per_year": 0.1521106837699223, "lower_95ci_mutspergene": 0.0042871740801969, "upper_95ci_mutspergene": 0.3226244493114791, "legible_name": "Measles", "virus_family": "paramyxovirus", "color": "#F5AD52", "legible_rate_percodon": "0.07\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.15 muts per year", "xtick_pos": 17}, {"virus": "h3n2", "subtype": "", "virus_and_subtype": "h3n2", "gene": "H3N2 HA1", "adaptive_subs_per_codon_per_year": 3.968017826307325, "lower_95ci": 2.958853820205344, "upper_95ci": 4.99468539503025, "ci": "[2.9588538202053436, 4.99468539503025]", "len_in_codons": 329, "adaptive_muts_per_year": 1.3054778648551095, "lower_95ci_mutspergene": 0.973462906847558, "upper_95ci_mutspergene": 1.6432514949649522, "legible_name": "Influenza A/H3N2", "virus_family": "orthomyxovirus", "color": "#9F2A44", "legible_rate_percodon": "3.97\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "1.31 muts per year", "xtick_pos": 1}], "data-d5821704ce5b97c541566c58a3f65a74": [{"x": 2}]}};
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
