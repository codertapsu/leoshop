import React, { Component } from 'react';
import StarIcon from '../StarIcon/StarIcon';
import './Rating.scss'

class Rating extends Component{
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this)
    }
    changeValue(event,name, index){
        console.log(event.target.checked, name, index)
    }
    render() {
        const total = this.props.total;
        const name = this.props.name;
        return(
            <div>
                { total && [...Array(total).keys()].map((star, index) => (
                    <React.Fragment key={index}>
                        <input name={name} value={index} type="checkbox" id={`${name}${index}`} onChange={(event)=>this.changeValue(event, name,index)}/>
                        <label style={{margin: this.props.marginX}} htmlFor={`${name}${index}`}>
                            <StarIcon checked={false} width={15} />
                            </label>
                    </React.Fragment>
                ))}
                {/*<input type="checkbox" id={'staricon2'}/>*/}
                {/*<label style={{margin: this.props.marginX}} htmlFor="staricon2"><StarIcon checked={false} width={15} /></label>*/}
                {/*<input type="checkbox" id={'staricon3'}/>*/}
                {/*<label style={{margin: this.props.marginX}} htmlFor="staricon3"><StarIcon checked={false} width={15} /></label>*/}
                {/*<input type="checkbox" id={'staricon4'}/>*/}
                {/*<label style={{margin: this.props.marginX}} htmlFor="staricon4"><StarIcon checked={false} width={15} /></label>*/}
                {/*<input type="checkbox" id={'staricon5'}/>*/}
                {/*<label style={{margin: this.props.marginX}} htmlFor="staricon5"><StarIcon checked={false} width={15} /></label>*/}
            </div>
        )
    }
}
export default Rating;