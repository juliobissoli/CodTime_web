<template>
    <ul class="avatar-list p-0 m-0">
        <li class="avatar-item" v-for="(item, i) in list" :key="i">
            <Avatar :item="item"/>
        </li>
    </ul>
</template>

<script>
import Avatar from './Avatar.vue'


export default {
    name: 'AvatarList',
    props: {list: Array},
    components: {Avatar}
}
</script>

<style lang="scss" scoped>

.avatar-list{
    display: flex;
}

.avatar-item{
    height: 30px;
    width: 30px;
    margin-left: -10px;

}

ul {
  list-style-type: none;
}

.avatar-item:not(:first-child) {
        // margin-left: 0;
    // margin-right: -4em;


}
</style>