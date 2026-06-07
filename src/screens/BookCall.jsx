import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
export default function BookCall(){
  const navigate=useNavigate()
  const [form,setForm]=useState({name:'',phone:'',concern:'',date:''})
  const [done,setDone]=useState(false)
  const set=k=>e=>setForm({...form,[k]:e.target.value})
  const submit=()=>{
    if(form.name&&form.phone&&form.concern)setDone(true)
  }
  if(done) return(
    <div style={{minHeight:'100vh',background:'#f5f5f0',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:24}}>
      <div style={{fontSize:72,marginBottom:16}}>✅</div>
      <h2 style={{fontSize:24,fontWeight:800,color:'#0a2342',marginBottom:8,textAlign:'center'}}>Booking Confirmed!</h2>
      <p style={{color:'#666',textAlign:'center',marginBottom:24,lineHeight:1.6}}>Thank you {form.name}! Our team will call you at {form.phone} shortly to confirm your appointment.</p>
      <button className="btn-primary" onClick={()=>{setDone(false);setForm({name:'',phone:'',concern:'',date:''})}}>Book Another</button>
      <button style={{marginTop:12,background:'none',border:'none',color:'#e85d26',fontSize:15,fontWeight:600,cursor:'pointer'}} onClick={()=>navigate('/')}>Back to Home</button>
    </div>
  )
  return(
    <div>
      <div style={{background:'linear-gradient(135deg,#0a2342,#1a3a5c)',padding:'52px 20px 24px'}}>
        <button onClick={()=>navigate(-1)} style={{background:'rgba(255,255,255,0.2)',border:'none',color:'white',borderRadius:50,padding:'6px 14px',fontSize:13,cursor:'pointer',marginBottom:16}}>← Back</button>
        <h1 style={{color:'white',fontSize:24,fontWeight:800,marginBottom:4}}>📞 Book a Call</h1>
        <p style={{color:'rgba(255,255,255,0.6)',fontSize:13}}>A doctor will call you within 30 minutes</p>
      </div>
      <div style={{padding:'16px'}}>
        <div className="card" style={{marginBottom:16}}>
          <div style={{background:'#e8fff3',borderRadius:12,padding:16,marginBottom:16,display:'flex',alignItems:'center',gap:12}}>
            <span style={{fontSize:24}}>⚡</span>
            <div><p style={{fontWeight:700,fontSize:14,color:'#16a34a'}}>Free First Consultation</p><p style={{fontSize:12,color:'#666'}}>No charge for your first call with any doctor</p></div>
          </div>
          <div style={{marginBottom:14}}>
            <label style={{fontSize:13,fontWeight:600,color:'#0a2342',display:'block',marginBottom:6}}>Your Name *</label>
            <input className="input" placeholder="Enter your full name" value={form.name} onChange={set('name')} />
          </div>
          <div style={{marginBottom:14}}>
            <label style={{fontSize:13,fontWeight:600,color:'#0a2342',display:'block',marginBottom:6}}>Phone Number *</label>
            <input className="input" placeholder="+91 98765 43210" value={form.phone} onChange={set('phone')} type="tel" />
          </div>
          <div style={{marginBottom:14}}>
            <label style={{fontSize:13,fontWeight:600,color:'#0a2342',display:'block',marginBottom:6}}>Health Concern *</label>
            <textarea className="input" placeholder="Describe your symptoms or concern..." value={form.concern} onChange={set('concern')} rows={3} style={{resize:'none'}} />
          </div>
          <div style={{marginBottom:20}}>
            <label style={{fontSize:13,fontWeight:600,color:'#0a2342',display:'block',marginBottom:6}}>Preferred Date (Optional)</label>
            <input className="input" type="date" value={form.date} onChange={set('date')} />
          </div>
          <button className="btn-primary" onClick={submit}>📞 Confirm Booking</button>
        </div>
        <div className="card">
          <h3 style={{fontWeight:700,color:'#0a2342',marginBottom:12}}>How it works</h3>
          {['📅 Fill the form above','📞 Doctor calls within 30 mins','😊 Get diagnosis & prescription','💊 Medicine delivered to home'].map((s,i)=>(
            <div key={i} style={{display:'flex',alignItems:'center',gap:10,marginBottom:10}}>
              <span style={{width:24,height:24,borderRadius:'50%',background:'#0a2342',color:'white',fontSize:11,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,flexShrink:0}}>{i+1}</span>
              <span style={{fontSize:14,color:'#333'}}>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
