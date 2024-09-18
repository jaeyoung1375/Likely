<template>
      <div class="board-area">
        <ul class="board-ul">
          <li class="notice py-3 px-2">
            <a class="notice-tab py-1 px-2 font-medium" href="/notice">공지사항</a>
            <a class="notice-content font-semibold">OKKY와 함께 풍요롭고 즐거운 한가위 보내세요!</a>
          </li>
        </ul>
      </div>
   
</template>

<script>
import axios from 'axios'


export default {
    name : 'Community',
    data(){
      return{
        list : [],
      }
    },
    created(){
      this.more();
    },
    methods: {
      more(){
        axios.get('http://localhost/api/boards')
        .then((res) =>{
         this.list = res.data;
         console.log(this.list);
        });
      }
    },
}
</script>

<style>
@import url('../common.css');
.board-area{
  max-width: 1200px;
  margin: 0 auto;
}
.notice{
  background-color: rgb(240 246 250/1);
  text-align: left;
}
.notice-tab{
  border-radius: .25rem;
  border-width: 1px;
  border-color: hsla(220, 9%, 46%, .3);
  background-color: white;
  font-size: .75rem;
  line-height: 1rem;
  color: rgb(0 144 249);
  margin-right: 15px;
 

}
.notice-content{
  font-size: 1rem;
  line-height: 1.5rem;
  color: rgb(17 24 39);
}

</style>