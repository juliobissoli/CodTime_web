<template>
  <aside>
    <div v-for="(commit, i) in list" :key="i" class="d-flex flex-column">
      <div class="d-flex justify-content-between w-100">
        <span class="f-12">{{commit.created_at | titleDate}}</span>
        <!-- <span class="badge badge-secondary">3:23h</span> -->
      </div>
      <p class="truncate line-clap-2 mt-1 ">
        <span class="f-medium f-16  mr-1 ">{{projectMap.get(commit.project_id) ? projectMap.get(commit.project_id).name : '--'}}</span>
        <span class="f-14 text-secondary w-100 ">{{commit.message}}
        </span>
      </p>
    </div>
  </aside>
</template>

<script>
import moment from 'moment';
import { mapGetters } from 'vuex';
export default {
  name: "LastCommitItem",
  props: {
    list: Array,
  },
  computed: {
    ...mapGetters('project', ['projectMap'])
  },
  filters: {
      titleDate(date){
          return date ? moment(date).format(`DD MMM [às] HH:mm`) : '--'
      }
  }
};
</script>
