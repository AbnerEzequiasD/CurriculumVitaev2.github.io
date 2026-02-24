@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 230 25% 7%;
    --foreground: 210 40% 93%;

    --card: 230 20% 11%;
    --card-foreground: 210 40% 93%;

    --popover: 230 20% 11%;
    --popover-foreground: 210 40% 93%;

    --primary: 160 100% 50%;
    --primary-foreground: 230 25% 7%;

    --secondary: 280 100% 65%;
    --secondary-foreground: 210 40% 98%;

    --muted: 230 15% 16%;
    --muted-foreground: 220 10% 55%;

    --accent: 195 100% 55%;
    --accent-foreground: 230 25% 7%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 210 40% 98%;

    --border: 230 15% 18%;
    --input: 230 15% 18%;
    --ring: 160 100% 50%;

    --radius: 0.75rem;

    --neon-glow: 160 100% 50%;
    --neon-magenta: 320 100% 60%;
    --neon-cyan: 195 100% 55%;
    --neon-yellow: 55 100% 55%;

    --sidebar-background: 230 25% 7%;
    --sidebar-foreground: 210 40% 93%;
    --sidebar-primary: 160 100% 50%;
    --sidebar-primary-foreground: 230 25% 7%;
    --sidebar-accent: 230 15% 16%;
    --sidebar-accent-foreground: 210 40% 93%;
    --sidebar-border: 230 15% 18%;
    --sidebar-ring: 160 100% 50%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground font-sans;
  }

  ::selection {
    background: hsl(160 100% 50% / 0.25);
    color: hsl(210 40% 98%);
  }
}

@layer utilities {
  .glow-green {
    box-shadow: 0 0 15px hsl(var(--neon-glow) / 0.4),
                0 0 40px hsl(var(--neon-glow) / 0.15);
  }

  .glow-text-green {
    text-shadow: 0 0 20px hsl(var(--neon-glow) / 0.5),
                 0 0 40px hsl(var(--neon-glow) / 0.2);
  }

  .glow-text-magenta {
    text-shadow: 0 0 20px hsl(var(--neon-magenta) / 0.5),
                 0 0 40px hsl(var(--neon-magenta) / 0.2);
  }

  .gradient-cyber {
    background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--neon-cyan)));
  }

  .gradient-magenta {
    background: linear-gradient(135deg, hsl(var(--neon-magenta)), hsl(var(--secondary)));
  }

  .bg-grid-pattern {
    background-image: 
      linear-gradient(hsl(var(--border) / 0.3) 1px, transparent 1px),
      linear-gradient(90deg, hsl(var(--border) / 0.3) 1px, transparent 1px);
    background-size: 60px 60px;
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
