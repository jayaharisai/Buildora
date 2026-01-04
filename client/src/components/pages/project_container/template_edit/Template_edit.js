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
                    <div className='documentation'>API Documentation</div>
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
