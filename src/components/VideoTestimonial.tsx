import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, X } from "lucide-react";
import AnimatedBox from "./AnimatedBox";

interface VideoTestimonialProps {
  name: string;
  role: string;
  thumbnail: string;
  videoUrl: string;
  quote: string;
  profit: string;
  direction: "fromLeft" | "fromRight" | "fromTop" | "fromBottom";
}

const VideoTestimonial = ({
  name,
  role,
  thumbnail,
  videoUrl,
  quote,
  profit,
  direction
}: VideoTestimonialProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <AnimatedBox direction={direction} className="glass-card neon-border-hover rounded-2xl overflow-hidden">
        <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-transparent">
          <div 
            className="absolute inset-0 flex items-center justify-center cursor-pointer group"
            onClick={() => setIsPlaying(true)}
          >
            {/* Thumbnail gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            
            {/* Play button */}
            <motion.div
              className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-neon-blue"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="h-8 w-8 ml-1" fill="currentColor" />
            </motion.div>
          </div>
          
          {/* Profit badge */}
          <div className="absolute top-4 right-4 rounded-lg bg-neon-green/20 px-3 py-1 text-sm font-bold text-neon-green backdrop-blur-sm">
            {profit}
          </div>
        </div>
        
        <div className="p-6">
          <p className="text-muted-foreground mb-4 italic">"{quote}"</p>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-neon-green text-sm font-bold text-primary-foreground">
              {name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h4 className="font-semibold text-foreground">{name}</h4>
              <p className="text-xs text-muted-foreground">{role}</p>
            </div>
          </div>
        </div>
      </AnimatedBox>

      {/* Video Modal */}
      {isPlaying && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-xl p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsPlaying(false)}
        >
          <motion.div
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-card"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/50 text-foreground backdrop-blur-sm hover:bg-background/80 transition-colors"
              onClick={() => setIsPlaying(false)}
            >
              <X className="h-5 w-5" />
            </button>
            <iframe
              className="w-full h-full"
              src={`${videoUrl}?autoplay=1`}
              title={`${name} testimonial`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default VideoTestimonial;
