export const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <button>今日のTODOを登録する</button>
      <button>記録を見る</button>
      <button>項目を追加</button>
      <select>
        <option value='0'>プログラミング</option>
        <option value='1'>運動</option>
      </select>
      <button>取り組む</button>
      <button>終わる</button>
    </div>
  );
};
