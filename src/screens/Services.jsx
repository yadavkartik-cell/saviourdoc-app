import React from 'react'
import { useNavigate } from 'react-router-dom'
const services=[
  {icon:'🩺',t:'Online Consultations',d:'Connect with certified doctors via secure video calls.',features:['HD Video Call','Instant Prescription','Follow-up Support'],color:'#e8f4fd',accent:'#2196f3'},
  {icon:'🧪',t:'Diagnostics & Labs',d:'Book lab tests with home sample collection and instant digital results.',features:['100+ Tests','Home Collection','Instant Reports','NABL Certified'],color:'#f3e8ff',accent:'#9c27b0'},
  {icon:'💊',t:'Drug Delivery',d:'Medicines delivered to your doorstep within hours.',features:['Same-day Delivery','Genuine Medicines','Track Order'],color:'#e8f8ff',accent:'#00bcd4'},
  {icon:'📋',t:'Digital Prescriptions',d:'Legally valid digital prescriptions with detailed treatment plans.',features:['Legally Valid','Digital Delivery','Pharmacy Linked'],color:'#e8fff3',accent:'#4caf50'},
  {icon:'❤️',t:'Wellness Tracking',d:'Monitor vitals, diet, sleep, and activity in real time.',features:['Vitals Monitor','Diet Plans','AI Insights'],color:'#fff3e8',accent:'#ff9800'},
  {icon:'📂',t:'Health Records',d:'Store, manage and share health records securely.',features:['Cloud Storage','Easy Sharing','Encrypted'],color:'#fff8e8',accent:'#ffc107'},
]
export default function Services(){
  const navigate=useNavigate()
  return(
    <div>
      <div style={{background:'linear-gradient(135deg,#0a2342,#1a3a5c)',padding:'52px 20px 24px'}}>
        <h1 style={{color:'white',fontSize:24,fontWeight:800,marginBottom:4}}>Our Services</h1>
        <p style={{color:'rgba(255,255,255,0.6)',fontSize:13}}>Complete healthcare designed for you</p>
      </div>
      <div style={{padding:'16px'}}>
        {services.map(s=>(
          <div key={s.t} className="card" style={{marginBottom:12,borderLeft:'4px solid '+s.accent}}>
            <div style={{display:'flex',alignItems:'flex-start',gap:14}}>
              <div style={{width:52,height:52,borderRadius:14,background:s.color,display:'flex',alignItems:'center',justifyContent:'center',fontSize:26,flexShrink:0}}>{s.icon}</div>
              <div style={{flex:1}}>
                <h3 style={{fontWeight:700,fontSize:16,color:'#0a2342',marginBottom:4}}>{s.t}</h3>
                <p style={{fontSize:13,color:'#666',marginBottom:10,lineHeight:1.5}}>{s.d}</p>
                <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
                  {s.features.map(f=>(<span key={f} style={{background:s.color,color:s.accent,borderRadius:50,padding:'3px 10px',fontSize:11,fontWeight:600}}>{f}</span>))}
                </div>
              </div>
            </div>
          </div>
        ))}
        <button className="btn-primary" onClick={()=>navigate('/book')} style={{marginTop:8}}>📞 Book a Consultation Now</button>
      </div>
    </div>
  )
}
