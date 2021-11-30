export default {
  taskList(state) {
    return state.tasks;
  },

  mapTasks2State(state) {
    const status_list = [0, 1, 2, 3];
    let list_aux = [];
    const map = new Map();
    status_list.forEach((i) => {
      list_aux = state.tasks.filter((el) => el.status == i);

      map.set(i, list_aux);
    });

    return map;
    // const map  = new Map
    // state.tasks.map(el => {

    // });
  },

  taskProject: (state) => (project_id) => {
    return state.tasks.filter((el) => el.project_id === project_id);
  },

  statisticsTotals(state) {
    if (state.tasks.length > 0) {
      let total_time_spent = 0;
      let time_estimate = 0;
      let isseus_started = 0;
      let issues_estimation_count = 0;
      let issues_timer_count = 0;
      let total_by_status = [0,1,2,3].map(i => ({status: i, time_spent: 0, time_estimate: 0, total_issues: 0}))
      
      const list = state.tasks.map((el) => {
        time_estimate += el.time_stats.time_estimate;
        total_time_spent += el.time_stats.total_time_spent;
        isseus_started += el.status != 0 ? 1 : 0;
        issues_estimation_count += el.time_stats.time_estimate != 0 ? 1 : 0;
        issues_timer_count += el.time_stats.total_time_spent != 0 ? 1 : 0;
        total_by_status[el.status].time_spent += el.time_stats.total_time_spent;
        total_by_status[el.status].time_estimate += el.time_stats.time_estimate;
        total_by_status[el.status].total_issues += 1;
        return {
          ...el.time_stats,
          created_at: el.created_at,
          updated_at: el.updated_at,
          issues_id: el.id,
          iid: el.iid,
          project_id: el.project_id,
          status: el.status,
        };
      });
      return {
        list,
        time_estimate,
        total_time_spent,
        isseus_started,
        issues_timer_count,
        issues_estimation_count,

        total_time_avg_issues: total_time_spent / issues_timer_count,
        total_estimate_avg_issues: time_estimate / issues_estimation_count,

        total_time_avg_issues_relative: total_time_spent / (list.length || 1),
        total_estimate_avg_issues_relative: time_estimate / (list.length || 1),

        total_by_status
      };
    } else {
      return {
        list: [],
        total: 0,

        time_estimate: 0,
        total_time_spent: 0,
        isseus_started: 0,
        issues_timer_count: 0,
        issues_estimation_count: 0,

        total_time_avg_issues: 0,
        total_estimate_avg_issues: 0,
        total_time_avg_issues_relative: 0,
        total_estimate_avg_issues_relative: 0,
        total_by_status: []
      };
    }
  },
};
