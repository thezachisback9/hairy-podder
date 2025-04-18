import React, { useState } from 'react';
import { supabase } from '../client';
import './CreatePost.css';

const CreatePost = () => {
  const [post, setPost] = useState({ name: '', familiar: '', knowledge: '', power: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const createPost = async (event) => {
    event.preventDefault();
  
    console.log("Submitting post:", post);
  
    const { data, error } = await supabase
      .from('Posts')
      .insert({
        name: post.name,
        familiar: post.familiar,
        knowledge: Number(post.knowledge),
        power: Number(post.power),
      })
      .select();
  
    console.log("DATA:", data);
    console.log("ERROR:", error);
  
    window.location = "/";
  };
  
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label><br />
        <input type="text" id="name" name="name" onChange={handleChange} /><br /><br />

        <label htmlFor="familiar">Familiar</label><br />
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


        <label htmlFor="knowledge">Knowledge</label><br />
        <input type="number" id="knowledge" name="knowledge" onChange={handleChange} /><br /><br />

        <label htmlFor="power">Power</label><br />
        <input type="number" id="power" name="power" onChange={handleChange} /><br /><br />

        <input type="submit" value="Create Wizard" onClick={createPost} />
      </form>
    </div>
  );
};

export default CreatePost;