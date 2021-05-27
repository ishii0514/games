<template>
<v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        cols="8"
      >
    <v-card>
      <v-card-title>
        AI Janken
      </v-card-title>
      <v-card-text>
        AIがあなたの手を学習してどんどん強くなります。
      </v-card-text>
      <v-card-text>
        <transition name="fade">
          <div v-if="start">じゃーんけーん</div>
          <div v-else>ぽん！</div>
        </transition>
      </v-card-text>
      <v-img
          max-height="80px"
          max-width="100px"
          contain
          v-bind:style="style"
          v-bind:src="myHandImg"
        ></v-img>
      <v-divider class="mx-4"></v-divider>  
      <v-img
          max-height="80px"
          max-width="100px"
          contain
          v-bind:src="yourHandImg"
        ></v-img>
      <v-card-title>
        {{result}}
      </v-card-title>
      <v-divider class="mx-4"></v-divider>      
      <v-card-actions>
        <v-btn depressed outlined color="primary" text @click="goo">ぐー</v-btn>
        <v-btn depressed outlined color="primary" text @click="choki">ちょき</v-btn>
        <v-btn depressed outlined color="primary" text @click="par">ぱー</v-btn>
        <v-btn text @click="reset">Reset</v-btn>
      </v-card-actions>
    </v-card>
      </v-col>
      <v-col
        cols="4"
      >
      <v-card>
        <v-card-text>
        あなたの成績: {{wins}}勝{{loses}}敗{{draws}}分
      <v-list-item-group
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in reverseHistory"
          :key="i"
        >
          <v-list-item-content>
                <v-list-item-title v-text="item[2]"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      </v-card-text>
      </v-card>
      </v-col>
    </v-row>
  </v-container>    
</template>

<script>
export default {
  // TODO 見た目を揃える。ぽん！にアクションつける。結果も派手にする。
  // TODO コード綺麗に。

    data() {
        return {
            myHand: "",
            yourHand:"",
            history:[],
            result:"",
        }
    },
    computed: {
      wins() {
        return this.history.filter(x=>x[2]=="あなたのかち").length
      },
      loses() {
        return this.history.filter(x=>x[2]=="あなたのまけ").length
      }
      ,
      draws() {
        return this.history.filter(x=>x[2]=="あいこ").length
      },
      reverseHistory() {
        return this.history.slice().reverse();
      },
      yourHandImg(){
        return this.getHandImg(this.yourHand)
      },
      myHandImg(){
        return this.getHandImg(this.myHand)
      },
      style(){
        return { transform:"rotate(0.5turn)"}
      },
      start(){
        return this.history.length == 0;
      }

    },
    methods: {
      goo() {
        this.pon("ぐー")
      },
      choki() {
        this.pon("ちょき")
      },
      par() {
        this.pon("ぱー")
      },
      pon(value) {
        this.yourHand=value,
        this.myHand = this.calcHand()
        this.result = this.calcResult()
        this.history.push([this.myHand,this.yourHand, this.result])
      },
      reset(){
        this.yourHand =""
        this.myHand = ""
        this.result = ""
        this.history = []
      },
      getHandImg(value){
        if (value == "ぐー"){
          return require("@/assets/janken_gu.png")
        }
        if (value == "ちょき"){
          return require("@/assets/janken_choki.png")
        }
        if (value== "ぱー"){
          return require("@/assets/janken_pa.png")
        }
        return "";
      },
      calcHand(){
        var n =7
        if (this.history.length <=n){
          // n回以内
          return this.calcHandRandom()
        }
        //絶対勝つ
        if (this.yourHand == "ぐー"){
          return "ぱー"
        }
        if (this.yourHand == "ちょき"){
          return "ぐー"
        }
        return "ちょき"
      },
      calcHandRandom(){
        var v = Math.random()
        if (v < 0.33){
          return "ぐー"
        }
        if (v < 0.67){
          return "ちょき"
        }
        return "ぱー"

      },
      calcResult(){
        if (this.myHand == "ぐー"){
          if (this.yourHand == "ぐー"){
            return "あいこ";
          }
          if (this.yourHand == "ちょき"){
            return "あなたのまけ";
          }
          if (this.yourHand == "ぱー"){
            return "あなたのかち";
          } 
        }
        if (this.myHand == "ちょき"){
          if (this.yourHand == "ぐー"){
            return "あなたのかち";
          }
          if (this.yourHand == "ちょき"){
            return "あいこ";
          }
          if (this.yourHand == "ぱー"){
            return "あなたのまけ";
          }
        }
        if (this.myHand == "ぱー"){
          if (this.yourHand == "ぐー"){
            return "あなたのまけ";
          }
          if (this.yourHand == "ちょき"){
            return "あなたのかち";
          }
          if (this.yourHand == "ぱー"){
            return "あいこ";
          }
        }
        return "" 
      }
    }
};
</script>
<style scoped>
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave{
  opacity:1
}
.fade-leave-active{
  transition:opacity .5s;
}
.fade-leave-to{
  opacity:0
}
</style>