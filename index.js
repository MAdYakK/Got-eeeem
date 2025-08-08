import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800"
  );

  const handleMeow = () => {
    setImage("https://media.giphy.com/media/Vuw9m5wXviFIQ/giphy.gif");
  };

  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "16px",
      minHeight: "100vh",
      backgroundColor: "#0b0b0b",
      color: "#fff",
      padding: "20px",
      textAlign: "center"
    }}>
      <h1 style={{fontSize: "24px", margin: 0}}>Kitty Meow</h1>
      <img
        src={image}
        alt="kitty or rick"
        style={{ maxWidth: "100%", borderRadius: "16px" }}
      />
      {image.includes("unsplash.com") && (
        <button
          onClick={handleMeow}
          style={{
            padding: "14px 28px",
            fontSize: "18px",
            background: "#ff69b4",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
          }}
        >
          Meow
        </button>
      )}
      <p style={{opacity: 0.7, fontSize: "12px"}}>Tap Meow to see a surprise 🐾</p>
    </main>
  );
}
