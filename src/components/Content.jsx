import React from 'react'
import ContentHeader from './ContentHeader'
import '../styles/Content.css'
import Card from './CardDashboard'
import Profile from './Profile'
import ProfileHeader from './ProfileHeader'
import DashboardFooter from './DashboardFooter'



function Content() {

  return (
    <div className="content">

      <div className="dashboard--headers">
      <ContentHeader />
      <Card />
      <DashboardFooter/>
      
      
      
      </div>

      <div className="dashboard--bodies">
      <ProfileHeader/>
      <Profile/>
     
      
      </div>
      
      
    </div>
   
  )
}

export default Content