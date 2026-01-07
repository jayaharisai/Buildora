import React, { useState, useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import "./Profile.css"

function Profile() {
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [profilePicture, setProfilePicture] = useState('https://ui-avatars.com/api/?name=Jay+Patel&size=200&background=000&color=fff');
  
  const [userData, setUserData] = useState({
    firstName: 'Jay',
    lastName: 'Patel',
    email: 'jay.patel@example.com'
  });

  const [tempUserData, setTempUserData] = useState({ ...userData });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = () => {
    setTempUserData({ ...userData });
    setIsEditing(true);
  };

  const handleCancel = () => {
    setTempUserData({ ...userData });
    setIsEditing(false);
    setErrorMessage('');
  };

  const handleSave = () => {
    if (!tempUserData.firstName || !tempUserData.lastName || !tempUserData.email) {
      setErrorMessage('All fields are required');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(tempUserData.email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setUserData({ ...tempUserData });
    setIsEditing(false);
    setErrorMessage('');
  };

  const handleChangePassword = () => {
    setErrorMessage('');

    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      setErrorMessage('All password fields are required');
      return;
    }

    if (passwordData.newPassword.length < 8) {
      setErrorMessage('New password must be at least 8 characters');
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setErrorMessage('New passwords do not match');
      return;
    }

    // Password change logic here
    setShowPasswordModal(false);
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    setErrorMessage('');
  };

  const handleDeleteAccount = () => {
    // Account deletion logic here
    console.log('Account deleted');
    setShowDeleteModal(false);
  };

  // Skeleton Loading Component
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
            <div className='skeleton skeleton-description'></div>
          </div>

          <div className='profile_container'>
            {/* Skeleton Profile Picture Section */}
            <div className='profile_picture_section'>
              <div className='skeleton skeleton-profile-picture'></div>
              <div className='skeleton skeleton-profile-name'></div>
              <div className='skeleton skeleton-profile-email'></div>
            </div>

            {/* Skeleton Profile Information Section */}
            <div className='profile_info_section'>
              <div className='section_header'>
                <div className='skeleton skeleton-section-heading'></div>
                <div className='skeleton skeleton-edit-button'></div>
              </div>

              <div className='profile_form'>
                <div className='form_row'>
                  <div className='form_group'>
                    <div className='skeleton skeleton-label'></div>
                    <div className='skeleton skeleton-input'></div>
                  </div>
                  <div className='form_group'>
                    <div className='skeleton skeleton-label'></div>
                    <div className='skeleton skeleton-input'></div>
                  </div>
                </div>

                <div className='form_group'>
                  <div className='skeleton skeleton-label'></div>
                  <div className='skeleton skeleton-input'></div>
                </div>
              </div>
            </div>

            {/* Skeleton Security Section */}
            <div className='profile_security_section'>
              <div className='skeleton skeleton-section-heading'></div>
              
              <div className='security_item'>
                <div className='security_info'>
                  <div className='skeleton skeleton-security-title'></div>
                  <div className='skeleton skeleton-security-desc'></div>
                </div>
                <div className='skeleton skeleton-button'></div>
              </div>

              <div className='security_item'>
                <div className='security_info'>
                  <div className='skeleton skeleton-security-title'></div>
                  <div className='skeleton skeleton-security-desc'></div>
                </div>
                <div className='skeleton skeleton-button'></div>
              </div>
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

      <div className='dora_dashboard_container'>
        <div className='main_space'></div>
        <div>
          <div className='dora_title'>Profile</div>
          <div className='dora_description'>Manage your account settings and preferences</div>
        </div>

        <div className='profile_container'>
          {/* Profile Picture Section */}
          <div className='profile_picture_section'>
            <div className='profile_picture_wrapper'>
              <img src={profilePicture} alt='Profile' className='profile_picture' />
              <label htmlFor='profile-upload' className='profile_upload_overlay'>
                <i className="bi bi-camera"></i>
                <span>Change Photo</span>
              </label>
              <input 
                type='file' 
                id='profile-upload' 
                accept='image/*'
                onChange={handleImageUpload}
                style={{display: 'none'}}
              />
            </div>
            <div className='profile_name'>{userData.firstName} {userData.lastName}</div>
            <div className='profile_email'>{userData.email}</div>
          </div>

          {/* Profile Information Section */}
          <div className='profile_info_section'>
            <div className='section_header'>
              <div className='dora_heading1'>Personal Information</div>
              {!isEditing && (
                <button className='edit_button' onClick={handleEdit}>
                  <i className="bi bi-pencil"></i> Edit
                </button>
              )}
            </div>

            <div className='profile_form'>
              <div className='form_row'>
                <div className='form_group'>
                  <label className='form_label'>First Name</label>
                  <input 
                    type='text'
                    className='form_input'
                    value={isEditing ? tempUserData.firstName : userData.firstName}
                    onChange={(e) => setTempUserData({...tempUserData, firstName: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>

                <div className='form_group'>
                  <label className='form_label'>Last Name</label>
                  <input 
                    type='text'
                    className='form_input'
                    value={isEditing ? tempUserData.lastName : userData.lastName}
                    onChange={(e) => setTempUserData({...tempUserData, lastName: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
              </div>

              <div className='form_group'>
                <label className='form_label'>Email Address</label>
                <input 
                  type='email'
                  className='form_input'
                  value={isEditing ? tempUserData.email : userData.email}
                  onChange={(e) => setTempUserData({...tempUserData, email: e.target.value})}
                  disabled={!isEditing}
                />
              </div>

              {errorMessage && <div className='error_message'>{errorMessage}</div>}

              {isEditing && (
                <div className='form_actions'>
                  <div className='dora_secondery_btn'>
                    <button onClick={handleSave}>Save Changes</button>
                  </div>
                  <div className='dora_secondery_btn cancel_btn'>
                    <button onClick={handleCancel}>Cancel</button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Security Section */}
          <div className='profile_security_section'>
            <div className='dora_heading1'>Security</div>
            
            <div className='security_item'>
              <div className='security_info'>
                <div className='security_title'>Password</div>
                <div className='security_description'>Change your password to keep your account secure</div>
              </div>
              <div className='dora_secondery_btn'>
                <button onClick={() => setShowPasswordModal(true)}>Change Password</button>
              </div>
            </div>

            <div className='security_item danger_item'>
              <div className='security_info'>
                <div className='security_title'>Delete Account</div>
                <div className='security_description'>Permanently delete your account and all data</div>
              </div>
              <div className='dora_secondery_btn remove_btn'>
                <button onClick={() => setShowDeleteModal(true)}>Delete Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Change Password Modal */}
      {showPasswordModal && (
        <div className='modal_backdrop' onClick={() => setShowPasswordModal(false)}>
          <div className='modal_content' onClick={(e) => e.stopPropagation()}>
            <div className='modal_header'>
              <div className='modal_title'>Change Password</div>
              <button className='modal_close' onClick={() => setShowPasswordModal(false)}>×</button>
            </div>

            <div className='modal_body'>
              <div className='form_group'>
                <label className='form_label'>Current Password</label>
                <input 
                  type='password'
                  className='form_input'
                  placeholder='Enter current password'
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                />
              </div>

              <div className='form_group'>
                <label className='form_label'>New Password</label>
                <input 
                  type='password'
                  className='form_input'
                  placeholder='Enter new password (min 8 characters)'
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                />
              </div>

              <div className='form_group'>
                <label className='form_label'>Confirm New Password</label>
                <input 
                  type='password'
                  className='form_input'
                  placeholder='Confirm new password'
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                />
              </div>

              {errorMessage && <div className='error_message'>{errorMessage}</div>}
            </div>

            <div className='modal_footer'>
              <div className='dora_secondery_btn cancel_btn'>
                <button onClick={() => setShowPasswordModal(false)}>Cancel</button>
              </div>
              <div className='dora_secondery_btn'>
                <button onClick={handleChangePassword}>Update Password</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <div className='modal_backdrop' onClick={() => setShowDeleteModal(false)}>
          <div className='modal_content delete_modal' onClick={(e) => e.stopPropagation()}>
            <div className='modal_header'>
              <div className='modal_title'>Delete Account</div>
              <button className='modal_close' onClick={() => setShowDeleteModal(false)}>×</button>
            </div>

            <div className='modal_body'>
              <div className='warning_message'>
                <i className="bi bi-exclamation-triangle"></i>
                <div className='warning_text'>
                  <div className='warning_title'>This action cannot be undone</div>
                  <div className='warning_description'>
                    Deleting your account will permanently remove all your data, projects, templates, and settings. 
                    This action is irreversible.
                  </div>
                </div>
              </div>
            </div>

            <div className='modal_footer'>
              <div className='dora_secondery_btn'>
                <button onClick={() => setShowDeleteModal(false)}>Cancel</button>
              </div>
              <div className='dora_secondery_btn remove_btn'>
                <button onClick={handleDeleteAccount}>Yes, Delete My Account</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile
