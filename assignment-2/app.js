const app = Vue.createApp({

    data(){
      return {
        userInput:'',
        confirmInput:''
      }
    },
    methods:{
    outPutText(event){
        this.userInput = event.target.value;
    },
     alertMsg(){
        alert("Just a Test!");
     },
     confirmedInput(){
         this.confirmInput = this.userInput;
     }
    }
});

app.mount('#assignment');