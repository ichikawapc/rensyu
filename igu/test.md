# コレクション

- Option
- List
- Map

それぞれ「～型」と表するが、「Int型」「や「String型」とは別ジャンルの型である。
使い方としては「List - Int型」「List - List - Int型」みたいになるらしい

## Option型

- Some(x)
- None

### 作り方
```
Some(1)
```
や
```
None
```
と書く

### 使い方

```scala
// x:Option[MailAddress]
x match {
    case Some(MailAddress){
        // ある時の処理
    }
    case None{
        // ない時の処理
    }
}
```

#### 便利な使い方

```scala
// x:Option[Int]
val i = x.getOrElse(-1) // xがNoneの値をカッコ内に書く

// y:Option[String]
val j = y.getOrElse("NONE DESU !!") // yがNoneの値をカッコ内に書く
```

## List型

### 作り方
```scala
List() // 空リスト
List(1, 2, 3) // List - Int型
List("aaa", "b", "hoge") // List - String型
```
リストlと値xを使って
```
x::l
```
で1つ大きいリスト。

以下実例、、、
```scala
// 【前提】
// lはList(1, 2, 3)
// xは100
x::l
// lはList(100, 1, 2, 3)になる
```
空のリストにはどんな値も入れられるけど、一つでも入ったら同じ型しか入れられなくなる。
```scala
// 【前提】
// lはList("a", "bb")
// xは100
x::l
// これは許されない行為らしい。。。
```

### 使い方

1. 10番目を取得する
```scala
// lがリストだとすると
l(10)
```

2. リストを一つ一つ全部処理するときはforを使う
```scala
// lはトランプの山を示すリスト
for(card <- l){
    if(card == "Joker"){
        print("うれしい")
    }
}
// これでトランプの山を一枚一枚めくってジョーカーだった時に「うれしい」って出力する処理になる
```

3. リストのすべての中身を一括で処理する
```scala
// lはList(1, 2, 3)
l.map(x => x*x)
// lはList(1, 4, 9)
```

mapでやれる処理はmapでやったほうが読みやすい

forのほうができることは多いけど読みづらくなる

XXX.map(f)のようにf(関数)のような書き方を「高階関数」という。

英語では「higher order function」

<=> 反対語：(一階)関数。英語では「1st order function」

4. リストの内容をフィルタする
```scala
// lはList(Spade(13), Joker, Heart(1), Spade(1))
l.filter(card => card.isSpade())
// lはList(Spade(13), Spade(1))になる
// filterはListの数が同じか減ることしかない。増えない。
```

5. その他よく使うもの
```scala
// lはList(Spade(13), Joker, Heart(1), Spade(1))
l.take(100) // 先頭100個を取り出す
l.takeWhile(x => x == 0) // 0を見つけるまで捨てる
l.drop(100) // 先頭100個を捨てる
l.groupBy(card => cardSuite) // トランプのスートごとグルーピングする。Listの中身はMapになる。
```

## Map型

### 作り方
銀行口座を管理するとき？？
```scala
Map(
    "Igu" -> 1000000000000,
    "Ringos" -> -1000000,
    "Minami" -> 500000000000,
)
// この型はMap[String, Int]型
```
これに限らず、[String, String]型や[String, List]型など何でもできる

とりあえずMapは「KeyとValue」から成る

## 使い方
1. マップからリストに変換する
```scala
// mは、Map(
//     "Igu" -> 1000000000000,
//     "Rinos" -> -1000000,
//     "Minami" -> 500000000000,
// )
m.toList
// mは、List(
//     ("Igu" -> 1000000000000),
//     ("Ringos" -> -1000000),
//     ("Minami" -> 500000000000),
// )
// になる
```

2. マップ内をKeyで検索してValueのOption型を返す
```scala
m.get("Makkuroshippo") // Option[Int]
m.get("Bomb") match {
    case Some(b) =>
        print("ボムさん$b円持ってるってよ")
    case None(b) =>
        print("ボムさん口座開設してちょ")
}
```

