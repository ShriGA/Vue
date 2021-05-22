const app = Vue.createApp({
    data(){
        return {
              name:'RamdomName',
              age:40,
              image:'https://upload.wikimedia.org/wikipedia/commons/b/bb/Black-winged_stilt_courtship_behaviour.jpg'
                }
    },

    methods: {
        ageInFiveYear(){
            return this.age + 5;
        },
        reandomNumber(){
            return Math.random();
        }

    }
});

app.mount('#assignment');