import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import "./Configurations.css"

function Configurations() {
  const [apiKey, setApiKey] = useState('');
  const [confirmApiKey, setConfirmApiKey] = useState('');
  const [isConfigured, setIsConfigured] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedModel, setSelectedModel] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const models = [
    { id: 1, name: 'GPT-3.5 Turbo', logo: 'https://us1.discourse-cdn.com/openai1/original/4X/3/2/1/321a1ba297482d3d4060d114860de1aa5610f8a9.png' },
    { id: 2, name: 'GPT-4', logo: 'https://us1.discourse-cdn.com/openai1/original/4X/3/2/1/321a1ba297482d3d4060d114860de1aa5610f8a9.png' },
    { id: 3, name: 'GPT-4 Turbo', logo: 'https://us1.discourse-cdn.com/openai1/original/4X/3/2/1/321a1ba297482d3d4060d114860de1aa5610f8a9.png' },
    { id: 4, name: 'GPT-4o', logo: 'https://us1.discourse-cdn.com/openai1/original/4X/3/2/1/321a1ba297482d3d4060d114860de1aa5610f8a9.png' },
    { id: 5, name: 'GPT-4o Mini', logo: 'https://us1.discourse-cdn.com/openai1/original/4X/3/2/1/321a1ba297482d3d4060d114860de1aa5610f8a9.png' },
    { id: 6, name: 'o1-preview', logo: 'https://us1.discourse-cdn.com/openai1/original/4X/3/2/1/321a1ba297482d3d4060d114860de1aa5610f8a9.png' },
    { id: 7, name: 'o1-mini', logo: 'https://us1.discourse-cdn.com/openai1/original/4X/3/2/1/321a1ba297482d3d4060d114860de1aa5610f8a9.png' },
    { id: 8, name: 'DALL-E 3', logo: 'https://us1.discourse-cdn.com/openai1/original/4X/3/2/1/321a1ba297482d3d4060d114860de1aa5610f8a9.png' },
    { id: 9, name: 'Whisper', logo: 'https://us1.discourse-cdn.com/openai1/original/4X/3/2/1/321a1ba297482d3d4060d114860de1aa5610f8a9.png' },
    { id: 10, name: 'Text Embedding', logo: 'https://us1.discourse-cdn.com/openai1/original/4X/3/2/1/321a1ba297482d3d4060d114860de1aa5610f8a9.png' }
  ];

  const handleSaveKey = () => {
    setErrorMessage('');
    
    if (!apiKey || !confirmApiKey) {
      setErrorMessage('Please fill both fields');
      return;
    }
    
    if (apiKey !== confirmApiKey) {
      setErrorMessage('API keys do not match');
      return;
    }
    
    // Save logic here
    setIsConfigured(true);
    setIsEditing(false);
    setApiKey('');
    setConfirmApiKey('');
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleRemoveCredentials = () => {
    setIsConfigured(false);
    setIsEditing(false);
    setApiKey('');
    setConfirmApiKey('');
    setSelectedModel(null);
    setErrorMessage('');
  };

  const handleModelClick = (modelId) => {
    if (isConfigured) {
      setSelectedModel(modelId);
    }
  };

  return (
    <div>
        <div>
            <div><Navbar/></div>
        </div>
        <div className='dora_dashboard_container'>
        <div className='main_space'></div>
        <div>
            <div className='dora_title'>Settings</div>
            <div className='dora_description'>This system allows you to various system level configuration.</div>
        </div>

        <div>
          <div className='dora_heading1'>OpenAI Key</div>
          
          {isConfigured && !isEditing ? (
            <div className='configured_message'>
              <div className='success_message'>✓ API Key configured successfully</div>
              <div style={{display: 'flex', gap: '10px'}}>
                <div className='dora_secondery_btn'><button onClick={handleEdit}>Edit Key</button></div>
                <div className='dora_secondery_btn remove_btn'><button onClick={handleRemoveCredentials}>Remove Credentials</button></div>
              </div>
            </div>
          ) : (
            <div>
              <div className='input_search'>
                <input 
                  placeholder='Paste your openai key' 
                  type='password'
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
              </div>
              <div className='input_search'>
                <input 
                  placeholder='Repaste your openai key to confirm' 
                  type='password'
                  value={confirmApiKey}
                  onChange={(e) => setConfirmApiKey(e.target.value)}
                />
              </div>
              {errorMessage && <div className='error_message'>{errorMessage}</div>}
              <div className='dora_secondery_btn'><button onClick={handleSaveKey}>Encrypt/Save Key</button></div>
            </div>
          )}
        </div>

        <div className='main_space2'></div>

        {isConfigured && (
          <div className='models_section'>
            <div className='dora_heading1'>OpenAI Models</div>
            <div className='dora_description'>Select the best model and use them in the work flow.</div>
            <div className='llm_card_container'>
              {models.map((model, index) => (
                <div 
                  key={model.id} 
                  className={`llm_card ${selectedModel === model.id ? 'active_card' : ''}`}
                  onClick={() => handleModelClick(model.id)}
                  style={{animationDelay: `${index * 0.05}s`}}
                >
                  <div className='llm_card_logo_img'>
                    <img alt={model.name} src={model.logo} />
                  </div>
                  <div className='dora_heading2'>{model.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}
    </div>
    </div>
  )
}

export default Configurations
