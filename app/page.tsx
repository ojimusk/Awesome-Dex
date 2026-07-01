export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0B0E11',
      color: 'white',
      fontFamily: 'sans-serif',
      padding: '16px'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>
          <span style={{ color: '#F7931A' }}>Awesome</span> DEX
        </h1>
        <p style={{ color: '#888', marginTop: '8px' }}>
          Bitcoin-Only Decentralized Exchange
        </p>
        
        {/* PAKE TAG <a> BUKAN <Link> */}
        <a href="/trade">
          <button style={{
            marginTop: '24px',
            background: '#F7931A',
            color: 'black',
            border: 'none',
            padding: '12px 32px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            🚀 Launch App
          </button>
        </a>
        
        <p style={{
          marginTop: '48px',
          fontSize: '12px',
          color: '#444',
          borderTop: '1px solid #222',
          paddingTop: '16px'
        }}>
          🟠 Built by Musk Team
        </p>
      </div>
    </div>
  );
}
