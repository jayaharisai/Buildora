import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../navbar/Navbar'
import "./Overview.css"

function Overview() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleGenerate = () => {
    if (searchText.trim()) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 4000);
    }
  };

  const handleTemplateClick = (templateId) => {
    navigate('/template_edit', { state: { templateId } });
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
              <div className='popup_title'>Generating Your Template</div>
              <div className='popup_text'>Your template is being prepared, please stay...</div>
            </div>
          </div>
        )}

        <div className='dora_dashboard_container'>
            <div className='main_space'></div>
            <div>
                <div className='dora_title'>mlangles mlops</div>
                <div className='dora_description'>Projects | mlangles mlops</div>
            </div>

            <div className='Project_promt_search'>
                <div className='dora_search_title'>
                    <div className='typing_text'>What do u want mail now?</div>
                </div>
                <div className='search_container2'>
                    <div className='input_search'>
                        <input 
                          placeholder='Type something you want..'
                          value={searchText}
                          onChange={(e) => setSearchText(e.target.value)}
                        ></input>
                    </div>
                    <div className='dora_secondery_btn'>
                      <button 
                        onClick={handleGenerate}
                        disabled={!searchText.trim()}
                        className={!searchText.trim() ? 'disabled' : ''}
                      >
                        Generate
                      </button>
                    </div>
                </div>
            </div>

            <div>
                <div className='dora_heading1'>Generated Templates</div>
                <div className='all_templates'>
                    <div className='template_card' onClick={() => handleTemplateClick('template1')}>
                        <div className='template_image'><img src='https://images.pexels.com/photos/31712560/pexels-photo-31712560.jpeg' alt='template'></img></div>
                        <div className='dora_heading2'>Commertial template</div>
                        <div className='dora_description'>It has a nice template where the user can understand evey detail correctly</div>
                        <div className='deatils'>
                            <div className='completed'>Completed</div>
                            <div className='dora_text'>24th Jan 2024</div>
                        </div>
                    </div>
                    <div className='template_card' onClick={() => handleTemplateClick('template2')}>
                        <div className='template_image'><img src='https://images.pexels.com/photos/28355031/pexels-photo-28355031.jpeg' alt='template'></img></div>
                        <div className='dora_heading2'>Commertial template</div>
                        <div className='dora_description'>It has a nice template where the user can understand evey detail correctly</div>
                        <div className='deatils'>
                            <div className='progress'>In progress</div>
                            <div className='dora_text'>24th Jan 2024</div>
                        </div>
                    </div>
                    <div className='template_card' onClick={() => handleTemplateClick('template3')}>
                        <div className='template_image'><img src='https://images.pexels.com/photos/34289225/pexels-photo-34289225.jpeg' alt='template'></img></div>
                        <div className='dora_heading2'>Commertial template</div>
                        <div className='dora_description'>It has a nice template where the user can understand evey detail correctly</div>
                        <div className='deatils'>
                            <div className='progress'>In progress</div>
                            <div className='dora_text'>24th Jan 2024</div>
                        </div>
                    </div>
                    <div className='template_card' onClick={() => handleTemplateClick('template4')}>
                        <div className='template_image'><img src='https://images.pexels.com/photos/33681514/pexels-photo-33681514.jpeg' alt='template'></img></div>
                        <div className='dora_heading2'>Commertial template</div>
                        <div className='dora_description'>It has a nice template where the user can understand evey detail correctly</div>
                        <div className='deatils'>
                            <div className='completed'>Completed</div>
                            <div className='dora_text'>24th Jan 2024</div>
                        </div>
                    </div>
                    <div className='template_card' onClick={() => handleTemplateClick('template5')}>
                        <div className='template_image'><img src='https://images.pexels.com/photos/34652802/pexels-photo-34652802.jpeg' alt='template'></img></div>
                        <div className='dora_heading2'>Commertial template</div>
                        <div className='dora_description'>It has a nice template where the user can understand evey detail correctly</div>
                        <div className='deatils'>
                            <div className='completed'>Completed</div>
                            <div className='dora_text'>24th Jan 2024</div>
                        </div>
                    </div>
                    <div className='template_card' onClick={() => handleTemplateClick('template6')}>
                        <div className='template_image'><img src='https://images.pexels.com/photos/28355031/pexels-photo-28355031.jpeg' alt='template'></img></div>
                        <div className='dora_heading2'>Commertial template</div>
                        <div className='dora_description'>It has a nice template where the user can understand evey detail correctly</div>
                        <div className='deatils'>
                            <div className='progress'>In progress</div>
                            <div className='dora_text'>24th Jan 2024</div>
                        </div>
                    </div>
                    <div className='template_card' onClick={() => handleTemplateClick('template7')}>
                        <div className='template_image'><img src='https://images.pexels.com/photos/34289225/pexels-photo-34289225.jpeg' alt='template'></img></div>
                        <div className='dora_heading2'>Commertial template</div>
                        <div className='dora_description'>It has a nice template where the user can understand evey detail correctly</div>
                        <div className='deatils'>
                            <div className='progress'>In progress</div>
                            <div className='dora_text'>24th Jan 2024</div>
                        </div>
                    </div>
                    <div className='template_card' onClick={() => handleTemplateClick('template8')}>
                        <div className='template_image'><img src='https://images.pexels.com/photos/28355031/pexels-photo-28355031.jpeg' alt='template'></img></div>
                        <div className='dora_heading2'>Commertial template</div>
                        <div className='dora_description'>It has a nice template where the user can understand evey detail correctly</div>
                        <div className='deatils'>
                            <div className='progress'>In progress</div>
                            <div className='dora_text'>24th Jan 2024</div>
                        </div>
                    </div>
                    <div className='template_card' onClick={() => handleTemplateClick('template9')}>
                        <div className='template_image'><img src='https://images.pexels.com/photos/34289225/pexels-photo-34289225.jpeg' alt='template'></img></div>
                        <div className='dora_heading2'>Commertial template</div>
                        <div className='dora_description'>It has a nice template where the user can understand evey detail correctly</div>
                        <div className='deatils'>
                            <div className='progress'>In progress</div>
                            <div className='dora_text'>24th Jan 2024</div>
                        </div>
                    </div>
                    <div className='template_card' onClick={() => handleTemplateClick('template10')}>
                        <div className='template_image'><img src='https://images.pexels.com/photos/33681514/pexels-photo-33681514.jpeg' alt='template'></img></div>
                        <div className='dora_heading2'>Commertial template</div>
                        <div className='dora_description'>It has a nice template where the user can understand evey detail correctly</div>
                        <div className='deatils'>
                            <div className='completed'>Completed</div>
                            <div className='dora_text'>24th Jan 2024</div>
                        </div>
                    </div>
                    <div className='template_card' onClick={() => handleTemplateClick('template11')}>
                        <div className='template_image'><img src='https://images.pexels.com/photos/34652802/pexels-photo-34652802.jpeg' alt='template'></img></div>
                        <div className='dora_heading2'>Commertial template</div>
                        <div className='dora_description'>It has a nice template where the user can understand evey detail correctly</div>
                        <div className='deatils'>
                            <div className='completed'>Completed</div>
                            <div className='dora_text'>24th Jan 2024</div>
                        </div>
                    </div>
                    <div className='template_card' onClick={() => handleTemplateClick('template12')}>
                        <div className='template_image'><img src='https://images.pexels.com/photos/28355031/pexels-photo-28355031.jpeg' alt='template'></img></div>
                        <div className='dora_heading2'>Commertial template</div>
                        <div className='dora_description'>It has a nice template where the user can understand evey detail correctly</div>
                        <div className='deatils'>
                            <div className='progress'>In progress</div>
                            <div className='dora_text'>24th Jan 2024</div>
                        </div>
                    </div>
                    <div className='template_card' onClick={() => handleTemplateClick('template13')}>
                        <div className='template_image'><img src='https://images.pexels.com/photos/34289225/pexels-photo-34289225.jpeg' alt='template'></img></div>
                        <div className='dora_heading2'>Commertial template</div>
                        <div className='dora_description'>It has a nice template where the user can understand evey detail correctly</div>
                        <div className='deatils'>
                            <div className='progress'>In progress</div>
                            <div className='dora_text'>24th Jan 2024</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Overview
