<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{'disabled' : !pages.has_pre }">
          <a class="page-link" href="#" aria-label="Previous" @click="changepage(pages.current_page-1)">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="page in pages.total_pages" :key="page"
          :class="{'active': pages.current_page === page}">
          <a class="page-link" href="#" @click="changepage(page)">{{ page }}</a></li>
        <li class="page-item" :class="{'disabled' : !pages.has_next }">
          <a class="page-link" href="#" aria-label="Next" @click="changepage(pages.current_page + 1)">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
    //此處props 的 需要與向下傳遞的綁定一致
    props:[
        'pages'
    ],
    
    methods:{
        changepage(page){
            this.$emit('changepage',page);
        }
    }
}
</script>