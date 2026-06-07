import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
const tabs = [
  { path:'/', icon:'🏠', label:'Home' },
  { path:'/doctors', icon:'👨‍⚕️', label:'Doctors' },
  { path:'/services', icon:'🩺', label:'Services' },
  { path:'/blog', icon:'📰', label:'Blog' },
  { path:'/profile', icon:'👤', label:'Profile' },
]
export default function BottomNav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  return (
    <nav style={{position:'fixed',bottom:0,left:0,right:0,height:'calc(70px + env(safe-area-inset-bottom,0px))',background:'white',borderTop:'1px solid #eee',display:'flex',paddingBottom:'env(safe-area-inset-bottom,0px)',zIndex:100,boxShadow:'0 -4px 20px rgba(0,0,0,0.08)'}}>
      {tabs.map(tab => {
        const active = pathname === tab.path
        return (
          <button key={tab.path} onClick={() => navigate(tab.path)} style={{flex:1,border:'none',background:'none',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:4,cursor:'pointer',color:active?'#e85d26':'#999',position:'relative'}}>
            <span style={{fontSize:22}}>{tab.icon}</span>
            <span style={{fontSize:10,fontWeight:active?700:400}}>{tab.label}</span>
            {active && <div style={{position:'absolute',bottom:2,width:4,height:4,borderRadius:'50%',background:'#e85d26'}} />}
          </button>
        )
      })}
    </nav>
  )
}
