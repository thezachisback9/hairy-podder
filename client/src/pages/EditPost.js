import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

const EditPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({ name: '', familiar: '', knowledge: '', power: '' });

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await supabase.from('Posts').select().eq('id', id).single();
      setPost(data);
    };
    fetchPost();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const updatePost = async (event) => {
    event.preventDefault();
    await supabase.from('Posts').update(post).eq('id', id);
    window.location = '/';
  };

  return (
    <div>
      <form>
        <input name="name" value={post.name} onChange={handleChange} placeholder="Name" /><br />
        <select id="familiar" name="familiar" onChange={handleChange}>
            <option value="">-- Select Familiar --</option>
            <option value="Owl">🦉 Owl</option>
            <option value="Cat">🐱 Cat</option>
            <option value="Bat">🦇 Bat</option>
            <option value="Snake">🐍 Snake</option>
            <option value="Toad">🐸 Toad</option>
            <option value="Mini Dragon">🐉 Mini Dragon</option>
        </select>
<br />
        <input name="knowledge" type="number" value={post.knowledge} onChange={handleChange} placeholder="Knowledge" /><br />
        <input name="power" type="number" value={post.power} onChange={handleChange} placeholder="Power" /><br />
        <button onClick={updatePost}>Update</button>
      </form>
    </div>
  );
};

export default EditPost;
