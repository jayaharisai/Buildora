import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import "./Projects.css"


function Projects() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  
  const projectsData = [
    {
      id: '7b6e9b0c-2e7c-4f5a-9d3b-8c1f2e9a4d71',
      name: 'mlangles mlops',
      count: 34,
      cost: '67$',
      createdAt: '24th Feb 2024',
      recentlyUsed: '25th Feb 2026'
    },
    {
      id: '3a8f5d1e-9c4b-6e2a-7f1d-4b9c8e5a3f12',
      name: 'reddress chat',
      count: 125,
      cost: '234$',
      createdAt: '10th Jan 2025',
      recentlyUsed: '3rd Jan 2026'
    },
    {
      id: '9d2c7e4f-5a1b-8c3d-2e6f-1a9b4c7d8e3f',
      name: 'fastapi init',
      count: 89,
      cost: '156$',
      createdAt: '15th Mar 2025',
      recentlyUsed: '2nd Jan 2026'
    },
    {
      id: '4e8a1f6d-3b9c-7e2a-5d1f-8c4b9e6a2d71',
      name: 'data labeling platform',
      count: 256,
      cost: '512$',
      createdAt: '5th Apr 2025',
      recentlyUsed: '4th Jan 2026'
    },
    {
      id: '6f1d3c8e-2a7b-9e4c-1f5d-3b8a6c9e4f21',
      name: 'model deployment service',
      count: 178,
      cost: '389$',
      createdAt: '20th May 2025',
      recentlyUsed: '1st Jan 2026'
    },
    {
      id: '8c3e6f2a-4d1b-7c9e-5a2f-6d8b3e1a9c4f',
      name: 'prompt governance',
      count: 67,
      cost: '145$',
      createdAt: '12th Jun 2025',
      recentlyUsed: '30th Dec 2025'
    }
  ];

  useEffect(() => {
    // Initial loading simulation
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const filteredProjects = projectsData.filter(project =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProjectClick = (projectId) => {
    navigate('/overview', { state: { projectId } });
  };

  // Skeleton loader components
  const SkeletonStats = () => (
    <div className='dora_projects_analysis'>
      <div>
        <div className='skeleton skeleton-stat-label'></div>
        <div className='skeleton skeleton-stat-value'></div>
      </div>
      <div>
        <div className='skeleton skeleton-stat-label'></div>
        <div className='skeleton skeleton-stat-value'></div>
      </div>
      <div>
        <div className='skeleton skeleton-stat-label'></div>
        <div className='skeleton skeleton-stat-value'></div>
      </div>
    </div>
  );

  const SkeletonTableRow = () => (
    <ul className='table_container_col skeleton-table-row'>
      <li className='col0'><div className='skeleton skeleton-checkbox'></div></li>
      <li className='col1'><div className='skeleton skeleton-text-long'></div></li>
      <li className='col2'><div className='skeleton skeleton-text-medium'></div></li>
      <li className='col3'><div className='skeleton skeleton-text-short'></div></li>
      <li className='col4'><div className='skeleton skeleton-text-short'></div></li>
      <li className='col5'><div className='skeleton skeleton-text-medium'></div></li>
      <li className='col6'><div className='skeleton skeleton-text-medium'></div></li>
      <li className='col7'><div className='skeleton skeleton-icon'></div></li>
    </ul>
  );

  if (loading) {
    return (
      <div className='body'>
        <div>
          <div>
            <div><Navbar/></div>
          </div>
          <div className='main_space'></div>
          <div className='dora_dashboard_container'>
            <div>
              <div className='skeleton skeleton-page-title'></div>
              <div className='skeleton skeleton-description'></div>
            </div>
            
            <SkeletonStats />
            
            <div className='main_space2'></div>

            <div>
              <div>
                <div className='skeleton skeleton-heading'></div>
              </div>
              <div className='project_options'>
                <div className='skeleton skeleton-search'></div>
                <div className='skeleton skeleton-button'></div>
              </div>
              <div className='table'>
                <ul className='table_container'>
                  <li className='col0'><div className='skeleton skeleton-checkbox'></div></li>
                  <li className='col1 c'><div className='skeleton skeleton-text-short'></div></li>
                  <li className='col2'><div className='skeleton skeleton-text-short'></div></li>
                  <li className='col3'><div className='skeleton skeleton-text-short'></div></li>
                  <li className='col4'><div className='skeleton skeleton-text-short'></div></li>
                  <li className='col5'><div className='skeleton skeleton-text-short'></div></li>
                  <li className='col6'><div className='skeleton skeleton-text-short'></div></li>
                  <li className='col7'></li>
                </ul>
                <SkeletonTableRow />
                <SkeletonTableRow />
                <SkeletonTableRow />
                <SkeletonTableRow />
                <SkeletonTableRow />
                <SkeletonTableRow />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='body'>
        <div>
            <div>
                <div><Navbar/></div>
            </div>
            <div className='main_space'></div>
            <div className='dora_dashboard_container'>
                <div>
                    <div className='dora_title'>Projects</div>
                    <div className='dora_description'>This is the project page where you can manage all of your projects.</div>
                </div>
                <div className='dora_projects_analysis'>
                    <div>
                        <div className='dora_project_label'>Tokens Input</div>
                        <div className='input_progress'>234K</div>
                    </div>
                    <div>
                        <div className='dora_project_label'>Tokens Output</div>
                        <div className='output_progress'>786K</div>
                    </div>
                    <div>
                        <div className='dora_project_label'>Total Cost</div>
                        <div className='total_progress'>345$</div>
                    </div >
                </div>
                <div className='main_space2'></div>

                <div>
                    <div>
                        <div className='dora_heading1'>My Projects</div>
                    </div>
                    <div className='project_options'>
                        <div className='input_search'>
                          <input 
                            placeholder='Search Project' 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                        </div>
                        <div className='dora_secondery_btn'><button>+ New Project</button></div>
                    </div>
                    <div className='table'>
                        <ul className='table_container'>
                            <li className='col0'><input type='checkbox'></input></li>
                            <li className='col1 c'>Project Id</li>
                            <li className='col2'>Project Name</li>
                            <li className='col3'>Count</li>
                            <li className='col4'>Cost</li>
                            <li className='col5'>Created At</li>
                            <li className='col6'>Recently used</li>
                            <li className='col7'></li>
                        </ul>
                        {filteredProjects.map((project, index) => (
                          <ul className='table_container_col' key={project.id} style={{animationDelay: `${index * 0.1}s`}}>
                              <li className='col0'><input type='checkbox'></input></li>
                              <li className='col1' onClick={() => handleProjectClick(project.id)}>{project.id}</li>
                              <li className='col2'>{project.name}</li>
                              <li className='col3'>{project.count}</li>
                              <li className='col4'>{project.cost}</li>
                              <li className='col5'>{project.createdAt}</li>
                              <li className='col6'>{project.recentlyUsed}</li>
                              <li className='col7'><i className="bi bi-trash"></i></li>
                          </ul>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
