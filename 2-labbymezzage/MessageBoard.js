"use strict";


var MessageBoard = {
    messages: [],
    init:function()
    {
    var mess = new Message("testmeddelande", new Date());
    //alert(mess);
    console.log(mess.getText());
    mess.setText("en annan text");
    //alert(mess) //alert(mess) ger ju bara "Object object"?
    console.log(mess.getText());
    console.log(mess.getDate());
    MessageBoard.getMessages();
    },
    getMessages: function(){
        
        MessageBoard.messages.push("hej", "hök", "balle");
        console.log(MessageBoard.messages);
        console.log(MessageBoard.messages[0]);
        MessageBoard.messages[2].getText();
    }
}
window.onload = MessageBoard.init;




