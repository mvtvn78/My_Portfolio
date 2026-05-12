import { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt, className = '', style = {} }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    if (!src) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            setImageSrc(src);
            setIsLoading(false);
            observer.unobserve(entry.target);
          };
          img.onerror = () => {
            setIsError(true);
            setIsLoading(false);
            observer.unobserve(entry.target);
          };
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  return (
    <div
      ref={imgRef}
      className={`relative bg-gray-200 overflow-hidden ${className}`}
      style={style}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse" />
      )}
      {isError && (
        <div className="absolute inset-0 bg-gray-400 flex items-center justify-center text-gray-600">
          <span>Failed to load</span>
        </div>
      )}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

export default LazyImage;
