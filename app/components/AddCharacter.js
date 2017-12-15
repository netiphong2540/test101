import React from 'react';
import AddCharacterStore from '../stores/AddCharacterStore';
import AddCharacterActions from '../actions/AddCharacterActions';

class AddCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.state = AddCharacterStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AddCharacterStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AddCharacterStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    var name = this.state.name.trim();
    var type = this.state.type;

    if (!name) {
      AddCharacterActions.invalidName();
      this.refs.nameTextField.focus();
    }

    if (!type) {
      AddCharacterActions.invalidtype();
    }

    if (name && type) {
      AddCharacterActions.addCharacter(name, type);
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row flipInX animated'>
          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='panel-heading'>Add Character</div>
              <div className='panel-body'>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className={'form-group ' + this.state.nameValidationState}>
                    <label className='control-label'>Character Name</label>
                    <input type='text' className='form-control' ref='nameTextField' value={this.state.name}
                           onChange={AddCharacterActions.updateName} autoFocus/>
                    <span className='help-block'>{this.state.helpBlock}</span>
                  </div>
                  <div className={'form-group ' + this.state.typeValidationState}>
                    <div className='radio radio-inline'>
                      <input type='radio' name='type' id='Offense' value='Offense' checked={this.state.type === 'Offense'}
                             onChange={AddCharacterActions.updatetype}/>
                      <label htmlFor='Offense'>Offense</label>
                    </div>
                    <div className='radio radio-inline'>
                      <input type='radio' name='type' id='Defense' value='Defense' checked={this.state.type === 'Defense'}
                             onChange={AddCharacterActions.updatetype}/>
                      <label htmlFor='Defense'>Defense</label>
                    </div>
                    <div className='radio radio-inline'>
                      <input type='radio' name='type' id='Tank' value='Tank' checked={this.state.type === 'Tank'}
                             onChange={AddCharacterActions.updatetype}/>
                      <label htmlFor='Tank'>Tank</label>
                    </div>
                    <div className='radio radio-inline'>
                      <input type='radio' name='type' id='Support' value='Support' checked={this.state.type === 'Support'}
                             onChange={AddCharacterActions.updatetype}/>
                      <label htmlFor='Support'>Support</label>
                    </div>
                  </div>
                  <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddCharacter;