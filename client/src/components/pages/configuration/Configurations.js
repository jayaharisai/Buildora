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

  // Email configuration states
  const [emailProvider, setEmailProvider] = useState(null);
  const [emailConfig, setEmailConfig] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    smtpHost: '',
    smtpPort: '',
  });
  const [isEmailConfigured, setIsEmailConfigured] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');


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

  const emailProviders = [
    {
      id: 'gmail',
      name: 'Gmail',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg',
      smtpHost: 'smtp.gmail.com',
      smtpPort: '587',
      description: 'Connect with Gmail SMTP'
    },
    {
      id: 'outlook',
      name: 'Outlook',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg',
      smtpHost: 'smtp.office365.com',
      smtpPort: '587',
      description: 'Connect with Outlook SMTP'
    }
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

  // Email configuration handlers
  const handleProviderSelect = (provider) => {
    setEmailProvider(provider);
    setEmailConfig({
      email: '',
      password: '',
      confirmPassword: '',
      smtpHost: provider.smtpHost,
      smtpPort: provider.smtpPort,
    });
    setIsEmailConfigured(false);
    setIsEditingEmail(false);
    setEmailErrorMessage('');
  };

  const handleEmailConfigChange = (field, value) => {
    setEmailConfig(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveEmailConfig = () => {
    setEmailErrorMessage('');

    if (!emailConfig.email || !emailConfig.password || !emailConfig.confirmPassword) {
      setEmailErrorMessage('Please fill all fields');
      return;
    }

    if (emailConfig.password !== emailConfig.confirmPassword) {
      setEmailErrorMessage('Passwords do not match');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailConfig.email)) {
      setEmailErrorMessage('Please enter a valid email address');
      return;
    }

    setIsEmailConfigured(true);
    setIsEditingEmail(false);
    setEmailConfig({
      ...emailConfig,
      password: '',
      confirmPassword: ''
    });
  };

  const handleEditEmail = () => {
    setIsEditingEmail(true);
  };

  const handleRemoveEmailConfig = () => {
    setEmailProvider(null);
    setIsEmailConfigured(false);
    setIsEditingEmail(false);
    setEmailConfig({
      email: '',
      password: '',
      confirmPassword: '',
      smtpHost: '',
      smtpPort: '',
    });
    setEmailErrorMessage('');
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

        <div className='main_space2'></div>

        {/* Email Configuration Section */}
        <div>
          <div className='dora_heading1'>Email Configuration</div>
          <div className='dora_description'>Configure your email provider to send emails through the platform.</div>

          {!emailProvider ? (
            <div className='email_providers_container'>
              {emailProviders.map((provider, index) => (
                <div 
                  key={provider.id}
                  className='email_provider_card'
                  onClick={() => handleProviderSelect(provider)}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className='email_provider_logo'>
                    <img src={provider.logo} alt={provider.name} />
                  </div>
                  <div className='dora_heading2'>{provider.name}</div>
                  <div className='email_provider_description'>{provider.description}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className='email_config_form'>
              <div className='selected_provider_header'>
                <div className='selected_provider_info'>
                  <img src={emailProvider.logo} alt={emailProvider.name} className='selected_provider_logo' />
                  <div>
                    <div className='selected_provider_name'>{emailProvider.name}</div>
                    <div className='selected_provider_smtp'>{emailProvider.smtpHost}:{emailProvider.smtpPort}</div>
                  </div>
                </div>
                {!isEmailConfigured && (
                  <button className='change_provider_btn' onClick={() => setEmailProvider(null)}>
                    Change Provider
                  </button>
                )}
              </div>

              {isEmailConfigured && !isEditingEmail ? (
                <div className='configured_message'>
                  <div className='success_message'>✓ Email configured successfully for {emailConfig.email}</div>
                  <div style={{display: 'flex', gap: '10px'}}>
                    <div className='dora_secondery_btn'><button onClick={handleEditEmail}>Edit Configuration</button></div>
                    <div className='dora_secondery_btn remove_btn'><button onClick={handleRemoveEmailConfig}>Remove Configuration</button></div>
                  </div>
                </div>
              ) : (
                <div className='email_inputs_container'>
                  <div className='email_input_group'>
                    <label className='email_label'>Email Address</label>
                    <div className='input_search'>
                      <input 
                        placeholder={`Enter your ${emailProvider.name} email`}
                        type='email'
                        value={emailConfig.email}
                        onChange={(e) => handleEmailConfigChange('email', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className='email_input_group'>
                    <label className='email_label'>App Password</label>
                    <div className='input_search'>
                      <input 
                        placeholder='Enter your app-specific password'
                        type='password'
                        value={emailConfig.password}
                        onChange={(e) => handleEmailConfigChange('password', e.target.value)}
                      />
                    </div>
                    <div className='email_hint'>
                      {emailProvider.id === 'gmail' ? (
                        <span>Generate an app password from <a href='https://myaccount.google.com/apppasswords' target='_blank' rel='noopener noreferrer'>Google Account Settings</a></span>
                      ) : (
                        <span>Generate an app password from <a href='https://account.microsoft.com/security' target='_blank' rel='noopener noreferrer'>Microsoft Account Security</a></span>
                      )}
                    </div>
                  </div>

                  <div className='email_input_group'>
                    <label className='email_label'>Confirm App Password</label>
                    <div className='input_search'>
                      <input 
                        placeholder='Confirm your app-specific password'
                        type='password'
                        value={emailConfig.confirmPassword}
                        onChange={(e) => handleEmailConfigChange('confirmPassword', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className='smtp_info_container'>
                    <div className='smtp_info_item'>
                      <span className='smtp_label'>SMTP Host:</span>
                      <span className='smtp_value'>{emailConfig.smtpHost}</span>
                    </div>
                    <div className='smtp_info_item'>
                      <span className='smtp_label'>SMTP Port:</span>
                      <span className='smtp_value'>{emailConfig.smtpPort}</span>
                    </div>
                    <div className='smtp_info_item'>
                      <span className='smtp_label'>Security:</span>
                      <span className='smtp_value'>TLS/STARTTLS</span>
                    </div>
                  </div>

                  {emailErrorMessage && <div className='error_message'>{emailErrorMessage}</div>}
                  
                  <div className='dora_secondery_btn'>
                    <button onClick={handleSaveEmailConfig}>Save Email Configuration</button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

    </div>
    </div>
  )
}


export default Configurations
