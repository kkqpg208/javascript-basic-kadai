//btn, text, bodyのHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
const text = document.getElementById('text');
const body = document.getElementById('body');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', ()=> {
  //新しくh2要素を作成し、定数に代入する
  const text2 = document.createElement('h2');
  //作成したh2要素にテキストを追加する
  text2.textContent = 'ボタンをクリックしました';
  //body要素の末尾にh2要素を追加する
  document.querySelector('body').appendChild(text2);
  //「ボタンをクリックしてください」を消す
  text.style.display = 'none';
  
})
