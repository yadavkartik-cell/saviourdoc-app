import React,{useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
const docs={  'dr-kartik':{name:'Dr. Kartik Yadav',spec:'Pulmonologist',fee:1500,rating:4.9,reviews:312,exp:'10 years',about:'Dr. Kartik Yadav is a leading pulmonologist specializing in asthma, COPD, bronchitis, and all respiratory conditions.',slots:['9:00 AM','11:00 AM','2:00 PM','4:00 PM','6:00 PM'],emoji:'🩻',avail:true},
  'dr-jatin':{name:'Dr. Jatin',spec:'Anesthesiologist',fee:1500,rating:4.8,reviews:124,exp:'12 years',about:'Expert in pain management and anesthetic procedures for chronic and acute conditions.',slots:['9:00 AM','11:00 AM','2:00 PM','4:00 PM'],emoji:'💉',avail:true},
  'dr-rohit':{name:'Dr. Rohit Raj',spec:'General Physician',fee:1500,rating:4.9,reviews:230,exp:'8 years',about:'Comprehensive general medicine — fever, infections, chronic disease management, and preventive care.',slots:['8:00 AM','10:00 AM','1:00 PM','3:00 PM','5:00 PM','7:00 PM'],emoji:'🩺',avail:true},
  'dr-arjun':{name:'Dr. Arjun Sharma',spec:'Orthopedics',fee:0,rating:4.7,reviews:98,exp:'10 years',about:'Expert orthopedic care for bone fractures, joint issues, sports injuries, and musculoskeletal conditions.',slots:['10:00 AM','3:00 PM'],emoji:'🦴',avail:false},
  'dr-meena':{name:'Dr. Meena Gupta',spec:'Pediatrics',fee:0,rating:4.9,reviews:185,exp:'15 years',about:'Expert pediatric care from newborn checkups to adolescent health and vaccination guidance.',slots:['9:00 AM','12:00 PM','4:00 PM'],emoji:'👶',avail:false},
  'dr-neha':{name:'Dr. Neha Singh',spec:'Dermatologist',fee:1200,rating:4.8,reviews:210,exp:'7 years',about:'Treatment of acne, eczema, psoriasis, hair loss, and all skin conditions with personalized plans.',slots:['10:00 AM','12:00 PM','3:00 PM','5:00 PM'],emoji:'✨',avail:true}
}
export default function DoctorDetail(){
  const {id}=useParams()
  const navigate=useNavigate()
  const [sel,setSel]=useState(null)
  const d=docs[id]
  if(!d) return <div style={{padding:80,textAlign:'center'}}>Doctor not found</div>
  return(
    <div>
      <div style={{background:'linear-gradient(135deg,#0a2342,#1a3a5c)',padding:'52px 20px 24px'}}>
        <button onClick={()=>navigate(-1)} style={{background:'rgba(255,255,255,0.2)',border:'none',color:'white',borderRadius:50,padding:'6px 14px',fontSize:13,cursor:'pointer',marginBottom:16}}>← Back</button>
        <div style={{display:'flex',alignItems:'center',gap:16}}>
          <div style={{width:72,height:72,borderRadius:20,background:'rgba(255,255,255,0.15)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:36}}>{d.emoji}</div>
          <div>
            <h1 style={{color:'white',fontSize:22,fontWeight:800}}>{d.name}</h1>
            <p style={{color:'rgba(255,255,255,0.7)',fontSize:13,marginTop:2}}>{d.spec} • {d.exp}</p>
            <p style={{color:'#e85d26',fontSize:13,fontWeight:700,marginTop:4}}>★ {d.rating} ({d.reviews} reviews)</p>
          </div>
        </div>
      </div>
      <div style={{padding:'16px'}}>
        <div className="card" style={{marginBottom:12}}>
          <h3 style={{fontWeight:700,color:'#0a2342',marginBottom:8}}>About</h3>
          <p style={{fontSize:14,color:'#666',lineHeight:1.6}}>{d.about}</p>
        </div>
        <div className="card" style={{marginBottom:12}}>
          <h3 style={{fontWeight:700,color:'#0a2342',marginBottom:12}}>Select Time Slot</h3>
          <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
            {d.slots.map(s=>(
              <button key={s} onClick={()=>setSel(s)} style={{padding:'8px 14px',borderRadius:50,border:'2px solid',borderColor:sel===s?'#e85d26':'#e5e5e5',background:sel===s?'#e85d26':'white',color:sel===s?'white':'#333',fontSize:13,fontWeight:600,cursor:'pointer'}}>{s}</button>
            ))}
          </div>
        </div>
        <div className="card" style={{marginBottom:16,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div><p style={{fontSize:12,color:'#666'}}>Consultation Fee</p><p style={{fontSize:22,fontWeight:800,color:'#e85d26'}}>{d.fee===0?'Free':'₹'+d.fee}</p></div>
          <div style={{textAlign:'right'}}><span style={{background:d.avail?'#e8fff3':'#fff0f0',color:d.avail?'#16a34a':'#dc2626',borderRadius:50,padding:'4px 12px',fontSize:12,fontWeight:600}}>{d.avail?'🟢 Available':'🔴 Unavailable'}</span></div>
        </div>
        <button className="btn-primary" onClick={()=>navigate('/book')} disabled={!d.avail} style={{opacity:d.avail?1:0.5}}>📹 Book Video Consultation</button>
      </div>
    </div>
  )
}
