import alt from '../alt';

class CharacterListActions {
  constructor() {
    this.generateActions(
      'getCharactersSuccess',
      'getCharactersFail'
    );
  }

  getCharacters(payload) {
    let url = '/api/characters/top';
    let params = {
      race: payload.race,
      bloodline: payload.bloodline
    };

    if (payload.category === 'Offense') {
      params.type = 'Offense';
    } else if (payload.category === 'Defense') {
      params.type = 'Defense';
    } else if (payload.category === 'Tank') {
      params.type = 'Tank';
    } else if (payload.category === 'Support') {
      params.type = 'Support';
    }

    if (payload.category === 'shame') {
      url = '/api/characters/shame';
    }

    $.ajax({ url: url, data: params })
      .done((data) => {
        this.actions.getCharactersSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getCharactersFail(jqXhr);
      });
  }
}

export default alt.createActions(CharacterListActions);