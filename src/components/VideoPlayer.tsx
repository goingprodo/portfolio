import React, { useEffect } from 'react'

interface VideoPlayerProps {
  url: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  const getVideoId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)
    return match ? match[1] : ''
  }

  const videoId = getVideoId(url)

  useEffect(() => {
    // lite-youtube 웹 컴포넌트 로드
    if (typeof window !== 'undefined' && !customElements.get('lite-youtube')) {
      import('@justinribeiro/lite-youtube')
    }
  }, [])

  return (
    <div style={{ marginBottom: '2rem', width: '100%' }}>
      <lite-youtube videoid={videoId}></lite-youtube>
    </div>
  )
}

export default VideoPlayer