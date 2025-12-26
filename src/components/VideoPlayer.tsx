import React from 'react'

interface VideoPlayerProps {
  url: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  const getVideoId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)
    return match ? match[1] : ''
  }

  const videoId = getVideoId(url)

  return (
    <div style={{ 
      position: 'relative', 
      paddingTop: '56.25%',
      marginBottom: '2rem',
      width: '100%',
      maxWidth: '100%'
    }}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        title="YouTube video player"
      />
    </div>
  )
}

export default VideoPlayer