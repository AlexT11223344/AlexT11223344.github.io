function keywordsearch(){
    this.keyword = $("#keyword").val();
    this.content = $("#novel_content").val();
    this.arr= this.content.split("\n");
    this.result = [];
    document.getElementById("keyword_test").innerHTML = "Selected keyword is: " + this.keyword;

    alert(this.keyword)

    for(var i = 0; i < this.arr.length; i++){
            if (this.arr[i].search(this.keyword) != -1){
                this.result.push(this.arr[i]);
            }
            else {
                continue;
            }
    }
    for (var j = 0; j < this.result.length; j++){
        document.write("result" + j + ":" + this.result[j] + "<br>");
    }
}