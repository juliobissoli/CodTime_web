import moment from "moment";

export default {
  commitsList(state) {
    return state.commits;
  },

  noteList(state) {
    return state.notes.sort((a, b) =>
      moment(b.created_at).diff(moment(a.created_at))
    );
  },

  notesToDate: (state, getters) => (filters) => {
    let list = [];
    let date = "";
    let map = new Map();
    let lotList = getters.noteList;

    if (lotList.length > 0) {
      date = moment(lotList[0].created_at).format("YYYY-MM-DD");
      lotList.forEach((el) => {
        let data = {
          ...el.time,
        };
        if (moment(el.created_at).format("YYYY-MM-DD") !== date) {
          map.set(date, {
            list,
            // second_spend: getters.countTime(list),
            second_spend: list.map((el) => (el.subtracted ? -1 : 1) * el.second_spend).reduce((x, xs) => x + xs),
          });
          date = moment(el.created_at).format("YYYY-MM-DD");
          list = [data];
        } else {
          list.push(data);
        }
        map.set(date, {
          list,
          // second_spend: getters.countTime(list),
          second_spend: list.map((el) => (el.subtracted ? -1 : 1) * el.second_spend).reduce((x, xs) => x + xs),
        });
      });
    }

    // let  daysInterval = this.daysInterval(filters)

    getters.daysInterval(filters).map((day) => {
      if (!map.get(day)) {
        map.set(day, { list: [], second_spend: 0 });
      }
    });

    return map;
  },

   countTime: (state) => (list) => {
    
     let second_spend = 0
    list.forEach(el => {
      console.log('el => ',el)
      second_spend += (el.subtracted ? -1 : 1) * el.second_spend
    });
    return second_spend
    // ((el) => (el.subtracted ? -1 : 1) * el.second_spend).reduce((x, xs) => x + xs)
  },

  daysInterval: (state) => (filters) => {
    let date_init = filters.date_init;
    let date_end = filters.date_end;
    let length = moment(date_end).diff(date_init, "days") + 1;
    let list = [];
    for (var i = 0; i < length; i++) {
      list.push(
        moment(date_init)
          .add(i, "days")
          .format("YYYY-MM-DD")
      );
    }
    return list;
  },
};
