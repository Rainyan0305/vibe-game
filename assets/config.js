/* =========================================================
   誰是踩雷王？ — 活動設定檔
   用記事本或任何文字編輯器打開這個檔案就能修改。
   改完存檔後，重新整理遊戲頁面 (F5) 即可生效。
   ========================================================= */

window.GAME_CONFIG = {

  // ---------- 活動文字 ----------
  title: "誰是踩雷王？",
  subtitle: "翻開所有安全格就能抽獎，踩到地雷就出局！",

  // ---------- 盤面設定 ----------
  rows: 8,          // 列數
  cols: 8,          // 行數
  mines: 8,         // 地雷數量（數字越大越難）

  // ---------- 工作人員面板 ----------
  // 開啟方式：按 Ctrl + Shift + S，或連續點左上角 Logo 5 次
  staffPassword: "0000",

  // ---------- 音效 ----------
  // true = 開啟、false = 關閉
  sound: true,
  // 想換成自己的音效檔時，把檔案放進 assets/sounds/ 並填入路徑；
  // 留空 "" 就使用內建電子音效。
  soundFiles: {
    reveal: "",   // 翻開格子
    flag: "",     // 插旗
    boom: "",     // 踩到地雷
    win: "",      // 過關
    tick: "",     // 抽獎轉動
    prize: ""     // 抽中獎品
  },

  // ---------- Logo ----------
  logo: "assets/logo.svg",

  // ---------- 獎品清單 ----------
  // id     ：獎品代號，用來記錄已送出數量，設定好之後請不要再改
  // name   ：顯示的獎品名稱
  // desc   ：獎品說明（可留空）
  // image  ：圖片路徑，放在 assets/prizes/ 資料夾；找不到圖會改用 emoji
  // emoji  ：沒有圖片時顯示的圖示
  // weight ：權重，數字越大越容易抽到（不用加總到 100）
  // stock  ：數量上限，抽完就不會再出現；填 null 代表無限量
  //
  // 想新增獎品，就複製一整段 { ... }, 貼在下面並修改內容。
  prizes: [
    {
      id: "grand",
      name: "頭獎",
      desc: "請替換成實際獎品名稱",
      image: "assets/prizes/prize-1.svg",
      emoji: "🏆",
      weight: 5,
      stock: 3
    },
    {
      id: "second",
      name: "二獎",
      desc: "請替換成實際獎品名稱",
      image: "assets/prizes/prize-2.svg",
      emoji: "🎁",
      weight: 15,
      stock: 10
    },
    {
      id: "third",
      name: "三獎",
      desc: "請替換成實際獎品名稱",
      image: "assets/prizes/prize-3.svg",
      emoji: "🎉",
      weight: 30,
      stock: 20
    },
    {
      id: "thanks",
      name: "參加獎",
      desc: "感謝參與，小禮物一份",
      image: "assets/prizes/prize-4.svg",
      emoji: "🍬",
      weight: 50,
      stock: null
    }
  ]
};
