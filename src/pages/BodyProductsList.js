import React from 'react'
import {getPerfumes} from '../Axios'

export default class BodyProductsList extends React.Component {
  state = {
    list: undefined
  }

  async componentDidMount() {
    const listOfProducts = await getPerfumes();
    let bodyProducts = [];
    listOfProducts.filter((object => {
      if(object.category === "body"){
        bodyProducts.push(object)
      }
      return bodyProducts;
    }))

    console.log('getting list of body products', bodyProducts)
    this.setState({
      bodyProducts
    })
  }
  
  render() {
    return (
      <div className="gifts-container">
        BATH and BODY
      </div>
    )
  }
}
