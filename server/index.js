const express = require('express')
const mongoose = require('mongoose')


const app = express()

app.get('/products', function(req, res) {
    res.json({'success': true})
})

const PORT = process.env.PORT || '3001'

app.listen('3001', function() {
    console.log('I am running!')
})


// あなたのMongoDB接続URI
// <password> は必ず実際のパスワードに置き換えてください
const uri = "mongodb+srv://despocampifoot:testtest@cluster0.yccebok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Mongoose または MongoClient のインスタンスを作成
// Mongoose v5.x では useNewUrlParser と useUnifiedTopology が必要です
const client = new mongoose.Mongoose(); // Mongooseを使う場合
// または const client = new MongoClient(uri, { ... }); // mongodbドライバーを使う場合

async function connectToDatabase() {
  try {
    // mongoose.connect の場合
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
      // Mongoose v5.xでは serverApi オプションは不要です
    });
    console.log("MongoDBに正常に接続しました！");

    // mongodbドライバーの MongoClient を使っている場合 (connet2mongoDB.js の方)
    // await client.connect();
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");

  } catch (err) {
    console.error("MongoDB接続エラー:", err);
    process.exit(1); // 接続に失敗した場合、プロセスを終了します
  }
}

// async関数を呼び出して接続を開始します
connectToDatabase();

// ここに他のExpress.jsやサーバーのコードが続きます
// 例：データベース接続後にサーバーを起動する場合
// connectToDatabase().then(() => {
//   // app.listen(port, () => {
//   //   console.log(`Server running on port ${port}`);
//   // });
// }).catch(err => {
//   console.error("DBエラーのためサーバーの起動に失敗しました:", err);
// });