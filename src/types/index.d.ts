/* ユーザに関する情報 */
type User = {
  id: string;
  name: string;
  bio: string;
  iconType: string;
  categories: Category[];
  records: {
    totalAchievement: number;
    totalTodo: number;
    totalSection: number;
  };
};

/* 取り組みの項目 */
type Category = {
  id: string;
  name: string;
};

/* TODOの投稿 */
type Post = {
  id: string;
  title?: string;
  userId: string;
  data: Date;
  todoList: Todo[];
};

/* TODOの内容 */
type Todo = {
  id: string;
  content: string;
  done: boolean;
  memo: string;
};

/* タイムスタンプ */
type Section = {
  id: string;
  userId: string;
  categoryId: string;
  startingTime: Date; // 開始時刻
  endingTime: Date | null; // 終了時刻
  isEdited: boolean; // 自身で編集したものかどうか
};
