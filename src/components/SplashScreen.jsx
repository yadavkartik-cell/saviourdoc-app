import React from 'react'
export default function SplashScreen() {
  return (
    <div style={{position:'fixed',inset:0,background:'#0a2342',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',zIndex:9999}}>
      <div style={{fontSize:72,marginBottom:16}}>🩺</div>
      <h1 style={{color:'white',fontSize:34,fontWeight:800,letterSpacing:'-1px'}}>SAVIOURDOC</h1>
      <p style={{color:'rgba(255,255,255,0.6)',marginTop:8,fontSize:14}}>Healthcare without leaving home</p>
      <div style={{marginTop:48,width:48,height:4,borderRadius:2,background:'#e85d26',animation:'pulse 1.2s ease-in-out infinite'}} />
      <style>{`@keyframes pulse{0%,100%{opacity:0.4;transform:scaleX(0.8)}50%{opacity:1;transform:scaleX(1.5)}}`}</style>
    </div>
  )
}
