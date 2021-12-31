import { supabase } from 'lib/apis/supabase';
import { useEffect } from 'react';

export const PostPage = () => {
  useEffect(() => {
    void (async () => {
      await getData();
    })();
  }, []);

  const getData = async () => {
    const { data, error } = await supabase.from('test-table').select();
    console.log('data', data, error);
  };

  const postData = async () => {
    const { data, error } = await supabase.from('test-table').insert({
      content: 'test',
    });
    console.log('data', data, error);
  };

  return (
    <div>
      <h1>Post</h1>
      <label htmlFor='title'>タイトル</label>
      <input id='title' type='text' />
      <label htmlFor='todo'>TODO</label>
      <input type='text' />
      <button onClick={postData}>投稿</button>
    </div>
  );
};
