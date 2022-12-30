let virusOrdering = 'By Viral Family';
runAll();

d3.selectAll(("input[name='ordering']")).on("change", function(){
  virusOrdering = this.value;
  runAll();
});


function runAll(){
  // get the receptor-binding rates of adaptation
  let receptorBindingDF
  async function fetchData() {
    receptorBindingDF = await d3.csv("https://raw.githubusercontent.com/blab/atlas-of-viral-adaptation/main/testing_d3/assets/receptor_binding_for_d3.csv");
    polymeraseDF = await d3.csv("https://raw.githubusercontent.com/blab/atlas-of-viral-adaptation/main/testing_d3/assets/polymerase_for_d3.csv");
    makeRateComparisonPlot(); // only call this function when data is available!

  }
  fetchData();


  // viewof virusOrdering = Inputs.radio(['By Viral Family', 'By Rate'], {label: "Order of viruses", value: "By Viral Family"})
  // let virusOrdering = 'By Rate';
  // let virusOrdering = 'By Viral Family'; // hardcode options for testing
  // viewof yAxisUnits = Inputs.radio(['Mutations per Codon per Year', 'Mutations per Year'], {label: "Y-axis units", value:"Mutations per Codon per Year"})
  let yAxisUnits = 'Mutations per Codon per Year';
  // viewof virusesToPlot = Inputs.checkbox(defaultVirusOrder, {value: defaultVirusOrder, label: "Viruses to Plot"})
  let virusesToPlot = ['Influenza A/H3N2', 'Influenza A/H1N1pdm', 'Influenza B/Vic', 'Influenza B/Yam', 'Influenza C/Yamagata', 'Measles', 'Mumps', 'Parainfluenza-1', 'Parainfluenza-3', 'RSV-A', 'RSV-B', 'OC43-A', '229E', 'NL63', 'Dengue 1-I', 'Dengue 2-AA', 'Dengue 3-III', 'Dengue 4-II', 'Rotavirus A/P[8]', 'Rotavirus A/P[4]', 'Norovirus GII.4', 'Enterovirus D68', 'Hepatitis A-IA', 'Hepatitis B-D3', 'Hepatitis B-A2', 'Adenovirus B-3', 'Adenovirus B-7', 'Parvovirus B19-1A'];

  // plot size attributes
  let height = 400;
  let width = 900;
  let margin = ({top: 30, right: 30, bottom: 120, left: 60});
  let marginPolymerase = ({top: 30, right: 30, bottom: 20, left: 60});

  // virus attributes
  let allRNAEnveloped = ['Influenza A/H3N2', 'Influenza A/H1N1pdm', 'Influenza B/Vic', 'Influenza B/Yam', 'Influenza C/Yamagata', 'Measles', 'Mumps', 'Parainfluenza-1', 'Parainfluenza-3', 'RSV-A', 'RSV-B', 'OC43-A', '229E', 'NL63', 'Dengue 1-I', 'Dengue 2-AA', 'Dengue 3-III', 'Dengue 4-II'];
  let allRNANonenveloped = ['Rotavirus A/P[8]', 'Rotavirus A/P[4]', 'Norovirus GII.4', 'Enterovirus D68', 'Hepatitis A-IA'];
  let allDNAEnveloped = ['Hepatitis B-D3', 'Hepatitis B-A2'];

  // add a column that specifies the virus-specific atlas page
  let mapToUrl = {'Measles': 'measles', 'Mumps':'mumps', 'Parainfluenza-1':'parainfluenza_1', 'Parainfluenza-3':'parainfluenza_3','Influenza A/H3N2':'h3n2', 'Influenza A/H1N1pdm': 'h1n1pdm', 'Influenza B/Vic': 'vic', 'Influenza B/Yam': 'yam', 'Influenza C/Yamagata': 'influenzaC_yamagata', 'OC43-A': 'oc43_a', 'OC43-B': 'oc43_b', '229E': '229e', 'NL63':'nl63', 'Lassa-A':'lassa_a', 'Lassa-B':'lassa_b', 'RSV-A':'rsv_a', 'RSV-B':'rsv_b', 'HepatitisC-1a1':'hepC_1a1', 'HepatitisC-1a2':'hepC_1a2', 'HepatitisC-1b':'hepC_1b', 'HepatitisC-3a':'hepC_3a', 'Dengue 1-I':'denv1_i', 'Dengue 1-III':'denv1_iii', 'Dengue 1-IV':'denv1_iv', 'Dengue 1-V':'denv1_v', 'Dengue 2-AA':'denv2_aa', 'Dengue 2-AI':'denv2_ai', 'Dengue 2-AM':'denv1_am', 'Dengue 2-C':'denv2_c', 'Dengue 3-I':'denv3_i', 'Dengue 3-II':'denv3_ii', 'Dengue 3-III':'denv3_iii', 'Dengue 4-I':'denv4_i', 'Dengue 4-II':'denv4_ii', 'Rotavirus A/P[8]':'rotavirusA_g1p8', 'Rotavirus A/P[4]':'rotavirusA_g1p4', 'Enterovirus D68': 'enterovirusd68', 'Hepatitis A-IA': 'hepatitisA_IA','Norovirus GII.4': 'norovirus_gii4', 'Parvovirus B19-1A':'parvovirusB19', 'Adenovirus B-7':'adenovirusB7', 'Adenovirus B-3':'adenovirusB3', 'Hepatitis B-A2':'hepatitisB_A2', 'Hepatitis B-D3':'hepatitisB_D3'};


  // get the proper dataframe columns/keys to plot based on user input
  let yUnit = '';
  let yUpperCI = '';
  let yLowerCI = '';
  let yLabelRate = '';
  let yUnitEnding = '';
  if (yAxisUnits === 'Mutations per Codon per Year'){
      yUnit = 'adaptive_subs_per_codon_per_year';
      yUpperCI = 'upper_95ci';
      yLowerCI = 'lower_95ci';
      yLabelRate = 'Adaptive Mutations per Codon per Year (x 10⁻³)';
      yUnitEnding = ' x 10⁻³ muts per codon per year'}

  else if (yAxisUnits === 'Mutations per Year'){
      yUnit = 'adaptive_muts_per_year';
      yUpperCI = 'upper_95ci_mutspergene';
      yLowerCI = 'lower_95ci_mutspergene';
      yLabelRate = 'Adaptive Mutations per Year';
      yUnitEnding = 'muts per year'}

  let yUnitNames ={'yUnit':yUnit, 'yUpperCI':yUpperCI, 'yLowerCI':yLowerCI, 'yLabelRate':yLabelRate, 'yUnitEnding':yUnitEnding}



  // make plot comparing rates of adaptation in receptor-binding protein/subunit
  async function makeRateComparisonPlot() {

    // default is to order by viral family, genome type
    let defaultVirusOrder = ['Influenza A/H3N2', 'Influenza A/H1N1pdm', 'Influenza B/Vic', 'Influenza B/Yam', 'Influenza C/Yamagata', 'Measles', 'Mumps', 'Parainfluenza-1', 'Parainfluenza-3', 'RSV-A', 'RSV-B', 'OC43-A', '229E', 'NL63', 'Dengue 1-I', 'Dengue 2-AA', 'Dengue 3-III', 'Dengue 4-II', 'Rotavirus A/P[8]', 'Rotavirus A/P[4]', 'Norovirus GII.4', 'Enterovirus D68', 'Hepatitis A-IA', 'Hepatitis B-D3', 'Hepatitis B-A2', 'Adenovirus B-3', 'Adenovirus B-7', 'Parvovirus B19-1A'];

    // alternatively, order the viruses by rate of adaptation
    let orderedDF = receptorBindingDF.sort((a, b) => b[yUnitNames['yUnit']] - a[yUnitNames['yUnit']]);
    let byRateOrder = [];
    for (let i=0; i<orderedDF.length; i++){byRateOrder.push(orderedDF[i]['legible_name'])}


    // get virus order depending on user input, should be able to organize viruses by virus family, or according to rate of adaptation
    let virusOrder = []
    if (virusOrdering=== 'By Viral Family'){
       virusOrder = defaultVirusOrder}
    else if (virusOrdering=== 'By Rate'){
       virusOrder = byRateOrder};
    // filter to only the selected viruses
    virusOrder = virusOrder.filter(x => virusesToPlot.includes(x));

    //get last virus in each grouping
    let temp = allRNAEnveloped.filter(x => virusesToPlot.includes(x));
    let lastRNAEnveloped = temp[temp.length -1];
    let temp2 = allRNANonenveloped.filter(x => virusesToPlot.includes(x));
    let lastRNAVirus = temp2[temp2.length -1];
    let temp3 = allDNAEnveloped.filter(x => virusesToPlot.includes(x));
    let lastDNAEnveloped = temp3[temp3.length -1];

    // make mapper from virus name to X Tick position
    let xPosMapper = {};
    let xTickCounter = 1;
    if (virusOrdering === 'By Viral Family'){
        for (let i=0; i < virusOrder.length; i++){
          xPosMapper[virusOrder[i]] = {'xTickPos':xTickCounter};
          if (virusOrder[i]===lastRNAEnveloped){
            xTickCounter+=1.5}
          else if (virusOrder[i]===lastRNAVirus){
            xTickCounter+=2.0}
          else if (virusOrder[i]===lastDNAEnveloped){
            xTickCounter+=1.5}
          else {xTickCounter+=1.0}
          }
        }
    else if (virusOrdering === 'By Rate'){
      // let virusOrder = byRateOrder;
      for (let i=0; i < virusOrder.length; i++){
        xPosMapper[virusOrder[i]] = {'xTickPos':xTickCounter};
        xTickCounter+=1.0
      }
    };

    // add x-position to the rb dataframe
    for (let i=0; i < receptorBindingDF.length; i++){
      let name = receptorBindingDF[i]['legible_name'];
      if (virusOrder.includes(name)){
        receptorBindingDF[i]['xPos'] = xPosMapper[name]['xTickPos']}
      else {receptorBindingDF[i]['xPos']= 'dont_plot'}
    };

    // add x-position to polymerase df
    for (let i=0; i < polymeraseDF.length; i++){
        let name = polymeraseDF[i]['legible_name'];
        if (virusOrder.includes(name)){
          polymeraseDF[i]['xPos'] = xPosMapper[name]['xTickPos']}
        else {polymeraseDF[i]['xPos']= 'dont_plot'}
      };

    // filter data down to just the viruses that should be plotted
    let receptorBindingData = receptorBindingDF.filter((item) => virusesToPlot.includes(item.legible_name));
    let polymeraseData = polymeraseDF.filter((item) => virusesToPlot.includes(item.legible_name));
    console.log(polymeraseData)

    // height of polymerase plot
    let heightPolymerase = (height-margin.top-margin.bottom) * (d3.max(polymeraseData, d => d[yUnitNames['yUpperCI']])- d3.min(polymeraseData, d => d[yUnitNames['yLowerCI']]))/(d3.max(receptorBindingData, d => d[yUnitNames['yUpperCI']])-d3.min(receptorBindingData, d => d[yUnitNames['yLowerCI']])) + marginPolymerase.bottom + marginPolymerase.top;

    // get position of x xTickPos
    let xTicks = new Float64Array(receptorBindingData.map(d => d.xPos)).sort();

    // get divider positions
    let vertDividerRNAEnv = 0.0;
    for (let i=0; i < receptorBindingData.length; i++){
        if (receptorBindingData[i]['legible_name']===lastRNAEnveloped){
          vertDividerRNAEnv = receptorBindingData[i]['xPos']+0.75}
        };

    let vertDividerRNADNA = 0.0;
    for (let i=0; i < receptorBindingData.length; i++){
        if (receptorBindingData[i]['legible_name']===lastRNAVirus){
          vertDividerRNADNA = receptorBindingData[i]['xPos']+1.0}
        };

    let vertDividerDNAEnv = 0.0;
    for (let i=0; i < receptorBindingData.length; i++){
      if (receptorBindingData[i]['legible_name']===lastDNAEnveloped){
        vertDividerDNAEnv = receptorBindingData[i]['xPos']+0.75}
      };

    // position of all vertical dividers that will be plotted
    let yMaxTall = d3.max(receptorBindingData, d => d[yUnitNames['yUpperCI']])*0.98;
    let yMaxShort = d3.max(receptorBindingData, d => d[yUnitNames['yUpperCI']])*0.8;
    let dividerMapper=[];
     if (vertDividerRNAEnv!==0){
       dividerMapper.push({"text_left": "enveloped", "text_right": 'non-enveloped',
      "xPos":vertDividerRNAEnv, "yMax": yMaxShort, "fontSize": 10})};
     if (vertDividerRNADNA!==0){
       dividerMapper.push({"text_left": "RNA", "text_right": 'DNA',
      "xPos":vertDividerRNADNA, "yMax": yMaxTall, "fontSize": 14})};
     if (vertDividerDNAEnv!==0){
       dividerMapper.push({"text_left": "enveloped", "text_right": 'non-enveloped',
      "xPos":vertDividerDNAEnv, "yMax": yMaxShort, "fontSize": 10})};


    // get colors to plot viruses with
    let colors = d3.scaleOrdinal().domain(receptorBindingData.map(d => d.legible_name))
      .range(receptorBindingData.map(d => d.color));
    let colorsPolymerase = d3.scaleOrdinal().domain(polymeraseData.map(d => d.legible_name))
      .range(polymeraseData.map(d => d.color));

    // make y scale to map rates of adaptation onto the y axis
    let y = d3.scaleLinear()
        .domain([d3.min(receptorBindingData, d => d[yUnitNames['yLowerCI']]),
                 d3.max(receptorBindingData, d => d[yUnitNames['yUpperCI']])])
        .range([height - margin.bottom, margin.top]);

    let yPolymerase = d3.scaleLinear()
        .domain([d3.min(polymeraseData, d => d[yUnitNames['yLowerCI']]),
             d3.max(polymeraseData, d => d[yUnitNames['yUpperCI']])])
        .range([heightPolymerase - marginPolymerase.bottom, marginPolymerase.top]);

    // make x scale linear (even though categorical variable is being plotted), so that I can control space between points
    let x = d3.scaleLinear()
          .domain([0,d3.max(xTicks)])
          .range([margin.left, width - margin.right]);

    // make X- and Y- axes to map plotting units onto units of pixels
    // make y-axis, translating pixel units to the scale of y axis
    let yAxis = g => g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y).ticks(Math.round(d3.max(receptorBindingData, d => d[yUnitNames['yUpperCI']]))).tickSizeOuter(0));

    let yAxisPolymerase = g => g
        .attr("transform", `translate(${marginPolymerase.left},0)`)
        .call(d3.axisLeft(yPolymerase).ticks(Math.round(d3.max(polymeraseData, d => d[yUnitNames['yUpperCI']]))).tickSizeOuter(0));

    let xAxis = g => g
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickSizeOuter(0).tickValues(xTicks).tickFormat((d,i) => virusOrder[i]));

    let xAxisPolymerase = g => g
        .attr("transform", `translate(0,${heightPolymerase - marginPolymerase.bottom})`)
        .call(d3.axisBottom(x).tickSizeOuter(0).tickValues(xTicks).tickFormat((d,i) => virusOrder[i]));

    let chartPolymerase = function(){
      const svg = d3.select("#plot")
          .append("svg")
          .attr("viewBox", [0, 0, width, heightPolymerase]);

      svg.append("g")
          .call(yAxisPolymerase);

      //Add protein label
      svg.append("text")
          .attr("font-size", 16)
          .attr("text-anchor", "start")
          .attr("font-family", "sans-serif")
          .attr("fill", "#808080")
          .attr("font-weight", "bold")
          .attr("x", marginPolymerase.left)
          .attr("y", (marginPolymerase.top/2))
          .text("Polymerase");


      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + heightPolymerase + ")")
          .call(xAxisPolymerase)
        .selectAll("text")
          .remove();

      const g = svg.append("g")
          .attr("text-anchor", "end")
          .attr("font-family", "sans-serif")
          .attr("font-size", 10)
        .selectAll();

      // Add vertical dividers between virus types
      if (virusOrdering === "By Viral Family")
        {let textOffsetLine1 = {'Mutations per Codon per Year':0.2, 'Mutations per Year':0.08};
         let textOffsetLine2 = {'Mutations per Codon per Year':0.5, 'Mutations per Year':0.2};
          g.data(dividerMapper)
          .enter()
          .append("line")
          .style("stroke-width", 1)
          .style("stroke", "#9a9a9a")
          .style("stroke-dasharray", ("3, 3"))
          .attr("x1", d => x(d.xPos))
          .attr("x2", d => x(d.xPos))
          .attr("y1", d => yPolymerase(0.0))
          .attr("y2", d => yPolymerase(0.9));}

      // Add error viruses for each virus
      g.data(polymeraseData)
        .enter()
        .append("line")
        .style("stroke-width", 1)
        .style("stroke", function(d){return colorsPolymerase(d)})
        .attr("x1", d => x(d.xPos))
        .attr("x2", d => x(d.xPos))
        .attr("y1", d => yPolymerase(d[yUnitNames['yLowerCI']]))
        .attr("y2", d => yPolymerase(d[yUnitNames['yUpperCI']]));


      // Add point per virus
      g.data(polymeraseData)
        .enter()
        .append("circle")
          .attr("cx", d => x(d.xPos))
          .attr("cy", d => yPolymerase(d[yUnitNames['yUnit']]))
          .attr("fill", function(d){return colorsPolymerase(d)})
          .attr("r", 7)
          .on("click", function(event, d){window.open("https://blab.github.io/atlas-of-viral-adaptation/" +mapToUrl[d.legible_name], '_blank')});


      return svg.node();
    }

    // make receptor-binding comparison plot
    let chart = function (){
      const svg = d3.select("#plot")
        .append("svg")
        .attr("viewBox", [0, 0, width, height]);

      svg.append("g")
          .call(yAxis);

      //Add protein label
      svg.append("text")
          .attr("font-size", 16)
          .attr("text-anchor", "start")
          .attr("font-family", "sans-serif")
          .attr("fill", "#808080")
          .attr("font-weight", "bold")
          .attr("x", margin.left)
          .attr("y", (margin.top/2))
          .text("Receptor-Binding");

      //Add y-axis label
      svg.append("text")
          .attr("font-size", 14)
          .attr("transform", "rotate(-90)")
          .attr("text-anchor", "middle")
          .attr("font-family", "sans-serif")
          .attr("fill", "black")
          .attr("x", -((height-margin.bottom-margin.top)/2))
          .attr("y", (margin.left/2 -10))
          .text("Rate of Adaptation");

      //Add y-axis units
      svg.append("text")
          .attr("font-size", 9)
          .attr("transform", "rotate(-90)")
          .attr("text-anchor", "middle")
          .attr("font-family", "sans-serif")
          .attr("fill", "black")
          .attr("x", -((height-margin.bottom-margin.top)/2))
          .attr("y", margin.left/2 + 5)
          .text(yUnitNames['yLabelRate']);

      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis)
        .selectAll("text")
          .attr("y", 0)
          .attr("x", -9)
          .attr("dy", ".35em")
          .attr("transform", "rotate(270)")
          .style("text-anchor", "end");

      const g = svg.append("g")
          .attr("text-anchor", "end")
          .attr("font-family", "sans-serif")
          .attr("font-size", 10)
        .selectAll();

      // Add vertical dividers between virus types
      if (virusOrdering === "By Viral Family")
        {let textOffsetLine1 = {'Mutations per Codon per Year':0.2, 'Mutations per Year':0.08};
         let textOffsetLine2 = {'Mutations per Codon per Year':0.5, 'Mutations per Year':0.2};
          g.data(dividerMapper)
          .enter()
          .append("line")
          .style("stroke-width", 1)
          .style("stroke", "#9a9a9a")
          .style("stroke-dasharray", ("3, 3"))
          .attr("x1", d => x(d.xPos))
          .attr("x2", d => x(d.xPos))
          .attr("y1", d => y(0.0))
          .attr("y2", d => y(d.yMax));

        //Add text next to dividers, left
        g.data(dividerMapper)
          .enter()
          .append("text")
            .style("font-size", d => d.fontSize)
            .style("fill", "#9a9a9a")
            .attr("text-anchor", "end")
            .attr("x", d => x(d.xPos - 0.2))
            .attr("y", d => y(d.yMax - textOffsetLine1[yAxisUnits]))
            .text(d => d.text_left);

        // Add second line of text
        g.data(dividerMapper)
          .enter()
          .append("text")
            .style("font-size", d => d.fontSize)
            .style("fill", "#9a9a9a")
            .attr("text-anchor", "end")
            .attr("x", d => x(d.xPos - 0.2))
            .attr("y", d => y(d.yMax - textOffsetLine2[yAxisUnits]))
            .text("viruses");

        //Add text next to dividers, right
        g.data(dividerMapper)
          .enter()
          .append("text")
            .style("font-size", d => d.fontSize)
            .style("fill", "#9a9a9a")
            .attr("text-anchor", "start")
            .attr("x", d => x(d.xPos + 0.2))
            .attr("y", d => y(d.yMax - textOffsetLine1[yAxisUnits]))
            .text(d => d.text_right);

        //Add second line of text
        g.data(dividerMapper)
          .enter()
          .append("text")
            .style("font-size", d => d.fontSize)
            .style("fill", "#9a9a9a")
            .attr("text-anchor", "start")
            .attr("x", d => x(d.xPos + 0.2))
            .attr("y", d => y(d.yMax - textOffsetLine2[yAxisUnits]))
            .text("viruses");}

      // Add error viruses for each virus
      g.data(receptorBindingData)
        .enter()
        .append("line")
        .style("stroke-width", 1)
        .style("stroke", function(d){return colors(d)})
        .attr("x1", d => x(d.xPos))
        .attr("x2", d => x(d.xPos))
        .attr("y1", d => y(d[yUnitNames['yLowerCI']]))
        .attr("y2", d => y(d[yUnitNames['yUpperCI']]));


      // Add point per virus
      g.data(receptorBindingData)
        .enter()
        .append("circle")
          .attr("cx", d => x(d.xPos))
          .attr("cy", d => y(d[yUnitNames['yUnit']]))
          .attr("fill", function(d){return colors(d)})
          .attr("r", 7)
          .on("click", function(event, d){window.open("https://blab.github.io/atlas-of-viral-adaptation/" +mapToUrl[d.legible_name], '_blank')});

      return svg.node();}

    // chart();



    //make tooltip to show information about the virus when it is hovered over
    let tooltip = function (){
      chartPolymerase();
      chart();

      const tooltip = d3
        .select("body")
        .append("tooltipDiv")
        .attr("class", "svg-tooltip")
        .style("position", "absolute")
        .style("visibility", "hidden");


      // select all circles
      d3.selectAll("circle")
        .on("mouseover", function(event, d) {
          // change the selection style- enlarge the circle that is hovered over
          d3.select(this)
            .attr("r", 10);

          // make the tooltip visible and update its text
          tooltip
            .style("visibility", "visible")
            .html("<span style='color: #808080;'> Virus: </span>" + d.legible_name + "\n<span style='color: #808080;'> Family: </span>" + d.virus_family + "\n<span style='color: #808080;'> Transmission: </span>" + d.transmission + "\n<span style='color: #808080;'> Genome Type: </span>" + d.genome_type + "\n<span style='color: #808080;'> Enveloped: </span>" + d.enveloped + "\n<span style='color: #808080;'> Protein/subunit: </span>" + d.legible_gene_name + "\n<span style='color: #808080;'> Rate: </span>" + parseFloat(d[yUnitNames['yUnit']]).toFixed(2)+yUnitNames['yUnitEnding'])
        })
        .on("mousemove", function(event) {
          tooltip
            .style("top", event.clientY < height / 2 ? `${event.clientY + 300}px` : "initial")
            .style("bottom", event.clientY > height / 2 ? `${height - event.clientY + 350}px` : "initial")
            .style("left", event.clientX < window.innerWidth / 2 ? `${event.clientX + window.innerWidth*0.03}px` : "initial")
            .style("right", event.clientX > window.innerWidth / 2 ? `${window.innerWidth - event.clientX + window.innerWidth*0.015}px`: "initial");
        })
        .on("mouseout", function() {
          // change the selection style- return the circle to normal size
          d3.select(this)
            .attr("r", 7);

          tooltip.style("visibility", "hidden");
        });
    }

  tooltip();
  }
}
