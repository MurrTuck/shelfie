import React, { Component } from 'react'

class Form extends Component {
    constructor() {
        super()

        this.state = {
            imageUrl: '',
            productName: '',
            productPrice: 0.00
        }

    }

    updateState(prop, value) {
        this.setState({
            [prop]: value
        })
    }



    render() {
        // console.log(this.state)
        return (
            <div>
                <div>Form</div>
                <div>
                    <input onChange={(e) => this.updateState('imageUrl', e.target.value)} placeholder="Image URL" />
                </div>
                <div>
                    <input onChange={(e) => this.updateState('productName', e.target.value)} placeholder='Add Product Name' />
                </div>
                <div>
                    <input onChange={(e) => this.updateState('productPrice', e.target.value)} placeholder='0.00' />
                </div>
                <button>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}

export default Form