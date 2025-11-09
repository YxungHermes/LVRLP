import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Love, Violeta Rose - Professional Wedding & Event Photography'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: '-50px',
            left: '-50px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: '#f9a8d4',
            opacity: 0.2,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: '#f472b6',
            opacity: 0.15,
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          <h1
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #ec4899 0%, #be185d 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              margin: 0,
              padding: '20px 40px',
            }}
          >
            Love, Violeta Rose
          </h1>
          <p
            style={{
              fontSize: 32,
              color: '#831843',
              margin: '20px 0 10px',
              opacity: 0.9,
            }}
          >
            Professional Wedding & Event Photography
          </p>
          <p
            style={{
              fontSize: 24,
              color: '#9d174d',
              margin: '10px 0',
              opacity: 0.7,
            }}
          >
            Capturing your most precious moments
          </p>
          <p
            style={{
              fontSize: 20,
              color: '#be185d',
              marginTop: '40px',
            }}
          >
            lovevioletarose.com
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
