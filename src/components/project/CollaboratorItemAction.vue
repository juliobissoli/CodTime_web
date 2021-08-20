<template>
    <div class="d-flex justify-content-between">
        <div class="avatar">
            <Avatar :item="collaborator.avatar_url" />
        </div>
        <div class="ml-2 d-flex flex-column">
            <span class="title text-truncate">{{collaborator.name}}</span>
            <span class="subtitle text-secondary">{{collaborator.role}}</span>
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
    props: {collaborator: Object}
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