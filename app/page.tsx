export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: '#0B0E11',
      color: 'white',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '48px', 
          fontWeight: 'bold',
          color: '#F7931A'
        }}>
          Awesome DEX
        </h1>
        <p style={{ color: '#gray', marginTop: '16px' }}>
          Bitcoin-Only Decentralized Exchange
        </p>
        <button style={{
          marginTop: '24px',
          background: '#F7931A',
          color: 'black',
          border: 'none',
          padding: '12px 32px',
          borderRadius: '8px',
          fontSize: '18px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          🚀 Launch App
        </button>
        <p style={{ 
          marginTop: '48px', 
          fontSize: '12px', 
          color: '#gray',
          borderTop: '1px solid #333',
          paddingTop: '16px'
        }}>
          🟠 Built by Musk Team
        </p>
      </div>
    </div>
  );
}
