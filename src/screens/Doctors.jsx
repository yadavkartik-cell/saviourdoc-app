import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
const docs=[
  {id:'dr-kartik',name:'Dr. Kartik Yadav',spec:'Pulmonologist',fee:1500,rating:4.9,exp:'10 yrs',avail:true,emoji:'🩻'},
  {id:'dr-jatin',name:'Dr. Jatin',spec:'Anesthesiologist',fee:1500,rating:4.8,exp:'12 yrs',avail:true,emoji:'💉'},
  {id:'dr-rohit',name:'Dr. Rohit Raj',spec:'General Physician',fee:1500,rating:4.9,exp:'8 yrs',avail:true,emoji:'🩺'},
  {id:'dr-arjun',name:'Dr. Arjun Sharma',spec:'Orthopedics',fee:0,rating:4.7,exp:'10 yrs',avail:false,emoji:'🦴'},
  {id:'dr-meena',name:'Dr. Meena Gupta',spec:'Pediatrics',fee:0,rating:4.9,exp:'15 yrs',avail:false,emoji:'👶'},
  {id:'dr-neha',name:'Dr. Neha Singh',spec:'Dermatologist',fee:1200,rating:4.8,exp:'7 yrs',avail:true,emoji:'✨'},
]
export default function Doctors(){
  const navigate=useNavigate()
  const [q,setQ]=useState('')
  const filtered=docs.filter(d=>d.name.toLowerCase().includes(q.toLowerCase())||d.spec.toLowerCase().includes(q.toLowerCase()))
  return(
    <div>
      <div style={{background:'linear-gradient(135deg,#0a2342,#1a3a5c)',padding:'52px 20px 24px'}}>
        <h1 style={{color:'white',fontSize:24,fontWeight:800,marginBottom:4}}>Our Doctors</h1>
        <p style={{color:'rgba(255,255,255,0.6)',fontSize:13,marginBottom:16}}>Trusted experts across every discipline</p>
        <input className="input" placeholder="🔍 Search by name or specialty..." value={q} onChange={e=>setQ(e.target.value)} style={{background:'rgba(255,255,255,0.9)'}} />
      </div>
      <div style={{padding:'16px'}}>
        {filtered.map(d=>(
          <div key={d.id} onClick={()=>navigate('/doctors/'+d.id)} className="card" style={{marginBottom:12,cursor:'pointer',display:'flex',alignItems:'center',gap:14}}>
            <div style={{width:60,height:60,borderRadius:16,background:d.avail?'#e8f4fd':'#f5f5f5',display:'flex',alignItems:'center',justifyContent:'center',fontSize:28,flexShrink:0}}>{d.emoji}</div>
            <div style={{flex:1}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
                <div>
                  <div style={{fontWeight:700,fontSize:15,color:'#0a2342'}}>{d.name}</div>
                  <div style={{fontSize:12,color:'#666',marginTop:2}}>{d.spec} • {d.exp}</div>
                </div>
                <div style={{textAlign:'right'}}>
                  <div style={{fontSize:13,fontWeight:700,color:'#e85d26'}}>{d.fee===0?'Free':'₹'+d.fee}</div>
                  <div style={{fontSize:11,color:'#666',marginTop:2}}>★ {d.rating}</div>
                </div>
              </div>
              <div style={{marginTop:8}}>
                <span style={{background:d.avail?'#e8fff3':'#fff0f0',color:d.avail?'#16a34a':'#dc2626',borderRadius:50,padding:'3px 10px',fontSize:11,fontWeight:600}}>{d.avail?'Available Now':'Unavailable'}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
