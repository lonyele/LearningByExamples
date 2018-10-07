import * as React from "react";
import { Button, Icon } from 'semantic-ui-react';

export interface HelloProps { compiler: string; framework: string; }


const ButtonTest = () =>
(   <div>
        
        <Button secondary>Secondary</Button>
    </div>
)

const ButtonAnimation = () =>
(   <div>
        <Button animated='fade'>
            <Button.Content visible>Next</Button.Content>
            <Button.Content hidden>
                <Icon name='right arrow' />
            </Button.Content>
        </Button>

        <Button animated='vertical'>
            <Button.Content hidden>Shop</Button.Content>
            <Button.Content visible>
                <Icon name='shop' />
            </Button.Content>
        </Button>

         <Button animated='fade'>
            <Button.Content visible>
                Sign-up for a Pro account
            </Button.Content>
            <Button.Content hidden>
                $12.99 a month
            </Button.Content>
         </Button>
    </div>
)

export class Hello extends React.Component<HelloProps, any> {
    constructor(props : any) {
        super(props);
        this.state = {
            name: true
        };
    }
    

    handleClick = () => this.setState({ active: !this.state.active })
 
    handleClick1 = (possible : string) => console.log("whatup, look " + possible);
    changeColor = () => { 
        this.setState({ name : !this.state.name});
        
        console.log("color changed, " + this.state.name);//color='orange'
    }
    render() {
        const { active } = this.state;
        console.log("????????");

        return (
            <div>
                <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                <Button primary onClick={() => this.handleClick1("working??")}>Primary</Button>
                <ButtonTest/ >
                <Button toggle  active={this.state.name} color='orange' onClick={this.changeColor}>Orange</Button>
                <ButtonAnimation/>
                <Button toggle active={active} onClick={this.handleClick}>
                    Toggle
                </Button>



            </div>

        )
    }
}



