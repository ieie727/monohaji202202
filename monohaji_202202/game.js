//キャンバスの取得・設定


//答えとなる猫の数の設定とカウントの準備



//動物の画像の読み込みや設定（種類、X座標、Y座標）



//こたつの画像を用意



//スタート・再スタートボタン
const startButton = document.getElementById('start');
let id;
let flag = false;
//kotatsu.onload = () => ctx.drawImage(kotatsu, 0, 200, 400, 200);
startButton.addEventListener('click', () => {
    if(flag === false){
        //ゲーム開始の処理
        id = setInterval(draw,10);
        startButton.textContent = "もう１度";
        flag = true;
    }else{
        startButton.textContent = "スタート";
        location.reload();
    }
});


//メインとなる関数
function draw(){
    //描画の準備(初期化)
    
    

    //当たり範囲の描画
   
    

    //動物の描画・移動
   
    

    //こたつの描画
    


    //動物が当たり範囲内に入った時の処理
    if(150 <= animalX  &&  animalX <= 250  &&  270 <= animalY  &&  animalY <= 330 ){
        //猫の場合はカウントを増やす
        

        //猫の数が正解数に達するまで出現させて、答えまで達すると答え合わせの処理をする
        

            //動物の画像の読み込みや設定をし直す
            


            //答え合わせをして、ゲームを終了する
            
            
    }
}


//min(最小値)とmax(最大値)の間のランダムな整数を取得する
function getRandomNumber(min, max){
    const randomNumber = Math.floor( Math.random() * ( max - min +1) + min );
    return randomNumber;
}


//猫か虎かを決めて、画像の読み込みを行う
function setAnimalType(){
    const randomNumber = getRandomNumber(0,1);
    if(randomNumber === 0){
        animal.src = "image/cat.png";
        animalType = "cat";
    }else{
        animal.src = "image/tiger.png";
        animalType = "tiger";
    }
}


//動物を動かす
function moveAnimal(){
    let tilt = (300 - animalY) / (150 - animalX); //当たり範囲と動物の現在地をつなぐ直線の傾き
    let x = Math.sqrt(1 / (1 + tilt * tilt)); //Xの移動方向
    let y = tilt * x; //Yの移動方向
    let speed = 3; //★★ここの値を変更すると動物の移動速度が倍速になる★★

    if(animalX < 150){
        animalX += x * speed;
        animalY += y * speed;
    }else{
        animalX -= x * speed;
        animalY -= y * speed;
    }
}


//正解発表の処理
function showAnswer(){
    //描画の準備(初期化)
    ctx.fillStyle = "#B8E2FC";
    ctx.fillRect(0, 0, w, h);
    
    //回答欄のポップアップの表示
    let answer = window.prompt("猫は何匹いるでしょうか？\n※半角数字で回答しましょう。");

    //正解・不正解の判定
    ctx.font = "30px 'ＭＳ ゴシック'";
    ctx.fillStyle = "#333333";
    if(answer == count){    
        ctx.fillText("正解！ 猫は" + count + "匹です。", 250, 100);
    }else{
        ctx.fillText("残念！ 猫は" + count + "匹です", 250, 100);
    }
    
    //正解数の猫を表示
    
    
}
