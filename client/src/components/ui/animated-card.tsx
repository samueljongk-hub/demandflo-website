import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  "data-testid"?: string;
}

export default function AnimatedCard({ children, className, delay = 0, "data-testid": testId }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ 
        initial: { duration: 0.6, delay },
        hover: { duration: 0.3, ease: "easeOut" }
      }}
      viewport={{ once: true }}
      data-testid={testId}
    >
      <Card className={cn("hover-lift shadow-lg border border-border", className)}>
        {children}
      </Card>
    </motion.div>
  );
}
