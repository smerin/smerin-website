'use client';

export default function TestButton() {
  return (
    <button
      type="button"
      onClick={() => alert('clicked!')}
      style={{
        padding: '1rem',
        background: 'red',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        marginTop: '1rem',
      }}
    >
      Test Button (should alert)
    </button>
  );
}
