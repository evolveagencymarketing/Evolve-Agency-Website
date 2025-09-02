export default function App() {
  return (
    <main style={{
      minHeight: '100vh', display:'grid', placeItems:'center',
      background:'#0b0f14', color:'#e8f1ff',
      fontFamily:'Inter, system-ui, Arial, sans-serif', padding:40
    }}>
      <div style={{maxWidth:900, textAlign:'center'}}>
        <h1 style={{fontSize:40, marginBottom:12}}>Evolve Agency</h1>
        <p style={{opacity:.85, marginBottom:24}}>Digital marketing & creator growth.</p>
        <div style={{display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap'}}>
          <a href="mailto:alejandro@evolvea.net"
             style={{padding:'12px 20px', background:'#0ea5e9', color:'#fff',
                     borderRadius:10, textDecoration:'none', fontWeight:700}}>Email Me</a>
          <a href="tel:+13038755387"
             style={{padding:'12px 20px', background:'#22c55e', color:'#0b0f14',
                     borderRadius:10, textDecoration:'none', fontWeight:700}}>Call Me</a>
        </div>
      </div>
    </main>
  )
}
