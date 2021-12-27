import moment from "moment";

export default {
  commitsList(state) {
    return state.commits.sort((a, b) =>
    moment(b.created_at).diff(moment(a.created_at))
  );;
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
    let noteList = getters.noteList;

    if (noteList.length > 0) {
      date = moment(noteList[0].created_at).format("YYYY-MM-DD");
      noteList.forEach((el) => {
        let data = {
          ...el.time,
        };
        if (moment(el.created_at).format("YYYY-MM-DD") !== date) {
          map.set(date, {
            list,
            // second_spend: getters.countTime(list),
            second_spend: list
              .map((el) => (el.subtracted ? -1 : 1) * el.second_spend)
              .reduce((x, xs) => x + xs),
          });
          date = moment(el.created_at).format("YYYY-MM-DD");
          list = [data];
        } else {
          list.push(data);
        }
        map.set(date, {
          list,
          // second_spend: getters.countTime(list),
          second_spend: list
            .map((el) => (el.subtracted ? -1 : 1) * el.second_spend)
            .reduce((x, xs) => x + xs),
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
    let second_spend = 0;
    list.forEach((el) => {
      second_spend += (el.subtracted ? -1 : 1) * el.second_spend;
    });
    return second_spend;
    // ((el) => (el.subtracted ? -1 : 1) * el.second_spend).reduce((x, xs) => x + xs)
  },

  housToAssignee(state) {
    return state.notes
      .map((el) => ({
        ...el,
        assignee_id: el.issue.assignee ? el.issue.assignee.id : 0,
      }))
      .sort((a, b) => a.assignee_id - b.assignee_id);
  },

  notesToAssignee: (state, getters) => (assignee_list) => {
    let list = [];
    let user = -1;
    let map = new Map();
    let noteList = getters.housToAssignee;
    if (noteList.length > 0) {
      // date = moment(noteList[0].created_at).format("YYYY-MM-DD");
      user = noteList[0].assignee_id
      noteList.forEach((el) => {
        let data = {
          ...el.time,
        };
        if (el.assignee_id !== user) {
          map.set(user, {
            list,
            // second_spend: getters.countTime(list),
            second_spend: list
              .map((el) => (el.subtracted ? -1 : 1) * el.second_spend)
              .reduce((x, xs) => x + xs),
          });
          // date = moment(el.created_at).format("YYYY-MM-DD");
          user = el.assignee_id
          list = [data];
        } else {
          list.push(data);
        }
        map.set(user, {
          list,
          // second_spend: getters.countTime(list),
          second_spend: list
            .map((el) => (el.subtracted ? -1 : 1) * el.second_spend)
            .reduce((x, xs) => x + xs),
        });
      });
    }

    // let  daysInterval = this.daysInterval(filters)

    assignee_list.forEach((assignee) => {
      if (!map.get(assignee)) {
        map.set(assignee, { list: [], second_spend: 0 });
      }
    });

    return map;
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
