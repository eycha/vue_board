import axios from "axios";

const BASE_URL = "https://jssampletest.herokuapp.com/api/";

export default {
    getArticle: function(seq){
        return axios.get(BASE_URL + `board/${seq}`);
    },

    getArticles: function(page){
        console.log(page);
        return axios.get(
            BASE_URL + "board/all"           
            );
    
    },
    
    postArticle: function(content, title){
          return axios.post(
            BASE_URL + "board/",
            {
                content:content,
                title:title,
                
            }
          );
    }

    // patchArticle: function(id, title, body){
    //     return axios.patch(BASE_URL+`posts/${id}`,{
    //         title: title,
    //         body: body,
    //     });
    // }
}