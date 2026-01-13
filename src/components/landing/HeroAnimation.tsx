
'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const FRAME_COUNT = 40;
const FRAME_PATH_PREFIX = '/sequence/ezgif-frame-';

const HeroAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  });

  const frameIndex = useTransform(scrollYProgress, (val) => Math.min(FRAME_COUNT - 1, Math.floor(val * FRAME_COUNT)));
  const springFrameIndex = useSpring(frameIndex, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.25], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.3, 0.5, 0.55], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.6, 0.8, 0.85], [0, 1, 1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.85, 0.9], [0, 1]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        setLoading(true);
        setError(null);
        const imagePromises: Promise<HTMLImageElement>[] = [];
        for (let i = 1; i <= FRAME_COUNT; i++) {
          const img = new Image();
          const frameNumber = i.toString().padStart(3, '0');
          img.src = `${FRAME_PATH_PREFIX}${frameNumber}.jpg`;

          const promise = new Promise<HTMLImageElement>((resolve, reject) => {
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error(`Failed to load frame ${frameNumber}`));
          });
          imagePromises.push(promise);
        }
        const loadedImages = await Promise.all(imagePromises);
        setImages(loadedImages);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message + ". Make sure the image sequence (ezgif-frame-001.jpg to ezgif-frame-040.jpg) exists in /public/sequence/.");
        } else {
          setError('An unknown error occurred while loading images.');
        }
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  const drawImage = (index: number) => {
    if (!canvasRef.current || images.length === 0 || index < 0 || index >= images.length) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;
    
    const img = images[Math.floor(index)];
    if (!img) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    
    // Implement object-fit: cover logic
    const imgAspectRatio = img.width / img.height;
    const canvasAspectRatio = canvasWidth / canvasHeight;
    
    let drawWidth = canvasWidth;
    let drawHeight = canvasHeight;
    let x = 0;
    let y = 0;

    if (imgAspectRatio > canvasAspectRatio) {
      // Image is wider than canvas, so height is the constraining dimension
      drawHeight = canvasHeight;
      drawWidth = drawHeight * imgAspectRatio;
      x = (canvasWidth - drawWidth) / 2;
    } else {
      // Image is taller than canvas, so width is the constraining dimension
      drawWidth = canvasWidth;
      drawHeight = drawWidth / imgAspectRatio;
      y = (canvasHeight - drawHeight) / 2;
    }
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, x, y, drawWidth, drawHeight);
  };
  
  useEffect(() => {
    if (images.length === 0 || loading) return;
    
    const unsubscribe = springFrameIndex.on('change', (latest) => {
      requestAnimationFrame(() => drawImage(latest));
    });

    return () => unsubscribe();
  }, [springFrameIndex, images, loading]);

  useEffect(() => {
    if (images.length === 0) return;

    const setCanvasSize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        const currentIndex = springFrameIndex.get();
        if(currentIndex >= 0 && currentIndex < images.length) {
          drawImage(currentIndex);
        }
      }
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Draw the first frame on initial load
    if (images.length > 0) {
      drawImage(0);
    }

    return () => window.removeEventListener('resize', setCanvasSize);
  }, [images, springFrameIndex]);

  return (
    <div ref={scrollRef} className="h-[400vh] w-full relative">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        
        {loading && <div className="absolute text-white/60 z-20">Loading animation...</div>}
        {error && <div className="absolute text-red-500 text-center z-20 p-4 max-w-md mx-auto">{error}</div>}

        {!loading && !error && (
            <div className="absolute inset-0 z-10 w-full h-full text-white/90 pointer-events-none">
                <motion.div style={{ opacity: opacity1 }} className="h-full flex flex-col items-center justify-center text-center p-4">
                  <h2 className="text-4xl md:text-7xl font-bold font-headline tracking-tight">SonicX. Pure Sound.</h2>
                </motion.div>
                 <motion.div style={{ opacity: opacity2 }} className="h-full flex flex-col items-start justify-center text-left container p-4">
                  <h2 className="text-3xl md:text-6xl font-bold font-headline tracking-tight max-w-md">Precision Engineering.</h2>
                </motion.div>
                 <motion.div style={{ opacity: opacity3 }} className="h-full flex flex-col items-end justify-center text-right container p-4">
                  <h2 className="text-3xl md:text-6xl font-bold font-headline tracking-tight max-w-md">Titanium Drivers.</h2>
                </motion.div>
                <motion.div style={{ opacity: opacity4 }} className="h-full flex flex-col items-center justify-center text-center p-4">
                  <h2 className="text-4xl md:text-7xl font-bold font-headline tracking-tight">Hear Everything.</h2>
                </motion.div>
            </div>
        )}
      </div>
    </div>
  );
};

export default HeroAnimation;
