<template>
    <div>
        <ul class="list-group text-sbtan">
            <li class="list-group-item" v-for="item in category" :key="item.id" :value='item' @click.prevent="getCategory(item)" 
            :class="{'active': currentOption === item}">{{ item }}</li>
        </ul>
    </div>
</template>


<script>
export default {
    props: ['category', 'currentOption'],
    methods: {
        getCategory(option) {
            this.$emit('get-category', option);
        },
    }
}
</script>