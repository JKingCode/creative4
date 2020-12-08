<template>
<body>
<div class="title"><h2>ATTRIBUTE ACTIVITY</h2></div>
<hr>
<div class="instructions">
    <p> Read each item below carefully. Decide how true that statement is about you, and choose the most appropriate response from the response key. Write your response to each item in your study journal. Spiritual growth is a gradual process, and no one is perfect, so you should expect to rate yourself better on some items than on others. </p>
</div>
<hr>
<div class="bold"> <p><strong>Response Key</strong></p> </div>
<br>
<div class="key">
    <p>1= never
2= sometimes
3= often
4= almost always
5= always
    </p>
</div>
<div class="test">
    <form class="pure-form">
    <legend><a href="Improve.vue">Faith</a></legend>
      <fieldset>
        <p>1.</p>
        <input v-model="faith[0]"> 
        <p>I believe in Christ and accept Him as my Savior.</p>
      </fieldset>
      <fieldset>
        <p>2.</p>
        <input v-model="faith[1]"> 
        <p>I feel confident that God loves me.</p>
      </fieldset>
      <fieldset>
        <p>3.</p>
        <input v-model="faith[2]"> 
        <p>I trust the Savior enough to accept His will and do whatever He asks.</p>
      </fieldset>
      <fieldset>
        <p>4.</p>
        <input v-model="faith[3]"> 
        <p>I firmly believe that through the Atonement of Jesus Christ I can be forgiven of all my sins.</p>
      </fieldset>
      <fieldset>
        <p>5.</p>
        <input v-model="faith[4]"> 
        <p>I have enough faith in Christ to obtain answers to my prayers.</p>
      </fieldset>
      <fieldset>
        <p>6.</p>
        <input v-model="faith[5]"> 
        <p>I think about the Savior during the day and remember what He has done for me.</p>
      </fieldset>
      <fieldset>
        <p>7.</p>
        <input v-model="faith[6]"> 
        <p>I have the faith necessary to help make good things happen in my life or the lives of others.</p>
      </fieldset>
      <fieldset>
        <p>8.</p>
        <input v-model="faith[7]"> 
        <p>I know by the power of the Holy Ghost that the Book of Mormon is true.</p>
      </fieldset>
      <fieldset>
        <p>9.</p>
        <input v-model="faith[8]"> 
        <p>I have enough faith in Christ to accomplish anything He wants me to do—even miracles, if necessary.</p>
      </fieldset>
      <fieldset>
        <button type="submit" class="pure-button pure-button-primary" @click.prevent="addScore">Submit</button>
      </fieldset>
    </form>
</div>
</body>

    
</template>

<script>
import axios from 'axios';
export default {
    name: 'Test.vue',
    data(){
        return{
            faith: [],
        }
    },

    created() {
        this.getScore();
    },
    computed: {
        user() {
            return this.$root.$data.user;
        },
        score(){
            return this.$root.$data.score;
        }
    },

    methods: {
        async addScore() {
            try {
                var total = 0;
                for(var i = 0; i < this.faith.length; i++){
                    total += parseInt(this.faith[i]);
                }
                var average = total/this.faith.length;
                

                await axios.post("/api/score/", {
                    faith: average,
                    total: total,
                    average: average,
                    lowest: 'faith',
                    highest: 'faith'
                });
                //this.faith = null;
                return true;
            } catch (error) {
                //console.log(error);
            }
        },
        async getScore() {
            try {
                let response = await axios.get("/api/score");
            
                this.$root.$data.score = response.data.score;
                
                return true;
            } catch (error) {
                //console.log(error);
            }
        },
        // async updateScore() {
        //     try {
        //         console.log(this.$root.$data.score);
        //         var total = 0;
        //         for(var i = 0; i < this.faith.length; i++){
        //             total += this.faith[i];
        //         }
        //         var average = total/this.faith.length;
        //         let response = await axios.put('/api/score/',{
        //             faith: average,
        //             total: total,
        //             average: average,
        //             lowest: 'faith',
        //             highest: 'faith'
        //         });
        //         this.$root.$data.score = response.data.score;
        //     } catch (error) {
        //         this.error = error.response.message;
        //     }
        // }
    }
}
</script>

<style>
p{
    display: inline;
}
body{
    margin:auto;
}
.instructions{
    text-align: center;
}
.bold{
    text-align: center;
}

h2{
    text-align: center;
    font-size: 24px;
}
.key{
    text-align: center;
}
legend{
    font-size: 24px;
}


</style>