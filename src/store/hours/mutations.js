import * as types from "../mutationTypes";

export default {
  [types.SET_COMMIT](state, value) {
    value.forEach((el) => {
      state.commits.push(el);
    });
  },

  [types.SET_NOTES](state, value) {
    if (value) {
      const list = value.notes
        .filter(
          (el) => RegExp(/added \d+(?:d|m|h) of time spent/).test(el.body)
          || RegExp(/added \d+(?:d|m|h) \d+(?:d|m|h) of time spent/).test(el.body)
          //  ||  RegExp(/changed time estimate to \d+(?:d|m|h)/).test(el.body)
        )
        .map((el) => {
          let body_split = el.body.split(" ");
          const time_spent =
            RegExp(/\d+(?=d|m|h)/).exec(body_split[1]).length > 0
              ? RegExp(/\d+(?=d|m|h)/).exec(body_split[1])[0]
              : 0;
          const time = {
            human_time_spent: body_split[1],
            time_spent,
            second_spend: getSecondSpend(parseInt(time_spent), body_split[1])
          };
          return {
            ...el,
            body_split,
            time,
            issue: {
              id: value.issue.id,
              iid: value.issue.iid,
              assignee: value.issue.assignee,
              status: value.issue.status,
              project_id: value.issue.project_id,
              title: value.issue.title,
            },
          };
        });

      state.notes = [...state.notes, ...list];
    } else {
      state.notes = [];
    }
  }


};

function getSecondSpend(time, str){
  const flag =  str[str.length-1]
  switch (flag){
    case 'd': return time * (8 * 60 * 60); //8 horas * 60 min * 60 seg 
    case 'h': return time * (60 * 60); //60 min * 60 seg 
    case 'm': return time * 60; //60 seg 
    case 's': return time ; //60 seg 
  }
}
