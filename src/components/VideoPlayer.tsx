import React from 'react'

interface VideoPlayerProps {
  url: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  // YouTube URL에서 Video ID 추출
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
      width: '100%'
    }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default VideoPlayer