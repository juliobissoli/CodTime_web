<template>
  <div class="bg-white rounded p-4 shadow-sm">
      <legend>Issues trabalhadas</legend>
    <ul v-for="(issue, i) in issues" :key="i">
      <li class="row py-1">
        <ListItem :issues_status="issue.status" class="col-9">
         <span class="text-truncate">  {{ issue.title }} </span>
        </ListItem>
        <div class="col p-0 d-flex justify-content-end"  >
            <Avatar style="width: 30px; height: 30px" :item="issue.assignee"  />
        </div>
        <div class="col p-0 d-flex justify-content-center align-items-center">
            <span class="badge badge-secondary">
                {{(issue.time_stats ? issue.time_stats.time_estimate : 0) / 60 | horusFormatGlobal}}
            </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Avatar from '../utils/Avatar.vue'
import ListItem from '../utils/LabelColorIndicator.vue'
export default {
    name: 'ListIssuesPerformance',
    components: {Avatar, ListItem },
    props: {issues: Array},

}
</script>
