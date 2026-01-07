import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../navbar/Navbar'
import "./Overview.css"


function Overview() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);


  const templatesData = [
    { id: 'template1', title: 'Commertial template', description: 'It has a nice template where the user can understand evey detail correctly', status: 'completed', date: '24th Jan 2024', image: 'https://images.pexels.com/photos/31712560/pexels-photo-31712560.jpeg' },
    { id: 'template2', title: 'Commertial template', description: 'It has a nice template where the user can understand evey detail correctly', status: 'progress', date: '24th Jan 2024', image: 'https://images.pexels.com/photos/28355031/pexels-photo-28355031.jpeg' },
    { id: 'template3', title: 'Commertial template', description: 'It has a nice template where the user can understand evey detail correctly', status: 'progress', date: '24th Jan 2024', image: 'https://images.pexels.com/photos/34289225/pexels-photo-34289225.jpeg' },
    { id: 'template4', title: 'Commertial template', description: 'It has a nice template where the user can understand evey detail correctly', status: 'completed', date: '24th Jan 2024', image: 'https://images.pexels.com/photos/33681514/pexels-photo-33681514.jpeg' },
    { id: 'template5', title: 'Commertial template', description: 'It has a nice template where the user can understand evey detail correctly', status: 'completed', date: '24th Jan 2024', image: 'https://images.pexels.com/photos/34652802/pexels-photo-34652802.jpeg' },
    { id: 'template6', title: 'Commertial template', description: 'It has a nice template where the user can understand evey detail correctly', status: 'progress', date: '24th Jan 2024', image: 'https://images.pexels.com/photos/28355031/pexels-photo-28355031.jpeg' },
    { id: 'template7', title: 'Commertial template', description: 'It has a nice template where the user can understand evey detail correctly', status: 'progress', date: '24th Jan 2024', image: 'https://images.pexels.com/photos/34289225/pexels-photo-34289225.jpeg' },
    { id: 'template8', title: 'Commertial template', description: 'It has a nice template where the user can understand evey detail correctly', status: 'progress', date: '24th Jan 2024', image: 'https://images.pexels.com/photos/28355031/pexels-photo-28355031.jpeg' },
    { id: 'template9', title: 'Commertial template', description: 'It has a nice template where the user can understand evey detail correctly', status: 'progress', date: '24th Jan 2024', image: 'https://images.pexels.com/photos/34289225/pexels-photo-34289225.jpeg' },
    { id: 'template10', title: 'Commertial template', description: 'It has a nice template where the user can understand evey detail correctly', status: 'completed', date: '24th Jan 2024', image: 'https://images.pexels.com/photos/33681514/pexels-photo-33681514.jpeg' },
    { id: 'template11', title: 'Commertial template', description: 'It has a nice template where the user can understand evey detail correctly', status: 'completed', date: '24th Jan 2024', image: 'https://images.pexels.com/photos/34652802/pexels-photo-34652802.jpeg' },
    { id: 'template12', title: 'Commertial template', description: 'It has a nice template where the user can understand evey detail correctly', status: 'progress', date: '24th Jan 2024', image: 'https://images.pexels.com/photos/28355031/pexels-photo-28355031.jpeg' },
    { id: 'template13', title: 'Commertial template', description: 'It has a nice template where the user can understand evey detail correctly', status: 'progress', date: '24th Jan 2024', image: 'https://images.pexels.com/photos/34289225/pexels-photo-34289225.jpeg' },
  ];


  useEffect(() => {
    // Initial loading simulation
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


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


  // Skeleton loader components
  const SkeletonTemplateCard = () => (
    <div className='template_card skeleton-template-card'>
      <div className='skeleton skeleton-template-image'></div>
      <div className='skeleton skeleton-template-title'></div>
      <div className='skeleton skeleton-template-desc'></div>
      <div className='deatils'>
        <div className='skeleton skeleton-status'></div>
        <div className='skeleton skeleton-date'></div>
      </div>
    </div>
  );


  if (loading) {
    return (
      <div>
        <div>
          <div><Navbar/></div>
        </div>


        <div className='dora_dashboard_container'>
          <div className='main_space'></div>
          <div>
            <div className='skeleton skeleton-page-title'></div>
            <div className='skeleton skeleton-breadcrumb'></div>
          </div>


          <div className='Project_promt_search'>
            <div className='dora_search_title'>
              <div className='skeleton skeleton-search-title'></div>
            </div>
            <div className='search_container2'>
              <div className='skeleton skeleton-search-input'></div>
              <div className='skeleton skeleton-button'></div>
            </div>
          </div>


          <div>
            <div className='skeleton skeleton-heading'></div>
            <div className='all_templates'>
              <SkeletonTemplateCard />
              <SkeletonTemplateCard />
              <SkeletonTemplateCard />
              <SkeletonTemplateCard />
              <SkeletonTemplateCard />
              <SkeletonTemplateCard />
              <SkeletonTemplateCard />
              <SkeletonTemplateCard />
            </div>
          </div>
        </div>
      </div>
    );
  }


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
                    {templatesData.map((template, index) => (
                      <div 
                        className='template_card' 
                        key={template.id} 
                        onClick={() => handleTemplateClick(template.id)}
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                          <div className='template_image'><img src={template.image} alt='template'></img></div>
                          <div className='dora_heading2'>{template.title}</div>
                          <div className='dora_description'>{template.description}</div>
                          <div className='deatils'>
                              <div className={template.status === 'completed' ? 'completed' : 'progress'}>
                                {template.status === 'completed' ? 'Completed' : 'In progress'}
                              </div>
                              <div className='dora_text'>{template.date}</div>
                          </div>
                      </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}


export default Overview
