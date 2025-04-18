import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const WizardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [wizard, setWizard] = useState(null);

  useEffect(() => {
    const fetchWizard = async () => {
      const { data, error } = await supabase.from('Posts').select().eq('id', id).single();
      if (error) console.error(error);
      else setWizard(data);
    };

    fetchWizard();
  }, [id]);

  if (!wizard) return <p>Loading...</p>;

  return (
    <div className="wizard-detail">
      <h2>{wizard.name}</h2>
      <p><strong>Familiar:</strong> {wizard.familiar}</p>
      <p><strong>Knowledge:</strong> {wizard.knowledge}</p>
      <p><strong>Power:</strong> {wizard.power}</p>
      <p><em>Fun Fact:</em> This wizard was created on {new Date(wizard.created_at).toLocaleString()}</p>
      
      <button onClick={() => navigate(`/edit/${wizard.id}`)}>Edit Wizard</button>
    </div>
  );
};

export default WizardDetail;
