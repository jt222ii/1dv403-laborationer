"use strict";


var MessageBoard = {
    messages: [],
    
    init:function()
    {
    var mess = new Message("testmeddelande", new Date());
    //alert(mess);
    console.log(mess.getText());
    mess.setText("en annan text");
    //alert(mess) 
    console.log(mess.getText());
    console.log(mess.getDate());
    MessageBoard.getMessages();
    },
    
    getMessages: function(){
        MessageBoard.messages.push(new Message("hej", new Date()), new Message("hök", new Date()), new Message("balle", new Date()));

        console.log(MessageBoard.messages[0]);
        console.log(MessageBoard.messages[2].getText());
    }
    
    
    
    
};
window.onload = MessageBoard.init;




