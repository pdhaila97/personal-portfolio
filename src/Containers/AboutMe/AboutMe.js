import React,{Component} from 'react';
import './AboutMe.css';
let interval = null;
class Intro extends Component {
    state = {
        typeWriter: this.props.intro?.typewriter,
        currentState : 0,
        currentCharacter: 0,
        currentString : "",
    }
    type = () =>{
        // console.log('Type Called');
        let typewriter = this.state.typeWriter;
        let currentState = this.state.currentState;
        let currentCharacter = this.state.currentCharacter;
        let updatedString = typewriter[currentState].substring(0,currentCharacter+1);
        // console.log(currentState,currentCharacter,updatedString);
        this.setState({currentString: updatedString,currentCharacter:currentCharacter+1});
        if(updatedString === typewriter[currentState])
        {
            clearInterval(interval);
            setTimeout(() => {
                interval = setInterval(this.delete,100)
            },1000);
        }
    }
    delete = () =>{
        // console.log('Delete Called');
        let typewriter = this.state.typeWriter;
        let currentState = this.state.currentState;
        let currentCharacter = this.state.currentCharacter-1;
        let updatedString = this.state.currentString.substring(0,currentCharacter);
        let length = typewriter.length;
        if(updatedString === '')
        {
            clearInterval(interval);
            if(currentState === length-1)
            {
                currentState = 0;
            }
            else{
                currentState = currentState+1;
                currentCharacter = 0;
            }

            setTimeout(() =>{
                interval = setInterval(this.type,100)
            },200)
        }
        this.setState({currentState: currentState,currentString: updatedString,currentCharacter:currentCharacter});
    }

    componentDidMount(){
        // console.log('ComponentDidMount');
        interval = setInterval(this.type,100);
    }

    render() {
        return(
            <React.Fragment>
                    <section className="section"  id="home">
                    </section>
                    <div className="Intro text text-center">
                        <span className="subheading">
                            Hello! I am 
                        </span>
                        <h1>{this.props.intro?.name}</h1>
                        <h2>I'm a <span>{this.state.currentString}</span></h2>
                        
                    </div>
            </React.Fragment>
        );
    }

}
export default Intro;