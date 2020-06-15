import React from 'react';

class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        console.log("Cliked timmer!");
    }
    componentDidMount() {
        this.timerId = setInterval(()=>{this.updateTime()},1000)
    }
    updateTime(){
        this.setState({
            time:new Date()
        });
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.time.toLocaleTimeString()}
            </div>
        );
    }
}

export default Clock;