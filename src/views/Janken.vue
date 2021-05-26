<template>
<v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        cols="8"
      >
    <v-card>
      <v-card-title>
        Janken
      </v-card-title>
      <v-card-text>
        {{signal}}
      </v-card-text>      
      <v-card-text>
        わたし:{{myHand}}
      </v-card-text>
      <v-card-text>
        あなた:{{yourHand}}
      </v-card-text>
      <v-divider class="mx-4"></v-divider>      
      <v-card-text>
        {{result}}
      </v-card-text>
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
        {{wins}}勝{{loses}}敗{{draws}}分
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
  // TODO 画像を入れる。
  // TODO 見た目を揃える。ぽん！にアクションつける。結果も派手にする。
  // TODO コード綺麗に。

    data() {
        return {
            myHand: "",
            yourHand:"",
            history:[],
            yourWin:0,
            signal: "じゃーんけーん",
            result:""
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
        this.signal="ぽん！"
      },
      reset(){
        this.yourHand =""
        this.myHand = ""
        this.result = ""
        this.history = []
        this.signal="じゃーんけーん"
        this.yourWin=0
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