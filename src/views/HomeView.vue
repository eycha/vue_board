<template>
  <el-row>
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <el-table @row-click="rowClicked" :data="articles" style="width: 100%">
        <el-table-column prop="seq" label="seq" width="80"></el-table-column>
        <el-table-column prop="title" label="title" width="120"></el-table-column>
        <el-table-column prop="content" label="content"></el-table-column>
        <el-table-column prop="viewCount" label="viewCount"></el-table-column>
        <el-table-column prop="memberEmail" label="memberEmail"></el-table-column>
        
     
      </el-table>
    </el-col>
  </el-row>
  <a href="/board/write" class="write_btn">
    <img src="/images/pen.jpg">

  </a>
</template>

<script>
import apiBoard from '@/api/board';


export default {
  data(){
    return {
      articles:null,
    }
  },
  mounted(){
   
    apiBoard.getArticles(0)
    .then((response)=>{
      console.log("getArticles",response);
      this.articles=response.data.data.list;
    })    
    .catch((e)=>{
      console.log(e);
        });

      
    },
  
    methods: {
      rowClicked(row){
        this.$router.push({
          path: `/board/detail/${row.seq}`
        
      });
    }
  }
}


</script>



<style scoped>
.write_btn{
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 48px;
  height: 48px;
  border-radius: 50px;
  background: #000000;
  box-shadow: 0px 10px 20px rgb(0,0,0,0.05);
  z-index:10;
  display:inline-block;
}
.write_btn img {
  position: relative;
  top: 50%;
  left: 34%;
  transform: translate(-50%, -55%);
  width: 33px;
  height: 32px;

}

</style>