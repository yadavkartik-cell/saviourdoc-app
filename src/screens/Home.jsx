import React from 'react'
import { useNavigate } from 'react-router-dom'
const quickActions=[{icon:'📹',label:'Video Consult',path:'/doctors',color:'#e8f4fd'},{icon:'🧪',label:'Lab Tests',path:'/services',color:'#f3e8ff'},{icon:'💊',label:'Medicine',path:'/services',color:'#e8fff3'},{icon:'📋',label:'Records',path:'/profile',color:'#fff3e8'}]
const stats=[{v:'10K+',l:'Patients'},{v:'50+',l:'Doctors'},{v:'4.9★',l:'Rating'},{v:'24/7',l:'Support'}]
const services=[{icon:'🩺',t:'Online Consult',d:'Video call with certified doctors'},{icon:'🧪',t:'Lab Tests',d:'Home sample collection & instant results'},{icon:'💊',t:'Drug Delivery',d:'Medicines at doorstep in hours'},{icon:'📋',t:'Prescriptions',d:'Digital legally valid prescriptions'}]
export default function Home(){
  const navigate=useNavigate()
  return(
    <div>
      <div style={{background:'linear-gradient(135deg,#0a2342,#1a3a5c)',padding:'52px 20px 28px',color:'white'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:20}}>
          <div>
            <p style={{fontSize:13,color:'rgba(255,255,255,0.6)',marginBottom:4}}>Good Morning 👋</p>
            <h1 style={{fontSize:26,fontWeight:800}}>SAVIOURDOC</h1>
            <p style={{fontSize:12,color:'rgba(255,255,255,0.6)',marginTop:4}}>Dr. Kartik Yadav — Healthcare at home</p>
          </div>
          <button onClick={()=>navigate('/profile')} style={{width:44,height:44,borderRadius:'50%',background:'#e85d26',border:'none',color:'white',fontSize:18,cursor:'pointer'}}>👤</button>
        </div>
        <div onClick={()=>navigate('/doctors')} style={{background:'rgba(255,255,255,0.12)',borderRadius:12,padding:'12px 16px',display:'flex',alignItems:'center',gap:10,cursor:'pointer'}}>
          <span>🔍</span><span style={{color:'rgba(255,255,255,0.6)',fontSize:14}}>Search doctors, services...</span>
        </div>
      </div>
      <div style={{padding:'0 16px 24px'}}>
        <div style={{marginTop:20}}>
          <div className="section-header"><span className="section-title">Quick Actions</span></div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:10}}>
            {quickActions.map(a=>(
              <button key={a.label} onClick={()=>navigate(a.path)} style={{background:a.color,border:'none',borderRadius:14,padding:'14px 6px',cursor:'pointer',display:'flex',flexDirection:'column',alignItems:'center',gap:6}}>
                <span style={{fontSize:26}}>{a.icon}</span>
                <span style={{fontSize:10,fontWeight:600,color:'#0a2342',textAlign:'center'}}>{a.label}</span>
              </button>
            ))}
          </div>
        </div>
        <div style={{background:'#0a2342',borderRadius:16,padding:'20px 16px',marginTop:20,display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:8}}>
          {stats.map(s=>(<div key={s.v} style={{textAlign:'center'}}><div style={{fontSize:18,fontWeight:800,color:'#e85d26'}}>{s.v}</div><div style={{fontSize:10,color:'rgba(255,255,255,0.6)',marginTop:2}}>{s.l}</div></div>))}
        </div>
        <div style={{marginTop:20}}>
          <div className="section-header"><span className="section-title">Our Services</span><button className="section-link" onClick={()=>navigate('/services')}>See all</button></div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
            {services.map(s=>(
              <div key={s.t} onClick={()=>navigate('/services')} className="card" style={{cursor:'pointer'}}>
                <div style={{fontSize:32,marginBottom:8}}>{s.icon}</div>
                <div style={{fontWeight:700,fontSize:14,color:'#0a2342',marginBottom:4}}>{s.t}</div>
                <div style={{fontSize:12,color:'#666'}}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{marginTop:20,background:'linear-gradient(135deg,#e85d26,#ff8c5a)',borderRadius:16,padding:20,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div>
            <p style={{color:'rgba(255,255,255,0.8)',fontSize:12,marginBottom:4}}>Book Now</p>
            <h3 style={{color:'white',fontSize:18,fontWeight:700}}>Free first consultation</h3>
            <p style={{color:'rgba(255,255,255,0.8)',fontSize:12,marginTop:4}}>Talk to a doctor today</p>
          </div>
          <button onClick={()=>navigate('/book')} style={{background:'white',color:'#e85d26',border:'none',borderRadius:50,padding:'10px 16px',fontSize:13,fontWeight:700,cursor:'pointer',whiteSpace:'nowrap'}}>📞 Book Call</button>
        </div>
      </div>
    </div>
  )
}
