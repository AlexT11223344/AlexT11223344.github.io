// function check_box_status(){
//     $('#case_sensitive').on('change', function(){
//         this.status_value = this.checked ? "1" : "0";
//         document.getElementById("sensitive_value").innerHTML = this.status_value;
//     }).change();
// }
function matchKeyword(keyword,content) {
    var result = [];
    var result_temp_left = [];
    var result_temp_right = [];
    var regex = new RegExp('\\b(' + keyword + ')\\b');
    for (var i = 0; i < content.length; i++) {
        // if (this.arr[i].search(this.keyword) != -1)
        if (content[i].match(regex) != null) {
            result.push(content[i]);
        }
    }
    return result;
}

function matchKeywordExact(keyword,content){
    var result = [];
    var regex = new RegExp('\\b('+keyword+')\\b','i');
    for(var i = 0; i < content.length; i++){
        // if (this.arr[i].search(this.keyword) != -1)
        if (content[i].match(regex) != null)
        {
            result.push(content[i]);
        }
        else {
            continue;
        }
    }
    return result;
}

function keywordsearch(){
    var status_value = $("input[type='checkbox']").is(':checked')
    this.keyword = $("#keyword").val();
    this.content = $("#novel_content").val();
    this.arr= this.content.split("\n");
    this.result = [];
    var finalResult = "";
    document.getElementById("keyword_test").innerHTML = "Selected keyword is: " + this.keyword;

    if (status_value == true){
        alert(status_value);

        this.result = matchKeyword(this.keyword, this.arr);
        if (this.result == ""){
            document.getElementById("query_results").innerHTML = "No result for the keyword :" + "  " + this.keyword;
            document.getElementById("query_results_title").innerHTML = "<h3>" + "Number of keyword search results : 0" + "</h3>"
        }
        else {
            for (var j = 0; j < this.result.length; j++){
                // document.write("result" + j + ":" + this.result[j] + "<br>");
                finalResult += "<div>" + this.result[j] + "</div>";
                document.getElementById("query_results_title").innerHTML = "<h3>" + "Number of keyword search results : " + "  " + this.result.length + "</h3>";
                document.getElementById("query_results").innerHTML= finalResult;
            }
        }
    }
    else {
        // document.getElementById("query_results").innerHTML = "Functions in development...";
        alert(status_value);

        this.result = matchKeywordExact(this.keyword, this.arr);
        if (this.result == ""){
            document.getElementById("query_results").innerHTML = "No result for the keyword :" + "  " + this.keyword;
            document.getElementById("query_results_title").innerHTML = "<h3>" + "Number of keyword search results : 0" + "</h3>"
        }
        else {
            for (var j = 0; j < this.result.length; j++){
                // document.write("result" + j + ":" + this.result[j] + "<br>");
                finalResult += "<div>" + this.result[j] + "</div>";
                document.getElementById("query_results_title").innerHTML = "<h3>" + "Number of keyword search results : " + "  " + this.result.length + "</h3>";
                document.getElementById("query_results").innerHTML= finalResult;
            }
        }
    }
}

