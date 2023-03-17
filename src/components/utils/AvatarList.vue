<template>
    <ul class="avatar-list p-0 m-0">
        <li class="avatar-item" v-for="(item, i) in listFiltered" :key="i">
            <Avatar :item="item"/>
        </li>
        <li v-if="max && this.list.length > this.max " class="avatar-item avatar-none d-flex justify-content-center align-items-center">
            <small>+{{list.length - max}}</small>
        </li>
    </ul>
</template>

<script>
import Avatar from './Avatar.vue'


export default {
    name: 'AvatarList',
    props: {list: Array, max: Number},
    components: {Avatar},
    computed: {
        listFiltered() {
            return this.max ? this.list.filter( (el, i) => i < this.max) : this.list 
        }
    }
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
.avatar-none{
    height: 30px;
    width:  30px;
    background-color: #eeeeee;
    border-radius: 50%;
}
</style>