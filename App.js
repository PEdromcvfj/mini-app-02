import React, { useState } from "react";

const checklist = {
  Lead: [
    "Big Idea impactante",
    "Headline com benefício claro",
    "Identificação do avatar",
    "Criação de tensão ou mistério",
    "Promessa ousada",
    "Transição para história ou autoridade"
  ],
  História: [
    "Personagem principal (relatável)",
    "Problema real e intenso",
    "Momento de virada (descoberta)",
    "Emoção crua e vulnerabilidade",
    "Construção de autoridade ou validação"
  ],
  Mecanismo: [
    "Nome exclusivo do mecanismo",
    "Explicação simples e lógica",
    "Origem ou inspiração única",
    "Porque nunca funcionou antes",
    "Por que agora funciona (nova ciência ou descoberta)"
  ],
  Oferta: [
    "Apresentação do produto",
    "Benefícios principais",
    "Provas (testemunhos, estudos, números)",
    "Bônus e garantias",
    "Urgência ou escassez",
    "Chamada para ação (CTA)"
  ]
};

export default function App() {
  const [completed, setCompleted] = useState({});

  const toggle = (block, index) => {
    const key = `${block}-${index}`;
    setCompleted(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>🧠 Checklist de Copy VSL</h1>
      {Object.keys(checklist).map((block) => (
        <div key={block} style={{ marginBottom: 20 }}>
          <h2>{block}</h2>
          <ul>
            {checklist[block].map((item, i) => {
              const key = `${block}-${i}`;
              return (
                <li
                  key={key}
                  onClick={() => toggle(block, i)}
                  style={{
                    cursor: "pointer",
                    textDecoration: completed[key] ? "line-through" : "none",
                    color: completed[key] ? "green" : "black"
                  }}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}