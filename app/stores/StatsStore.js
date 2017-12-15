import {assign} from 'underscore';
import alt from '../alt';
import StatsActions from '../actions/StatsActions';

class StatsStore {
  constructor() {
    this.bindActions(StatsActions);
    this.leadingType = { Type: 'Unknown', count: 0 };
    this.totalVotes = 0;
    this.OffenseCount = 0;
    this.DefenseCount = 0;
    this.TankCount = 0;
    this.SupportCount = 0;
    this.totalCount = 0;
  }

  onGetStatsSuccess(data) {
    assign(this, data);
  }

  onGetStatsFail(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }
}

export default alt.createStore(StatsStore);
