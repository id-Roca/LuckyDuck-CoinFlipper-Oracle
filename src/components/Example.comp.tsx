// import { useState } from "react"
// import { FaSync } from 'react-icons/fa'


// function FlipCard() {
//   const [isFlipped, setIsFlipped] = useState(false)

//   function handleFlip() {
//     setIsFlipped(prev => !prev)
//   }

//   return (
//     <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
//       <div
//         onClick={handleFlip}
//         style={{ width: '200px', height: '118px', perspective: '700px', cursor: 'pointer' }}
//       >
//         <div style={{
//           width: '100%', height: '100%', position: 'relative',
//           transformStyle: 'preserve-3d',
//           transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
//           transition: 'transform 0.5s ease',
//         }}>
//           <div style={{
//             position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
//             background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
//             borderRadius: '12px', display: 'flex', flexDirection: 'column',
//             alignItems: 'center', justifyContent: 'center', gap: '5px',
//           }}>
//             <span style={{ color: 'white', fontSize: '1.25rem', fontWeight: 700 }}>das Haus</span>
//             <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.73rem' }}>Tippe zum Umdrehen</span>
//           </div>
//           <div style={{
//             position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
//             background: 'linear-gradient(135deg, #10b981, #059669)',
//             borderRadius: '12px', display: 'flex', flexDirection: 'column',
//             alignItems: 'center', justifyContent: 'center', gap: '5px',
//             transform: 'rotateY(180deg)',
//           }}>
//             <span style={{ color: 'white', fontSize: '1.25rem', fontWeight: 700 }}>the house</span>
//             <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.73rem' }}>Tippe zum Umdrehen</span>
//           </div>
//         </div>
//       </div>
//       <button
//         onClick={handleFlip}
//         style={{
//           display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 20px',
//           background: isFlipped ? '#10b981' : '#6366f1',
//           color: 'white', border: 'none', borderRadius: '8px',
//           cursor: 'pointer', fontWeight: 600, transition: 'background 0.3s',
//         }}
//       >
//         <FaSync style={{ transform: isFlipped ? 'rotate(180deg)' : 'none', transition: 'transform 0.4s' }} />
//         Umdrehen
//       </button>
//     </div>
//   )
// }

// export default FlipCard</>
