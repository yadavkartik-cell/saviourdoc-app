import React,{useState} from 'react'
const posts=[
  {id:1,emoji:'🌅',title:'Your Daily Health Routine Matters',cat:'Wellness',catColor:'#22c55e',date:'June 2, 2026',read:'4 min',excerpt:'Small daily habits compound into life-changing health outcomes. Here is how to build yours.'},
  {id:2,emoji:'🦴',title:'How to Protect Your Joints at Every Age',cat:'Orthopedics',catColor:'#f59e0b',date:'May 25, 2026',read:'5 min',excerpt:'Joint health starts well before arthritis symptoms appear. Prevention is the best medicine.'},
  {id:3,emoji:'😴',title:'Sleep Hygiene: The Overlooked Health Pillar',cat:'Mental Health',catColor:'#8b5cf6',date:'May 18, 2026',read:'3 min',excerpt:'Quality sleep is as critical as diet and exercise. Most Indians are chronically sleep-deprived.'},
  {id:4,emoji:'🩸',title:'Managing Diabetes Without Letting It Manage You',cat:'Chronic Care',catColor:'#ef4444',date:'May 10, 2026',read:'6 min',excerpt:'Diabetes is manageable with the right lifestyle, monitoring, and medical support.'},
  {id:5,emoji:'🩺',title:'COPD & Respiratory Health in Urban India',cat:'Pulmonology',catColor:'#0ea5e9',date:'May 5, 2026',read:'5 min',excerpt:'Air pollution and smoking are driving a silent respiratory crisis across Indian cities.'},
]
export default function Blog(){
  const [sel,setSel]=useState(null)
  if(sel) return(
    <div>
      <div style={{background:'linear-gradient(135deg,#0a2342,#1a3a5c)',padding:'52px 20px 24px'}}>
        <button onClick={()=>setSel(null)} style={{background:'rgba(255,255,255,0.2)',border:'none',color:'white',borderRadius:50,padding:'6px 14px',fontSize:13,cursor:'pointer',marginBottom:16}}>← Back</button>
        <div style={{fontSize:48,marginBottom:12}}>{sel.emoji}</div>
        <span style={{background:'rgba(255,255,255,0.2)',color:'white',borderRadius:50,padding:'3px 10px',fontSize:11,fontWeight:600}}>{sel.cat}</span>
        <h1 style={{color:'white',fontSize:20,fontWeight:800,marginTop:10,lineHeight:1.3}}>{sel.title}</h1>
        <p style={{color:'rgba(255,255,255,0.6)',fontSize:12,marginTop:8}}>{sel.date} • {sel.read} read</p>
      </div>
      <div style={{padding:'16px'}}>
        <div className="card">
          <p style={{fontSize:15,color:'#444',lineHeight:1.8}}>{sel.excerpt}</p>
          <p style={{fontSize:15,color:'#444',lineHeight:1.8,marginTop:16}}>Good health is built through consistent daily choices. The evidence strongly supports that lifestyle interventions — diet, exercise, sleep, and stress management — are the most powerful medicine available. Start small, stay consistent, and let your doctor guide your journey.</p>
          <p style={{fontSize:15,color:'#444',lineHeight:1.8,marginTop:16}}>At SaviourDoc, our doctors are available 24/7 to support your health journey with personalized guidance, digital prescriptions, and regular follow-ups from the comfort of your home.</p>
        </div>
      </div>
    </div>
  )
  return(
    <div>
      <div style={{background:'linear-gradient(135deg,#0a2342,#1a3a5c)',padding:'52px 20px 24px'}}>
        <h1 style={{color:'white',fontSize:24,fontWeight:800,marginBottom:4}}>Health Insights</h1>
        <p style={{color:'rgba(255,255,255,0.6)',fontSize:13}}>Expert articles from our doctors</p>
      </div>
      <div style={{padding:'16px'}}>
        {posts.map(p=>(
          <div key={p.id} onClick={()=>setSel(p)} className="card" style={{marginBottom:12,cursor:'pointer'}}>
            <div style={{display:'flex',gap:14,alignItems:'flex-start'}}>
              <div style={{fontSize:40,flexShrink:0}}>{p.emoji}</div>
              <div style={{flex:1}}>
                <div style={{display:'flex',alignItems:'center',gap:6,marginBottom:6}}>
                  <span style={{background:p.catColor+'22',color:p.catColor,borderRadius:50,padding:'2px 8px',fontSize:10,fontWeight:700}}>{p.cat}</span>
                  <span style={{fontSize:11,color:'#999'}}>{p.read} read</span>
                </div>
                <h3 style={{fontWeight:700,fontSize:14,color:'#0a2342',marginBottom:6,lineHeight:1.3}}>{p.title}</h3>
                <p style={{fontSize:12,color:'#666',lineHeight:1.5}}>{p.excerpt}</p>
                <p style={{fontSize:11,color:'#999',marginTop:8}}>{p.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
