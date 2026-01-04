import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import "./Dashboard.css"

function Dashboard() {
  const navigate = useNavigate();

  const recentActivity = [
    { id: 1, type: 'Template', name: 'Commercial Email', status: 'Completed', time: '2 hours ago' },
    { id: 2, type: 'Project', name: 'mlangles mlops', status: 'Updated', time: '5 hours ago' },
    { id: 3, type: 'Template', name: 'Password Reset', status: 'In Progress', time: '1 day ago' },
    { id: 4, type: 'Project', name: 'reddress chat', status: 'Deployed', time: '2 days ago' }
  ];

  const quickStats = [
    { label: 'Active Projects', value: '6', change: '+12%', color: '#000000' },
    { label: 'Templates Generated', value: '234', change: '+18%', color: '#f6d467' },
    { label: 'API Calls', value: '45.2K', change: '+24%', color: '#4F46E5' },
    { label: 'Success Rate', value: '98.5%', change: '+2%', color: '#10B981' }
  ];

  return (
    <div>
      <div><Navbar/></div>
      <div className='dora_dashboard_container'>
          <div className='main_space'></div>
          
          <div className='dashboard_header'>
              <div>
                  <div className='dora_title'>Welcome back, Jay</div>
                  <div className='dora_description'>Here's what's happening with your projects today</div>
              </div>
              <div className='dora_secondery_btn'>
                  <button onClick={() => navigate('/projects')}>View All Projects</button>
              </div>
          </div>

          <div className='stats_grid'>
              {quickStats.map((stat, index) => (
                  <div className='stat_card' key={index} style={{animationDelay: `${index * 0.1}s`}}>
                      <div className='stat_header'>
                          <div className='stat_label'>{stat.label}</div>
                          <div className='stat_change positive'>{stat.change}</div>
                      </div>
                      <div className='stat_value' style={{color: stat.color}}>{stat.value}</div>
                      <div className='stat_bar'>
                          <div className='stat_bar_fill' style={{
                              background: `linear-gradient(90deg, ${stat.color} 0%, ${stat.color}80 100%)`,
                              width: '75%'
                          }}></div>
                      </div>
                  </div>
              ))}
          </div>

          <div className='dashboard_content'>
              <div className='chart_section'>
                  <div className='section_card'>
                      <div className='section_header'>
                          <div className='section_title'>Usage Analytics</div>
                          <div className='section_subtitle'>Last 7 days</div>
                      </div>
                      <div className='chart_container'>
                          <div className='gradient_chart'>
                              <div className='chart_bar' style={{height: '60%'}}>
                                  <div className='bar_fill gradient_1'></div>
                              </div>
                              <div className='chart_bar' style={{height: '75%'}}>
                                  <div className='bar_fill gradient_2'></div>
                              </div>
                              <div className='chart_bar' style={{height: '55%'}}>
                                  <div className='bar_fill gradient_3'></div>
                              </div>
                              <div className='chart_bar' style={{height: '85%'}}>
                                  <div className='bar_fill gradient_4'></div>
                              </div>
                              <div className='chart_bar' style={{height: '70%'}}>
                                  <div className='bar_fill gradient_5'></div>
                              </div>
                              <div className='chart_bar' style={{height: '90%'}}>
                                  <div className='bar_fill gradient_6'></div>
                              </div>
                              <div className='chart_bar' style={{height: '95%'}}>
                                  <div className='bar_fill gradient_7'></div>
                              </div>
                          </div>
                          <div className='chart_labels'>
                              <span>Mon</span>
                              <span>Tue</span>
                              <span>Wed</span>
                              <span>Thu</span>
                              <span>Fri</span>
                              <span>Sat</span>
                              <span>Sun</span>
                          </div>
                      </div>
                  </div>

                  <div className='section_card'>
                      <div className='section_header'>
                          <div className='section_title'>Model Performance</div>
                          <div className='section_subtitle'>Real-time metrics</div>
                      </div>
                      <div className='performance_metrics'>
                          <div className='metric_item'>
                              <div className='metric_label'>Accuracy</div>
                              <div className='metric_progress'>
                                  <div className='progress_bar'>
                                      <div className='progress_fill' style={{width: '94%', background: 'linear-gradient(90deg, #10B981 0%, #10B98180 100%)'}}></div>
                                  </div>
                                  <span className='metric_value'>94%</span>
                              </div>
                          </div>
                          <div className='metric_item'>
                              <div className='metric_label'>Latency</div>
                              <div className='metric_progress'>
                                  <div className='progress_bar'>
                                      <div className='progress_fill' style={{width: '78%', background: 'linear-gradient(90deg, #f6d467 0%, #f6d46780 100%)'}}></div>
                                  </div>
                                  <span className='metric_value'>78ms</span>
                              </div>
                          </div>
                          <div className='metric_item'>
                              <div className='metric_label'>Throughput</div>
                              <div className='metric_progress'>
                                  <div className='progress_bar'>
                                      <div className='progress_fill' style={{width: '88%', background: 'linear-gradient(90deg, #4F46E5 0%, #4F46E580 100%)'}}></div>
                                  </div>
                                  <span className='metric_value'>88%</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className='activity_section'>
                  <div className='section_card'>
                      <div className='section_header'>
                          <div className='section_title'>Recent Activity</div>
                          <div className='section_link' onClick={() => navigate('/projects')}>View all</div>
                      </div>
                      <div className='activity_list'>
                          {recentActivity.map((activity, index) => (
                              <div className='activity_item' key={activity.id} style={{animationDelay: `${index * 0.1}s`}}>
                                  <div className='activity_icon'>
                                      {activity.type === 'Template' ? '📧' : '📦'}
                                  </div>
                                  <div className='activity_details'>
                                      <div className='activity_name'>{activity.name}</div>
                                      <div className='activity_time'>{activity.time}</div>
                                  </div>
                                  <div className={`activity_status ${activity.status.toLowerCase().replace(' ', '_')}`}>
                                      {activity.status}
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>

                  <div className='section_card quick_actions'>
                      <div className='section_header'>
                          <div className='section_title'>Quick Actions</div>
                      </div>
                      <div className='actions_grid'>
                          <div className='action_btn' onClick={() => navigate('/overview')}>
                              <i className="bi bi-plus-circle"></i>
                              <span>New Template</span>
                          </div>
                          <div className='action_btn' onClick={() => navigate('/projects')}>
                              <i className="bi bi-folder-plus"></i>
                              <span>New Project</span>
                          </div>
                          <div className='action_btn'>
                              <i className="bi bi-bar-chart"></i>
                              <span>View Analytics</span>
                          </div>
                          <div className='action_btn'>
                              <i className="bi bi-gear"></i>
                              <span>Settings</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Dashboard
