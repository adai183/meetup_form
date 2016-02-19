var React = require('react');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      name: '',
      country: '',
      postalCode: '',
      distance: ''
    }
  },
  render: function(){
    return <div className="input-group">
      <div className="cont">
        <div className="tag">
          Name :
        </div>
        <div className="field">
          <input
          value={this.state.name}
          onChange={this.handleInputStateName}
          type="text"
          className="form-controle" />
        </div>
      </div>
      <div className="cont">
        <div className="tag">
          Country :
        </div>
        <div className="field">
          <input
          value={this.state.country}
          onChange={this.handleInputStateCountry}
          type="text"
          className="form-controle" />
        </div>
      </div>
      <div className="cont">
        <div className="tag">
          PostalCode :
        </div>
        <div className="field">
          <input
          value={this.state.postalCode}
          onChange={this.handleInputStateCode}
          type="text"
          className="form-controle" />
        </div>
      </div>
      <div className="cont">
        <div className="tag">
          distance willing to travel for a meetup in km :
        </div>
        <div className="field">
          <input
          value={this.state.distance}
          onChange={this.handleInputStateDistance}
          type="text"
          className="form-controle input-distance" />  km
        </div>
      </div>
      <div className="cont">
        <span className="input-group-btn">
          <button onClick= {this.handleClick}
          className="btn btn-default"
          type="button">
            join the tribe
          </button>
        </span>
      </div>
    </div>
  },
  handleClick: function () {
  // send value of the text to Firebase
  this.props.itemsStore.push({
    name: this.state.name,
    country: this.state.country,
    postalCode: this.state.postalCode,
    distance: this.state.distance,
    });
    this.setState({name: ''});
    this.setState({country: ''});
    this.setState({postalCode: ''});
    this.setState({distance: ''});
  },
  handleInputStateName: function (event) {
    this.setState({name: event.target.value});
  },
  handleInputStateCountry: function (event) {
    this.setState({country: event.target.value});
  },
  handleInputStateCode: function (event) {
    this.setState({postalCode: event.target.value});
  },
  handleInputStateDistance: function (event) {
    this.setState({distance: event.target.value});
  }

});
