import React from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const Card = ({ post }) => {
  const navigate = useNavigate();

  const deletePost = async (event) => {
    event.preventDefault();
    await supabase.from('Posts').delete().eq('id', post.id);
    window.location = '/';
  };

  return (
    <div className="Card">
      <h3>{post.name}</h3>
      <p>Familiar: {post.familiar}</p>
      <p>Knowledge: {post.knowledge}</p>
      <p>Power: {post.power}</p>
      <button onClick={() => navigate(`/edit/${post.id}`)}>EDIT</button>
      <button onClick={deletePost}>Delete</button>
      <button onClick={() => navigate(`/wizard/${post.id}`)} >DETAILS</button>
    </div>
  );
};


export default Card;
