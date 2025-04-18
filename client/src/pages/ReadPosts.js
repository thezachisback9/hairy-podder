import React, { useEffect, useState } from 'react';
import { supabase } from '../client';
import Card from '../components/Card';

const ReadPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase.from('Posts').select().order('created_at', { ascending: false });
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="ReadPosts">
      {posts && posts.map((post) => <Card key={post.id} post={post} />)}
    </div>
  );
};

export default ReadPosts;