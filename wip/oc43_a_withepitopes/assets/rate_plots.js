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
  var spec = {"config": {"view": {"continuousWidth": 400, "continuousHeight": 300, "strokeWidth": 0}, "axis": {"grid": false}, "axisX": {"labelAngle": 270, "labelFontSize": 12}, "axisY": {"labelFontSize": 12, "titleFontSize": 14, "titlePadding": 20}}, "layer": [{"data": {"name": "data-fd5d1f386329b7eee1a0b84a9f032c89"}, "mark": {"type": "point", "filled": true, "opacity": 1, "size": 200}, "encoding": {"color": {"field": "legible_name", "legend": null, "scale": {"domain": ["229E", "Measles", "NL63", "RSV-A", "RSV-B", "Influenza A/H3N2", "OC43-A", "Mumps", "Norovirus GII.4"], "range": ["#76C7BE", "#F5AD52", "#BBE4D1", "#0B194C", "#6C7593", "#9F2A44", "#208288", "#f58452", "#d0b9d2"]}, "type": "nominal"}, "tooltip": [{"field": "legible_name", "title": "Virus", "type": "nominal"}, {"field": "legible_rate_percodon", "title": "Rate", "type": "nominal"}], "x": {"axis": {"labelExpr": "datum.label == 1 ? 'Measles H' : datum.label == 2 ? 'H3N2 HA1' : datum.label == 4 ? 'Replicase1ab' : datum.label == 6 ? 'RdRp' : datum.label == 8 ? 'HE' : datum.label == 10 ? 'S1' : datum.label == 12 ? 'S2' : datum.label == 14 ? 'Membrane' : 'Nucleocapsid'", "tickCount": 9, "values": [1, 2, 4, 6, 8, 10, 12, 14, 16]}, "field": "xtick_pos", "title": "", "type": "quantitative"}, "y": {"axis": {"format": ".1f", "title": ["Adaptive Mutations", "per Codon per Year (\u00d7 10\u207b\u00b3)"]}, "field": "adaptive_subs_per_codon_per_year", "type": "quantitative"}}, "height": 250, "width": 600}, {"data": {"name": "data-fd5d1f386329b7eee1a0b84a9f032c89"}, "mark": "errorbar", "encoding": {"color": {"field": "legible_name", "legend": null, "scale": {"domain": ["229E", "Measles", "NL63", "RSV-A", "RSV-B", "Influenza A/H3N2", "OC43-A", "Mumps", "Norovirus GII.4"], "range": ["#76C7BE", "#F5AD52", "#BBE4D1", "#0B194C", "#6C7593", "#9F2A44", "#208288", "#f58452", "#d0b9d2"]}, "type": "nominal"}, "tooltip": {"value": null}, "x": {"field": "xtick_pos", "title": "", "type": "quantitative"}, "y": {"field": "lower_95ci", "title": "", "type": "quantitative"}, "y2": {"field": "upper_95ci"}}, "height": 250, "width": 600}, {"data": {"name": "data-994311638f0b9d22a99d01543c25f213"}, "mark": {"type": "rule", "strokeDash": [3, 5]}, "encoding": {"x": {"field": "x", "type": "quantitative"}}}], "data": {"name": "data-fd5d1f386329b7eee1a0b84a9f032c89"}, "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json", "datasets": {"data-fd5d1f386329b7eee1a0b84a9f032c89": [{"virus": "oc43", "subtype": "a", "virus_and_subtype": "oc43_a", "gene": "Replicase1ab", "adaptive_subs_per_codon_per_year": 0.0973618356016987, "lower_95ci": 0.0636010380657842, "upper_95ci": 0.1308346509757392, "ci": "[0.06360103806578424, 0.1308346509757392]", "len_in_codons": 7096, "adaptive_muts_per_year": 0.6908795854296541, "lower_95ci_mutspergene": 0.451312966114805, "upper_95ci_mutspergene": 0.9284026833238452, "legible_name": "OC43-A", "virus_family": "coronavirus", "color": "#208288", "legible_rate_percodon": "0.1\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.69 muts per year", "xtick_pos": 4}, {"virus": "oc43", "subtype": "a", "virus_and_subtype": "oc43_a", "gene": "RdRp", "adaptive_subs_per_codon_per_year": 0.0368813805325201, "lower_95ci": 0.0, "upper_95ci": 0.1475255221300805, "ci": "[0.0, 0.14752552213008055]", "len_in_codons": 928, "adaptive_muts_per_year": 0.0342259211341786, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.1369036845367147, "legible_name": "OC43-A", "virus_family": "coronavirus", "color": "#208288", "legible_rate_percodon": "0.04\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.03 muts per year", "xtick_pos": 6}, {"virus": "oc43", "subtype": "a", "virus_and_subtype": "oc43_a", "gene": "HE", "adaptive_subs_per_codon_per_year": 0.3852817043550076, "lower_95ci": 0.0492767267147148, "upper_95ci": 0.9146043379334894, "ci": "[0.04927672671471483, 0.9146043379334894]", "len_in_codons": 425, "adaptive_muts_per_year": 0.1637447243508782, "lower_95ci_mutspergene": 0.0209426088537538, "upper_95ci_mutspergene": 0.388706843621733, "legible_name": "OC43-A", "virus_family": "coronavirus", "color": "#208288", "legible_rate_percodon": "0.39\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.16 muts per year", "xtick_pos": 8}, {"virus": "oc43", "subtype": "a", "virus_and_subtype": "oc43_a", "gene": "S1", "adaptive_subs_per_codon_per_year": 1.866573224980902, "lower_95ci": 1.0689984441339817, "upper_95ci": 2.828605874053624, "ci": "[1.0689984441339815, 2.828605874053624]", "len_in_codons": 753, "adaptive_muts_per_year": 1.405529638410619, "lower_95ci_mutspergene": 0.804955828432888, "upper_95ci_mutspergene": 2.129940223162379, "legible_name": "OC43-A", "virus_family": "coronavirus", "color": "#208288", "legible_rate_percodon": "1.87\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "1.41 muts per year", "xtick_pos": 10}, {"virus": "oc43", "subtype": "a", "virus_and_subtype": "oc43_a", "gene": "S2", "adaptive_subs_per_codon_per_year": 0.0767443423847023, "lower_95ci": 0.0, "upper_95ci": 0.2784110703723426, "ci": "[0.0, 0.27841107037234264]", "len_in_codons": 596, "adaptive_muts_per_year": 0.0457396280612825, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.1659329979419162, "legible_name": "OC43-A", "virus_family": "coronavirus", "color": "#208288", "legible_rate_percodon": "0.08\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.05 muts per year", "xtick_pos": 12}, {"virus": "oc43", "subtype": "a", "virus_and_subtype": "oc43_a", "gene": "Membrane", "adaptive_subs_per_codon_per_year": 0.7597644683717578, "lower_95ci": 0.2351417940433607, "upper_95ci": 1.6628544886275791, "ci": "[0.23514179404336072, 1.6628544886275791]", "len_in_codons": 231, "adaptive_muts_per_year": 0.175505592193876, "lower_95ci_mutspergene": 0.0543177544240163, "upper_95ci_mutspergene": 0.3841193868729707, "legible_name": "OC43-A", "virus_family": "coronavirus", "color": "#208288", "legible_rate_percodon": "0.76\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.18 muts per year", "xtick_pos": 14}, {"virus": "oc43", "subtype": "a", "virus_and_subtype": "oc43_a", "gene": "Nucleocapsid", "adaptive_subs_per_codon_per_year": 0.575761337447231, "lower_95ci": 0.1186086428029721, "upper_95ci": 1.153636151959184, "ci": "[0.11860864280297215, 1.153636151959184]", "len_in_codons": 449, "adaptive_muts_per_year": 0.2585168405138067, "lower_95ci_mutspergene": 0.0532552806185344, "upper_95ci_mutspergene": 0.5179826322296737, "legible_name": "OC43-A", "virus_family": "coronavirus", "color": "#208288", "legible_rate_percodon": "0.58\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.26 muts per year", "xtick_pos": 16}, {"virus": "measles", "subtype": "", "virus_and_subtype": "measles", "gene": "Measles H", "adaptive_subs_per_codon_per_year": 0.1488760781105891, "lower_95ci": 0.0, "upper_95ci": 0.464536965766201, "ci": "[0.0, 0.46453696576620107]", "len_in_codons": 618, "adaptive_muts_per_year": 0.0920054162723441, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.2870838448435123, "legible_name": "Measles", "virus_family": "paramyxovirus", "color": "#F5AD52", "legible_rate_percodon": "0.15\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.09 muts per year", "xtick_pos": 1}, {"virus": "h3n2", "subtype": "", "virus_and_subtype": "h3n2", "gene": "H3N2 HA1", "adaptive_subs_per_codon_per_year": 3.968017826307325, "lower_95ci": 2.958853820205344, "upper_95ci": 4.99468539503025, "ci": "[2.9588538202053436, 4.99468539503025]", "len_in_codons": 329, "adaptive_muts_per_year": 1.3054778648551095, "lower_95ci_mutspergene": 0.973462906847558, "upper_95ci_mutspergene": 1.6432514949649522, "legible_name": "Influenza A/H3N2", "virus_family": "orthomyxovirus", "color": "#9F2A44", "legible_rate_percodon": "3.97\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "1.31 muts per year", "xtick_pos": 2}], "data-994311638f0b9d22a99d01543c25f213": [{"x": 3}]}};
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
  var spec = {"config": {"view": {"continuousWidth": 400, "continuousHeight": 300, "strokeWidth": 0}, "axis": {"grid": false}, "axisX": {"labelAngle": 270, "labelFontSize": 12}, "axisY": {"labelFontSize": 12, "titleFontSize": 14, "titlePadding": 20}}, "layer": [{"data": {"name": "data-fd5d1f386329b7eee1a0b84a9f032c89"}, "mark": {"type": "point", "filled": true, "opacity": 1, "size": 200}, "encoding": {"color": {"field": "legible_name", "legend": null, "scale": {"domain": ["229E", "Measles", "NL63", "RSV-A", "RSV-B", "Influenza A/H3N2", "OC43-A", "Mumps", "Norovirus GII.4"], "range": ["#76C7BE", "#F5AD52", "#BBE4D1", "#0B194C", "#6C7593", "#9F2A44", "#208288", "#f58452", "#d0b9d2"]}, "type": "nominal"}, "tooltip": [{"field": "legible_name", "title": "Virus", "type": "nominal"}, {"field": "legible_rate_percodon", "title": "Rate", "type": "nominal"}], "x": {"axis": {"labelExpr": "datum.label == 1 ? 'Measles H' : datum.label == 2 ? 'H3N2 HA1' : datum.label == 4 ? 'Replicase1ab' : datum.label == 6 ? 'RdRp' : datum.label == 8 ? 'HE' : datum.label == 10 ? 'S1' : datum.label == 12 ? 'S2' : datum.label == 14 ? 'Membrane' : 'Nucleocapsid'", "tickCount": 9, "values": [1, 2, 4, 6, 8, 10, 12, 14, 16]}, "field": "xtick_pos", "title": "", "type": "quantitative"}, "y": {"axis": {"format": ".1f", "title": ["Adaptive Mutations", "per Year"]}, "field": "adaptive_muts_per_year", "type": "quantitative"}}, "height": 250, "width": 600}, {"data": {"name": "data-fd5d1f386329b7eee1a0b84a9f032c89"}, "mark": "errorbar", "encoding": {"color": {"field": "legible_name", "legend": null, "scale": {"domain": ["229E", "Measles", "NL63", "RSV-A", "RSV-B", "Influenza A/H3N2", "OC43-A", "Mumps", "Norovirus GII.4"], "range": ["#76C7BE", "#F5AD52", "#BBE4D1", "#0B194C", "#6C7593", "#9F2A44", "#208288", "#f58452", "#d0b9d2"]}, "type": "nominal"}, "tooltip": {"value": null}, "x": {"field": "xtick_pos", "title": "", "type": "quantitative"}, "y": {"field": "lower_95ci_mutspergene", "title": "", "type": "quantitative"}, "y2": {"field": "upper_95ci_mutspergene"}}, "height": 250, "width": 600}, {"data": {"name": "data-994311638f0b9d22a99d01543c25f213"}, "mark": {"type": "rule", "strokeDash": [3, 5]}, "encoding": {"x": {"field": "x", "type": "quantitative"}}}], "data": {"name": "data-fd5d1f386329b7eee1a0b84a9f032c89"}, "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json", "datasets": {"data-fd5d1f386329b7eee1a0b84a9f032c89": [{"virus": "oc43", "subtype": "a", "virus_and_subtype": "oc43_a", "gene": "Replicase1ab", "adaptive_subs_per_codon_per_year": 0.0973618356016987, "lower_95ci": 0.0636010380657842, "upper_95ci": 0.1308346509757392, "ci": "[0.06360103806578424, 0.1308346509757392]", "len_in_codons": 7096, "adaptive_muts_per_year": 0.6908795854296541, "lower_95ci_mutspergene": 0.451312966114805, "upper_95ci_mutspergene": 0.9284026833238452, "legible_name": "OC43-A", "virus_family": "coronavirus", "color": "#208288", "legible_rate_percodon": "0.1\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.69 muts per year", "xtick_pos": 4}, {"virus": "oc43", "subtype": "a", "virus_and_subtype": "oc43_a", "gene": "RdRp", "adaptive_subs_per_codon_per_year": 0.0368813805325201, "lower_95ci": 0.0, "upper_95ci": 0.1475255221300805, "ci": "[0.0, 0.14752552213008055]", "len_in_codons": 928, "adaptive_muts_per_year": 0.0342259211341786, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.1369036845367147, "legible_name": "OC43-A", "virus_family": "coronavirus", "color": "#208288", "legible_rate_percodon": "0.04\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.03 muts per year", "xtick_pos": 6}, {"virus": "oc43", "subtype": "a", "virus_and_subtype": "oc43_a", "gene": "HE", "adaptive_subs_per_codon_per_year": 0.3852817043550076, "lower_95ci": 0.0492767267147148, "upper_95ci": 0.9146043379334894, "ci": "[0.04927672671471483, 0.9146043379334894]", "len_in_codons": 425, "adaptive_muts_per_year": 0.1637447243508782, "lower_95ci_mutspergene": 0.0209426088537538, "upper_95ci_mutspergene": 0.388706843621733, "legible_name": "OC43-A", "virus_family": "coronavirus", "color": "#208288", "legible_rate_percodon": "0.39\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.16 muts per year", "xtick_pos": 8}, {"virus": "oc43", "subtype": "a", "virus_and_subtype": "oc43_a", "gene": "S1", "adaptive_subs_per_codon_per_year": 1.866573224980902, "lower_95ci": 1.0689984441339817, "upper_95ci": 2.828605874053624, "ci": "[1.0689984441339815, 2.828605874053624]", "len_in_codons": 753, "adaptive_muts_per_year": 1.405529638410619, "lower_95ci_mutspergene": 0.804955828432888, "upper_95ci_mutspergene": 2.129940223162379, "legible_name": "OC43-A", "virus_family": "coronavirus", "color": "#208288", "legible_rate_percodon": "1.87\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "1.41 muts per year", "xtick_pos": 10}, {"virus": "oc43", "subtype": "a", "virus_and_subtype": "oc43_a", "gene": "S2", "adaptive_subs_per_codon_per_year": 0.0767443423847023, "lower_95ci": 0.0, "upper_95ci": 0.2784110703723426, "ci": "[0.0, 0.27841107037234264]", "len_in_codons": 596, "adaptive_muts_per_year": 0.0457396280612825, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.1659329979419162, "legible_name": "OC43-A", "virus_family": "coronavirus", "color": "#208288", "legible_rate_percodon": "0.08\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.05 muts per year", "xtick_pos": 12}, {"virus": "oc43", "subtype": "a", "virus_and_subtype": "oc43_a", "gene": "Membrane", "adaptive_subs_per_codon_per_year": 0.7597644683717578, "lower_95ci": 0.2351417940433607, "upper_95ci": 1.6628544886275791, "ci": "[0.23514179404336072, 1.6628544886275791]", "len_in_codons": 231, "adaptive_muts_per_year": 0.175505592193876, "lower_95ci_mutspergene": 0.0543177544240163, "upper_95ci_mutspergene": 0.3841193868729707, "legible_name": "OC43-A", "virus_family": "coronavirus", "color": "#208288", "legible_rate_percodon": "0.76\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.18 muts per year", "xtick_pos": 14}, {"virus": "oc43", "subtype": "a", "virus_and_subtype": "oc43_a", "gene": "Nucleocapsid", "adaptive_subs_per_codon_per_year": 0.575761337447231, "lower_95ci": 0.1186086428029721, "upper_95ci": 1.153636151959184, "ci": "[0.11860864280297215, 1.153636151959184]", "len_in_codons": 449, "adaptive_muts_per_year": 0.2585168405138067, "lower_95ci_mutspergene": 0.0532552806185344, "upper_95ci_mutspergene": 0.5179826322296737, "legible_name": "OC43-A", "virus_family": "coronavirus", "color": "#208288", "legible_rate_percodon": "0.58\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.26 muts per year", "xtick_pos": 16}, {"virus": "measles", "subtype": "", "virus_and_subtype": "measles", "gene": "Measles H", "adaptive_subs_per_codon_per_year": 0.1488760781105891, "lower_95ci": 0.0, "upper_95ci": 0.464536965766201, "ci": "[0.0, 0.46453696576620107]", "len_in_codons": 618, "adaptive_muts_per_year": 0.0920054162723441, "lower_95ci_mutspergene": 0.0, "upper_95ci_mutspergene": 0.2870838448435123, "legible_name": "Measles", "virus_family": "paramyxovirus", "color": "#F5AD52", "legible_rate_percodon": "0.15\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "0.09 muts per year", "xtick_pos": 1}, {"virus": "h3n2", "subtype": "", "virus_and_subtype": "h3n2", "gene": "H3N2 HA1", "adaptive_subs_per_codon_per_year": 3.968017826307325, "lower_95ci": 2.958853820205344, "upper_95ci": 4.99468539503025, "ci": "[2.9588538202053436, 4.99468539503025]", "len_in_codons": 329, "adaptive_muts_per_year": 1.3054778648551095, "lower_95ci_mutspergene": 0.973462906847558, "upper_95ci_mutspergene": 1.6432514949649522, "legible_name": "Influenza A/H3N2", "virus_family": "orthomyxovirus", "color": "#9F2A44", "legible_rate_percodon": "3.97\u00d710\u207b\u00b3 muts per codon per year", "legible_rate_pergene": "1.31 muts per year", "xtick_pos": 2}], "data-994311638f0b9d22a99d01543c25f213": [{"x": 3}]}};
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