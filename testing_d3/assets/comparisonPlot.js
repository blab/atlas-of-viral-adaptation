// const receptorBindingDF = d3.csv("https://github.com/blab/atlas-of-viral-adaptation/blob/main/testing_d3/assets/receptor_binding_for_d3.csv")
// function testing(d) {return console.log(receptorBindingDF)}

<script type="text/javascript">
// sent a GET request to retrieve the CSV file contents
$.get( "https://github.com/blab/atlas-of-viral-adaptation/blob/main/testing_d3/assets/receptor_binding_for_d3.csv", function( CSVdata) {
   // CSVdata is populated with the file contents...
   // ...ready to be converted into an Array
    data = $.csv.toArray(CSVdata);
    console.log(data)
});
</script>
