
'use client';

import React, { useRef, useEffect, useState } from 'react';

const FRAME_COUNT = 148; // Total number of frames in the sequence
const FRAME_PATH_PREFIX = '/sequence/'; // Path to the image sequence in the public folder

const HeroAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Preload images
  useEffect(() => {
    const loadImages = async () => {
      try {
        const imagePromises: Promise<HTMLImageElement>[] = [];
        for (let i = 1; i <= FRAME_COUNT; i++) {
          const img = new Image();
          const frameNumber = i.toString().padStart(4, '0');
          img.src = `${FRAME_PATH_PREFIX}${frameNumber}.webp`;

          const promise = new Promise<HTMLImageElement>((resolve, reject) => {
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error(`Failed to load frame ${frameNumber}`));
          });
          imagePromises.push(promise);
        }
        const loadedImages = await Promise.all(imagePromises);
        setImages(loadedImages);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred while loading images.');
        }
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  // Draw initial frame and set up scroll listener
  useEffect(() => {
    if (loading || error || images.length === 0) return;

    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;
    
    const firstImage = images[0];
    canvas.width = firstImage.width;
    canvas.height = firstImage.height;
    context.drawImage(firstImage, 0, 0);

    const handleScroll = () => {
      const scrollFraction = window.scrollY / (window.innerHeight);
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.floor(scrollFraction * FRAME_COUNT))
      );

      requestAnimationFrame(() => {
         if (images[frameIndex]) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(images[frameIndex], 0, 0);
         }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial draw
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading, error, images]);
  
  // Handle resize
  useEffect(() => {
    if (loading || error || images.length === 0) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
        const context = canvas.getContext('2d');
        if (!context) return;
        
        const currentFrameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.max(0, Math.floor((window.scrollY / window.innerHeight) * FRAME_COUNT))
        );

        if (images[currentFrameIndex]) {
            canvas.width = images[currentFrameIndex].width;
            canvas.height = images[currentFrameIndex].height;
            context.drawImage(images[currentFrameIndex], 0, 0);
        }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial setup

    return () => window.removeEventListener('resize', handleResize);

  }, [loading, error, images]);

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}. Make sure the image sequence exists in /public/sequence/.</div>;
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
        <canvas 
            ref={canvasRef}
            className="w-full h-full object-cover"
            style={{ 
                visibility: loading ? 'hidden' : 'visible',
            }}
        />
        {loading && <div className="absolute text-white">Loading animation...</div>}
    </div>
  );
};

export default HeroAnimation;
