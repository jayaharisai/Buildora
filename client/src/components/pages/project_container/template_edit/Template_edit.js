import React, { useState, useEffect } from 'react'
import Navbar from '../../navbar/Navbar'
import "./Template_edit.css"


function Template_edit() {
  const [htmlContent, setHtmlContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [instructions, setInstructions] = useState('');
  const [prdFile, setPrdFile] = useState(null);
  const [logoFile, setLogoFile] = useState(null);
  const [brandColors, setBrandColors] = useState([]);
  const [currentColor, setCurrentColor] = useState('#000000');
  const [showPopup, setShowPopup] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [activeTab, setActiveTab] = useState('docs');
  
  // Test inputs state
  const [testInputs, setTestInputs] = useState({
    message: '',
    link: '',
    url: '',
    userName: '',
    email: ''
  });


  useEffect(() => {
    fetch('/mail.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('File not found');
        }
        return response.text();
      })
      .then(data => {
        console.log('HTML loaded successfully');
        setHtmlContent(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading HTML:', error);
        setLoading(false);
      });
  }, []);


  const handlePrdUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPrdFile(file);
    }
  };


  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/svg+xml')) {
      setLogoFile(file);
    } else {
      alert('Please upload only JPG, PNG, or SVG files');
    }
  };


  const addColor = () => {
    if (!brandColors.includes(currentColor)) {
      setBrandColors([...brandColors, currentColor]);
    }
  };


  const removeColor = (colorToRemove) => {
    setBrandColors(brandColors.filter(color => color !== colorToRemove));
  };


  const handleModify = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 4000);
  };

  const handleTestInputChange = (field, value) => {
    setTestInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleTestAPI = () => {
    console.log('Testing API with inputs:', testInputs);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };


  return (
    <div>
        <div>
            <div><Navbar/></div>
        </div>


        {showPopup && (
          <div className='generation_popup'>
            <div className='popup_content'>
              <div className='loading_spinner'></div>
              <div className='popup_title'>Generating and Modifying Design</div>
              <div className='popup_text'>Your template is being customized, please wait...</div>
            </div>
          </div>
        )}

        {/* Drawer Component */}
        {showDrawer && <div className='drawer_backdrop' onClick={() => setShowDrawer(false)}></div>}
        <div className={`api_drawer ${showDrawer ? 'open' : ''}`}>
          <div className='drawer_header'>
            <div className='drawer_title'>API Documentation</div>
            <button className='drawer_close' onClick={() => setShowDrawer(false)}>×</button>
          </div>

          <div className='drawer_tabs'>
            <button 
              className={`drawer_tab ${activeTab === 'docs' ? 'active' : ''}`}
              onClick={() => setActiveTab('docs')}
            >
              Documentation
            </button>
            <button 
              className={`drawer_tab ${activeTab === 'test' ? 'active' : ''}`}
              onClick={() => setActiveTab('test')}
            >
              Test API
            </button>
          </div>

          <div className='drawer_content'>
            {activeTab === 'docs' ? (
              <div className='docs_section'>
                <div className='docs_language'>
                  <div className='language_title'>Python</div>
                  <div className='code_block'>
                    <pre>{`import requests

url = "https://api.yourservice.com/v1/template"

payload = {
    "template_id": "template1",
    "message": "Welcome to our platform!",
    "link": "https://example.com/verify",
    "url": "https://example.com",
    "user_name": "John Doe",
    "email": "john@example.com"
}

headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`}</pre>
                    <button className='copy_btn' onClick={() => copyToClipboard(`import requests

url = "https://api.yourservice.com/v1/template"

payload = {
    "template_id": "template1",
    "message": "Welcome to our platform!",
    "link": "https://example.com/verify",
    "url": "https://example.com",
    "user_name": "John Doe",
    "email": "john@example.com"
}

headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`)}>
                      Copy
                    </button>
                  </div>
                </div>

                <div className='docs_language'>
                  <div className='language_title'>JavaScript</div>
                  <div className='code_block'>
                    <pre>{`const url = "https://api.yourservice.com/v1/template";

const payload = {
    template_id: "template1",
    message: "Welcome to our platform!",
    link: "https://example.com/verify",
    url: "https://example.com",
    user_name: "John Doe",
    email: "john@example.com"
};

fetch(url, {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
})
.then(response => response.json())
.then(data => console.log(data));`}</pre>
                    <button className='copy_btn' onClick={() => copyToClipboard(`const url = "https://api.yourservice.com/v1/template";

const payload = {
    template_id: "template1",
    message: "Welcome to our platform!",
    link: "https://example.com/verify",
    url: "https://example.com",
    user_name: "John Doe",
    email: "john@example.com"
};

fetch(url, {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
})
.then(response => response.json())
.then(data => console.log(data));`)}>
                      Copy
                    </button>
                  </div>
                </div>

                <div className='docs_language'>
                  <div className='language_title'>cURL</div>
                  <div className='code_block'>
                    <pre>{`curl -X POST https://api.yourservice.com/v1/template \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "template_id": "template1",
    "message": "Welcome to our platform!",
    "link": "https://example.com/verify",
    "url": "https://example.com",
    "user_name": "John Doe",
    "email": "john@example.com"
  }'`}</pre>
                    <button className='copy_btn' onClick={() => copyToClipboard(`curl -X POST https://api.yourservice.com/v1/template \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "template_id": "template1",
    "message": "Welcome to our platform!",
    "link": "https://example.com/verify",
    "url": "https://example.com",
    "user_name": "John Doe",
    "email": "john@example.com"
  }'`)}>
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className='test_section'>
                <div className='test_description'>
                  Test your API with sample inputs below
                </div>

                <div className='test_input_group'>
                  <label className='test_label'>Message</label>
                  <input 
                    type='text'
                    className='test_input'
                    placeholder='Enter message content'
                    value={testInputs.message}
                    onChange={(e) => handleTestInputChange('message', e.target.value)}
                  />
                </div>

                <div className='test_input_group'>
                  <label className='test_label'>Link</label>
                  <input 
                    type='text'
                    className='test_input'
                    placeholder='https://example.com/verify'
                    value={testInputs.link}
                    onChange={(e) => handleTestInputChange('link', e.target.value)}
                  />
                </div>

                <div className='test_input_group'>
                  <label className='test_label'>URL</label>
                  <input 
                    type='text'
                    className='test_input'
                    placeholder='https://example.com'
                    value={testInputs.url}
                    onChange={(e) => handleTestInputChange('url', e.target.value)}
                  />
                </div>

                <div className='test_input_group'>
                  <label className='test_label'>User Name</label>
                  <input 
                    type='text'
                    className='test_input'
                    placeholder='John Doe'
                    value={testInputs.userName}
                    onChange={(e) => handleTestInputChange('userName', e.target.value)}
                  />
                </div>

                <div className='test_input_group'>
                  <label className='test_label'>Email</label>
                  <input 
                    type='email'
                    className='test_input'
                    placeholder='john@example.com'
                    value={testInputs.email}
                    onChange={(e) => handleTestInputChange('email', e.target.value)}
                  />
                </div>

                <button className='test_api_btn' onClick={handleTestAPI}>
                  Test API Call
                </button>

                <div className='sample_response'>
                  <div className='response_title'>Sample Response</div>
                  <div className='code_block'>
                    <pre>{`{
  "status": "success",
  "message": "Template generated successfully",
  "template_id": "template1",
  "timestamp": "2026-01-07T23:08:00Z"
}`}</pre>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>


        <div className='dora_dashboard_container'>
            <div className='main_space'></div>
            <div>
                <div className='dora_title'>template_edit</div>
                <div className='dora_description'>It has a nice template where the user can understand evey detail correctly</div>
            </div>
            <div className='all_sessions'>
                <div className='sessions_lables'>
                    <div className='sessions_content'>
                        <div className='label'>Sessions</div>
                        <ul>
                            <li className='session_active'>Activate account</li>
                            <li>Successfully Register</li>
                            <li>Forgot Password</li>
                            <li>Reset Successfull</li>
                            <li>Alert</li>
                        </ul>
                    </div>
                    <div className='documentation' onClick={() => setShowDrawer(true)}>API Documentation</div>
                </div>
                <div className='session_overview'>
                  {loading ? (
                    <p>Loading template...</p>
                  ) : (
                    <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
                  )}
                </div>
                <div className='session_features'>
                    <div className='label'>Configuration</div>
                    
                    <div className='config_section'>
                        <div className='config_label'>Instructions</div>
                        <div className='input_search template_in'>
                          <input 
                            placeholder='More Instructions'
                            value={instructions}
                            onChange={(e) => setInstructions(e.target.value)}
                          />
                        </div>
                    </div>


                    <div className='config_section'>
                        <div className='config_label'>Upload PRD/Instructions File</div>
                        <div className='file_upload'>
                          <input 
                            type='file' 
                            id='prd-upload'
                            accept='.pdf,.doc,.docx,.txt'
                            onChange={handlePrdUpload}
                            style={{display: 'none'}}
                          />
                          <label htmlFor='prd-upload' className='upload_btn'>
                            <i className="bi bi-file-earmark-arrow-up"></i> Choose File
                          </label>
                          {prdFile && <span className='file_name'>{prdFile.name}</span>}
                        </div>
                    </div>


                    <div className='config_section'>
                        <div className='config_label'>Upload Logo</div>
                        <div className='file_upload'>
                          <input 
                            type='file' 
                            id='logo-upload'
                            accept='image/jpeg,image/png,image/svg+xml'
                            onChange={handleLogoUpload}
                            style={{display: 'none'}}
                          />
                          <label htmlFor='logo-upload' className='upload_btn'>
                            <i className="bi bi-image"></i> Upload Logo
                          </label>
                          {logoFile && <span className='file_name'>{logoFile.name}</span>}
                        </div>
                    </div>


                    <div className='config_section'>
                        <div className='config_label'>Brand Colors</div>
                        <div className='color_picker_container'>
                          <input 
                            type='color' 
                            value={currentColor}
                            onChange={(e) => setCurrentColor(e.target.value)}
                            className='color_input'
                          />
                          <button onClick={addColor} className='add_color_btn'>Add Color</button>
                        </div>
                        <div className='selected_colors'>
                          {brandColors.map((color, index) => (
                            <div key={index} className='color_chip' style={{backgroundColor: color}}>
                              <span className='remove_color' onClick={() => removeColor(color)}>×</span>
                            </div>
                          ))}
                        </div>
                    </div>


                    <div className='dora_secondery_btn'>
                      <button onClick={handleModify}>Let's modify/Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Template_edit
