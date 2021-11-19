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
        .filter((el) => RegExp(/(?:added|subtracted) (\d+(?:mo|w|d|m|h|s))+?/).test(el.body))
        .map((el) => {
          let body_split = el.body.split(" ");
          const {second_spend, time_spent} = getTime(el.body)
          const time = {
            human_time_spent: time_spent,
            second_spend: second_spend < 0 ? (-1 * second_spend) : second_spend,
            subtracted: second_spend < 0
          };
          return {
            ...el,
            body_split,
            time,
            date: getDate(el.body),
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
  },
};

function getDate(str){
  if(RegExp(/(\d{4})-(\d{2})-(\d{2})/).test(str)){
    const str_split = str.split(" ");
    return str_split[str_split.length - 1]
  }
  else return ''
}

function countTimeSecond(time, str) {
  const flag = str[str.length - 1];
  switch (flag) {
    case "mo": return time * (4 * 5 * 8 * 60 * 60); //n messes  = (4 semanas) * (5  dias) * (8 horas) * 60 min * 60 seg
    case "w": return time *  (5 * 8 * 60 * 60); //n semanas =  5 * dias 8 horas * 60 min * 60 seg
    case "d": return time *  (8 * 60 * 60); //n dias = 8 horas * 60 min * 60 seg
    case "h": return time *  (60 * 60); //n horas = 60 min * 60 seg
    case "m": return time *  60; //n minutos =  60 seg
    case "s": return time; 
  }
}

function getTime(str) {
  const str_split = str.split(" ");
  let i;
  let second_spend = 0;
  let time_spent = ''
  let timer;
  if(str_split){

    for (i = 1; i < str_split.length - 1; i++) {
        timer = RegExp(/\d+(?=d|m|h)/).exec(str_split[i])
        if(timer)  {
          second_spend += countTimeSecond((str_split[0] === 'subtracted' ? -1 : 1) * parseInt(timer[0]), str_split[i])
          time_spent += `${str_split[i]} `
        }
        else break
      }
  }

  return {second_spend, time_spent};
}
