exports.log = {
    console: function(msg){
        this.console.log(msg);
    },
    file: function(msg){
        console.log("Log to file here");
    }
}