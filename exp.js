var log = {
    console: function(msg){
        console.log(msg);
    },
    file: function(msg){
        console.log("Log to file here");
    }
};

module.exports = log