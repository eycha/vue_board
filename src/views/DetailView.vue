<template>
  <div>
    <el-row>
        <el-col :span="2"></el-col>
        <el-col :span="20">
          <el-container>
            <el-header>{{article.title}}</el-header>
            <el-main>{{article.content}}</el-main>
    
          </el-container>
        </el-col>
        <el-col :span="2"></el-col>
    </el-row>
      <br>
      <el-button type="success" @click="goBack">Back</el-button>
      <el-button type="success" @click="editArticle">수정</el-button>
  </div>
</template>

<script>
import apiBoard from '@/api/board';



export default{
  data(){
    return{
      article:"",
    };
  },

  mounted(){
    apiBoard
      .getArticle(this.$route.params.seq)
      .then((response)=>{
        console.log("getArticle", response);
        this.article=response.data.data;
      })
      .catch((e) => {
        console.log(e);
      });
  },


  methods: {
    goBack(){
      this.$router.go(-1);
      },
    
      editArticle(){
      this.$router.push({path: `/board/write/${this.$route.params.seq}`});
      }
  }
}
</script>

<style>
.el-header{
  background-color: #b3c0d1;
  color: #333;
  text-align:left;
  line-height:60px;
}
.el-main{
  background-color: #e9eef3;
  color:#333;
  text-align:left;
}



</style>