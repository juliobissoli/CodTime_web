<template>
    <div class="d-flex justify-content-between">
        <div class="avatar">
            <Avatar :item="collaborator" />
        </div>
        <div class="ml-2 d-flex flex-column">
            <span class="title text-truncate">{{collaborator.name}}</span>
            <span class="subtitle text-secondary">{{mapAccessLevel.get(collaborator.access_level) ? mapAccessLevel.get(collaborator.access_level).label : ''}}</span>
        </div>
        <button class="btn px-1">
            <i class="icon icon-arrow_down "></i>
        </button>
    </div>
</template>

<script>
import Avatar from '../utils/Avatar.vue'

export default {
    name: "CollaboratorItemAction",
    components: {Avatar},
    props: {collaborator: Object},
    computed: {
        mapAccessLevel(){
            return this.$store.getters.mapGlobalAccessLevel
        }
    }
}
</script>

<style lang="scss" scoped>
.avatar{
    height: 40px;
    width: 40px;
}

.icon{
    height: 18px;
    width: 18px;
    background: #9999;
}

.title{
    font-size: 14px;
    width: 100px;
}
.subtitle{
    font-size: 12px;
}
</style>