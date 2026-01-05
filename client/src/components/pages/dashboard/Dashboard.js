import React, { useState, useEffect } from 'react'
import "./Dashboard.css"
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

function Dashboard() {
  const [loading, setLoading] = useState(true)
  const [tokenData, setTokenData] = useState([])
  const [apiData, setApiData] = useState([])

  const generateData = () => {
    return Array.from({ length: 30 }, () => Math.floor(Math.random() * 100) + 20)
  }

  // Recent items data
  const recentItems = [
    { type: 'project', name: 'Customer Analytics Dashboard', source: 'main-app', date: '2 hours ago', color: '#000000' },
    { type: 'template', name: 'User Onboarding Flow', source: 'E-commerce Platform', date: '5 hours ago', color: '#F6D467' },
    { type: 'project', name: 'Payment Gateway Integration', source: 'fintech-suite', date: '1 day ago', color: '#6B7280' },
    { type: 'template', name: 'Email Verification', source: 'Auth Service', date: '1 day ago', color: '#F6D467' },
    { type: 'project', name: 'Real-time Chat Module', source: 'social-app', date: '2 days ago', color: '#000000' },
    { type: 'template', name: 'Data Export Pipeline', source: 'Analytics Engine', date: '2 days ago', color: '#F6D467' },
    { type: 'project', name: 'API Rate Limiter', source: 'backend-core', date: '3 days ago', color: '#000000' },
  ]

  // Alerts data
  const alerts = [
    { type: 'warning', message: 'API usage at 85% of monthly limit', time: '10 mins ago' },
    { type: 'success', message: 'Payment Gateway project deployed successfully', time: '2 hours ago' },
    { type: 'error', message: 'Template validation failed: User Signup v2', time: '4 hours ago' },
    { type: 'info', message: 'New template available: Multi-step Form', time: '6 hours ago' },
    { type: 'warning', message: 'Token usage spike detected in Analytics Dashboard', time: '1 day ago' },
    { type: 'success', message: '3 new team members added to workspace', time: '1 day ago' },
  ]

  useEffect(() => {
    // Initial loading simulation
    setTimeout(() => {
      setTokenData(generateData())
      setApiData(generateData())
      setLoading(false)
    }, 2000)

    // Update data every 10 seconds
    const interval = setInterval(() => {
      setTokenData(generateData())
      setApiData(generateData())
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const labels = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`)

  const tokenChartData = {
    labels,
    datasets: [
      {
        label: 'Token Usage (K)',
        data: tokenData,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderRadius: 8,
        borderSkipped: false,
      }
    ]
  }

  const apiChartData = {
    labels,
    datasets: [
      {
        label: 'API Calls',
        data: apiData,
        backgroundColor: 'rgba(246, 212, 103, 0.9)',
        borderRadius: 8,
        borderSkipped: false,
      }
    ]
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          maxTicksLimit: 10,
          font: {
            size: 10
          }
        }
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        },
        beginAtZero: true
      }
    },
    animation: {
      duration: 1500,
      easing: 'easeInOutQuart'
    }
  }

  // Skeleton loader component
  const SkeletonLoader = () => (
    <div className="skeleton-wrapper">
      <div className="skeleton skeleton-card"></div>
      <div className="skeleton skeleton-card"></div>
      <div className="skeleton skeleton-card"></div>
      <div className="skeleton skeleton-card"></div>
    </div>
  )

  const SkeletonItem = () => (
    <div className="skeleton-item">
      <div className="skeleton skeleton-badge"></div>
      <div className="skeleton skeleton-text"></div>
      <div className="skeleton skeleton-text-small"></div>
    </div>
  )

  if (loading) {
    return (
      <div className='dora_dashboard_container'>
        <div className='main_space'></div>
        <div>
          <div className='skeleton skeleton-title'></div>
        </div>

        <div className='dashboard_card_container'>
          <SkeletonLoader />
        </div>

        <div className='all_recents'>
          <div className='recent_projects_templates'>
            <div className="skeleton skeleton-section-title"></div>
            <div className="skeleton-items-list">
              <SkeletonItem />
              <SkeletonItem />
              <SkeletonItem />
              <SkeletonItem />
            </div>
          </div>
          <div className='analysis'>
            <div className='token_analysis'>
              <div className="skeleton skeleton-chart"></div>
            </div>
            <div className='api_calls_analysis'>
              <div className="skeleton skeleton-chart"></div>
            </div>
          </div>
          <div className='alerts'>
            <div className="skeleton skeleton-section-title"></div>
            <div className="skeleton-items-list">
              <SkeletonItem />
              <SkeletonItem />
              <SkeletonItem />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='dora_dashboard_container'>
        <div className='main_space'></div>
        <div>
            <div className='dora_title'>Welcome in, Jay</div>
        </div>

        <div className='dashboard_card_container'>
          <div className='dashboard_cards'>
            <div>
              <div className='mar_left_24 dashboard_label'>Total Projects</div>
              <div className='dashboard_card'><span className='mar_left_24'>24</span></div>
            </div>
            <div>
              <div className='mar_left_24 dashboard_label'>Created Templates</div>
              <div className='dashboard_card yello'><span className='mar_left_24'>62</span></div>
            </div>
            <div>
              <div className='mar_left_24 dashboard_label'>API Calls</div>
              <div className='dashboard_card trans'><span className='mar_left_24'>569</span></div>
            </div>
            <div>
              <div className='mar_left_24 dashboard_label'>Tokens used</div>
              <div className='dashboard_card gray'><span className='mar_left_24'>987K</span></div>
            </div>
          </div>
        </div>

        <div className='all_recents'>
          <div className='recent_projects_templates'>
            <div className='section_title'>Recent</div>
            <div className='recent_items_list'>
              {recentItems.map((item, index) => (
                <div key={index} className='recent_item'>
                  <div className='item_header'>
                    <span className='item_label' style={{ backgroundColor: item.color }}>
                      {item.type === 'project' ? 'Project' : 'Template'}
                    </span>
                    <span className='item_date'>{item.date}</span>
                  </div>
                  <div className='item_name'>{item.name}</div>
                  <div className='item_source'>Source: {item.source}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className='analysis'>
            <div className='token_analysis'>
              <div className='chart_title'>Token Analysis (30 Days)</div>
              <div className='chart_wrapper'>
                <Bar data={tokenChartData} options={chartOptions} />
              </div>
            </div>
            <div className='api_calls_analysis'>
              <div className='chart_title'>API Calls (30 Days)</div>
              <div className='chart_wrapper'>
                <Bar data={apiChartData} options={chartOptions} />
              </div>
            </div>
          </div>
          
          <div className='alerts'>
            <div className='section_title'>Alerts</div>
            <div className='alerts_list'>
              {alerts.map((alert, index) => (
                <div key={index} className={`alert_item alert_${alert.type}`}>
                  <div className='alert_content'>
                    <div className='alert_message'>{alert.message}</div>
                    <div className='alert_time'>{alert.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard
