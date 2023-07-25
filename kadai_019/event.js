//btn, textのHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// btnのHTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', ()=> {
  //文章を書き換える
  text.textContent = 'ボタンをクリックしました';
})
