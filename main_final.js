Vue.createApp({
    data() {
      return {
        message: "Hello Vue!",
        header: {},
        articles: []
      };
    },
    methods:{    
        getHeaderData()
        {
          axios
            .get(
              "https://raw.githubusercontent.com/LailaArahma/tekweb2022/master/contents/header.json"
            )
            .then((res) => {             
              this.header = res.data;
              this.getArticles();
            })
            .catch((error) => {
              console.log(error);
            });
        },
        getArticles()
        {
            axios
            .get(
              "https://raw.githubusercontent.com/LailaArahma/tekweb2022/master/contents/articles.json"
            )
            .then((res) => {          
              console.log(res);  
              this.articles = res.data;
            })
            .catch((error) => {
              console.log(error);
            });
        }
    },
    beforeMount() {
        this.getHeaderData()
    }
  }).mount("#app");
  