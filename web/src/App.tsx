import { useState } from "react";
import { mockScan } from "../../shared/riskScore";

export default function App() {
  const [addr, setAddr] = useState("");
  const [result, setResult] = useState<any>(null);

  return (
    <div style={{ background: "#0b0d14", minHeight: "100vh", color: "#fff", padding: 40 }}>
      <h1>MoonScan</h1>
      <p>Scan before you ape.</p>
      <input
        value={addr}
        onChange={(e) => setAddr(e.target.value)}
        placeholder="0x..."
        style={{ padding: 10, width: 360 }}
      />
      <button onClick={() => setResult(mockScan(addr))} style={{ marginLeft: 10 }}>
        Scan
      </button>
      {result && (
        <pre style={{ marginTop: 20 }}>{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
}
