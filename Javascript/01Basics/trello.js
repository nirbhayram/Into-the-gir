let mondayTodo = {
    day: `monday`,
    meetings: 0,
    doneMeetings: 0,
    addMeeting: function (){
        this.meetings++;
    },
    completeMeeting: function (){
        this.doneMeetings++;
    }
}

let addMeeting  = function(todo){
    todo.meetings++;
}

let meetingComplted = function(todo){
    todo.doneMeetings++;
}

let getSummary = function(todo){
    console.log(todo);
}

addMeeting(mondayTodo);
meetingComplted(mondayTodo);
getSummary(mondayTodo);

mondayTodo.addMeeting();
mondayTodo.addMeeting();
mondayTodo.completeMeeting();
getSummary(mondayTodo);