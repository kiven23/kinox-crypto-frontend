<script
  dangerouslySetInnerHTML={{
    __html: `
    const canvas = document.getElementById('matrix-canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      const w = (canvas.width = window.innerWidth);
      const h = (canvas.height = window.innerHeight);
      const cols = Math.floor(w / 20) + 1;
      const ypos = Array(cols).fill(0);
      const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

      function draw() {
        ctx.fillStyle = "rgba(0,0,0,0.05)";
        ctx.fillRect(0,0,w,h);
        ctx.fillStyle = "#0ff";
        ctx.font = "15px monospace";
        for(let i=0;i<cols;i++) {
          const text = chars[Math.floor(Math.random()*chars.length)];
          ctx.fillText(text, i*20, ypos[i]*15);
          if(ypos[i]*15 > h && Math.random() > .975) ypos[i] = 0;
          ypos[i]++;
        }
        requestAnimationFrame(draw);
      }
      draw();
      window.addEventListener('resize',()=>{canvas.width=innerWidth;canvas.height=innerHeight;});
    }
    `,
  }}
/>